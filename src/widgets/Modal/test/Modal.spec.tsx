import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import Modal from "../Modal";

configure({ adapter: new Adapter() });
describe("<Modal/>", () => {
	it("Check children rendering", () => {
		const testText = "some text";
		const wrapper = mount(
			<Modal onClose={jest.fn()}>
				{testText}
			</Modal>,
		);

		const children = wrapper.find(".content");
		expect(children.text()).toEqual("x" + testText);
	});

	it("Check onClose function on button", () => {
		const handleClose = jest.fn();

		const wrapper = mount(
			<Modal title="title" onClose={handleClose}>
				children
			</Modal>,
		);

		const button = wrapper.find(".closeButton");
		button.simulate("click");

		expect(handleClose).toHaveBeenCalledTimes(1);
	});
	// it("Check onClose function on overlay", async () => {
	// 	const handleClose = jest.fn();
	//
	// 	const wrapper = mount(
	// 		<Modal onClose={handleClose}>
	// 			children
	// 		</Modal>,
	// 	);
	//
	// 	wrapper.simulate("click");
	//
	// 	expect(wrapper).hatoHaveBeenCalledTimes(1);
	// });
	// it("Check onClose function on ESC key", () => {
	// 	const handleClose = jest.fn();
	//
	// 	const wrapper = mount(
	// 		<Modal onClose={handleClose}>
	// 			children
	// 		</Modal>,
	// 	);
	//
	// 	wrapper.simulate("keypress", { key: "Escape" });
	//
	// 	expect(handleClose).toHaveBeenCalledTimes(1);
	// });
});
