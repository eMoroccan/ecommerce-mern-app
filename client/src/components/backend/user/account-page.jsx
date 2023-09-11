import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Dashboard({username}) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function fetchOrders() {
            const response = await axios.get('/api/orders/get-all');
            setOrders(response.data);
        }

        fetchOrders();
    }, [])
    // filtering 
    const today = new Date();
    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1)));
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const startOfYear = new Date(today.getFullYear(), 0, 1);
    const allTime = new Date(0);
    function getOrdersCount(orders, start) {    
            return orders.filter(order => {
              return new Date(order.createdAt) >= start;
            }).length;
          }
          
    function getEarnings(orders, start) {        
            return orders.filter(order => {
              return new Date(order.createdAt) >= start; 
            })
            .reduce((total, order) => {
              return total + order.total;
            }, 0);
          }
    return (
        <div className="col-md-9">
        <h2 className="m-5 text-center">Welcome back {username}!</h2>
        <table className="table bg-white shadow" style={{border: "#e5e4e4 1px solid"}}>
            <thead className="thead-light">
                <tr>
                    <th colspan="2" className="p-3">Overview dashboard</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="col-md-6 p-3">
                        <table className="table table-bordered ">
                            <thead >
                                <tr>
                                    <th className="bg-light">
                                         Orders
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="bg-light">
                                    <table className="table table-hover table-bordered" style={{border: "1px solid smokewhite"}}>
                            
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="d-flex justify-content-between">
                                            <span>Today</span>
                                            <span>{getOrdersCount(orders, startOfToday)}</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex justify-content-between">
                                            <span>This week</span>
                                            <span>{getOrdersCount(orders, startOfWeek)}</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex justify-content-between">
                                            <span>This month</span>
                                            <span>{getOrdersCount(orders, startOfMonth)}</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex justify-content-between">
                                            <span>This year</span>
                                            <span>{getOrdersCount(orders, startOfYear)}</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex justify-content-between">
                                            <span>All time</span>
                                            <span>{getOrdersCount(orders, allTime)}</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    <td className="col-md-6 p-3">
                        <table className="table table-bordered ">
                            <thead >
                                <tr>
                                    <th className="bg-light">
                                        $ Earnings
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="bg-light">
                                    <table className="table table-hover table-bordered" style={{border: "1px solid smokewhite"}}>
                            
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="d-flex justify-content-between">
                                            <span>Today</span>
                                            <span>{getEarnings(orders, startOfToday)}</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex justify-content-between">
                                            <span>This week</span>
                                            <span>{getEarnings(orders, startOfWeek)}</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex justify-content-between">
                                            <span>This month</span>
                                            <span>{getEarnings(orders, startOfMonth)}</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex justify-content-between">
                                            <span>This year</span>
                                            <span>{getEarnings(orders, startOfYear)}</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex justify-content-between">
                                            <span>All time</span>
                                            <span>{getEarnings(orders, allTime)}</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    );
}