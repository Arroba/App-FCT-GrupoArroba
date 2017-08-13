(function(){
  angular
    .module('fctApp')
    .controller('exhibitionController', exhibitionController);// Declaración del controlador
    exhibitionController.$inject = ['exhibitionService','$scope'];

    function exhibitionController(exhibitionService,$scope){

      var vm = this;
      vm.exhibitions = "";
      loadExhibitions();

      function loadExhibitions(){
        exhibitionService.getExhibitions().then(function (response) {
            vm.exhibitions = response.data;
          });
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
        var newExhibition = {
        nameExhibition: vm.nameExhibition,
        date: vm.date,
        time: vm.time,
        place: vm.place,
        guestsExhibition: vm.guestsExhibition,
        status: 'Activo',
      }

        //
        if(vm.exhibitions.length == 0){
          exhibitionService.setExhibitions(newExhibition);
          clear();
          loadExhibitions();

          swal({
          type: 'success',
          title: '¡Registro completado!',
          timer: 3000,
          showConfirmButton: false
        })
          return;
        }else{
          for(var i = 0; i < vm.exhibitions.length; i++){
            if(newExhibition.nameExhibition == vm.exhibitions[i].nameExhibition){
                swal({
               type: 'error',
               title: '¡El nombre de la exhibición ya existe!',
               timer: 3000,
               showConfirmButton: false
             }).then(
                function () {},
                // handling the promise rejection
                function (dismiss) {
                  if (dismiss === 'timer') {
                    console.log('El nombre de la exhibición ya existe')
                  }
                }
              )
              return;
            }

            else{
              exhibitionService.setExhibitions(newExhibition).then(function (response) {
              vm.nameExhibition = null;
              vm.date = null;
              vm.time = null;
              vm.place = null;
              vm.guestsExhibition = null;
              vm.status = null;
              loadExhibitions();
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
      vm.getInfo = function(pExhibition){
        vm.id = pExhibition._id;
        vm.nameExhibition = pExhibition.nameExhibition;
        vm.date = pExhibition.date;
        vm.time = pExhibition.time;
        vm.place = pExhibition.place;
        vm.guestsExhibition = pExhibition.guestsExhibition;
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
        var newExhibition = {
          _id : vm.id,
          nameExhibition : vm.nameExhibition,
          date : vm.date,
          time : vm.time,
          place : vm.place,
          guestsExhibition : vm.guestsExhibition,
          status : 'Activo'
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
        exhibitionService.updateExhibition(newExhibition).then(function(response){
          exhibitionService.getExhibitions()
            .then(function(response){
              vm.exhibitions = response.data;
            })
            .catch(function(err){
              console.log(err);
            })
         });
        loadExhibitions();
        clear();
      }//cierre funcion update

      //función par limpiar los inputs PREGUNTAR
      function clear(){
        vm.nameExhibition = '';
        vm.date = '';
        vm.time = '';
        vm.place = '';
        vm.guestsExhibition = '';
      } //cierre función clear

      //función que cambia el estado a inabilitado
      vm.inactive = function(pExhibition){
        var exhibitionsList = exhibitionService.getExhibitions();
          for (var i = 0; i < exhibitionsList.length; i++) {
            if (exhibitionsList[i].nameExhibition == pExhibition.nameExhibition) {
              exhibitionsList[i].status = 'inhabilitado';
              console.log(exhibitionsList[i].status)
            }// Cierre del if
          }// Cierre del ciclo
        academiesService.updateState(exhibitionsList);
        loadExhibitions();
      }// Cierre funcion inative

      //función que cambia el estado a activo
      vm.active = function(pExhibition){
        var exhibitionsList = exhibitionService.getExhibitions();
          for (var i = 0; i < exhibitionsList.length; i++) {
            if (exhibitionsList[i].nameExhibition == pExhibition.nameExhibition) {
              exhibitionsList[i].status = 'Activo';
              console.log(exhibitionsList[i].status)
            }// Cierre del if
          }// Cierre del ciclo
        exhibitionService.updateState(exhibitionsList);
        loadExhibitions();
      }// Cierre de la funcion active

    }//Cierre de la función para el controlador

})();//Cierre de la función principal
