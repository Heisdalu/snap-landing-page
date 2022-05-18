import ArrowUp from "../../assets/icon-arrow-up.svg";
import ArrowDown from "../../assets/icon-arrow-down.svg";

import style from "./CompanyList.module.css";

const CompanyList = () => {
  return (
    <li className={style.toggleList}>
      <section className={style.inner}>
        <span>Company</span>
        <span className={style.navigateArrow}>
          <span>
            <img src={ArrowUp} alt="arrow up icon" />
          </span>
          <span>
            <img src={ArrowDown} alt="arrow down icon" />
          </span>
        </span>
      </section>
      <ul className={style.innerList}>
        <li>History</li>
        <li>Our Team</li>
        <li>Blog</li>
      </ul>
    </li>
  );
};

export default CompanyList;
