(function(){
  angular
  .module('fctApp')
  .controller('eventsGeneralController', eventsGeneralController);// Declaración del controlador
  eventsGeneralController.$inject = ['eventsGeneralService','$scope','academiesService','sponsorService','placeService'];

  function eventsGeneralController(eventsGeneralService,$scope,academiesService,sponsorService,placeService){

    var vm = this;
    vm.eventsGeneral = "";
    loadEventsGeneral();


    function loadEventsGeneral(){
      eventsGeneralService.getEventsGeneral().then(function (response) {
        vm.eventsGeneral = response.data;
      });

      academiesService.getAcademies().then(function (response) {
        vm.academiesRel = response.data;
      });

      sponsorService.getSponsors().then(function (response) {
        vm.sponsorsRel = response.data;
      });

      placeService.getPlaces().then(function(response){
          vm.placeRel = response.data;
      });

      vm.to = new Date();
    }
    // Función que guarda los datos
    $scope.pagina = 1;
    $scope.siguiente = function() {
      $scope.pagina = 2;
    }
    $scope.anterior = function() {
      $scope.pagina = 1;
    }
    $scope.registro1 = function() {
      $scope.pagina = 1;
    }


    vm.save= function(){// Objeto que obtener
      var newEventGeneral = {
        name: vm.name,
        place: vm.place,
        dateStart: vm.dateStart,
        dateFinish: vm.dateFinish,
        academies: vm.academies,
        color: vm.color,
        sponsors: vm.sponsors,
        status: 'Activo'
      }

      //
      if(vm.eventsGeneral.length == 0){
        eventsGeneralService.setEventsGeneral(newEventGeneral);
        clear();
        loadEventsGeneral();

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
        return;
      }else{
        for(var i = 0; i < vm.eventsGeneral.length; i++){
          if(newEventGeneral.name == vm.eventsGeneral[i].name){
            swal({
              type: 'error',
              title: '¡El nombre del evento ya existe!',
              timer: 3000,
              showConfirmButton: false
            }).then(
              function () {},
              // handling the promise rejection
              function (dismiss) {
                if (dismiss === 'timer') {
                  console.log('El nombre del evento ya existe')
                }
              }
            )
            return;
          }
          else if(newEventGeneral.place == vm.place[i].place){
            swal({
              type: 'error',
              title: '¡El lugar del evento ya existe!',
              timer: 3000,
              showConfirmButton: false
            }).then(
              function () {},
              // handling the promise rejection
              function (dismiss) {
                if (dismiss === 'timer') {
                  console.log('El lugar del evento ya existe')
                }
              }
            )
            return;
          }
          else{
            eventsGeneralService.setEventsGeneral(newEventGeneral).then(function (response) {
              vm.name = null;
              vm.place = null;
              vm.dateStart = null;
              vm.dateFinish = null;
              vm.academies = null;
              vm.color = null;
              vm.sponsors = null;
              loadEventsGeneral();
            });
            clear();
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
            return;
          }
        }
      }
    }// Cierre de la función save.()

    //función que toma la información para modificar
    vm.getInfo = function(pEventGeneral){
      vm.id = pEventGeneral._id;
      vm.name = pEventGeneral.name;
      vm.place = pEventGeneral.place;
      vm.dateStart = new Date(pEventGeneral.dateStart);
      vm.dateFinish = new Date(pEventGeneral.dateFinish);
      vm.academies = pEventGeneral.academies;
      vm.sponsors = pEventGeneral.sponsors
    }//cierrre función info

    //función que cambia boton segun la información para modificar
    vm.hideButton = function(){
      document.querySelector('#actualizar').classList.remove('displayNone');
      document.querySelector('#registrar').classList.add('displayNone');
    }

    //función que modifica los datos
    vm.update = function(){
      document.querySelector('#actualizar').classList.add('displayNone');
      document.querySelector('#registrar').classList.remove('displayNone');
      var newEventGeneral = {
        _id: vm.id,
        name: vm.name,
        place: vm.place,
        dateStart: vm.dateStart,
        dateFinish: vm.dateFinish,
        academies: vm.academies,
        sponsors: vm.sponsors,
        status: 'Activo'
      }
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
      eventsGeneralService.updateEventGeneral(newEventGeneral).then(function(response){
        eventsGeneralService.getEventsGeneral()
        .then(function(response){
          vm.eventsGeneral = response.data;
        })
        .catch(function(err){
          console.log(err);
        })
      });
      loadEventsGeneral();
      clear();
    }//cierre funcion update

    //función par limpiar los inputs
    function clear(){
      vm.name = '';
      vm.place = '';
      vm.dateStart = '';
      vm.dateFinish = '';
      vm.academies = '';
      vm.sponsors = '';
    } //cierre función clear

    //función que cambia el estado a inabilitado
    vm.inactive = function(pEventGeneral){

      pEventGeneral.status = "Inhabilitado";

      eventsGeneralService.updateEventGeneral(pEventGeneral).then(function(response){
      });

    }// Cierre funcion inative

    //función que cambia el estado a activo
    vm.active = function(pEventGeneral){


      pEventGeneral.status = "Activo";

      eventsGeneralService.updateEventGeneral(pEventGeneral).then(function(response){
      });
    }// Cierre de la funcion active


  }// Cierre de la función placeController
})();
