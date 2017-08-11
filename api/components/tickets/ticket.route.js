var express = require('express');
var router = express.Router();
var ticketsController = require('./tickets.controller.js');

//para aquellas rutas que ocupen un id

router.param('id', function(req, res, next, id){
  req.body.id = id;
  next();
});

router.route('/save_ticket')
  .post(function(req,res){
    ticketsController.save(req,res);
  });

router.route('/get_all_tickets')
  .get(function(req,res){
    ticketsController.findAll(req,res);
  });

router.route('/update_tickets')
  .put(function(req, res){
    ticketsController.update(req,res);
 	});

router.route('/update_capacity_tickets')
 .put(function(req, res){
   ticketsController.update(req,res);
});

module.exports = router;