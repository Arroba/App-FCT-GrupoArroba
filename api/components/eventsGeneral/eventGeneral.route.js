var express = require('express');
var router = express.Router();
var eventsGeneralController = require('./eventsGeneral.controller.js');

//para aquellas rutas que ocupen un id

router.param('id', function(req, res, next, id){
  req.body.id = id;
  next();
});

router.route('/save_eventGeneral')
  .post(function(req,res){
    eventsGeneralController.save(req,res);

  });
router.route('/get_all_eventsGeneral')
  .get(function(req,res){
    eventsGeneralController.findAll(req,res);
  });

  router.route('/update_eventsGeneral')
   .put(function(req, res){
     eventsGeneralController.update(req,res);
  	});

module.exports = router;
