import React, { useState } from "react";
import { Button, Form, Input, Radio, Card } from "antd";
import "./App.css";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const plainOptions = ["Male", "Female", "Other"];

const App = () => {
  const [data, setData] = useState({ name: "", age: "", gender: "" });
  const [info, setInfo] = useState([]);

  const inputEvent = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  console.log(data);

  const onFinish = () => {
    setInfo([...info, data]);
  };

  return (
    <>
      <div>
        <Card
          title={
            <h2>
              <center>Patient-log</center>
            </h2>
          }
          bordered={false}
          style={{
            width: "100vh",
          }}
        >
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            style={{
              maxWidth: 600,
            }}
          >
            <Form.Item label="Name">
              <Input name="name" onChange={inputEvent} value={data.name} />
            </Form.Item>
            <Form.Item label="Age">
              <Input name="age" onChange={inputEvent} value={data.age} />
            </Form.Item>

            <Form.Item label="Gender">
              <Radio.Group
                name="gender"
                options={plainOptions}
                onChange={inputEvent}
                value={data.gender}
              />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                ...layout.wrapperCol,
                offset: 8,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {info.map((prevalues, index) => {
                const { name, age, gender } = prevalues;
                return (
                  <tr key={index}>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{gender}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
};

export default App;
