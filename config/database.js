var mysql = require("mysql");
var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nuit_info",
});
conn.connect(function (err) {
  if (err) throw err;
  console.log("BDD connecté avec succès !");
});
module.exports = conn;
