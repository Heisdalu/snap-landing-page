import React, { useState } from "react";
import ReactDOM from "react-dom";
import style from "./App.module.css";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Modal from "./components/Modal/Modal";
import Overlay from "./components/Modal/Overlay";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu(true);
  };

  const HideMenuHandler = () => {
    setShowMenu(false);
  };
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay onShow={showMenu} />,
        document.querySelector(".overlay")
      )}
      {ReactDOM.createPortal(
        <Modal onShow={showMenu} onHide={HideMenuHandler} />,
        document.querySelector(".modal")
      )}
      <div className={style["main-wrapper"]}>
        <Header onShow={showMenuHandler} />
        <MainContent />
      </div>
    </>
  );
};
export default App;
