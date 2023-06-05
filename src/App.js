import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Home from './home/Home.js';
import Bmicalculater from './bmicalculater/Bmicalculater';
import Task from './task/Task';
function App() {
  return (
   <>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Bmicalculater" element={<Bmicalculater />} />
        <Route path="/Task" element={<Task />} />
      </Routes>
    </Router>

    
   </>
  );
}

export default App;
