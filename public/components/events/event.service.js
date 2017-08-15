(function(){
  angular
    .module('fctApp')
    .service('eventsService', eventsService);

    function eventsService($http){
      var academies = [];
      var publicAPI = {
        setEvents : _setEvents,
        getEvents : _getEvents,
        updateEvent: _updateEvent,
        updateWinner : _updateWinner
      };
      return publicAPI;

      //Función que envía una dato al localStorage
      function _setEvents(pEvent){
        return $http.post('http://localhost:3000/api/save_event',pEvent)
      }//cierre función setEvents

      //funcion que toma los datos del localStorage
      function _getEvents(){
        return $http.get('http://localhost:3000/api/get_all_events');
      }//cierre de la función getEvents

      function _updateEvent(pEvent){
        return $http.put('http://localhost:3000/api/update_events',pEvent);
      }//cierre función updatedAcademy


      function _updateWinner(pEvent){
        return $http.put('http://localhost:3000/api/update_eventsWinners',pEvent);
      }//cierre función updatedAcademy


    }//cierre función principal del service

})();