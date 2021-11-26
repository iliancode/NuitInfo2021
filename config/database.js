var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'mysql-nuitinfo.alwaysdata.net',
    user: 'nuitinfo', 
    password: 'nuitinfo2021lab',  
    database: 'nuitinfo_2021' 
});
conn.connect(function (err) {
    if (err) throw err;
    console.log('BDD connecté avec succès !');
});
module.exports = conn;