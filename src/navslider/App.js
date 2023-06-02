import React from 'react'
import Tab from './Tab'
import Navbar from './example';
import Appoimenttime from './Appoimenttime'
import { Router, Route,Routes} from 'react-router-dom';
const App = () => {
  return (
    <> 
    {/* <Router> */}
    {/* <Tab /> */}
    {/* <Routes>
      <Route exact path="/" component={Appoimenttime} />
      <Route path="/" component={Appoimenttime} />
      <Route path="/tommorow" component={Appoimenttime} />
      <Route path="/Sat 3 Jun" component={Appoimenttime} />
      
    </Routes>
  </Router> */}
  
      <Navbar/>
    </>
  )
}

export default App
