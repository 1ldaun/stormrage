import React from 'react';
import styles from "./TopSection.module.scss"
import bgLogo from "../../shared/img/logo512.png"

const TopSection = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.background}>
                <img src={bgLogo} alt="background"/>
            </div>
            <div className={styles.infoBlock}>
                <p className={styles.infoBlock__name}>Ildan Sharifullin</p>
                <p className={styles.infoBlock__description}>Front-end developer</p>
                <input type="button" className={styles.infoBlock__button} value="About me"/>
            </div>
            <div className={styles.socialBlock}>
                <a href="https://t.me/d1sinterested" target="_blank" rel="noreferrer" ><i className="fab fa-telegram-plane"/></a>
                <a href="https://vk.com/dis1nterested" target="_blank" rel="noreferrer" ><i className="fa-brands fa-vk"/></a>
                <a href="mailto:sharfull33@gmail.ru" target="_blank" rel="noreferrer" ><i className="far fa-envelope"/></a>
                <a href="https://github.com/1ldaun" target="_blank" rel="noreferrer" ><i className="fa-brands fa-github"></i></a>
            </div>
        </div>
    );
};

export default TopSection;