import { test, expect } from "@playwright/test";

test("show all questions", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("link", { name: "Alle Fragen anzeigen" }).click();

  await expect(page.getByTestId("questions-list")).toBeAttached();
});
