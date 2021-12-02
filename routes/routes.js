const express = require('express');
const routeur = express.Router();

var ctrlAccueil = require('../controllers/ctrlAccueil')

routeur.get('/', ctrlAccueil.afficher_accueil)
routeur.get('/ajouter_bateau', ctrlAccueil.afficher_ajouterBateau)
routeur.get('/ajouter_sauveuteur', ctrlAccueil.aficher_ajouterSauveuteur)
*routeur.get('/ajouter_sauvetage', ctrlAccueil.afficher_ajouterSauvetage)


module.exports = routeur;