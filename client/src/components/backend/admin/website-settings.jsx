export default function Settings() {
    return (
        <div className="col-md-9 p-5">
            <div className="container bg-white shadow p-4">
                <div className="container mb-4">
                    <div className="row">
                        <div className="col">
                            <h6>General settings</h6>
                        </div>
                    </div>
                    <hr />
                    <div className="row g-4">
                        <div className="col">
                            <div className="form-floating text-secondary" style={{fontSize:"13px", fontWeight:"normal"}}>
                                <input type="text" className="form-control" id="sitename" placeholder="Store name" />
                                <label htmlFor="sitename">Store name</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-floating text-secondary" style={{fontSize:"13px", fontWeight:"normal"}}>
                                <input type="text" className="form-control" id="niche" placeholder="Store niche" />
                                <label htmlFor="niche">Store niche</label>
                            </div>
                        </div>
                        <div className="row pt-3 px-0 m-0" >
                            <div className="col">
                                <div className="form-floating text-secondary" style={{ fontSize: "13px", fontWeight: "normal" }}>
                                    <textarea className="form-control" id="description" placeholder="Store description" style={{ height: "150px" }}></textarea>
                                    <label htmlFor="description">Store description</label>
                                </div>
                            </div>
                        </div>
                       
                        <div className="">
                            <button className="btn btn-primary float-end">Save</button> <br />
                        </div>
                    </div>
                    
                    
                </div>
                <div className="container mb-3">
                    <div className="row">
                        <div className="col">
                            <h6>Favicon</h6>
                        </div>
                    </div>
                    <hr />
                    <div className="row g-4">
                        <div className="col">                       
                            <input type="file" accept=".jpg, .jpeg, .png" className="form-control" id="imageUpload" placeholder="Upload an image" />
                        </div>
                        <div className="col">
                            <img src="" alt="" />
                        </div>
                        <div className="">
                            <button className="btn btn-primary float-end">Save</button> <br />
                        </div>
                    </div>
                    
                </div>
                <div className="container mb-3">
                    <div className="row">
                        <div className="col">
                            <h6>Account settings</h6>
                        </div>
                    </div>
                    <hr />
                    <div className="row g-4">
                        <div className="col">
                            <div className="form-floating text-secondary " style={{fontSize:"13px", fontWeight:"normal"}}>
                                <input type="text" className="form-control" id="sitename" placeholder="Username" />
                                <label htmlFor="sitename">Username</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-floating text-secondary" style={{fontSize:"13px", fontWeight:"normal"}}>
                                <input type="text" className="form-control" id="niche" placeholder="Email" />
                                <label htmlFor="niche">Email</label>
                            </div>
                        </div>
                        <div className="">
                            <button className="btn btn-primary float-end">Save</button> <br />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h6>Reset password</h6>
                        </div>
                    </div>
                    <hr />
                    <div className="row g-4">
                        <div className="col">
                            <div className="form-floating text-secondary" style={{fontSize:"13px", fontWeight:"normal"}}>
                                <input type="text" className="form-control" id="sitename" placeholder="New password" />
                                <label htmlFor="sitename">New password</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-floating text-secondary" style={{fontSize:"13px", fontWeight:"normal"}}>
                                <input type="text" className="form-control" id="niche" placeholder="Confirm new password" />
                                <label htmlFor="niche">Confirm new password</label>
                            </div>
                        </div>
                        <div className="">
                            <button className="btn btn-primary float-end">Save</button> <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}