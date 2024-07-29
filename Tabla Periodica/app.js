const express = require('express');
const app = express();
const ExpressHBS = require("express-handlebars");

const path = require('path');

const clientRouter = require("./routes/client");

const comparisonHelper = require("./helpers/hbs/comparison");


app.use(express.urlencoded({extended:false}));

// Carpeta publica
app.use(express.static(path.join(__dirname, 'public')));

// Configuracion del engine
app.engine("hbs",ExpressHBS({helpers:{
    comparison: comparisonHelper.comparison,
    getGrupo: comparisonHelper.getGrupo
}}));

app.set("view engine", "hbs");
app.set("views","views");

// middlewares:
app.use(clientRouter);

app.listen(5000);

