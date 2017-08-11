var Academy = require('./academy.model.js');

module.exports.save = function(req, res){
  var newAcademy = new Academy({
    name: req.body.name,
    direction : req.body.direction,
    phone: req.body.phone,
    email: req.body.email,
    contact: req.body.contact,
    status: req.body.status
  });

  newAcademy.save(function(err){
    if(err){
      res.json({success:false, msg:'No se pudo registrar la academia' + err});
    }else{
      res.json({success:true, msg:'Se registró la academia correctamente'});
    }
  });
}

module.exports.findAll = function(req,res){
  Academy.find().then(function(academies){
    res.send(academies);
  })
};

module.exports.update = function(req,res){

  Academy.findByIdAndUpdate(req.body._id, { $set: req.body}, function (err, academy) {
    if (err){
      res.json({success:true,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }

  });

}
