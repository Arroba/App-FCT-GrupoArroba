//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de usuarios
var StudentSchema = new mongoose.Schema({
  identi : String,
  name: String,
  firstName: String,
  lastName: String,
  gender: String,
  date: Date,
  civilStatus: String,
  email: String,
  telephone: Number,
  address: String,
  weight: Number,
  height: Number,
  grade: String,
  academies: String,
  teachers: String,
  password: String,
  photo: String,
  userType: String,
  status: String

});

module.exports = mongoose.model('Student', StudentSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
