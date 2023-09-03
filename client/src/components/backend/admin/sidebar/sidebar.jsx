import { useLocation, Link, Outlet } from 'react-router-dom';
import Svg from './svgs';

export default function Sidebar() {
    const location = useLocation().pathname;
    const active = () => {
        if (location === "/dashboard/" || location === "/dashboard") {
            return ("active");
        }
    }
    const active1 = () => {
        if (location === "/dashboard/orders" || location === "/dashboard/orders/") {
            return ("active");
        }
    }
    const active2 = () => {
        if (location === "/dashboard/manage-products" || location === "/dashboard/manage-products/") {
            return ("active");
        }
    }
    const active3 = () => {
        if (location === "/dashboard/customers" || location === "/dashboard/customers/") {
            return ("active");
        }
    }
    const active4 = () => {
        if (location === "/dashboard/settings" || location === "/dashboard/settings/") {
            return ("active");
        }
    }
    return (
        <div className="container m-0 p-0">
            <Svg />
            <div className="row" style={{minHeight: "100vh"}}>

           
        <div className="col-md-3 d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sdbar navbar navbar-expand-md">
            <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar" aria-controls="sidebar" aria-label="Toggle navigation">
                    <span className="fas fa-bars fa-2x"></span>
            </button>
    
            <div className="collapse navbar-collapse" style={{width:"100%"}} id="sidebar">
            <ul style={{width:"100%"}} className="nav nav-pills flex-column mb-auto">
           
            <li>
                <Link to="/dashboard" className={"nav-link text-white " + active()}>
                <svg className="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                Dashboard
                </Link>
            </li>
            <li>
                <Link to="/dashboard/orders" className={"nav-link text-white " + active1()}>
                <svg className="bi me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
                Orders
                </Link>
            </li>
            <li>
                <Link to="/dashboard/manage-products" className={"nav-link text-white " + active2()}>
                <svg className="bi me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
                Products
                </Link>
            </li>
            <li>
                <Link to="/dashboard/customers" className={"nav-link text-white " + active3()}>
                <svg className="bi me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
                Customers
                </Link>
            </li>
            <li>
                <Link to="/dashboard/settings" className={"nav-link text-white " + active4()}>
                <svg className="bi me-2" width="16" height="16"><use xlinkHref="#gear-fill"></use></svg>
                Settings
                </Link>
            </li>
            </ul>
            </div>
            <hr />
            </div>
          <Outlet />
          
        </div>
      </div>
    )
}