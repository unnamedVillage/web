import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  cacheDir: ".vitecache",
  server: {
    cors: true,
    allowedHosts: ["dev"],
  },
  build: {
    outDir: "./dist",
    emptyOutDir: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          "vendor-goi-react": ["@ogcio/design-system-react"],
          "vendor-goi-theme": ["@ogcio/theme-govie"],
          "vendor-react": ["react", "react-dom"],
          "vendor-router": ["@tanstack/react-router"],
          "vendor-query": ["@tanstack/react-query"],
        },
      },
    },
  },
});
