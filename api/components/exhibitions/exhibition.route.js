var express = require('express');
var router = express.Router();
var exhibitionsController = require('./exhibition.controller.js');

//para aquellas rutas que ocupen un id

router.param('id', function(req, res, next, id){
  req.body.id = id;
  next();
});

router.route('/save_exhibitions')
  .post(function(req,res){
    exhibitionsController.save(req,res);

  });
router.route('/get_all_exhibitions')
  .get(function(req,res){
    exhibitionsController.findAll(req,res);
  });

  router.route('/update_exhibitions')
  .put(function(req, res){
    sponsorsController.update(req,res);
  });

module.exports = router;


