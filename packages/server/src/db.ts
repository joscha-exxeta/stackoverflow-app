import { MongoClient } from "mongodb";
import { data } from "./data";

async function insertInitialDummyData(db) {
  const collections = await db.listCollections().toArray();
  const hasQuestionsCollection = collections.some(
    (collection) => collection.name === "questions"
  );
  const hasAnswersCollection = collections.some(
    (collection) => collection.name === "answers"
  );
  const hasCommentsCollection = collections.some(
    (collection) => collection.name === "comments"
  );
  if (!hasQuestionsCollection) {
    await db.collection("questions").insertMany(data.questions);
  }
  if (!hasAnswersCollection) {
    await db.collection("answers").insertMany(data.answers);
  }
  if (!hasCommentsCollection) {
    await db.collection("comments").insertMany(data.comments);
  }
}

export async function connectToDB() {
  const client = new MongoClient(
    process.env.MONGO_URL || "mongodb://127.0.0.1:27017"
  );

  await client.connect();
  const db = client.db(process.env.MONGO_DATABASE || "stackoverflow");

  await insertInitialDummyData(db);

  return {
    db,
    questions: db.collection("questions"),
    answers: db.collection("answers"),
    comments: db.collection("comments"),
  };
}

export type DbContext = Awaited<ReturnType<typeof connectToDB>>;
