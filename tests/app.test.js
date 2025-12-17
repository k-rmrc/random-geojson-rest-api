import request from "supertest";
import { app } from "../src/app";

describe("Test entry point of rest-api", () => {
    it("should return a JSON response", async () => {
        const res = await request(app)
            .get("/")
            .expect("Content-Type", /json/)
            .expect(200);
    });

    it("response of / should contain keys 'statusCode' and 'timestamp' in JSON response body", async () => {
        const res = await request(app)
            .get("/api")           

        expect(res.body).toHaveProperty("statusCode");
        expect(res.body).toHaveProperty("timestamp");
    });

    it("response of /api should contain keys 'statusCode' and 'timestamp' in JSON response body", async () => {
        const res = await request(app)
            .get("/api")           

        expect(res.body).toHaveProperty("statusCode");
        expect(res.body).toHaveProperty("timestamp");
    });
});