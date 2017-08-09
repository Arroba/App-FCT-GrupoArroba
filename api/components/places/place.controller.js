var place = require('./place.model.js');

module.exports.save = function(req, res){
  var newPlace = new Place({
    namePlace: req.body.namePlace,
    location : req.body.location,
    capacity: req.body.capacity,
    phone: req.body.phone,
    timestart: req.body.timestart,
    timeFinish: req.body.timeFinish,
    nameContact: req.body.nameContact,
    secondName: req.body.secondName,
    address: req.body.address,
    status: req.body.status
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
