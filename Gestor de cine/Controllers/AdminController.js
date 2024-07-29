const Serie = require("../models/Serie");
const SerieModel = require("../models/Serie");

const Genero = require("../models/Genero");
const GenerosModel = require("../models/Genero");

exports.GetAddSeries = (req, res, next) => {
  SerieModel.GetAll((series) => {
    GenerosModel.GetAll((generos) => {
        res.render("Admin/add-Series", {
            title: "Add Series",
            series: series,
            hasSeries: series.length > 0,
            generos:generos,
            EditMode: false,
          });
    });
  });
};

exports.PostAddSeries = (req, res, next) => {
  const Nombre = req.body.Nombre;
  const Genero = req.body.Genero;
  const ImgUrl = req.body.ImgUrl;
  const Descripcion = req.body.Descripcion;
  const VidUrl = req.body.VidUrl;
  const serie = new Serie(null, Nombre, Genero, Descripcion, ImgUrl, VidUrl);
  serie.Save();

  res.redirect("/Cine/Home");
};

exports.GetSeriesList = (req, res, next) => {
  SerieModel.GetAll((series) => {
    res.render("Admin/Series-List", {
      title: "Add Series",
      series: series,
      hasSeries: series.length > 0,
      IsList: true,
    });
  });
};

exports.GetSeriesDetails = (req, res, next) => {
  const Id = req.params.serieId;

  SerieModel.GetById(Id, (serie) => {
    res.render("Admin/Series-Details", {
      title: `${serie.Nombre}`,
      serie: serie,
      hasSerie: serie ? true : false,
    });
  });
};

exports.GetEditSerie = (req, res, next) => {
  const Id = req.params.Id;

  SerieModel.GetById(Id, (serie) => {
    GenerosModel.GetAll((generos) => {

    if (!serie) {
      return res.redirect("/Cine/Home");
    }

    res.render("Admin/add-Series", {
      title: `Edit - ${serie.Nombre}`,
      serie: serie,
      generos: generos,
      EditMode: true,
    });
    });
  });
};

exports.PostEditSerie = (req, res, next) => {
  const Id = req.body.Id;
  const Nombre = req.body.Nombre;
  const Genero = req.body.Genero;
  const ImgUrl = req.body.ImgUrl;
  const Descripcion = req.body.Descripcion;
  const VidUrl = req.body.VidUrl;

  const serie = new Serie(Id, Nombre, Genero, Descripcion, ImgUrl, VidUrl);

  serie.Save();
  res.redirect("/Cine/Home");
};
exports.DeleteSerie = (req, res, next) => {
  const Id = req.body.serieId;
  SerieModel.DeleteById(Id);

  res.redirect("/Admin/Series-List");
};

exports.GetAddGeneros = (req, res, next) => {
    GenerosModel.GetAll((generos) => {
      res.render("Admin/add-generos", { title: "Add Generos", generos: generos,EditMode:false });
    });
  };
exports.GetGenerosList = (req, res, next) => {
    GenerosModel.GetAll((generos) => {
      res.render("Admin/Generos-List", { title: "Generos List", generos: generos,hasGeneros: generos.length > 0,IsList:true});
    });
  };
exports.PostAddGeneros = (req, res, next) => {
  const Nombre = req.body.Nombre;
  const genero = new Genero(null, Nombre);
  genero.Save();
  res.redirect("/Admin/Generos-List");
};
exports.DeleteGenero = (req, res, next) =>{
    const Id = req.body.GeneroId;
    GenerosModel.DeleteById(Id);
    res.redirect("/Admin/Generos-List");
};

exports.GetEditGenero = (req, res, next) =>{
    const Id = req.params.Id;
    GenerosModel.GetById(Id, (genero) => {
  
      if (!genero) {
        return res.redirect("/Cine/Home");
      }
      res.render("Admin/add-generos", {
        title: `Edit - ${genero.Nombre}`,
        genero: genero,
        EditMode: true,
      });
      });
  };

exports.PostEditGenero = (req, res, next) =>{
    const Id = req.body.Id;
    const Nombre = req.body.Nombre;
  
    const genero = new Genero(Id, Nombre);
    genero.Save();

    res.redirect("/Admin/Generos-List");
};