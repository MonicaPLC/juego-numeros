const express = require("express");
const app = express();
const port = 8000;

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

const session = require('express-session');
app.use(session({secret: 'miclave'})); 

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// para usar mis rutas

app.use(require("./routes/ruta"))


app.listen(port, () => console.log(`Listening on port: ${port}`));


