import React from "react";
import {NavLink} from 'react-router-dom';

const Nav = (props) => {
  return(
    <nav className={`${props.className} ${ props.menuOpen ? "open" : "" }`}>
      <ul className={props.className}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about" >About</NavLink></li>
        <li><NavLink to="/menu" >Menu</NavLink></li>
        <li><NavLink to="/reservations" >Reservations</NavLink></li>
        <li><NavLink to="/order" >Order Online</NavLink></li>
        <li><NavLink to="/login" >Login</NavLink></li>
      </ul>
    </nav>
  )
}
export default Nav;
