import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import WorksSection from "../WorksSection";
import { cases } from "../../../shared/mocks/CasesMock";

configure({ adapter: new Adapter() });

describe("<WorkSection/>", () => {
	it("Rendering", () => {
		const wrapper = mount(<WorksSection />);
		expect(wrapper.exists()).toBeTruthy();

		const wrapperTitle = wrapper.find(".wrapper__title");
		expect(wrapperTitle.exists()).toBeTruthy();

		const wrapperSubtitle = wrapper.find(".wrapper__subtitle");
		expect(wrapperSubtitle.exists()).toBeTruthy();

		const wrapperWorksList = wrapper.find(".wrapper__worksList");
		expect(wrapperWorksList.exists()).toBeTruthy();
		expect(wrapperWorksList.children().length).toEqual(cases.length);
	});
});
