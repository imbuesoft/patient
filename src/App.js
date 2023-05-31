import "./App.css";
import "./Category.css";
import React, { useState } from "react";
import Thumbnail from "./Thumbnail";
import CatData from "./CatData.json";


export default function App() {
  
  const [billitem, setBillitem] = useState([]);
  const removeFromCart = index =>
    setBillitem(cartList => cartList.filter((_, i) => i !== index));
  let tax=0,disPrice=0,tot=0,shipping=0
  billitem.map(x=>{
    tax+=x.tax
    disPrice += x.disPrice
    tot += x.price-x.disPrice+x.tax
    shipping = x.shipping
  })
  const totAmnt = tot + shipping;
  const clearCart = () => setBillitem([]);
  const [category, setCategory] = useState("Digestive Care");
  const subCategory = CatData.filter(function (item) {
    return item.category === category;
  });
  const categorys = CatData.map((c) => c.category);
  let uniqueCats = categorys.filter((c, i) => categorys.indexOf(c) === i);

  return (
    <div className="App">
      <div className="row m-3">
        <div className="col-6 border me-3 border-secondry rounded" style={{ width: "45%" }}>
          <div className="input-group mt-3">
            <input type="search" className="form-control ms-3 w-75" name="productSearch" placeholder="Enter Customer Name"/>
            <button type="button" className="btn btn-primary">
              <i className="fas fa-user-plus"></i>
            </button>
          </div>
          
          <ul className="responsive-table mt-3">
            <li className="table-header">
              <div className="col-5 ps-3 text-start">Product Name</div>
              <div className="col-1">Qty</div>
              <div className="col-2">Price</div>
              <div className="col-2 text-start">Sub Total</div>
              <div className="col-1"></div>
            </li>
            <div style={{ height: "290px", overflowY: "scroll" }}>
              {billitem.map((bi,index) => {
                return (
                  <li key={index} className="table-row">
                    <div className="col-5 ps-3 text-start">{bi.productname}</div>
                    <div className="col-1"><span className="qbtn">-</span>{bi.qty}<span className="qbtn">+</span></div>
                    <div className="col-2">{bi.price}</div>
                    <div className="col-2">{bi.subtotal}</div>
                    <div className="col-1"> <i className="fas fa-trash-alt" onClick={()=>removeFromCart(index)}></i></div>
                  </li>
                );
              })}
            </div>
          </ul>
          <div className="row mb-3">
            <div className="col-5">
              <div className="row">
                <div className="col-4 ps-5 text-start">Tax</div>
                <div className="col-6 text-end">{tax.toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col-4 ps-5 text-start">Discount</div>
                <div className="col-6 text-end">{disPrice.toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col-4 ps-5 text-start">Shipping</div>
                <div className="col-6 text-end">{shipping}</div>
              </div>
            </div>
            <div className="col-7">
              <div className="row fw-bold fs-5 pt-5">
                <div className="col-7 ps-5 text-start">Total Amount</div>
                <div className="col-4 text-end">{totAmnt.toFixed(2)}</div>
              </div>
            </div>
          </div>
          <div className="row m-3">
            <div className="col-6">
              <input type="button" value="Clear" onClick={()=>clearCart()} className="btn btn-danger px-3 fw-bold"/>
            </div>
            <div className="col-6">
              <input type="button" value="Buy" className="btn btn-success px-4 fw-bold"/>
            </div>
          </div>
        </div>

        <div className="col-6 border border-secondry rounded"  style={{ width: "53%" }}>
          <div className="input-group mt-3">
            <input type="search" className="form-control" name="productSearch" placeholder="Enter Product Name"/>
            <button type="button" className="btn btn-primary">
              <i className="fas fa-search"></i>
            </button>
          </div>

          <div className="row">
            <div className="scrollmenu" style={{ backgroundColor: "#434949" }}>
              {
                uniqueCats.map((Category) => (
                  <button className="btn"  style={{backgroundColor: "#434949",color: "white",fontSize: "14px"}} onClick={() => setCategory(Category)}> {Category} </button>
                ))
              }
            </div>

            <div style={{ height: "500px", overflowY: "scroll"}}>
              <div className="row">
                {subCategory.map((curItem) => {
                  return (
                    <div className="col-3">
                      <button className="btn" 
                      // addToCart();
                      onClick={() => {setBillitem((billitem) => [...billitem,
                            {
                              productname: curItem.title,
                              qty: 1,
                              price: curItem.price,
                              subtotal: curItem.price,
                              disPrice:curItem.price * 0.1,
                              tax:curItem.price * 0.18,
                              shipping:100
                            }])}}>
                        <Thumbnail key={curItem.id} path={curItem.path} title={curItem.title} price={curItem.price} dp={curItem.price - curItem.price * 0.1} height={curItem.h} width={curItem.w}/>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}