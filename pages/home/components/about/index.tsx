import React from "react";
import style from "./about.scss";

const About = () => {
  return (
    <div className={style.about}>
      <main className={style.main}>
        <p className={style.title}>关于我们的故事</p>
        <p className={style.subtitle}>因为热爱，我们从未放弃追逐，因为热爱，我们才会精雕细琢</p>
        <p className={style.desc}>
          Higher Stdudio
          成立于2016年，我们是一家专注用户体验设计开发与互联网品牌建设的设计团队，创立至今为160多位客户提供了创
          <br />
          新服务与专业的设计方案。团队成员分别来自于阿里，腾讯，小红书等等专业团队出生，对互联网视觉设计有着较深的认知。
          <br />
          可以提供美观亲和与合理易用的高品质视觉设计外包服务。
          <br />
          设计服务范围包括：交互原型设计、产品UI视觉设计、网站设计与前端开发建设、移动端的app软件产品界面设计、小程序UI设计，H5页面设计，图标设计、品牌logo及平面海报设计等。我们的价值与宗旨是用心做好设计，帮助每个客户提升产品和企业价值。
        </p>
        <div className={style.lookmore}>查看更多</div>
      </main>
    </div>
  );
};

export default About;
