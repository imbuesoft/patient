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
                <div className='footer-container text-white d-flex flex-column h-auto  min-vh-100'>
                    <div className="container-fluid text-center flex-grow-1 d-flex justify-content-center align-items-center">
                        <div className="row h-100">
                            <div className="col-12 col-xl-7 d-flex gap-3">

                                <div className="footer-card-container">
                                    <div className="row row-cols-3">
                                        {
                                            footerCardData?.map((item, index) => {
                                                return <FooterCard data={{ ...item, key: index }} />
                                            })
                                        }
                                    </div>
                                </div>

                            </div>
                            <div class="col-12 col-xl-5">
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
                    <div className='footer-navigation d-flex flex-column flex-md-row'>
                        <div className='w-100 d-none d-md-block'>
                            <img className='order-0 footer-navigation-image' src={logo} alt="" />
                        </div>
                        <div className='order-2 order-md-1 h-100 d-flex justify-content-center align-items-center footer-navigation-copyright w-100 d-flex justify-content-center'>Copyright © 2023 MediPract.com</div>
                        <div className='order-1 order-md-2 h-100 d-flex justify-content-center align-items-center footer-navigation-social me-md-3'>
                            <div className='d-flex'>
                                <a className='mx-2' href="http://" target="_blank" rel="noopener noreferrer">
                                    <Twitter {...svgAttributes} />
                                </a>
                                <a className='mx-2' href="http://" target="_blank" rel="noopener noreferrer">
                                    <Facebook {...svgAttributes} />
                                </a>
                                <a className='mx-2' href="http://" target="_blank" rel="noopener noreferrer">
                                    <Linkedin {...svgAttributes} />
                                </a>
                                <a className='mx-2' href="http://" target="_blank" rel="noopener noreferrer">
                                    <Instagram {...svgAttributes} />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Footer;