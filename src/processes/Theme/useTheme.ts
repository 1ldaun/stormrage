import { useLayoutEffect, useState } from "react";

export enum ThemeEnum {
	default = "default",
	dark = "dark",
}

const isDarkTheme = window?.matchMedia("(prefers-color-scheme: dark)").matches;
const prefersColor = isDarkTheme ? ThemeEnum.dark : ThemeEnum.default;

export const useTheme = () => {
	const [theme, setTheme] = useState<ThemeEnum>(
		(localStorage.getItem("app-theme") as ThemeEnum) || prefersColor,
	);

	useLayoutEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("app-theme", theme);
	}, [theme]);

	return { theme, setTheme };
};
