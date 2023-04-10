import {configure, mount} from "enzyme";
import Adapter from '@cfaester/enzyme-adapter-react-18';
import TopSection from "../TopSection";

configure({ adapter: new Adapter() });

describe("<TopSection/>", () => {
    it("Rendering", () => {
        const wrapper = mount(<TopSection setInfoSectionActive={jest.fn()}/>);
        expect(wrapper.exists()).toBeTruthy();

        const background = wrapper.find(".background");
        expect(background.exists()).toBeTruthy();

        const infoBlock = wrapper.find(".infoBlock");
        expect(infoBlock.exists()).toBeTruthy();

        const socialBlock = wrapper.find(".socialBlock");
        expect(socialBlock.exists()).toBeTruthy();
    });
})