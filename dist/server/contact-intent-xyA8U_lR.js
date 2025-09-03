import { z } from "zod";
import { promises } from "fs";
import path from "path";
const intentSchema = z.object({
  type: z.enum(["email", "github", "linkedin"]),
  value: z.string().optional(),
  timestamp: z.string().optional()
});
const handleContactIntent = async (req, res) => {
  const parsed = intentSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ success: false });
  }
  const dataDir = path.join(process.cwd(), "server", "data");
  const filePath = path.join(dataDir, "contact-intents.json");
  await promises.mkdir(dataDir, { recursive: true });
  const record = { ...parsed.data, timestamp: (/* @__PURE__ */ new Date()).toISOString() };
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
  return res.json({ success: true });
};
export {
  handleContactIntent
};
//# sourceMappingURL=contact-intent-xyA8U_lR.js.map
