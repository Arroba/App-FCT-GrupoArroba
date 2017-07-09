(function(){
  angular
    .module('fctApp')
    .controller('eventsController', eventsController);// Declaración del controlador

    function eventsController(eventsService, academiesService, sponsorService, placeService){

      var vm = this;

      function init(){
        vm.events = eventsService.getEvents();
        vm.academiesRel = academiesService.getAcademies();
        vm.sponsorsRel = sponsorService.getSponsors();
        vm.placeRel = placeService.getPlace();
        vm.to = new Date();
      }init();
      // Función que guarda los datos
      vm.save= function(){// Objeto que obtener
        var newEvent = {
          name: vm.name,
          place: vm.place,
          dateStart: vm.dateStart,
          dateFinish: vm.dateFinish,
          academies: vm.academies,
          categoryAge: vm.categoryAge,
          categoryWeight: vm.categoryWeight,
          categoryGender: vm.categoryGender,
          color: vm.color,
          sponsors: vm.sponsors,
          status: 'Activo'

        }
        eventsService.setEvents(newEvent);
        init();
        clear();
      }//cierre de la función save

      //función que toma la información para modificar
      vm.getInfo = function(pEvent){
        vm.name = pEvent.name;
        vm.place = pEvent.place;
        vm.dateStart = new Date(pEvent.dateStart);
        vm.dateFinish = new Date(pEvent.dateFinish);
        vm.academies = pEvent.academies;
        vm.categoryAge = pEvent.categoryAge;
        vm.categoryWeight = pEvent.categoryWeight;
        vm.categoryGender = pEvent.categoryGender;
        vm.color = pEvent.color;
        vm.sponsors = pEvent.sponsors
      }//cierrre función info

      //función que modifica los datos
      vm.update = function(){
        var updated = {
          name: vm.name,
          place: vm.place,
          dateStart: vm.dateStart,
          dateFinish: vm.dateFinish,
          academies: vm.academies,
          categoryAge: vm.categoryAge,
          categoryWeight: vm.categoryWeight,
          categoryGender: vm.categoryGender,
          color: vm.color,
          sponsors: vm.sponsors,
          status: 'Activo'
        }
        eventsService.updateEvent(updated);
        init();
        clear();
      }//cierre funcion update

      //función par limpiar los inputs
      function clear(){
        vm.name = '';
        vm.place = '';
        vm.dateStart = '';
        vm.dateFinish = '';
        vm.academies = '';
        vm.categoryAge = '';
        vm.categoryWeight = '';
        vm.categoryGender = '';
        vm.color = '';
        vm.sponsors = '';
      } //cierre función clear

      //función que cambia el estado a inabilitado
      vm.inactive = function(pEvent){
        var eventsList = eventsService.getEvents();
          for (var i = 0; i < eventsList.length; i++) {
            if (eventsList[i].name == pEvent.name) {
              eventsList[i].status = 'inhabilitado';
              console.log(eventsList[i].status)
            }// Cierre del if
          }// Cierre del ciclo
        eventsService.updateState(eventsList);
        init();
      }// Cierre funcion inative

      //función que cambia el estado a activo
      vm.active = function(pEvent){
        var eventsList = eventsService.getEvents();
          for (var i = 0; i < eventsList.length; i++) {
            if (eventsList[i].name == pEvent.name) {
              eventsList[i].status = 'Activo';
              console.log(eventsList[i].status)
            }// Cierre del if
          }// Cierre del ciclo
        eventsService.updateState(eventsList);
        init();
      }// Cierre de la funcion active

    }//Cierre de la función para el controlador

})();//Cierre de la función principal
