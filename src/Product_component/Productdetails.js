import React, { useState } from 'react'
import "./productstyle.css"
import images from "./imgjson"

const Productdetails = () => {
    const [imgdata,setImgdata] = useState("./img/m1.jpg")
    const imagset = (e) =>{
        setImgdata(e.target.src)
        console.log(imgdata)
    }
  return (
    <>
        <div className='row' style={{marginBottom:"700px"}}>
            <div className='productcontainer'>
            <div className='col'><div className='productwraper' style={{display:"flex"}}>
            <div className='row'>
                <div className='col-3'>
                    <div className='sideimg'>
                    <ul class="list-group" style={{listStyle:"none",padding:"10px",height:"500px"}}>
                        
                            {
                            images.map((curele,id)=>{
                                  return ( <li key={id} class="list-group-item" style={{border:"1px solid #F0F0F5",height:"55.5938px",width:"63.25px",margin:"5px"}}><img src={curele.img} alt='img' style={{height:"50px",width:"50px"}} onClick={imagset} /></li>)
                            })
                            } 
                        {/* <li class="list-group-item" style={{border:"1px solid #F0F0F5",height:"55.5938px",width:"63.25px",margin:"5px"}}><img src='img/m2.jfif' alt='img' style={{height:"50px",width:"50px"}}/></li>
                        <li class="list-group-item" style={{border:"1px solid #F0F0F5",height:"55.5938px",width:"63.25px",margin:"5px"}}><img src='img/m3.jfif' alt='img'style={{height:"50px",width:"50px"}}/></li>
                        <li class="list-group-item" style={{border:"1px solid #F0F0F5",height:"55.5938px",width:"63.25px",margin:"5px"}}><img src='img/m4.jfif' alt='img'style={{height:"50px",width:"50px"}}/></li>
                        <li class="list-group-item" style={{border:"1px solid #F0F0F5",height:"55.5938px",width:"63.25px",margin:"5px"}}><img src='img/m5.jfif' alt='img'style={{height:"50px",width:"50px"}}/></li> */}
                    </ul>
                    </div>
                </div>
            <div className='col-9'>
                <div className='productinfo'>
                    <div className='imgcontiner' style={{border:"1px solid #F0F0F5",textAlign:"center"}}>
                        <img src={imgdata} alt='imgm' style={{height:"250px",width:"250px"}}/>
                    </div>
                    <div className='productprice'>
                    <div style={{margin:"20px",fontWeight:"bold",fontSize:"25px"}}>₹105</div>
                    <div className='unitclass'>
                        <div >PACK SIZE</div>
                        <div style={{marginRight:"100px"}}>UNIT COUNT</div>
                        </div>
                    </div>
                    <div style={{width:"158.375px",}}><hr></hr></div>
                    <div className='tabletcount' >
                            <div>15 TABLET(15 / STRIP)</div>
                    </div>
                    <div><button className='Addtocart'>Add To Cart</button></div>
                </div>
            </div>
            
            </div>
            
        </div>
        </div>
                <div className='col-7'>
                    <div className='infowraper'>
                        <div className='row'>
                                <div >
                                    <h2 >Zincovit Tablet 15's</h2>
                                    <div ><span style={{color:"#bdbdbe"}}>Manufactured By</span>     Apex Laboratories Pvt. Ltd.</div>
                                    <div className='heighlighs'>
                                        <h4 >Highlights</h4>
                                         
                                        <ul >
                                            <li><span>Helps increase the appetite</span></li>
                                            <li><span>Helps treat vitamin & zinc deficiency</span></li>
                                            <li><span>Helps counter fatigue and exhaustion</span></li>
                                            <li><span>Helpful for women during pregnancy and surgery</span></li>
                                            <li><span>Strengthens immunity</span></li>
                                            <li><span>Ensure speedy recovery from illness</span></li>
                                        </ul>
                                       
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className='description' style={{borderTop:"1px solid #F0F0F5"}}>
                                            <h3>Description</h3>
                                            <p>Zincovit Tablet is a nutritional supplement with vitamins A, B complex, C, D, and E and minerals such as Magnesium, Manganese, Iodine, Copper, Selenium, Chromium, Zinc, and Grape seed extracts. It helps combat deficiency of vitamins and minerals and helps improve your overall health.</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <h4>Key Ingredients</h4>
                                            <ul >
                                            <li><span>Vitamin A</span></li>
                                            <li><span>Vitamin B1 (Thiamine</span></li>
                                            <li><span> Vitamin B2 (Riboflavin)</span></li>
                                            <li><span> Vitamin B3 (Niacin)</span></li>
                                            <li><span>Vitamin B5 (Pantothenic acid)</span></li>
                                            <li><span>Vitamin B6 (Pyridoxine)</span></li>
                                            <li><span>Vitamin B7 (Biotin)</span></li>
                                            <li><span>Vitamin B9 (Folic acid)</span></li>
                                            <li><span>Vitamin B12 (Methylcobalamin)</span></li>
                                            <li><span>Vitamin C</span></li>
                                            <li><span>Vitamin D3</span></li>
                                            <li><span>Vitamin E</span></li>
                                        </ul>
                                        </div>
                                    </div>
                                    
                                </div>
                                    
                                    
                                
                        </div>
                    </div>
                </div>
        </div>
            
        </div>
        

    </>
  )
}

export default Productdetails
