import React from 'react'
import lipid from './lipid.jpg';
import liver from './liver.jpg';
import blood from './blood.jpg';
const Bookedmedicinetable = () => {
  return (
    <>
    <div className="container-fluid">
        <label style={{fontWeight:'bold',fontSize:'30px'}}>Top Booked Medical tests</label><br />
        <p>Get 10% Health Cashback*<font color="blue">T&C</font></p>
    </div>
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td><img src={lipid} width="50px"></img><label style={{fontWeight:'bold',fontSize:'20px',marginBottom:'30px'}}>Lipid Profile</label> <br /> 
                                <p> <b style={{fontSize:'16px'}}>Ldl Choleterol Test</b> <br /><span style={{fontSize:'12px',fontWeight:'bold',color:'gray'}}>Also know as Choleterol Ldl Enzymatic Colorimetric Method Blood</span></p></td>
                            </tr>
                            <tr>
                                <td> <p> <b style={{fontSize:'16px'}}>Hdl Choleterol Test</b> <br /><span style={{fontSize:'12px',fontWeight:'bold',color:'gray'}}>Also know as Choleterol Hdl Enzymatic Colorimetric Method Blood</span></p></td>
                            </tr>
                            <tr>
                                <td> <p> <b style={{fontSize:'16px'}}>Vldl Choleterol Test</b> <br /><span style={{fontSize:'13px',fontWeight:'bold',color:'gray'}}>Also know as vldl Choleterol Blood</span></p></td>
                            </tr>
                            <tr>
                                <td> <p> <b style={{fontSize:'16px'}}>Total Choleterol Test</b> <br /><span style={{fontSize:'13px',fontWeight:'bold',color:'gray'}}>Also know as Choleterol Test </span></p></td>
                            </tr>
                            <tr>
                                <td> <p> <b style={{fontSize:'16px'}}>Triglycerides Choleterol Test</b> <br /><span style={{fontSize:'13px',fontWeight:'bold',color:'gray'}}>Also know as Triglycerides Blood</span></p><br />
                                <button class="btn btn-primary btn-lg" style={{borderRadius:'5px'}} type="submit">Book Now</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="col-4">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td><img src={liver} width="50px"></img> <label style={{fontWeight:'bold',fontSize:'20px',marginBottom:'30px'}}>Livers Profile</label> <br /> 
                                <p> <b style={{fontSize:'16px'}}>Gamma Glutamyl Transferase</b> <br /><label style={{fontSize:'13px',fontWeight:'bold',color:'gray'}}>Also know as GGT</label></p></td>
                            </tr>
                            <tr>
                                <td> <p> <b style={{fontSize:'16px'}}>Total Bilirubin</b> <br /><label style={{fontSize:'13px',fontWeight:'bold',color:'gray'}}>Also know as Bilirubin Total Blood</label></p></td>
                            </tr>
                            <tr>
                                <td> <p> <b style={{fontSize:'16px'}}>Ast Test</b> <br /><span style={{fontSize:'13px',fontWeight:'bold',color:'gray'}}>Also know as SGOT</span></p></td>
                            </tr>
                            <tr>
                                <td> <p> <b style={{fontSize:'16px'}}>Alp Test</b> <br /><span style={{fontSize:'13px',fontWeight:'bold',color:'gray'}}>Also know as Alkaline Phosphatase </span></p></td>
                            </tr>
                            <tr>
                                <td> <p> <b style={{fontSize:'16px'}}>Albumin Test</b> <br /><span style={{fontSize:'13px',fontWeight:'bold',color:'gray'}}>Also know as Albumin Blood</span></p><br />
                                <button class="btn btn-primary btn-lg" style={{borderRadius:'5px'}} type="submit">Book Now</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="col-4">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td> <img src={blood} width="50px"></img> <label style={{fontWeight:'bold',fontSize:'20px',marginBottom:'30px'}}>Blood Sugar</label> <br /> 
                                <p> <b style={{fontSize:'16px'}}>Hba1C Test</b> <br /><span style={{fontSize:'13px',fontWeight:'bold',color:'gray'}}>Also know as Glycosylated Haemoglobin Blood</span></p></td>
                            </tr>
                            <tr>
                                <td> <p> <b style={{fontSize:'16px'}}>Fasting Blood Suger Test</b> <br /><span style={{fontSize:'13px',fontWeight:'bold',color:'gray'}}>Also know as Glucose Fasting Blood</span></p></td>
                            </tr>
                            <tr>
                                <td> <p> <b style={{fontSize:'16px'}}>Randome Blood Suger Test</b> <br /><span style={{fontSize:'13px',fontWeight:'bold',color:'gray'}}>Also know as RBS</span></p></td>
                            </tr>
                            <tr>
                                <td> <p> <b style={{fontSize:'16px'}}>Blood Suger Levels After Test</b> <br /><span style={{fontSize:'13px',fontWeight:'bold',color:'gray'}}>Also know as Post Prandial Blood Suger </span></p></td>
                            </tr>
                            <tr>
                                <td> <p> <b style={{fontSize:'16px'}}>Creatinine Test</b> <br /><span style={{fontSize:'13px',fontWeight:'bold',color:'gray'}}>Also know as Creatinine Conventional Blood</span></p><br />
                                <button class="btn btn-primary btn-lg" style={{borderRadius:'5px'}} type="submit">Book Now</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </>
  )
}

export default Bookedmedicinetable