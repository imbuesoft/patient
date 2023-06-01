import React from "react";

const Filter = () => {
  return (
    <>
      <div style={{ width: "350px" }} className="ms-3 card mt-2">
        <div className="card-header" style={{ height: "50px" }}>
          <span style={{ fontSize: "22px" }}>Filters</span>
        </div>
        <div className="p-3">
          <p style={{ fontWeight: "700" }}>Brands</p>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div className="form-check mt-3">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              And (129)
            </label>
          </div><hr className="hr"/>
          <div className="form-check mt-3">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue=""
              id="flexCheckChecked"
              defaultChecked=""
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Antonio Banderas (1)
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
