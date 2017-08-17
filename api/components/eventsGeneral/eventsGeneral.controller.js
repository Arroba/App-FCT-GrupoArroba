var EventsGeneral = require('./eventsGeneral.model.js');

module.exports.save = function(req, res){
  var newEventsGeneral = new EventsGeneral({
    name: req.body.name,
    place : req.body.place,
    dateStart: req.body.dateStart,
    dateFinish: req.body.dateFinish,
    academies: req.body.academies,
    categoryAge: req.body.categoryAge,
    categoryWeight: req.body.categoryWeight,
    categoryGender: req.body.categoryGender,
    color: req.body.color,
    sponsors: req.body.sponsors,
    status: req.body.status
  });

  newEventsGeneral.save(function(err){
    if(err){
      res.json({success:false, msg:'No se pudo registrar la academia' + err});
    }else{
      res.json({success:true, msg:'Se registró la academia correctamente'});
    }
  });
}

module.exports.findAll = function(req,res){
  EventsGeneral.find().then(function(eventsGeneral){
    res.send(eventsGeneral);
  })
};


module.exports.update = function(req,res){

  EventsGeneral.findByIdAndUpdate(req.body._id, { $set: req.body}, function (err, eventsGeneral) {
    if (err){
      res.json({success:true,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }

  });

}
