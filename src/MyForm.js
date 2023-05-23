import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: ''
  });

  const [formSubmissions, setFormSubmissions] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData,[name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const jsonData = JSON.stringify(formData);
    console.log(jsonData); // You can send the JSON data to an API or perform any other action
    // Reset form data
    setFormData({
      name: '',
      age: '',
      gender: ''
    });
    // Add the form submission to the array
    setFormSubmissions((prevSubmissions) => [...prevSubmissions, formData]);
  };

  return (
    <div className="container" style={{marginTop:'40px'}}>
        <div className="row">
            <div className="col-6" style={{backgroundColor:'#EFE1E1',borderRadius:'10px'}}>
         <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="name"><b>Name:</b></label>
          <input type="text" id="name" name="name" style={{height:'30px'}} className="form-control" value={formData.name} onChange={handleInputChange} autoComplete="off" required />
        </div>
        <div className="form-group" style={{marginTop:'20px'}}>
          <label htmlFor="age"><b>Age:</b></label>
          <input type="number" id="age" name="age" style={{height:'30px'}} className="form-control" value={formData.age} onChange={handleInputChange} autoComplete="off" required />
        </div>
        <div className="form-group" style={{marginTop:'20px'}}>
          <label htmlFor="gender"><b>Gender:</b></label>
          <select id="gender" name="gender" className="form-control" style={{height:'40px'}} value={formData.gender} onChange={handleInputChange} required >
            <option value="">-- Select gender --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-floating">
        <button className="btn btn-outline-primary" style={{marginTop:'30px',marginBottom:'10px',width:'25%',borderRadius:'100px'}} type="submit"><b>Submit</b></button>
        </div>
      </form>
      </div>
       

        <div className="col-6" >
      {formSubmissions.length > 0 && (
        <table className="table table-bordered table-light">
          <thead >
            <tr align="center" >
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {formSubmissions.map((submission, index) => (
              <tr key={index} align="center">
                <td>{submission.name}</td>
                <td>{submission.age}</td>
                <td>{submission.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      </div>
      </div>
    </div>
  );
};

export default MyForm;
