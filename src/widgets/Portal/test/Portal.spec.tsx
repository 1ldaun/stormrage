import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Portal, { createContainer, PORTAL_ERROR_MSG } from "../Portal";

describe("<Portal/>:", () => {
	const mountNodeId = "mount-node-id";
	const containerId = "container-id";

	beforeEach(() => {
		jest.spyOn(console, "error");
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		console.error.mockImplementation(() => null);
	});

	afterEach(() => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		console.error.mockRestore();
		/**
		 * eslint-disable-next-line testing-library/no-node-access
		 */
		document.getElementsByTagName("body")[0].innerHTML = "";
	});

	it("Should create container for Portal in document.body", async () => {
		createContainer({ id: containerId });

		const container = screen.getByTestId(`portalContainer-${containerId}`);

		expect(container).toBeInTheDocument();
	});
	it("Should create container for Portal in exact node", async () => {
		render(
			<div id={mountNodeId} data-testid={mountNodeId}/>,
		);

		const mountNode = screen.getByTestId(mountNodeId);
		createContainer({ id: containerId, mountNode });

		const container = screen.getByTestId(`portalContainer-${containerId}`);

		expect(mountNode).toContainElement(container);
	});
	it("Should display exact content for Portal in node", async () => {
		const containerId = "container-id";

		render(
			<>
				<div id={containerId} data-testid="some-test-id"></div>
				<Portal id={containerId}>
					some text
				</Portal>
			</>,
		);

		const container = screen.getByTestId("some-test-id");
		expect(container).toContainHTML("some text");
	});
	it("Should throw Error for undefined Portal node in DOM", async () => {
		const containerId = "container-id";

		expect(() => render(
			<Portal id={containerId}>
				some text
			</Portal>,
		))
			.toThrow(PORTAL_ERROR_MSG);
	});
});