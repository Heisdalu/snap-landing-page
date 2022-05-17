import React from "react";
import style from "./App.module.css";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";

const App = () => {
  return (
    <div className={style["main-wrapper"]}>
      <Header />
      <MainContent />
    </div>
  );
};
export default App;
