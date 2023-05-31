import React from "react";
import "./Searchbar.css";
import CitySearch from "./CitySearch";
import SpecialitiesSearch from "./SpecialitiesSearch";
import bg from './bg1.jpg'
const Searchbar = () => {
  return (
    <div className="mt-4 container-fluid" style={{ backgroundImage: `url(${bg})`, height: "500px", backgroundSize: 'cover', width: "94%", borderRadius: "20px" }}>
      <div className="fw-bold text-center text-white pt-4" style={{ fontSize: "50px" }}>Your home for health</div>
      <div className="fs-2 text-center text-white pt-5">Find and Book</div>
      <div className="d-inline-flex mt-3 searchArea" style={{ borderRadius: "30px", width: "900px", height: "60px", display: "flex" }}>
        <CitySearch />
        <SpecialitiesSearch />
      </div>
    </div>
  );
};

export default Searchbar;
