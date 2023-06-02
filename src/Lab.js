import Benefits from "./MedicineComponent/Benefits/Benefits";
import Bookedmedicinetable from "./MedicineComponent/BookedMedical/Bookedmedicinetable";
import HealthCheckupPackage from "./MedicineComponent/HealthPackage/HealthCheckupPackage";
import Productdetails from "./MedicineComponent/Product_component/Productdetails";

const Lab = () => {
  return (
    <>
      <Productdetails />
      <Benefits />
      <Bookedmedicinetable />
      <HealthCheckupPackage />



    </>
  )
}

export default Lab;