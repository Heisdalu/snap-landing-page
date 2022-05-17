import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import style from './Header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
      <Logo />
      <Menu />
    </header>
  );
};

export default Header;
