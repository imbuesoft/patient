import React from 'react';
import './myslidebar.css';

const Myslidebar = () => {
  return (
    <div className="sidebar sidebar-accordion">

      <div className="accordion accordion-sidebar" id="accordionExample">
        <div className="accordion-item">
          <span className='maintitle' >Categoties</span>
          <ul className="sidebar-menu">
            <li className="sidebar-menu-item">
              <hr />
              <button
                className="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-controls="collapseOne"
              >
                Fragrances
              </button>

              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="collapse show" id="home-collapse">
                    <ul className="sub-menu">
                      <li><button className='categoties-btn'>Men </button></li>
                      <li><button className='categoties-btn'>Unisex</button></li>
                      <li><button className='categoties-btn'>Women</button></li>
                    </ul>
                  </div>
                </div>
              </div>
              <button
                className="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-controls="collapseTwo"
              >
                Make-Up
              </button>

              <div
                id="collapseTwo"
                className="accordion-collapse collapse show"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="collapse show" id="home-collapse">
                    <ul className="sub-menu">
                      <li><button className='categoties-btn'>Men </button></li>
                      <li><button className='categoties-btn'>Unisex</button></li>
                      <li><button className='categoties-btn'>Women</button></li>
                    </ul>
                  </div>
                </div>
              </div>
              <button
                className="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-controls="collapseThree"
              >
                Make-Up
              </button>
              <div
                id="collapseThree"
                className="accordion-collapse collapse show"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="collapse show" id="home-collapse">
                    <ul className="sub-menu">
                      <li><button className='categoties-btn'>Men </button></li>
                      <li><button className='categoties-btn'>Unisex</button></li>
                      <li><button className='categoties-btn'>Women</button></li>
                    </ul>
                  </div>
                </div>
              </div>

            </li></ul>
        </div>
      </div>

    </div>
  )
}

export default Myslidebar
