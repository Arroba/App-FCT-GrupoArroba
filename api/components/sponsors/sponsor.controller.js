var sponsor = require('./sponsor.model.js');

module.exports.save = function(req, res){
  var newSponsor = new Sponsor({
    nameSponsorRep: req.body.nameSponsorRep,
    firstNameSponsorRep : req.body.firstNameSponsorRep,
    lastNameSponsorRep: req.body.lastNameSponsorRep,
    idSponsorRep: req.body.idSponsorRep,
    nameSponsor: req.body.nameSponsor,
    nameSponsorCompany: req.body.nameSponsorCompany,
    sponsorType: req.body.sponsorType,
    sponsorMonetary: req.body.sponsorMonetary,
    sponsorDesc: req.body.sponsorDesc,
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
