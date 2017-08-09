var product = require('./product.model.js');

module.exports.save = function(req, res){
  var newProduct = new Product({
    nameProduct: req.body.nameProduct,
    brandProduct : req.body.brandProduct,
    detailProduct: req.body.detailProduct,
    productType: req.body.productType,
    photo: req.body.photo,
    status: req.body.status
  });

  newProduct.save(function(err){
    if(err){
      res.json({success:false, msg:'No se pudo registrar el producto' + err});
    }else{
      res.json({success:true, msg:'Se registró el producto correctamente'});
    }
  });
}

module.exports.findAll = function(req,res){
  Product.find().then(function(products){
    res.send(products);
  })
};
