import React from 'react'
import Tab from './Tab.js'
import Appoimenttime from './Appoimenttime'
import { Router, Route,Routes} from 'react-router-dom';
const navbarswitch = () => {
  return (
    <>
        
        <Router>
      <Tab />
      <Routes>
        <Route exact path="/" component={Appoimenttime} />
        <Route path="/today" component={Appoimenttime} />
        <Route path="/tommorow" component={Appoimenttime} />
        <Route path="/Sat 3 Jun" component={Appoimenttime} />
        
      </Routes>
    </Router>
    </>
  )
}

export default navbarswitch
