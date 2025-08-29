import nodemailer from "nodemailer";

export type MailResult = { sent: boolean; error?: string };

export async function sendContactEmail(opts: {
  to?: string;
  from?: string;
  subject?: string;
  html: string;
}): Promise<MailResult> {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = opts.from || process.env.MAIL_FROM;
  const to = opts.to || process.env.MAIL_TO;

  if (!host || !port || !user || !pass || !from || !to) {
    return { sent: false, error: "SMTP configuration missing" };
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from,
      to,
      subject: opts.subject || "New portfolio contact",
      html: opts.html,
    });
    return { sent: true };
  } catch (e: any) {
    return { sent: false, error: e?.message || "Email send failed" };
  }
}
