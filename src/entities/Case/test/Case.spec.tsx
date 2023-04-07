import {configure, mount} from "enzyme";
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Case from "../Case";
import {idToString} from "../../../widgets/WorksSection/lib/utils";

configure({ adapter: new Adapter() });

const CaseMocks = {
    id: "123",
    title: "123",
    subtitles: ["123"],
    url: "123",
    imageUrl: "123",
}

describe("<Case/>", () => {
    it("Rendering", () => {
        const wrapper = mount(<Case {...CaseMocks}/>);
        expect(wrapper.exists()).toBeTruthy();

        const wrapperMask = wrapper.find(".mask");
        expect(wrapperMask.exists()).toBeTruthy();

        const wrapperNumberBlock = wrapper.find(".numberBlock");
        expect(wrapperNumberBlock.exists()).toBeTruthy();
        expect(wrapperNumberBlock.children().length).toEqual(2);

        const wrapperInfoBlock = wrapper.find(".infoBlock");
        expect(wrapperInfoBlock.exists()).toBeTruthy();
    });

    it("id rendering check", () => {
        let wrapper = mount(<Case {...CaseMocks}/>);
        expect(wrapper.exists()).toBeTruthy();

        const wrapperNumberBlock = wrapper.find(".numberBlock");
        expect(wrapperNumberBlock.exists()).toBeTruthy();
        expect(wrapperNumberBlock.children().length).toEqual(2);

        let back = wrapperNumberBlock.find(".numberBlock__back");
        expect(back.exists()).toBeTruthy();
        expect(back.getDOMNode()).toHaveTextContent(CaseMocks.id);
        let frontOverlay = wrapperNumberBlock.find(".numberBlock__frontOverlay");
        expect(frontOverlay.exists()).toBeTruthy();
        expect(frontOverlay.getDOMNode()).toHaveTextContent(CaseMocks.id);

        wrapper = mount(<Case {...CaseMocks} id={idToString(0)}/>);
        back = wrapper.find(".numberBlock__back");
        expect(back.getDOMNode()).toHaveTextContent("01");
        frontOverlay = wrapper.find(".numberBlock__frontOverlay");
        expect(frontOverlay.getDOMNode()).toHaveTextContent("01");
        expect(frontOverlay.getElement().props["data-index"]).toEqual("01");
    });
})