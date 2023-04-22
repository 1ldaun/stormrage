import {configure, mount} from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import MainPage from "../MainPage";
import {useTranslation} from "react-i18next";
import {renderHook} from "@testing-library/react";

configure({ adapter: new Adapter() });

describe("<MainPage/>", () => {
    it("Rendering", () => {
        const wrapper = mount(<MainPage/>);

        const appSettings = wrapper.find("AppSettings");
        expect(appSettings.exists()).toBeTruthy();

        const header = wrapper.find("Header");
        expect(header.exists()).toBeTruthy();

        const topSection = wrapper.find("TopSection");
        expect(topSection.exists()).toBeTruthy();

        const worksSection = wrapper.find("WorksSection");
        expect(worksSection.exists()).toBeTruthy();

        const infoSection = wrapper.find("InfoSection");
        expect(infoSection.exists()).toBeTruthy();

        const footer = wrapper.find("Footer");
        expect(footer.exists()).toBeTruthy();
    });

    it("Translation classnames", () => {
        const { result } = renderHook(() => useTranslation());
        const wrapper = mount(<MainPage/>);

        if (result.current.i18n.language == "ru") {
            expect(wrapper.hasClass("wrapper_rusFont")).toBeTruthy();
        }
        else {
            expect(wrapper.hasClass("wrapper_rusFont")).toBeFalsy();
        }
    })
})