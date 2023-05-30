import React, { useState } from "react";
import cityData from "./cityList.json";
import "./Searchbar.css";

const Searchbar = () => {
  const [click, setClick] = useState(false);
  const [input, setInput] = useState("");

  const searchItem = cityData.filter((i) => {
    if (input == "") {
      return i;
    } else if (i.state.toLowerCase().includes(input.toLowerCase())) {
      return i;
    } else {
      // i.city.forEach((item) => {
      //   if (item.toLowerCase().includes(input.toLowerCase())) return item;
      // });
    }
  });

  console.log(searchItem);

  const handleClick = () => {
    setClick(true);
  };

  return (
    <div
      className="mt-5"
      style={{
        backgroundImage: `url("https://www.practostatic.com/web-assets/home/assets/images/homepage.06859593240c3efd483fe48951cfe6ff.svg")`,
        height: "600px",
      }}
    >
      <div
        className="fw-bold text-center text-white pt-5"
        style={{ fontSize: "50px" }}
      >
        Your home for health
      </div>
      <div className="fs-2 text-center text-white pt-5">Find and Book</div>

      <div
        className="d-inline-flex mt-3"
        style={{ width: "900px", height: "60px", display: "flex" }}
      >
        <div className="ct input-group bg-white border-end w-75">
          <i className="bi bi-geo-alt fs-5 p-2 mx-2 my-auto"></i>
          <input
            className="ctSearch border-0 fs-5"
            value={input}
            placeholder="Search your Location ..."
            onChange={(e) => setInput(e.target.value)}
            onClick={handleClick}
          />
          {/* <input className="ctSearch border-0 fs-5" type="text" placeholder="City"/> */}
          <div className="mt-4 suggestionBox overflow-auto">
            {click
              ? searchItem.map((i) => {
                  return (
                    <div className="border  loc">
                      {/* <div className='fs-4 text-start'>{i.city}</div> */}
                      <div className="stateNm py-2 fs-5 text-start ms-3">
                        {i.state}
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>

        <div className="input-group bg-white">
          <i className="bi bi-search fs-5 p-2 mx-2 my-auto"></i>
          <input
            className="drSearch border-0 fs-5"
            type="text"
            placeholder="Search doctor, clinics, hospitals, etc."
          />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
