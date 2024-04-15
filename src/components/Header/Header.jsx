import React, { useState } from 'react';
import './Header.css';
import Logo from './logo.png';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="" className='logo'/>
      
      <ul className='header-menu'>
        <li><a href="/header">Home</a></li>
        <li><a href="/Hero">Programs</a></li>
        <li><a href="/Reasons">Why us</a></li>
        <li><a href="/plans">Plans</a></li>
        <li><a href="/quiz">Quiz</a></li>
        <li><a href="/products">Products</a></li>
      </ul>
    </div>
  );
}

export default Header;

