var modelsSauveteur = require('../models/modelsSauveteur');
module.exports = {
    afficher_ajouterSauveteur: function (req, res) {
        res.render('./ajouterSauveteur')
    },
    afficher_modifierSauveteur: function (req, res) {
        res.render('./modifierSauveteur')
    },
    
    afficher_listeSauveteurs:async function (req,res) {
        let donnees = await modelsSauveteur.recupererSauveteur();
        res.render('./liste_sauveteurs', {donnees : donnees})
    }
}