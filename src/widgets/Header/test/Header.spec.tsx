import Header from "../Header";
import {configure, mount} from "enzyme";
import Adapter from '@cfaester/enzyme-adapter-react-18';

configure({ adapter: new Adapter() });

const HeaderProps = {
    setInfoSectionActive: jest.fn(),
}

describe("<Header/>", () => {
    it("Rendering", () => {
        const wrapper = mount(<Header {...HeaderProps} />);

        const navigation = wrapper.find(".navigation");
        expect(navigation.exists()).toBeTruthy();
        expect(navigation.children().length).toEqual(2);

        const mobileNavigation = wrapper.find(".mobileNavigation");
        expect(mobileNavigation.hasClass(".mobileScreen_active")).toBeFalsy();
        expect(mobileNavigation.children().length).toEqual(3);

        const mobileScreen = wrapper.find(".mobileScreen");
        expect(mobileScreen.exists()).toBeTruthy();     // mobileScreen hidden

        const navButton = wrapper.find(".mobileNavigation");
        expect(navButton.exists()).toBeTruthy();
    });

    it("Display mobile screen", () => {
        const wrapper = mount(<Header {...HeaderProps} />);
        expect(wrapper.find(".mobileScreen").hasClass(".mobileScreen_active")).toBeFalsy();     //  mobileScreen hidden

        const navButton = wrapper.find(".mobileNavigation");
        expect(navButton.exists()).toBeTruthy();
        navButton.simulate('click');

        expect(wrapper.find(".mobileScreen").exists()).toBeTruthy();    //  mobileScreen displayed
    })

    it("Display InfoSection", () => {
        const wrapper = mount(<Header {...HeaderProps} />);
        expect(wrapper.find(".mobileScreen").hasClass(".mobileScreen_active")).toBeFalsy();

        const navButton = wrapper.find(".mobileNavigation");
        expect(navButton.exists()).toBeTruthy();
        navButton.simulate('click');

        expect(wrapper.find(".mobileScreen").exists()).toBeTruthy();    //  mobileScreen displayed
        expect(HeaderProps.setInfoSectionActive).toBeCalledTimes(0);

        const infoButton = wrapper.find("[data-testid='aboutMe']");
        expect(infoButton.exists()).toBeTruthy();
        infoButton.simulate('click');

        expect(HeaderProps.setInfoSectionActive).toBeCalledTimes(1);

        const infoMobileButton = wrapper.find("[data-testid='mobileAboutMe']");
        expect(infoMobileButton.exists()).toBeTruthy();
        infoMobileButton.simulate('click');

        expect(HeaderProps.setInfoSectionActive).toBeCalledTimes(2);
    })
})