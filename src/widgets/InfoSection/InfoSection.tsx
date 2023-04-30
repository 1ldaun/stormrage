import React from 'react';
import styles from "./InfoSection.module.scss"
import {ReactComponent as ReactImg} from "../../shared/img/react.svg";
import {ReactComponent as JsImg} from "../../shared/img/js.svg";
import {ReactComponent as CssImg} from "../../shared/img/css.svg";
import {ReactComponent as UIImg} from "../../shared/img/ui.svg";
import cx from "classnames";
import {skillsList} from "../../shared/mocks/SkillsListMock";
import {useTranslation} from "react-i18next";

export interface InfoSectionProps {
    isActive: boolean;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const InfoSection = ({isActive, setIsActive}: InfoSectionProps) => {
    const infoSectionHandler = () => setIsActive(prev => !prev);
    const { t, i18n } = useTranslation();

    return (
        <div className={cx(styles.wrapper, isActive ? styles.wrapper_active : "")}>
            <div className={cx(styles.rightBlock, isActive ? styles.rightBlock_active : "")}>
                <div className={styles.wrapper__close} onClick={infoSectionHandler}>
                    <i className="fa-solid fa-xmark"/>
                </div>
                <h3 className={styles.rightBlock__title}>Skills</h3>

                {skillsList.map(skillItem => (
                    <>
                        <h4 key={skillItem.title} className={styles.rightBlock__subtitle}>{skillItem.title}</h4>
                        <p key={skillItem.list} className={styles.rightBlock__text}>{skillItem.list}</p>
                    </>
                ))}

                <h3 className={styles.rightBlock__title}>{t("infoSection.skillsLetsTalkSubtitle")}</h3>
                <p className={cx(styles.rightBlock__text, i18n.language === "ru" ? styles.rightBlock__text_ruFont : "")}>{t("infoSection.skillsLetsTalkText")}</p>

                <div className={styles.rightBlock__socialBlock}>
                    <a href="https://t.me/d1sinterested" target="_blank" rel="noreferrer" ><i className="fab fa-telegram-plane"/></a>
                    <a href="https://vk.com/dis1nterested" target="_blank" rel="noreferrer" ><i className="fa-brands fa-vk"/></a>
                    <a href="mailto:sharfull33@gmail.ru" target="_blank" rel="noreferrer" ><i className="far fa-envelope"/></a>
                    <a href="https://github.com/stormrage-web" target="_blank" rel="noreferrer" ><i className="fa-brands fa-github"></i></a>
                </div>
            </div>
            <div className={cx(styles.leftBlock, isActive ? styles.leftBlock_active : "", i18n.language === "ru" ? styles.leftBlock_ruFont : "")}>
                <p className={styles.leftBlock__backgroundText}>About</p>
                <h3 className={styles.leftBlock__title}>{t("infoSection.aboutTitle")}</h3>
                <h4 className={styles.leftBlock__subtitle}>{t("infoSection.aboutSubtitle")}</h4>
                <p className={styles.leftBlock__content} dangerouslySetInnerHTML={
                    {__html: t('infoSection.aboutText', {interpolation: {escapeValue: false}})}
                }/>
                <ul className={styles.iconsList}>
                    <li className={styles.iconsList__item}>
                        <div className={styles.iconsList__label}>React.js</div>
                        <ReactImg/>
                    </li>
                    <li className={styles.iconsList__item}>
                        <div className={styles.iconsList__label}>UI/UX</div>
                        <UIImg/>
                    </li>
                    <li className={styles.iconsList__item}>
                        <div className={styles.iconsList__label}>is Fun.</div>
                        <CssImg/>
                    </li>
                    <li className={styles.iconsList__item}>
                        <div className={styles.iconsList__label}>Semicolons.</div>
                        <JsImg/>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default InfoSection;