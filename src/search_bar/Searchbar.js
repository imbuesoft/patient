import React from "react";
import "./Searchbar.css";
import CitySearch from "./CitySearch";
import SpecialitiesSearch from "./SpecialitiesSearch";

const Searchbar = () => {
  return (
    <div className="mt-5" style={{ backgroundImage: `url("https://www.practostatic.com/web-assets/home/assets/images/homepage.06859593240c3efd483fe48951cfe6ff.svg")`,height: "600px"}}>
      <div className="fw-bold text-center text-white pt-5"style={{ fontSize: "50px" }}>Your home for health</div>
      <div className="fs-2 text-center text-white pt-5">Find and Book</div>
      <div className="d-inline-flex mt-3" style={{ width: "900px", height: "60px", display: "flex" }}>
        <CitySearch/>
        <SpecialitiesSearch/>
      </div>
    </div>
  );
};

export default Searchbar;
