import React from 'react';
import logoImg from '../../shared/img/logo-grey2.png'
import styles from './Header.module.scss'
import cx from "classnames"

const Header = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <img src={logoImg} className={styles.logo} alt="logo"/>
                <ul className={styles.navigation}>
                    <li className={styles.navigation__item}>Works</li>
                    <li className={styles.navigation__item}>About me</li>
                </ul>
                <div className={styles.mobileNavigation}>
                    <span className={cx(styles.mobileNavigation__item, styles.mobileNavigation__item_top)}/>
                    <span className={cx(styles.mobileNavigation__item, styles.mobileNavigation__item_middle)}/>
                    <span className={cx(styles.mobileNavigation__item, styles.mobileNavigation__item_bottom)}/>
                </div>
            </div>
            <div className={styles.mobileScreen}>
                <ul className={styles.navigation}>
                    <li className={styles.navigation__item}>Works</li>
                    <li className={styles.navigation__item}>About me</li>
                </ul>
            </div>
        </>
    );
};

export default Header;