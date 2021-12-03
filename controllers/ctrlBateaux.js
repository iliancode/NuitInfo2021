let modelBateaux = require('../models/modelsBateaux');
let modelMarqueModele = require('../models/modelsMarqueModele')
module.exports = {
    afficher_ajouterBateau: async function(req,res){
        res.render('./ajouterBateau')
    },
    executer_form_bateau: async function (req, res) {
        console.log(req.body.inputNewMarque)
        if (req.body.selectMarque == "new" && req.body.selectModele != "new" ){
            await modelMarqueModele.creerMarque(req.body.inputNewMarque)
            let idMarque = await modelMarqueModele.recupererDernierIdMarque()
            idMarque= idMarque[0].Marque_id
            idMarque=JSON.parse(JSON.stringify(idMarque))

            await modelBateaux.creerBateau(req.body.inputNom, idMarque,req.body.selectModele, req.body.inputType )
        }
        if (req.body.selectModele == "new" && req.body.selectMarque != "new" ){
            await modelMarqueModele.creerModele(req.body.inputNewModel)
            let idModele = await modelMarqueModele.recupererDernierIdModele()
            idModele= idModele[0].Modele_id
            idModele=JSON.parse(JSON.stringify(idModele))


            await modelBateaux.creerBateau(req.body.inputNom,req.body.selectMarque, idModele, req.body.inputType )

        }
        if (req.body.selectModele == "new" && req.body.selectMarque == "new" ){
            await modelMarqueModele.creerMarque(req.body.inputNewMarque)
            let idMarque = await modelMarqueModele.recupererDernierIdMarque()
            idMarque= idMarque[0].Marque_id
            idMarque=JSON.parse(JSON.stringify(idMarque))


            await modelMarqueModele.creerModele(req.body.inputNewModel)
            let idModele = await modelMarqueModele.recupererDernierIdModele()
            console.log(idModele)

            idModele= idModele[0].Modele_id
            idModele=JSON.parse(JSON.stringify(idModele))
            

            await modelBateaux.creerBateau(req.body.inputNom,idMarque, idModele, req.body.inputType )
        }
        else {
            await modelBateaux.creerBateau(req.body.inputNom,req.body.selectMarque, req.body.selectModele, req.body.inputType )

        }
        res.redirect('/')
        
    },
    afficher_modifierBateau: function (req, res) {
        res.render('./modifierBateau')
    },
    afficher_listeBateaux: function (req, res) {
        res.render('./listeBateaux')
    }
}