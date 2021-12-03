var db = require("../config/database");

async function creerParticipe(idSauveteur,idEquipe,debut,fin) {
    let req = `INSERT INTO participent (Participe_idSauveteur,Participe_idEquipe,Participe_dateDebut,Participe_dateFin)`
    req += ` VALUES (${idSauveteur},${idEquipe},'${debut}','${fin}')`
    db.query(req,(err,result) => {
        if (err) throw err;
    })
}

module.exports = {
    creerParticipe
}