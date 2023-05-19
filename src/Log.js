import React from 'react';
import { Form, Input, Button, Row, message } from 'antd';

const Log = () => {
    const handle = (values) => {
          values.pass ==='abc' ? message.success("Logged in"):message.error("Wrong Password")
      };
  return (
    <div>
       <Row justify="center" align="middle" style={{ height: '50vh' }}>
      <Form onFinish={handle}>
      <Form.Item
        label="Username"
        name="user"
        rules={[{ required: true, message: 'Please enter your username' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="pass"
        rules={[{ required: true, message: 'Please enter your password' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>
    </Form>
    </Row>
    </div>
  )
}

export default Log
