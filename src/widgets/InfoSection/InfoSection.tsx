import React from 'react';
import styles from "./InfoSection.module.scss"
import {ReactComponent as ReactImg} from "../../shared/img/react.svg";
import {ReactComponent as JsImg} from "../../shared/img/js.svg";
import {ReactComponent as CssImg} from "../../shared/img/css.svg";
import {ReactComponent as UIImg} from "../../shared/img/ui.svg";
import cx from "classnames";
import {skillsList} from "../../shared/mocks/SkillsListMock";

export interface InfoSectionProps {
    isActive: boolean;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const InfoSection = ({isActive, setIsActive}: InfoSectionProps) => {
    const infoSectionHandler = () => setIsActive(prev => !prev);

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

                <h3 className={styles.rightBlock__title}>Let’s talk</h3>
                <p className={styles.rightBlock__text}>New projects, freelance inquiry or even a coffee.</p>

                <div className={styles.rightBlock__socialBlock}>
                    <a href="https://t.me/d1sinterested" target="_blank" rel="noreferrer" ><i className="fab fa-telegram-plane"/></a>
                    <a href="https://vk.com/dis1nterested" target="_blank" rel="noreferrer" ><i className="fa-brands fa-vk"/></a>
                    <a href="mailto:sharfull33@gmail.ru" target="_blank" rel="noreferrer" ><i className="far fa-envelope"/></a>
                    <a href="https://github.com/1ldaun" target="_blank" rel="noreferrer" ><i className="fa-brands fa-github"></i></a>
                </div>
            </div>
            <div className={cx(styles.leftBlock, isActive ? styles.leftBlock_active : "")}>
                <p className={styles.leftBlock__backgroundText}>About</p>
                <h3 className={styles.leftBlock__title}>About Me</h3>
                <h4 className={styles.leftBlock__subtitle}>Front-end developer</h4>
                <p className={styles.leftBlock__content}>
                    I'm Ildan Sharifullin, a 20-year-old <strong>Front-end developer</strong>.
                    <br/>
                    I like to <strong>resolve</strong> design problems, <strong>create</strong> smart user interface
                    and <strong>imagine</strong> useful interaction, developing rich web experiences &amp; <strong>web
                    applications</strong> and interest templates.
                </p>
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