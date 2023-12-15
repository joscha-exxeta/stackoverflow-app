import React from "react";
import { describe, expect, it } from "vitest";
import { AnswerItem } from "../../src/components/AnswerItem";
import { render, screen } from "../utils/test-utils";

describe("single answer", () => {
  it("renders answer body, upvotes, and downvotes", () => {
    const answer = {
      _id: "657ae12e32dd0d678c762445",
      body: "Test Body",
      upvotes: 1001,
      downvotes: 0,
      comments: [],
    };

    render(<AnswerItem {...answer} />);

    expect(screen.getByText("Test Body")).toBeDefined();
    expect(screen.getByText("1001")).toBeDefined();
    expect(screen.getByText("0")).toBeDefined();
  });

  it("renders number of comments", () => {
    const answerWithComments = {
      _id: "657ae13732dd0d678c762446",
      body: "Test Body 2",
      upvotes: 0,
      downvotes: 72,
      comments: [
        { _id: "1", body: "Test Comment" },
        { _id: "2", body: "Test Comment 2" },
      ],
    };

    render(<AnswerItem {...answerWithComments} />);

    expect(screen.getByText("Test Comment")).toBeDefined();
    expect(screen.getByText("Test Comment 2")).toBeDefined();
  });
});
