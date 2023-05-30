import React from 'react'
import logo from './logo.svg'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light ps-3 pe-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src={logo} alt="" width="140" className="d-inline-block align-text-top" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        <a className="nav-link" href="/">Find Doctors</a>
                        <a className="nav-link" href="/">Doctor</a>
                        <button type="button" className="btn btn-primary ms-2">Login</button>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar