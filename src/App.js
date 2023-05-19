
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
        textAlign: 'center',
        borderBottom: '1px solid #ddd',
        height: '100px',
        lineHeight: '60px',
        backgroundColor: 'orange',
        marginBottom: '100px',
        marginTop: '800px'
      }}
    >
      <h1>this is a footer.</h1>
    </Footer>
  );
};
export default App;

