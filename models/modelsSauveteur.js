var db = require("../config/database");

async function creerSauveteur(nom,prenom) {
    db.query(`INSERT INTO sauveteurs (Sauveteur_Nom,Sauveteur_Prenom) VALUES ('${nom}','${prenom}')`,(err,result) => {
        if (err) throw err;
    })
}

async function modifierSauveteur(nom,prenom,id) {
    db.query(`UPDATE sauveteures SET nom=${nom},prenom=${prenom} WHERE Sauveteur_id=${id}`,(err,result) => {
        if (err) throw err;
    })
}

async function supprimerSauveteur(id) {
    db.query(`DELETE FROM sauveteurs WHERE Sauveteur_id=${id}`,(err,result) => {
        if (err) throw err;
    })
}
async function recupererSauveteur() {
    return new Promise((resolve,reject) => {
        db.query(`SELECT * FROM sauveteurs`),(err,result) => {
            return resolve(result)
        }
    })
} 


module.exports = {
    creerSauveteur,
    modifierSauveteur,
    supprimerSauveteur,
    recupererSauveteur,

    lireSauveteur: function (callback) {
        var sql = 'SELECT * FROM sauveteurs';
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
            return callback(data);
        });
    },
}