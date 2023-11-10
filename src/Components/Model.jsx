import React from "react";
import {Link} from 'react-scroll';
import '../styles/Model.css';
import '../styles/Media.css'
import pic1 from '../images/pic1.jpg';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';
import pic4 from '../images/pic4.jpg';
import pic5 from '../images/pic5.jpg';
import pic6 from '../images/pic6.jpg';
import pic7 from '../images/pic7.jpg';

function Model () {
  return (
    <section id="model-home">
      <h1>Модель дому</h1>
      <div className="home-model">
        <div className="home">
          <img src={pic1} alt="pic1" />
        </div>    
        <div className="home-conteiner1">
          <img className="bathroom1" src={pic2} alt="pic2" />
          <img className="bathroom2" src={pic3} alt="pic3" />
          <img className="terrace" src={pic4} alt="pic4" />
        </div>
        <div className="home-container2">
          <div className="col-1">
            <img src={pic5} alt="pic5" />
            <ul className="advantages">
              <li>Виготовлений із одного 20-футового контейнера, площею 15 кв. м;</li>
              <li>Має повноцінне спальне місце - диван-ліжко; </li>
              <li>Кухня з індукційною плитою і холодильником;</li>
              <li>Душ і туалет; телевізор;</li>
              <li>Wi-Fi роутер;</li>
              <li>Підлога з підігрівом, обігрівальні керамопанелі;</li>
              <li>Клімат-контроль;</li>
              <li>Автономне електропостачання;</li>
              <li>Автономна каналізація.</li>  
            </ul>
            <a href="!#" className="rent-btn">орендувати або придбати</a>
          </div>
          <div className="col-2">
            <p>Ідеальний для проживання. Його можна використовувати для постійного проживання, для відпочинку на природі або як гостьовий будинок.</p>
            <img src={pic6} alt="pic6" />
            <img src={pic7} alt="pic7" />
          </div>
        </div>
      </div>
      <div className="arrows">
        <button className="arrow-left"><i className="fa-solid fa-arrow-left"></i></button>
        <button className="arrow-right"><i className="fa-solid fa-arrow-right"></i></button>
      </div>
      <div className="also">
        <h2>Що ще можно зробити з контейнерів?</h2>
        <p>Велика кількість ідей на наших соціальних мережах:</p>
        <div className="social">
          <ul>
            <li><Link to="!#"><i className="fa-brands fa-instagram"></i></Link></li>
            <li><Link to="!#"><i className="fa-brands fa-facebook"></i></Link></li>
            <li><Link to="!#"><i className="fa-brands fa-pinterest"></i></Link></li>
            <li><Link to="!#"><i className="fa-brands fa-youtube"></i></Link></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Model;