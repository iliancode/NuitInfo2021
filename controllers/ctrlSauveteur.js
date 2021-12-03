var modelsSauveteur = require("../models/modelsSauveteur");
module.exports = {
  afficher_ajouterSauveteur: function (req, res) {
    res.render("./ajouterSauveteur");
  },

  executer_sauveteur: function (req, res) {
    let nom = req.body.inputNom;
    let prenom = req.body.inputPrenom;

    modelsSauveteur.creerSauveteur(nom, prenom, function (data) {});
    res.redirect("./liste_sauveteurs");
  },

  afficher_listeSauveteurs: async function (req, res) {
    modelsSauveteur.lireSauveteur(function (data) {
      res.render("./liste_sauveteurs", { donnees: data });
    });
  },

  afficher_modifierSauveteur: function (req, res) {
    let id = req.params.id;
    let nom = req.body.inputNom;
    let prenom = req.body.inputPrenom;
    
    modelsSauveteur.lireUnSauveteur(id,nom, prenom, function (data) {
      console.log(data)
      res.render("./modifierSauveteur", {
        contenu: data,
      });
    });
  },

  modifier_sauveteur: function (req, res) {
    let id = res.params.id;
    let nom = req.body.inputNom;
    let prenom = req.body.inputPrenom;

    modelsSauveteur.modifierSauveteur(nom, prenom, id, function (data) {
      res.redirect("./liste_sauveteurs", { contenu: data });
    });
  },
};
