import axios from 'axios';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import { useAuthContext } from '../../../hooks/useAuthContext';
import jwt from 'jwt-decode';

export default function ShowcaseCard({prodId, productSlug, productImg, productName, productPrice}) {
  const {user} = useAuthContext();
  const userData = jwt(user);
  const [loading, setLoading] = useState(false);
  const onClickHandler = async () => {
    setLoading(true);
    const data = {
      "prod": {
        "_id": prodId,
        "quantity": 1
      }
    }
    await axios.patch("/api/carts/add-to/" + userData.id, data)
      .then(res => {
          setLoading(false);
          alert(res.status)

      })
      .catch(error => {
        setLoading(false);
        alert(error)
      });
    }
    return (
      <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "200px" }}>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  ) : (
        <div className="card shadow card-light m-1" key={prodId}>
            <img src={productImg} alt="" className="rounded-0 card-img-top" height="250px" width="250px" />
            <div className="card-body">
                <Link to={"/" + productSlug} className="card-title text-decoration-none" style={{fontWeight: "bold"}}>{productName}</Link>
                <h6 className="card-subtitle" style={{fontWeight: "lighter"}}>${productPrice}</h6>
            </div>
            <div className="card-footer bg-light" style={{border: "none"}}>
                <button className="btn btn-custom rounded-0" style={{width: "100%"}} onClick={onClickHandler} >Add to cart</button>
            </div>
        </div>
    )}
    </>
  )
}
