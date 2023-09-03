import {useState, useEffect} from 'react';
import axios from 'axios';

export default function Customers() {
    const [customers, setCustomers] = useState([]);
    const [loader, setLoader] = useState(false);
    
    useEffect(() => {
        async function fetchCustomers() {
            setLoader(true);
            const res = await axios.get('/api/users/get-all');
            setCustomers(res.data);
            setLoader(false);
        }
        fetchCustomers();
    }, []);

    return (
        <div className="col-md-9 mb-5">
            <h2 className="m-5 text-center">Customers</h2>
            <div className="bg-white shadow p-4">
                <div className="table-responsive">
                <table className="table" style={{border: "#e5e4e4 1px solid"}}>
                    <thead >
                        <tr >
                            <th className="text-capitalize bg-light">username</th>
                            <th className="text-capitalize bg-light">name</th>
                            <th className="text-capitalize bg-light">email</th>
                            <th className="text-capitalize bg-light">adresse</th>
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
                            customers.map(customer => (
                                <tr>
                                    <td>{customer.username}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.adresse}</td>
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