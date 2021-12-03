var db = require("../config/database");

async function creerNaufrage(idVictime,idBateau) {
    db.query(`INSERT INTO naufrages (Naufrage_idVictime,Naufrage_IdBateau) VALUES (${idVictime},${idBateau})`,(err,result) => {
        if (err) throw err;
    })
}

async function lireNaufrage(id) {
    return new Promise((resolve,reject) => {
        db.query(`SELECT * FROM naufrages WHERE Naufrage_id=${id}`,(err,result) => {
            if (err) throw err;
            return resolve(result);
        })
    })
}

async function mettreAJourNaufrage(idVictime,idBateau,id) {
    db.query(`UPDATE naufrages SET Naufrage_idVictime=${idVictime},Naufrage_idBateau=${idBateau} WHERE Naufrage_id=${id}`,(err,result) => {
        if (err) throw err;
    })
}

async function supprimerNaufrage(id) {
    db.query(`DELETE FROM naufrages WHERRE Naufrage_id=${id}`,(err,result) => {
        if (err) throw err;
    })
}

module.exports = {
    creerNaufrage,
    lireNaufrage,
    mettreAJourNaufrage,
    supprimerNaufrage
}