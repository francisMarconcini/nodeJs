/*var mongo = require('mongoose'),uri='mongodb://localhost/babyControl';
mongo.connect(uri);

mongoose.connection.on('connected', function () {
  console.log('Conexão aberta no mongodb ' + dbURI);
});

mongoose.connection.on('error',function (err) {
  console.log('Mongodb com erro de conexão: ' + err);
});
*/
exports.lista = function(request,response){
  lista = [{nome: "Arthur"},{nome:"Felipe"}];
  response.render('index',{estudantes:lista});
  //console.log(lista);
  //response.send(lista);
};
