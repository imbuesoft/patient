import React from 'react'
import './Productcss.css';
const Product = () => {
  return (
    <>
      <div className="container" style={{marginTop:'10%',marginLeft:'30%'}}>
        <div className="row">
          <div className="col-12">
      <div className="input__container">
        <div className="shadow__input" />
        <table>
          <tr>
            <td><input type="text" name="text" className="input__search" placeholder="User Id" /></td>
          </tr>
          <tr>
            <td><input type="text" name="text" className="input__search" placeholder="email" style={{marginTop:'20px'}} /></td>
          </tr>
          <tr>
            <td><input type="text" name="text" className="input__search" placeholder="password" style={{marginTop:'20px'}} /></td>
          </tr>
        </table>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default Product