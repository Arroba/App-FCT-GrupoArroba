var Event = require('./event.model.js');

module.exports.save = function(req, res){
  var newEvent = new Event({
    name: req.body.name,
    place : req.body.place,
    dateStart: req.body.dateStart,
    dateFinish: req.body.dateFinish,
    academies: req.body.academies,
    sponsors: req.body.sponsors,
    status: req.body.status,

    genderComp1: req.body.genderComp1,
    weightCategoryComp1: req.body.weightCategoryComp1,
    ageCategoryComp1: req.body.ageCategoryComp1,
    // Segunda competición
    genderComp2: req.body.genderComp2,
    weightCategoryComp2: req.body.weightCategoryComp2,
    ageCategoryComp2: req.body.ageCategoryComp2,
    // Tercera Competición
    genderComp3: req.body.genderComp3,
    weightCategoryComp3: req.body.weightCategoryComp3,
    ageCategoryComp3: req.body.ageCategoryComp3,
    // Cuarta Competición
    genderComp4: req.body.genderComp4,
    weightCategoryComp4: req.body.weightCategoryComp4,
    ageCategoryComp4: req.body.ageCategoryComp4,
    fights: [],
    winners: []
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

module.exports.update = function(req,res){

  // Event.findByIdAndUpdate(req.body._id, { $push: { fights: req.body.fights }}, function (err, event) {
  //   if (err){
  //     res.json({success:true,msg:'No se ha actualizado.' + handleError(err)});

  //   } else{
  //     res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
  //   }

  // });

Event.update({_id: req.body._id}, {$push: {fights: req.body.fights}}, {upsert:true}, function(err){
        if(err){
                console.log(err);
        }else{
                console.log("Successfully added");
        }
});

}


module.exports.updateWinners = function(req,res){

  // Event.findByIdAndUpdate(req.body._id, { $push: { fights: req.body.fights }}, function (err, event) {
  //   if (err){
  //     res.json({success:true,msg:'No se ha actualizado.' + handleError(err)});

  //   } else{
  //     res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
  //   }

  // });

Event.update({_id: req.body._id}, {$push: {winners: req.body.winners}}, {upsert:true}, function(err){
        if(err){
                console.log(err);
        }else{
                console.log("Successfully added");
        }
});

}