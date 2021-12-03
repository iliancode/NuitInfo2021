var modelEquipe = require('../models/modelsEquipe');
module.exports = {
    
    afficher_ajouter_equipe: function (req, res) {
        res.render('./modifierEquipe')
    },
    
    afficher_listeEquipes:async function (req,res) {
        let donnees = await modelEquipe.recupererEquipe();
        res.render('./liste_equipes', {donnees : donnees})
    }

}