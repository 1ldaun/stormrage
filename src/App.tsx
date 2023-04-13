import React from 'react';
import {Helmet} from "react-helmet";
import MainPage from "./pages/MainPage/MainPage";
import {useTranslation} from "react-i18next";

const App = () => {
    const { t } = useTranslation();

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