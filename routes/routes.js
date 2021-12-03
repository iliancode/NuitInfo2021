const express = require("express");
const routeur = express.Router();

var ctrlAccueil = require("../controllers/ctrlAccueil");
var ctrlBateaux = require("../controllers/ctrlBateaux");
var ctrlSauveteur = require("../controllers/ctrlSauveteur");
var ctrlEquipe = require("../controllers/ctrlEquipe");
var ctrlSauvetage = require("../controllers/ctrlSauvetage");
const ctrlMarqueModele = require("../controllers/ctrlMarqueModele");
const ctrlNaufrage = require("../controllers/ctrlNaufrage");
const ctrlVictimes = require("../controllers/ctrlVictimes");

routeur.get("/", ctrlAccueil.afficher_accueil);
//formulaires

routeur
  .get("/ajouter_bateau", ctrlBateaux.afficher_ajouterBateau)
  .get("/modifier_bateau", ctrlBateaux.afficher_modifierBateau)
  .get("/liste_bateaux", ctrlBateaux.afficher_listeBateaux)
  .post("/ajouter_bateau", ctrlBateaux.executer_form_bateau)
  .post("/delete_ajouter_bateau/:id", ctrlBateaux.delete_fiche_medecin);

routeur
  .get("/ajouter_sauveteur", ctrlSauveteur.afficher_ajouterSauveteur)
  .get("/modifierSauveteur/:id", ctrlSauveteur.afficher_modifierSauveteur)
  .get("/liste_sauveteurs", ctrlSauveteur.afficher_listeSauveteurs)

  .post("/ajouter_sauveteur", ctrlSauveteur.executer_sauveteur);

routeur
  .get("/ajouter_equipe", ctrlEquipe.afficher_ajouter_equipe)
  .get("/liste_equipes", ctrlEquipe.afficher_listeEquipes);

routeur
  .get("/ajouter_sauvetage", ctrlAccueil.afficher_ajouterSauvetage)
  .get("/modifier_sauvetage", ctrlAccueil.afficher_modifierSauvetage)
  .get("/liste_sauvetages", ctrlAccueil.afficher_listeSauvetages);

routeur
  .get("/liste_modeles", ctrlMarqueModele.afficher_liste_modeles)
  .get("/ajouter_modele", ctrlMarqueModele.afficher_ajouter_modele)
  .post("/ajouter_modele", ctrlMarqueModele.executer_model);

routeur
  .get("/liste_marques", ctrlMarqueModele.afficher_liste_marques)
  .get("/ajouter_marque", ctrlMarqueModele.afficher_ajouter_marque)
  .post("/ajouter_marque", ctrlMarqueModele.executer_marque);

routeur.get("/liste_naufrages", ctrlNaufrage.afficher_liste_naufrages);

routeur.get("/liste_victime", ctrlVictimes.afficher_liste_victime);

module.exports = routeur;
