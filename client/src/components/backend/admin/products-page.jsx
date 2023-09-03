import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
export default function ProductsManage() {
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(false);
    
    function formatDate(timestamp) {
        const date = new Date(timestamp);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    useEffect(() => {
        async function fetchProducts() {
            setLoader(true);
            const res = await axios.get('/api/products/get-all');
            setProducts(res.data);
            setLoader(false);
        }
        fetchProducts();
    }, []);

    return (
        <div className="col-md-9 mb-5">
            <h2 className="mt-5 mb-4 text-center">Products</h2>
            <Link to="/dashboard/manage-products/new" className="btn btn-primary m-4">Add a product</Link>
            <div className="bg-white shadow p-4">
                <div className="table-responsive">
                <table className="table" style={{border: "#e5e4e4 1px solid"}}>
                    <thead >
                        <tr >
                            <th className="text-capitalize bg-light">cover</th>
                            <th className="text-capitalize bg-light">title</th>
                            <th className="text-capitalize bg-light">price</th>
                            <th className="text-capitalize bg-light">date</th>
                            <th className="text-capitalize bg-light">actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loader ? (
                            <div className="d-flex justify-content-center align-items-center" style={{ height: "200px" }}>
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : (
                            products.map(product => (
                                <tr>
                                    <td><img src={product.cover} /></td>
                                    <td>{product.title}</td>
                                    <td>{product.price}$</td>
                                    <td>{formatDate(product.createdAt)}</td>
                                    <td>X</td>
                                </tr>
                            ))
                        )}     
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}