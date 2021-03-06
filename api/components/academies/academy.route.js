var express = require('express');
var router = express.Router();
var academiesController = require('./academies.controller.js');

//para aquellas rutas que ocupen un id

router.param('id', function(req, res, next, id){
  req.body.id = id;
  next();
});

router.route('/save_academy')
  .post(function(req,res){
    academiesController.save(req,res);

  });
router.route('/get_all_academies')
  .get(function(req,res){
    academiesController.findAll(req,res);
  });

 router.route('/update_academies')
  .put(function(req, res){
    academiesController.update(req,res);
 	});

module.exports = router;
