import React from 'react';
import { QRCode } from 'antd';
import { Typography } from 'antd';
const { Text} = Typography;


const downloadQRCode = () => {
  const canvas = document.getElementById('myqrcode')?.querySelector('canvas');
  if (canvas) {
    const url = canvas.toDataURL();
    const a = document.createElement('a');
    a.download = 'QRCode.png';
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
};




const App = () => (
  
  <div id="myqrcode" >
    <hr style={{ borderTop: '1px solid #000', margin: '10px 0' }} />
    <QRCode
      value="https://ant.design/"
      style={{
        margin:'auto',
      }}
    />
     

<div style={{ textAlign: 'center' }}>
      <Text style={{fontSize:'30px'}}>For any concerns regarding this report,call our quality helpline on +91 88662 02121</Text>
    </div>
    <div>
      <Text style={{position: 'absolute',padding:'30px', top: '0', left: '0', paddingLeft: '0px',fontSize:'30px'}}>Sample Collection:</Text>
      <Text strong style={{position: 'absolute', top: '0', left: '215px', padding: '30px',fontSize:'30px'}}>
        +91 88662 02121
      </Text>
      <Text style={{position: 'absolute',padding:'90px', top: '0', left: '0', paddingLeft: '1px',fontSize:'30px'}}>Payment UPI:</Text>
      <Text strong style={{position: 'absolute', top: '0', left: '90px', padding: '90px',fontSize:'30px'}}>
       smartlab@ICICI </Text>
       <Text strong style={{position: 'absolute',padding:'30px', top: '0', left: '0', paddingLeft: '1080px',fontSize:'30px'}}>Report Printed By:</Text>
       <Text style={{position: 'absolute',padding:'30px', top: '0', left: '0', paddingLeft: '1330px',fontSize:'30px'}}>Miss Rashmi Varma</Text>
       <Text strong style={{position: 'absolute',padding:'90px', top: '0', left: '0', paddingLeft: '1083px',fontSize:'28px'}}>Report Printed on:</Text>
       <Text style={{position: 'absolute',padding:'90px', top: '0', left: '0', paddingLeft: '1330Px',fontSize:'28px'}}>04:35PM,02Apr,23</Text>
       </div>
</div>

);
export default App;