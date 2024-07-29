const express = require('express');
const path = require('path');

const app = express();

const {engine} = require('express-handlebars');

// Controllers
const AdminRouter = require("./routes/Admin");
const CineRouter = require("./routes/Cine");

const comparisonHelper = require("./util/helpers/comparison");
const ErrorController = require("./Controllers/ErrorController");

app.use(express.static(path.join(__dirname,'public')));

app.engine(
    "hbs",
    engine({
    layoutsDir: "views/layout/",
    defaultLayout:"Home-layout",
    extname: "hbs",
    helpers:{
        comparison: comparisonHelper.comparison
    }
    })
);

app.set("view engine", "hbs");
app.set("views","views");

app.use(express.urlencoded({extended: false}));

app.use("/Cine",CineRouter);
app.use("/Admin",AdminRouter);
// app.use("/",ErrorController.Get404);

app.listen(5002);