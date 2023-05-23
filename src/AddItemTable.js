import React, { useState } from "react";
import { Select, Space, Button } from "antd";
import { PlusCircleOutlined, EyeOutlined, EditOutlined  } from "@ant-design/icons";
import { ColorFactory } from "antd/es/color-picker/color";

const AddItemTable = () => {
  const styles = {
    position: "fixed",
    top: "0",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "10px",
    
  };

  const tablestyle = {
      border:"2px solid black",
       width:"400px",
      
  }
  const name = ["Prakash Gujarati", "Dhruhit akbari", "Deep Pandya"];
  const finding = [
    "Hemoglobin(Hb)",
    "Total RBC count",
    "Packed Cell Volume(PCV)",
    "Mean Corpuscular Volume",
    "RDW",
    "Total Web count",
    "Neutrophils",
    "Lymphocytes",
    "Eoinophils",
    "Monocytes",
    "Basophils",
    "Platelet Count",
  ];
  const [data, setData] = useState({});
  const [info, setInfo] = useState([]);
  const handle = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const handleAddItem = () => {
    setInfo([...info, data]);
    return(<h2>Name:{name}</h2>)
  };

  return (
    <>
      <div style={styles}>
        <Space direction="vertical"

         style={{border:"1px solid black",
         backgroundColor:"#A5D3FF",
          width:"400px",
           height:"400px",
          alignItems:"center",
          height:"150px" ,
          dispaly:"flex",
          justifyContent:"center",
          marginBottom:"20px",}}> 
       
          <Select
            placeholder="Select Name"
            name="name"
            style={{ width: "250px"}}
            onChange={(value) => handle("name", value)}
          >
            {name.map((name, index) => (
              <Select.Option key={index} value={name}>
                {name}
              </Select.Option>
            ))}
          </Select>
         {/* <br /> */}
          <Select
            placeholder="Select Investigation"
            style={{ width: "250px" }}
            onChange={(value) => handle("find", value)}
            name="find"
          >
            {finding.map((find, index) => (
              <Select.Option key={index} value={find}>
                {find}
              </Select.Option>
            ))}
          </Select>
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            onClick={handleAddItem}
          >
            Add
          </Button>
        </Space>
        
        <table style={tablestyle}>
          <thead style={{textAlign:"center"}}>
            <tr>
              <th>Investigation</th>
            </tr>
            
          </thead>
          <tbody style={{textAlign:"center"}}>
            {info.map((prevalues, index) => {
              const { name, find } = prevalues;
              return (
                <>
                <div>
                <tr key={index} >
                  <td>{find} <Space><Button type="primary" icon={< EyeOutlined />}>View</Button><Button type="primary" icon={< EditOutlined />}>Edit</Button></Space></td>
                </tr>
                </div>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AddItemTable;