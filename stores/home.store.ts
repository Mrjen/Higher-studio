import { makeAutoObservable } from "mobx";

export type IworkCase = Array<{
  title: string;
  active: boolean;
}>;

interface IHomeStore {
  workCase: IworkCase;
  changeWorkCaseActive: (idx: number) => void;
}

class HomeStore implements IHomeStore {
  constructor() {
    makeAutoObservable(this);
  }

  workCase = [
    {
      title: "全部",
      active: true,
    },
    {
      title: "网站设计",
      active: false,
    },
    {
      title: "移动APP设计",
      active: false,
    },
    {
      title: "软件见面设计",
      active: false,
    },
    {
      title: "后台界面设计",
      active: false,
    },
    {
      title: "小程序设计",
      active: false,
    },
    {
      title: "品牌LOGO",
      active: false,
    },
    {
      title: "VI视觉设计",
      active: false,
    },
  ];

  changeWorkCaseActive = (idx: number) => {
    const _workCase = this.workCase;
    _workCase.map((el) => (el.active = false));
    _workCase[idx].active = true;
    this.workCase = [..._workCase];
    // console.log("this.workCase", this.workCase);
  };
}

export default HomeStore;
