import {Link} from 'react-router-dom';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useLogout} from './../../hooks/useLogout';

export default function Navbar({user}) {
  const {logout} = useLogout();
  const [prodsInCart, setProdsInCart] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get('/api/carts/get-products/' + user.id);
        const data = res.data[0];
        let count = 0;

        data.forEach(prod => {
          count += prod.quantity;
        });

        if (count !== prodsInCart) {
          setProdsInCart(count);
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
        console.log(err.message);
      }
    };
    fetchData();
  }, [prodsInCart])

    const handleLogout = () => {
      logout();
    }

    return (
        <nav className="navbar navbar-expand-md py-4 navbar-light bg-light shadow">
            <div className="container">
                <Link to="/" className="navbar-brand order-md-0">RedAngel</Link>
                <button className="navbar-toggler order-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse order-cstm" id="navbar">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link to="/men" className="nav-link">Men</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/women" className="nav-link">Women</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/kids" className="nav-link">Kids</Link>
                        </li>
                    </ul>
                </div>
                <div className="order-cstm-1">
                    <button className="btn position-relative">
                        <i className="fa fa-shopping-cart"></i>
                        <span className="badge primary-color start-100 top-0 position-absolute translate-middle">
                          {loading ? (
                                <span className="spinner-border" style={{ width: '0.7rem', height: '0.7rem' }}></span>
                                ) : (
                                  prodsInCart
                                )
                          }
                        </span>
                    </button>
                    {user ? (
                      <>
                      <button className="btn position-relative">
                          <Link to="/dashboard" className="nav-link"><i className="fa fa-user"></i></Link>
                      </button>
                      <button className="btn position-relative" onClick={handleLogout}>
                        <i className="fa fa-sign-out"></i>
                      </button>
                      </>
                    ) : (
                      <button className="btn position-relative">
                          <Link to="/login" className="nav-link"><i className="fa fa-user"></i></Link>
                      </button>
                    )}
                </div>
            </div>
        </nav>
    )
}
