var Teacher = require('./teacher.model.js');

module.exports.save = function(req, res){
  var newTeacher = new Teacher({
    name: req.body.name,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    identi: req.body.identi,
    date: req.body.date,
    grade: req.body.grade,
    email: req.body.email,
    telephone: req.body.telephone,
    civilStatus: req.body.civilStatus,
    gender: req.body.gender,
    password: req.body.password,
    academies: req.body.academies,
    photo: req.body.photo,
    userType: req.body.userType,
    status: req.body.status
  });

  newTeacher.save(function(err){
    if(err){
      res.json({success:false, msg:'No se pudo registrar el estudiante' + err});
    }else{
      res.json({success:true, msg:'Se registró el estudiante correctamente'});
    }
  });
}

module.exports.findAll = function(req,res){
  Teacher.find().then(function(teachers){
    res.send(teachers);
  })
};

module.exports.update = function(req,res){

  Teacher.findByIdAndUpdate(req.body._id, { $set: req.body}, function (err, teacher) {
    if (err){
      res.json({success:true,msg:'No se ha actualizado.'+ handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }

  });

}
