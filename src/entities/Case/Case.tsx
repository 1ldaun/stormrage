import React from 'react';
import styles from "./Case.module.scss"

export interface CaseProps {
    id: number;
    title: string;
    subTitles: string[];
    url: string;
    imageUrl: string;
}

const Case = (props: CaseProps) => {
    const {id, url, subTitles, title, imageUrl} = props;

    return (
        <a href={url} target="_blank" className={styles.wrapper}>
            <div className={styles.mask}/>
            <div className={styles.numberBlock}>
                <div className={styles.numberBlock__back}>01</div>
                <div className={styles.numberBlock__front}/>
            </div>
            <h3 className={styles.title}>{title}</h3>
            {subTitles.map(subtitle => <p className={styles.subTitle}>{subtitle}</p>)}
            <input type="button" className={styles.button} value="Case Study"/>
        </a>
    );
};

export default Case;