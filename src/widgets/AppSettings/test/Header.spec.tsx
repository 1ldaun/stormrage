import {configure, mount} from "enzyme";
import Adapter from '@cfaester/enzyme-adapter-react-18';
import {ThemeEnum} from "../../../processes/Theme/useTheme";
import AppSettings from "../AppSettings";

configure({ adapter: new Adapter() });

const AppSettingsProps = {
    setTheme: jest.fn(),
    theme: ThemeEnum.default,
}

describe("<Header/>", () => {
    it("Rendering", () => {
        const wrapper = mount(<AppSettings {...AppSettingsProps} />);

        const changeLngButton = wrapper.find(".changeLang");
        expect(changeLngButton.exists()).toBeTruthy();

        const changeThemeButton = wrapper.find(".heartSwitcher");
        expect(changeThemeButton.exists()).toBeTruthy();
    });

    it("Change language", () => {
        const wrapper = mount(<AppSettings {...AppSettingsProps} />);

        expect(wrapper.exists()).toBeTruthy();

        const changeLngButton = wrapper.find(".changeLang");
        expect(changeLngButton.exists()).toBeTruthy();

        const changeLngFn = changeLngButton.props()?.onClick;
        expect(changeLngFn !== undefined).toBeTruthy();
    });

    it("Change Theme", () => {
        const wrapper = mount(<AppSettings {...AppSettingsProps} />);

        expect(wrapper.exists()).toBeTruthy();

        const changeThemeButton = wrapper.find(".heartSwitcher");
        expect(changeThemeButton.exists()).toBeTruthy();

        const changeThemeInput = changeThemeButton.find("input");
        expect(changeThemeInput.exists()).toBeTruthy();

        expect(AppSettingsProps.setTheme).toBeCalledTimes(0);
        changeThemeInput.simulate("change");
        expect(AppSettingsProps.setTheme).toBeCalledTimes(1);
    })
})