var express = require('express');
var router = express.Router();
var studentsController = require('./students.controller.js');

//para aquellas rutas que ocupen un id

router.param('id', function(req, res, next, id){
  req.body.id = id;
  next();
});

router.route('/save_academy')
  .post(function(req,res){
    studentsController.save(req,res);

  });
router.route('/get_all_academies')
  .get(function(req,res){
    studentsController.findAll(req,res);
  });

module.exports = router;
