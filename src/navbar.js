import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    
    <div className="container-fluid " style={{backgroundColor:'black'}}>
      <div className="row">
        <div class="col-12">
          <div className="react-navbar">
            <nav className="navbar navbar-expand-sm ps-3 pe-3 " >
              <button className="navbar navbar-toggler" data-bs-toggle="collapse" data-bs-target="#xyz">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="xyz">
                <div className="navbar-nav"  >
                  <Link to="/" className="navbar navbar-brand nav-link active" style={{color:'blue'}}><h1>DEV</h1></Link>
                  <Link to="/Home" className="nav-link" style={{color:'white',marginTop:'10px',marginLeft:'10px'}}>Home</Link>
                  <Link to="/About" className="nav-link" style={{color:'white',marginTop:'10px',marginLeft:'10px'}}>About Us</Link>
                  <Link to="/Product" className="nav-link" style={{color:'white',marginTop:'10px',marginLeft:'10px'}}>Product</Link>	
                  <Link to="/Contact" className="nav-link" style={{color:'white',marginTop:'10px',marginLeft:'10px'}}>Contact us</Link>
                  <Link to="/Bmiform" className="nav-link" style={{color:'white',marginTop:'10px',marginLeft:'10px'}}>Bmiform</Link>
                  <Link to="https://instagram.com/dev_kacha_03?igshid=OTk0YzhjMDVlZA==" className="nav-link"><img src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" style={{height:'30px',marginLeft:'300px',marginTop:'10px',border:'2px solid white',borderRadius:'51px'}}></img></Link>
                  <Link to="https://www.facebook.com/dev.kacha.35?mibextid=ZbWKwL" className="nav-link"><img src="https://cdn-icons-png.flaticon.com/128/3670/3670124.png" style={{height:'30px',marginLeft:'50px',marginTop:'10px',border:'2px solid white',borderRadius:'51px'}}></img></Link>
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
