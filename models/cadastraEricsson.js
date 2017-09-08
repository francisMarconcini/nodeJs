  module.exports = function(mongoose){

  //  console.log('Conexão aberta no mongodb ' + uri);
    var cadEricssonSchema = new mongoose.Schema({
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

  var afetacaoEricsson = mongoose.model('afetacaoEricsson',cadEricssonSchema);
  return afetacaoEricsson;

}
