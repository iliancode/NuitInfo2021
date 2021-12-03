var db = require("../config/database");
/*
async function creerSauvetage(idEquipe,nbNaufrage,idNaufrage,date,moyens,longitude,latitude,lienArticle) {
    let req = `INSERT INTO sauvetages (Sauvetage_idEquipe,Sauvetage_nbNaufrage,Sauvetage_idNaufrage,`
    req += `Sauvetage_date,Sauvetage_moyens,Sauvetage_moyens,Sauvetage_longitude,Sauvetage_latitude,Sauvetage_lienArticle`
    req += `) VALUES (${idEquipe},${nbNaufrage},${idNaufrage},'${date}','${moyens}',${longitude},${lagitude},`
    req += `Sauvetage_lienArticle)`
    db.query(req,(err,result) => {
        if (err) throw err;
    })
}

async function lireSauvetage(id) {
    return new Promise((resolve,reject) => {
        db.query(`SELECT * FROM sauvetages WHERE Suavetage_id`,(err,result) => {
            if (err) throw err;
            return resolve(result);
        })
    })
}

async function modifierSauvetage(idEquipe,nbNaufrage,idNaufrage,date,moyens,longitude,latitude,lienArticle,id) {
    let req = `UPDATE sauvetages SET Sauvetage_idEquipe=${idEquipe},`
    req += `Sauvetage_nbNaufrage=${nbNaufrage},`
    req += `Sauvetage_idNaufrage=${idNaufrage},`
    req += `Sauvetage_date=${date},`
    req += `Sauvetage_moyens=${moyens},`
    req += `Sauvetage_longitude=${longitude},`
    req += `Sauvetage_latitude=${latitude},`
    req += `Suavetage_lienArticle=${lienArticle}`
    req += `WHERE Sauvetage_id=${id}`
    db.query(req,(err,result) => {
        if (err) throw err;
    })
}

async function supprimerSauvetage(id) {
    db.query(`DELETE FROM sauvetages WHERE Sauvetage_id=${id}`,(err,result) => {
        if (err) throw err;
    })
}
*/
async function recupererSauvetage() {
    return new Promise ((resolve,reject) => {
        db.query(`SELECT * FROM sauvetages,equipes,naufrages WHERE Sauvetages_idEquipe = Equipe_id AND Sauvetages_idNaufrage = Naufrage_id`,(err,result) => {
            if (err) throw err;
            return resolve(result)
        })
    })
}
module.exports = {
    //creerSauvetage,
   // lireSauvetage,
   /// modifierSauvetage,
    //supprimerSauvetage
    recupererSauvetage
}