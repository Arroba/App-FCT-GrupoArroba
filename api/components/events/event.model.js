//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de usuarios
var EventSchema = new mongoose.Schema({
  name: String,
  place: String,
  dateStart: String,
  dateFinish: String,
  academies: Array,
  sponsors: Array,
  status: String,

  genderComp1: String,
  weightCategoryComp1: String,
  ageCategoryComp1: String,
  // S egunda competición
  genderComp2: String,
  weightCategoryComp2: String,
  ageCategoryComp2: String,
  // Tercera Competición
  genderComp3: String,
  weightCategoryComp3: String,
  ageCategoryComp3: String,
  // Cuarta Competición
  genderComp4: String,
  weightCategoryComp4: String,
  ageCategoryComp4: String,
  winners: Array,
  fights: Array
});

module.exports = mongoose.model('Event', EventSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
