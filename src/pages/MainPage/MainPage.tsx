import React from 'react';
import Header from "../../widgets/Header/Header";
import styles from "./MainPage.module.scss"
import TopSection from "../../widgets/TopSection/TopSection";
import WorksSection from "../../widgets/WorksSection/WorksSection";

const MainPage = () => {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <TopSection/>
            <WorksSection/>
        </div>
    );
};

export default MainPage;