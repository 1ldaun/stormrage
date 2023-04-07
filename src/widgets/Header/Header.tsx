import React, {useState} from 'react';
import cx from "classnames"
import logoImg from '../../shared/img/logo-grey2.png'
import styles from './Header.module.scss'

const Header = () => {
    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false)

    const mobileMenuHandler = () => setIsMobileMenuActive(prev => !prev);

    return (
        <>
            <div className={styles.wrapper}>
                <img src={logoImg} className={styles.logo} alt="logo"/>
                <ul className={styles.navigation}>
                    <li className={styles.navigation__item}>Works</li>
                    <li className={styles.navigation__item}>About me</li>
                </ul>
                <div className={styles.mobileNavigation} onClick={mobileMenuHandler}>
                    <span className={cx(styles.mobileNavigation__item, styles.mobileNavigation__item_top)}/>
                    <span className={cx(styles.mobileNavigation__item, styles.mobileNavigation__item_middle)}/>
                    <span className={cx(styles.mobileNavigation__item, styles.mobileNavigation__item_bottom)}/>
                </div>
            </div>
            {isMobileMenuActive && <div className={styles.mobileScreen}>
                <ul className={styles.mobileScreen__nav}>
                    <li className={styles.mobileScreen__nav__item}>Home</li>
                    <li className={styles.mobileScreen__nav__item}>Works</li>
                    <li className={styles.mobileScreen__nav__item}>About me</li>
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
            }
        </>
    );
};

export default Header;