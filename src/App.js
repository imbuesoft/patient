import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Slider from './Component/Slider/Slider';
import Service from './Component/Service/Service';

function App() {
  return (
    <div className="">
      <Navbar />
      <Slider />

      <div className="container mt-5">
        <div className='row'>
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
        </div>
      </div>

    </div>
  );
}

export default App;
