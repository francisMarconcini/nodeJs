function modeloCadastroEricsson(){
  var mongo = require('mongoose');
  var uri='mongodb://localhost/afetacao';
  mongo.connect(uri);

  mongo.connection.once('open', function () {
  //  console.log('Conexão aberta no mongodb ' + uri);
    var Schema = mongo.Schema;
    var cadEricssonSchema = new Schema({
      mgc: String,
      mgw: String,
      rota: String,
      opc: String,
      dpc: String,
      snt: String,
      device:String,
      klm: String,
      cic: String,
      placaMgw: String,
      dgoPlaca: String,
      placaProt: String,
      dgoProt: String,
      idRota: Number,
      observacao: [String],
      dataInsercao: Date,
      dataAtualizacao: [Date],
      usuario:[String]
    });

  var afetacaoEricsson = mongo.model('afetacaoEricsson',cadEricssonSchema);
  return afetacaoEricsson;
  });

  mongo.connection.on('error',function (err) {
    console.log('Mongodb com erro de conexão: ' + err);
    response.end("Falha ao se conectar no banco de dados, tente novamente mais tarde.");
  });
}

module.exports = modeloCadastroEricsson;
