import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form  action="">
            <input type="text" style={{marginTop:'10%'}} required  name="result" id="result" autoComplete="off"/>
            <input style={{marginTop:'10px'}} required  name="ref" id="ref" autoComplete="off" />
            <input  style={{marginTop:'10px'}} required  name="unit" id="unit" autoComplete="off" />
            <button type="submit" className="btn btn-primary" style={{marginTop:'30px'}}  >Primary Button</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default About