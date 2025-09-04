import nodemailer from "nodemailer";
import twilio from "twilio";

export async function sendEmailSMTP(opts: {
  subject: string;
  text: string;
  html?: string;
}): Promise<void> {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, EMAIL_FROM, EMAIL_TO } =
    process.env as Record<string, string | undefined>;
  if (
    !SMTP_HOST ||
    !SMTP_PORT ||
    !SMTP_USER ||
    !SMTP_PASS ||
    !EMAIL_FROM ||
    !EMAIL_TO
  ) {
    return; // silently skip if SMTP not configured
  }

  const isSendGrid = /sendgrid/i.test(SMTP_HOST);
  const resolvedUser =
    isSendGrid && SMTP_PASS?.startsWith("SG.") ? "apikey" : SMTP_USER;

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: resolvedUser, pass: SMTP_PASS },
    requireTLS: Number(SMTP_PORT) === 587,
  });

  await transporter.sendMail({
    from: EMAIL_FROM,
    to: EMAIL_TO,
    subject: opts.subject,
    text: opts.text,
    html: opts.html,
  });
}

export async function sendSMS(message: string): Promise<void> {
  const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER, SMS_TO } =
    process.env as Record<string, string | undefined>;
  if (
    !TWILIO_ACCOUNT_SID ||
    !TWILIO_AUTH_TOKEN ||
    !TWILIO_FROM_NUMBER ||
    !SMS_TO
  ) {
    return; // silently skip if Twilio not configured
  }
  const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
  await client.messages.create({
    body: message,
    from: TWILIO_FROM_NUMBER,
    to: SMS_TO,
  });
}
