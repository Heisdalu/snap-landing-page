import React from "react";
import style from "./App.module.css";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className={style["main-wrapper"]}>
      <Header />
    </div>
  );
};
export default App;
