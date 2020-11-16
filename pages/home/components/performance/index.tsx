import React, { useState } from "react";
import style from "./performance.scss";

const Performance = () => {
  const [Plist] = useState([
    {
      count: 200,
      text: "服务客户",
      tag: "+",
    },
    {
      count: 308,
      text: "服务项目",
      tag: "款",
    },
    {
      count: 224,
      text: "服务客户",
      tag: "国内外",
    },
    {
      count: 224,
      text: "国内外",
      tag: "覆盖地域",
    },
  ]);

  return (
    <div className={style.performance}>
      <p className={style.title}>我们的业绩</p>
      <p className={style.subtitle}>用数据说话，用实力做事，感谢Higher Studie 全体队员的付出与努力，感谢！</p>
      <ul className={style.performance_list}>
        {Plist.map((el) => {
          return (
            <li className={style.performance_list_item}>
              <div className={style.row}>
                <div className={style.counts}>{el.count}</div>
                <div className={style.tag}>{el.tag}</div>
              </div>
              <p className={style.text}>{el.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Performance;
