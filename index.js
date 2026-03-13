const express = require('express');
const sequelize = require('./configs/db.connection');
const { User, Country, Hotel } = require('./models/relations/realtions.model')
const Galery = require('./models/tables/galery.model');
const appRoute = require('./app.route');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(appRoute)
app.use("/uploads", express.static("uploads"));

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('✅ Connexion à la base de données réussie !')
    
    // Synchronisation des modèles (crée les tables si elles n'existent pas)
    await sequelize.sync({alter: true});
    console.log('✅ Modèles synchronisés avec la base de données !')

    app.listen(port, () => {
      console.log(`🚀 Serveur démarré sur http://localhost:${port}`)
    });
  } catch (error) {
    console.error('❌ Impossible de se connecter à la base de données:', error)
  }
}

startServer()