exports.cadastra = function(request,response){

  var insertMongo = require('../models/cadastraEricsson');

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
  var insercao = new insertMongo();
  var ins = insercao(json);
  ins.save(function(data){
  response.redirect('/');
  mongo.connection.close();
});
}
