import {Link} from 'react-router-dom';

export default function Category({cover, description, categoryName, categoryRoute}) {
    return (
        <div className="card" style={{ border: 'none' }}>
            <img src={cover} alt={categoryName} className="rounded-0 card-img-top" width="250px" height="350px" />
            <div className="card-body ps-0">
                <h5 className="card-title text-uppercase">{categoryName}'s glasses collection</h5> 
                <p className="card-text"> {description} </p>
                <Link to={categoryRoute} className="btn btn-secondary text-uppercase px-3 rounded-0">{categoryName} Shop</Link>
            </div>
        </div>
    )
}