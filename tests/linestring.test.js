import { Linestring } from "../src/lib/linestring";

describe("Test Linestring", () => {
    it("intialize new Linestring object", async () => {
        const linestring = new Linestring();
        expect(linestring._bbox).toBeDefined();
    });

    it("test getRandomLinestring", async () => {
        const linestring = new Linestring().getRandomLinestring();
        expect(linestring.length).toStrictEqual(10);
    });

    it("test getRandomLinestringInBoundingBox", async () => {
        const bbox = {
            minLon: 50.75465498,
            minLat: 7.6784546,
            maxLon: 50.944566,
            maxLat: 7.987846
        }
        const linestring = new Linestring().getRandomLinestringInBbox(12, 5000, bbox);
        expect(linestring.length).toStrictEqual(12);
        linestring.forEach(coords => {
            expect(coords[0]).toBeGreaterThanOrEqual(bbox.minLon);
            expect(coords[0]).toBeLessThanOrEqual(bbox.maxLon);
            expect(coords[1]).toBeGreaterThanOrEqual(bbox.minLat);
            expect(coords[1]).toBeLessThanOrEqual(bbox.maxLat);
        });

    });

});