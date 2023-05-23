import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, Radio } from 'antd';

const PatientForm = () => {
  const [formData, setFormData] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const onFinish = (values) => {
    console.log('Received values:', values);
    setFormData(values);
    setSubmittedData(values);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
      <Form name="patient_form" onFinish={onFinish}>
        <div style={{ backgroundColor: ' aquamarine', padding: '24px', borderRadius: '14px', margin: '100px', border: '1px solid black' }}>
          <table style={{ margin: '0 auto', borderCollapse: 'collapse', width: '100%' }}>
            <tbody>
              <tr>
                <td style={{ padding: '8px' }}>
                  <b><label style={{ fontFamily: 'Arial', fontSize: '16px' }}>Name:</label></b>
                </td>
                <td>
                  <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Please enter the patient name' }]}
                  >
                    <Input placeholder="Enter name" style={{ width: '300px',marginTop:'20px' }} />
                  </Form.Item>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>
                 <b><label style={{ fontFamily: 'Arial', fontSize: '16px' }}>Date of Birth:</label></b>
                </td>
                <td>
                  <Form.Item
                    name="dob"
                    rules={[{ required: true, message: 'Please select the date of birth' }]}
                  >
                    <DatePicker placeholder="Select date" style={{ width: '300px',marginTop:'20px' }} />
                  </Form.Item>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>
                    <b><label style={{ fontFamily: 'Arial', fontSize: '16px' }}>Gender:</label></b>
                </td>
                <td>
                  <Form.Item
                    name="gender"
                    rules={[{ required: true, message: 'Please select the gender' }]}
                  >
                    <Radio.Group style={{ marginTop:'20px' }}>
                      <b><Radio value="male">Male</Radio></b>
                      <b><Radio value="female">Female</Radio></b>
                    </Radio.Group>
                  </Form.Item>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>
                <b><label style={{ fontFamily: 'Arial', fontSize: '16px' }}>Phone Number:</label></b>
                </td>
                <td>
                  <Form.Item
                    name="phone"
                    rules={[
                      { required: true, message: 'Please enter the mobile number' },
                      { max: 10, message: 'Mobile number should be 10 digits' },
                    ]}
                  >
                    <Input placeholder="Enter phone number" style={{ width: '300px',marginTop:'20px' }}  />
                  </Form.Item>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>
                <b><label style={{ fontFamily: 'Arial', fontSize: '16px' }}>Email:</label></b>
                </td>
                <td>
                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: 'Please enter the email address' },
                      { type: 'email', message: 'Please enter a valid email address' },
                    ]}
                  >
                    <Input placeholder="Enter email address"style={{ width: '300px',marginTop:'20px' }} />
                  </Form.Item>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>
                <b><label style={{ fontFamily: 'Arial', fontSize: '16px' }}>Address:</label></b>
                </td>
                <td>
                  <Form.Item
                    name="address"
                    rules={[{ required: true, message: 'Please enter the address' }]}
                  >
                    <Input.TextArea placeholder="Enter address" style={{ width: '300px',marginTop:'20px' }} />
                  </Form.Item>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>
                <b><label style={{ fontFamily: 'Arial', fontSize: '16px' }}>City:</label></b>
                </td>
                <td>
                  <Form.Item
                    name="city"
                    rules={[{ required: true, message: 'Please enter the city' }]}
                  >
                    <Input placeholder="Enter city" style={{ width: '300px',marginTop:'20px'}} />
                  </Form.Item>
                </td>
              </tr>
            </tbody>
          </table>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
      {submittedData && (
        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <h2>Submitted Data</h2>
          <table style={{ margin: '0 auto', border: '1px solid black', borderRadius: '4px', backgroundColor: '#f0f0f0' }}>
            <tbody>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px', fontWeight: 'bold',fontFamily: 'Arial'}}>Name:</td>
                <td style={{ border: '1px solid black', padding: '8px',fontFamily: 'Arial'}}>{submittedData.name}</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px', fontWeight: 'bold',fontFamily: 'Arial'}}>Date of Birth:</td>
                <td style={{ border: '1px solid black', padding: '8px',fontFamily: 'Arial'}}>{submittedData.dob.toString()}</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px', fontWeight: 'bold',fontFamily: 'Arial' }}>Gender:</td>
                <td style={{ border: '1px solid black', padding: '8px',fontFamily: 'Arial' }}>{submittedData.gender}</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px', fontWeight: 'bold',fontFamily: 'Arial' }}>Phone Number:</td>
                <td style={{ border: '1px solid black', padding: '8px',fontFamily: 'Arial' }}>{submittedData.phone}</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px', fontWeight: 'bold',fontFamily: 'Arial' }}>Email:</td>
                <td style={{ border: '1px solid black', padding: '8px',fontFamily: 'Arial' }}>{submittedData.email}</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px', fontWeight: 'bold',fontFamily: 'Arial' }}>Address:</td>
                <td style={{ border: '1px solid black', padding: '8px',fontFamily: 'Arial' }}>{submittedData.address}</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px', fontWeight: 'bold',fontFamily: 'Arial' }}>City:</td>
                <td style={{ border: '1px solid black', padding: '8px',fontFamily: 'Arial' }}>{submittedData.city}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PatientForm;
