import React, {useEffect, useRef} from 'react';
import styles from "./TopSection.module.scss"
import bgLogo from "../../shared/img/logo512.png"
import {useTranslation} from "react-i18next";
import cx from "classnames";
import {ThemeEnum, useTheme} from "../../processes/Theme/useTheme";
import {canvas, init} from "./model/darkThemeUtils";

export interface TopSectionProps {
    setInfoSectionActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const WRAPPER_ID = "TopSection";

const TopSection = ({setInfoSectionActive}: TopSectionProps) => {
    const { t, i18n } = useTranslation();
    const { theme } = useTheme();
    let canvasElement = useRef<HTMLCanvasElement>();

    useEffect(() => {
        const wrapper = document.getElementById(WRAPPER_ID);
        console.log(theme);
        if (canvasElement.current) {
            canvasElement.current.remove()
            init(false);
        }

        if (theme === ThemeEnum.dark && wrapper) {
            canvasElement.current = wrapper.appendChild(canvas);
            init(true);
        }
    }, [theme])

    return (
        <div id={WRAPPER_ID} className={styles.wrapper}>
            <div className={styles.background}>
                {theme === ThemeEnum.default &&
                    <img src={bgLogo} alt="background"/>
                }
            </div>
            <div className={styles.infoBlock}>
                <p className={styles.infoBlock__name}>{t("topSection.name")}</p>
                <p className={styles.infoBlock__description}>{t("topSection.description")}</p>
                <input type="button" className={cx(styles.infoBlock__button, i18n.language === "ru" ? styles.infoBlock__button_ruFont : "")} onClick={() => setInfoSectionActive(prev => !prev)} value={t("topSection.button") || ""}/>
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