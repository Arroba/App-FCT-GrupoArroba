// Hecho por Wilken
(function(){
  angular
    .module('fctApp')
    .controller('beneficientController', beneficientController);
    beneficientController.$inject = ['beneficientService','$scope'];

    function beneficientController(beneficientService,$scope){

      var vm = this;
      vm.beneficient = "";
      loadBeneficients();

      // Inicio de la función init que es la que se inicializa de primiera
      function loadBeneficients(){
        beneficientService.getBeneficient().then(function(response){
          vm.beneficient = response.data;
         });
      }

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

      // Inicio de la función save, que se encarga de obtener los datos y enviarlos para ser guardados
      vm.save= function(){
        var newBeneficient = {
          personName: vm.personName,
          surname: vm.surname,
          secondSurname: vm.secondSurname,
          name: vm.name,
          type: vm.type,
          description: vm.description
        } // Cierre de newBeneficient
        // intento de restringir los usuarios que se registran
        if(vm.beneficient.length == 0){
          beneficientService.setBeneficient(newBeneficient);
          clean();
          loadBeneficients();

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
          for(var i = 0; i < vm.beneficient.length; i++){
            if(newBeneficient.name == vm.beneficient[i].name){
              swal({
               type: 'error',
               title: '¡El nombre jurídico ya existe!',
               timer: 3000,
               showConfirmButton: false
             }).then(
                function () {},
                // handling the promise rejection
                function (dismiss) {
                  if (dismiss === 'timer') {
                    console.log('El nombre jurídico ya existe')
                  }
                }
              )
              return;
            }
            else{
              beneficientService.setBeneficient(newBeneficient).then(function (response) {
               vm.personName = null;
               vm.surname = null;
               vm.secondSurname = null;
               vm.name = null;
               vm.name = null;
               vm.type = null;
               loadBeneficients();
               });
              clean();
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
      }// Cierre de la función save.

      // Inicio: de la función getInfo, que se encarga de obtener los datos
      vm.getInfo = function(pBeneficient){
        vm.id = pBeneficient._id;
        vm.personName = pBeneficient.personName;
        vm.surname = pBeneficient.surname;
        vm.secondSurname = pBeneficient.secondSurname;
        vm.name = pBeneficient.name;
        vm.name = pBeneficient.name;
        vm.type = pBeneficient.type;
        vm.description = pBeneficient.description;
      } // Cierre de la función getInfo

      //función que cambia boton segun la información para modificar
      vm.hideButton = function(){
        document.querySelector('#actualizar').classList.remove('displayNone');
        document.querySelector('#registrar').classList.add('displayNone');
      }

      // Inicio de la función update, que se encarga de devolver los datos para ser editados
      vm.update = function(){
        document.querySelector('#actualizar').classList.add('displayNone');
        document.querySelector('#registrar').classList.remove('displayNone');
        var newBeneficient = {
          _id : vm.id,
          personName: vm.personName,
          surname: vm.surname,
          secondSurname: vm.secondSurname,
          name: vm.name,
          type: vm.type,
          description: vm.description,
        } // Cierre de beneficientEdit
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
        beneficientService.updateBeneficient(newBeneficient);
        loadBeneficients();
      } // Cierre de la función update

      // Inicio de la función clean, que se encarga de limpiar los datos despúes de un registro
      function clean(){
        vm.personName = '';
        vm.surname = '';
        vm.secondSurname = '';
        vm.name = '';
        vm.type = '';
        vm.description = '';
      } // Cierre de la función clean

    }// Cierre de la función beneficientController
})();
