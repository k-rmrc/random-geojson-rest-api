import { BoundingBox} from "../src/lib/bbox";

describe("Test Bbox", () => {
    it("intialize new Bbox object", async () => {
        const bbox = new BoundingBox();
        expect(bbox._maxLat).toBeDefined();
        expect(bbox._maxLon).toBeDefined();
        expect(bbox._minLat).toBeDefined();
        expect(bbox._minLon).toBeDefined();
    });

    it("test getDefaultBoundingBox", async () => {
        const bbox = new BoundingBox().getDefaultBoundingBox();
        expect(bbox.minLon).toStrictEqual(-180);
        expect(bbox.minLat).toStrictEqual(-90);  
        expect(bbox.maxLon).toStrictEqual(180);  
        expect(bbox.maxLat).toStrictEqual(90); 
    });

    it("test getRandomBoundingBox", async () => {
        const bbox = new BoundingBox().getRandomBoundingBox();
        expect(bbox.minLon).toBeGreaterThanOrEqual(-180);
        expect(bbox.minLat).toBeGreaterThanOrEqual(-90);
        expect(bbox.maxLon).toBeLessThanOrEqual(180);
        expect(bbox.maxLat).toBeLessThanOrEqual(90);
    });

});