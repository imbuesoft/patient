
const CardDesign = () => {
  return (
    <>
      <div className="card text-start" style={{minWidth:"23rem", maxWidth:"30em"}}>
        <div className="card-header  bg-primary text-white px-1 d-flex gap-1 align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
          </svg>
          Tomato Pizza
        </div>
        <div className="card-body bg-body-secondary m-3 rounded-4">
          <div className="fw-semibold fs-5">Select your choice</div>
          <div className="text-secondary fs-6">Select up to 3 options</div>
          <div className="d-flex flex-wrap gap-2 mt-2">
            <div>
              <input type="checkbox" className="btn-check" id="Capsicum" autoComplete="off" />
              <label className="btn btn-outline-primary d-flex flex-column" htmlFor="Capsicum"><div>Capsicum</div><div>40</div></label>
            </div>
            <div>
              <input type="checkbox" className="btn-check" id="Panner" autoComplete="off" />
              <label className="btn btn-outline-primary d-flex flex-column" htmlFor="Panner"><div>Panner</div><div>40</div></label>
            </div>
            <div>
              <input type="checkbox" className="btn-check" id="Onion" autoComplete="off" />
              <label className="btn btn-outline-primary d-flex flex-column" htmlFor="Onion"><div>Onion</div><div>40</div></label>
            </div>
            <div>
              <input type="checkbox" className="btn-check" id="Tomato" autoComplete="off" />
              <label className="btn btn-outline-primary d-flex flex-column" htmlFor="Tomato"><div>Tomato</div><div>40</div></label>
            </div>
            <div>
              <input type="checkbox" className="btn-check" id="Extra Cheese" autoComplete="off" />
              <label className="btn btn-outline-primary d-flex flex-column" htmlFor="Extra Cheese"><div>Extra Cheese</div><div>40</div></label>
            </div>
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