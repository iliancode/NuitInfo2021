var modelAccueil = require('../models/modelAccueil');
module.exports = {
    //afficher accueil
    afficher_accueil: function (req, res) {
        res.render('./accueil')
    },

    // afficher formulaires
   
    
    
    afficher_ajouterSauvetage: function (req, res) {
        res.render('./ajouterSauvetage')
    },

    // afficher formulaires modif
    
    
    
    afficher_modifierSauvetage: function (req, res) {
        res.render('./modifierSauvetage')
    },

    //afficher listes
    

    

    afficher_listeSauvetages: function (req, res) {
        res.render('./listeSauvetages')
    },
}