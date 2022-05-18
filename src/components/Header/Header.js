import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Modal from '../Modal/Modal'
import style from './Header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
      <Logo />
      <Menu />
      {/* <div className={style.desktopModal}>
        <Modal />
      </div> */}
    
    </header>
  );
};

export default Header;
