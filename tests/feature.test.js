import { Feature } from "../src/lib/feature";

describe("Test Feature", () => {
    it("intialize new Feature object", async () => {
        const f = new Feature();
        expect(f instanceof Feature).toBe(true);
        expect(f.type).toStrictEqual("Feature");
        expect(f.hasOwnProperty("geometry")).toBe(true);
        expect(f.hasOwnProperty("properties")).toBe(true);

    });

    it("test getFeature", async () => {
        const f = new Feature({}, {});        
        expect(f.getFeature()).toHaveProperty("type");
        expect(f.getFeature()).toHaveProperty("geometry");
        expect(f.getFeature()).toHaveProperty("properties");
    });
});