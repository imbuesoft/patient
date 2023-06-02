import React from "react";
import "./Searchbar.css";

import { ReactComponent as Search } from './assets/search.svg'
import { ReactComponent as Location } from './assets/location.svg'

// https://bbbootstrap.com/snippets/bootstrap-task-list-search-70202001


import SearchBox from "./SearchBox";

import bg from './assets/bg1.jpg'

const Searchbar = () => {
  return (
    <>
      <div className="search-area-container position-relative">

        <img className="search-area-image-container z-0 position-absolute" src={bg} alt="background" role="none" />
        <div className="position-absolute h-100 w-100" style={{ background: "#00000022", backdropFilter:"blur(3px)" }}></div>
        <div className="z-3 position-relative">
          <div className="d-flex flex-column flex-md-row justify-content-center mt-5 px-3 gap-0 gap-md-2 gap-xl-4">
            <div className="search-box-1">
              <SearchBox {...{
                Svg: <Location fill="#00000099" />,
                placeholder: "Search your Location ...",
              }} />
            </div>
            <div className="search-box-2">
              <SearchBox {...{
                Svg: <Search fill="#00000099" />,
                placeholder: "Search doctor, clinics, hospitals, etc.",
              }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
