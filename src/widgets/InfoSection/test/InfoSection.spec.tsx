import {configure, mount} from "enzyme";
import Adapter from '@cfaester/enzyme-adapter-react-18';
import InfoSection from "../InfoSection";

configure({ adapter: new Adapter() });

const InfoSectionProps = {
    isActive: false,
    setIsActive: jest.fn(),
}

describe("<InfoSection/>", () => {
    it("Rendering", () => {
        const wrapper = mount(<InfoSection {...InfoSectionProps} />);

        const rightBlock = wrapper.find(".rightBlock");
        expect(rightBlock.exists()).toBeTruthy();

        const leftBlock = wrapper.find(".leftBlock");
        expect(leftBlock.exists()).toBeTruthy();

        const closeButton = wrapper.find(".wrapper__close");
        expect(closeButton.exists()).toBeTruthy();
    });
})