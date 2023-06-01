import Navbar from '../Component/Navbar';
import Slider from '../Component/Slider';
import Service from '../Component/Service';
import Capsule from '../Component/Capsule';
import Testimonial from '../Component/Testimonial';
import Features from '../Component/Features';
import Footer from '../Component/Footer';
import Searchbar from '../Component/Searchbar/Searchbar';
import VideoConsult from '../Component/VideoConsult';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Searchbar /> */}

      <div className="container-fluid px-5" style={{maxWidth:"125em"}}>
        <Slider />
      </div>

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



      <div className="container-fluid mt-5 px-5" style={{maxWidth:"125em"}}>
        <Testimonial />
      </div>

      <div className="container-fluid mt-5">
        <VideoConsult />
      </div>

      <div className="mt-5">
        <Footer />
      </div>

    </div>
  );
}

export default App;
