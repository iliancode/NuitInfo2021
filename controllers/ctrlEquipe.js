var modelEquipe = require('../models/modelsEquipe');
module.exports = {
    afficher_ajouterEquipe: function (req, res) {
        res.render('./ajouterEquipe')
    },
    afficher_modifierEquipe: function (req, res) {
        res.render('./modifierEquipe')
    },
    
    afficher_listeEquipes: function (req, res) {
        res.render('./listeEquipes')
    },

}