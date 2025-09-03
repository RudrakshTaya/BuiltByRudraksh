import serverless from "serverless-http";
import type { Handler, Context } from "@netlify/functions";
import { createServer } from "../../server";

let cached: ReturnType<typeof serverless> | null = null;

export const handler: Handler = async (event, context: Context) => {
  if (!cached) {
    const app = await createServer();
    cached = serverless(app);
  }
  // @ts-expect-error serverless types are compatible at runtime
  return cached(event, context);
};
