exports.cadastra = function(request,response){
var mongoose = require('mongoose');
  var insertMongo = require('../models/cadastraEricsson')(mongoose);
  var mongo = require('mongoose');
  var uri='mongodb://localhost/afetacao';
  mongoose.connect(uri);

  var mgc = request.body.mgc;
  var mgw = request.body.mgw;
  var rota = request.body.rota;
  var opc = request.body.opc;
  var dpc = request.body.dpc;
  var snt = request.body.snt;
  var device = request.body.device;
  var klm = request.body.klm;
  var cic = request.body.cic;
  var placaMgw = request.body.placaMgw;
  var dgoPlaca = request.body.dgoPlaca;
  var placaProt = request.body.placaProt;
  var dgoProt = request.body.dgoProt;
  var idRota = request.body.idRota;
  var observacao = request.body.observacao;

  var json = {
    "mgc":mgc,
    "mgw":mgw,
    "rota":rota,
    "opc":opc,
    "dpc":dpc,
    "snt":snt,
    "device":device,
    "klm":klm,
    "cic":cic,
    "placaMgw":placaMgw,
    "dgoPlaca":dgoPlaca,
    "placaProt":placaProt,
    "dgoProt":dgoProt,
    "idRota":idRota,
    "observacao":observacao,
    "dataInsercao": new Date(),
    "dataAtualizacao": new Date(),
    "usuario":"Francis de Melo Marconcini"
  };

  mongoose.connection.once('open', function () {
    var insercao = new insertMongo(json);
    insercao.save(function(data) {
    response.redirect('/');
  });
  });

  mongoose.connection.on('error',function (err) {
    console.log('Mongodb com erro de conexão: ' + err);
    response.end("Falha ao se conectar no banco de dados, tente novamente mais tarde.");
    return err;
  });
}
