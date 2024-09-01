import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    target: 'es2020',
    minify: 'terser', // Utilisation de Terser pour une minification avancée
    sourcemap: false, // Désactivation des sourcemaps en production
    terserOptions: {
      compress: {
        drop_console: true, // Supprime les console.log
        drop_debugger: true, // Supprime les debugger
        ecma: 2020, // Optimisation pour ES2020
        module: true,
        toplevel: true,
      },
      format: {
        comments: false, // Supprime tous les commentaires
      },
    },
    chunkSizeWarningLimit: 500, // Limite d'avertissement pour la taille des chunks
  },
})