var express = require('express');
var router = express.Router();
var productController = require('./product.controller.js');

//para aquellas rutas que ocupen un id

router.param('id', function(req, res, next, id){
  req.body.id = id;
  next();
});

router.route('/save_product')
  .post(function(req,res){
    productController.save(req,res);

  });
router.route('/get_all_products')
  .get(function(req,res){
    productController.findAll(req,res);
  });

 router.route('/update_products')
  .put(function(req, res){
    productController.update(req,res);
 	});

module.exports = router;
