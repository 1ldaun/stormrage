import {configure} from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import {idToString} from "../lib/utils";


configure({ adapter: new Adapter() });

describe("<WorkSection/> utils", () => {
    it("idToString()", () => {
        expect(idToString(0)).toEqual("01");
        expect(idToString(9)).toEqual("10");
        expect(idToString(99)).toEqual("100");
    })
});