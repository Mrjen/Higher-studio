import { observer } from "mobx-react-lite";
import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import ContactCom from "../../components/contactCom";
import PageHeader from "../../components/pageHeader";
import WorkCaseNav from "../../components/workCaseNav";
import { useStore } from "../../stores/index.store";
import About from "./components/about";
import GridLayoutCom from "./components/gridlayoutCom";
import Performance from "./components/performance";
import ServiceCom from "./components/serviceCom";
import SumitCom from "./components/sumitCom";
import Thank from "./components/thank";
import style from "./home.scss";

const Home = observer(() => {
  const videoRef = useRef<any>();

  const videoBg = "https://asset-1256405151.cos.ap-shenzhen-fsi.myqcloud.com/index_bg_video.mp4";
  let player: any = null;

  // const [workCase, setWorkCase] = useState();

  const {
    homeStore: { workCase, changeWorkCaseActive },
  } = useStore();

  const init = () => {
    player = videojs(
      videoRef.current,
      {
        autoplay: true,
        controls: false,
        controlBar: false,
        loop: true,
        muted: true,
        textTrackSettings: false as any,
        html5: {
          nativeTextTracks: false,
        },
        sources: [
          {
            src: videoBg,
            type: "video/mp4",
          },
        ],
      },
      () => {
        const btn = document.querySelector(".vjs-big-play-button");
        btn?.setAttribute("style", "display: none");
      }
    );
    player.controls(false);
  };

  useEffect(() => {
    init();

    return () => {
      player?.dispose();
    };
  }, []);

  return (
    <div className={style.container}>
      <PageHeader />
      <section className={style.section01}>
        <div className={style.main}>
          <p className={style.main_title}>专注互联网产品体验设计</p>
          <p className={style.sub_title}>我们追求极致设计体验，用心做设计并服务号每一个客户</p>
          <a className={style.contact}>联系我们</a>
        </div>
        {/* <video ref={videoRef} className={style.bgvideo01 + " "}></video> */}
      </section>

      <section className={style.section02}>
        <p className={style.section02_title}>我们积累了各行各业丰富的案例和经验</p>
        <p className={style.section02_subtitle}>我们积累了各行各业丰富的案例和经验</p>

        <WorkCaseNav workCase={workCase} tapItem={(idx) => changeWorkCaseActive(idx)} />
        <GridLayoutCom />
        <Performance />
        <ServiceCom />
        <About />
        <Thank />
        <SumitCom />
        <ContactCom />
      </section>
    </div>
  );
});

export default Home;
