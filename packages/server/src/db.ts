import { MongoClient } from "mongodb";

export async function connectToDB() {
  const client = new MongoClient(
    process.env.MONGO_URL || "mongodb://127.0.0.1:27017"
  );

  await client.connect();
  const db = client.db(process.env.MONGO_DATABASE || "stackoverflow");

  return {
    db,
    questions: db.collection("questions"),
    answers: db.collection("answers"),
    comments: db.collection("comments"),
  };
}

export type DbContext = Awaited<ReturnType<typeof connectToDB>>;
