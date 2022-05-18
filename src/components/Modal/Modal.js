// import ArrowUp from '../../assets/icon-arrow-up.svg'
// import ArrowDown from '../../assets/icon-arrow-down.svg'

import CloseMenu from "../../assets/icon-close-menu.svg";
import ModalList from "./ModalList";
import Overlay from "./Overlay";

import style from "./Modal.module.css";

const Modal = () => {
  return (
    <>
      <Overlay />
      <nav className={style.modal}>
        <div className={style.closeMenuContainer}>
          <img src={CloseMenu} alt="Close-menu button" />
        </div>
        <ul className={style.navList}>
          <ModalList />
          <li>Careers</li>
          <li>About</li>
        </ul>

        <section className={style.buttonContainer}>
          <button className={style.loginBtn}>Login</button>
          <button className={style.registerBtn}>Register</button>
        </section>
      </nav>
    </>
  );
};

export default Modal;
