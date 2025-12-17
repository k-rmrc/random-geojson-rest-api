import { Geometry } from "../src/lib/geometry";

describe("Test Geometry", () => {
    it("intialize new Geometry object", async () => {
        const geom = new Geometry();
        expect(geom instanceof Geometry).toBe(true);
        expect(geom.type).toBe(undefined);
        expect(geom.coordinates).toBe(undefined);
    });

    it("intialize new Geometry object of type Point", async () => {
        const geom = new Geometry("Point", [50.0456, 7.67879]);
        expect(geom.type).toStrictEqual("Point");
        expect(geom.coordinates.length).toBe(2);
        expect(geom.geometry).toStrictEqual({type: "Point", coordinates: [50.0456, 7.67879]})
    });
});