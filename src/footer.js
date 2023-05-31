import React from 'react';
import { Layout, theme } from 'antd';
const { Footer } = Layout;
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Footer
    style={{
    textAlign:'center',
    borderBottom: '1px solid #ddd',
    height: '60px',
    lineHeight: '60px',
    backgroundColor: 'orange',
    marginBottom: '100px',
    marginTop: '700px'
     }}
  >
   <h2>this is a footer.</h2> 
  </Footer>
   );
};
export default App;

