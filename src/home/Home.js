import React from 'react'
import icone from './iconeo.png';
import leftarrow from './arrow.png';
const Home = () => {
  return (
    <>
        <div className="container" style={{width:'35%'}}>
            <div className="card"  >
                <div className="card-header" style={{backgroundColor:'blue'}}>
                  <img src={leftarrow} height="20px" /> <label style={{color:'white',fontWeight:'bold',marginLeft:'10px'}}> Pista Barfi </label>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-10">
                            <div className="form-group">
                                <label  >New Personalized item name</label>
                                <input type="text" className="form-control" placeholder="New Personalized item name"></input>    
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="form-group">
                                <label >Amount</label>
                                <input type="text" className="form-control" placeholder="480"></input>    
                            </div>
                        </div>
                    </div>    
                </div>

                <div className="card" style={{borderRadius:'0px',height:'40px',backgroundColor:'skyblue'}}>
                    <lable style={{fontWeight:'bold',color:'blue',marginLeft:'10px'}}> Cokking Instructions</lable>
                </div>

                <div className="card-body">
                    <div className="form-group">
                        <label style={{marginTop:'0px'}} >Enter Cokking Inststruction</label>
                        <input type="text" className="form-control" placeholder="New Personalized item name"></input>    
                    </div>
                    
                    <p style={{fontWeight:'bold',marginTop:'20px'}}>You Can Create the predefined cokking insructions from admin pane!</p>
                </div>

                <div className="card" style={{borderRadius:'0px',height:'40px',backgroundColor:'skyblue'}}>
                    <lable style={{fontWeight:'bold',color:'blue',marginLeft:'10px'}}> Itemwise Discount</lable>
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label style={{marginTop:'0px'}} >Discount in percent</label>
                                <input type="text" className="form-control" ></input>    
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label style={{marginTop:'0px'}} >Discount in Rupees</label>
                                <input type="text" className="form-control" ></input>    
                            </div>
                        </div>

                         <div className="information">   
                            <div className="alert alert-warning" role="alert" style={{border:'1px solid black',marginTop:'20px'}}>
                            <img src={icone} width="30px" /><label style={{fontSize:'90%'}}>Note: Above discount is applicable on per quantity of item added</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card" style={{borderRadius:'0px',height:'40px',backgroundColor:'skyblue'}}>
                    <lable style={{fontWeight:'bold',color:'blue',marginLeft:'10px'}}>Complimentary / NC item</lable>
                </div>

                <div className="card-body">
                    <div className="container" style={{backgroundColor:'aliceblue',padding:'10px'}}> 
                    <div className="form-check" style={{backgroundColor:''}}>
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label className="form-check-label" for="defaultCheck1">
                            Mark this complementary item ?
                        </label>
                    </div>
                    </div>
                    <div className="form-floating">
                        <button class="btn btn-primary " style={{borderRadius:'1        0px',marginTop:'10px',width:'100%'}} type="submit">ADD</button>
                    </div> 
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Home
