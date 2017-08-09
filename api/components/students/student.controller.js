var student = require('./student.model.js');

module.exports.save = function(req, res){
  var newStudent = new Student({
    id: req.body.id,
    firstName: req.body.firstName,
    secondName: req.body.secondName,
    surname: req.body.surname,
    secondSurname: req.body.secondSurname,
    gender: req.body.gender,
    date: req.body.date,
    civilStatus: req.body.civilStatus,
    email: req.body.email,
    telephone: req.body.telephone,
    address: req.body.address,
    weight: req.body.weight,
    height: req.body.height,
    ageCategory: req.body.ageCategory,
    weightCategory: req.body.weightCategory,
    grade: req.body.grade,
    academies: req.body.academies,
    teachers: req.body.teachers,
    password: req.body.password,
    photo: req.body.photo,
    userType: req.body.userType,
    status: req.body.name
  });

  newStudent.save(function(err){
    if(err){
      res.json({success:false, msg:'No se pudo registrar el estudiante' + err});
    }else{
      res.json({success:true, msg:'Se registró el estudiante correctamente'});
    }
  });
}

module.exports.findAll = function(req,res){
  Student.find().then(function(students){
    res.send(students);
  })
};
