// Hecho por Fabián Quirós
(function(){
  angular
  .module('fctApp')
  .service('fightsService',fightsService);

  // Inicio de función competitionService
  function fightsService($http){
    var fights = [];
    var publicAPI = {
      setFights : _setFights,
      getFights : _getFights,
      updateWinner : _updateWinner

    }; // Cierre del publicAPI
    return publicAPI;


    // Inicio de la funcion setCompetition, que se encarga de registar los datos en el localStorage

    function _setFights(pFight){
      return $http.post('http://localhost:3000/api/save_event',pFight)
    }//cierre función setAcademies

    // Inicio de la función getCompetition, que se encarga de obtener los datos más actualizados
    function _getFights(){
      return $http.get('http://localhost:3000/api/get_all_events');
    }//cierre de la función getAcademies

    function _updateWinner(pFight){
      return $http.put('http://localhost:3000/api/update_events',pFight);
    }//cierre función updatedAcademy

  }// Fin de función competitionService
})();
