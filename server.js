var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'bootstrap/')));

//utiliza router [arquivo]
app.use(require('./router'));
app.listen(1337,function(){
  console.log('Escutando na porta 1337');
});
