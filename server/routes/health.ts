import type { RequestHandler } from "express";
import { getDb } from "../lib/mongo";

export const handleHealth: RequestHandler = async (_req, res) => {
  const result: {
    ok: boolean;
    services: {
      mongo: { configured: boolean; connected: boolean; error?: string };
      smtp: { configured: boolean };
      sms: { configured: boolean };
      env: { nodeEnv: string | undefined };
    };
  } = {
    ok: true,
    services: {
      mongo: {
        configured: !!(process.env.MONGODB_URI && process.env.MONGODB_DB),
        connected: false,
      },
      smtp: {
        configured: !!(
          process.env.SMTP_HOST &&
          process.env.SMTP_PORT &&
          process.env.SMTP_USER &&
          process.env.SMTP_PASS &&
          process.env.EMAIL_FROM &&
          process.env.EMAIL_TO
        ),
      },
      sms: {
        configured: !!(
          process.env.TWILIO_ACCOUNT_SID &&
          process.env.TWILIO_AUTH_TOKEN &&
          process.env.TWILIO_FROM_NUMBER &&
          process.env.SMS_TO
        ),
      },
      env: { nodeEnv: process.env.NODE_ENV },
    },
  };

  // Try MongoDB connection if configured
  if (result.services.mongo.configured) {
    try {
      const db = await getDb();
      await db.command({ ping: 1 });
      result.services.mongo.connected = true;
    } catch (e: any) {
      result.services.mongo.connected = false;
      result.services.mongo.error = e?.message || "connection failed";
      result.ok = false;
    }
  }

  res.json(result);
};
