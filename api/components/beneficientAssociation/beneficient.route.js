var express = require('express');
var router = express.Router();
var beneficientController = require('./beneficient.controller.js');

//para aquellas rutas que ocupen un id

router.param('id', function(req, res, next, id){
  req.body.id = id;
  next();
});

router.route('/save_beneficient')
  .post(function(req,res){
    beneficientController.save(req,res);
  });

router.route('/get_all_beneficients')
  .get(function(req,res){
    beneficientController.findAll(req,res);
  });

 router.route('/update_beneficients')
  .put(function(req, res){
    beneficientController.update(req,res);
 	});

//router.route('/update_state_beneficients')
 //.put(function(req, res){
 //   beneficientController.update(req,res);
 //});

module.exports = router;