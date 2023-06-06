
const CardDesign = () => {
  return (
    <>
      <div className="card text-start">
        <div className="card-header  bg-primary text-white px-1 d-flex gap-1 align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
          </svg>
          Pista Barfi
        </div>
        <div className="card-body">
          <div className="">
            <label htmlFor="quantity" className="form-label">Quantity</label>
            <input type="email" className="form-control" defaultValue={1} id="quantity" placeholder="" />
            <div className="d-flex gap-2 mt-2">
              <button className="btn btn-outline-secondary">2</button>
              <button className="btn btn-outline-secondary">3</button>
              <button className="btn btn-outline-secondary">4</button>
              <button className="btn btn-outline-secondary">5</button>
              <button className="btn btn-outline-secondary">6</button>
              <button className="btn btn-outline-secondary">7</button>
            </div>
          </div>
          <div className="mt-2">
            <label htmlFor="price" className="form-label">Price</label>
            <input type="number" className="form-control" id="price" placeholder="" />
          </div>
          <div className="mt-2">
            <label htmlFor="rate" className="form-label">Rate</label>
            <input type="number" className="form-control" id="rate" placeholder="" />
          </div>
        </div>
        <div className="card-footer text-body-secondary">
          <button className="btn btn-primary w-100">SAVE</button>
        </div>
      </div>

    </>
  )
}

export default CardDesign