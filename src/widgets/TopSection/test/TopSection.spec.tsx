import {configure, mount} from "enzyme";
import Adapter from '@cfaester/enzyme-adapter-react-18';
import TopSection from "../TopSection";
import i18n from "../../../i18n";

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

    it("Language check", () => {
        const wrapper = mount(<TopSection setInfoSectionActive={jest.fn()}/>);
        expect(wrapper.exists()).toBeTruthy();

        const button = wrapper.find(".infoBlock__button");
        expect(button.exists());

        const isRussianLanguageMatch = i18n.language === "ru" && button.hasClass("infoBlock__button_ruFont");
        const isEnglishLanguageMatch = i18n.language === "en" && !button.hasClass("infoBlock__button_ruFont");
        expect(isRussianLanguageMatch || isEnglishLanguageMatch).toBeTruthy();
    });

})