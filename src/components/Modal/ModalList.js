import ArrowUp from "../../assets/icon-arrow-up.svg";
import ArrowDown from "../../assets/icon-arrow-down.svg";
import FeaturedList from './FeatureList';
import CompanyList from "./CompanyList";
import style from "./ModalList.module.css";

const List = () => {
  return (
    <li className={style.toggleList}>
      <section className={style.inner}>
        <span>Features</span>
        <span className={style.navigateArrow}>
          <span>
            <img src={ArrowUp} alt="arrow up icon" />
          </span>
          <span>
            <img src={ArrowDown} alt="arrow down icon" />
          </span>
        </span>
      </section>
      <FeaturedList />
    </li>
  );
};



const List2 = () => {
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
        <CompanyList />
      </li>
    );
}

const ModalList =  () => {
    return (
        <>
        <List />
        <List2 />
        </>
    )
}

export default ModalList;
