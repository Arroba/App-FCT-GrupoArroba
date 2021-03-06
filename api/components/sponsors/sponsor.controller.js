var Sponsor = require('./sponsor.model.js');

module.exports.save = function(req, res){
  var newSponsor = new Sponsor({
    nameSponsorRep: req.body.nameSponsorRep,
    firstNameSponsorRep : req.body.firstNameSponsorRep,
    lastNameSponsorRep: req.body.lastNameSponsorRep,
    idSponsorRep: req.body.idSponsorRep,
    nameSponsor: req.body.nameSponsor,
    nameSponsorCompany: req.body.nameSponsorCompany,
    sponsorType: req.body.sponsorType,
    sponsorCoinType: req.body.sponsorCoinType,
    sponsorMonetary: req.body.sponsorMonetary,
    sponsorDesc: req.body.sponsorDesc,
    product: req.body.product,
    photo: req.body.photo,
    status: req.body.status
  });

  newSponsor.save(function(err){
    if(err){
      res.json({success:false, msg:'No se pudo registrar el patrocinador' + err});
    }else{
      res.json({success:true, msg:'Se registró el patrocinador correctamente'});
    }
  });
}

module.exports.findAll = function(req,res){
  Sponsor.find().then(function(sponsors){
    res.send(sponsors);
  })
};

module.exports.update = function(req,res){

  Sponsor.findByIdAndUpdate(req.body._id, { $set: req.body}, function (err, sponsor) {
    if (err){
      res.json({success:true,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }

  });

}
