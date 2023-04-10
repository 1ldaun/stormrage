import {configure, mount} from "enzyme";
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Footer from "../Footer";

configure({ adapter: new Adapter() });

describe("<Footer/>", () => {
    it("Rendering", () => {
        const wrapper = mount(<Footer/>);

        const logo = wrapper.find(".logo");
        expect(logo.exists()).toBeTruthy();

        const navigation = wrapper.find(".navigation");
        expect(navigation.exists()).toBeTruthy();
        expect(navigation.children().length).toEqual(3);

        const copyright = wrapper.find(".copyright");
        expect(copyright.exists()).toBeTruthy();
    });
})