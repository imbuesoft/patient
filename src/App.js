import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Slider from './Component/Slider/Slider';
import Service from './Component/Service/Service';
import Capsule from './Component/Capsule/Capsule';
import Testimonial from './Component/Testimonial/Testimonial';
import Features from './Component/Features/Features';
import Footer from './Component/Footer/Footer';
import Searchbar from './Component/Searchbar/Searchbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Searchbar />
      <Slider />

      <div className="container mt-5">
        <div className='row'>
          <div className='col-lg-3 col-md-4 col-sm-12'>
            <Service />
          </div>
          <div className='col-lg-3 col-md-4 col-sm-12'>
            <Service />
          </div>
          <div className='col-lg-3 col-md-4 col-sm-12'>
            <Service />
          </div>
          <div className='col-lg-3 col-md-4 col-sm-12'>
            <Service />
          </div>
          <div className='col-lg-3 col-md-4 col-sm-12'>
            <Service />
          </div>
          <div className='col-lg-3 col-md-4 col-sm-12'>
            <Service />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className='row'>
          <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
            <Capsule />
          </div>
          <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
            <Capsule />
          </div>
          <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
            <Capsule />
          </div>
          <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
            <Capsule />
          </div>
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
