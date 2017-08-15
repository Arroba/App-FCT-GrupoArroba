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

  newExhibition.save(function(err){
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

module.exports.update = function(req,res){
  Exhibition.findByIdAndUpdate(req.body._id, { $set: req.body}, function (err, exhibitions) {
    if (err){
      res.json({success:true,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }

  });

}



