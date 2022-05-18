import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import FeatureList from "../Modal/FeatureList";
import CompanyList from "../Modal/CompanyList";

import style from './Header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
      <Logo />
      <Menu />
      <nav className={style["desktop--navBar"]}>
        <ul className={style["desktop--navList"]}>
          <FeatureList />
          <CompanyList />
          <li>Careers</li>
          <li>About</li>
        </ul>
        <div className={style.buttonContainer}>
          <button className={style.loginBtn}>Login</button>
          <button className={style.registerBtn}>Register</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
