const express = require("express");

const router = express.Router();

const AdminController = require("../Controllers/AdminController");
 
router.get('/add-Series',AdminController.GetAddSeries);
router.get('/Add-generos',AdminController.GetAddGeneros);
router.get('/Series-Details/:serieId',AdminController.GetSeriesDetails);
router.get('/Series-List',AdminController.GetSeriesList);
router.get('/edit-Serie/:Id',AdminController.GetEditSerie);
router.get('/Generos-List',AdminController.GetGenerosList);
router.get('/edit-generos/:Id',AdminController.GetEditGenero);

router.post('/Add-generos',AdminController.PostAddGeneros);
router.post('/add-Series',AdminController.PostAddSeries);
router.post('/Delete-Serie',AdminController.DeleteSerie);
router.post('/edit-Serie',AdminController.PostEditSerie);
router.post('/edit-generos',AdminController.PostEditGenero);
router.post('/Add-generos',AdminController.PostAddGeneros);
router.post('/Delete-Genero',AdminController.DeleteGenero);
module.exports = router;
