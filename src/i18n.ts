import {initReactI18next} from "react-i18next";
import i18n from "i18next";

const resources = {
    en: {
        translation: {
            htmlHead: {
                name: "Ildan Sharifullin - E-Portfolio",
                content: "I'm Ildan Sharifullin, a 20-year-old Front-end developer. I like to create smart user interface and imagine useful interaction, developing rich web experiences & web applications and interest templates.",
            },
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
            infoSection: {
                aboutTitle: "About Me",
                aboutSubtitle: "Front-end developer",
                aboutText: "I'm Ildan Sharifullin, a 20-year-old <strong>Front-end developer</strong>" +
                    "<br/>I like to <strong>resolve</strong> design problems, <strong>create</strong> smart user interface" +
                    "and <strong>imagine</strong> useful interaction, developing rich web experiences &amp; <strong>web" +
                    "applications</strong> and interest templates.",
                skillsLetsTalkSubtitle: "Let’s talk",
                skillsLetsTalkText: "New projects, freelance inquiry or even a coffee.",
            },
            worksSection: {
                title: "case studies",
                subtitle: "Latest Works",
            },
        }
    },
    ru: {
        translation: {
            htmlHead: {
                name: "Ильдан Шарифуллин - Фронтенд портфолио",
                content: "Здесь вы найдете мои работы в сфере фронтенд разработки, а также мои контакты. Ильдан Шарифуллин.",
            },
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
            infoSection: {
                aboutTitle: "Обо мне",
                aboutSubtitle: "Фронтенд разработчик",
                aboutText: "Привет! Меня зовут Ильдан, мне 20 лет и я <strong>Фронтенд разработчик</strong>." +
                    "<br/>Мне нравится <strong>улучшать</strong> интерфейсы веб-приложений, делать их <strong>удобнее и \"умнее\"</strong>, " +
                    "а также наполнять <strong>интерактивностью, анимациями и функционалом</strong> самые разные макеты сайтов.",
                skillsLetsTalkSubtitle: "Поболтаем?",
                skillsLetsTalkText: "Буду рад обсудить с тобой любые проекты/идеи, или просто поболтать за чашекой кофе 🖤",
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
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });

export default i18n;