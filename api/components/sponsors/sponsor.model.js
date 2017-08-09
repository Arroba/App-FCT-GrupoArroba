//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de usuarios
var SponsorSchema = new mongoose.Schema({
  nameSponsorRep:String,
  firstNameSponsorRep: String,
  lastNameSponsorRep: String,
  idSponsorRep: Number,
  nameSponsor: String,
  nameSponsorCompany: String,
  sponsorType: String,
  sponsorCoinType: String,
  sponsorDesc: String,
  sponsorMonetary: String,
  photo: File,
  status: String

});

module.exports = mongoose.model('Sponsor', SponsorSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
