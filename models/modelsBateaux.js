var db = require("../config/database");

async function creerBateau(nom, idMarque, idModele, type, constructeur) {
  let req = `INSERT INTO bateaux (Bateau_Nom,Bateau_idMarque,Bateau_idModele,Bateau_Type)`;
  req += ` VALUES ('${nom}',${idMarque},${idModele},'${type}')`;
  db.query(req, (err, result) => {
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
    let req = `UPDATE bateaux SET Bateau_Nom=${nom},`
    req += `Bateau_Modele=${modele},`
    req += `Bateau_Marque=${marque} `
    req += `WHERE Bateau_id=${id}`
    db.query(req,(err,result) => {
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
