import { test, expect } from "@playwright/test";

test("show all questions", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await expect(page.getByTestId("questions-list")).toBeAttached();
});
