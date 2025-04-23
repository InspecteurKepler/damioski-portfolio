import { sendEmail } from '../services/emailService';

/**
 * Gestionnaire de requête pour l'endpoint d'envoi d'email
 * @param {Object} req - L'objet requête
 * @param {Object} res - L'objet réponse
 */
export default async function handler(req, res) {
  // Vérifier la méthode HTTP
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  try {
    // Récupérer les données du corps de la requête
    const { name, email, message } = req.body;

    // Valider les données
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Tous les champs sont requis' });
    }

    // Envoyer l'email
    const result = await sendEmail(name, email, message);

    // Vérifier le résultat
    if (result.success) {
      return res.status(200).json({ success: true, messageId: result.messageId });
    } else {
      return res.status(500).json({ error: result.error });
    }
  } catch (error) {
    console.error('Erreur lors du traitement de la requête:', error);
    return res.status(500).json({ error: 'Une erreur s\'est produite lors de l\'envoi de l\'email' });
  }
} 