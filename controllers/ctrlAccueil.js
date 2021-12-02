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

    //afficher listes
    afficher_listeBateaux: function (req, res) {
        res.render('./listeBateaux')
    },

    afficher_listeSauveuteurs: function (req, res) {
        res.render('./listeSauveuteur')
    },

    afficher_listeSauvetages: function (req, res) {
        res.render('./listeSauvetages')
    },
}