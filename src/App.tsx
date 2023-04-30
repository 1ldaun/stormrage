import React from 'react';
import {Helmet} from "react-helmet";
import MainPage from "./pages/MainPage/MainPage";
import {useTranslation} from "react-i18next";

const isPrefersDark = window?.matchMedia("(prefers-color-scheme: dark)").matches;
const prefersColor = isPrefersDark ? "#000000" : "#ffffff";

const App = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t("htmlHead.name")}</title>
                <meta
                    name="description"
                    content={t("htmlHead.content") || ""}
                />
                <meta name="theme-color" content={prefersColor} />
            </Helmet>
            <MainPage />
        </>
    );
};

export default App;