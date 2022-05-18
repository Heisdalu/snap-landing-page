import React from "react";
import databizImage from "../../assets/client-databiz.svg";
import autoPhileImage from '../../assets/client-audiophile.svg'
import meetImage from '../../assets/client-meet.svg'
import makerImage from '../../assets/client-maker.svg'
import style from "./Content.module.css";

const Content = () => {
  return (
    <section className={style.content}>
      <h1 className={style['content-title']}>Make remote work</h1>
      <p className={style.text}>
        Get your team is sync, no matter your location. Streaming processes,
        create team rituals, and watch productivity soar.
      </p>

      <button typeof="submit" className={style.button}>Learn more</button>
      <aside className={style.logoContainer}>
        <span>
          <img src={databizImage} alt="dataBiz logo" />
        </span>
        <span>
          <img src={autoPhileImage} alt="dataBiz logo" />
        </span>
        <span>
          <img src={meetImage} alt="dataBiz logo" />
        </span>
        <span>
          <img src={makerImage} alt="dataBiz logo" />
        </span>
       
      </aside>
    </section>
  );
};

export default Content;
