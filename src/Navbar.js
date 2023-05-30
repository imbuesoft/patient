import logo from './Logo.png';
export default function Navbar(){
    return(
        <>

        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src={logo} className="img-fluid" /></a>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active fw-bold ms-5  " href="#">
                    Find Doctor
                    </a>
                    <a className="nav-link active fw-bold" href="#">
                    Video Consult
                    </a>
                    <a className="nav-link active fw-bold" href="#">
                    Medicines
                    </a>
                    <a className="nav-link active fw-bold" href="#">
                    LabTests
                    </a>
                    <a className="nav-link active fw-bold me-5" href="#">
                    Surgeries
                    </a>

                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">For Corporates</button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                        <a className="dropdown-item" href="#">Health &amp; Wellness Plans</a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">Group Insurance</a>
                    </li>
                    </ul>

                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">For Providers</button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                        <a className="dropdown-item" href="#">Health &amp; Wellness Plans</a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">Group Insurance</a>
                    </li>
                    </ul>
                    
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Security &amp; Help</button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                        <a className="dropdown-item" href="#">Health &amp; Wellness Plans</a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">Group Insurance</a>
                    </li>
                    </ul>

                    <button type="button" className="btn btn-outline-dark">Login / Signup</button>
                </div>
            </div>
        </div>
        </nav>
        </>
    )
}