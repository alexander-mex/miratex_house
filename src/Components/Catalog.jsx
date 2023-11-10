import React from "react";
import '../styles/Catalog.css';
import '../styles/Media.css'

function Catalog () {
  return (
    <section className="catalog-container">
      <div id="catalog">
        <h3>Каталог</h3>
          <ul className="model">
            <li><a href=""></a>MODEL HOME 15</li>
            <li><a href="!#"></a>MODEL HOME 30</li>
            <li><a href="!#"></a>MODEL HOME LUX</li>
            <li><a href="!#"></a>MODEL CAFE L15</li>
            <li><a href="!#"></a>MODEL CAFE S15</li>
            <li><a href="!#"></a>MODEL HOSTEL 15</li>
            <li><a href="!#"></a>MODEL HOTEL 15</li>
          </ul>
          <ul className="model">
            <li><a href="!#"></a>MODEL OFFICE 15</li>
            <li><a href="!#"></a>MODEL OFFICE 30</li>
            <li><a href="!#"></a>MODEL SHOP 15</li>
            <li><a href="!#"></a>MODEL SLEEP BOX</li>
            <li><a href="!#"></a>MODEL WC</li>
          </ul>
        <div className="ctlg-btn"><a href="#">Завантажити каталог</a></div>
      </div>
    </section>
  )
}

export default Catalog;