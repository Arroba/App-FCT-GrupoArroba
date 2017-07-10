(function(){
  angular
    .module('fctApp')
    .controller('placeController', placeController);
    function placeController(placeService){

      var vm = this;
      vm.to = new Date();

      // Inicio de la función init que es la que se inicializa de primiera
      function init(){
        vm.place = placeService.getPlace();
      }init(); // Cierre de la función init

      // Inicio de la función save, que se encarga de obtener los datos y enviarlos para ser guardados
      vm.save= function(){
        var newPlace = {
          namePlace: vm.namePlace,
          location: vm.location,
          capacity: vm.capacity,
          phone: vm.phone,
          timestart: vm.timestart,
          timeFinish: vm.timeFinish,
          nameContact: vm.nameContact,
          firstName: vm.firstName,
          secondName: vm.secondName,
        } // Cierre de newCompetition
        // intento de restringir los usuarios que se registran
        if(vm.place.length == 0){
          placeService.setPlace(newPlace);
          document.querySelector('.Accepted').innerHTML = 'Registro completado!';
          console.log(vm.place);
          clean();
          init();
          return;
        }else{
          for(var i = 0; i < vm.place.length; i++){
            if(newPlace.namePlace == vm.place[i].namePlace){
              document.querySelector('.failId').innerHTML = '**El Nombre ya  está registrado, por favor ingrese otro**';
              return;
            }
            else{
              console.log(newPlace);
              placeService.setPlace(newPlace);
              document.querySelector('.failId').innerHTML = '';
              document.querySelector('.Accepted').innerHTML = 'Registro completado!';
              console.log(vm.place);
              clean();
              init();
              return;
            }
          }
        }
      }// Cierre de la función save.()
      
      // Inicio: de la función getInfo, que se encarga de obtener los datos
      vm.getInfo = function(pPlace){
        vm.namePlace = pPlace.namePlace;
        vm.location = pPlace.location;
        vm.capacity = pPlace.capacity;
        vm.phone = pPlace.phone;
        vm.timestart = new Date(pPlace.timestart);
        vm.timeFinish = new Date(pPlace.timeFinish);
        vm.nameContact = pPlace.nameContact;
        vm.firstName = pPlace.firstName;
        vm.secondName = pPlace.secondName;
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
        var placeEdit = {
          namePlace: vm.namePlace,
          location: vm.location,
          capacity: vm.capacity,
          phone: vm.phone,
          timestart: vm.timestart,
          timeFinish: vm.timeFinish,
          nameContact: vm.nameContact,
          firstName: vm.firstName,
          secondName: vm.secondName,
        } // Cierre de competitionEdit
        placeService.updatePlace(placeEdit);
        init();
        clean();
      } // Cierre de la función update

      // Inicio de la función clean, que se encarga de limpiar los datos despúes de un registro
      function clean(){
        vm.namePlace = '';
        vm.location = '';
        vm.capacity = '';
        vm.phone = '';
        vm.timestart = '';
        vm.timeFinish = '';
        vm.nameContact = '';
        vm.firstName = '';
        vm.secondName = '';
      } // Cierre de la función clean

    }// Cierre de la función placeController
})();
