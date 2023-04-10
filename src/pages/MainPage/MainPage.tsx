import React, {useState} from 'react';
import Header from "../../widgets/Header/Header";
import styles from "./MainPage.module.scss"
import TopSection from "../../widgets/TopSection/TopSection";
import WorksSection from "../../widgets/WorksSection/WorksSection";
import InfoSection from "../../widgets/InfoSection/InfoSection";
import Footer from "../../widgets/Footer/Footer";

const MainPage = () => {
    const [isInfoSectionActive, setIsInfoSectionActive] = useState(false);

    return (
            <div className={styles.wrapper}>
                <Header setInfoSectionActive={setIsInfoSectionActive}/>
                <TopSection setInfoSectionActive={setIsInfoSectionActive}/>
                <WorksSection/>
                <InfoSection isActive={isInfoSectionActive} setIsActive={setIsInfoSectionActive}/>
                <Footer/>
            </div>
    );
};

export default MainPage;