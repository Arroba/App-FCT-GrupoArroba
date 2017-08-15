var blaze = require('./blaze.model.js');

module.exports.save = function(req, res){
  var newBlaze = new Blaze({
    nameBlaze: req.body.nameBlaze,
    date1 : req.body.date1,
    time1: req.body.time1,
    time2: req.body.time2,
    date2: req.body.date2,
    place: req.body.place,
    status: req.body.status
  });

  newBlaze.save(function(err){
    if(err){
      res.json({success:false, msg:'No se pudo registrar el fogueo' + err});
    }else{
      res.json({success:true, msg:'Se registró el fogueo correctamente'});
    }
  });
}

module.exports.findAll = function(req,res){
  Blaze.find().then(function(blazes){
    res.send(blazes);
  })
};

module.exports.update = function(req,res){
  Blaze.findByIdAndUpdate(req.body._id, { $set: req.body}, function (err, blazes) {
    if (err){
      res.json({success:true,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }

  });

}