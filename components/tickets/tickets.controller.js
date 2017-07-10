// Hecho por Fabián Quirós
(function(){
  angular
    .module('fctApp')
    .controller('ticketsController', ticketsController);
    function ticketsController(ticketsService,placeService,eventsService){

      var vm = this;

      // Inicio de la función init que es la que se inicializa de primiera
      function init(){
        vm.tickets = ticketsService.getTickets();
        vm.eventsRel = eventsService.getEvents();
        vm.placeRel = placeService.getPlace();

      }init(); // Cierre de la función init

      // Inicio de la función save, que se encarga de obtener los datos y enviarlos para ser guardados
      vm.save= function(){
        var newTickets = {
          nameEvent: vm.nameEvent,
          name: vm.name,
          email: vm.email,
          reservedTickets: Number(vm.reservedTickets)
        } // Cierre de newFights
        ticketsService.setTickets(newTickets);
        init();
        clean();
      } // Cierre de la función save

      // Inicio: de la función getInfo, que se encarga de obtener los datos
      vm.getInfo = function(pTickets){
        vm.nameEvent = pTickets.nameEvent;
        vm.name = pTickets.name;
        vm.email = pTickets.email;
        vm.reservedTickets = Number(pTickets.reservedTickets);
      } // Cierre de la función getInfo

      // Inicio de la función update, que se encarga de devolver los datos para ser editados
      vm.update = function(){
        var ticketsEdit = {
          nameEvent: vm.nameEvent,
          name: vm.name,
          email: vm.email,
          reservedTickets: Number(vm.reservedTickets)
        } // Cierre de ticketsEdit
        ticketsService.updateTicket(ticketsEdit);
        init();
        clean();
      } // Cierre de la función update

      // Inicio de la función clean, que se encarga de limpiar los datos despúes de un registro
      function clean(){
        vm.nameEvent = '';
        vm.name = '';
        vm.email = '';
        vm.reservedTickets = '';
      } // Cierre de la función clean

      //función que reserva entradas extra
      vm.reserve = function(pTickets){
        var ticketsList = ticketsService.getTickets();
          for (var i = 0; i < ticketsList.length; i++) {
            if (ticketsList[i].email == pTickets.email) {
              ticketsList[i].reservedTickets = pTickets.reservedTickets + 1;
            }// Cierre del if
          }// Cierre del ciclo
        ticketsService.updateState(ticketsList);
        init();
      }// Cierre funcion reserve

      //función cancela entradas
      vm.cancel = function(pTickets){
        var ticketsList = ticketsService.getTickets();
          for (var i = 0; i < ticketsList.length; i++) {
            if (ticketsList[i].email  == pTickets.email) {
              ticketsList[i].reservedTickets = pTickets.reservedTickets -1;
            }// Cierre del if
          }// Cierre del ciclo
        ticketsService.updateState(ticketsList);
        init();
      }// Cierre de la funcion cancel

    }// Cierre de la función ticketsController
})();