import React from 'react'
import { Menu,Button,Select ,Input,Row,Col} from 'antd';
import { HomeOutlined,InfoCircleOutlined,UserOutlined ,ToolOutlined ,SettingOutlined,SearchOutlined} from '@ant-design/icons';



const Navbar = () => {
    const { Option } = Select;
    const { Search } = Input;
    const handleSelectChange = (value) => {
      console.log(`Selected option: ${value}`);
    };
    const handleSearch = (value) => {
        console.log(`Search value: ${value}`);
      };
  return (
    <>
        {/* <Row> */}
     <Menu mode ="horizontal" style={{width:"100%",backgroundColor:"balck"}} >
            {/* <Col span={20}>  */}
                <Menu.Item key="home"  icon={<HomeOutlined />} >
                 Home
                </Menu.Item>
    
                <Menu.Item key="user" icon={<UserOutlined />}>
                Find Doctors
                </Menu.Item>
                
                <Menu.Item key="about" icon={<InfoCircleOutlined />}>
                  About
                </Menu.Item>
                
                <Menu.Item key="selectOption">
                  <Select defaultValue="Option 1" style={{ width: 120 }} onChange={handleSelectChange}>
                    <Option value="Option 1">Services</Option>
                    <Option value="Option 2">Emergency Care</Option>
                    <Option value="Option 3">Laboratory service</Option>
                  </Select>
                </Menu.Item>
            {/* </Col> */}

            {/* <Col span={2}> */}

                <Menu.Item key="login" style={{ float: 'right' }}>
                    <Button type="primary">Login</Button>
                </Menu.Item>
            {/* </Col> */}

            {/* <Col span={2}> */}
            <Menu.Item key="signup" style={{ float: 'right' }}>   
              <Button>Sign Up</Button>
            </Menu.Item>
            {/* </Col> */}
     
    </Menu>
    {/* </Row> */}
  

    </>
  )
}

export default Navbar



