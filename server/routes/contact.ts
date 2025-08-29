import type { RequestHandler } from "express";
import { z } from "zod";
import crypto from "crypto";
import path from "path";
import { promises as fs } from "fs";
import type { ContactRequest, ContactResponse } from "@shared/api";
import { getDb } from "../lib/mongo";
import { sendContactEmail } from "../services/mailer";
import { sendContactSms } from "../services/sms";

const contactSchema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().max(320),
  message: z.string().min(1).max(5000),
});

async function storeRecord(record: any): Promise<void> {
  if (process.env.MONGODB_URI) {
    const db = await getDb();
    await db.collection("contacts").insertOne({ _id: record.id, ...record });
    return;
  }
  const dataDir = path.join(process.cwd(), "server", "data");
  const filePath = path.join(dataDir, "contacts.json");
  await fs.mkdir(dataDir, { recursive: true });
  let existing: any[] = [];
  try {
    const raw = await fs.readFile(filePath, "utf8");
    existing = JSON.parse(raw);
    if (!Array.isArray(existing)) existing = [];
  } catch {
    existing = [];
  }
  existing.push(record);
  await fs.writeFile(filePath, JSON.stringify(existing, null, 2), "utf8");
}

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

    await storeRecord({ id, name, email, message, timestamp });

    const emailHtml = `<h2>New Contact</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message.replace(
      /\n/g,
      "<br/>",
    )}</p><p><small>${timestamp}</small></p>`;
    const mail = await sendContactEmail({ html: emailHtml });

    const smsText = `New contact from ${name} <${email}>: ${
      message.length > 120 ? message.slice(0, 117) + "..." : message
    }`;
    const sms = await sendContactSms(smsText);

    const response: ContactResponse = {
      success: true,
      message: "Message received",
      id,
      timestamp,
      stored: true,
      emailSent: mail.sent,
      smsSent: sms.sent,
    };
    return res.status(200).json(response);
  } catch (err: any) {
    return res
      .status(500)
      .json({ success: false, error: err?.message || "Server error" });
  }
};
