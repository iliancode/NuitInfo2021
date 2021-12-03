var db = require('../config/database');

const creerBateau = (nom,marque,modele,type,contructeur) => {

    db.query(`INSERT INTO bateaux (Bat_marque,Bat_nom,Bat_modele,Bat_type,)`)
}