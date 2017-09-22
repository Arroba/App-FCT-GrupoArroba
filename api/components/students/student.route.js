var express = require('express');
var router = express.Router();
var studentsController = require('./student.controller.js');

//para aquellas rutas que ocupen un id

router.param('id', function(req, res, next, id){
  req.body.id = id;
  next();
});

router.route('/save_students')
  .post(function(req,res){
    studentsController.save(req,res);

  });
router.route('/get_all_students')
  .get(function(req,res){
    studentsController.findAll(req,res);
  });

router.route('/update_student')
  .put(function(req, res){
  studentsController.update(req,res);
});

module.exports = router;
