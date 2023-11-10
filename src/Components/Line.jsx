// Line.js
import React, { useState, useEffect } from "react";
import '../styles/Line.css';
import '../styles/Media.css'
import line from '../images/line.svg';
import ellipse from '../images/Ellipse.svg';

function Line() {
  const [ell, setEll] = useState(false);

  useEffect(() => {
    const ellScroll = () => {
      (window.scrollY >= 0) ? setEll(true) : setEll(false);
    };

    // Викликати обробник відразу при монтуванні компонента
    ellScroll();

    window.addEventListener('scroll', ellScroll);

    return () => {
      window.removeEventListener('scroll', ellScroll);
    };
  }, []);

  return (
    <div className="line-container">
      <div className="line">
        <img src={line} alt="line" />
      </div>
      <div className="ellipse">
        <div className={ell ? "ell active" : "ell"}>
          <img src={ellipse} alt="ellipse" />
        </div>
      </div>
    </div>
  );
}

export default Line;
