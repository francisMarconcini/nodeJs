exports.consulta = function(request,response){
  var mongoose = require('mongoose');
    var modelo = require('../models/cadastraEricsson')(mongoose);
    var uri='mongodb://localhost/afetacao';
    mongoose.Promise = global.Promise;

      mongoose.connect(uri); //- starting a db connection


    var mgc = request.body.mgc;
    var mgw = request.body.mgw;
    var rota = request.body.rota;
    var opc = request.body.opc;
    var dpc = request.body.dpc;
    var snt = request.body.snt;
    var idRota = request.body.idRota;

    var json = { $or:[
      {"mgc":new RegExp('^'+mgc+'$', "i")},
      {"mgw":new RegExp('^'+mgw+'$', "i")},
      {"rota":new RegExp('^'+rota+'$', "i")},
      {"opc":new RegExp('^'+opc+'$', "i")},
      {"dpc":new RegExp('^'+dpc+'$', "i")},
      {"snt":new RegExp('^'+snt+'$', "i")},
      {"idRota":idRota}
    ]
    };

    mongoose.connection.once('open', function () {
      console.log("conexao estabelecida");
      var insercao = modelo.find(json,function(err,resultado){
        if(err)
          console.log("erro durante a consulta");
        else {
          response.render('pesquisa.ejs',{pesquisa:resultado});
          //console.log(resultado);
          mongoose.disconnect();
        }
      });

  });
    mongoose.connection.once('error',function (err) {
      console.log('Mongodb com erro de conexão: ' + err);
      response.end("Falha ao se conectar no banco de dados, tente novamente mais tarde.");
      return err;
    });

    mongoose.connection.once('disconnect',function (err) {
      console.log(err);
      console.log('desconectado!');
    });
}
