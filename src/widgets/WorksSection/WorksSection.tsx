import React from 'react';
import styles from "./WorksSection.module.scss"
import Case from "../../entities/Case/Case";
import {cases} from "../../shared/mocks/CasesMock";

const WorksSection = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.wrapper__title}>case studies</h2>
            <h2 className={styles.wrapper__subtitle}>Latest Works</h2>
            <div className={styles.wrapper__worksList}>
                {cases.map((caseInfo, index) => <Case key={caseInfo.title} id={1} {...caseInfo} />)}
            </div>
        </div>
    );
};

export default WorksSection;