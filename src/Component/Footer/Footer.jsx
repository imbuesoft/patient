import './Footer.css'
import logo from './logo.svg'

const Footer = () => {
    return (
        <>
            <div className='overflow-hidden'>
                <div className='footer-container text-white d-flex flex-column'>
                    <div className="container-fluid text-center flex-grow-1">
                        <div className="row h-100">
                            <div className="col-7 d-flex gap-3">

                                <div className="footer-card-container">
                                    <div className="row row-cols-3">
                                        <div className="col">
                                            <div className="card footer-card">
                                                <div className="card-body">
                                                    <h5 className="card-title text-start text-light">About</h5>
                                                    <ul className="footer-card-ul">
                                                        <li>Home</li>
                                                        <li>Terms and Conditions</li>
                                                        <li>Privacy Policy</li>
                                                        <li>Google Api Disclosure</li>
                                                        <li>Security</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card footer-card">
                                                <div className="card-body">
                                                    <h5 className="card-title text-start text-light">Products</h5>
                                                    <ul className="footer-card-ul">
                                                        <li>For Doctors</li>
                                                        <li>Eka EMR</li>
                                                        <li>GMB For Doctors</li>
                                                        <li>EMR for Neurologists</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card footer-card">
                                                <div className="card-body">
                                                    <h5 className="card-title text-start text-light">Cowin</h5>
                                                    <ul className="footer-card-ul">
                                                        <li>Book Vaccination Slot</li>
                                                        <li>Download Vaccination Certificate</li>
                                                        <li>Change Mobile Number</li>
                                                        <li>Add Passport Details</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row row-cols-3 mt-4">
                                        <div className="col">
                                            <div className="card footer-card">
                                                <div className="card-body">
                                                    <h5 className="card-title text-start text-light">ABDM</h5>
                                                    <ul className="footer-card-ul">
                                                        <li>Create ABHA</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card footer-card">
                                                <div className="card-body">
                                                    <h5 className="card-title text-start text-light">About Us</h5>
                                                    <ul className="footer-card-ul">
                                                        <li>Team</li>
                                                        <li>Eka Stories</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-5">
                                <div className="footer-form-container text-start">

                                    <div className='footer-form-card'>
                                        <h5 className=''>Contact us</h5>
                                        <div className=' mt-3' style={{ fontSize: "14px" }} >Integrated with NDHM and CoWin portals</div>
                                        <div className='mt-5'>
                                            <div className="row row-cols-2">
                                                <div className="col">
                                                    <div className="">
                                                        <label htmlFor="iam" className="form-label">I am a</label>
                                                        <input type="text" className="form-control" id="iam" />
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="">
                                                        <label htmlFor="email" className="form-label">Name</label>
                                                        <input type="email" className="form-control" id="email" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row row-cols-2 mt-3">
                                                <div className="col">
                                                    <div className="">
                                                        <label htmlFor="phone" className="form-label">Phone No</label>
                                                        <input type="number" className="form-control" id="phone" />
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="">
                                                        <label htmlFor="specialization" className="form-label">Specialization</label>
                                                        <input type="text" className="form-control" id="specialization" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary  w-100 mt-5 fs-6 " style={{ height: "3em", background: "#5253CF", border: "none" }} disabled>Contact to MediPract</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='footer-line'></div>
                    <div className='footer-navigation'>
                        <div className='w-100'>
                            <img className='footer-navigation-image' src={logo} alt="" />

                        </div>
                        <div className='footer-navigation-copyright w-100 d-flex justify-content-center'>Copyright © 2023 MediPract.com</div>
                        <div className='footer-navigation-social'>

                            {/* svg for twitter */}
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" className='footer-navigation-svg-icon' viewBox="0 0 24 24" fill="white">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M22.47 5.09c-.81.36-1.68.6-2.6.71.94-.56 1.66-1.44 2-2.5-.88.52-1.86.9-2.9 1.1-.84-.9-2.04-1.46-3.37-1.46-2.55 0-4.6 2.05-4.6 4.6 0 .36.04.72.13 1.07-3.82-.19-7.2-2.03-9.49-4.82-.4.69-.63 1.49-.63 2.35 0 1.6.81 3 2.04 3.82-.75-.02-1.46-.23-2.07-.57v.06c0 2.23 1.59 4.08 3.7 4.5-.39.1-.8.16-1.22.16-.3 0-.6-.03-.88-.08.6 1.87 2.33 3.23 4.4 3.27-1.61 1.26-3.64 2.01-5.85 2.01-.38 0-.76-.02-1.14-.07 2.08 1.34 4.55 2.12 7.21 2.12 8.64 0 13.39-7.16 13.39-13.39 0-.2 0-.41-.01-.61.92-.67 1.72-1.52 2.35-2.48z" />
                                </svg>
                            </a>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" className='footer-navigation-svg-icon' viewBox="0 0 24 24" fill="white">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M22.47 5.09c-.81.36-1.68.6-2.6.71.94-.56 1.66-1.44 2-2.5-.88.52-1.86.9-2.9 1.1-.84-.9-2.04-1.46-3.37-1.46-2.55 0-4.6 2.05-4.6 4.6 0 .36.04.72.13 1.07-3.82-.19-7.2-2.03-9.49-4.82-.4.69-.63 1.49-.63 2.35 0 1.6.81 3 2.04 3.82-.75-.02-1.46-.23-2.07-.57v.06c0 2.23 1.59 4.08 3.7 4.5-.39.1-.8.16-1.22.16-.3 0-.6-.03-.88-.08.6 1.87 2.33 3.23 4.4 3.27-1.61 1.26-3.64 2.01-5.85 2.01-.38 0-.76-.02-1.14-.07 2.08 1.34 4.55 2.12 7.21 2.12 8.64 0 13.39-7.16 13.39-13.39 0-.2 0-.41-.01-.61.92-.67 1.72-1.52 2.35-2.48z" />
                                </svg>
                            </a>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" className='footer-navigation-svg-icon' viewBox="0 0 24 24" fill="white">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M22.47 5.09c-.81.36-1.68.6-2.6.71.94-.56 1.66-1.44 2-2.5-.88.52-1.86.9-2.9 1.1-.84-.9-2.04-1.46-3.37-1.46-2.55 0-4.6 2.05-4.6 4.6 0 .36.04.72.13 1.07-3.82-.19-7.2-2.03-9.49-4.82-.4.69-.63 1.49-.63 2.35 0 1.6.81 3 2.04 3.82-.75-.02-1.46-.23-2.07-.57v.06c0 2.23 1.59 4.08 3.7 4.5-.39.1-.8.16-1.22.16-.3 0-.6-.03-.88-.08.6 1.87 2.33 3.23 4.4 3.27-1.61 1.26-3.64 2.01-5.85 2.01-.38 0-.76-.02-1.14-.07 2.08 1.34 4.55 2.12 7.21 2.12 8.64 0 13.39-7.16 13.39-13.39 0-.2 0-.41-.01-.61.92-.67 1.72-1.52 2.35-2.48z" />
                                </svg>
                            </a>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" className='footer-navigation-svg-icon' viewBox="0 0 24 24" fill="white">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M22.47 5.09c-.81.36-1.68.6-2.6.71.94-.56 1.66-1.44 2-2.5-.88.52-1.86.9-2.9 1.1-.84-.9-2.04-1.46-3.37-1.46-2.55 0-4.6 2.05-4.6 4.6 0 .36.04.72.13 1.07-3.82-.19-7.2-2.03-9.49-4.82-.4.69-.63 1.49-.63 2.35 0 1.6.81 3 2.04 3.82-.75-.02-1.46-.23-2.07-.57v.06c0 2.23 1.59 4.08 3.7 4.5-.39.1-.8.16-1.22.16-.3 0-.6-.03-.88-.08.6 1.87 2.33 3.23 4.4 3.27-1.61 1.26-3.64 2.01-5.85 2.01-.38 0-.76-.02-1.14-.07 2.08 1.34 4.55 2.12 7.21 2.12 8.64 0 13.39-7.16 13.39-13.39 0-.2 0-.41-.01-.61.92-.67 1.72-1.52 2.35-2.48z" />
                                </svg>
                            </a>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" className='footer-navigation-svg-icon' viewBox="0 0 24 24" fill="white">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M22.47 5.09c-.81.36-1.68.6-2.6.71.94-.56 1.66-1.44 2-2.5-.88.52-1.86.9-2.9 1.1-.84-.9-2.04-1.46-3.37-1.46-2.55 0-4.6 2.05-4.6 4.6 0 .36.04.72.13 1.07-3.82-.19-7.2-2.03-9.49-4.82-.4.69-.63 1.49-.63 2.35 0 1.6.81 3 2.04 3.82-.75-.02-1.46-.23-2.07-.57v.06c0 2.23 1.59 4.08 3.7 4.5-.39.1-.8.16-1.22.16-.3 0-.6-.03-.88-.08.6 1.87 2.33 3.23 4.4 3.27-1.61 1.26-3.64 2.01-5.85 2.01-.38 0-.76-.02-1.14-.07 2.08 1.34 4.55 2.12 7.21 2.12 8.64 0 13.39-7.16 13.39-13.39 0-.2 0-.41-.01-.61.92-.67 1.72-1.52 2.35-2.48z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Footer;