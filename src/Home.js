import React, { useState } from 'react';
/*import { Link } from 'react-router-dom';*/
import './Homeform.css';
const Home = () => {
  const [userRegistration, setuserRegistration] = useState({
    result:"",
    refvalue:"",
    unit:"",

    rbcresult:"",
    rbcrefvalue:"",
    rbcunit:"",

    pcvresult:"",
    pcvrefvalue:"",
    pcvunit:"",

    pcvtworesult:"",
    pcvtworefvalue:"",
    pcvtwounit:"",

    pcvthreresult:"",
    pcvthrerefvalue:"",
    pcvthreunit:"",

    rdwresult:"",
    rdwrefvalue:"",
    rdwunit:"",

    neutrophilsresult:"",
    neutrophilsvalue:"",
    neutrophilsunit:"",

    lymphoesult:"",
    lymphovalue:"",
    lymphounit:"",

    eosinophilsesult:"",
    eosinophilsvalue:"",
    eosinophilsunit:"",
    
    monocytesresult:"",
    monocytesvalue:"",
    monocytesunit:"",
    
    basophilsresult:"",
    basophilsvalue:"",
    basophilsunit:""
  });

  const [Records, setRecords] = useState([]);

  const handleInput = (e) =>{

    const name= e.target.name;
    const value =e.target.value;
    console.log(name , value);

    setuserRegistration({...userRegistration, [name]: value});
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    const newRecord ={...userRegistration, id:new Date().getTime().toString()}
    console.log(Records);
    setRecords([...Records, newRecord]);
    

    setuserRegistration({
    result:"",
    refvalue:"",
    unit:"",

    rbcresult:"",
    rbcrefvalue:"",
    rbcunit:"",

    pcvresult:"",
    pcvrefvalue:"",
    pcvunit:"",

    pcvtworesult:"",
    pcvtworefvalue:"",
    pcvtwounit:"",

    pcvthreresult:"",
    pcvthrerefvalue:"",
    pcvthreunit:"",

    rdwresult:"",
    rdwrefvalue:"",
    rdwunit:"",

    neutrophilsresult:"",
    neutrophilsvalue:"",
    neutrophilsunit:"",

    lymphoesult:"",
    lymphovalue:"",
    lymphounit:"",

    eosinophilsesult:"",
    eosinophilsvalue:"",
    eosinophilsunit:"",
    
    monocytesresult:"",
    monocytesvalue:"",
    monocytesunit:"",
    
    basophilsresult:"",
    basophilsvalue:"",
    basophilsunit:""
  
  });
  }
  return (
    <>
      <div className="container" >
       
          <form className="form" action="" onSubmit={handleSubmit}>
          <div className="row">
           <div className="col-6" style={{borderRadius:'20px',marginTop:'30px'}}>
          <div className="form-group">
           <label><h4>HEMOGLOABIN (HB)</h4></label>
            <input required style={{marginTop:'10px'}} value={userRegistration.result} placeholder="HB Result Value" onChange={handleInput} type="text" className="form-control"  name="result" id="result" autoComplete="off" />
          </div>
          <div className="form-group">   
                  
            <input required style={{marginTop:'10px'}} value={userRegistration.refvalue} placeholder="HB Ref. Value" onChange={handleInput} type="text" className="form-control" name="refvalue" id="refvalue" autoComplete="off" />
           </div>
          <div className="form-group">
            
            <input required style={{marginTop:'10px'}} value={userRegistration.unit} placeholder="HB Unit Value" onChange={handleInput} type="text" className="form-control" name="unit" id="unit" autoComplete="off" />
          </div>
        </div>
      
      
      <div className="col-6" style={{borderRadius:'20px',marginTop:'30px'}}>
      
          <div className="form-group">
           <label><h4>RBC COUNT</h4> </label>
           <label style={{marginLeft:'70px'}}><h5>[Total RBC count]</h5></label>
            <input required style={{marginTop:'10px'}} placeholder="RBC Result Value" value={userRegistration.rbcresult} onChange={handleInput} type="text" className="form-control"  name="rbcresult" id="rbcresult" autoComplete="off" />
          </div>
          <div className="form-group">   
                  
            <input required style={{marginTop:'10px'}} placeholder="RBC Ref. Value" value={userRegistration.rbcrefvalue} onChange={handleInput} type="text" className="form-control" name="rbcrefvalue" id="rbcrefvalue" autoComplete="off" />
           </div>
          <div className="form-group">
            
            <input required style={{marginTop:'10px',marginBottom:'20px'}} placeholder="RBC Unit Value" value={userRegistration.rbcunit} onChange={handleInput} type="text" className="form-control" name="rbcunit" id="rbcunit" autoComplete="off" />
          </div>
           
         
       </div>
       </div>

       <div className="row">
          <div className="col-4" style={{borderRadius:'20px',marginTop:'20px'}}>

          <div className="form-group">
           <label><h4>BLOOD INDICES</h4></label><br />
           <label><h5>[Packed Cell Volume]</h5></label>
            <input required style={{marginTop:'10px'}} placeholder="PCV Result Value" value={userRegistration.pcvresult} onChange={handleInput} type="text" className="form-control"  name="pcvresult" id="pcvresult" autoComplete="off" />
          </div>
          <div className="form-group">   
            <input required style={{marginTop:'10px'}} placeholder="PCV Ref. Value" value={userRegistration.pcvrefvalue} onChange={handleInput} type="text" className="form-control" name="pcvrefvalue" id="pcvrefvalue" autoComplete="off" />
           </div>
          <div className="form-group">
            <input required style={{marginTop:'10px'}} placeholder="PCV Unit Value" value={userRegistration.pcvunit} onChange={handleInput} type="text" className="form-control" name="pcvunit" id="pcvunit" autoComplete="off" />
          </div>
         
          </div>

          <div className="col-4" style={{borderRadius:'20px',marginTop:'20px'}}>

          <div className="form-group">
           <label><h4>BLOOD INDICES</h4></label> 
           <label><h5>[Mean Corpuscular Volume]</h5></label>
             <input required style={{marginTop:'10px'}} placeholder="Mean Corpuscular Volume Result" value={userRegistration.pcvtworesult} onChange={handleInput} type="text" className="form-control"  name="pcvtworesult" id="pcvtworesult" autoComplete="off" />
          </div>
          <div className="form-group">   
            <input required style={{marginTop:'10px'}} placeholder="Mean Corpuscular Volume Ref. Value" value={userRegistration.pcvtworefvalue} onChange={handleInput} type="text" className="form-control" name="pcvtworefvalue" id="pcvtworefvalue" autoComplete="off" />
           </div>
          <div className="form-group">
            <input required style={{marginTop:'10px'}} placeholder="Mean Corpuscular Volume Unit Value" value={userRegistration.pcvtwounit} onChange={handleInput} type="text" className="form-control" name="pcvtwounit" id="pcvtwounit" autoComplete="off" />
          </div>
         
          </div>

          <div className="col-4" style={{borderRadius:'20px',marginTop:'20px'}}>

          <div className="form-group">
          <label><h4>BLOOD INDICES</h4></label><br />
          <label><h5>[RDW]</h5></label>
            <input required style={{marginTop:'10px'}} placeholder="RDW Result Value" value={userRegistration.pcvthreresult} onChange={handleInput} type="text" className="form-control"  name="pcvthreresult" id="pcvthreresult" autoComplete="off" />
          </div>
          <div className="form-group">   
            <input required style={{marginTop:'10px'}} placeholder="RDW Ref. Value" value={userRegistration.pcvthrerefvalue} onChange={handleInput} type="text" className="form-control" name="pcvthrerefvalue" id="pcvthrerefvalue" autoComplete="off" />
          </div>
          <div className="form-group">
            <input required style={{marginTop:'10px',marginBottom:'20px'}} placeholder="RDW Unit Value" value={userRegistration.pcvthreunit} onChange={handleInput} type="text" className="form-control" name="pcvthreunit" id="pcvthreunit" autoComplete="off" />
          </div>
          
          </div>
        </div>

        <div className="row">
          <div className="col-4" style={{borderRadius:'20px',marginTop:'30px'}}>
          <div className="form-group">
           <label><h4>WBC COUNT</h4></label><br />
           <label><h5>[Total WBC Count]</h5></label>
            <input required style={{marginTop:'10px'}} placeholder="PCV result value" value={userRegistration.wbcresult} onChange={handleInput} type="text" className="form-control"  name="wbcresult" id="wbcresult" autoComplete="off" />
          </div>
          <div className="form-group">   
            <input required style={{marginTop:'10px'}} placeholder="PCV ref value" value={userRegistration.wbcvalue} onChange={handleInput} type="text" className="form-control" name="wbcvalue" id="wbcvalue" autoComplete="off" />
          </div>
          <div className="form-group">
            <input required style={{marginTop:'10px'}} placeholder="PCV unit value" value={userRegistration.wbcunit} onChange={handleInput} type="text" className="form-control" name="wbcunit" id="wbcunit" autoComplete="off" />
          </div>
          
          </div>

          <div className="col-4" style={{borderRadius:'20px',marginTop:'30px'}}>
          <div className="form-group">
           <label><h4>DIFFERENTTIAL WBC COUNT</h4></label><br />
           <label ><h5>[Neutrophils]</h5></label>
            <input required style={{marginTop:'10px'}} placeholder="Neutrophils Result value" value={userRegistration.neutrophilsresult} onChange={handleInput} type="text" className="form-control"  name="neutrophilsresult" id="neutrophilsresult" autoComplete="off" />
          </div>
          <div className="form-group">   
            <input required style={{marginTop:'10px'}} placeholder="Neutrophils Ref. value" value={userRegistration.neutrophilsvalue} onChange={handleInput} type="text" className="form-control" name="neutrophilsvalue" id="neutrophilsvalue" autoComplete="off" />
          </div>
          <div className="form-group">
            <input required style={{marginTop:'10px'}} placeholder="Neutrophils Unit value" value={userRegistration.neutrophilsunit} onChange={handleInput} type="text" className="form-control" name="neutrophilsunit" id="neutrophilsunit" autoComplete="off" />
          </div>
         
          </div>

          <div className="col-4" style={{borderRadius:'20px',marginTop:'30px'}}>
          <div className="form-group">
          <label><h4>DIFFERENTTIAL WBC COUNT</h4></label><br />
           <label ><h5>[Lymphocytes]</h5></label>
            <input required style={{marginTop:'10px'}} placeholder="Lymphocytes Result value" value={userRegistration.lymphoesult} onChange={handleInput} type="text" className="form-control"  name="lymphoesult" id="lymphoesult" autoComplete="off" />
          </div>
          <div className="form-group">   
            <input required style={{marginTop:'10px'}} placeholder="Lymphocytes Ref. Value" value={userRegistration.lymphovalue} onChange={handleInput} type="text" className="form-control" name="lymphovalue" id="lymphovalue" autoComplete="off" />
          </div>
          <div className="form-group">
            <input required style={{marginTop:'10px'}} placeholder="Lymphocytes Unit Value" value={userRegistration.lymphounit} onChange={handleInput} type="text" className="form-control" name="lymphounit" id="lymphounit" autoComplete="off" />
          </div>
         
          </div>
        </div>

        <div className="row">
          <div className="col-4" style={{borderRadius:'20px',marginTop:'30px'}}>
          <div className="form-group">
          <label><h4>DIFFERENTTIAL WBC COUNT</h4></label><br />
           <label ><h5>[Eosinophils]</h5></label>
            <input required style={{marginTop:'10px'}} placeholder="Eosinophils Result Value" value={userRegistration.eosinophilsesult} onChange={handleInput} type="text" className="form-control"  name="eosinophilsesult" id="eosinophilsesult" autoComplete="off" />
          </div>
          <div className="form-group">   
            <input required style={{marginTop:'10px'}} placeholder="Eosinophils Ref. Value" value={userRegistration.eosinophilsvalue} onChange={handleInput} type="text" className="form-control" name="eosinophilsvalue" id="eosinophilsvalue" autoComplete="off" />
          </div>
          <div className="form-group">
            <input required style={{marginTop:'10px'}} placeholder="Eosinophils Unit Value" value={userRegistration.eosinophilsunit} onChange={handleInput} type="text" className="form-control" name="eosinophilsunit" id="eosinophilsunit" autoComplete="off" />
          </div>
          
          </div>

          <div className="col-4" style={{borderRadius:'20px',marginTop:'30px'}}>
          <div className="form-group">
          <label><h4>DIFFERENTTIAL WBC COUNT</h4></label><br />
           <label ><h5>[Mosinophils]</h5></label> 
            <input required style={{marginTop:'10px'}} placeholder="Mosinophils Result Value" value={userRegistration.monocytesresult} onChange={handleInput} type="text" className="form-control"  name="monocytesresult" id="monocytesresult" autoComplete="off" />
          </div>
          <div className="form-group">   
            <input required style={{marginTop:'10px'}} placeholder="Mosinophils Ref. Value" value={userRegistration.monocytesvalue} onChange={handleInput} type="text" className="form-control" name="monocytesvalue" id="monocytesvalue" autoComplete="off" />
          </div>
          <div className="form-group">
            <input required style={{marginTop:'10px'}} placeholder="Mosinophils Unit Value" value={userRegistration.monocytesunit} onChange={handleInput} type="text" className="form-control" name="monocytesunit" id="monocytesunit" autoComplete="off" />
          </div>
          
          </div>

          <div className="col-4" style={{borderRadius:'20px',marginTop:'30px'}}>
          <div className="form-group">
          <label><h4>DIFFERENTTIAL WBC COUNT</h4></label><br />
           <label ><h5>[Basophils]</h5></label> 
            <input required style={{marginTop:'10px'}} placeholder="Basophils Result Value" value={userRegistration.basophilsresult} onChange={handleInput} type="text" className="form-control"  name="basophilsresult" id="basophilsresult" autoComplete="off" />
          </div>
          <div className="form-group">   
            <input required style={{marginTop:'10px'}} placeholder="Basophils Ref. Value" value={userRegistration.basophilsvalue} onChange={handleInput} type="text" className="form-control" name="basophilsvalue" id="basophilsvalue" autoComplete="off" />
          </div>
          <div className="form-group">
            <input required style={{marginTop:'10px'}} placeholder="Basophils Unit Value" value={userRegistration.basophilsunit} onChange={handleInput} type="text" className="form-control" name="basophilsunit" id="basophilsunit" autoComplete="off" />
          </div>
          <div className="form-floating">
            <button className="submit btn btn-outline-primary" style={{marginTop:'10px'}} type="submit" >Submit</button>
          </div>
          </div>
        </div> 
        
      </form>
        
      </div>

      <div className="container">
        <div className="fatchData">
          {
            Records.map((curElem) => {
              const {id,result,refvalue,unit,rbcresult,rbcrefvalue,rbcunit, pcvresult,pcvrefvalue,pcvunit,pcvtworesult,pcvtworefvalue, pcvtwounit,pcvthreresult,pcvthrerefvalue, pcvthreunit,wbcresult,wbcvalue,wbcunit,neutrophilsresult,neutrophilsvalue,neutrophilsunit,lymphoesult,lymphovalue,lymphounit,eosinophilsesult,eosinophilsvalue,eosinophilsunit,monocytesresult,monocytesvalue,monocytesunit,basophilsresult,basophilsvalue,basophilsunit}=curElem;
                return (
                  <div className="showDatastyle" key={id }>
                    <table className="table  table-bordered table-light" align="center" style={{marginTop:'60px'}}>
                    
                      <thead>
                        <tr>
                          <th>Investigation</th>
                          <th>Result</th>
                          <th>Ref.value</th>
                          <th>Unit</th>
                          
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Primary Sample Type</td>
                          <td colSpan="3">Blood</td>
                        </tr>
                        <tr>
                          <tr><b>HEMOGLOABIN</b> <br /> Hemoglobin (Hb)</tr>
                          <td><p>{result}</p></td>
                          <td><p>{refvalue}</p></td>
                          <td><p>{unit}</p></td>
                        </tr>
                        <tr>
                          <td><b>RBC COUNT</b> <br /> Total RBC count </td>
                          <td> <p>{rbcresult}</p> </td>
                          <td><p>{rbcrefvalue}</p></td>
                          <td><p>{rbcunit}</p></td>
                        </tr>
                        <tr>
                          <tr><b>BLOOD INDICES</b> <br /> Packed Cell Volume (PCV)</tr>
                          <td> <p>{pcvresult}</p> </td>
                          <td><p>{pcvrefvalue}</p></td>
                          <td><p>{pcvunit}</p></td>
                        </tr>
                        <tr>
                          <tr>Mean Corpuscular Volume</tr>
                          <td> <p>{pcvtworesult}</p> </td>
                          <td><p>{pcvtworefvalue }</p></td>
                          <td><p>{pcvtwounit}</p></td>
                        </tr>
                        <tr>
                          <tr>RDW</tr>
                          <td> <p>{pcvthreresult}</p> </td>
                          <td><p>{pcvthrerefvalue }</p></td>
                          <td><p>{ pcvthreunit}</p></td>
                        </tr>
                        <tr>
                          <tr><b>WBC COUNT</b> <br /> Total WBC count</tr>
                          <td> <p>{wbcresult}</p> </td>
                          <td><p>{wbcvalue}</p></td>
                          <td><p>{wbcunit}</p></td>
                        </tr>
                        <tr>
                          <tr><b>DIFFERENTTIAL WBC COUNT</b> <br /> Neutrophils </tr>
                          <td> <p>{neutrophilsresult}</p> </td>
                          <td><p>{neutrophilsvalue}</p></td>
                          <td><p>{neutrophilsunit}</p></td>
                        </tr>
                        <tr>
                          <td>Lymphoctype</td>
                          <td> <p>{lymphoesult}</p> </td>
                          <td><p>{lymphovalue}</p></td>
                          <td><p>{lymphounit}</p></td>
                        </tr>
                        <tr>
                          <td>Eosinophils</td>
                          <td> <p>{eosinophilsesult}</p> </td>
                          <td><p>{eosinophilsvalue}</p></td>
                          <td><p>{eosinophilsunit}</p></td>
                        </tr>
                        <tr>
                          <td>Monocytes</td>
                          <td> <p>{monocytesresult}</p> </td>
                          <td><p>{monocytesvalue}</p></td>
                          <td><p>{monocytesunit}</p></td>
                        </tr>
                        <tr>
                          <td>Basophils</td>
                          <td> <p>{basophilsresult}</p> </td>
                          <td><p>{basophilsvalue}</p></td>
                          <td><p>{basophilsunit}</p></td>
                        </tr>
                       </tbody>
                    </table>
                  </div>
                )
            })
          }
        </div>

      </div>
    </>
  )
}

export default Home