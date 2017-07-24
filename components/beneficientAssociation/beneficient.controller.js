// Hecho por Wilken
(function(){
  angular
    .module('fctApp')
    .controller('beneficientController', beneficientController);
    function beneficientController(beneficientService,$scope){

      var vm = this;

      // Inicio de la función init que es la que se inicializa de primiera
      function init(){
        vm.beneficient = beneficientService.getBeneficient();
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

      // Inicio de la función save, que se encarga de obtener los datos y enviarlos para ser guardados
      vm.save= function(){
        var newBeneficient = {
          personName: vm.personName,
          surname: vm.surname,
          secondSurname: vm.secondSurname,
          name: vm.name,
          type: vm.type,
          description: vm.description,
        } // Cierre de newBeneficient
        // intento de restringir los usuarios que se registran
        if(vm.beneficient.length == 0){
          beneficientService.setBeneficient(newBeneficient);
          clean();
          init();

          swal({
          type: 'success',
          title: '¡Registro completado!',
          timer: 3000,
          showConfirmButton: false
        })
          return;
        }else{
          for(var i = 0; i < vm.beneficient.length; i++){
            if(newBeneficient.name == vm.beneficient[i].name){
              swal({
               type: 'error',
               title: '¡El nombre jurídico ya existe!',
               timer: 3000,
               showConfirmButton: false
             })
              return;
            }
            else{
              beneficientService.setBeneficient(newBeneficient);
              clean();
              init();

              swal({
              type: 'success',
              title: '¡Registro completado!',
              timer: 3000,
              showConfirmButton: false
            })
              return;
            }
          }
        }
      }// Cierre de la función save.

      // Inicio: de la función getInfo, que se encarga de obtener los datos
      vm.getInfo = function(pBeneficient){
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
        var beneficientEdit = {
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
        })
        beneficientService.updateBeneficient(beneficientEdit);
        init();
        clean();
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
