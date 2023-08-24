export default function ShowcaseCard({key, productSlug, productImg, productName, productPrice}) {
    return (
        <div className="card shadow card-light m-1" key={key}>
            <img src={productImg} alt="" className="rounded-0 card-img-top" height="250px" width="250px" />
            <div className="card-body">
                <a href={productSlug} className="card-title text-decoration-none" style={{fontWeight: "bold"}}>{productName}</a>
                <h6 className="card-subtitle" style={{fontWeight: "lighter"}}>${productPrice}</h6>
            </div>
            <div className="card-footer bg-light" style={{border: "none"}}>
                <button className="btn btn-custom rounded-0" style={{width: "100%"}}>Add to cart</button>
            </div>
        </div>
    )
}