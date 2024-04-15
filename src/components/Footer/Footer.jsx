import React from 'react'
import "./Footer.css"
import Github from "./github.png"
import Instagram from "./instagram.png"
import LinkedIn from "./linkedin.png"
import Logo from "./logo.png"

const Footer = () => {
  return (
    <div className="Footer-container">
    <hr/>
    <div className="footer">
        <div className="social-links">
        <img src={Github} alt="" />
        <img src={Instagram} alt="" />
        <img src={LinkedIn} alt="" />

    </div>
    <div className="log-f">
        <img src={Logo} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Footer;
