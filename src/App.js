import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Slider from './Component/Slider/Slider';
import Service from './Component/Service/Service';
import Capsule from './Component/Capsule/Capsule';
import Testimonial from './Component/Testimonial/Testimonial';
import Features from './Component/Features/Features';
import Footer from './Component/Footer/Footer';

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
