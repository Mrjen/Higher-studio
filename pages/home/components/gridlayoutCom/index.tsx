// import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import style from "./gridlayoutCom.scss";
import React, { useState } from "react";
// import { MuuriComponent } from "muuri-react";

const GridLayoutCom = () => {
  const [items, setitems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

  return (
    <>
      <div className={style.layout}>
        {items.map((el, idx) => {
          return (
            <div key={idx} className={style.workcase_item}>
              <img src={`https://oktools.net/ph/320x240`} />
              <div className={style.maskdiv}>
                <p className={style.title}>华为中控</p>
                <p className={style.subtitle}>前端官网设计</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={style.morebtn}>查看更多案例</div>
    </>
  );
};

export default GridLayoutCom;
