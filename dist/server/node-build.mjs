import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";
import express from "express";
import cors from "cors";
import { z } from "zod";
import fs, { promises } from "fs";
import crypto from "crypto";
import { MongoClient } from "mongodb";
import nodemailer from "nodemailer";
import twilio from "twilio";
const handleDemo = (req, res) => {
  const response = {
    message: "Hello from Express server"
  };
  res.status(200).json(response);
};
let client = null;
let db = null;
async function getDb() {
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB;
  if (!uri || !dbName) {
    throw new Error("MONGODB_URI and MONGODB_DB must be set in environment");
  }
  if (db) return db;
  client = new MongoClient(uri);
  await client.connect();
  db = client.db(dbName);
  return db;
}
async function getCollection(name) {
  const database = await getDb();
  return database.collection(name);
}
async function sendEmailSMTP(opts) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, EMAIL_FROM, EMAIL_TO } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !EMAIL_FROM || !EMAIL_TO) {
    return;
  }
  const isSendGrid = /sendgrid/i.test(SMTP_HOST);
  const resolvedUser = isSendGrid && SMTP_PASS?.startsWith("SG.") ? "apikey" : SMTP_USER;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: resolvedUser, pass: SMTP_PASS },
    requireTLS: Number(SMTP_PORT) === 587
  });
  await transporter.sendMail({
    from: EMAIL_FROM,
    to: EMAIL_TO,
    subject: opts.subject,
    text: opts.text,
    html: opts.html
  });
}
async function sendSMS(message) {
  const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER, SMS_TO } = process.env;
  if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_FROM_NUMBER || !SMS_TO) {
    return;
  }
  const client2 = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
  await client2.messages.create({
    body: message,
    from: TWILIO_FROM_NUMBER,
    to: SMS_TO
  });
}
const contactSchema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().max(320),
  message: z.string().min(1).max(5e3)
});
const ensureDataDir = async (dirPath) => {
  try {
    await promises.mkdir(dirPath, { recursive: true });
  } catch {
  }
};
const handleContact = async (req, res) => {
  try {
    const parsed = contactSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        error: "Invalid request payload",
        issues: parsed.error.issues
      });
    }
    const { name, email, message } = parsed.data;
    const id = `msg_${crypto.randomUUID()}`;
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    const record = { id, name, email, message, timestamp };
    let savedTo = "file";
    try {
      if (process.env.MONGODB_URI && process.env.MONGODB_DB) {
        const collectionName = process.env.MONGODB_COLLECTION || "contacts";
        const col = await getCollection(collectionName);
        await col.insertOne(record);
        savedTo = "mongodb";
      } else {
        throw new Error("MongoDB not configured");
      }
    } catch {
      const dataDir = path.join(process.cwd(), "server", "data");
      const filePath = path.join(dataDir, "contacts.json");
      await ensureDataDir(dataDir);
      let existing = [];
      try {
        const raw = await promises.readFile(filePath, "utf8");
        existing = JSON.parse(raw);
        if (!Array.isArray(existing)) existing = [];
      } catch {
        existing = [];
      }
      existing.push(record);
      await promises.writeFile(filePath, JSON.stringify(existing, null, 2), "utf8");
    }
    const subject = `New portfolio contact from ${name}`;
    const text = `Time: ${timestamp}
Name: ${name}
Email: ${email}

Message:
${message}`;
    void Promise.allSettled([sendEmailSMTP({ subject, text }), sendSMS(text)]);
    const response = {
      success: true,
      message: `Message received and saved to ${savedTo}`,
      id,
      timestamp
    };
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({ success: false, error: "Server error" });
  }
};
const handleProfile = (_req, res) => {
  const profile = {
    name: "Rudraksh Taya",
    title: "Computer Science Student",
    email: "rudrakshstaya@gmail.com",
    skills: ["React", "Node.js", "Python", "Java"],
    experience: "3+ years",
    available: true
  };
  res.json(profile);
};
async function createServer() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });
  app.get("/api/demo", handleDemo);
  app.post("/api/contact", handleContact);
  app.get("/api/profile", handleProfile);
  app.post(
    "/api/contact/intent",
    (await import("./contact-intent-xyA8U_lR.js")).handleContactIntent
  );
  app.get("/api/health", (await import("./health-DML2iGzm.js")).handleHealth);
  return app;
}
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
async function bootstrap() {
  const app = await createServer();
  const port = process.env.PORT || 3e3;
  const distPath = path.join(__dirname, "../spa");
  const spaExists = fs.existsSync(distPath);
  if (spaExists) {
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      if (req.path.startsWith("/api/") || req.path.startsWith("/health")) {
        return res.status(404).json({ error: "API endpoint not found" });
      }
      res.sendFile(path.join(distPath, "index.html"));
    });
  } else {
    console.log("SPA build not found; running API-only mode");
  }
  app.listen(port, () => {
    console.log(`🚀 Fusion Starter server running on port ${port}`);
    console.log(`📱 Frontend: http://localhost:${port}`);
    console.log(`🔧 API: http://localhost:${port}/api`);
  });
  process.on("SIGTERM", () => {
    console.log("🛑 Received SIGTERM, shutting down gracefully");
    process.exit(0);
  });
  process.on("SIGINT", () => {
    console.log("🛑 Received SIGINT, shutting down gracefully");
    process.exit(0);
  });
}
bootstrap();
export {
  getDb as g
};
//# sourceMappingURL=node-build.mjs.map
