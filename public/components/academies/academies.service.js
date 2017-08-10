(function(){
  angular
    .module('fctApp')
    .service('academiesService', academiesService);

    function academiesService($http){
      var academies = [];
      var publicAPI = {
        setAcademies : _setAcademies,
        getAcademies : _getAcademies,
        updateAcademy : _updateAcademy,
        updateState: _updateState
      };
      return publicAPI;

      //Función que envía una dato al localStorage
      function _setAcademies(pAcademy){
        return $http.post('http://localhost:3000/api/save_academy',pAcademy)
      }//cierre función setAcademies

      //funcion que toma los datos del localStorage
      function _getAcademies(){
        return $http.get('http://localhost:3000/api/get_all_academies');
      }//cierre de la función getAcademies

      //funcíon que actualiza los datos
      function _updateAcademy(pAcademy){
        console.log(pAcademy);
        return $http.put('http://localhost:3000/api/academies',pAcademy);
      }//cierre función updatedAcademy

      //función que actualiza el estado
      function _updateState(pAcademiesList){

        return $http.put('http://localhost:3000/api/academies',pAcademy);
      }//cierre función updateState

    }//cierre función principal del service

})();
