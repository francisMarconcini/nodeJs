var express = require('express');

var router = express.Router();

router.get('/', function(request,response){
    response.render('index',{title:'aplicacao em nodeJs com express'});
});

module.exports = router;
