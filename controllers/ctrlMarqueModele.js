var modelMarqueModele = require("../models/modelsMarqueModele");
module.exports = {
  afficher_liste_modeles: function (req, res) {
    res.render("./liste_modeles");
  },
  afficher_liste_marques: function (req, res) {
    res.render("./liste_marques");
  },
  afficher_ajouter_marque: function (req, res) {
    res.render("./ajouter_marque");
  },
  afficher_ajouter_modele: function (req, res) {
    res.render("./ajouter_modele");
  },

  executer_model: function (req, res) {
    let nom = req.body.inputNom;

    modelMarqueModele.creerModele(nom, function (data) {

    });
    res.redirect("./liste_modeles");
  },

  executer_marque: function (req, res) {
    let nom = req.body.inputNom;

    modelMarqueModele.creerMarque(nom, function (data) {

    });
    res.redirect("./liste_marques");
  },

};
