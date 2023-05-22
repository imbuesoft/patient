import React, { useState } from 'react'
import Pethoreport from './pethoreport'
import Reportapi from './reportapi'
const App = () => {
            const [data,setdata]   =  useState(Reportapi)
  return (
    <div>
      <Pethoreport data={data}/>
    </div>
  )
}

export default App
