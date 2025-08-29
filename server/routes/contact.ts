import type { RequestHandler } from "express";
import { z } from "zod";
import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";
import type { ContactRequest, ContactResponse } from "@shared/api";

const contactSchema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().max(320),
  message: z.string().min(1).max(5000),
});

const ensureDataDir = async (dirPath: string) => {
  try {
    await fs.mkdir(dirPath, { recursive: true });
  } catch {}
};

export const handleContact: RequestHandler = async (req, res) => {
  try {
    const parsed = contactSchema.safeParse(req.body as ContactRequest);
    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        error: "Invalid request payload",
        issues: parsed.error.issues,
      } satisfies ContactResponse);
    }

    const { name, email, message } = parsed.data;
    const id = `msg_${crypto.randomUUID()}`;
    const timestamp = new Date().toISOString();

    const record = { id, name, email, message, timestamp };

    const dataDir = path.join(process.cwd(), "server", "data");
    const filePath = path.join(dataDir, "contacts.json");
    await ensureDataDir(dataDir);

    let existing: unknown[] = [];
    try {
      const raw = await fs.readFile(filePath, "utf8");
      existing = JSON.parse(raw);
      if (!Array.isArray(existing)) existing = [];
    } catch {
      existing = [];
    }

    existing.push(record);
    await fs.writeFile(filePath, JSON.stringify(existing, null, 2), "utf8");

    const response: ContactResponse = {
      success: true,
      message: "Message received",
      id,
      timestamp,
    };
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({ success: false, error: "Server error" });
  }
};
