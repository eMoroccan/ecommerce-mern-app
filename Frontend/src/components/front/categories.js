import Category from './category-card';

const cover = "https://cdn.youcan.shop/stores/d72606f04c6ff198c703892312f6cfa2/others/9fwq5JrbFYETt5pmDGJygi5ixHWJh7PQKa39ERMz.jpeg";
const desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laudantium placeat aut ex, hic dolores aliquid numquam provident quidem culpa, nemo explicabo, recusandae debitis nulla?";
const categoryName = "Men";
const categoryRoute = "/" + categoryName;

export default function Categories() {
    return (
        <div className="container py-3">
            <div className="row">
                <div className="col-sm">
                    <Category cover={cover} description={desc} categoryName={categoryName} categoryRoute={categoryRoute} />
                </div>
                <div className="col-sm">
                    <Category cover={cover} description={desc} categoryName={categoryName} categoryRoute={categoryRoute} />
                </div>
                <div className="col-sm">
                    <Category cover={cover} description={desc} categoryName={categoryName} categoryRoute={categoryRoute} />
                </div>
            </div>
        </div>
    )
}