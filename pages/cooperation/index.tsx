import React, { useState } from "react";
import ContactCom from "../../components/contactCom";
import PageHeader from "../../components/pageHeader";
import style from "./cooperation.scss"

const Cooperation = () => {

  const [tabNav, settabNav] = useState([
    {
      title: "合作流程",
      icon: "https://oktools.net/ph/34x34",
      active: true
    },
    {
      title: "付款流程",
      icon: "https://oktools.net/ph/34x34",
      active: false
    },
    {
      title: "常见问题",
      icon: "https://oktools.net/ph/34x34",
      active: false
    }
  ])

  const changeNav = (idx: number) => {
    tabNav.map((el) => el.active = false);
    tabNav[idx].active = true;
    settabNav([...tabNav]);
  }

  return (
    <div>
      <PageHeader />
      <div className={style.banner}>
        <p className={style.title}>
          <img className={style.img_logo} src={`https://oktools.net/ph/364x34`} />
          合作</p>
      </div>

      <div className={style.main}>
        <ul className={style.left}>
          {
            tabNav.map((el, idx: number) => {
              return <li key={el.title} className={style.left_item} onClick={() => changeNav(idx)}>
                <img className={style.icon} src={el.icon} />
                <p className={style.icon_text}
                  style={{ color: el.active ? "#40CC1D" : "#131017" }}>{el.title}</p>
              </li>
            })
          }
        </ul>
        <div className={style.right}>
          <p className={style.ptitle}>
            Brand Identity
          </p>
          <p className={style.content} dangerouslySetInnerHTML={{
            __html: "We at The Glyph Studio aim to create a unique and recognizable brand design. It should highlight your product benefits and win customers’ loyalty. The design itself will evoke associations related <br/>to your brand name, design, product characteristics, etc. You can count on us for a proficient branding style expanding your audience. See how we can put this to life."
          }}></p>
          <p className={style.ptitle}>
            Brand Identity
          </p>
          <p className={style.content} dangerouslySetInnerHTML={{
            __html: "We at The Glyph Studio aim to create a unique and recognizable brand design. It should highlight your product benefits and win customers’ loyalty. The design itself will evoke associations related <br/>to your brand name, design, product characteristics, etc. You can count on us for a proficient branding style expanding your audience. See how we can put this to life."
          }}></p>
          <p className={style.ptitle}>
            Brand Identity
          </p>
          <p className={style.content} dangerouslySetInnerHTML={{
            __html: "We at The Glyph Studio aim to create a unique and recognizable brand design. It should highlight your product benefits and win customers’ loyalty. The design itself will evoke associations related <br/>to your brand name, design, product characteristics, etc. You can count on us for a proficient branding style expanding your audience. See how we can put this to life."
          }}></p>
          <p className={style.ptitle}>
            Brand Identity
          </p>
          <p className={style.content} dangerouslySetInnerHTML={{
            __html: "We at The Glyph Studio aim to create a unique and recognizable brand design. It should highlight your product benefits and win customers’ loyalty. The design itself will evoke associations related <br/>to your brand name, design, product characteristics, etc. You can count on us for a proficient branding style expanding your audience. See how we can put this to life."
          }}></p>
          <p className={style.ptitle}>
            Brand Identity
          </p>
          <p className={style.content} dangerouslySetInnerHTML={{
            __html: "We at The Glyph Studio aim to create a unique and recognizable brand design. It should highlight your product benefits and win customers’ loyalty. The design itself will evoke associations related <br/>to your brand name, design, product characteristics, etc. You can count on us for a proficient branding style expanding your audience. See how we can put this to life."
          }}></p>
        </div>
      </div>

      <ContactCom />
    </div>
  );
};

export default Cooperation;
