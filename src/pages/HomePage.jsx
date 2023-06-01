import Navbar from '../Component/Navbar';
import Slider from '../Component/Slider';
import Service from '../Component/Service';
import Capsule from '../Component/Capsule';
import Testimonial from '../Component/Testimonial';
import Features from '../Component/Features';
import Footer from '../Component/Footer';
import Searchbar from '../Component/Searchbar/Searchbar';
import VideoConsult from '../Component/VideoConsult';

const Container = (x) =>
  <div className={"container-fluid mt-5 " + x.className} style={{ maxWidth: "125em", ...x.style }}>
    {x.children}
  </div>

function App() {
  return (
    <div className="App">

      <div style={{ backgroundColor: '#429ca533' }}>
        <Container>
          <Navbar />
        </Container>
      </div>

      {/* <Container>
        <Searchbar />
      </Container> */}

      <Container>
        <Slider />
      </Container>

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

      <Container>
        <Testimonial />
      </Container>

      <Container>
        <VideoConsult />
      </Container>

      <div className='mt-5' style={{background:"#232477"}}>
        <Container>
          <Footer />
        </Container>
      </div>

    </div>
  );
}

export default App;
