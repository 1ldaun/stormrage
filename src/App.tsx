import React from "react";
import { Helmet } from "react-helmet";
import MainPage from "./pages/MainPage/MainPage";
import { useTranslation } from "react-i18next";

const App = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>{t("htmlHead.name")}</title>
				<meta
					name="description"
					content={t("htmlHead.content") ?? ""}
				/>
				<meta name="theme-color" content="#000000" />
			</Helmet>
			<MainPage />
			<div id="modal-container-id"/>
		</>
	);
};

export default App;
