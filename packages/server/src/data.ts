export const data = {
  questions: [
    {
      id: "657300ccffcca3a5cbd62bb5",
      title: "Was ist GraphQL?",
      body: "Ich möchte mehr über GraphQL erfahren. Kann mir jemand helfen?",
      comments: [
        {
          id: "657300d1ffcca3a5cbd62bb6",
          body: "Das ist ein Kommentar",
          question: {
            id: "657300ccffcca3a5cbd62bb5",
          },
        },
        {
          id: "657300d5ffcca3a5cbd62bb7",
          body: "Das ist ein zweites Kommentar",
          question: {
            id: "657300ccffcca3a5cbd62bb5",
          },
        },
      ],
      answers: [
        {
          id: "657300d8ffcca3a5cbd62bb8",
          body: "GraphQL ist eine Abfragesprache für APIs und eine Laufzeit zum Ausführen dieser Abfragen mit Ihren vorhandenen Daten.",
          question: {
            id: "657300ccffcca3a5cbd62bb5",
          },
          comments: [
            {
              id: "657300dcffcca3a5cbd62bb9",
              body: "Das ist ein weiteres Kommentar",
              question: {
                id: "657300ccffcca3a5cbd62bb5",
              },
            },
            {
              id: "657300deffcca3a5cbd62bba",
              body: "Das ist ein zweites weiteres Kommentar",
              question: {
                id: "657300ccffcca3a5cbd62bb5",
              },
            },
          ],
          votes: [
            {
              id: "657300e0ffcca3a5cbd62bbb",
              answer: {
                id: "657300d8ffcca3a5cbd62bb8",
              },
              question: null,
            },
          ],
        },
        {
          id: "657300d8ffcca3a5cbd62btz",
          body: "Eine zweite Antwort.",
          question: {
            id: "657300ccffcca3a5cbd62bb5",
          },
          comments: [],
          votes: [
            {
              id: "65730184ffcca3a5cbd62bc2",
              answer: {
                id: "657300d8ffcca3a5cbd62btz",
              },
              question: null,
            },
          ],
        },
      ],
      votes: [
        {
          id: "657300e5ffcca3a5cbd62bbc",
          answer: null,
          question: {
            id: "657300ccffcca3a5cbd62bb5",
          },
        },
      ],
    },
    {
      id: "65730106ffcca3a5cbd62bbd",
      title: "Wie lange dauert es?",
      body: "Weiß jemand wie lange es dauert GraphQL zu lernen?",
      answers: [
        {
          id: "6573011affcca3a5cbd62bbe",
          body: "Das kann ewig dauern.",
          question: {
            id: "65730106ffcca3a5cbd62bbd",
          },
          votes: [
            {
              id: "6573011fffcca3a5cbd62bbf",
              answer: {
                id: "6573011affcca3a5cbd62bbe",
              },
              question: null,
            },
          ],
        },
        {
          id: "6573012dffcca3a5cbd62bc1",
          body: "Das ist ganz einfach.",
          question: {
            id: "65730106ffcca3a5cbd62bbd",
          },
          votes: [
            {
              id: "6573012bffcca3a5cbd62bc0",
              answer: {
                id: "6573011affcca3a5cbd62bbe",
              },
              question: null,
            },
          ],
        },
      ],
      votes: [
        {
          id: "4",
          answer: null,
          question: {
            id: "65730106ffcca3a5cbd62bbd",
          },
        },
        {
          id: "5",
          answer: null,
          question: {
            id: "65730106ffcca3a5cbd62bbd",
          },
        },
      ],
    },
  ],
};
