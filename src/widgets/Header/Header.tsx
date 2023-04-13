import React, {useState} from 'react';
import cx from "classnames"
import logoImg from '../../shared/img/logo-grey2.png'
import styles from './Header.module.scss'
import {useTranslation} from "react-i18next";
import { Link } from "react-scroll";

export interface HeaderProps {
    setInfoSectionActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({setInfoSectionActive}: HeaderProps) => {
    const { t, i18n } = useTranslation();
    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

    const mobileMenuHandler = () => setIsMobileMenuActive(prev => !prev);

    const changeLangHandler = () =>  i18n.changeLanguage(i18n.language === "en" ? "ru" : "en" );

    return (
        <>
            <div className={styles.wrapper}>
                <img src={logoImg} className={styles.logo} alt="logo"/>
                <ul className={styles.navigation}>
                    <li className={styles.navigation__item}>
                        <Link to="works"
                              smooth={true}
                              offset={-30}
                              duration={600}>
                            {t("header.works")}
                        </Link>
                    </li>
                    <li className={styles.navigation__item} onClick={() => setInfoSectionActive(true)} data-testid='aboutMe'>{t("header.aboutMe")}</li>
                </ul>
                <div className={styles.mobileNavigation} onClick={mobileMenuHandler}>
                    <span className={cx(styles.mobileNavigation__item, styles.mobileNavigation__item_top)}/>
                    <span className={cx(styles.mobileNavigation__item, styles.mobileNavigation__item_middle)}/>
                    <span className={cx(styles.mobileNavigation__item, styles.mobileNavigation__item_bottom)}/>
                </div>
            </div>
            <div className={cx(styles.mobileScreen, isMobileMenuActive ? styles.mobileScreen_active : "")}>
                <ul className={styles.mobileScreen__nav}>
                    <li className={styles.mobileScreen__nav__item} onClick={mobileMenuHandler}>{t("mobileHeader.home")}</li>
                    <li className={styles.mobileScreen__nav__item}>
                        <Link to="works"
                              smooth={true}
                              offset={-30}
                              duration={600}
                              onClick={mobileMenuHandler}>
                            {t("mobileHeader.works")}
                        </Link>
                    </li>
                    <li className={styles.mobileScreen__nav__item} onClick={() => {mobileMenuHandler(); setInfoSectionActive(true);}} data-testid='mobileAboutMe'>{t("mobileHeader.aboutMe")}</li>
                </ul>
                <div className={styles.mobileScreen__icons}>
                    <a href="https://t.me/d1sinterested" target="_blank" rel="noreferrer" ><i className="fab fa-telegram-plane"/></a>
                    <a href="https://vk.com/dis1nterested" target="_blank" rel="noreferrer" ><i className="fa-brands fa-vk"/></a>
                    <a href="mailto:sharfull33@gmail.ru" target="_blank" rel="noreferrer" ><i className="far fa-envelope"/></a>
                    <a href="https://github.com/1ldaun" target="_blank" rel="noreferrer" ><i className="fa-brands fa-github"></i></a>
                </div>
                <div className={styles.mobileScreen__close} onClick={mobileMenuHandler}>
                    <i className="fa-solid fa-xmark"/>
                </div>
            </div>
            <div className={styles.changeLang} onClick={changeLangHandler}>
                {i18n.language === "en" ? "RU" : "EN"}
            </div>
        </>
    );
};

export default Header;