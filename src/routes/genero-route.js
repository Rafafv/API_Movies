const express = require('express');
const router  = express.Router();
const generoController = require('../controller/genero-controller');

//rota localhost:3000/api/generos
router.get("/", generoController.get);

module.exports = router;
