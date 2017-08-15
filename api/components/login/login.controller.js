var User = require('./login.model.js');

module.exports.save = function(req, res){
  var newUser = new User({
    password : req.body.password,
    email: req.body.email,
    type: req.body.type
  });

  newUser.save(function(err){
    if(err){
      res.json({success:false, msg:'No se pudo registrar el usuario' + err});
    }else{
      res.json({success:true, msg:'Se registró correctamente'});
    }
  });
}

module.exports.findAll = function(req,res){
  User.find().then(function(users){
    res.send(users);
  })
};

module.exports.update = function(req,res){

  User.findByIdAndUpdate(req.body._id, { $set: req.body}, function (err, user) {
    if (err){
      res.json({success:true,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }

  });

}