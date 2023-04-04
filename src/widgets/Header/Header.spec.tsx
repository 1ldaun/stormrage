import Header from "./Header";
import {configure, mount} from "enzyme";
import Adapter from '@cfaester/enzyme-adapter-react-18';

configure({ adapter: new Adapter() });

describe("<Header/>", () => {
    it("Rendering", () => {
        const wrapper = mount(<Header/>);

        const navigation = wrapper.find(".navigation");
        expect(navigation.exists()).toBeTruthy();
        expect(navigation.children().length).toEqual(2);

        const mobileNavigation = wrapper.find(".mobileNavigation");
        expect(mobileNavigation.exists()).toBeTruthy();
        expect(mobileNavigation.children().length).toEqual(3);

        const mobileScreen = wrapper.find(".mobileScreen");
        expect(mobileScreen.exists()).toBeFalsy();     // mobileScreen hidden

        const navButton = wrapper.find(".mobileNavigation");
        expect(navButton.exists()).toBeTruthy();
    });

    it("Display mobile screen", () => {
        const wrapper = mount(<Header/>);
        expect(wrapper.find(".mobileScreen").exists()).toBeFalsy();     // mobileScreen hidden

        const navButton = wrapper.find(".mobileNavigation");
        expect(navButton.exists()).toBeTruthy();
        navButton.simulate('click');

        expect(wrapper.find(".mobileScreen").exists()).toBeTruthy();    // mobileScreen displayed
    })
})