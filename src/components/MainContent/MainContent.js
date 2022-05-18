import React from "react";
import Illustration from "./Illustration";
import Content from './Content'
import style from './MainContent.module.css';


const MainContent = () => {
    return (
        <section className={style.mainContent}>
            <Illustration />
            <Content />
        </section>
    )
}

export default MainContent;