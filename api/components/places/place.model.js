//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de usuarios
var PlaceSchema = new mongoose.Schema({
  namePlace:String,
  location: String,
  capacity: String,
  phone: String,
  timestart: Date,
  timeFinish: Date,
  nameContact: String,
  firstName: String,
  secondName: String,
  latitud: String,
  longitud: String,
  status: String

});

module.exports = mongoose.model('Place', PlaceSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
