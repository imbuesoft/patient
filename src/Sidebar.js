import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  FilterOutlined,
  GlobalOutlined,
  TagsOutlined,
  FileOutlined,
  EyeOutlined,
  StarOutlined,
  AppstoreOutlined,
  BulbOutlined,
  MessageOutlined,
  TeamOutlined,
  FlagOutlined,
  HeartOutlined,
} from '@ant-design/icons';
const { Sider } = Layout;
const { SubMenu } = Menu;




      const Sidebar = () => {
      const [selectedKeys, setSelectedKeys] = useState(['1']);
      const [selectedKeys1, setSelectedKeys1] = useState(['2']);
      const [selectedKeys2, setSelectedKeys2] = useState(['3']);
      const [selectedKeys3, setSelectedKeys3] = useState(['4']);
      const [selectedKeys4, setSelectedKeys4] = useState(['5']);
      const [selectedKeys5, setSelectedKeys5] = useState(['6']);
      const [selectedKeys6, setSelectedKeys6] = useState(['7']);
      const [selectedKeys7, setSelectedKeys7] = useState(['8']);
      const [selectedKeys8, setSelectedKeys8] = useState(['9']);
      const [selectedKeys9, setSelectedKeys9] = useState(['10']);
      const [selectedKeys10, setSelectedKeys10] = useState(['11']);
      const [selectedKeys11, setSelectedKeys11] = useState(['12']);
      const [selectedKeys12, setSelectedKeys12] = useState(['13']);
      const [selectedKeys13, setSelectedKeys13] = useState(['14']);
      const [selectedKeys14, setSelectedKeys14] = useState(['15']);
      const [selectedKeys15, setSelectedKeys15] = useState(['16']);
      const [selectedKeys16, setSelectedKeys16] = useState(['17']);
      const [selectedKeys17, setSelectedKeys17] = useState(['18']);
      const [selectedKeys18, setSelectedKeys18] = useState(['19']);
    
      const handleMenuSelect = (key) => {
        setSelectedKeys([key]);
      };
      const handleMenuSelect1 = (key) => {
        setSelectedKeys1([key]);
      };
      const handleMenuSelect2 = (key) => {
        setSelectedKeys2([key]);
      };
      const handleMenuSelect3 = (key) => {
        setSelectedKeys3([key]);
      };
      const handleMenuSelect4 = (key) => {
        setSelectedKeys4([key]);
      };
      const handleMenuSelect5 = (key) => {
        setSelectedKeys5([key]);
      };
      const handleMenuSelect6 = (key) => {
        setSelectedKeys6([key]);
      };
      const handleMenuSelect7 = (key) => {
        setSelectedKeys7([key]);
      };
      const handleMenuSelect8 = (key) => {
        setSelectedKeys8([key]);
      };
      const handleMenuSelect9 = (key) => {
        setSelectedKeys9([key]);
      };
      const handleMenuSelect10 = (key) => {
        setSelectedKeys10([key]);
      };
      const handleMenuSelect11 = (key) => {
        setSelectedKeys11([key]);
      };
      const handleMenuSelect12 = (key) => {
        setSelectedKeys12([key]);
      };
        
      const handleMenuSelect13 = (key) => {
        setSelectedKeys13([key]);
      };
      const handleMenuSelect14 = (key) => {
        setSelectedKeys14([key]);
      };
      const handleMenuSelect15 = (key) => {
        setSelectedKeys15([key]);
      };
      const handleMenuSelect16 = (key) => {
        setSelectedKeys16([key]);
      };
      const handleMenuSelect17 = (key) => {
        setSelectedKeys17([key]);
      };
      const handleMenuSelect18 = (key) => {
        setSelectedKeys18([key]);
      };
      return (
        <Sider width={300} theme="dark"  style={{ margin:0} }>
          <Menu
            mode="inline"
            selectedKeys={selectedKeys}
            onSelect={handleMenuSelect}
            selectedKeys1={selectedKeys1}
            onSelect1={handleMenuSelect1}
            selectedKeys2={selectedKeys2}
            onSelect2={handleMenuSelect2}
            selectedKeys3={selectedKeys3}
            onSelect3={handleMenuSelect3}
            selectedKeys4={selectedKeys4}
            onSelect4={handleMenuSelect4}
            selectedKeys5={selectedKeys5}
            onSelect5={handleMenuSelect5}
            selectedKeys6={selectedKeys6}
            onSelect6={handleMenuSelect6}
            selectedKeys7={selectedKeys7}
            onSelect7={handleMenuSelect7}
            selectedKeys8={selectedKeys8}
            onSelect8={handleMenuSelect8}
            selectedKeys9={selectedKeys9}
            onSelect9={handleMenuSelect9}
            selectedKeys10={selectedKeys10}
            onSelect10={handleMenuSelect10}
            selectedKeys11={selectedKeys11}
            onSelect11={handleMenuSelect11}
            selectedKeys12={selectedKeys12}
            onSelect12={handleMenuSelect12}
            selectedKeys13={selectedKeys13}
            onSelect13={handleMenuSelect13}
            selectedKeys14={selectedKeys14}
            onSelect14={handleMenuSelect14}
            selectedKeys15={selectedKeys15}
            onSelect15={handleMenuSelect15}
            selectedKeys16={selectedKeys16}
            onSelect16={handleMenuSelect16}
            selectedKeys17={selectedKeys17}
            onSelect17={handleMenuSelect17}
            selectedKeys18={selectedKeys18}
            onSelect18={handleMenuSelect18}
    
            style={{ height: '100%', borderRight: 0,paddingTop:0 }}
          >
        <SubMenu key="sub1" title={<span><FilterOutlined />Filters</span>}>
          <Menu.Item key="3">View All</Menu.Item>
          <SubMenu key="sub4" title={<span><FileOutlined />Courses</span>}>
            <Menu.Item key="16">CSS</Menu.Item>
            <Menu.Item key="17">HTML</Menu.Item>
            <Menu.Item key="18">React</Menu.Item>
            <Menu.Item key="19">javascript</Menu.Item> 
          </SubMenu>
          <Menu.Item key="5"><AppstoreOutlined />Learning Paths</Menu.Item>
          <Menu.Item key="6"><TagsOutlined />Collections</Menu.Item>
          <Menu.Item key="7"><EyeOutlined />Recently Viewed</Menu.Item>
          <Menu.Item key="8"><TeamOutlined />Popular Categories</Menu.Item>
          <Menu.Item key="9"><StarOutlined />Favorites</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><GlobalOutlined />Languages</span>}>
          <Menu.Item key="10">English (United States)</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" title={<span><BulbOutlined />Topics</span>}>
          <Menu.Item key="11">20 Free Courses</Menu.Item>
          <Menu.Item key="12"><FlagOutlined />Bullying</Menu.Item>
          <Menu.Item key="13"><MessageOutlined />Communication Skills</Menu.Item>
          <Menu.Item key="14"><TeamOutlined />Teamwork</Menu.Item>
          <Menu.Item key="15"><HeartOutlined />Emotional Intelligence</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};


export default  Sidebar;
