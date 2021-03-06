//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de usuarios
var TeacherSchema = new mongoose.Schema({
  name: String,
  firstName: String,
  lastName: String,
  identi: String,
  date: Date,
  grade: String,
  email: String,
  telephone: Number,
  civilStatus: String,
  gender: String,
  password: String,
  academies: Array,
  photo: String,
  userType: String,
  status: String

});

module.exports = mongoose.model('Teacher', TeacherSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
