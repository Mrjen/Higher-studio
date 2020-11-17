import React, { useState } from "react";
import style from "./thank.scss";

const Thank = () => {
  const [logos, setLogos] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <div className={style.thank}>
      <p className={style.title}>感谢他们选择了Higher</p>
      <p className={style.subtitle}>客户给我们信任，我们给客户安心</p>
      <ul className={style.logos}>
        {logos.map((el) => {
          return (
            <li className={style.logoli} key={el}>
              <img className={style.logo} src={`https://oktools.net/ph/240x120`} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Thank;
