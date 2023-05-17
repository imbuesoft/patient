import React from 'react'
import { InputNumber,Button, Form,Typography,Radio,Table} from 'antd';
import {useState} from 'react'

  
export default function Bmi() {
  const columns = [
    {
      title: 'CATEGORY',
      dataIndex: 'CATEGORY',
      key: 'CATEGORY', 
      align: "center",
    },
    {
      title: 'BMI RANGE kg/m2',
      dataIndex: 'RANGE',
      key: 'RANGE', 
      align: "center",
    },
  ]
    const data = [
      {
        key: '1',
        CATEGORY: 'Underweight',
        RANGE:'<18.5'
      },
      {
        key: '2',
        CATEGORY: 'Normal Weight',
        RANGE:'18.5 - 24.9'
      },
      {
        key: '3',
        CATEGORY: 'Overweight',
        RANGE:'25 - 29.9'
      },
      {
        key: '4',
        CATEGORY: 'Obese',
        RANGE:'>30'
      }

    ];
  const [bmi,setBmi]=useState(0)
  const [form] = Form.useForm();
  const height = Form.useWatch('height', form);
  const cm=height/100
  const weight = Form.useWatch('weight', form);
  const submit=()=>{
    setBmi(weight/(cm*cm))
  }
  return ( 
      <>
    <h1 align='center'><b>BMI Calculator</b></h1>
    <Form form={form}>
       <Form.Item name="height" label="Height(cm)">
          <InputNumber />
        </Form.Item>
      <Form.Item name="weight" label="Weight(kg)" >
          <InputNumber />
        </Form.Item>
        <Form.Item name="age" label="Age" >
          <InputNumber />
      </Form.Item>
      <Form.Item label="Gander">
          <Radio.Group>
            <Radio value="Male"> Male </Radio>
            <Radio value="Female"> Female </Radio>
          </Radio.Group>
        </Form.Item>
      <Button type='primary' onClick={submit} >Calculate</Button>
    </Form>
     <Typography>
     <pre>BMI: {bmi.toFixed(2)}</pre>
     <h1 align="center">BMI Chart</h1>
     <Table columns={columns} dataSource={data} />;
   </Typography>
   </>
  );
}

