import type { RequestHandler } from "express";
import { z } from "zod";
import { promises as fs } from "fs";
import path from "path";

const intentSchema = z.object({
  type: z.enum(["email", "github", "linkedin"]),
  value: z.string().optional(),
  timestamp: z.string().optional(),
});

export const handleContactIntent: RequestHandler = async (req, res) => {
  const parsed = intentSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ success: false });
  }
  const dataDir = path.join(process.cwd(), "server", "data");
  const filePath = path.join(dataDir, "contact-intents.json");
  await fs.mkdir(dataDir, { recursive: true });
  const record = { ...parsed.data, timestamp: new Date().toISOString() };
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
  return res.json({ success: true });
};
