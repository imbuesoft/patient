
import './App.css';


const  Profile= () =>{
  return (
    <div className="app">
    <div className="container">
      <form>
        <div className="header">
        <h1 className="h1">Profile</h1>
        <img className="img" src="https://img.freepik.com/free-icon/user_318-159711.jpg" />
        </div>
        <div className="form-group">

  </div>  
  <div className="form-group">
    <label htmlFor="Height">Name:</label>
    <input type="text" className=" form-control" id="name"  placeholder="Name" name="name" />
  </div>
  <div className="form-group">
    <label htmlFor="mnumber">Mobile No:</label>
    <input type="text" className="form-control" id="mobile"  placeholder="Mobile No" name="mobile" />
  </div>
  <div className="form-group">
    <label htmlFor="mnumber">Birth Date:</label>
    <input type="date" className="form-control" id="weight"  placeholder="Mobile No" name="date"/>
  </div>
  <div className="form-group">
    <label htmlFor="email">Email:</label>
    <input type="email" className="form-control" id="email"  placeholder="Email" name="email"/>
   </div>

  <button type="submit" className="btn btn-primary">
    Save
  </button> 
  
</form>

</div>
</div>
  );
};

export default Profile;