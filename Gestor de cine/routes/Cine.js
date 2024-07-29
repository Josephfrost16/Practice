const express = require("express");

const router = express.Router();

const CineController = require("../Controllers/CineController");

router.get('/home',CineController.GetHome );
router.post('/Filtered-series',CineController.FilterByName);

module.exports = router;