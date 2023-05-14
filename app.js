// inclure les dépendances et middlewares
const express = require("express");

// activer les dépendances
let app = express();
app.use(express.urlencoded());

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static("views"));

app.use("/images", express.static(__dirname + "/assets/images")); // redirect CSS bootstrap
app.use("/js", express.static(__dirname + "/assets/js")); // redirect bootstrap JS
app.use("/css", express.static(__dirname + "/assets/css")); // redirect CSS bootstrap

app.listen(3000, () => console.log("Le serveur est actif !"));
app.use("/", (Routeur = require("./routes/routes")));
