const express = require('express');
const router  = express.Router();
const movieController = require('../controller/movie-controller');


//rota localhost:3000/api/movies
router.get("/",movieController.getUltimos);

//rota localhost:3000/api/movies/bemAvaliados
router.get("/bemAvaliados",movieController.getBemAvaliados)

//rota localhost:3000/api/movies/Id
router.get("/:movieId",movieController.getByID);

//rota localhost:3000/api/movies/video/Id
router.get("/video/:movieId",movieController.getVideo);

module.exports = router;

