import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Charger les variables d'environnement
dotenv.config({ path: './.env', debug: true });

// Configuration SMTP avec valeurs directes pour le développement
const EMAIL_HOST = process.env.EMAIL_HOST;
const EMAIL_PORT = process.env.EMAIL_PORT;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

console.log('Configuration d\'environnement:', {
  hostFromEnv: process.env.EMAIL_HOST,
  portFromEnv: process.env.EMAIL_PORT,
  userFromEnv: process.env.EMAIL_USER
});

// Créer le transporteur SMTP
const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: true, // vrai pour le port 465, faux pour les autres ports
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  },
  tls: {
    // Ne pas vérifier le certificat du serveur
    rejectUnauthorized: false
  }
});

/**
 * Envoyer un email via SMTP
 * @param {string} name - Nom de l'expéditeur
 * @param {string} email - Email de l'expéditeur
 * @param {string} message - Contenu du message
 * @returns {Promise} - Promesse avec le résultat de l'envoi
 */
export const sendEmail = async (name, email, message) => {
  try {
    console.log('Tentative d\'envoi d\'email avec la configuration:', {
      host: EMAIL_HOST,
      port: EMAIL_PORT,
      user: EMAIL_USER
    });

    // Options de l'email
    const mailOptions = {
      from: `"${name} via Portfolio" <${EMAIL_USER}>`,
      to: EMAIL_USER, // destinataire (vous-même)
      replyTo: email,
      subject: `Nouveau message du portfolio - ${name}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `Nouveau message de contact\n\nNom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    // Envoyer l'email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email envoyé avec succès:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return { success: false, error: error.message };
  }
};

// Vérifier que la configuration SMTP fonctionne
export const verifyConnection = async () => {
  try {
    console.log('Vérification de la connexion SMTP...');
    const result = await transporter.verify();
    console.log('Connexion au serveur SMTP établie avec succès');
    return { success: true };
  } catch (error) {
    console.error('Erreur de connexion au serveur SMTP:', error);
    return { success: false, error: error.message };
  }
};

// Vérifier la connexion au démarrage
verifyConnection().then(result => {
  if (result.success) {
    console.log('✅ Service d\'email prêt à l\'emploi');
  } else {
    console.error('❌ Service d\'email non disponible:', result.error);
  }
});

export default { sendEmail, verifyConnection }; 