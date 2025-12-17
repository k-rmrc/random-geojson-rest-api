import { Properties } from "../src/lib/properties";

describe("Test Properties", () => {
    it("intialize new Properties object", async () => {
        const props = new Properties();
        expect(props instanceof Properties).toBe(true);
        expect(props.properties).toBe(undefined);
    });

    it("intialize new Properties object with given properties", async () => {
        const props = new Properties({"id": 1, "name": "xyz"});
        expect(props.properties.id).toBe(1);
        expect(props.properties).toHaveProperty("name");
    });
});