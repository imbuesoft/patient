import React, { useState } from 'react';
import { Card, Form, Input, Button, Typography, message } from 'antd';

const { Title } = Typography;

const BmiCalculator = () => {
    const [bmiResult, setBmiResult] = useState(null);

    const onFinish = (values) => {
        const { weight, height } = values;
        const bmi = weight / (height * height);
        setBmiResult(bmi.toFixed(2));
    };

    const getBmiCategory = (bmi) => {
        if (bmi < 18.5) {
            return 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            return 'Overweight';
        } else {
            return 'Obese';
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', minHeight: '100vh'}}>
            <Card style={{ width: 400, padding: 24, border: "0.1em solid #ddd", margin:"5em auto auto" , boxShadow: "0.0em 0.5em 2em 1em #00000011", borderRadius: "1em" }}>
                <Title level={1} style={{ textAlign: 'center', margin: '0 0 1em 0' }}>
                    BMI Calculator
                </Title>
                <Form onChange={()=>{setBmiResult("")}} onFinish={onFinish} layout="vertical">
                    <Form.Item
                        label="Height (in meters)"
                        name="height"
                        rules={[{ required: true, message: 'Please enter your height!' }]}
                    >
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item
                        label="Weight (in kg)"
                        name="weight"
                        rules={[{ required: true, message: 'Please enter your weight!' }]}
                    >
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item style={{margin:"2em 0 0 0"}}>
                        <Button type="primary" size='large' htmlType="submit" block>
                            Calculate BMI
                        </Button>
                    </Form.Item>
                </Form>
                {bmiResult && (
                    <div>
                        <Title level={4} type="bmi_result">Your BMI: {bmiResult}</Title>
                        <Title level={4} type="category_result">Category: {getBmiCategory(bmiResult)}</Title>
                    </div>
                )}
            </Card>
        </div>
    );
};

export default BmiCalculator;
