import React, { useState } from "react";
import ArrowUp from "../../assets/icon-arrow-up.svg";
import ArrowDown from "../../assets/icon-arrow-down.svg";

import style from "./CompanyList.module.css";

const CompanyList = () => {
  const [active, setActive] = useState(false);
  const toggleHandler = () => {
    setActive(!active);
  };

  const controlArrow = active ? (
    <span>
      <img src={ArrowUp} alt="arrow up icon" />
    </span>
  ) : (
    <span>
      <img src={ArrowDown} alt="arrow down icon" />
    </span>
  );
  return (
    <li className={style.toggleList}>
      <section className={style.inner} onClick={toggleHandler}>
        <span className={style.tag}>Company</span>
        <span className={style.navigateArrow}>{controlArrow}</span>
      </section>
      {active && (
        <ul className={style.innerList}>
          <li>History</li>
          <li>Our Team</li>
          <li>Blog</li>
        </ul>
      )}
    </li>
  );
};

export default CompanyList;
