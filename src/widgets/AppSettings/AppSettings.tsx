import React, {Dispatch, SetStateAction} from 'react';
import styles from "./AppSettings.module.scss";
import {ThemeEnum} from "../../processes/Theme/useTheme";
import {ReactComponent as HeartSwitcherImg} from "../../shared/img/heartSwitcher.svg";
import {useTranslation} from "react-i18next";

interface AppSettingsProps {
    theme: ThemeEnum;
    setTheme: Dispatch<SetStateAction<ThemeEnum>>;
}

const AppSettings = ({theme, setTheme}: AppSettingsProps) => {
    const { i18n } = useTranslation();

    const changeLangHandler = () =>  i18n.changeLanguage(i18n.language === "en" ? "ru" : "en" );
    const changeThemeHandler = () =>  setTheme(prev => prev === ThemeEnum.default ? ThemeEnum.dark : ThemeEnum.default );

    return (
        <>
            <div className={styles.changeLang} onClick={changeLangHandler}>
                {i18n.language === "en" ? "RU" : "EN"}
            </div>
            <div className={styles.heartSwitcher}>
                <label className={styles.heartSwitcher__label}>
                    <input type="checkbox" checked={theme === ThemeEnum.dark} onChange={changeThemeHandler}/>
                    <HeartSwitcherImg/>
                </label>
            </div>
        </>
    );
};

export default AppSettings;