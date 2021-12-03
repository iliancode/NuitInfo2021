var db = require("../config/database");

async function creerVictime(nom,prenom) {
    db.query(`INSERT INTO victimes (Victime_Nom,Victime_Prenom) VALUES ('${nom}','${prenom}')`,(err,result) => {
        if (err) throw err;
    })
}

async function lireVictime(id) {
    return new Promise((resolve,reject) => {
        db.query(`SELECT * FROM victimes WHERE Victime_id=${id}`,(err,result) => {
            if (err) throw err;
            return resolve(result);
        })
    })
}

async function mettreAJourVictime(nom,prenom,id) {
    db.query(`UPDATE victimes SET Victime_Nom=${nom},prenom=${prenom} WHERE Victime_id=${id}`,(err,result) => {
        if (err) throw err;
    })
}

async function supprimerVictime(id) {
    db.query(`DELETE FROM victimes WHERE Victime_id=${id}`,(err,result) => {
        if (err) throw err;
    })
}

module.exports = {
    creerVictime,
    lireVictime,
    mettreAJourVictime,
    supprimerVictime
}