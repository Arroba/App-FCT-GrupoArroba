(function(){
  angular
  .module('fctApp')
  .service('eventsGeneralService', eventsGeneralService);

  function eventsGeneralService($http){
    var eventsGeneral = [];
    var publicAPI = {
      setEventsGeneral : _setEventsGeneral,
      getEventsGeneral : _getEventsGeneral,
      updateEventGeneral : _updateEventGeneral
    };
    return publicAPI;

    //Función que envía una dato al localStorage
    function _setEventsGeneral(pEventGeneral){
      return $http.post('http://localhost:3000/api/save_eventGeneral',pEventGeneral)
    }//cierre función setAcademies

    //funcion que toma los datos del localStorage
    function _getEventsGeneral(){
      return $http.get('http://localhost:3000/api/get_all_eventsGeneral');
    }//cierre de la función getAcademies

    //funcíon que actualiza los datos
    function _updateEventGeneral(pEventGeneral){
      console.log(pEventGeneral);
      return $http.put('http://localhost:3000/api/update_eventsGeneral',pEventGeneral);
    }//cierre función updatedAcademy
  }//cierre función principal del service

})();
