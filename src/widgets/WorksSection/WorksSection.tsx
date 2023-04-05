import React from 'react';
import styles from "./WorksSection.module.scss"
import Case from "../../entities/Case/Case";

const WorksSection = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.wrapper__title}>case studies</h2>
            <h2 className={styles.wrapper__subtitle}>Latest Works</h2>
            <div className={styles.wrapper__worksList}>
                <Case id={1} title={"123"} subTitles={["123"]} url={"123"} imageUrl={"123"}/>
            </div>
        </div>
    );
};

export default WorksSection;