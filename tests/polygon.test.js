import { Polygon } from "../src/lib/polygon";

describe("Test Polygon", () => {
    it("intialize new Polygon object", async () => {
        const polygon = new Polygon();
        expect(polygon._bbox).toBeDefined();
    });

    it("test getRandomPolygon", async () => {
        const polygon = new Polygon().getRandomPolygon();
        expect(polygon[0].length).toStrictEqual(7);
    });

    it("test getRandomPolygonWithinBoundingBox", async () => {
        const bbox = {
            minLon: 50.75465498,
            minLat: 7.6784546,
            maxLon: 50.944566,
            maxLat: 7.987846
        }
        const polygon = new Polygon().getRandomPolygonInBbox(8, 500000, bbox);
        expect(polygon[0].length).toStrictEqual(9);
        polygon[0].forEach(coords => {
            expect(coords[0]).toBeGreaterThanOrEqual(bbox.minLon);
            expect(coords[0]).toBeLessThanOrEqual(bbox.maxLon);
            expect(coords[1]).toBeGreaterThanOrEqual(bbox.minLat);
            expect(coords[1]).toBeLessThanOrEqual(bbox.maxLat);
        })
    });

});