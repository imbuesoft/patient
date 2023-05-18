import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Home from './Home';
import About from './About';
import Product from './Product';
import Contact from './Contact';
import Bmiform from './bmiform';

function App() {

  return (
    <>
  <Router>
    <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Bmiform" element={<Bmiform />} />
      </Routes>
    </Router>
   
    </>
    
  );
}

export default App;
