import FeaturedProd from "./featured-product";

const FeaturedProdCover = "https://cdn.youcan.shop/stores/d72606f04c6ff198c703892312f6cfa2/others/9fwq5JrbFYETt5pmDGJygi5ixHWJh7PQKa39ERMz.jpeg";
const FeaturedProdName = "Nike air zoom pegasus 35";
const FeaturedProdPrice = 411.00;

export default function FeaturedProducts() {
    return (
        <div className="container mt-2 mb-5 pb-4">
            <h5 className="text-uppercase text-center" style={{fontWeight: "lighter", letterSpacing: "2px"}}>Featured Products</h5>
            <div className="container pt-3">
                <div className="row">
                    <div className="col-md">
                        <FeaturedProd FeaturedProdCover={FeaturedProdCover} FeaturedProdName={FeaturedProdName} FeaturedProdPrice={FeaturedProdPrice} />
                    </div>
                    <div className="col-md">
                        <FeaturedProd FeaturedProdCover={FeaturedProdCover} FeaturedProdName={FeaturedProdName} FeaturedProdPrice={FeaturedProdPrice} />
                    </div>
                    <div className="col-md">
                        <FeaturedProd FeaturedProdCover={FeaturedProdCover} FeaturedProdName={FeaturedProdName} FeaturedProdPrice={FeaturedProdPrice} />
                    </div>
                    <div className="col-md">
                        <FeaturedProd FeaturedProdCover={FeaturedProdCover} FeaturedProdName={FeaturedProdName} FeaturedProdPrice={FeaturedProdPrice} />
                    </div>
                </div>
            </div>
        </div>
    )
}