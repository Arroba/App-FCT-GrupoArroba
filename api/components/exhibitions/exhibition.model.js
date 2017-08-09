//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de usuarios
var ExbitionSchema = new mongoose.Schema({
  nameExhibition:String,
  Date: Date,
  time: Date,
  place: String,
  guestsExhibition: String,
  photo: File,
  status: String

});

module.exports = mongoose.model('Exhibition', ExbitionSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
