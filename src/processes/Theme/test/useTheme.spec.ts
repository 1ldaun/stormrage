import { act, renderHook } from "@testing-library/react";
import { ThemeEnum, useTheme } from "../useTheme";

describe("useTheme hook", () => {
	it("Functionality", () => {
		const { result, rerender } = renderHook(() => useTheme());

		expect(result.current.theme).toEqual(ThemeEnum.dark);
		expect(document.documentElement.getAttribute("data-theme")).toEqual(
			ThemeEnum.dark,
		);
		expect(localStorage.getItem("app-theme")).toEqual(ThemeEnum.dark);

		act(() => {
			result.current.setTheme(ThemeEnum.default);
		});
		rerender();

		expect(result.current.theme).toEqual(ThemeEnum.default);
		expect(document.documentElement.getAttribute("data-theme")).toEqual(
			ThemeEnum.default,
		);
		expect(localStorage.getItem("app-theme")).toEqual(ThemeEnum.default);
	});
});
