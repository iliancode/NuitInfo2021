// inclure les dépendances et middlewares
const express = require('express')

// activer les dépendances
let app = express()
app.set('view engine', 'ejs')
app.use(express.static('views'))

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

app.listen(3000, () => console.log('Le serveur est actif !'))
app.use('/', Routeur = require('./routes/routes'))
