import Navbar from '../Component/Navbar';
import Slider from '../Component/Slider';
import Service from '../Component/Service';
import Capsule from '../Component/Capsule';
import Testimonial from '../Component/Testimonial';
import Features from '../Component/Features';
import Footer from '../Component/Footer';
import Searchbar from '../Component/Searchbar';
import VideoConsult from '../Component/VideoConsult';
import Consult from '../Component/Consult';

const Container = (x) =>
  <div className={"container-fluid " + (x.className || "")} style={{ maxWidth: "125em", ...x.style }}>
    {x.children}
  </div>

const Space = ({ h }) => <div style={{ height: h ?? "2em" }}></div>

function App() {
  return (
    <div className="App">

      <div style={{ backgroundColor: 'var(--color-secondary)' }}>
        <Container>
          <Navbar />
        </Container>
      </div>

      <Space />

      <Container>
        <Searchbar />
      </Container>

      <Space />

      <Container>
        <Consult />
      </Container>

      <Container>
        <Slider />
      </Container>

      <Space />

      <Container>
        <div className='row gap-0 gap-lg-0 gap-xl-3 justify-content-center m-0 p-0 '>
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
        </div>
      </Container>

      <Space />

      <Container>
        <div className='row gap-3 gap-sm-0 gap-lg-4 gap-xl-5 justify-content-center'>
          <Capsule />
          <Capsule />
          <Capsule />
          <Capsule />
        </div>
      </Container>

      <Space />

      <Container>
        <div className='row flex-xxl-row  justify-content-center'>
          <Features />
          <Features />
          <Features />
          <Features />
        </div>
      </Container>

      <Space />

      <Container>
        <Testimonial />
      </Container>

      <Space />

      <Container>
        <VideoConsult />
      </Container>

      <Space />

      <div className='mt-5' style={{ background: "#232477" }}>
        <Container>
          <Footer />
        </Container>
      </div>

    </div>
  );
}

export default App;
