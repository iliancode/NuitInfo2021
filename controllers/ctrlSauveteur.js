var modelSauveuteur = require('../models/modelsSauveteur');
module.exports = {
    afficher_ajouterSauveteur: function (req, res) {
        res.render('./ajouterSauveteur')
    },
    afficher_modifierSauveteur: function (req, res) {
        res.render('./modifierSauveteur')
    },
    afficher_listeSauveteurs: function (req, res) {
        res.render('./listeSauveteurs')
    }
}