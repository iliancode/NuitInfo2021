var db = require('../config/database');

async function creerMarque(marque) {
    db.query(`INSERT INTO marques (Marque_nom) VALUES ('${marque}')`,(err,result) => {
        if (err) throw err;
    })
}

async function lireMarque(id) {
    return new Promise ((resolve,reject) => {
        db.query(`SELECT * FROM marques WHERE Marque_id=${id}`,(err,result) => {
            if (err) throw err;
            return resolve(result);
        })
    })
}

async function modifierMarque(idMarque,marque) {
    db.query(`UPDATE marques SET Marque_Nom=${marque} WHERE Marque_Id=${idMarque}`,(err,result) => {
        if (err) throw err;
    })
}

async function SupprimerMarque(id) {
    db.query(`DELETE FROM marques WHERE Marque_id=${id}`,(err,result) => {
        if (err) throw err;
    })
}

async function recupererDernierIdMarque() {
    return new Promise((resolve,reject) => {
        db.query(`SELECT Marque_id FROM marques ORDER BY Marque_id DESC`,(err,result) => {
            if (err) throw err;
            return resolve(result)
        })
    })
}

async function creerModele(modele) {
    db.query(`INSERT INTO modeles (Modele_Nom) VALUES ('${modele}')`,(err,result) => {
        if (err) throw err;
    })
}

async function lireModele(id) {
    return new Promise ((resolve,reject) => {
        db.query(`SELECT * FROM modele WHERE Modele_id=${id}`,(err,result) => {
            if (err) throw err;
            return resolve(result);
        })
    })
}

async function modifierModele(idModele,modele) {
    db.query(`UPDATE modeles SET Modele_Nom=${modele} WHERE Modele_Id=${idModele}`,(err,result) => {
        if (err) throw err;
    })
}

async function SupprimerModele(id) {
    db.query(`DELETE FROM modeles WHERE Modele_id=${id}`,(err,result) => {
        if (err) throw err;
    })
}
async function recupererDernierIdModele() {
    return new Promise((resolve,reject) => {
        db.query(`SELECT Modele_id FROM modeles ORDER BY Modele_id DESC`,(err,result) => {
            if (err) throw err;
            return resolve(result)
        })
    })
}

async function recupererMarques() {
    return new Promise((resolve,reject) => {
        db.query(`SELECT * FROM marques`,(err,result) => {
            if (err) throw err;
            return resolve(result)
        })
    })
}

async function recupererModele() {
    return new Promise((resolve,reject) => {
        db.query(`SELECT * FROM modeles`,(err,result) => {
            if (err) throw err;
            return resolve(result)
        })
    })
}
module.exports = {
    creerMarque,
    lireMarque,
    modifierMarque,
    SupprimerMarque,
    recupererDernierIdMarque,
    creerModele,
    lireModele,
    modifierModele,
    SupprimerModele,
    recupererDernierIdModele,
    recupererMarques,
    recupererModele


}