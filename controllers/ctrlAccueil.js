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
    aficher_ajouterSauveuteur: function (req, res) {
        res.render('./ajouterSauveuteur')
    },
    afficher_ajouterSauvetage: function (req, res) {
        res.render('./ajouterSauvetage')
    },

    // afficher formulaires modif
    afficher_modifierBateau: function (req, res) {
        res.render('./modifierBateau')
    },
    aficher_modifierSauveuteur: function (req, res) {
        res.render('./modifierSauveuteur')
    },
    afficher_modifierSauvetage: function (req, res) {
        res.render('./modifierSauvetage')
    },

    //afficher listes
    afficher_listeBateaux: function (req, res) {
        res.render('./listeBateaux')
    },

    afficher_listeSauveuteurs: function (req, res) {
        res.render('./listeSauveuteurs')
    },

    afficher_listeSauvetages: function (req, res) {
        res.render('./listeSauvetages')
    },
}