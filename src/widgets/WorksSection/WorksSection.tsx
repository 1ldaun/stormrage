import React from "react";
import styles from "./WorksSection.module.scss";
import Case from "../../entities/Case/Case";
import { cases } from "../../shared/mocks/CasesMock";
import { idToString } from "./lib/utils";
import { useTranslation } from "react-i18next";

const WorksSection = () => {
	const { t } = useTranslation();

	return (
		<div id="works" className={styles.wrapper}>
			<h2 className={styles.wrapper__title}>{t("worksSection.title")}</h2>
			<h2 className={styles.wrapper__subtitle}>
				{t("worksSection.subtitle")}
			</h2>
			<div className={styles.wrapper__worksList}>
				{cases.map((caseInfo, index) => (
					<Case
						key={caseInfo.title}
						id={idToString(index)}
						{...caseInfo}
					/>
				))}
			</div>
		</div>
	);
};

export default WorksSection;
