import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import Nav from './Nav';
import icon from '../assets/hamburger.svg';
import recent from '../assets/Recent.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <header>
      <img src={logo} alt="logo"></img>
      <div className="recent" onClick={ handleGoBack }>
        <img src={recent} alt="recent"></img>
      </div>
      <div className="menu" onClick={() => {
        setMenuOpen(!menuOpen)}}>
        <img src={icon} alt="menu icon"></img>
      </div>
      <Nav menuOpen={!menuOpen} className={'header'}/>
    </header>
  )
}
export default Header;