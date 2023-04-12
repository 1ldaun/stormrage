import React, {useState} from 'react';
import Header from "../../widgets/Header/Header";
import styles from "./MainPage.module.scss"
import TopSection from "../../widgets/TopSection/TopSection";
import WorksSection from "../../widgets/WorksSection/WorksSection";
import InfoSection from "../../widgets/InfoSection/InfoSection";
import Footer from "../../widgets/Footer/Footer";
import {useTranslation} from "react-i18next";
import cx from "classnames";

const MainPage = () => {
    const { i18n } = useTranslation();
    const [isInfoSectionActive, setIsInfoSectionActive] = useState(false);

    return (
            <div className={cx(styles.wrapper, i18n.language === "ru" ? styles.wrapper_rusFont : "")}>
                <Header setInfoSectionActive={setIsInfoSectionActive}/>
                <TopSection setInfoSectionActive={setIsInfoSectionActive}/>
                <WorksSection/>
                <InfoSection isActive={isInfoSectionActive} setIsActive={setIsInfoSectionActive}/>
                <Footer/>
            </div>
    );
};

export default MainPage;