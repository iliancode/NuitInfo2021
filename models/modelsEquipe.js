var db = require("../config/database");

async function creerEquipe(idSauveteur,idBateau,nom) {
    db.query(`INSERT INTO equipes (Equipe_idSauveteur,Equipe_idBateau,Equipe_nom) VALUES (${idSauveteur},${idBateau},'${nom}')`,(err,result) => {
        if (err) throw err;
    })
}

async function lireEquipe(id) {
    return new Promise((resolve,reject) => {
        db.query(`SELECT * FROM equipes WHERE Equipe_id=${id}`,(err,result) => {
            if (err) throw err;
            return resolve(result);
        })
    })
}

async function modifierEquipe(idSauveteur,idBateau,nom,id) {
    let req = `UPDATE equipes SET Equipe_idSauveteur=${idSauveteur},Equipe_idBateau=${idBateau}`
    req += `,nom=${nom} WHERE Equipe_id=${id}`
    db.query(req,(err,result) => {
        if (err) throw err;
    })
}

async function supprimerEquipe(id) {
    db.query(`DELETE FROM equipes WHERE Equipe_id=${id}`,(err,result) => {
        if (err) throw err;
    })
}

module.exports = {
    creerEquipe,
    lireEquipe,
    modifierquipe,
    supprimerEquipe
}