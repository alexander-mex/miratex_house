import React, { useState, useEffect } from "react";
import logo from '../images/logo.svg';
import share from '../images/share.svg';
import login from '../images/login.svg';
import '../styles/Header.css';
import '../styles/Media.css'
import {Link} from 'react-scroll';
import Login from "./Login";

function Header() {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const [isLoginFormActive, setIsLoginFormActive] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerActive(!isBurgerActive);
  };

  const toggleLoginForm = () => {
    setIsLoginFormActive(!isLoginFormActive);
  };

  const closeLoginForm = () => {
    setIsLoginFormActive(false);
  };

  useEffect(() => {
    const socialLinks = document.querySelector(".social-links");
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      if (socialLinks) {
        if (scrollTop > 25) {
          socialLinks.style.opacity = 0;
        } else {
          socialLinks.style.opacity = 1;
        }
      }
    });
  }, []);
  
  return(
    <div id="header">
      <div className="header-content">
        <div className="logo">
          <Link to="main">
            <img src={logo} alt='logo'></img>
          </Link>
          <p>miratex house</p>
        </div>
        <ul className="links">
          <li className="bounce"><Link to="catalog">Каталог</Link></li>
          <li className="bounce"><Link to="!#">Контакти</Link></li>
          <li className="bounce"><Link to="arrows-area">Заробляй з нами</Link></li>
        </ul>
        <ul className="lang">
          <li className="bounce"><Link to="!#">EN</Link></li>
          <li className="bounce"><Link to="!#">DE</Link></li>
          <li className="bounce"><Link to="!#">FR</Link></li>
          <li className="bounce"><Link to="!#">ES</Link></li>
          <li className="active bounce"><Link to="!#">UA</Link></li>
        </ul>
        <div className="social-buttons">
          <div className="share bounce">
            <button to="!#">
              <img src={share} alt="share" />
              <p>Поделитися</p>
            </button>
          </div>
          <div className="login bounce">
            <button to="!#" onClick={toggleLoginForm}>
              <p>Увійти</p>
            </button>
          </div>
        </div>
        <div className="social-links">
          <ul>
            <li><Link to="!#"><i className="fa-brands fa-instagram"></i></Link></li>
            <li><Link to="!#"><i className="fa-brands fa-facebook"></i></Link></li>
            <li><Link to="!#"><i className="fa-brands fa-pinterest"></i></Link></li>
            <li><Link to="!#"><i className="fa-brands fa-youtube"></i></Link></li>
          </ul>
        </div>
        <div className={`burger-menu ${isBurgerActive ? 'active' : ''}`}>
          <div className={`burger-icon ${isBurgerActive ? 'active' : ''}`} onClick={toggleBurgerMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`burger-links ${isBurgerActive ? 'active' : ''}`}>
          <li className="bounce"><Link to="catalog">Каталог</Link></li>
          <li className="bounce"><Link to="!#">Контакти</Link></li>
          <li className="bounce"><Link to="arrows-area">Заробляй з нами</Link></li>
          <div className="bar-social-buttons">
            <div className="share bounce">
              <button to="!#">
                <img src={share} alt="share" />
                <p>Поделитися</p>
              </button>
            </div>
            <div className="login bounce">
              <button to="!#" onClick={toggleLoginForm}>
                <img src={login} alt="login" />
                <p>Увійти</p>
              </button>
            </div>
        </div>
          <div className="bar-social-links">
            <ul>
              <li><Link to="!#"><i className="fa-brands fa-instagram"></i></Link></li>
              <li><Link to="!#"><i className="fa-brands fa-facebook"></i></Link></li>
              <li><Link to="!#"><i className="fa-brands fa-pinterest"></i></Link></li>
              <li><Link to="!#"><i className="fa-brands fa-youtube"></i></Link></li>
            </ul>
        </div>
          <ul className="bar-lang">
            <li className="bounce"><Link to="!#">EN</Link></li>
            <li className="bounce"><Link to="!#">DE</Link></li>
            <li className="bounce"><Link to="!#">FR</Link></li>
            <li className="bounce"><Link to="!#">ES</Link></li>
            <li className="active bounce"><Link to="!#">UA</Link></li>
          </ul>
        </ul>
      </div>
      </div>
      <Login key={isLoginFormActive} active={isLoginFormActive} closeForm={closeLoginForm} />
    </div>
  )
}

export default Header;