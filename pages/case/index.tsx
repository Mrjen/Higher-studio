import React from "react";
import PageHeader from "../../components/pageHeader";
import WorkCaseNav from "../../components/workCaseNav";
import { useStore } from "../../stores/index.store";
import style from "./case.scss";
import { observer } from "mobx-react-lite";
import GridLayoutCom from "../home/components/gridlayoutCom";
import ContactCom from "../../components/contactCom";

const Case = observer(() => {
  const {
    homeStore: { workCase, changeWorkCaseActive },
  } = useStore();

  return (
    <>
      <PageHeader />
      <div className={style.banner}>
        <p className={style.title}>我们积累了各行业丰富的案例和经验</p>
        <p className={style.subtitle}>匠心精神打造产品，用心做好设计，帮助每个客户提升产品和企业价值</p>
      </div>

      <div className={style.navstyle}>
        <WorkCaseNav workCase={workCase} tapItem={(idx) => changeWorkCaseActive(idx)} />
      </div>

      <GridLayoutCom />

      <ContactCom />
    </>
  );
});

export default Case;
