import React from "react";
const Menu = () => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="card">
              <div className="card-body fw-bold">Categories</div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  Fragrance
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse"
              >
                <a>
                  <div className="accordion-body py-1">
                    <p>Men</p>
                  </div>
                  <div className="accordion-body py-1">
                    <p>Unisex</p>
                  </div>
                  <div className="accordion-body py-1">
                    <p>Women</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  Makeup
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  <a>
                    <div className="accordion-body py-1">
                      <p>Lipstick</p>
                    </div>
                    <div className="accordion-body py-1">
                      <p>Eyeliner</p>
                    </div>
                    <div className="accordion-body py-1">
                      <p>Eye shadow</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Hair
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  <a>
                    <div className="accordion-body py-1">
                      <p>Hair oil</p>
                    </div>
                    <div className="accordion-body py-1">
                      <p>Hair conditioner</p>
                    </div>
                    <div className="accordion-body py-1">
                      <p>Hair spray</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
