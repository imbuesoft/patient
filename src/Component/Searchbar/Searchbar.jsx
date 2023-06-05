import bg from './assets/bg1.jpg'

import { useState } from 'react'
import { ReactComponent as Search } from './assets/search.svg'
import { ReactComponent as Location } from './assets/location.svg'

import SearchBox from "./SearchBox/SearchBox";
import cites from './assets/cites.json'
import doctorsType from './assets/DoctorsType.json'

const locationSearchData = []
cites?.map((item) => {
  item?.city?.map((city) => {
    locationSearchData.push({
      "heading": city,
      "description": item?.state
    })
  })
})

const doctorsTypeSearchData = []
doctorsType?.map((item) => {
  doctorsTypeSearchData.push({
    "heading": item
  })
})

const Searchbar = () => {

  const [suggestionBox, setSuggestionBox] = useState('')
  const [searchLocation, setSearchLocation] = useState('')
  const [searchDoctorType, setSearchDoctorType] = useState('')

  return (
    <>

      <div
        className="position-relative w-100"
        style={{ height: "40em", borderRadius: "2em" }}>
        <div className="position-absolute h-100 w-100 overflow-hidden z-0 " style={{ borderRadius: "2em" }}>
          <img
            style={{ objectPosition: "right" }}
            className="search-area-image position-absolute w-100 h-100 object-fit-cover z-0 bg-black"
            src={bg}
            alt="background"
            role="none" />
          <div className="position-absolute h-100 w-100 " style={{ background: "#00000022", backdropFilter: "blur(3px)" }}></div>
        </div>
        <div className="z-3 position-relative">
          <div
            onClick={() => { setSuggestionBox('') }}
            style={{
              display: `${(suggestionBox && 'block') || 'none'}`,
              position: 'fixed',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              background: 'rgba(0,0,0,0.5)',
            }}>
          </div>
          <div className="fw-bold text-start text-md-center text-white pt-2 px-3" style={{ fontSize: "50px" }}>Your home for health</div>
          <div className="fs-2 text-start text-md-center  text-white px-3">Find and Book</div>
          <div className="d-flex flex-column flex-md-row justify-content-center px-3 gap-0 gap-md-2 gap-xl-4">
            <div className="search-box-1">
              <SearchBox {...{
                Svg: <Location fill="#00000099" />,
                placeholder: "Search your Location ...",
                data: locationSearchData,
                suggestionBox,
                setSuggestionBox,
                name: "location",
                setSearch: setSearchLocation,
              }} />
            </div>
            <div className="search-box-2">
              <SearchBox {...{
                Svg: <Search fill="#00000099" />,
                placeholder: "Search doctor, clinics, hospitals, etc.",
                data: doctorsTypeSearchData,
                suggestionBox,
                setSuggestionBox,
                name: "doctor-type",
                setSearch: setSearchDoctorType,
              }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
