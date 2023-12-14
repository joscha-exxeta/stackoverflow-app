import React from "react";
import { describe, expect, it } from "vitest";
import { QuestionItem } from "../../src/components/QuestionItem";
import { render, screen } from "../utils/test-utils";

describe("single question", () => {
  it("renders question title, body, upvotes, and downvotes", () => {
    const question = {
      _id: "657ae12232dd0d678c762443",
      title: "Test Title",
      body: "Test Body",
      upvotes: 10,
      downvotes: 2,
      answers: [],
    };

    render(<QuestionItem {...question} />);

    expect(screen.getByText("Test Title")).toBeDefined();
    expect(screen.getByText("Test Body")).toBeDefined();
    expect(screen.getByText("10")).toBeDefined();
    expect(screen.getByText("2")).toBeDefined();
  });

  it("renders number of answers", () => {
    const questionWithAnswers = {
      _id: "657ae12632dd0d678c762444",
      title: "Test Title 2",
      body: "Test Body 2",
      upvotes: 5,
      downvotes: 0,
      answers: ["Answer 1", "Answer 2"],
    };

    render(<QuestionItem {...questionWithAnswers} />);

    expect(screen.getByText("2 Antworten")).toBeDefined();
  });
});
