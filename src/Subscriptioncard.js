import React from 'react'

const Subscriptioncard = () => {
  return (
   <>
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
   </>
  )
}

export default Subscriptioncard