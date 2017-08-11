// Hecho por Wilken
(function(){
  angular
  .module('fctApp')
  .service('beneficientService', beneficientService);

  // Inicio de función beneficientService
  function beneficientService($http){
    var beneficient = [];
    var publicAPI = {
      setBeneficient : _setBeneficient,
      getBeneficient : _getBeneficient,
      updateBeneficient : _updateBeneficient
    }; // Cierre del publicAPI
    return publicAPI;

    // Inicio de la funcion setPlace, que se encarga de registar los datos en el localStorage
    function _setBeneficient(pBeneficient){
       return $http.post('http://localhost:3000/api/save_beneficient',pBeneficient)
    } // Cierre de la función setPlace

    // Inicio de la función getPlace, que se encarga de obtener los datos más actualizados
    function _getBeneficient(){
      return $http.get('http://localhost:3000/api/get_all_beneficients');
    } // Cierre del if
      
    // Inicio de la función updatePlace, que se encarga de permitir la edición de datos
    function _updateBeneficient(pBeneficientList){
      console.log(pBeneficient);
        return $http.put('http://localhost:3000/api/update_beneficients',pBeneficient);
    }// Fin de la función updatePlace

  }// Fin de función placeService
})();
