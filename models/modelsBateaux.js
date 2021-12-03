var db = require("../config/database");

async function creerBateau(nom, idMarque, idModele, type, constructeur) {
  let requete = `INSERT INTO bateaux (Bateau_Nom,Bateau_idMarque,Bateau_idModele,Bateau_Type)`;
  requete += ` VALUES ('${nom}',${idMarque},${idModele},'${type}')`;
  db.query(requete, (err, result) => {
    if (err) throw err;
  });
}

async function lireBateau(id) {
    return new Promise((resolve,reject) => {
        db.query(`SELECT * FROM bateaux WHERE Bateau_id=${id}`,(err,result) => {
            if (err) throw err;
            return resolve(result);
        })
    })
}

async function MettreAJourBateau(nom,modele,marque,id) {
    let requete = `UPDATE bateaux SET Bateau_Nom=${nom},`
    requete += `Bateau_Modele=${modele},`
    requete += `Bateau_Marque=${marque} `
    requete += `WHERE Bateau_id=${id}`
    db.query(requete,(err,result) => {
        if (err) throw err;
    })
}

async function SupprimerBateau(id) {
    db.query(`DELETE FROM bateaux WHERE Bateau_id=${id}`,(err,result) => {
        if (err) throw err;
    })
}

module.exports = {
    creerBateau,
    lireBateau,
    MettreAJourBateau,
    SupprimerBateau
};
