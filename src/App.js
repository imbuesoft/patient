import './App.css';
import Navbar from './Component/Navbar';
import Slider from './Component/Slider';
import Service from './Component/Service';
import Capsule from './Component/Capsule';
import Testimonial from './Component/Testimonial';
import Features from './Component/Features';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="">
      <Navbar />
      <Slider />

      <div className="container mt-5">
        <div className='row m-0 p-0 '>
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
        </div>
      </div>

      <div className="container mt-5">
        <div className='row'>
          <Capsule />
          <Capsule />
          <Capsule />
          <Capsule />
        </div>
      </div>

      <div className="container mt-5">
        <div className='row'>
          <Features />
          <Features />
          <Features />
          <Features />
        </div>
      </div>


      <div className="container-fluid mt-5">
        <Testimonial />
      </div>

      <Footer />

    </div>
  );
}

export default App;
