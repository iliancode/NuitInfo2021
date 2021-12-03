var db = require('../config/database');

const creerMarque = (marque) => {
}

async function creerMarque(marque) {
    db.query(`INSERT INTO marques (Marque_nom) VALUES ('${marque}')`,(err,result) => {
        if (err) throw err;
    })
}t

async function creerModele(modele) {
    db.query(`INSERT INTO modeles (Modele_Nom) VALUES ('${modele})`,(err,result) => {
        if (err) throw err;
    })
}

module.exports = {
    creerMarque,
    creerModele
}