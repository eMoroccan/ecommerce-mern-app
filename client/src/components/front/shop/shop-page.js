import ShopHeader from "./shop-header"
import { useEffect, useState } from "react"
import FilterSideBar from './filter-sidebar';
import Showcase from './products-showcase';

export default function ShopPage() {
    const [filters, setFilters] = useState({
        price: 5000,
        color: [],
        size: []
    })

    const handleFilterChange = (filterType, value) => {
        setFilters((prevFilters => ({
            ...prevFilters,
            [filterType]: value
        })));
    };

    useEffect(() => {
        document.title = 'Men';
    }, []);

    return (
        <>
            <div className="container mb-4">
                <ShopHeader />
                <div className="container">
                    <div className="row">
                        <FilterSideBar filters={filters} onFiltersChange={handleFilterChange} />
                        <Showcase filters={filters} />
                    </div>
                </div>
            </div>        
        </>
    )
}