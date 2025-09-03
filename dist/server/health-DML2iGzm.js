import { g as getDb } from "./node-build.mjs";
const handleHealth = async (_req, res) => {
  const result = {
    ok: true,
    services: {
      mongo: {
        configured: !!(process.env.MONGODB_URI && process.env.MONGODB_DB),
        connected: false
      },
      smtp: {
        configured: !!(process.env.SMTP_HOST && process.env.SMTP_PORT && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.EMAIL_FROM && process.env.EMAIL_TO)
      },
      sms: {
        configured: !!(process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_FROM_NUMBER && process.env.SMS_TO)
      },
      env: { nodeEnv: "production" }
    }
  };
  if (result.services.mongo.configured) {
    try {
      const db = await getDb();
      await db.command({ ping: 1 });
      result.services.mongo.connected = true;
    } catch (e) {
      result.services.mongo.connected = false;
      result.services.mongo.error = e?.message || "connection failed";
      result.ok = false;
    }
  }
  res.json(result);
};
export {
  handleHealth
};
//# sourceMappingURL=health-DML2iGzm.js.map
