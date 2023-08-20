import FrontBanner from './components/front/front-banner';
import Categories from './components/front/categories';
import FeaturedProducts from './components/front/featured-products';


export default function Homepage() {
    return (
        <>
            <FrontBanner />
            <Categories />
            <FeaturedProducts />
        </>
    )
}