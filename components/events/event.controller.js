(function(){
  angular
    .module('fctApp')
    .controller('eventsController', eventsController);// Declaración del controlador

    function eventsController(eventsService,$scope, academiesService, sponsorService, placeService){

      var vm = this;

      function init(){
        vm.events = eventsService.getEvents();
        vm.academiesRel = academiesService.getAcademies();
        vm.sponsorsRel = sponsorService.getSponsors();
        vm.placeRel = placeService.getPlace();
        vm.to = new Date();
      }init();

      // funciones encargadas de pasar página
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



      // Función que guarda los datos
      vm.save= function(){// Objeto que obtener
        var newEvent = {
          // Datos generales del evento
          name: vm.name,
          place: vm.place,
          dateStart: vm.dateStart,
          dateFinish: vm.dateFinish,
          academies: vm.academies,
          sponsors: vm.sponsors,
          status: 'Activo',
          // Fin datos generales del evento
          // Datos de las competiciones
          // Primera competición
          genderComp1: vm.genderComp1,
          weightCategoryComp1: vm.weightCategoryComp1,
          ageCategoryComp1: vm.ageCategoryComp1,
          // Segunda competición
          genderComp2: vm.genderComp2,
          weightCategoryComp2: vm.weightCategoryComp2,
          ageCategoryComp2: vm.ageCategoryComp2,
          // Tercera Competición
          genderComp3: vm.genderComp3,
          weightCategoryComp3: vm.weightCategoryComp3,
          ageCategoryComp3: vm.ageCategoryComp3,
          // Cuarta Competición
          genderComp4: vm.genderComp4,
          weightCategoryComp4: vm.weightCategoryComp4,
          ageCategoryComp4: vm.ageCategoryComp4
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
        vm.color = pEvent.color
        vm.sponsors = pEvent.sponsors
        // Datos de las competiciones
        // Primera competición
        vm.genderComp1 = pEvent.genderComp1,
        vm.weightCategoryComp1 = pEvent.weightCategoryComp1,
        vm.ageCategoryComp1 = pEvent.ageCategoryComp1,
        // Segunda Competición
        vm.genderComp2 = pEvent.genderComp2,
        vm.weightCategoryComp2 = pEvent.weightCategoryComp2,
        vm.ageCategoryComp2 = pEvent.ageCategoryComp2,
        // Tercera Competición
        vm.genderComp3 = pEvent.genderComp3,
        vm.weightCategoryComp3 = pEvent.weightCategoryComp3,
        vm.ageCategoryComp3 = pEvent.ageCategoryComp3,
        // Cuarta Competición
        vm.genderComp4 = pEvent.genderComp4,
        vm.weightCategoryComp4 = pEvent.weightCategoryComp4,
        vm.ageCategoryComp4 = pEvent.ageCategoryComp4
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
          status: 'Activo',
          // Datos de las competiciones
          // Primera competición
          genderComp1: vm.genderComp1,
          weightCategoryComp1: vm.weightCategoryComp1,
          ageCategoryComp1: vm.ageCategoryComp1,
          // Segunda competición
          genderComp2: vm.genderComp2,
          weightCategoryComp2: vm.weightCategoryComp2,
          ageCategoryComp2: vm.ageCategoryComp2,
          // Tercera Competición
          genderComp3: vm.genderComp3,
          weightCategoryComp3: vm.weightCategoryComp3,
          ageCategoryComp3: vm.ageCategoryComp3,
          // Cuarta Competición
          genderComp4: vm.genderComp4,
          weightCategoryComp4: vm.weightCategoryComp4,
          ageCategoryComp4: vm.ageCategoryComp4
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
        vm.color = '';
        vm.sponsors = '';
        // Competición Uno
        vm.genderComp1='';
        vm.weightCategoryComp1='';
        vm.ageCategoryComp1='';
        // fin datos primera competición
        // datos de la segunda competición
        vm.genderComp2='';
        vm.weightCategoryComp2='';
        vm.ageCategoryComp2='';
        // fin datos segunda competición
        // datos de la tercera competición
        vm.genderComp3='';
        vm.weightCategoryComp3='';
        vm.ageCategoryComp3='';
        // fin datos cuarta competición
        vm.genderComp4='';
        vm.weightCategoryComp4='';
        vm.ageCategoryComp4='';
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
