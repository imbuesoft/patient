import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Homeform.css';

const Home = () => {

  const [userRegistration, setuserRegistration] = useState({

    firstname:"",
    lastname:"",
    email:"",
    password:"",
    confirmpassword:""
  });

  const [Records, setRecords] = useState([]);

  const handleInput = (e) =>{

    const name= e.target.name;
    const value =e.target.value;
    console.log(name , value);

    setuserRegistration({...userRegistration, [name]: value});
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    const newRecord ={...userRegistration, id:new Date().getTime().toString()}
    console.log(Records);
    setRecords([...Records, newRecord]);
    

    setuserRegistration({firstname:"",lastname:"",email:"",password:"",confirmpassword:""});
  }
  return (
    <>
      <div className="container" style={{marginTop:'20px',marginLeft:'550px'}}>
       <form className="form" action="" onSubmit={handleSubmit}>
        <p className="title">Sign Up </p>
        <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
          <label>
            <input required  value={userRegistration.firstname} onChange={handleInput} type="text" className="input"  name="firstname" id="firstname" autoComplete="off" />
            <span htmlFor="firstname">Firstname</span>
          </label>
          <label>
            <input required  value={userRegistration.lastname} onChange={handleInput} type="text" className="input" name="lastname" id="lastname" autoComplete="off" />
            <span htmlFor="lastname">Lastname</span>
          </label>
        </div>  
        <label>
          <input required  value={userRegistration.email} onChange={handleInput} type="email" className="input" name="email" id="email" autoComplete="off" />
          <span htmlFor="email">Email</span>
        </label> 
        <label>
          <input required  value={userRegistration.password} onChange={handleInput} type="password" className="input" name="password" id="password" autoComplete="off" />
          <span htmlFor="password">Password</span>
        </label>
        <label>
          <input required  value={userRegistration.confirmpassword} onChange={handleInput} type="password" className="input" name="confirmpassword" id="confirmpassword" autoComplete="off" />
          <span htmlFor="confirmpassword">Confirm password</span>
        </label>
        <button className="submit" type="submit" >Submit</button>
        <p className="signin">Already have an acount ? <Link >Signin</Link> </p>
      </form>
      </div>

      <div className="container">
        <div className="fatchData">
          {
            Records.map((curElem) => {
              const {id,firstname,lastname,email,password,confirmpassword}=curElem;
                return (
                  <div className="showDatastyle" key={id }>
                    <table className="table table-striped table-dark" align="center" style={{marginTop:'60px'}}>
                    <thead>
                        <tr align="center">
                          <th colSpan="5" ><h4>USER REGISTER DATA</h4></th>
                        </tr>
                      </thead>
                      <thead>
                        <tr>
                          <th>FirstName</th>
                          <th>LastName</th>
                          <th>Gmail</th>
                          <th>Password</th>
                          <th>ConfirmPassword</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><p>{firstname}</p></td>
                          <td><p>{lastname}</p></td>
                          <td><p>{email}</p></td>
                          <td><p>{password}</p></td>
                          <td><p>{confirmpassword}</p></td>
                         </tr>
                       </tbody>
                    </table>
                  </div>
                )
            })
          }
        </div>

      </div>
    </>
  )
}

export default Home