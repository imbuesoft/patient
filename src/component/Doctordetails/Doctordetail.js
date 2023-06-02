import React from 'react'
import './Doctordetail.css';

const Doctordetail = () => {
    const doctordetailscard1={
        position:"relative",
        width: "280px",
        height: "300px",
        border: "2px solid #f0f0f5",
        borderRadius: "10px",
        backgroundColor: "#f0f0f5",
        margin: "auto",
        marginTop: "100px",
      };
    const doctordetailscard2={
    position:"absolute",
    width: "280px",
    height: "209px",
    backgroundColor: "#5d5ba2",
    border: "2px solid #f0f0f5",
    borderRadius: "10px",
    marginLeft: "-2px",
    marginTop: "90px",
};

const doctorimage={
    width:"40%",
    height: "50%",
    margin: "-20% 0px 10px 30%",
    borderRadius: "50%",
    backgroundColor: "antiquewhite",
};
    const doctorname={
    color: "white",
    textAlign: "center", 
};

const doctordetailes={
    fontSize: "15px",
    marginTop: "-8px",
    fontWeight: 600,
};

const doctorbutton={
    border: "0px",
    marginTop: "10px",
    backgroundColor: "transparent",
    color:"white",
};
  return (
    <div className='doctordetailscard1' style={doctordetailscard1}>
        <div className='doctordetailscard2' style={doctordetailscard2}> 
            <img src='data:image/jpeg;base64,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' 
            alt='Doctor img'
             className='doctorimage' style={doctorimage}/>
            <div className='doctorname' style={doctorname}>
            <h3>Dr.Prashant</h3>
            <div className='doctordetailes' style={doctordetailes}>
            General Physician<br/>
            25+ years of Experience
            </div>
            <button className='doctorbutton'style={doctorbutton} >View Profile <b>&gt;</b></button>
            </div>  
        </div>
    </div>
  )
}

export default Doctordetail
