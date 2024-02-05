import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: ["./src/**/*.tsx"],
    }),
  ],
  resolve: {
    alias: {
      "@mui/styled-engine": "@mui/styled-engine-sc",
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});
