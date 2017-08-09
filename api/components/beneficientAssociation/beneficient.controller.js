var beneficient = require('./beneficient.model.js');

module.exports.save = function(req, res){
  var newBeneficient = new Beneficient({
    personName: req.body.personName,
    surname : req.body.surname,
    secondSurname: req.body.secondSurname,
    name: req.body.name,
    type: req.body.type,
    description: req.body.description
  });

  newBeneficient.save(function(err){
    if(err){
      res.json({success:false, msg:'No se pudo registrar la asociación' + err});
    }else{
      res.json({success:true, msg:'Se registró la asociación correctamente'});
    }
  });
}

module.exports.findAll = function(req,res){
  Beneficient.find().then(function(beneficients){
    res.send(beneficients);
  })
};