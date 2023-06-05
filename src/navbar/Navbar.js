import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
        <div className="container-fluid" style={{backgroundColor:'black'}} >
      <div className="row">
        <div class="col-12">
          <div className="react-navbar">
            <nav className="navbar navbar-expand-sm ps-3 pe-3 " >
              <button className="navbar navbar-toggler" data-bs-toggle="collapse" data-bs-target="#xyz">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="xyz">
                <div className="navbar-nav"  >
                  <Link to="/Home" className="navbar navbar-brand nav-link active" style={{color:'blue'}}><h1>Home</h1></Link>
                  <Link to="/Bmicalculater" className="nav-link" style={{color:'blue'}}><h1>bmicalculater</h1></Link>
                  <Link to="/Task" className="nav-link" style={{color:'blue'}}><h1>task</h1></Link>
                  </div>
               </div>
            </nav>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default Navbar
