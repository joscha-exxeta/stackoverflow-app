import { ObjectId } from "mongodb";

export const data = {
  questions: [
    {
      _id: new ObjectId("657300ccffcca3a5cbd62bb5"),
      title: "Was ist GraphQL?",
      body: "Ich möchte mehr über GraphQL erfahren. Kann mir jemand helfen?",
      comments: [
        new ObjectId("657300d1ffcca3a5cbd62bb6"),
        new ObjectId("657300d5ffcca3a5cbd62bb7"),
      ],
      answers: [
        new ObjectId("657300d8ffcca3a5cbd62bb8"),
        new ObjectId("6579da76b80cc4b710efa0e4"),
      ],
      upvotes: 2,
      downvotes: 1,
    },
    {
      _id: new ObjectId("65730106ffcca3a5cbd62bbd"),
      title: "Wie lange dauert es?",
      body: "Weiß jemand wie lange es dauert GraphQL zu lernen?",
      comments: [],
      answers: [
        new ObjectId("6573011affcca3a5cbd62bbe"),
        new ObjectId("6573012dffcca3a5cbd62bc1"),
      ],
      upvotes: 10,
      downvotes: 0,
    },
  ],
  answers: [
    {
      _id: new ObjectId("657300d8ffcca3a5cbd62bb8"),
      body: "GraphQL ist eine Abfragesprache für APIs und eine Laufzeit zum Ausführen dieser Abfragen mit Ihren vorhandenen Daten.",
      questionId: new ObjectId("657300ccffcca3a5cbd62bb5"),
      comments: [],
      upvotes: 0,
      downvotes: 3,
    },
    {
      _id: new ObjectId("6579da76b80cc4b710efa0e4"),
      body: "Eine zweite Antwort.",
      questionId: new ObjectId("657300ccffcca3a5cbd62bb5"),
      comments: [new ObjectId("657883ced2c88d4b7487d1ce")],
      upvotes: 6,
      downvotes: 2,
    },
    {
      _id: new ObjectId("6573011affcca3a5cbd62bbe"),
      body: "Das kann ewig dauern.",
      questionId: new ObjectId("65730106ffcca3a5cbd62bbd"),
      comments: [],
      upvotes: 1,
      downvotes: 0,
    },
    {
      _id: new ObjectId("6573012dffcca3a5cbd62bc1"),
      body: "Das ist ganz einfach.",
      questionId: new ObjectId("65730106ffcca3a5cbd62bbd"),
      comments: [new ObjectId("657883d1d2c88d4b7487d1cf")],
      upvotes: 8,
      downvotes: 1,
    },
  ],
  comments: [
    {
      _id: new ObjectId("657300d1ffcca3a5cbd62bb6"),
      body: "Das ist ein Kommentar",
      attachedTo: new ObjectId("657300ccffcca3a5cbd62bb5"),
    },
    {
      _id: new ObjectId("657300d5ffcca3a5cbd62bb7"),
      body: "Das ist ein zweites Kommentar",
      attachedTo: new ObjectId("657300ccffcca3a5cbd62bb5"),
    },
    {
      _id: new ObjectId("657883ced2c88d4b7487d1ce"),
      body: "Noch ein Kommentar",
      attachedTo: new ObjectId("6579da76b80cc4b710efa0e4"),
    },
    {
      _id: new ObjectId("657883d1d2c88d4b7487d1cf"),
      body: "Noch ein weiteres Kommentar",
      attachedTo: new ObjectId("6573012dffcca3a5cbd62bc1"),
    },
  ],
};
