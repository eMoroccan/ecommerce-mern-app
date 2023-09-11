import axios from 'axios';
import {useState, useEffect} from 'react';
export default function Settings() {
    const [settings, setSettings] = useState({});

    const [sitename, setSitename] = useState("");
    const [niche, setNiche] = useState("");
    const [description, setDescription] = useState("");
    const [currency, setCurrency] = useState("");
    const [favicon, setFavicon] = useState("");

    useEffect(() => {
      setSitename(settings.sitename);
      setNiche(settings.niche);
      setDescription(settings.description);
      setFavicon(settings.favicon);
      setCurrency(settings.currency);
    }, [settings]);

    function handleChange(event, setter) {
      setter(event.target.value);
    }

    const updateGenralSettings = async () => {
      const req = {
        sitename: sitename,
        niche: niche,
        description: description
      };
      try {
        const res = await axios.patch('/api/settings/general-update', req);
        if (res.data.status === "ok") {
          alert("Settings updated successfully");
        } else {
          alert(res.data.error);
        }
      } catch(error) {
        alert("The has been an internal error while updating the website settings.")
      }
    }

    const updateFavicon = async () => {
      const req = {
        favicon: favicon,
      };
      try {
        const res = await axios.patch('/api/settings/favicon-update', req);
        if (res.data.status === "ok") {
          alert("Website' favicon updated successfully");
        } else {
          alert(res.data.error);
        }
      } catch(error) {
        alert("The has been an internal error while updating the website settings.")
      }
    }

    async function retrievingSettings() {
      const res = await axios.get('/api/settings/get');
      if (res.data.status !== "error") {
        setSettings(res.data);
      }
    }

    useEffect(() => {
      retrievingSettings();
    }, [])

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
                            <div className="text-secondary" style={{fontSize:"13px", fontWeight:"normal"}}>
                                <label htmlFor="sitename" className="form-label">Store name</label>
                                <input spellcheck="false" type="text" className="form-control" id="sitename" value={sitename} onChange={event => handleChange(event, setSitename)} />

                            </div>
                        </div>
                        <div className="col">
                            <div className="text-secondary" style={{fontSize:"13px", fontWeight:"normal"}}>
                                <label htmlFor="niche" className="form-label">Store niche (1 word)</label>
                                <input spellcheck="false" type="text" className="form-control" id="niche" value={niche} onChange={event => handleChange(event, setNiche)} />

                            </div>
                        </div>
                        <div className="col">
                            <div className="text-secondary" style={{fontSize:"13px", fontWeight:"normal"}}>
                                <label htmlFor="currency" className="form-label">Store currency</label>
                                <input spellcheck="false" type="text" className="form-control" id="currency" value={currency} onChange={event => handleChange(event, setCurrency)} />

                            </div>
                        </div>
                        <div className="row pt-3 px-0 m-0" >
                            <div className="col">
                                <div className="text-secondary" style={{ fontSize: "13px", fontWeight: "normal" }}>
                                    <label htmlFor="description" className="form-label">Store description</label>
                                    <textarea className="form-control" id="description" style={{ height: "150px" }} value={description} onChange={event => handleChange(event, setDescription)} ></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <button className="btn btn-primary float-end" onClick={updateGenralSettings}>Save</button> <br />
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
                            <input type="file" accept=".jpg, .jpeg, .png" className="form-control" id="imageUpload" placeholder="Upload an image" onChange={event => handleChange(event, setFavicon)} />
                        </div>
                        <div className="col">
                            <img src={favicon} alt="" width="64px" height="64px" />
                        </div>
                        <div className="">
                            <button className="btn btn-primary float-end" onClick={updateFavicon}>Save</button> <br />
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
