import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-md py-4 navbar-light bg-light shadow">
            <div className="container">
                <Link to="/" className="navbar-brand order-md-0">RedAngel</Link>    
                <div className="collapse navbar-collapse md-order-1">
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
                <div className="md-order-2">
                    <button className="btn position-relative">
                        <i class="fa fa-search"></i>
                    </button>
                    <button className="btn position-relative">
                        <i class="fa fa-shopping-cart"></i>
                        <span className="badge bg-secondary start-100 top-0 position-absolute translate-middle">0</span>
                    </button>
                    <button className="btn position-relative">
                        <i class="fa fa-user"></i>              
                    </button>
                </div>
            </div>
        </nav>
    )
}