import React from 'react';
import Header from "../../widgets/Header/Header";
import styles from "./MainPage.module.scss"
import TopSection from "../../widgets/TopSection/TopSection";

const MainPage = () => {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <TopSection/>
        </div>
    );
};

export default MainPage;