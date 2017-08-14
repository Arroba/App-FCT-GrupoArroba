var express = require('express');
var router = express.Router();
var eventsController = require('./event.controller.js');

//para aquellas rutas que ocupen un id

router.param('id', function(req, res, next, id){
  req.body.id = id;
  next();
});

router.route('/save_event')
  .post(function(req,res){
    eventsController.save(req,res);

  });
router.route('/get_all_events')
  .get(function(req,res){
    eventsController.findAll(req,res);
  });

router.route('/create_fight')
	.post(function(req,res){
    eventsController.save(req,res);
  });

router.route('/update_events')
	.put(function(req,res){
    eventsController.update(req,res);
  });	
module.exports = router;