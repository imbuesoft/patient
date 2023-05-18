import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="container" style={{marginTop:'60px'}}>
        <div className="row">
          <div className="col-6">
            <h4><img src="https://cdn-icons-png.flaticon.com/128/3771/3771436.png" style={{height: '60px'}} /> BY PHONE </h4>
            (Monday to Friday, 9am to 6pm PST)<br />
            West Gujrat Toll-Free:+91 7043510120
            <br />
            <br />
            <h4><img src="https://cdn-icons-png.flaticon.com/128/9068/9068642.png" style={{height: '60px'}} /> BY E-MAIL</h4>
            <p>
              devkacha90@gmail.com<br />
              dkacha03@gmail.com
            </p>
            <br />
            <h4><img src="https://cdn-icons-png.flaticon.com/128/854/854878.png" style={{height: '60px'}} /> LOCATION</h4>
            <p> 
              infotech, <br />
              airport road,<br />
              Rajkot<br />
              pin code:-360007<br />
            </p>
          </div>
          <div className="col-6" style={{marginTop: '5%'}}>
            <form>
              <div className="form-group">
                <label style={{fontWeight:'bold'}}>Enter Name:</label>
                <input type="text" className="form-control" placeholder="ENTER YOUR NAME" required  />
              </div>
              <div className="form-group">
                <label  style={{marginTop:'20px',fontWeight:'bold'}}>Enter Phone.No:</label>
                <input type="number" maxLength={10}  className="form-control" placeholder="ENTER YOUR PHONE NUMBER" required />
              </div>
              <div className="form-group">
                <label style={{marginTop:'20px',fontWeight:'bold'}}>Enter Gmail:</label>
                <input type="email" name="GM" className="form-control" placeholder="ENTER YOUR GMAIL" required />
              </div>
              <div className="form-group">
                <label style={{marginTop:'20px',fontWeight:'bold'}}>Message:</label>
                <textarea className="form-control" defaultValue={""} />
              </div>
              <div className="form-floating">
                <input type="submit"  className="btn btn-outline-primary" style={{marginTop:'50px',marginLeft:'35%'}}/>
                <input type="reset"  className="btn btn-outline-danger" style={{marginTop:'50px',marginLeft:'10px'}} />
              </div>
            </form></div>
        </div>
      </div>
    </>
  )
}

export default Contact