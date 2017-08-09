// Hecho por Wilken
(function(){
  angular
  .module('fctApp')
  .service('beneficientService', beneficientService);

  // Inicio de función beneficientService
  function beneficientService(){
    var beneficient = [];
    var publicAPI = {
      setBeneficient : _setBeneficient,
      getBeneficient : _getBeneficient,
      updateBeneficient : _updateBeneficient,
    }; // Cierre del publicAPI
    return publicAPI;

    // Inicio de la funcion setPlace, que se encarga de registar los datos en el localStorage
    function _setBeneficient(pBeneficient){
      var beneficientList = _getBeneficient();
      beneficientList.push(pBeneficient);
      localStorage.setItem('lsBeneficientList', JSON.stringify(beneficientList));
    } // Cierre de la función setPlace

    // Inicio de la función getPlace, que se encarga de obtener los datos más actualizados
    function _getBeneficient(){
      var beneficientList = JSON.parse(localStorage.getItem('lsBeneficientList'));
      if(beneficientList == null){
        beneficientList = beneficient;
      } // Cierre del if
      return beneficientList;
    } // Cierre de la funcíon getPlace

    // Inicio de la función updatePlace, que se encarga de permitir la edición de datos
    function _updateBeneficient(pobjbeneficient){
      var beneficientList = _getBeneficient();
      for(var i = 0; i < beneficientList.length; i++){
        if(beneficientList[i].name == pobjbeneficient.name){  //ojo aqui
          beneficientList[i] = pobjbeneficient;
        } // Cierre del if
      } // Cierre del ciclo
      localStorage.setItem('lsBeneficientList', JSON.stringify(beneficientList));
    }// Fin de la función updatePlace

  }// Fin de función placeService
})();
