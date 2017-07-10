(function(){
  angular
    .module('fctApp')
    .controller('academiesController', academiesController);// Declaración del controlador

    function academiesController(academiesService){

      var vm = this;

      function init(){
        vm.academies = academiesService.getAcademies();
      }init();
      // Función que guarda los datos
      vm.save= function(){// Objeto que obtener
        var newAcademy = {
          name: vm.name,
          direction: vm.direction,
          phone: vm.phone,
          email: vm.email,
          contact: vm.contact,
          status: 'Activo'
        }
        // intento de restringir los usuarios que se registran
        if(vm.academies.length == 0){
          academiesService.setAcademies(newAcademy);
          document.querySelector('.Accepted').innerHTML = 'Registro completado!';
          console.log(vm.academies);
          clear();
          init();
          return;
        }else{
          for(var i = 0; i < vm.academies.length; i++){
            if(newAcademy.name == vm.academies[i].name){
              document.querySelector('.failId').innerHTML = '**El nombre ya está registrado, por favor ingrese otro**';
              return;
            }
            else if(newAcademy.email == vm.academies[i].email){
              document.querySelector('.failEmail').innerHTML = 'El correo electrónico ya está registrado, por favor ingrese otro';
              document.querySelector('.failId').innerHTML = '';
              return;
            }
            else{
              console.log(newAcademy);
              academiesService.setAcademies(newAcademy);
              document.querySelector('.failId').innerHTML = '';
              document.querySelector('.failEmail').innerHTML = '';
              document.querySelector('.Accepted').innerHTML = 'Registro completado!';
              console.log(vm.academies);
              clear();
              init();
              return;
            }
          }
        }
      }// Cierre de la función save.()

      //función que toma la información para modificar
      vm.getInfo = function(pAcademy){
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
        var updatedAcademy = {
          name: vm.name,
          direction: vm.direction,
          phone: vm.phone,
          email: vm.email,
          contact: vm.contact,
          status: 'Activo'
        }
        academiesService.updateAcademy(updatedAcademy);
        init();
        clear();
      }//cierre funcion update

      //función par limpiar los inputs
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
        init();
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
        init();
      }// Cierre de la funcion active

    }//Cierre de la función para el controlador

})();//Cierre de la función principal
