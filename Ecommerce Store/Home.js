import React from "react";
import Navbar from "./Navbar";
import './Home.css' ;
function Home(){
    return(<>
    <Navbar/>
    <div className="Header-img">
    <div className="Home-Dive-text">
        <h5>50% OFF all Products</h5>
        <h1>Men Fashions</h1>
        <button className="Home-btn">Shop Now</button>
        <div className="div-img">
            <img src={"https://www.pngmart.com/files/22/Men-Fashion-PNG-HD-Isolated.png"} alt="" />
        </div>
    </div>
    </div>
<div className="Parrent-Product">
   <pre style={{textAlign:"center" , marginBottom:'5%' , fontSize:"30px"}}>Our new arrivals </pre>
<div className="product-wrapper">
  <div className="product-container">
    <div className="product">
      <img style={{height:"300px",width:"300px"}} src={"https://image1.superdry.com/static/images/optimised/upload9223368955666204342.jpg"} alt="Product 1"></img>
      <h2>Product 1</h2>
      <p className="product-price">$50</p>
      <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div className="product">
      <img style={{height:"300px",width:"300px"}} src={"https://image1.superdry.com/static/images/optimised/upload9223368955666204342.jpg"} alt="Product 2"></img>
      <h2>Product 2</h2>
      <p className="product-price">$65</p>
      <p className="product-description">Nulla consectetur libero ac metus ullamcorper, vitae bibendum ipsum bibendum.</p>
    </div>
    <div className="product">
      <img style={{height:"300px",width:"300px"}} src={"https://image1.superdry.com/static/images/optimised/upload9223368955666204342.jpg" }alt="Product 3"></img>
      <h2>Product 3</h2>
      <p className="product-price">$80</p>
      <p className="product-description">Suspendisse auctor tellus eget velit tempor bibendum.</p>
    </div>
    <div className="product">
      <img style={{height:"300px",width:"300px"}}src={"https://image1.superdry.com/static/images/optimised/upload9223368955666204342.jpg"} alt="Product 4"></img>.
      <h2>Product 4</h2>
      <p className="product-price">$95</p>
      <p className="product-description">Donec quis sapien a massa pulvinar interdum non ut mauris.</p>
    </div>
    
  </div>
</div>


</div>

    </>)
}
export default Home ;