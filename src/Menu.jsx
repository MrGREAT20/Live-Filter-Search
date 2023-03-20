import React from "react";
import { NavLink } from "react-router-dom";
import './index.css';

function Menu(){
    return (<>
    <div className="menu_style">
        <NavLink  to="/" style={({ isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : "white",
    };
  }}>About Us</NavLink>
        <NavLink to="/service" style={({ isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : "white",
    };
  }}>Services</NavLink>
  <NavLink to="/search" style={({ isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : "white",
    };
  }}>Search</NavLink>
        <NavLink to="/contact" style={({ isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : "white",
    };
  }}>Contact</NavLink>
        </div>
    </>
    );
}
export default Menu;