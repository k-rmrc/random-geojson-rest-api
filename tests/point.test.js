import { Point } from "../src/lib/point";

describe("Test Point", () => {
    it("intialize new Point object", async () => {
        const point = new Point();
        expect(point._bbox).toBeDefined();
    });

    it("test getRandomPoint", async () => {
        const point = new Point().getRandomPoint();
        expect(point.length).toStrictEqual(2);
    });

    it("test getRandomBoundingBox", async () => {
        const bbox = {
            minLon: 50.75465498,
            minLat: 7.6784546,
            maxLon: 50.944566,
            maxLat: 7.987846
        }
        const point = new Point().getRandomPointInBbox(bbox);
        expect(point.length).toStrictEqual(2);
        expect(point[0]).toBeGreaterThanOrEqual(bbox.minLon);
        expect(point[0]).toBeLessThanOrEqual(bbox.maxLon);
        expect(point[1]).toBeGreaterThanOrEqual(bbox.minLat);
        expect(point[1]).toBeLessThanOrEqual(bbox.maxLat);
    });

});