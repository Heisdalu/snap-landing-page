import TodoImg from "../../assets/icon-todo.svg";
import CalendarImg from "../../assets/icon-calendar.svg";
import RemainderImg from "../../assets/icon-reminders.svg";
import PlanImg from "../../assets/icon-planning.svg";

import style from "./FeatureList.module.css";

const FeatureList = () => {
  return (
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
  );
};

export default FeatureList;
