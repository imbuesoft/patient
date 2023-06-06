
const CardDesign = () => {
  return (
    <>
      <div className="card text-start" >
        <div className="card-header  bg-primary text-white px-1 d-flex gap-1 align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
          </svg>
          Tomato Pizza
        </div>
        <div className="card-body px-0">

          <div class="row g-3 px-3">
            <div className="col-auto col-sm-8 mt-2">
              <label htmlFor="item_name" className="">New Personalized item name</label>
              <input type="text" className="form-control mt-1" id="item_name" defaultValue="" placeholder="New Personalized item name" />
            </div>
            <div className="col-auto col-sm-4 mt-2">
              <label htmlFor="Amount" className="">Amount</label>
              <input type="number" className="form-control mt-1" id="Amount" />
            </div>
          </div>
          <div className="fw-semibold text-primary px-3 py-1 mt-3" style={{ background: "#e0eefb" }}>
            Cooking Instructions
          </div>
          <div className="col-auto col-sm-8 mt-2  px-3">
            <label htmlFor="instruction" className="">Enter cooking instructions</label>
            <input type="text" className="form-control mt-1" id="instruction" defaultValue="" placeholder="Example: extra spicy, etc." />
          </div>
          <div className="px-3 mt-3">
            <div>You can create the predefined cooking instructions for the admin panel</div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-exclamation-circle-fill me-2" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
              This item is excluded for discount
            </div>
          </div>
          <div className="fw-semibold text-primary px-3 py-1 mt-3" style={{ background: "#e0eefb" }}>
            Complimentary / NC item
          </div>
          <div className="px-3 d-flex gap-2 mt-3">
            <input className="form-check-input" type="checkbox" defaultValue id="check" />
            <label className="form-check-label" htmlFor="check">
              Mark this as complementary item?
            </label>
          </div>

        </div>
        <div className="card-footer text-body-secondary">
          <button className="btn btn-primary w-100">ADD</button>
        </div>
      </div>

    </>
  )
}

export default CardDesign