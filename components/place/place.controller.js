// Hecho por Fabián Quirós
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
        placeService.setPlace(newPlace);
        init();
        clean();
      } // Cierre de la función save

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

      // Inicio de la función update, que se encarga de devolver los datos para ser editados
      vm.update = function(){
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
