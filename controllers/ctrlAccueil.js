var modelAccueil = require('../models/modelAccueil');
module.exports = {
    //afficher accueil
    afficher_accueil: function (req, res) {
        res.render('./accueil')
    },

    // afficher formulaires
    afficher_ajouterBateau: function (req, res) {
        res.render('./ajouterBateau')
    },
    afficher_ajouterSauveteur: function (req, res) {
        res.render('./ajouterSauveteur')
    },
    afficher_ajouterEquipe: function (req, res) {
        res.render('./ajouterEquipe')
    },
    afficher_ajouterSauvetage: function (req, res) {
        res.render('./ajouterSauvetage')
    },

    // afficher formulaires modif
    afficher_modifierBateau: function (req, res) {
        res.render('./modifierBateau')
    },
    afficher_modifierSauveteur: function (req, res) {
        res.render('./modifierSauveteur')
    },
    afficher_modifierEquipe: function (req, res) {
        res.render('./modifierEquipe')
    },
    afficher_modifierSauvetage: function (req, res) {
        res.render('./modifierSauvetage')
    },

    //afficher listes
    afficher_listeBateaux: function (req, res) {
        res.render('./listeBateaux')
    },

    afficher_listeSauveteurs: function (req, res) {
        res.render('./listeSauveteurs')
    },

    afficher_listeEquipes: function (req, res) {
        res.render('./listeEquipes')
    },

    afficher_listeSauvetages: function (req, res) {
        res.render('./listeSauvetages')
    },
}