import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import InfoSection from "../InfoSection";
import { renderHook } from "@testing-library/react";
import { useTranslation } from "react-i18next";

configure({ adapter: new Adapter() });

const InfoSectionProps = {
	isActive: false,
	setIsActive: jest.fn(),
};

describe("<InfoSection/>", () => {
	it("Rendering", () => {
		const wrapper = mount(<InfoSection {...InfoSectionProps} />);

		const rightBlock = wrapper.find(".rightBlock");
		expect(rightBlock.exists()).toBeTruthy();

		const leftBlock = wrapper.find(".leftBlock");
		expect(leftBlock.exists()).toBeTruthy();

		const socialBlock = rightBlock.find(".rightBlock__socialBlock");
		expect(socialBlock.exists()).toBeTruthy();
		expect(socialBlock.children().length).toEqual(4);

		const closeButton = wrapper.find(".wrapper__close");
		expect(closeButton.exists()).toBeTruthy();
	});

	it("Check active state", () => {
		const wrapper = mount(<InfoSection {...InfoSectionProps} />);

		expect(wrapper.hasClass("wrapper_active")).toBeFalsy();

		const leftBlock = wrapper.find(".leftBlock");
		expect(leftBlock.exists()).toBeTruthy();
		expect(leftBlock.hasClass("leftBlock_active")).toBeFalsy();

		const infoSection = mount(
			<InfoSection {...InfoSectionProps} isActive={true} />,
		);

		const wrapperActive = infoSection.find(".wrapper");
		expect(wrapperActive.hasClass("wrapper_active")).toBeTruthy();

		const leftBlockActive = wrapperActive.find(".leftBlock");
		expect(leftBlockActive.exists()).toBeTruthy();
		expect(leftBlockActive.hasClass("leftBlock_active")).toBeTruthy();

		const rightBlockActive = wrapperActive.find(".rightBlock");
		expect(rightBlockActive.exists()).toBeTruthy();
		expect(rightBlockActive.hasClass("rightBlock_active")).toBeTruthy();
	});

	it("Change language", () => {
		const wrapper = mount(<InfoSection {...InfoSectionProps} />);
		const { result } = renderHook(() => useTranslation());

		const rightBlock = wrapper.find(".rightBlock");
		expect(rightBlock.exists()).toBeTruthy();

		const rightBlockText = rightBlock.find(".rightBlock__text");
		expect(rightBlockText.exists()).toBeTruthy();
		expect(rightBlockText.exists()).toBeTruthy();
		expect(
			(result.current.i18n.language === "ru" &&
				rightBlockText.last().hasClass("rightBlock__text_ruFont")) ||
				(result.current.i18n.language !== "ru" &&
					!rightBlockText.last().hasClass("rightBlock__text_ruFont")),
		).toBeTruthy();

		const leftBlock = wrapper.find(".leftBlock");
		expect(leftBlock.exists()).toBeTruthy();
		expect(
			(result.current.i18n.language === "ru" &&
				leftBlock.hasClass("leftBlock_ruFont")) ||
				(result.current.i18n.language !== "ru" &&
					!leftBlock.hasClass("leftBlock_ruFont")),
		).toBeTruthy();

		const socialBlock = rightBlock.find(".rightBlock__socialBlock");
		expect(socialBlock.exists()).toBeTruthy();
		expect(socialBlock.children().length).toEqual(4);

		const closeButton = wrapper.find(".wrapper__close");
		expect(closeButton.exists()).toBeTruthy();
	});
});
