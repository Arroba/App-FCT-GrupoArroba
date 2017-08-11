(function(){
  angular
  .module('fctApp')
  .service('productService', productService);

  function productService($http){//Función oculta datos al público
    var products = [];
    var publicAPI = {
      setProducts : _setProducts,
      getProducts : _getProducts,
      updateProduct : _updateProduct,
      updateState: _updateState
    };
    return publicAPI;//Función oculta datos al público

    function _setProducts(pProduct){//Función envía datos al LS
      return $http.post('http://localhost:3000/api/save_product',pProduct);
      
    }//Fin función envía datos al LS

    function _getProducts(){//funcion que toma datos del LS
      return $http.get('http://localhost:3000/api/get_all_products');
      
    }//Fin funcion que toma datos del LS

    function _updateProduct(pProduct){//Funcíon que actualiza patrocinador
      console.log(pProduct);
        return $http.put('http://localhost:3000/api/update_products',pProduct);
    }//Fin funcíon que actualiza producto

    //Función actualiza estado del producto
      function _updateState(pProductsList){
        return $http.put('http://localhost:3000/api/products',pProductsList);
      }//Fin función actualiza estado del producto
  }//Fin función oculta datos al público
})();
