import React, { useState } from "react";
import ArrowUp from "../../assets/icon-arrow-up.svg";
import ArrowDown from "../../assets/icon-arrow-down.svg";

import TodoImg from "../../assets/icon-todo.svg";
import CalendarImg from "../../assets/icon-calendar.svg";
import RemainderImg from "../../assets/icon-reminders.svg";
import PlanImg from "../../assets/icon-planning.svg";

import style from "./FeatureList.module.css";

const FeatureList = () => {
  const [activate, setActivate] = useState(false);

  const toggleHandler = () => {
    setActivate(!activate);
  };

  const changeArrow = activate ? (
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
        <span className={style.tag}>Features</span>
        <span className={style.navigateArrow}>{changeArrow}</span>
      </section>
      
      {activate && (
        <ul className={style.innerList}>
          <li>
            <span>
              <img src={TodoImg} alt="todo list icon" />
            </span>
            <span>TodoList</span>
          </li>
          <li>
            <span>
              <img src={CalendarImg} alt="todo list icon" />
            </span>
            <span>Calendar</span>
          </li>
          <li>
            <span>
              <img src={RemainderImg} alt="todo list icon" />
            </span>
            <span>Reminders</span>
          </li>
          <li>
            <span>
              <img src={PlanImg} alt="todo list icon" />
            </span>
            <span>Planning</span>
          </li>
        </ul>
      )}
    </li>
  );
};

export default FeatureList;
