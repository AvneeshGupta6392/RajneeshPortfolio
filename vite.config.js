import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  // Pre-bundle heavy deps so lazy-loaded pages never trigger a mid-session re-optimize/reload in dev.
  optimizeDeps: { include: ["react", "react-dom", "react-router-dom", "three", "@react-three/fiber", "@react-three/drei", "framer-motion", "lucide-react"] },
});
