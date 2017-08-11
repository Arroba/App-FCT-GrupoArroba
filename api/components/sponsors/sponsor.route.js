var express = require('express');
var router = express.Router();
var sponsorsController = require('./sponsor.controller.js');

//para aquellas rutas que ocupen un id

router.param('id', function(req, res, next, id){
  req.body.id = id;
  next();
});

router.route('/save_sponsors')
  .post(function(req,res){
    sponsorsController.save(req,res);

  });
router.route('/get_all_sponsors')
  .get(function(req,res){
    sponsorsController.findAll(req,res);
  });

  router.route('/update_sponsor')
  .put(function(req, res){
    sponsorsController.update(req,res);
 	});


module.exports = router;
