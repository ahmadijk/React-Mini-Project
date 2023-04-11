import React from "react";
import Navbar from "./Navbar";
import './Shop.css'

function Shop(){
    return(<>
    <Navbar/>
    <div className="Parrent-Shop">
    <div className="container">
  <div className="header">
    <h1 style={{color:"black" , marginLeft:"4%"}}>Our Products</h1>
  </div>
  <div className="product-grid">
    <div className="product">
      <img style={{height:"280px"}}  src={"https://cdn.shopify.com/s/files/1/0600/9297/3251/products/k4m64-12999_600x.jpg?v=1669034191"} alt="Product 1"></img>
      <h2>Product 1</h2>
      <p>$19.99</p>
      <p>Description of product 1</p>
      <button className="Shop-Btn">Add to Cart</button>
    </div>
    <div className="product">
      <img style={{height:"280px"}}  src={"https://www.capehorn.eu/wp-content/uploads/2022/08/22AI_31560-409_UOMO_MATT-CLIPPER_01-INDOSSATO-FRONTE-300x450.jpg"} alt="Product 2"></img>
      <h2>Product 2</h2>
      <p>$24.99</p>
      <p>Description of product 2</p>
      <button className="Shop-Btn">Add to Cart</button>
    </div>
    <div className="product">
      <img style={{height:"280px"}}  src={"https://cdn.shopify.com/s/files/1/0553/2804/7279/products/GAJKATLAJ0407MS23-16156_1533x.jpg?v=1675348497"} alt="Product 3"></img>
      <h2>Product 3</h2>
      <p>$29.99</p>
      <p>Description of product 3</p>
      <button className="Shop-Btn">Add to Cart</button>
    </div>
    <div className="product">
      <img style={{height:"280px"}} src={"https://assets.ajio.com/medias/sys_master/root/h5f/h40/12203846271006/-288Wx360H-460234878-black-MODEL.jpg" }alt="Product 4"></img>
      <h2>Product 4</h2>
      <p>$14.99</p>
      <p>Description of product 4</p>
      <button className="Shop-Btn">Add to Cart</button>
    </div>
    <div className="product">
      <img style={{height:"280px"}}  src={"https://cdn.shopify.com/s/files/1/0532/1382/3144/products/N4661AZ_23SP_BK27_01_01_430x.jpg?v=1675169594"} alt="Product 5"></img>
      <h2>Product 5</h2>
      <p>$39.99</p>
      <p>Description of product 5</p>
      <button className="Shop-Btn">Add to Cart</button>
    </div>
    <div className="product">
      <img style={{height:"280px"}} src="https://assets.ajio.com/medias/sys_master/root/20230110/k1kR/63bd77f4aeb269c651d4dec6/-288Wx360H-460976009-black-MODEL.jpg" alt="Product 6"></img>
      <h2>Product 6</h2>
      <p>$21.99</p>
      <p>Description of product 6</p>
      <button className="Shop-Btn">Add to Cart</button>
    </div>
    <div className="product">
      <img style={{height:"280px"}}  src="https://cdn.dsmcdn.com/mnresize/400/-/ty537/product/media/images/20220921/17/178147212/257373454/1/1_org_zoom.jpg" alt="Product 7"></img>
      <h2>Product 7</h2>
      <p>$17.99</p>
      <p>Description of product 7</p>
      <button className="Shop-Btn">Add to Cart</button>
    </div>
    <div className="product">
      <img style={{height:"280px"}}  src={"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/0/4/tr:h-400,w-300,cm-pad_resize/04d8cb4JK3360-7_1.jpg?rnd=20200526195200"} alt="Product 8"></img>
      <h2>Product 8</h2>
      <p>$27.99</p>
      <p>Description of product 8</p>
      <button className="Shop-Btn">Add to Cart</button>
    </div>
  </div>
</div>
</div>
    </>)
}
export default Shop ;