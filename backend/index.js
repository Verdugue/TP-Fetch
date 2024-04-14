const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

// Autoriser les requêtes cross-origin
app.use(cors({
  origin: '*'
}));

// Servir les fichiers statiques - Assurez-vous que ceci vient avant les routes API
app.use(express.static(path.join(__dirname, '../frontend')));

// Configuration des routes de l'API
const sneakersRoutes = require('./routes/sneakers');
app.use(sneakersRoutes);

// Démarrage du serveur
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
