import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleContact } from "./routes/contact";

export async function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Contact-only backend
  app.post("/api/contact", handleContact);
  app.post(
    "/api/contact/intent",
    (await import("./routes/contact-intent")).handleContactIntent,
  );

  return app;
}
