import React, { useState } from "react";
import styles from "./Case.module.scss";

interface EventModalProps {
	opened: boolean;
	onClose: () => void;
}

export interface CaseProps {
	id: string;
	title: string;
	subtitles: string[];
	url: string;
	imageUrl: string;
	modal?: React.FC<EventModalProps>;
}

const Case = (props: CaseProps) => {
	const { id, url, subtitles, title, imageUrl, modal } = props;
	const [isModalActive, setIsModalActive] = useState(false);

	const handleModalActive = () => setIsModalActive(prev => !prev);

	const banner = (<>
		<div className={styles.mask} />
		<div className={styles.numberBlock}>
			<div className={styles.numberBlock__back}>{id}</div>
			<div className={styles.numberBlock__front}>
				<div
					data-index={id}
					className={styles.numberBlock__frontOverlay}
				>
					{id}
				</div>
			</div>
		</div>
		<div className={styles.infoBlock}>
			<h3 className={styles.infoBlock__title}>{title}</h3>
			{subtitles.map((subtitle) => (
				<p key={subtitle} className={styles.infoBlock__subtitle}>
					{subtitle}
				</p>
			))}
			<button className={styles.infoBlock__button}>
				<span className={styles.infoBlock__text}>Case Study</span>
			</button>
		</div>
	</>);

	return modal ?
		(
			<>
				<div
					onClick={handleModalActive}
					className={styles.wrapper}
					style={{ backgroundImage: `url("${imageUrl}")` }}>
					{banner}
				</div>
				{modal({ opened: isModalActive, onClose: handleModalActive })}
			</>
		) : (
			<a
				href={url}
				target="_blank"
				rel="noreferrer"
				className={styles.wrapper}
				style={{ backgroundImage: `url("${imageUrl}")` }}
			>{banner}</a>
		);
};

export default Case;