(function(){
  angular
    .module('fctApp')
    .controller('academiesController', academiesController);// Declaración del controlador
    academiesController.$inject = ['academiesService','$scope'];

    function academiesController(academiesService,$scope){

      var vm = this;
      vm.academies = "";
      loadAcademies();

      function loadAcademies(){
        academiesService.getAcademies().then(function (response) {
            vm.academies = response.data;
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
        var newAcademy = {
          name: vm.name,
          direction: vm.direction,
          phone: vm.phone,
          email: vm.email,
          contact: vm.contact,
          status: 'Activo'
        }

        //
        if(vm.academies.length == 0){
          academiesService.setAcademies(newAcademy);
          clear();
          loadAcademies();

          swal({
          type: 'success',
          title: '¡Registro completado!',
          timer: 3000,
          showConfirmButton: false
        })
          return;
        }else{
          for(var i = 0; i < vm.academies.length; i++){
            if(newAcademy.name == vm.academies[i].name){
                swal({
               type: 'error',
               title: '¡El nombre de academia ya existe!',
               timer: 3000,
               showConfirmButton: false
             }).then(
                function () {},
                // handling the promise rejection
                function (dismiss) {
                  if (dismiss === 'timer') {
                    console.log('El nombre de academia ya existe')
                  }
                }
              )
              return;
            }
            else if(newAcademy.email == vm.academies[i].email){
              swal({
             type: 'error',
             title: '¡El correo electrónico ya existe!',
             timer: 3000,
             showConfirmButton: false
           }).then(
              function () {},
              // handling the promise rejection
              function (dismiss) {
                if (dismiss === 'timer') {
                  console.log('El correo electrónico ya existe')
                }
              }
            )
              return;
            }
            else{
              academiesService.setAcademies(newAcademy).then(function (response) {
              vm.name = null;
              vm.direction = null;
              vm.phone = null;
              vm.email = null;
              vm.contact = null;
              vm.status = null;
              loadAcademies();
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
      vm.getInfo = function(pAcademy){
        vm.id = pAcademy._id;
        vm.name = pAcademy.name;
        vm.direction = pAcademy.direction;
        vm.phone = pAcademy.phone;
        vm.email = pAcademy.email;
        vm.contact = pAcademy.contact;
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
        var newAcademy = {
          _id : vm.id,
          name : vm.name,
          direction : vm.direction,
          phone : vm.phone,
          email : vm.email,
          contact : vm.contact,
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
        academiesService.updateAcademy(newAcademy);
        loadAcademies();
        //clear();
      }//cierre funcion update

      //función par limpiar los inputs PREGUNTAR
      function clear(){
        vm.name = '';
        vm.direction = '';
        vm.phone = '';
        vm.email = '';
        vm.contact = '';
      } //cierre función clear

      //función que cambia el estado a inabilitado
      vm.inactive = function(pAcademy){
        var academiesList = academiesService.getAcademies();
          for (var i = 0; i < academiesList.length; i++) {
            if (academiesList[i].email == pAcademy.email) {
              academiesList[i].status = 'inhabilitado';
              console.log(academiesList[i].status)
            }// Cierre del if
          }// Cierre del ciclo
        academiesService.updateState(academiesList);
        loadAcademies();
      }// Cierre funcion inative

      //función que cambia el estado a activo
      vm.active = function(pAcademy){
        var academiesList = academiesService.getAcademies();
          for (var i = 0; i < academiesList.length; i++) {
            if (academiesList[i].email == pAcademy.email) {
              academiesList[i].status = 'Activo';
              console.log(academiesList[i].status)
            }// Cierre del if
          }// Cierre del ciclo
        academiesService.updateState(academiesList);
        loadAcademies();
      }// Cierre de la funcion active

    }//Cierre de la función para el controlador

})();//Cierre de la función principal
