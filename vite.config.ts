import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@auth": "/src/auth",
      "@components": "/src/components",
      "@constants": "/src/constants",
      "@hooks": "/src/hooks",
      "@mock": "/src/mock",
      "@routes": "/src/routes",
      "@utils": "/src/utils",
      "@views": "/src/views",
    },
  },
  plugins: [react()],
});
