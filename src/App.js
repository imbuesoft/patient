import React from 'react';
import Navbar from './Navbar';



  const App = () => {
    
  return (
    <div className="App">
       {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="2" icon={<AppstoreOutlined />}>
        Products
      </Menu.Item>
      <Menu.Item key="3" icon={<MailOutlined />}>
        Contact
      </Menu.Item>
    </Menu> */}
   <Navbar/>
    </div>
  );
}

export default App;
