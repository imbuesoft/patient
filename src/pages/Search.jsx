import { Typography } from 'antd';
import fruitsAndVegetables from '../api/tempData.json'
import Search from '../features/Search/';

const { Title } = Typography;

const App = () => {
    return (
        <>
            <div style={{ height: "100vh", width: "100vw", display: "grid" }}>
                <div style={{ height: "100vh", maxWidth: "60em", margin: "auto" }}>
                    <Title style={{ margin: "1em 0" }}>Search fruits and vegetables by name, color or category</Title>
                    <div className="d-flex flex-column justify-content-center mt-5"><Search data={fruitsAndVegetables} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;