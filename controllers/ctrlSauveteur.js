var modelsSauveteur = require("../models/modelsSauveteur");
module.exports = {
  afficher_ajouterSauveteur: function (req, res) {
    res.render("./ajouterSauveteur");
  },
  afficher_modifierSauveteur: function (req, res) {
    res.render("./modifierSauveteur");
  },
  executer_sauveteur: function (req, res) {
    let nom = req.body.inputNom;
    let prenom = req.body.inputPrenom;

    modelsSauveteur.creerSauveteur(nom, prenom, function (data) {});
    res.redirect("./liste_sauveteurs");
  },

  afficher_listeSauveteurs: async function (req, res) {
    modelsSauveteur.lireSauveteur(function (data) {
        res.render('./liste_sauveteurs', { donnees: data});
    });
  },
};
