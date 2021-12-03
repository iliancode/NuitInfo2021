const express = require('express');
const routeur = express.Router();

var ctrlAccueil = require('../controllers/ctrlAccueil')
var ctrlBateaux = require('../controllers/ctrlBateaux')
var ctrlSauveteur = require('../controllers/ctrlSauveteur')
var ctrlEquipe = require('../controllers/ctrlEquipe')
var ctrlSauvetage = require('../controllers/ctrlSauvetage')

routeur.get('/', ctrlAccueil.afficher_accueil)
//formulaires

routeur.get('/ajouter_bateau', ctrlBateaux.afficher_ajouterBateau)
    .get('/modifier_bateau', ctrlBateaux.afficher_modifierBateau)   
    .get('/liste_bateaux', ctrlBateaux.afficher_listeBateaux)
    .post('/ajouter_bateau',ctrlBateaux.executer_form_bateau)
routeur.get('/ajouter_sauveteur', ctrlSauveteur.afficher_ajouterSauveteur)
    .get('/modifier_sauveteur', ctrlSauveteur.afficher_modifierSauveteur)
    .get('/liste_sauveteurs', ctrlSauveteur.afficher_listeSauveteurs)

routeur.get('/ajouter_equipe', ctrlEquipe.afficher_ajouterEquipe)
    .get('/modifier_equipe', ctrlEquipe.afficher_modifierEquipe)
    .get('/liste_equipes', ctrlEquipe.afficher_listeEquipes)

routeur.get('/ajouter_sauvetage', ctrlAccueil.afficher_ajouterSauvetage)
    .get('/modifier_sauvetage', ctrlAccueil.afficher_modifierSauvetage)
    .get('/liste_sauvetages', ctrlAccueil.afficher_listeSauvetages)


module.exports = routeur;