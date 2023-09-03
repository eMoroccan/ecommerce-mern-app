import {Link} from 'react-router-dom';
import {Multiselect} from 'multiselect-react-dropdown';
import { useState } from 'react';

export default function ProductForm() {
    const [sizes, setSizes] = useState([])
    const handleSizeSelect = (selected) => {
        setSizes(selected);
        console.log(sizes);
      };
    return (
        <div className="col-md-9">
            <div className="pb-3 container my-3 pt-3">
                <Link to="/dashboard/manage-products" className="text-decoration-none"><i class="fas fa-arrow-left"></i></Link>
            </div>

            <div className="container bg-white shadow p-4">
                <h3 className='text-center p-2'>New product</h3>
                <form className="form-group g-2">
                    <div className="form-floating bg-light shadow mb-3" style={{ fontSize: "13px", fontWeight: "normal" }}>
                        <input type="text" className="form-control" id="title" placeholder='Product title' />
                        <label htmlFor="title" className="">Product title</label>
                    </div>
                    <div className="form-floating bg-light shadow mb-3" style={{ fontSize: "13px", fontWeight: "normal" }}>
                        <input type="text" className="form-control" id="title" placeholder='Product title' />
                        <label htmlFor="title" className="">Product slug</label>
                    </div>
                    <div class="form-group bg-light shadow mb-3">
                        <select class="form-control" id="exampleSelect">
                            <option disabled selected>Product category</option>
                            <option>Men</option>
                            <option>Women</option>
                            <option>Kids</option>
                        </select>
                    </div>
                    <div class="form-group bg-light shadow mb-3">
                        <Multiselect 
                            isObject={false}
                            placeholder='Available sizes for this product'
                            className='bg-white'
                            options={[
                                "x",
                                "xl",
                                "l",
                                "m"
                            ]}
                            selectedValues={sizes}
                            onRemove={handleSizeSelect}
                            onSelect={handleSizeSelect}
                        />
                    </div>
                    <div class="form-group bg-light shadow mb-3">
                        <Multiselect 
                            isObject={false}
                            placeholder='Available colors for this product'
                            className='bg-white'
                            options={[
                                "x",
                                "xl",
                                "l",
                                "m"
                            ]}
                            selectedValues={sizes}
                            onSelect={handleSizeSelect}
                            onRemove={handleSizeSelect}
                        />
                    </div>
                    <div className="form-floating bg-light shadow mb-3" style={{ fontSize: "13px", fontWeight: "normal", zIndex: "0" }}>
                        <input type="number" className="form-control" id="title" placeholder='Product title' />
                        <label htmlFor="title" className="">Price</label>
                    </div>
                    <div className="form-floating bg-light shadow mb-3" style={{ fontSize: "13px", fontWeight: "normal", zIndex: "0" }}>
                        <textarea className="form-control" id="description" placeholder="Product description" style={{ height: "150px" }}></textarea>
                        <label htmlFor="description">Product description</label>
                    </div>
                </form>
            </div>
        </div>
    )
}