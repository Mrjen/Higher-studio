import React from "react";
import { IworkCase } from "../../stores/home.store";
import style from "./workCaseNav.scss";

interface IWorkCaseNav {
  workCase: IworkCase;
  tapItem: (idx: number) => void;
}

const WorkCaseNav = ({ workCase, tapItem }: IWorkCaseNav) => {
  return (
    <ul className={style.workcase_nav}>
      {workCase.map((el, idx) => {
        return (
          <li
            key={el.title}
            onClick={() => tapItem && tapItem(idx)}
            className={`${style.workcase_navitem} ${el.active ? style.active : ""}`}
          >
            {el.title}
          </li>
        );
      })}
    </ul>
  );
};

export default WorkCaseNav;
