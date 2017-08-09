var fight = require('./fight.model.js');

module.exports.save = function(req, res){
  var newFight = new Fight({
   //AGREGAR LO QUE FALTE
    status: req.body.status
  });

  newFight.save(function(err){
    if(err){
      res.json({success:false, msg:'No se pudo registrar el torneo' + err});
    }else{
      res.json({success:true, msg:'Se registró el torneo correctamente'});
    }
  });
}

module.exports.findAll = function(req,res){
  Fight.find().then(function(fights){
    res.send(fights);
  })
};