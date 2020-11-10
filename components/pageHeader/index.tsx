import React, { useState } from "react";
import style from "./pageHeader.scss";
import ActiveLink from "../activeLink";

const PageHeader = () => {
  const [navList] = useState([
    {
      title: "首页",
      path: "/",
    },
    {
      title: "案例作品",
      path: "/case",
    },
    {
      title: "服务范围",
      path: "/service",
    },
    {
      title: "合作流程",
      path: "/cooperation",
    },
    {
      title: "关于我们",
      path: "/about",
    },
  ]);

  return (
    <nav className={style.nav}>
      <main className={style.main}>
        <ActiveLink href="/" activeClassName="">
          <img className={style.navlogo} src={"http://oktools.net/ph/204x30"} />
        </ActiveLink>
        <ul className={style.navlist}>
          {navList.map((el) => (
            <ActiveLink href={el.path} key={el.title} activeClassName={style.navactive}>
              <li className={style.navitem}>{el.title}</li>
            </ActiveLink>
          ))}
        </ul>
      </main>
    </nav>
  );
};

export default PageHeader;
