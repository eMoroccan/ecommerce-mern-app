import {useState} from 'react';

export default function FilterSideBar({filters, onFiltersChange}) {

    const handlePriceChange = (e) => {
        const price = parseInt(e.target.value);
        onFiltersChange("price", price);
    }
    const handleColorChange = (e) => {
        const color = e.target.value;
        const updatedColors = [...filters.color];
        const index = updatedColors.indexOf(color);
        if (index === -1) {
            updatedColors.push(color);
        } else {
            updatedColors.splice(index, 1);
        }

        onFiltersChange("color", updatedColors);
    }
    const handleSizeChange = (e) => {
        const size = e.target.value;
        const updatedSizes = [...filters.size];
        const index = updatedSizes.indexOf(size);
        if (index === -1) {
            updatedSizes.push(size);
        } else {
            updatedSizes.splice(index, 1);
        }

        onFiltersChange("size", updatedSizes);
         
    }

    return (
                <div className="col-md-3 pe-5">
                    <div className="container mb-2">
                        <div className="row">
                            <h5 className="mt-4 mb-3">FILTERS</h5> <br />
                            <h6 className="ps-0" style={{fontWeight: "normal"}}>PRICE</h6> 
                            <hr className="mb-4" />
                            <input
                                type="range" 
                                className="form-range custom-range" 
                                id="priceRange" 
                                min={100} 
                                max={5000} 
                                onChange={handlePriceChange}
                            />
                             <div className="d-flex justify-content-center position-relative mb-5">
                                <span
                                className="position-absolute pb-1"
                                style={{ bottom: "-25px", left: `${(filters.price / 5000) * 100}%`, transform: "translateX(-50%)" }}
                                >${filters.price}</span>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <h6 className="ps-0" style={{fontWeight: "normal"}}>COLOR</h6>  
                            <hr className="mb-2" />
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="redColor" value="white" onChange={handleColorChange} />
                                <label className="form-check-label" htmlFor="redColor">White</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="blueColor" value="black" onChange={handleColorChange} />
                                <label className="form-check-label" htmlFor="blueColor">Black</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="greenColor" value="grey" onChange={handleColorChange} />
                                <label className="form-check-label" htmlFor="greenColor">Grey</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="redColor" value="green" onChange={handleColorChange} />
                                <label className="form-check-label" htmlFor="redColor">Green</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="blueColor" value="pink" onChange={handleColorChange} />
                                <label className="form-check-label" htmlFor="blueColor">Pink</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="greenColor" value="red" onChange={handleColorChange} />
                                <label className="form-check-label" htmlFor="greenColor">Red</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="redColor" value="blue" onChange={handleColorChange} />
                                <label className="form-check-label" htmlFor="redColor">Blue</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="blueColor" value="brown" onChange={handleColorChange} />
                                <label className="form-check-label" htmlFor="blueColor">Brown</label>
                            </div>
                           
                        </div>
                        <div className="row">
                            <h6 className="ps-0" style={{fontWeight: "normal"}}>SIZE</h6>  
                            <hr className="mb-2" />
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="redColor" value="l" onChange={handleSizeChange} />
                                <label className="form-check-label" htmlFor="redColor">L</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="blueColor" value="xl" onChange={handleSizeChange} />
                                <label className="form-check-label" htmlFor="blueColor">XL</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="greenColor" value="m" onChange={handleSizeChange} />
                                <label className="form-check-label" htmlFor="greenColor">M</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="greenColor" value="x" onChange={handleSizeChange} />
                                <label className="form-check-label" htmlFor="greenColor">X</label>
                            </div>
                        </div>
                    </div>
                </div>
    )
}