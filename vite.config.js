import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'

// Charger les variables d'environnement
dotenv.config()

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 4545,
    host: true,
    allowedHosts: ['damioski.de', 'portfolio.damioski.de'],
  },
  plugins: [
    react(),
    {
      name: 'api-middleware',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          // Gérer l'API route pour l'envoi d'emails
          if (req.url === '/api/sendMail' && req.method === 'POST') {
            try {
              // Récupérer les données du corps de la requête
              let body = '';
              for await (const chunk of req) {
                body += chunk;
              }
              const data = JSON.parse(body);

              // Importer dynamiquement le service d'email
              const { sendEmail } = await import('./src/services/emailService.js');
              const result = await sendEmail(data.name, data.email, data.message);

              // Envoyer la réponse
              res.setHeader('Content-Type', 'application/json');
              if (result.success) {
                res.statusCode = 200;
                res.end(JSON.stringify({ success: true, messageId: result.messageId }));
              } else {
                res.statusCode = 500;
                res.end(JSON.stringify({ error: result.error }));
              }
            } catch (error) {
              console.error('Erreur lors du traitement de la requête:', error);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Une erreur s\'est produite lors de l\'envoi de l\'email' }));
            }
          } else {
            next();
          }
        });
      }
    }
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern'
      }
    }
  },
})
