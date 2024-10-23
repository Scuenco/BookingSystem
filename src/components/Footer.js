import React from "react";
import Nav from './Nav';
import logo2 from '../assets/logo2.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo2} alt="logo"></img>
        </div>
        <div className="footer-section">
          <div className="">
            <p className="footer-title">Doormat Navigation</p>
          </div>
          <Nav className='footer-link' />
        </div>
        <div className="footer-section">
          <p className="footer-title">Contact</p>
          <ul className="footer-list">
            <li><a className="footer-link" href="">Address</a></li>
            <li><a className="footer-link" href="">Phone number</a></li>
            <li><a className="footer-link" href="">Email</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <p className="footer-title">Social Media Links</p>
          <ul className="footer-list">
            <li><a className="footer-link" href="https://www.facebook.com/" target="_blank">Facebook</a></li>
            <li><a className="footer-link" href="https://www.tiktok.com" target="_blank">Tiktok</a></li>
            <li><a className="footer-link" href="https://www.instagram.com" target="_blank">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
export default Footer;