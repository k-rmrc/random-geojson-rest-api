import { FeatureCollection } from "../src/lib/featureCollection";

describe("Test FeatureCollection", () => {
    it("intialize new FeatureCollection object", async () => {
        const fc = new FeatureCollection();
        expect(fc instanceof FeatureCollection).toBe(true);
        expect(fc.type).toStrictEqual("FeatureCollection");
        expect(fc.features.length).toBe(0);
    });

    it("test getFeatureCollection", async () => {
        const fc = new FeatureCollection();
        expect(fc instanceof FeatureCollection).toBe(true);
        expect(fc.type).toStrictEqual("FeatureCollection");
        expect(fc.features.length).toBe(0);
    });
});