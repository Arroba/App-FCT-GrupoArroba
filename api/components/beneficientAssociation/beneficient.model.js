//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de usuarios
var BeneficientSchema = new mongoose.Schema({
	personName: [type: String, required: true, minlength:9, maxlength:10],
    surname : String,
    secondSurname: String,
    name: String,
    type: String,
    description: String
});

module.exports = mongoose.model('Beneficient', BeneficientSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural