import {Link} from 'react-router-dom';
import {Multiselect} from 'multiselect-react-dropdown';
import { useState } from 'react';
import axios from 'axios';

export default function ProductForm() {
    const [loader, setLoader] = useState(false);
    const [alert, setAlert] = useState(false);
    const [error, setError] = useState(false);
    const [prodTitle, setProdTitle] = useState("");
    const prodSlug = prodTitle.replace(/[\s,]+/g, '-').toLowerCase();
    const [desc, setDesc] = useState("");
    const [category, setCategory] = useState(null);
    const [featured, setFeatured] = useState(false);
    const [price, setPrice] = useState();
    const [progress, setProgress] = useState(0);
    const [sizes, setSizes] = useState([]);
    const [colors, setColors] = useState([]);
    const [images, setImages] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleSubmit = async (event) => {
        const form = event.target;
        // event.preventDefault();
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');

        requiredFields.forEach((field) => {
            if (field.value.trim() === '') {
            isValid = false;
            // You can add an error message or highlight the invalid field here
            }
        });

        if (!isValid) {
            // Handle the case when required fields are not filled out
            alert('Please fill out all required fields.');
            return;
        }
        const req = {
            "title": prodTitle,
            "slug": prodSlug,
            "cover": selectedFile,
            "productImages": images,
            "description": desc,
            "categoryName": category,
            "colors": colors,
            "sizes": sizes,
            "price": price,
            "featured": featured
        }
        try {
            setLoader(true);
            const res = await axios.post('/api/products/create', req);
            if (res.data.status === "ok") {
                setAlert(true);
                setTimeout(() => {
                    setAlert(false);
                }, 30000);
            } else {
                setError(true);
                setTimeout(() => {
                    setError(false);
                }, 30000);
            }
            setLoader(false);
        } catch(error) {
            alert(error.message);
            console.log(error.message);
        }
        form.reset();
    }

    const handleChange = (event, setter) => {
        setter(event.target.value);
      };
    const handleFileChange = (event) => {
      const file = event.target.files[0];

      if (file) {
        setSelectedFile(event.target.value);

        const xhr = new XMLHttpRequest();
        const progressBarContainer = document.getElementById("progress-bar");
        progressBarContainer.style.display = "block";

        xhr.upload.addEventListener("progress", (event) => {
          if (event.lengthComputable) {
            const percent = (event.loaded / event.total) * 100;
            setProgress(percent);
          }
        });

        xhr.onreadystatechange = () => {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
              const response = JSON.parse(xhr.responseText);
              const filename = response.filename;
              console.log(filename);
              // Display the uploaded image or perform further actions
            } else {
              console.error("Error:", xhr.status, xhr.statusText);
            }
            progressBarContainer.style.display = "none";
            setProgress(0);
          }
        };

        xhr.open("POST", "/upload", true);
        xhr.setRequestHeader("Content-Type", "multipart/form-data");
        xhr.send(file);
      }
    };

    const handleSizeSelect = (selected) => {
        setSizes(selected);
        console.log(sizes);
      };
    const handleColorsSelect = (selected) => {
        setColors(selected);
        console.log(colors);
      };

    // Product galery
    const handleFile2Change = (event) => {
        const fileList = event.target.files;
        const uploadedImages = Array.from(fileList).map((file) =>
        URL.createObjectURL(file)
        );
        setImages((prevImages) => [...prevImages, ...uploadedImages]);
    };

    const handleImageDrag = (event, index) => {
        event.dataTransfer.setData('text/plain', index);
    };

    const handleImageDrop = (event, dropIndex) => {
        event.preventDefault();
        const dragIndex = parseInt(event.dataTransfer.getData('text/plain'), 10);

        const newImages = [...images];
        const [draggedImage] = newImages.splice(dragIndex, 1);
        newImages.splice(dropIndex, 0, draggedImage);

        setImages(newImages);
    };

    const handleImageDragOver = (event) => {
        event.preventDefault();
    };

    const handleImageRemove = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
    };
    return (
        <div className="col-md-9 mb-5">
            <div className="pb-3 container my-3 pt-3">
                <Link to="/dashboard/manage-products" className="text-decoration-none"><i class="fas fa-arrow-left"></i></Link>
            </div>

            <div className="container bg-white shadow p-4">
                <h3 className='text-center p-2'>New product</h3>
                    <div className={loader ? "justify-content-center align-items-center" : "d-none"} style={{ height: "200px" }}>
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    <form className={loader ? "d-none" : "form-group g-2"} id='myForm' onSubmit={handleSubmit}>
                    <div className="form-floating bg-light shadow mb-3" style={{ fontSize: "13px", fontWeight: "normal" }}>
                        <input required type="text" className="form-control" id="title" placeholder='Product title' value={prodTitle} onChange={(event) => handleChange(event, setProdTitle)} />
                        <label htmlFor="title" className="">Product title</label>
                    </div>
                    <div class="form-group bg-light shadow mb-3">
                        <select required class="form-control" style={{ fontSize: "13px", fontWeight: "normal" }} value={category} onChange={(event) => handleChange(event, setCategory)}>
                            <option disabled selected value="none">Product category</option>
                            <option>men</option>
                            <option>women</option>
                            <option>kids</option>
                        </select>
                    </div>
                    <div class="form-group bg-light shadow mb-3">
                        <select required class="form-control" style={{ fontSize: "13px", fontWeight: "normal" }} value={featured} onChange={(event) => handleChange(event, setFeatured)}>
                            <option disabled selected value="false">Featured ?</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <div class="form-group bg-light shadow mb-3">
                        <Multiselect
                            isObject={false} required
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
                        <Multiselect required
                            isObject={false}
                            placeholder='Available colors for this product'
                            className='bg-white'
                            options={[
                                "white",
                                "black",
                                "grey",
                                "green",
                                "pink",
                                "red",
                                "blue",
                                "brown"
                            ]}
                            selectedValues={colors}
                            onSelect={handleColorsSelect}
                            onRemove={handleColorsSelect}
                        />
                    </div>
                    <div className="form-floating bg-light shadow mb-3" style={{ fontSize: "13px", fontWeight: "normal", zIndex: "0" }}>
                        <input required type="number" min="0" className="form-control" id="title" placeholder='Product title' value={price} onChange={(event) => handleChange(event, setPrice)} />
                        <label htmlFor="title" className="">Price</label>
                    </div>
                    <div className="form-floating bg-light shadow mb-3" style={{ fontSize: "13px", fontWeight: "normal", zIndex: "0" }}>
                        <textarea required className="form-control" id="description" placeholder="Product description" style={{ height: "150px" }} value={desc} onChange={(event) => handleChange(event, setDesc)}></textarea>
                        <label htmlFor="description">Product description</label>
                    </div>
                    <div className="bg-white shadow mb-3 py-2">
                        <label htmlFor="files" className="btn mx-2" style={{ fontSize: "13px", fontWeight: "normal", zIndex: "0", border: "1px solid" }}>
                            Product cover
                        </label>
                        <input required
                            id="files"
                            style={{ visibility: "hidden" }}
                            type="file"
                            accept="image/png, image/jpeg, image/jpg"
                            onChange={handleFileChange}
                        />
                        <div id="progress-bar" style={{ display: progress > 0 ? "block" : "none" }}>
                            <div id="progress" style={{ width: `${progress}%` }}></div>
                        </div>
                        {selectedFile && (
                            <div className='p-2'>
                                <img src={selectedFile} alt="Selected" style={{ width: "200px" }} />
                            </div>
                        )}
                    </div>

                    <div className="bg-white shadow mb-3 py-2">
                        <label
                            htmlFor="product-gallery"
                            className="btn mx-2"
                            style={{
                            fontSize: '13px',
                            fontWeight: 'normal',
                            zIndex: '0',
                            border: '1px solid',
                            }}
                        >
                            Product Gallery
                        </label>
                        <input
                            id="product-gallery"
                            style={{ visibility: 'hidden' }}
                            type="file"
                            accept="image/png, image/jpeg, image/jpg"
                            multiple
                            onChange={handleFile2Change}
                        />
                        <div className="d-flex flex-row">
                            {images.map((image, index) => (
                            <div
                                key={index}
                                className="m-2 position-relative"
                                draggable
                                onDragStart={(event) => handleImageDrag(event, index)}
                                onDrop={(event) => handleImageDrop(event, index)}
                                onDragOver={handleImageDragOver}
                            >
                                <img
                                src={image}
                                alt={`Product Image ${index + 1}`}
                                style={{ width: '120px', height: '120px' }}
                                />
                                <button
                                className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2"
                                onClick={() => handleImageRemove(index)}
                                >
                                X
                                </button>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="text-center">
                        <input type="submit" className="btn btn-primary" value="Add product" />
                    </div>

                </form>
                <div className={alert ? "alert alert-success" : "d-none"} role="alert">
                        Product added successfully
                    </div>
                    <div className={error ? "alert alert-danger" : "d-none"} role="alert">
                        There was an error while adding this product
                    </div>
            </div>
        </div>
    )
}
