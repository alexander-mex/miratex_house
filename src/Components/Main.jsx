import React from "react";
import '../styles/Main.css';
import '../styles/Media.css'
import mainImg from '../images/main.jpg';
import arrow from '../images/ArrowDown.svg';
import Line from "./Line";
import Catalog from './Catalog';
import Model from "./Model";

function Main() {
  return(
    <div id="main-container">
      <Line />
      <div className="main-container">
        <section className="about">
          <p>Хто ми такі?</p>
          <span>Ми переробляємо вантажні контейнери на автономні крипто-будинки, готелі, офіси, кафе, які можна розмістити там, де Ви хочете. Вони абсолютно не залежать від комунікацій, повністю готові до експлуатації, а у вільний від роботи час вони видобувають крипто-валюту.</span>       
          <h3>miratex house</h3>
          <img src={mainImg} alt="mainImg" className="main-image"/>
          <div className="side">
            <p>Останнім часом світ змінюється і не зовсім зрозуміло, що станеться далі, тому ми об'єднуємо людей, які бажають жити і вести бізнес за своїми власними правилами.</p>
          </div>
        </section>
        <section id="arrows-area">
          <h3>Як ви можете їх<br /> використовувати</h3>
            <div className="arrow left">
              <a href="!#"><img src={arrow} alt="arrow" /></a>
              <p className="textarrow1">Додаткове простір <br /> для додаткових можливостей</p>
            </div>
            <div className="arrow right">
              <a href="!#"><img src={arrow} alt="arrow" /></a>
              <p className="textarrow2">Орендний дохід інвестується <br /> для миттєвого повернення</p>
            </div>
          <div className="earn">
            <h3>Заробляй <br /> з нами</h3>
            <p>Будь-яку з наших моделей можна використовувати для проживання або розпочатку бізнесу абсолютно автономно, і якщо ви обладнаєте її модулем "майнінгу", вона все одно приноситиме вам гроші.</p>
            <a href="!#" className="earn-btn">Дізнатися більше</a>
          </div>
        </section>
        <Catalog />
        <Model />
      </div>
    </div>
  )
}

export default Main;