/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/graphql": "http://localhost:4000/graphql",
    },
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    include: ["./tests/unit/**/*.{spec,test}.{ts,tsx}"],
  },
});
