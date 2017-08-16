var express = require('express');
var router = express.Router();
var placeController = require('./place.controller.js');

//para aquellas rutas que ocupen un id

router.param('id', function(req, res, next, id){
	req.body.id = id;
	next();
});

router.route('/save_place')
.post(function(req,res){
	placeController.save(req,res);

});
router.route('/get_all_places')
.get(function(req,res){
	placeController.findAll(req,res);
});

router.route('/update_places')
.put(function(req, res){
	placeController.update(req,res);
});


module.exports = router;