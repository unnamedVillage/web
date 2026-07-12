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
    outDir: "../src/web-dist",
    emptyOutDir: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          "vendor-radix": ["@radix-ui/themes"],
          "vendor-react": ["react", "react-dom"],
          "vendor-router": ["@tanstack/react-router"],
          "vendor-query": ["@tanstack/react-query"],
          "vendor-fontawesome": [
            "@fortawesome/react-fontawesome",
            "@fortawesome/free-solid-svg-icons",
          ],
        },
      },
    },
  },
});
