import "./Sidebar.css"
function Sidebar() {
  return (
    <div className="sideMain">
      <p className='text-start ps-2 fs-3'>Categories</p><hr />
      <div className="accordion " id="accordionPanelsStayOpenExample">
        <div className="accordion-item border-0">
          <h2 className="accordion-header ">
            <button className="accordion-button mybtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="   " aria-controls="panelsStayOpen-collapseOne">
              Surgical
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body">
              <ul>
                <li>Dressing</li>
                <li>Gi care</li>
                <li>Iv Infusion</li>
                <li>Respiratory Supplies</li>
                <li>Surgical Consumables</li>
                <li>Surgical instrument</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item border-0">
          <h2 className="accordion-header">
            <button className="accordion-button mybtn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              Diabetes Care
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
            <div className="accordion-body">
              <ul>
                <li>Dressing</li>
                <li>Diabetes Care Ayurveda</li>
                <li>Glucomenters</li>
                <li>Lancets & Test Strips</li>
                <li>Sugar Substitutes</li>
                <li>Diabetes Management Supplements</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item border-0">
          <h2 className="accordion-header">
            <button className="accordion-button mybtn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              Fragrances
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
            <div className="accordion-body">
              <ul>
                <li>Men</li>
                <li>Unisex</li>
                <li>Women</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
export default Sidebar;