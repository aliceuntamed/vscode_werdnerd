import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
import { fileURLToPath } from "node:url";

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./src"),
    },
  },
  assetsInclude: ["**/*.svg", "**/*.csv"],
  build: {
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        // Split vendor chunks for better caching
        manualChunks: (id) => {
          // React ecosystem
          if (
            id.includes("react") ||
            id.includes("react-dom") ||
            id.includes("react-router-dom")
          ) {
            return "react-vendor";
          }
          // UI libraries
          if (id.includes("lucide-react") || id.includes("motion")) {
            return "ui-vendor";
          }
          // Supabase
          if (id.includes("@supabase")) {
            return "supabase-vendor";
          }
          // Radix UI components
          if (id.includes("@radix-ui")) {
            return "radix-vendor";
          }
          // Material UI
          if (id.includes("@mui") || id.includes("@emotion")) {
            return "mui-vendor";
          }
        },
        // Improve chunk naming for debugging
        chunkFileNames: () => {
          return `js/[name]-[hash].js`;
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Enable source maps for debugging
    sourcemap: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});
