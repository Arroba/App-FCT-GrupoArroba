// Hecho por Fabián Quirós
(function(){
  angular
  .module('fctApp')
  .service('ticketsService',ticketsService);

  // Inicio de función ticketsService
  function ticketsService(){
    var tickets = [];
    var publicAPI = {
      setTickets : _setTickets,
      getTickets : _getTickets,
      updateTicket : _updateTicket,
      updateState : _updateState
    }; // Cierre del publicAPI
    return publicAPI;

    // Inicio de la funcion setTickets, que se encarga de registar los datos en el localStorage
    function _setTickets(pTickets){
      var ticketsList = _getTickets();

      ticketsList.push(pTickets);
      localStorage.setItem('lsTicketsList', JSON.stringify(ticketsList));
    } // Cierre de la función setTickets

    // Inicio de la función getTickets, que se encarga de obtener los datos más actualizados
    function _getTickets(){
      var ticketsList = JSON.parse(localStorage.getItem('lsTicketsList'));
      if(ticketsList == null){
        ticketsList = tickets;
      } // Cierre del if
      return ticketsList;
    } // Cierre de la funcíon getTickets

    // Inicio de la función updateTicket, que se encarga de permitir la edición de datos
    function _updateTicket(pobjTicket){
      var ticketsList = _getTickets();
      for(var i = 0; i < ticketsList.length; i++){
        if(ticketsList[i].name === pobjTicket.name){
          ticketsList[i] = pobjTicket;
        } // Cierre del if
      } // Cierre del ciclo
      localStorage.setItem('lsTicketsList', JSON.stringify(ticketsList));
    }// Fin de la función updateTicket

    //función que actualiza el estado
      function _updateState(pTicketsList){

        localStorage.setItem('lsTicketsList', JSON.stringify(pTicketsList));
      }//cierre función updateState

  }// Fin de función ticketsService
})();
