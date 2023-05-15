import app from "../server";
import supertest from "supertest";


describe("GET /", () => {
  it("should send back data", async () => {
    const response = await supertest(app).get("/");
    expect(response.body.message).toBe('Hello World!');
  });
});