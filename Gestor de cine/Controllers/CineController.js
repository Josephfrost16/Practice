const SerieModel = require("../models/Serie");

exports.GetHome = (req, res, next) => {
  SerieModel.GetAll((series) => {
    res.render("Cine/Home", { title: "Home", series: series,hasSeries: series.length > 0});
  });
};

exports.FilterByName = (req, res, next) => {
  const busqueda = req.body.busqueda;

  SerieModel.Filter(busqueda,(Filtrados)=>{
    res.render("Cine/Home", { title: "Filtrado", series: Filtrados, hasSeries: Filtrados.length > 0});
  });
};