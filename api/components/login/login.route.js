var express = require('express');
var router = express.Router();
var loginController = require('./login.controller.js');

//para aquellas rutas que ocupen un id

router.param('id', function(req, res, next, id){
  req.body.id = id;
  next();
});

router.route('/save_users')
  .post(function(req,res){
    loginController.save(req,res);

  });
router.route('/get_all_teachers')
  .get(function(req,res){
    loginController.findAll(req,res);
  });

module.exports = router;