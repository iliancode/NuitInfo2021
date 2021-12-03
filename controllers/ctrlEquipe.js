var modelEquipe = require('../models/modelsEquipe');
module.exports = {
    
    afficher_modifierEquipe: function (req, res) {
        res.render('./modifierEquipe')
    },
    
    afficher_listeEquipes: function (req, res) {
        res.render('./listeEquipes')
    },

}