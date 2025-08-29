import Twilio from "twilio";

export type SmsResult = { sent: boolean; error?: string };

export async function sendContactSms(message: string): Promise<SmsResult> {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM;
  const to = process.env.TWILIO_TO;

  if (!sid || !token || !from || !to) {
    return { sent: false, error: "Twilio configuration missing" };
  }

  try {
    const client = Twilio(sid, token);
    await client.messages.create({ body: message, from, to });
    return { sent: true };
  } catch (e: any) {
    return { sent: false, error: e?.message || "SMS send failed" };
  }
}
