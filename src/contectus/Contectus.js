import React from 'react'

const Contectus = () => {
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
    </>
  )
}

export default Contectus