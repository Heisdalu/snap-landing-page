import React from "react";

import CloseMenu from "../../assets/icon-close-menu.svg";
import FeatureList from "./FeatureList";
import CompanyList from "./CompanyList";

import style from "./Modal.module.css";

const Modal = (props) => {
  const classes = props.onShow ? style.modalContainer : style.disabled;

  props.onShow
    ? (document.querySelector("body").style.overflowY = "hidden")
    : (document.querySelector("body").style.overflowY = "scroll");

  return (
    <div className={classes}>
      <nav className={style.modal}>
        <div className={style.closeMenuContainer}>
          <img src={CloseMenu} alt="Close-menu button" onClick={props.onHide} />
        </div>
        <ul className={style.navList}>
          <FeatureList />
          <CompanyList />
          <li>Careers</li>
          <li>About</li>
        </ul>

        <section className={style.buttonContainer}>
          <button className={style.loginBtn}>Login</button>
          <button className={style.registerBtn}>Register</button>
        </section>
      </nav>
    </div>
  );
};

export default Modal;
