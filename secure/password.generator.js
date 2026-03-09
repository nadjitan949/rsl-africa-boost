const crypto = require('crypto');

/**
 * Génère un mot de passe robuste et aléatoire
 * @param {number} length - Longueur du mot de passe (défaut: 16)
 * @returns {string} Le mot de passe généré
 */
const generateSecurePassword = (length = 16) => {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let password = "";
  
  // Utilisation de crypto.getRandomValues pour une sécurité maximale
  const typedArray = new Uint32Array(length);
  crypto.webcrypto.getRandomValues(typedArray);

  for (let i = 0; i < length; i++) {
    password += charset[typedArray[i] % charset.length];
  }

  return password;
};

module.exports = { generateSecurePassword };