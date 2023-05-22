import React, { useState } from 'react';
import { Layout, QRCode } from 'antd';

const { Footer } = Layout;

const MyFooter = () => {
  const [config] = useState({
    phoneNumber: '+91 88662 02121',
    paymentUPI: 'smartlab@ICICI',
    printedBy: 'Miss Rashmi Varma',
    printedOn: '04:35 PM 02 Apr, 23'
  });

  return (
    <Layout>
      <Footer style={{ fontFamily: 'sans-serif', height: '130px', padding: '15px',backgroundColor: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <b> Sample Collection: </b> {config.phoneNumber}
            <br />
            <br />
            <b> Payment UPI: </b> {config.paymentUPI}
          </div>
          <div style={{ marginTop: '-10px' }}>
            <QRCode value="+91 88662 02121" size={80} />
          </div>
          <div>
            <b> Report Printed By: </b> {config.printedBy}
            <br />
            <br />
            <b> Report Printed on: </b> {config.printedOn}
          </div>
        </div>
        <div style={{ textAlign: 'center',marginTop: '-10px' }}>
          <p> For any concerns regarding this report, call our quality helpline on +91 88662 02121 </p>
        </div>
      </Footer>
    </Layout>
  );
}

export default MyFooter;
