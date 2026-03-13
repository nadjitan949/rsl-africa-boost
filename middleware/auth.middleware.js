const jwt = require('jsonwebtoken');
const responses = require('../messages/responses');

const authMiddleware = (req, res, next) => {
    let token;

    // 1. On vérifie si le token est présent dans les headers (Bearer Token)
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    // 2. Si pas de token, on bloque direct
    if (!token) {
        return res.status(responses.HTTP_CODE.UNAUTHORIZED).json({
            success: false,
            message: "Accès refusé. Aucun token fourni."
        });
    }

    try {
        // 3. On vérifie la validité du token avec ta clé secrète
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        // 4. On ajoute les infos de l'utilisateur dans l'objet 'req' 
        // pour que tes contrôleurs puissent savoir QUI fait la requête
        req.user = decoded;
        
        next(); // On passe au middleware suivant ou au contrôleur
    } catch (error) {
        return res.status(responses.HTTP_CODE.UNAUTHORIZED).json({
            success: false,
            message: "Token invalide ou expiré."
        });
    }
};

module.exports = authMiddleware