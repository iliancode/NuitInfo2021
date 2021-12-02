const express = require('express');
const routeur = express.Router();

var ctrlAccueil = require('../controllers/ctrlAccueil')

routeur.get('/', ctrlAccueil.afficher_accueil)
//formulaires
routeur.get('/ajouter_bateau', ctrlAccueil.afficher_ajouterBateau)
routeur.get('/ajouter_sauveuteur', ctrlAccueil.aficher_ajouterSauveuteur)
routeur.get('/ajouter_sauvetage', ctrlAccueil.afficher_ajouterSauvetage)
// listes
routeur.get('/liste_bateaux', ctrlAccueil.afficher_listeBateaux)
routeur.get('/liste_sauveuteurs', ctrlAccueil.afficher_listeSauveuteurs)
routeur.get('/liste_sauvetages', ctrlAccueil.afficher_listeSauvetages)


module.exports = routeur;