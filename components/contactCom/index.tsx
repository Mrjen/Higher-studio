import React, { useState } from "react";
import style from "./contactCom.scss";

const ContactCom = () => {
  const [linsIcons] = useState([
    {
      icon: "https://oktools.net/ph/40x40?t=LOGO",
      url: "",
    },
    {
      icon: "https://oktools.net/ph/40x40?t=LOGO",
      url: "",
    },
    {
      icon: "https://oktools.net/ph/40x40?t=LOGO",
      url: "",
    },
  ]);

  return (
    <div className={style.contact_com}>
      <main className={style.contact_main}>
        <p className={style.wechat_tip}>官方合作微信</p>
        <img className={style.contac_logo} src={`https://oktools.net/ph/246x50?t=LOGO`} />
        <p className={style.wechat_tip}>工作室官方合作微信</p>
        <img className={style.qrcode} src={`https://oktools.net/ph/170x170?t=二维码`} />
        <ul className={style.links}>
          {linsIcons.map((el) => {
            return (
              <li key={el.icon} className={style.icons}>
                <img src={el.icon} />
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default ContactCom;
