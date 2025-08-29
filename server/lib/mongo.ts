import { MongoClient, ServerApiVersion, Db } from "mongodb";

const uri = process.env.MONGODB_URI || "";

let client: MongoClient | null = null;
let db: Db | null = null;

export async function getDb(): Promise<Db> {
  if (db) return db;
  if (!uri) throw new Error("MONGODB_URI is not set");
  client = new MongoClient(uri, { serverApi: ServerApiVersion.v1 });
  await client.connect();
  const dbName = process.env.MONGODB_DB || "portfolio";
  db = client.db(dbName);
  await ensureIndexes(db);
  return db;
}

async function ensureIndexes(database: Db) {
  await database.collection("contacts").createIndex({ email: 1, timestamp: -1 });
  await database.collection("contact_intents").createIndex({ type: 1, timestamp: -1 });
}

export async function closeMongo() {
  if (client) await client.close();
  client = null;
  db = null;
}
