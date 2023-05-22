import React, { useState } from "react";
import { Card } from "antd";
import "./App.css";
import Report from "./Components/Report";
import { api } from "./Components/api.js";
const App = () => {
  const [data] = useState(api);
  return (
    <>
      <div
        style={{
          justifyContent: "center",
        }}
      >
        <Card
          title={<center>Complete Blood Count(CBC)</center>}
          bordered={false}
          style={{
            width: "70vh",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Report data={data} />
        </Card>
      </div>
    </>
  );
};

export default App;
