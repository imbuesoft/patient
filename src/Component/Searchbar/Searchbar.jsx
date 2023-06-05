import bg from './assets/bg1.jpg'

import { ReactComponent as Search } from './assets/search.svg'
import { ReactComponent as Location } from './assets/location.svg'

import SearchBox from "./SearchBox/SearchBox";
import cites from './assets/cites.json'
import doctors from './assets/doctors.json'

const locationSearchData = []
cites?.map((item, index) => {
  item?.city?.map((city, index) => {
    locationSearchData.push({
      "heading": city,
      "description": item?.state
    })
  })
})

const doctorsSearchData = []
doctors?.map((item, index) => {
  doctorsSearchData.push({
    "heading": item
  })
})


const Searchbar = () => {

  return (
    <>
      <div 
      className="position-relative w-100" 
      style={{ height:"40em", borderRadius:"2em"}}>
        <div className="position-absolute h-100 w-100 overflow-hidden z-0 " style={{borderRadius:"2em"}}>
          <img
            style={{ objectPosition: "right" }}
            className="search-area-image position-absolute w-100 h-100 object-fit-cover z-0 bg-black"
            src={bg}
            alt="background"
            role="none" />
          <div className="position-absolute h-100 w-100 " style={{ background: "#00000022", backdropFilter: "blur(3px)" }}></div>
        </div>
        <div className="z-3 position-relative">
          <div className="fw-bold text-start text-md-center text-white pt-2 px-3" style={{ fontSize: "50px" }}>Your home for health</div>
          <div className="fs-2 text-start text-md-center  text-white px-3">Find and Book</div>
          <div className="d-flex flex-column flex-md-row justify-content-center px-3 gap-0 gap-md-2 gap-xl-4">
            <div className="search-box-1">
              <SearchBox {...{
                Svg: <Location fill="#00000099" />,
                placeholder: "Search your Location ...",
                data: locationSearchData
              }} />
            </div>
            <div className="search-box-2">
              <SearchBox {...{
                Svg: <Search fill="#00000099" />,
                placeholder: "Search doctor, clinics, hospitals, etc.",
                data: doctorsSearchData
              }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
