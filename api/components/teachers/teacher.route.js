var express = require('express');
var router = express.Router();
var teachersController = require('./teacher.controller.js');

//para aquellas rutas que ocupen un id

router.param('id', function(req, res, next, id){
  req.body.id = id;
  next();
});

router.route('/save_teachers')
  .post(function(req,res){
    teachersController.save(req,res);

  });
router.route('/get_all_teachers')
  .get(function(req,res){
    teachersController.findAll(req,res);
  });

router.route('/update_teacher')
 .put(function(req, res){
   teachersController.update(req,res);
	});

module.exports = router;
