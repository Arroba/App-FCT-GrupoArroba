(function(){
  angular
    .module('fctApp')
    .service('placeService', placeService);

    function placeService($http){
      var places = [];
      var publicAPI = {
        setPlaces : _setPlaces,
        getPlaces : _getPlaces,
        updatePlace : _updatePlace,
      };
      return publicAPI;

      //Función que envía una dato al localStorage
      function _setPlaces(pPlace){
        return $http.post('http://localhost:3000/api/save_place',pPlace)
      }//cierre función setAcademies

      //funcion que toma los datos del localStorage
      function _getPlaces(){
        return $http.get('http://localhost:3000/api/get_all_places');
      }//cierre de la función getAcademies

      //funcíon que actualiza los datos
      function _updatePlace(pPlace){
        console.log(pPlace);
        return $http.put('http://localhost:3000/api/update_places',pPlace);
      }//cierre función updatedAcademy
    }//cierre función principal del service

})();
