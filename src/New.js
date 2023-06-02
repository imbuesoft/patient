import Benefits from "./MedicineComponent/Benefits/Benefits";
import Bookedmedicinetable from "./MedicineComponent/BookedMedical/Bookedmedicinetable";
import HealthCheckupPackage from "./MedicineComponent/HealthPackage/HealthCheckupPackage";
import Offer from "./MedicineComponent/Offer/Offer";
import Productdetails from "./MedicineComponent/Product_component/Productdetails";
import MedicinesSearch from "./MedicineComponent/SearchBar/MedicinesSearch";
import Sidebar from './MedicineComponent/Sidebar New/Sidebar'

const New = () => {
  return (
    <>
      <Benefits />
      <Bookedmedicinetable />
      <HealthCheckupPackage />
      <Offer />
      <Productdetails />
      <MedicinesSearch />
      <Sidebar />
    </>
  )
}

export default New;