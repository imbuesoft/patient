import { Tabs } from 'antd';
import TabsData from "./TabsData.json";

const onChange = (key) => {
  console.log(key);
};

const App = () => <Tabs defaultActiveKey="1" items={TabsData} centered size="large" onChange={onChange} />;
export default App;