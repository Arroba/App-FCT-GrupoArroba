(function(){
  angular
    .module('fctApp')
    .service('eventsService', eventsService);

    function eventsService(){
      var academies = [];
      var publicAPI = {
        setEvents : _setEvents,
        getEvents : _getEvents,
        updateEvent : _updateEvent,
        updateState: _updateState
      };
      return publicAPI;

      //Función que envía una dato al localStorage
      function _setEvents(pEvent){
        var eventsList = _getEvents();

        eventsList.push(pEvent);
        localStorage.setItem('lsEventsList', JSON.stringify(eventsList));
      }//cierre función setEvents

      //funcion que toma los datos del localStorage
      function _getEvents(){
        var eventsList = JSON.parse(localStorage.getItem('lsEventsList'));
        if(eventsList == null){
          eventsList = academies;
        }
        return eventsList;
      }//cierre de la función getEvents

      //funcíon que actualiza los datos
      function _updateEvent(pUpdatedEvent){
        var eventsList = _getEvents();
        for(var i = 0; i < eventsList.length; i++){
          if(eventsList[i].name == pUpdatedEvent.name){
            eventsList[i] = pUpdatedEvent;
          }
        }
        localStorage.setItem('lsEventsList', JSON.stringify(eventsList));
      }//cierre función updatedEvent

      //función que actualiza el estado
      function _updateState(pEventsList){

        localStorage.setItem('lsEventsList', JSON.stringify(pEventsList));
      }//cierre función updateState

    }//cierre función principal del service

})();