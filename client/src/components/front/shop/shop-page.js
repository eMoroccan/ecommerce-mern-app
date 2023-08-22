import ShopHeader from "./shop-header"
import { useEffect } from "react"
import FilterSideBar from './filter-sidebar';

export default function ShopPage() {
    useEffect(() => {
        document.title = 'Men'
    }, []);

    return (
        <>
            <ShopHeader />
            <div className="container">
                <div className="row">
                    <FilterSideBar />
                </div>
            </div>
        </>
    )
}