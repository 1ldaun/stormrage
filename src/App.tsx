import React, {useEffect} from 'react';
import {Helmet} from "react-helmet";
import MainPage from "./pages/MainPage/MainPage";
import {useTranslation} from "react-i18next";
import {ThemeEnum, useTheme} from "./processes/Theme/useTheme";

const App = () => {
    const { t } = useTranslation();
    const { setTheme } = useTheme();

    useEffect(() => setTheme(ThemeEnum.dark), [])

    return (
        <>
            <Helmet>
                <meta
                    name={t("htmlHead.name") || ""}
                    content={t("htmlHead.content") || ""}
                />
            </Helmet>
            <MainPage />
        </>
    );
};

export default App;