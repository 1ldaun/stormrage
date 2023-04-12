import {initReactI18next} from "react-i18next";
import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            header: {
                works: "Works",
                aboutMe: "About me",
            },
            mobileHeader: {
                home: "Home",
                works: "Works",
                aboutMe: "About me",
            },
            topSection: {
                name: "Ildan Sharifullin",
                description: "Front-end developer",
                button: "About me",
            },
            worksSection: {
                title: "case studies",
                subTitle: "Latest Works",
            },
        }
    },
    ru: {
        translation: {
            header: {
                works: "Мои работы",
                aboutMe: "Инфо",
            },
            mobileHeader: {
                home: "На главную",
                works: "Портфолио",
                aboutMe: "Инфо",
            },
            topSection: {
                name: "Ильдан Шарифуллин",
                description: "Фронтенд-разработчик",
                button: "Инфо",
            },
            worksSection: {
                title: "портфолио",
                subtitle: "Мои последние работы",
            },
        }
    }
}

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });

export default i18n;