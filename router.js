var express = require('express');
var router = express.Router();
afetacaoEricsson = require('./controllers/afetacaoEricsson');

router.get('/',function(request,response){
  response.render('index');
});
router.post('/afetacaoEricssonCadastrar',afetacaoEricsson.cadastra);

module.exports = router;
