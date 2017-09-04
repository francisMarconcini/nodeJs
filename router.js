var express = require('express');
var router = express.Router();
afetacaoEricsson = require('./controllers/afetacaoEricsson');

router.get('/',function(request,response){
  response.render('index');
});
router.post('/afetacaoEricssonCadastrar',function(request,response){
  console.log('xoxota');
});

module.exports = router;
