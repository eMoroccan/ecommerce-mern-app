export default function FeaturedProd({FeaturedProdCover, FeaturedProdName, FeaturedProdPrice}) {
    return (
        <div className="card" style={{border: "none"}}>
            <img src={FeaturedProdCover} alt={FeaturedProdName} className="rounded-0 card-img-top" height="250px" width="250px" />
            <div className="card-body ps-0">
                <a href="#" className="card-title text-decoration-none" style={{fontWeight: "bold"}}>{FeaturedProdName}</a>
                <h6 className="card-subtitle" style={{fontWeight: "lighter"}}>${FeaturedProdPrice}</h6>
            </div>
        </div>
    )
}