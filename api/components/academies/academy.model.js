//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de usuarios
var AcademySchema = new mongoose.Schema({
  name:String,
  direction: String,
  phone: Number,
  email: Email,
  contact: String,
  status: String
});

module.exports = mongoose.model('Academy', AcademySchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
