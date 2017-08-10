var Exhibition = require('./exhibition.model.js');

module.exports.save = function(req, res){
  var newExhibition = new Exhibition({
    nameExhibition: req.body.nameExhibition,
    date: req.body.date,
    time: req.body.time,
    place: req.body.place,
    guestsExhibition: req.body.guestsExhibition,
    status: req.body.status
  });

  Exhibition.save(function(err){
    if(err){
      res.json({success:false, msg:'No se pudo registrar la exhibition' + err});
    }else{
      res.json({success:true, msg:'Se registró la exhibition correctamente'});
    }
  });
}

module.exports.findAll = function(req,res){
  Exhibition.find().then(function(exhibitions){
    res.send(exhibitions);
  })
};
