import {useLayoutEffect, useState} from "react";

export enum ThemeEnum {
    default = "default",
    dark = "dark",
}

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

const isDarkTheme = window?.matchMedia("(prefers-color-scheme: dark)").matches;
const prefersColor = isDarkTheme ? ThemeEnum.dark : ThemeEnum.default;

export const useTheme = () => {
    const [theme, setTheme] = useState<ThemeEnum>(localStorage.getItem("app-theme") as ThemeEnum || prefersColor);

    useLayoutEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("app-theme", theme);
    }, [theme]);

    return {theme, setTheme};
}