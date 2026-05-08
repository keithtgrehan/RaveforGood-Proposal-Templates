import { defineConfig } from "vite";
import path from "path";

const port   = Number(process.env.PORT   ?? 5173);
const base   = process.env.BASE_PATH     ?? "/";

export default defineConfig({
  base,
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: { strict: false },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
