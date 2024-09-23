import React from "react";
import {Link} from 'react-router-dom';

const Nav = (prop) => {
  return(
    <nav>
      <div>
        <ul className={prop.className}>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link" href="">About</Link></li>
          <li><Link to="/menu" className="nav-link" href="">Menu</Link></li>
          <li><Link to="/reservations" className="nav-link" href="">Reservations</Link></li>
          <li><Link to="/order-online" className="nav-link" href="">Order Online</Link></li>
          <li><Link to="/login" className="nav-link" href="">Login</Link></li>
        </ul>
      </div>
    </nav>
  )
}
export default Nav;