import './Footer.css'
import logo from './logo.svg'
import { ReactComponent as Twitter } from './assets/twitter.svg'
import { ReactComponent as Facebook } from './assets/facebook.svg'
import { ReactComponent as Linkedin } from './assets/linkedin.svg'
import { ReactComponent as Instagram } from './assets/instagram.svg'
import FooterCard from './FooterCard'

const footerCardData = [
    {
        title: "About",
        list: [{ label: "Home" }, { label: "Terms and Conditions", link: "#" }, { label: "Privacy Policy", link: "#" }, { label: "Google Api Disclosure", link: "#" }, { label: "Security", link: "#" },]
    },
    {
        title: "Products",
        list: [{ label: "For Doctors", link: "#" }, { label: "Eka EMR", link: "#" }, { label: "GMB For Doctors", link: "#" }, { label: "EMR for Neurologists", link: "#" }]
    },
    {
        title: "Cowin",
        list: [{ label: "Book Vaccination Slot", link: "#" }, { label: "Download Vaccination Certificate", link: "#" }, { label: "Change Mobile Number", link: "#" }, { label: "Add Passport Details", link: "#" }]
    },
    {
        title: "ABDM",
        list: [{ label: "Create ABHA", link: "#" }]
    },
    {
        title: "About Us",
        list: [{ label: "Team", link: "#" }, { label: "Eka Stories", link: "#" }]
    },
]

const svgAttributes = {
    fill: 'white', height: 23, width: 23,
}

const Footer = () => {
    return (
        <>
            <div className='h-auto'>
                <div className='footer-container-main h-100 w-100 text-white d-flex flex-column pt-md-5'>
                    <div className="footer-container h-100 container d-flex flex-column">
                        <div className='w-100 d-md-none pt-4 d-flex justify-content-center align-items-center'>
                            <img className='footer-navigation-image' src={logo} alt="medipract" />
                        </div>
                        <div className="container-fluid w-100 overflow-hidden p-0 text-center flex-grow-1 d-flex justify-content-center align-items-center">
                            <div className="row h-100 w-100">
                                <div className="col-12 col-xl-7 p-0 d-flex gap-3">

                                    <div className="footer-card-container px-2 pt-4">
                                        <div className="row row-cols-3 w-100 m-0">
                                            {
                                                footerCardData?.map((item, index) => {
                                                    return <FooterCard key={index} data={{ ...item, key: index }} />
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-5 p-0">
                                    <div className="text-start p-3 h-100 w-100 m-0 flex-shrink-0 d-flex justify-content-center align-items-center">
                                        <div className='footer-form-card h-100 w-100 flex-shrink-0'>
                                            <h5 className=''>Contact us</h5>
                                            <div className=' mt-3' style={{ fontSize: "14px" }} >Integrated with NDHM and CoWin portals</div>
                                            <div className='mt-5'>
                                                <div className="row row-cols-2">
                                                    <div className="col-12 col-sm-6 mt-3">
                                                        <div className="">
                                                            <label htmlFor="iam" className="form-label">I am a</label>
                                                            <input type="text" className="form-control" id="iam" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-6 mt-3">
                                                        <div className="">
                                                            <label htmlFor="email" className="form-label">Name</label>
                                                            <input type="email" className="form-control" id="email" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row row-cols-2">
                                                    <div className="col-12 col-sm-6 mt-3">
                                                        <div className="">
                                                            <label htmlFor="phone" className="form-label">Phone No</label>
                                                            <input type="number" className="form-control" id="phone" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-6 mt-3">
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
                        <div className='footer-line d-none d-lg-block '></div>
                        <div className='footer-navigation d-flex flex-column flex-md-row'>
                            <div className='w-100 d-none d-md-block ps-5'>
                                <img className='order-0 footer-navigation-image ' src={logo} alt="medipract" />
                            </div>
                            <div className='order-2 order-md-1 h-100 d-flex justify-content-center align-items-center footer-navigation-copyright w-100 d-flex justify-content-center text-center'>Copyright © 2023 MediPract.com</div>
                            <div className='order-1 order-md-2 h-100 d-flex justify-content-center align-items-center d-flex justify-content-rig me-md-3'>
                                <div className='d-flex'>
                                    <a className='mx-2 footer-link' href="http://" target="_blank" rel="noopener noreferrer">
                                        <Twitter {...svgAttributes} />
                                    </a>
                                    <a className='mx-2 footer-link' href="http://" target="_blank" rel="noopener noreferrer">
                                        <Facebook {...svgAttributes} />
                                    </a>
                                    <a className='mx-2 footer-link' href="http://" target="_blank" rel="noopener noreferrer">
                                        <Linkedin {...svgAttributes} />
                                    </a>
                                    <a className='mx-2 footer-link' href="http://" target="_blank" rel="noopener noreferrer">
                                        <Instagram {...svgAttributes} />
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Footer;