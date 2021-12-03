var modelNaufrages = require('../models/modelsNaufrages');
module.exports = {
    afficher_liste_naufrages: function (req, res) {
        res.render('./liste_naufrages')
    }
}