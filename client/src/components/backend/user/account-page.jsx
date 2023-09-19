import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Account({ user }) {
    const [datax, setData] = useState([]);
    const [prods, setProds] = useState([]);

    useEffect(() => {
        async function getCartProducts() {
            try {
                const res = await axios.get('/api/carts/get-products/' + user.id);
                const products = res.data[0];
                const aggregatedData = aggregateProductIds(products);
                setData(aggregatedData);
            } catch (error) {
                console.error('Error fetching cart products:', error);
            }
        }

        getCartProducts();
    }, [user.id]);

    useEffect(() => {
        async function fetchProductData() {
            try {
                const productDataPromises = datax.map(async (product) => {
                    const res = await axios.get(`/api/products/get-id/${product.id}`);
                    return res.data;
                });
                const productDataResponses = await Promise.all(productDataPromises);
                const updatedProds = productDataResponses.map((data, index) => ({
                    productData: data,
                    quantity: datax[index].quantity
                }));
                setProds(updatedProds);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        }

        if (datax.length > 0) {
            fetchProductData();
        }
    }, [datax]);

    function aggregateProductIds(products) {
        const aggregatedData = {};

        for (const product of products) {
            if (aggregatedData.hasOwnProperty(product._id)) {
                aggregatedData[product._id].quantity++;
            } else {
                aggregatedData[product._id] = {
                    id: product._id,
                    quantity: 1
                };
            }
        }

        return Object.values(aggregatedData);
    }

    return (
        <div className="container">
            <div className="container my-3 pt-3">
                <div className="pb-3"><Link to="/" className="text-decoration-none">Home</Link><span className='text-capitalize'> / Account</span></div>
            </div>
            <div className="row text-center">
                <h2>My Account</h2>
            </div>
            <div className="row g-4">
                <div className="col-md-8">
                    <h3>My Cart & Orders</h3>
                    <hr />
                    {prods.map((product, index) => (
                        <div key={index}>
                            <div class="d-flex justify-content-between pe-5">
                            <div class="">
                                <div class="d-flex justify-content-between gap-2">
                                    <div class="thumbnail border border-divider p-1 rounded">
                                        <img style={{maxWidth:"6rem"}} src={product.productData.cover} alt={product.productData.title} />
                                    </div>
                                    <div class="order-item-info">
                                        <div class="order-item-name font-semibold">{product.productData.title}</div>
                                        <div class="order-item-qty" style={{fontSize:"0.9em"}}>{product.quantity} x ${product.productData.price}</div>
                                    </div>
                                </div>
                            </div>
                                    <div class="order-total col-span-1">
                                    <div class="order-total-value font-bold">Total: ${product.productData.price * product.quantity}</div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>
                <div className="col-md-4">
                    <h3>Account details</h3>
                    <hr />
                    <div class="account-details-name d-flex" style={{gap: ".2rem"}}>Username: <div></div>
                    <div>Harish</div></div>
                    <div class="account-details-name d-flex" style={{gap: ".2rem"}}>Email: <div></div>
                    <div>Harish</div></div>
                    <div class="account-details-name d-flex" style={{gap: ".2rem"}}>Adresse: <div></div>
                    <div>Harish</div></div>
                </div>
            </div>
       </div>
    );
}