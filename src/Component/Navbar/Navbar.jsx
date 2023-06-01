import React from 'react'
import logo from './logo.svg'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md " style={{ backgroundColor: '#429ca533' }}>
            
                <a className="navbar-brand" href="#abcd" data-bs-dismiss="offcanvas" >
                    <img src={logo} alt="" width="140" className="d-inline-block align-text-top" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="offcanvas offcanvas-bottom h-auto w-100" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <a className="navbar-brand" href="#abcd" data-bs-dismiss="offcanvas" >
                            <img src={logo} alt="" width="140" className="d-inline-block align-text-top" />
                        </a>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                    <div className="offcanvas-body h-100">

                        <ul className="nav nav-pills flex-column flex-md-row justify-content-end flex-grow-1 gap-3 h-100 fw-semibold">
                            <li className="nav-item">
                                <a data-bs-toggle="pill" className="nav-link border-0 active" aria-current="page" href="#abcd" data-bs-dismiss="offcanvas" >Home</a>
                            </li>
                            <li className="nav-item">
                                <a data-bs-toggle="pill" className="nav-link border-0" aria-current="page" href="#abcd" data-bs-dismiss="offcanvas" >Find doctors</a>
                            </li>
                            <li className="nav-item">
                                <a data-bs-toggle="pill" className="nav-link border-0" href="#abcd" data-bs-dismiss="offcanvas" >Link</a>
                            </li>
                            {/* DONT REMOVE - DROP DOWN Menu example */}
                            <li className="nav-item dropdown">
                                <a className="nav-link border-0 dropdown-toggle" data-bs-toggle="dropdown" href="#abcd" role="button" aria-expanded="false">Dropdown</a>
                                <ul className="dropdown-menu responsive-position">
                                    <li><a className="dropdown-item" href="#abcd" data-bs-dismiss="offcanvas" >Action</a></li>
                                    <li><a className="dropdown-item" href="#abcd" data-bs-dismiss="offcanvas" >Another action</a></li>
                                    <li><a className="dropdown-item" href="#abcd" data-bs-dismiss="offcanvas" >Something else here</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#abcd" data-bs-dismiss="offcanvas" >Separated link</a></li>
                                </ul>
                            </li>
                        </ul>
                        {/* DONT REMOVE -  SEARCH BAR */}
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}

                    </div>
                </div>
        </nav>

    )
}

export default Navbar