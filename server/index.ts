import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleContact } from "./routes/contact";
import { handleProfile } from "./routes/profile";

export async function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Contact & profile routes
  app.post("/api/contact", handleContact);
  app.get("/api/profile", handleProfile);
  app.post(
    "/api/contact/intent",
    (await import("./routes/contact-intent")).handleContactIntent,
  );

  app.get("/api/health", (await import("./routes/health")).handleHealth);

  return app;
}
