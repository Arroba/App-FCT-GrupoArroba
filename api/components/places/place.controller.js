var Place = require('./place.model.js');

module.exports.save = function(req, res){
  var newPlace = new Place({
    namePlace: req.body.namePlace,
    location : req.body.location,
    capacity: req.body.capacity,
    phone: req.body.phone,
    timestart: req.body.timestart,
    timeFinish: req.body.timeFinish,
    nameContact: req.body.nameContact,
    firstName: req.body.firstName,
    secondName: req.body.secondName,
  });

  newPlace.save(function(err){
    if(err){
      res.json({success:false, msg:'No se pudo registrar el lugar' + err});
    }else{
      res.json({success:true, msg:'Se registró el lugar correctamente'});
    }
  });
}

module.exports.findAll = function(req,res){
  Place.find().then(function(places){
    res.send(places);
  })
};

module.exports.update = function(req,res){

  Place.findByIdAndUpdate(req.body._id, { $set: req.body}, function (err, place) {
    if (err){
      res.json({success:true,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }

  });

}