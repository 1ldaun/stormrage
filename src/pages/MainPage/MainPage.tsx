import React from 'react';
import Header from "../../widgets/Header/Header";
import styles from "./MainPage.module.scss"

const MainPage = () => {
    return (
        <div className={styles.wrapper}>
            <Header/>
        </div>
    );
};

export default MainPage;