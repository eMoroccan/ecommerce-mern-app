import { useState, useEffect } from 'react';
import axios from 'axios';

export default function OrdersPage() {
    const [orders, setOrders] = useState([]);
    const [loader, setLoader] = useState(false);

    function formatDate(timestamp) {
        const date = new Date(timestamp);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    async function getCustomer(customerId) {
        const res = await axios.get('/api/users/get-id/' + customerId);
        const data = res.data;
        return (data.name);
    }

    useEffect(() => {
        const orders = async () => {
            setLoader(true);
            var response = await axios.get('/api/orders/get-all');
            const data = response.data;
            const ordersWithCustomerNames = await Promise.all(
                data.map(async (order) => {
                    const customerId = order.customer;
                    const customerName = await getCustomer(customerId);
                    return { ...order, customer: { name: customerName } };
                })
            );
            setOrders(ordersWithCustomerNames);
            setLoader(false);
        }
        orders();
    }, [])

    
    return (
        <div className="col-md-9 mb-5">
            <h2 className="m-5 text-center">Orders</h2>
            <div className="bg-white shadow p-4">
                <div className="table-responsive">
                <table className="table" style={{border: "#e5e4e4 1px solid"}}>
                    <thead >
                        <tr >
                            <th className="text-capitalize bg-light">ref</th>
                            <th className="text-capitalize bg-light">date</th>
                            <th className="text-capitalize bg-light">customer</th>
                            <th className="text-capitalize bg-light">status</th>
                            <th className="text-capitalize bg-light">total</th>
                            <th className="text-capitalize bg-light">actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loader ?
                            (   
                                <div className="d-flex justify-content-center align-items-center" style={{ height: "200px" }}>
                                    <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            ) : (
                                orders &&
                                    orders.map(order => (
                                        <tr>
                                            <td>{order._id.substring(0, 4)}</td>
                                            <td>{formatDate(order.createdAt)}</td>
                                            <td>{order.customer.name}</td>
                                            <td>{order.status ? "Delivered" : "Waiting for delivery"}</td>
                                            <td>{order.total}</td>
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