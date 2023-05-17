import { useState } from "react";
import { Card, Form, Input, Radio, Button, Typography } from 'antd';

const { Title } = Typography;

const App = () => {
  const [data, setData] = useState({
    height: "", weight: "", age: "", gender: ""
  });
  const [bmi, setBmi] = useState(0);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const submit = () => {
    const bmi = (data.weight) / ((data.height) * (data.height));
    setBmi(bmi.toFixed(2));
  }

  return (
    <div className="container">
      <Card title={<Title level={2} style={{ textAlign: 'center' }}>BMI Calculator</Title>} bordered={false} style={{ width: 600, margin: "0 auto", marginTop: "15px", backgroundColor: "rgb(155, 219, 233)" }}>
        <Form layout="vertical">
          <Form.Item label="Height (meters)">
            <Input type="number" name="height" onChange={handleChange} value={data.height} />
          </Form.Item>
          <Form.Item label="Weight (kilograms)">
            <Input type="number" name="weight" onChange={handleChange} value={data.weight} />
          </Form.Item>
          <Form.Item label="Age (years)">
            <Input type="number" name="age" onChange={handleChange} value={data.age} />
          </Form.Item>
          <Form.Item label="Gender">
            <Radio.Group onChange={handleChange} name="gender">
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <Button type="primary" block onClick={submit}>Submit</Button>
          </Form.Item>
        </Form>
        <div className="result mt-3 text-center">
          {bmi !== 0 && <Title level={4}>Result : {bmi}</Title>}
        </div>
      </Card>
    </div>
  );
}

export default App; 
