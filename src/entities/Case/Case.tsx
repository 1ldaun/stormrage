import React from 'react';
import styles from "./Case.module.scss"

export interface CaseProps {
    id: number;
    title: string;
    subtitles: string[];
    url: string;
    imageUrl: string;
}

const Case = (props: CaseProps) => {
    const {id, url, subtitles, title, imageUrl} = props;

    return (
        <a href={url} target="_blank" className={styles.wrapper} style={{backgroundImage: `url("${imageUrl}")`}}>
            <div className={styles.mask}/>
            <div className={styles.numberBlock}>
                <div className={styles.numberBlock__back}>01</div>
                <div className={styles.numberBlock__front}><div data-index="01" className={styles.numberBlock__frontOverlay}>01</div></div>
            </div>
            <div className={styles.infoBlock}>
                <h3 className={styles.infoBlock__title}>{title}</h3>
                {subtitles.map(subtitle => <p className={styles.infoBlock__subTitle}>{subtitle}</p>)}
                <button className={styles.infoBlock__button}>
                    <span className={styles.infoBlock__text}>Case Study</span>
                </button>
            </div>
        </a>
    );
};

export default Case;