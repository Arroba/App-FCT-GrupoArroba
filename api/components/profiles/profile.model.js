//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de usuarios
var ProfileSchema = new mongoose.Schema({
  xxxx:String,
 
  status: String

});

module.exports = mongoose.model('Profile', ProfileSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
