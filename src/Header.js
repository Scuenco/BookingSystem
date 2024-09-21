import React from "react";
import logo from './assets/Logo.svg';
import Nav from './Nav';

const Header = () => {
  return (
    <>
      <header>
        <div className="header">
          <img src={logo} alt="logo"></img>
          <Nav className="nav-list"/>
        </div>
      </header>
    </>
  )
}
export default Header;