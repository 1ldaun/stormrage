import React from "react";
import styles from "./Footer.module.scss";
import logoImg from "../../shared/img/logo-white.png";

const Footer = () => {
	return (
		<div className={styles.wrapper}>
			<img className={styles.logo} src={logoImg} alt="logo" />
			<ul className={styles.navigation}>
				<li className={styles.navigation__item}>
					<a
						href="https://t.me/d1sinterested"
						target="_blank"
						rel="noreferrer"
						className={styles.navigation__link}
					>
						Telegram
					</a>
				</li>
				<li className={styles.navigation__item}>
					<a
						href="https://vk.com/dis1nterested"
						target="_blank"
						rel="noreferrer"
						className={styles.navigation__link}
					>
						Vkontakte
					</a>
				</li>
				<li className={styles.navigation__item}>
					<a
						href="https://github.com/stormrage-web"
						target="_blank"
						rel="noreferrer"
						className={styles.navigation__link}
					>
						GitHub
					</a>
				</li>
			</ul>
			<p className={styles.copyright}>© 2023 Ildan Sharifullin</p>
		</div>
	);
};

export default Footer;
