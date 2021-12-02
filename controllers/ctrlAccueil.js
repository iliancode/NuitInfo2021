var modelAccueil = require('../models/modelAccueil');
module.exports = {
    afficher_accueil: function (req, res) {
        res.render('./accueil')
    },
    afficher_ajouterBateau: function (req, res) {
        res.render('./ajouterBateau')
    },
}