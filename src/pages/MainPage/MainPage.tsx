import React, {useState} from 'react';
import Header from "../../widgets/Header/Header";
import styles from "./MainPage.module.scss"
import TopSection from "../../widgets/TopSection/TopSection";
import WorksSection from "../../widgets/WorksSection/WorksSection";
import InfoSection from "../../widgets/InfoSection/InfoSection";

const MainPage = () => {
    const [isInfoSectionActive, setIsInfoSectionActive] = useState(false);

    return (
        <div className={styles.wrapper}>
            <Header setInfoSectionActive={setIsInfoSectionActive}/>
            <TopSection/>
            <WorksSection/>
            <InfoSection isActive={isInfoSectionActive} setIsActive={setIsInfoSectionActive}/>
        </div>
    );
};

export default MainPage;