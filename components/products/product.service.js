(function(){
  angular
  .module('fctApp')
  .service('productService', productService);

  function productService(){//Función oculta datos al público
    var products = [];
    var publicAPI = {
      setProducts : _setProducts,
      getProducts : _getProducts,
      updateProduct : _updateProduct,
      updateState: _updateState
    };
    return publicAPI;//Función oculta datos al público

    function _setProducts(pProduct){//Función envía datos al LS
      var productsList = _getProducts();

      productsList.push(pProduct);
      localStorage.setItem('lsProductsList', JSON.stringify(productsList));
    }//Fin función envía datos al LS

    function _getProducts(){//funcion que toma datos del LS
      var productsList = JSON.parse(localStorage.getItem('lsProductsList'));
      if(productsList == null){
        productsList = products;
      }
      return productsList;
    }//Fin funcion que toma datos del LS

    function _updateProduct(pobjProduct){//Funcíon que actualiza patrocinador
      var productsList = _getProducts();
      for(var i = 0; i < productsList.length; i++){
        if(productsList[i].nameProduct == pobjProduct.nameProduct){
          productsList[i] = pobjProduct;
        }
      }
      localStorage.setItem('lsProductsList', JSON.stringify(productsList));
    }//Fin funcíon que actualiza producto

    //Función actualiza estado del producto
      function _updateState(pProductsList){
        localStorage.setItem('lsProductsList', JSON.stringify(pProductsList));
      }//Fin función actualiza estado del producto
  }//Fin función oculta datos al público
})();
