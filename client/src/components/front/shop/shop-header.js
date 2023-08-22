import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function ShopHeader() {
    const location = useLocation().pathname;
    const removeFirstLetter = (str) => {
        return str.substring(1);        
    };

    return (
    <div className="container my-3 pt-3">
        <div className="pb-3"><Link to="/" className="text-decoration-none">Home</Link><span className='text-capitalize'> / {removeFirstLetter(location)}</span></div>
        <div className="align-items-center d-flex bg-secondary" style={{height: "20vh"}}>
            <h1 className='p-auto ms-5 text-white text-uppercase'>{removeFirstLetter(location)}</h1>
        </div>
    </div>
    )
}