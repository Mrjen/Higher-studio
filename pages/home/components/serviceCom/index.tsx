import React, { useState } from "react";
import style from "./service.scss";

const ServiceCom = () => {
  const [serviceList] = useState([
    {
      icon: "https://oktools.net/ph/150x150",
      title: "交互原型设计",
      desc: ["信息架构", "低保真原型", "界面布局", "高保真原型设计", "产品原型设计"],
    },
    {
      icon: "https://oktools.net/ph/150x150",
      title: "产品UI设计",
      desc: ["响应式网站UI设计", "软件界面UI设计", "移动端APP界面设计", "小程序UI设计", "界面交互动效设计"],
    },
    {
      icon: "https://oktools.net/ph/150x150",
      title: "品牌及平面设计",
      desc: ["logo设计及企业VI体系", "活动海报及易拉宝设计", "插画设计", "动画制作", "名片设计以宣传册设计"],
    },
    {
      icon: "https://oktools.net/ph/150x150",
      title: "前端开发服务",
      desc: ["响应式网站前端开发", "小程序前端开发", "软件界面前端开发", "html5开发", "环境部署和数据对接"],
    },
  ]);

  return (
    <div className={style.service}>
      <p className={style.title}>我们可以为你提供的服务</p>
      <p className={style.subtitle}>我们专注用户体验设计和开发</p>
      <ul className={style.service_list}>
        {serviceList.map((el) => {
          return (
            <li className={style.service_list_item} key={el.title}>
              <img className={style.icon} src={el.icon} />
              <div className={style.item_main}>
                <p className={style.title}>{el.title}</p>
                <div className={style.desc}>
                  {el.desc.map((elx) => {
                    return <p key={elx}>{elx}</p>;
                  })}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ServiceCom;
