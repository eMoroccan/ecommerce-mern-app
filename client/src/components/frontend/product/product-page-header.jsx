import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function ProductHeader({category}) {
    const catSlug = "/" + category;
    const location = useLocation().pathname;
    const removeFirstLetter = (str) => {
        return str.substring(1);
    };

    return (
        <div className="pb-3 container my-3 pt-3">
          <Link to="/" className="text-decoration-none">Home</Link>
          <span className='text-capitalize'> / </span>
          <Link to={catSlug} className="text-decoration-none text-capitalize">{category}</Link>
          <span className='text-capitalize'> / {removeFirstLetter(location)}</span>
        </div>
    )
}
