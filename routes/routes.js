const express = require('express');
const routeur = express.Router();

var ctrlAccueil = require('../controllers/ctrlAccueil')

routeur.get('/', ctrlAccueil.afficher_accueil)
routeur.get('/ajouter_bateau', ctrlAccueil.afficher_ajouterBateau)

module.exports = routeur;