var modelBateaux = require('../models/modelsBateaux');
module.exports = {
    afficher_ajouterBateau: function (req, res) {
        res.render('./ajouterBateau')
    },
    afficher_modifierBateau: function (req, res) {
        res.render('./modifierBateau')
    },
    afficher_listeBateaux: function (req, res) {
        res.render('./listeBateaux')
    }
}