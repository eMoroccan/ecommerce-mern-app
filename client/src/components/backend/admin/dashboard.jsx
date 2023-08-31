export default function Dashboard({username}) {
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
                                        $ Orders
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
                                            <span>0</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex justify-content-between">
                                            <span>This week</span>
                                            <span>0</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex justify-content-between">
                                            <span>This month</span>
                                            <span>0</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex justify-content-between">
                                            <span>This year</span>
                                            <span>0</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex justify-content-between">
                                            <span>All time</span>
                                            <span>0</span>
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
                                        $ Orders
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
                                            <span>0</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex justify-content-between">
                                            <span>This week</span>
                                            <span>0</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex justify-content-between">
                                            <span>This month</span>
                                            <span>0</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex justify-content-between">
                                            <span>This year</span>
                                            <span>0</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex justify-content-between">
                                            <span>All time</span>
                                            <span>0</span>
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