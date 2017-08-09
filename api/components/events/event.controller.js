var event = require('./event.model.js');

module.exports.save = function(req, res){
  var newEvent = new Event({
    name: req.body.name,
    place : req.body.place,
    dateStart: req.body.dateStart,
    dateFinish: req.body.dateFinish,
    academies: req.body.academies,
    sponsors: req.body.sponsors,
    status: req.body.status
  });

  newEvent.save(function(err){
    if(err){
      res.json({success:false, msg:'No se pudo registrar el evento' + err});
    }else{
      res.json({success:true, msg:'Se registró el evento correctamente'});
    }
  });
}

module.exports.findAll = function(req,res){
  Event.find().then(function(events){
    res.send(events);
  })
};