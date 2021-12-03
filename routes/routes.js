const express = require('express');
const routeur = express.Router();

var ctrlAccueil = require('../controllers/ctrlAccueil')

routeur.get('/', ctrlAccueil.afficher_accueil)
//formulaires
routeur.get('/ajouter_bateau', ctrlAccueil.afficher_ajouterBateau)
routeur.get('/ajouter_sauveteur', ctrlAccueil.afficher_ajouterSauveteur)
routeur.get('/ajouter_equipe', ctrlAccueil.afficher_ajouterEquipe)
routeur.get('/ajouter_sauvetage', ctrlAccueil.afficher_ajouterSauvetage)
//formulaires modif
routeur.get('/modifier_bateau', ctrlAccueil.afficher_modifierBateau)
routeur.get('/modifier_sauveteur', ctrlAccueil.afficher_modifierSauveteur)
routeur.get('/modifier_equipe', ctrlAccueil.afficher_modifierEquipe)
routeur.get('/modifier_sauvetage', ctrlAccueil.afficher_modifierSauvetage)
// listes
routeur.get('/liste_bateaux', ctrlAccueil.afficher_listeBateaux)
routeur.get('/liste_sauveteurs', ctrlAccueil.afficher_listeSauveteurs)
routeur.get('/liste_equipes', ctrlAccueil.afficher_listeEquipes)
routeur.get('/liste_sauvetages', ctrlAccueil.afficher_listeSauvetages)


module.exports = routeur;