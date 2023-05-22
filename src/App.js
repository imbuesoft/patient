import React, { useState } from 'react'
import Data from './DataApi';
import Table from './Table';

const App = () => {
    const [data,setdata]= useState(Data);
    
  return (
    <div className="App">
    
           <Table data={data} ></Table>
 
    
    </div>
  );
}

export default App;
