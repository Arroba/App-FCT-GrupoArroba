// Hecho por Fabián Quirós
(function(){
  angular
    .module('fctApp')
    .controller('ticketsController', ticketsController);
    function ticketsController(ticketsService,placeService,eventsGeneralService,$scope){

      var vm = this;

      // Inicio de la función init que es la que se inicializa de primiera
      function init(){
        vm.tickets = ticketsService.getTickets();
        vm.eventsRel = eventsGeneralService.getEvents();
        vm.placeRel = placeService.getPlace();

      }init(); // Cierre de la función init

      $scope.pagina = 1;
        $scope.siguiente = function() {
          $scope.pagina++;
        }

        $scope.anterior = function() {
          $scope.pagina--;
        }
        $scope.registro1 = function() {
          $scope.pagina = 1;
        }

      // funcion que resta los tickets

      vm.ticketsDisp = function(){
        var placeList = placeService.getPlace();
        var ticketsList = ticketsService.getTickets();
        var disponible = 0;

        for (var i = 0; i < ticketsList.length; i++) {
          if (ticketsList[i].place = placeList[i].namePlace) {
            disponible = placeList[i].capacity - ticketsList[i].reservedTickets;
            updateCapacity(disponible);
          }
        }
      }

      function updateCapacity(pdisponible){
        var placeList = placeService.getPlace();
        var ticketsList = ticketsService.getTickets();

        for (var i = 0; i < ticketsList.length; i++) {
          if (ticketsList[i].place = placeList[i].namePlace) {
            placeList[i].capacity = pdisponible;
            localStorage.setItem('lsPlaceList', JSON.stringify(placeList));
          }
        }
      }

      // Inicio de la función save, que se encarga de obtener los datos y enviarlos para ser guardados
      vm.save= function(){
        var newTickets = {
          nameEvent: vm.nameEvent,
          place: vm.place,
          name: vm.name,
          firstName: vm.firstName,
          secondName: vm.secondName,
          email: vm.email,
          reservedTickets: Number(vm.reservedTickets)
        } // Cierre de newFights

        swal({
        type: 'success',
        title: '¡Registro completado!',
        timer: 3000,
        showConfirmButton: false
      }).then(
        function () {},
        // handling the promise rejection
        function (dismiss) {
          if (dismiss === 'timer') {
            console.log('Registro completado')
          }
        }
      )

        ticketsService.setTickets(newTickets);
        init();
        clean();
      } // Cierre de la función save

      // Inicio: de la función getInfo, que se encarga de obtener los datos
      vm.getInfo = function(pTickets){
        vm.nameEvent = pTickets.nameEvent;
        vm.place = pTickets.place;
        vm.name = pTickets.name;
        vm.firstName = pTickets.firstName;
        vm.secondName = pTickets.secondName
        vm.email = pTickets.email;
        vm.reservedTickets = Number(pTickets.reservedTickets);
      } // Cierre de la función getInfo

      vm.hideButton = function(){
        document.querySelector('#actualizar').classList.remove('displayNone');
        document.querySelector('#registrar').classList.add('displayNone');
      }

      // Inicio de la función update, que se encarga de devolver los datos para ser editados
      vm.update = function(){
        document.querySelector('#actualizar').classList.add('displayNone');
        document.querySelector('#registrar').classList.remove('displayNone');
        var ticketsEdit = {
          nameEvent: vm.nameEvent,
          place: vm.place,
          name: vm.name,
          firstName: vm.firstName,
          secondName: vm.secondName,
          email: vm.email,
          reservedTickets: Number(vm.reservedTickets)
        } // Cierre de ticketsEdit

        swal({
         type: 'success',
         title: '¡Información actualizada!',
         timer: 3000,
         showConfirmButton: false
        }).then(
          function () {},
          // handling the promise rejection
          function (dismiss) {
            if (dismiss === 'timer') {
              console.log('Información actualizada')
            }
          }
        )

        ticketsService.updateTicket(ticketsEdit);
        init();
        clean();
      } // Cierre de la función update

      // Inicio de la función clean, que se encarga de limpiar los datos despúes de un registro
      function clean(){
        vm.nameEvent = '';
        vm.place = '';
        vm.name = '';
        vm.firstName = '';
        vm.secondName = '';
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
