import React from "react";
import QRCode from 'qrcode.react';
import { Divider } from 'antd';
import Header from './Header';
import H1 from './H1';
import H2 from './H2';

const App=()=>{
  
  const person={
    name:"Yash M. Patel",
    age:21 ,
    sex:"Male",
    pid:"555"
  };
  
  const h1 ={
    name :"Sample Collected At:",
    address:"125,Shivam Bungalow,S GRoad,Ahmadabad",
    refby:"Dr. Hiren Shah."
  };
  const h2 ={
    registered: "02:31 PM 02 Dec,21",
    collected: "03:11 PM 02 Dec,21",
    reported: "04:35 PM 02 Dec,21"
    
  };
  return(
    <div style={{display:'flex',justifyContent:'center'}}>
      <div style={{margin:'0 200px 0 40px', borderLeftWidth: 1,borderLeftColor: 'gray'}}>
        
      <Header
        {...person}>
      </Header>
      
    </div><QRCode Value="http://www.vistaderm.in"/> < Divider
   type="vertical" style={{ height: "200px", backgroundColor: "#ede9c0" }}
/>

    <div style={{margin: '0 200px 0 40px'}}>
      <H1 {...h1}/>

      

    </div>
    < Divider
   type="vertical" style={{ height: "200px", backgroundColor: "#ede9c0" }}
/>
    <div style={{margin: '0 200px 0 40px'}}>
      <H2 {...h2}/>
    </div>
   
    </div>
  );

};
export default App;