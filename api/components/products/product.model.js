//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de usuarios
var ProductSchema = new mongoose.Schema({
  nameProduct: String,
  brandProduct: String,
  detailProduct: String,
  productType: Array,
  photo: String,
  status: String

});


var UserSchema = new mongoose.Schema({
  firstName:String,
  lastName: String,

  email:{
    type: String,
    unique: true,
    required:true
  },
  password:{
    type: String,
    required:true
  }
});

module.exports = mongoose.model('Product', ProductSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
