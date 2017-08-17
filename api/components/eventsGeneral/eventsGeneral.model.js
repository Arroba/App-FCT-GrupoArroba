//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de usuarios
var EventGeneralSchema = new mongoose.Schema({
  name:String,
  place: String,
  dateStart: Date,
  dateFinish: Date,
  academies: Array,
  sponsors: Array,
  status: String

});

module.exports = mongoose.model('EventGeneral', EventGeneralSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
