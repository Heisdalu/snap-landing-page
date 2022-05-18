import React from "react";
import ReactDOM from "react-dom";
import style from "./App.module.css";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Modal from "./components/Modal/Modal";

const App = () => {
  return (
    <>
      {ReactDOM.createPortal(<Modal />, document.querySelector('.modal'))}
      <div className={style["main-wrapper"]}>
        <Header />
        <MainContent />
      </div>
    </>
  );
};
export default App;
