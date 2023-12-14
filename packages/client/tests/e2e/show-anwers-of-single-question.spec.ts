import { test, expect } from "@playwright/test";

test("show answers of single question", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("link", { name: "Alle Fragen anzeigen" }).click();
  await page.getByRole("link", { name: "Was ist GraphQL?" }).click();

  await expect(page.getByTestId("answers-list")).toBeAttached();
});
