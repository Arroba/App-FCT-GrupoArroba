// Hecho por Fabián Quirós
(function(){
  angular
  .module('fctApp')
  .service('ticketsService',ticketsService);

  // Inicio de función ticketsService
  function ticketsService($http){
    var tickets = [];
    var publicAPI = {
      setTickets : _setTickets,
      getTickets : _getTickets,
      updateTicket : _updateTicket,
      updateCapacity : _updateCapacity
    }; // Cierre del publicAPI
    return publicAPI;

    // Inicio de la funcion setTickets, que se encarga de registar los datos en el localStorage
    function _setTickets(pTicket){
      return $http.post('http://localhost:3000/api/save_ticket',pTicket)
    } // Cierre de la función setTickets

    // Inicio de la función getTickets, que se encarga de obtener los datos más actualizados
    function _getTickets(){
      return $http.get('http://localhost:3000/api/get_all_tickets');
    } // Cierre de la funcíon getTickets

    // Inicio de la función updateTicket, que se encarga de permitir la edición de datos
    function _updateTicket(pTicket){
      console.log(pTicket);
      return $http.put('http://localhost:3000/api/update_tickets',pTicket);
    }// Fin de la función updateTicket

    //función que actualiza el estado
      function _updateCapacity(pdisponible){
        console.log(pPlaceList);
        return $http.put('http://localhost:3000/api/update_capacity_tickets',pPlaceList);
      }//cierre función update

  }// Fin de función ticketsService
})();
