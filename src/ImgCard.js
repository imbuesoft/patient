
import React from 'react';
import doc from './doc.jpg';
import './ImgCard.css'; // Import custom CSS file for additional styling

const ImgCard = () => {
  return (
    <div className="container">
      <div className="header text-white p-2">
        <div className="row align-items-center">
          <div className="col-6">
            <div className="logo">
              <img
                src="https://www.practostatic.com/practo-care/brand_page/images/pcs_logo_light.png"
                alt="PCS Logo"
                width="117px"
                height="24px"
                style={{ marginLeft: "30px", marginTop: "0 auto", marginBottom: "20px"}}
              />
            </div>
            <div className="text-section">
              <h1 className="title mt-4 mb-4" style={{fontSize: "38px", marginLeft: "30px", marginTop: "0 auto", fontWeight: "400"}}>
                End to end care from Top Surgeons<br></br> at our Practo Care Clinics
              </h1>
              <h1 className="text-white" style={{fontSize: "18px", marginLeft: "30px", fontWeight: "400"}}>
                Talk to our care expert today to book your consultation.
              </h1>
              <h1 className="text-white" style={{fontSize: "18px", marginLeft: "30px", fontWeight: "400"}}>
                All insurance accepted &amp; No-cost EMI available.
              </h1>
              <div className="border-box">
                <div className="reach-out">
                    <h1 className="text-white" style={{ fontSize: "18px", marginLeft: "10px", fontWeight: "400", marginTop: "5px" }}>
                    Reach out to us on
                    </h1>
                    <p className="text-white" style={{ marginTop: "15px" }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </p>
                    <div className="phone-number">
                    <img
                        src="https://www.practostatic.com/practo-care/brand_page/images/ic_phone_blue_filled.png"
                        alt="call icon"
                        height="14px"
                        width="14px"
                        style={{ marginRight: "10px", marginTop: "5px" }}
                    />
                    <h1 className="font-weight-bold ml-2" style={{ fontSize: "18px", marginTop: "10px", marginRight: "15px" }}>
                        08045685554
                    </h1>
                    </div>
                </div>
                </div>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-end align-items-end">
            <img src={doc} alt="Doctor" className="doctor-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgCard;


