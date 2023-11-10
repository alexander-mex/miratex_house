import React from "react";
import '../styles/Footer.css';
import footerLogo from '../images/footer-logo.svg';
import '../styles/Media.css'

function Footer () {
  return (
    <section id="contacts">
      <div className="footer">
        <div className="col1">
          <ul className="footer-logo">
              <li> <img src={footerLogo} alt="logo" /></li>
              <li className="slash">|</li>
              <li>
                miratex <br/> house
              </li>
          </ul>
          <ul className="our-team">
              <li>Ваша команда бере на себе все: від розробки ідеї до впровадження. Функціональність і традиції - це те, що ми впроваджуємо в кожному нашому проекті.</li>
          </ul>
        </div>
        <div className="col-info">
          <p></p>
            <ul>
              <li className="head-info">&#8213;&#8213;&#160; Дзвонить нам</li>
              <li>GB +4420 45770896</li>
              <li>FR +33 1 23 45 67 89</li>
              <li>PL +48 784 806484</li>
            </ul>
            <ul>
              <li className="head-info">&#8213;&#8213; &#160; Пишить нам</li>
              <li>info@miratexhouse.com</li>
            </ul>
            <ul>
              <li className="head-info">&#8213;&#8213; &#160;Приїздить до нас</li>
              <li>Miratex House OU</li>
              <li>Registry code 14940959</li>
              <li>Adress:Sepapaja 6, Tallin</li>
            </ul>
          </div>            
        </div>
        <div className="under-footer">
            <ul className="under-footer-l">
              <li>&copy;&#160; MiratexHouse. all rights reserved</li>
            </ul>
            <ul className="under-footer-r">
              <li>Відмова від відповідальності</li>
              <li>Ризики інвестицій</li>
              <li>Загальні умови позики</li>
              <li>Попередження про ризики</li>
              <li>Умови використання</li>
            </ul>
        </div>
    </section>
  )
}

export default Footer;