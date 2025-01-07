import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Isso permite importar arquivos a partir da raiz src/
    },
  },
});
