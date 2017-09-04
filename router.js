var express = require('express');
var router = express.Router();
listaEstudantes = require('./controllers/Estudantes');
router.get('/', listaEstudantes.lista);

module.exports = router;
