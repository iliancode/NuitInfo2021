var modelVictime = require('../models/modelsVictime');
module.exports = {
    afficher_liste_victime: function (req, res) {
        res.render('./liste_victime')
    }
}