import React, { useState } from "react";
import ContactCom from "../../components/contactCom";
import PageHeader from "../../components/pageHeader";
import style from "./about.scss"

const About = () => {

  const [historyList, sethistoryList] = useState([
    {
      year: "2020",
      content: "Business cards still play a pivotal role in <br /> communication with customers or clients. If they <br /> make a killer first impression, people will be unlikely <br /> to throw them away. We love creating memorable <br /> minimalist designs. The key goal here is to make <br /> business cards informative and unique."
    },
    {
      year: "2019",
      content: "Business cards still play a pivotal role in <br /> communication with customers or clients. If they <br /> make a killer first impression, people will be unlikely <br /> to throw them away. We love creating memorable <br /> minimalist designs. The key goal here is to make <br /> business cards informative and unique."
    },
    {
      year: "2018",
      content: "Business cards still play a pivotal role in <br /> communication with customers or clients. If they <br /> make a killer first impression, people will be unlikely <br /> to throw them away. We love creating memorable <br /> minimalist designs. The key goal here is to make <br /> business cards informative and unique."
    },
    {
      year: "2017",
      content: "Business cards still play a pivotal role in <br /> communication with customers or clients. If they <br /> make a killer first impression, people will be unlikely <br /> to throw them away. We love creating memorable <br /> minimalist designs. The key goal here is to make <br /> business cards informative and unique."
    }
  ]);

  const [PersionList, setPersionList] = useState([
    {
      avatar: "https://oktools.net/ph/510x298?t=头像1"
    },
    {
      avatar: "https://oktools.net/ph/510x298?t=头像2"
    },
    {
      avatar: "https://oktools.net/ph/510x298?t=头像3"
    },
    {
      avatar: "https://oktools.net/ph/510x298?t=头像4"
    }
  ]);

  return (
    <div>
      <PageHeader />
      <div className={style.banner}>
        <p className={style.title}>
          <img className={style.img_logo} src={`https://oktools.net/ph/364x34`} />
          我们</p>
      </div>
      <div className={style.main}>
        <p className={style.main_title} dangerouslySetInnerHTML={{
          __html: `We do not complete projects. We <br/>take care of them.`
        }}></p>
        <p className={style.subtitle} dangerouslySetInnerHTML={{
          __html: `We at The Glyph Studio aim to create a unique and recognizable brand design. It should highlight <br /> your product benefits and win customers’ loyalty. The design itself will evoke associations related `
        }}></p>

        <img className={style.companyimg} src={`https://oktools.net/ph/1048x472?t=公司环境`} />

      </div>
      <ul className={style.history}>
        {
          historyList.map((el) => {
            return <li key={el.year} className={style.history_item} dangerouslySetInnerHTML={{
              __html: `${el.content}`
            }}>

            </li>
          })
        }
      </ul>

      <ul className={style.persion}>
        {
          PersionList.map((el) => <img className={style.avatar} key={el.avatar} src={el.avatar} />)
        }
      </ul>

      <ContactCom />
    </div>
  );
};

export default About;
