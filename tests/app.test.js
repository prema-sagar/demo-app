const request = require("supertest");
const server = require("../src/app");

afterAll((done) => {
  server.close(done);
});

describe("API Endpoints", () => {
  describe("GET /", () => {
    test("returns welcome message", async () => {
      const res = await request(server).get("/");
      expect(res.statusCode).toBe(200);
      expect(res.body.message).toBe("Welcome to CI/CD Demo App 🚀");
    });
  });

  describe("GET /health", () => {
    test("returns status ok", async () => {
      const res = await request(server).get("/health");
      expect(res.statusCode).toBe(200);
      expect(res.body.status).toBe("ok");
      expect(res.body.message).toBe("App is running!");
    });
  });

  describe("GET /demo", () => {
    test("returns demo math results", async () => {
      const res = await request(server).get("/demo");
      expect(res.statusCode).toBe(200);
      expect(res.body.greet).toBe("Hello, World!");
      expect(res.body.add).toBe(42);
      expect(res.body.divide).toBe(25);
    });
  });
});
