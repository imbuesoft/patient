import React from 'react'
import lipid from './lipid.jpg';
import liver from './liver.jpg';
import blood from './blood.jpg';
const Task = () => {
  return (
    <>
        <div className="container-fluid" style={{backgroundColor:'#0000CD'}}>
            <div className="row">
                <div className="col-12">
                    <h2 align="center" style={{color:'white',fontWeight:'bold'}}>Contact us</h2>
                    <h6 align="center" style={{color:'white',fontWeight:'bold',marginBlock:'20px'}}>Have questions about our product, support services, or anything else? let us<br />
                    know and we'll get back to you.</h6>
                </div>
            </div>
        </div>

        <div className="container" style={{marginTop:'40px'}}>
            <div className="row">
                <div className="col-6">
                    <form>
                    <label style={{fontWeight:'bold',fontFamily:'',fontSize:'20px'}}>contact us</label> 
                    <div className="form-group">
                        <label style={{marginTop:'20px'}}>Interested in*</label>
                        <select className="form-select" aria-label="Default select example" required>
                            <option selected="">Creating a free profile on Practo.com</option>
                            <option >One</option>
                            <option >Two</option>
                            <option>Three</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label style={{marginTop:'20px'}} >Name*</label>
                        <input type="text" className="form-control" placeholder="Enter Your Name"></input>    
                    </div>

                    <label style={{marginTop:'20px'}}>Mobile Number*</label>
                    <div className="input-group">
                        <span className="input-group-text ">+91(IN)</span>
                        <input type="number" className="form-control" placeholder="Enter Your Number"/>
                    </div>

                    <div className="form-group">
                        <label style={{marginTop:'20px'}}>Email*</label>
                        <input type="email" required className="form-control" placeholder="Enter Your Email"></input>    
                    </div>

                    <div className="row" style={{marginTop:'20px'}}>
                        <div className="col-6">
                            <div className="form-group">
                                <label >Country</label>
                                <select className="form-select" >
                                    <option selected="">India</option>
                                    <option value={1}>America</option>
                                    <option value={2}>Brazil</option>
                                    <option value={3}>Norway</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="col-6">
                            <div className="form-group">
                                <label >City*</label>
                                <input type="text" className="form-control"  placeholder="Enter your city"></input>    
                            </div>
                        </div>
                    </div>
                   
                    <div class="form-floating" style={{marginTop:'20px'}}>
                        <input type="text" class="form-control" placeholder="  " ></input>
                        <label for="floatingTextarea">Message</label>
                    </div>

                    <div className="form-floating">
                        <button class="btn btn-primary " style={{borderRadius:'5px',marginTop:'20px'}} type="submit">Submit</button>
                    </div>     
                    </form>
                </div>


                <div className="col-6"  >
                    <div className="container"  style={{backgroundColor:'#F5F5F5',width:'80%',padding:'20px'}}>
                        <label style={{fontWeight:'bold'}}>Our Branches</label>

                        <div className="form-group" style={{marginTop:'20px'}}></div>
                        <label>City</label>
                        <select class="form-select" style={{width:'70%'}} >
                            <option>Bengaluru</option>
                            <option>Rajkot</option>
                            <option>Mumbai</option>
                        </select>

                    <div className="card" style={{borderRadius:'0px',marginTop:'30px'}} >
                        <div className="row" style={{padding:'20px'}}>
                            <div className="col-6">
                                <h6>Bengaluru</h6>
                                <p style={{fontSize:'75%'}}>Practo Technologies Pvt.Ltd,WeWeork, 3rd Floor,Salarpuria Symbiosis Arekere, Bannereghatta Main Road Bangaluru 560 076 Karnataka, india</p>
                            </div>
                            <div className="col-6"> 
                            <h6 align="right" style={{color:'#73C2FB'}}><a href="#" style={{textDecoration:'none'}}>Get Direction</a></h6>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </div>

        <hr noshade  />

        {
           // subscription
        }

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

        <hr noshade/>

        <div className="container" style={{height:'500px',marginTop:'4%'}}>   
        <div className="row">
             <div className="col-3">
                 
                    <table cellPadding="px">
                        <div className="data" style={{width:'195px',height:'400px',borderRadius:'10px'}}>
                            <tr >
                                <td><div className="heading" style={{marginTop:'90px'}}></div></td>
                            </tr>
                         
                        <div className="card-body" >
                            <center>
                            <tr>
                                <td><p className="card-text"><label style={{fontSize:'30px',marginTop:'30px',fontWeight:'bold'}}>Features<br /></label></p></td>
                            </tr>
                            <tr>
                                <td><p style={{marginTop:'30px',fontWeight:''}}>Personalize EMR</p></td>
                            </tr>
                            <tr>
                                <td><p style={{marginTop:'3px',fontWeight:''}}>Appointment & Billing</p></td>
                            </tr>
                            <tr>
                                <td><p style={{marginTop:'3px',fontWeight:''}}>Multiple Devices</p></td>
                            </tr>
                            <tr>
                                <td><p style={{marginTop:'3px',fontWeight:'',fontSize:'15px'}}>Migration from existing EMR</p></td>
                            </tr>
                            <tr>
                                <td><p style={{marginTop:'4px',fontWeight:''}}>Lab</p></td>
                            </tr>
                            <tr>
                                <td><p style={{marginTop:'4px',fontWeight:''}}>Pharmacy</p></td>
                            </tr>
                            <tr>
                                <td><p style={{marginTop:'4px',fontWeight:''}}>Communication</p></td>
                            </tr>
                            </center>
                        </div>
                        </div>
                    </table> 
        </div>

            <div className="col-3">
                 
                    <table cellPadding="px">
                        <div className="card" style={{width:'256px',height:'500px',borderRadius:'20px'}}>
                            <tr>
                                <td><div className="card-header" style={{width:'16rem',backgroundColor:'silver',borderRadius:'10px'}} ><p align="center" style={{color:'white',fontSize:'20px',fontWeight:'bold'}}>⟡ Silver</p></div></td>
                            </tr>
                         
                        <div className="card-body" style={{backgroundColor:"#ECF8F9",borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
                            <center>
                            <tr>
                                <td><p className="card-text"><label style={{fontSize:'40px',fontWeight:'bold'}}>₹18500</label><br />INR/Yearly</p></td>
                            </tr>
                            <tr>
                                <td><p style={{marginTop:'30px',fontWeight:'bold'}}>✓</p></td>
                            </tr>
                            <tr>
                                <td><p style={{marginTop:'3px',fontWeight:'bold'}}>✓</p></td>
                            </tr>
                            <tr>
                                <td><p style={{marginTop:'3px',fontWeight:'bold'}}>✓</p></td>
                            </tr>
                            <tr>
                                <td><p style={{marginTop:'3px',fontWeight:'bold'}}>✓</p></td>
                            </tr>
                            <tr>
                                <td><p style={{marginTop:'4px',fontWeight:'bold'}}>✓</p></td>
                            </tr>
                            </center>
                        </div>
                        </div>
                    </table> 
                 
                
            </div>

            <div className="col-3">
                 
                 <table cellPadding="px">
                     <div className="card" style={{width:'256px',height:'500px',borderRadius:'20px'}}>
                         <tr>
                             <td><div className="card-header" style={{width:'16rem',backgroundColor:'gold',borderRadius:'10px'}} ><p align="center" style={{color:'white',fontSize:'20px',fontWeight:'bold'}}>Gold</p></div></td>
                         </tr>
                      
                     <div className="card-body" style={{backgroundColor:"#ECF8F9",borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
                         <center>
                         <tr>
                             <td><p className="card-text"><label style={{fontSize:'40px',fontWeight:'bold'}}>₹36500</label><br />INR/Yearly</p></td>
                         </tr>
                         <tr>
                             <td><p style={{marginTop:'30px',fontWeight:'bold'}}>✓</p></td>
                         </tr>
                         <tr>
                             <td><p style={{marginTop:'3px',fontWeight:'bold'}}>✓</p></td>
                         </tr>
                         <tr>
                             <td><p style={{marginTop:'3px',fontWeight:'bold'}}>✓</p></td>
                         </tr>
                         <tr>
                             <td><p style={{marginTop:'3px',fontWeight:'bold'}}>✓</p></td>
                         </tr>
                         <tr>
                             <td><p style={{marginTop:'4px',fontWeight:'bold'}}>✓</p></td>
                         </tr>
                         </center>
                     </div>
                     </div>
                 </table> 
              </div>

              <div className="col-3">
                 
                 <table cellPadding="px">
                     <div className="card" style={{width:'256px',height:'500px',borderRadius:'20px'}}>
                         <tr>
                             <td><div className="card-header" style={{width:'16rem',backgroundColor:'purple',borderRadius:'10px'}} ><p align="center" style={{color:'white',fontSize:'20px',fontWeight:'bold'}}>Platinum</p></div></td>
                         </tr>
                      
                     <div className="card-body" style={{backgroundColor:"#ECF8F9",borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
                         <center>
                         <tr>
                             <td><p className="card-text" ><label style={{fontSize:'40px',fontWeight:'bold'}}>₹45500</label><br />INR/Yearly</p></td>
                         </tr>
                         <tr>
                             <td><p style={{marginTop:'30px',fontWeight:'bold'}}>✓</p></td>
                         </tr>
                         <tr>
                             <td><p style={{marginTop:'3px',fontWeight:'bold'}}>✓</p></td>
                         </tr>
                         <tr>
                             <td><p style={{marginTop:'3px',fontWeight:'bold'}}>✓</p></td>
                         </tr>
                         <tr>
                             <td><p style={{marginTop:'3px',fontWeight:'bold'}}>✓</p></td>
                         </tr>
                         <tr>
                             <td><p style={{marginTop:'4px',fontWeight:'bold'}}>✓</p></td>
                         </tr>
                         </center>
                     </div>
                     </div>
                 </table> 
              </div>
        </div>
    </div>

    <hr />

    
    </>
  )
}

export default Task
