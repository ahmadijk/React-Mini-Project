import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
function Navbar(){
    return(<>
    <div className="Navbar">
        <h3>.Logo</h3>
    <ul>
        <li> <NavLink to={"/Home"}>Home</NavLink> </li>
        <li> <NavLink to={"/Shop"}>Shop</NavLink> </li>
        <li> <NavLink to={"/Blogs"}>Blogs</NavLink> </li>  
        <li> <NavLink to={"/About"}>About</NavLink> </li>  
        <li> <NavLink to={"/Contact"}>Contact</NavLink> </li> 

    </ul>
    </div>
    </>)
}
export default Navbar ;


