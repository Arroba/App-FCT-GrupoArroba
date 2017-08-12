//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de usuarios
var EventSchema = new mongoose.Schema({
  name: {type: String, required:false},
  place: {type: String, required:false},
  dateStart: {type: Date, required:false},
  dateFinish: {type: Date, required:false},
  academies: {type: String, required:false},
  sponsors: {type: String, required:false},
  status: {type: String, required:false},
  winners: {type: Array, required:false},
  fights: {type: Array, required:false}
});

module.exports = mongoose.model('Event', EventSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
