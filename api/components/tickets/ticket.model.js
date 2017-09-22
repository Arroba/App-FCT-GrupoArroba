//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de usuarios
var TicketSchema = new mongoose.Schema({
  nameEvent: String,
  place: String,
  name: String,
  firstName: String,
  secondName: Date,
  email: String,
  reservedTickets: String,
  status: String

});

module.exports = mongoose.model('Ticket', TicketSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
