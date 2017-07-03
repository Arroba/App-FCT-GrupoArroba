// Hecho por Fabián Quirós
(function(){
  angular
  .module('fctApp')
  .service('placeService', placeService);

  // Inicio de función placeService
  function placeService(){
    var place = [];
    var publicAPI = {
      setPlace : _setPlace,
      getPlace : _getPlace,
      updatePlace : _updatePlace,
    }; // Cierre del publicAPI
    return publicAPI;

    // Inicio de la funcion setPlace, que se encarga de registar los datos en el localStorage
    function _setPlace(pPlace){
      var placeList = _getPlace();
      placeList.push(pPlace);
      localStorage.setItem('lsPlaceList', JSON.stringify(placeList));
    } // Cierre de la función setPlace

    // Inicio de la función getPlace, que se encarga de obtener los datos más actualizados
    function _getPlace(){
      var placeList = JSON.parse(localStorage.getItem('lsPlaceList'));
      if(placeList == null){
        placeList = place;
      } // Cierre del if
      return placeList;
    } // Cierre de la funcíon getPlace

    // Inicio de la función updatePlace, que se encarga de permitir la edición de datos
    function _updatePlace(pobjplace){
      var placeList = _getPlace();
      for(var i = 0; i < placeList.length; i++){
        if(placeList[i].namePlace == pobjplace.namePlace){
          placeList[i] = pobjplace;
        } // Cierre del if
      } // Cierre del ciclo
      localStorage.setItem('lsPlaceList', JSON.stringify(placeList));
    }// Fin de la función updatePlace

  }// Fin de función placeService
})();
