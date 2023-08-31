export default function ProductsManage() {
    return (
        <div className="col-md-9 mb-5">
            <h2 className="mt-5 mb-4 text-center">Products</h2>
            <button className="btn btn-primary m-4">Add a product</button>
            <div className="bg-white shadow p-4">
                <div className="table-responsive">
                <table className="table" style={{border: "#e5e4e4 1px solid"}}>
                    <thead >
                        <tr >
                            <th className="text-capitalize bg-light">checkbox</th>
                            <th className="text-capitalize bg-light">cover</th>
                            <th className="text-capitalize bg-light">price</th>
                            <th className="text-capitalize bg-light">date</th>
                            <th className="text-capitalize bg-light">actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>sdfsd</td>
                            <td>sldfklssfg</td>
                            <td>sdkgsd</td>
                            <td>sdgklsd</td>
                            <td>sdlfks</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}