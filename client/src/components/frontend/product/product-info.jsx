export default function Info({prodTitle, prodShipping, prodPrice, prodBrand, prodDesc}) {
  return (
    <div className="col-md">
      <div className="bg-white shadow p-4 mb-3">
        <h2>{prodTitle}</h2>
        <h5>{prodPrice}</h5>
        <h6 className="text-secondary">{prodShipping}</h6>
        <h6>Brand: {prodBrand}</h6>
        <div className="row gap-3">
            <input type="number" className="col form-control" />
            <select className="col form-select" aria-label="Select option">
              <option value="">Choose an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <select className="col form-select" aria-label="Select option">
              <option value="">Choose an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
        </div>
      </div>
      <button className="btn btn-custom rounded-0" style={{width: "100%"}}>ADD TO CART</button>
      <div class="bg-white shadow p-3 mt-4">
        <p>{prodDesc}</p>
      </div>
    </div>
  )
}
