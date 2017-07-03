(function() {
  angular
  .module('fctApp')
  .controller('blazeController', blazeController);
  function blazeController(blazeService,ImageService,Upload, eventsService){

    var vm = this;
    vm.cloudObj = ImageService.getConfiguration();

    // Inicio de la función init que es la que se inicializa de primera.(Pamela)
    function init(){
      vm.blazes = blazeService.getBlazes();
      vm.eventsRel = eventsService.getEvents();
      vm.to = new Date();
    }init();

    // Inicio de la función presave.(Pamela)
    vm.presave= function(newBlaze){
      vm.cloudObj.data.file = document.getElementById("photo").files[0];
      Upload.upload(vm.cloudObj)
        .success(function(data){
          newBlaze.photo = data.url;
          vm.save(newBlaze);
        }); // Cierre de la función success.(Pamela)
    } // Cierre de la función presave.(Pamela)

    // Inicio de la función save, que se encarga de obtener los datos y enviarlos para ser guardados.(Pamela)
    vm.save= function(){
      var newBlaze = {
        nameEvent: vm.nameEvent,
        nameBlaze: vm.nameBlaze,
        hourBlaze: vm.hourBlaze,
        placeBlaze: vm.placeBlaze,
        state: 'Activo',
        photo: vm.photo
      }// Cierre de newBlaze.(Pamela)
      blazeService.setBlazes(newBlaze);
      init();
      clear();
    }// Cierre de la función save.(Pamela)

    // Inicio: de la función getInfo, que se encarga de obtener los datos.(Pamela)
    vm.getInfo = function(pBlaze){
      vm.nameEvent = pBlaze.nameEvent;
      vm.nameBlaze = pBlaze.nameBlaze;
      vm.hourBlaze = pBlaze.hourBlaze;
      vm.placeBlaze = pBlaze.placeBlaze;
      vm.photo = pBlaze.photo;
    }// Cierre de la función getInfo.(Pamela)

    // Inicio de la función update, que se encarga de devolver los datos para ser editados.(Pamela)
    vm.update = function(){
      var blazeEdited = {
        nameEvent: vm.nameEvent,
        nameBlaze: vm.nameBlaze,
        hourBlaze: vm.hourBlaze,
        placeBlaze: vm.placeBlaze,
        state: 'Activo',
        photo: vm.photo
      }// Cierre de blazeEdited.(Pamela)
      blazeService.updateBlazes(blazeEdited);
      init();
      clear();
    }// Cierre de la función update.(Pamela)

    // Inicio de la función clear, que se encarga de limpiar los datos despúes de un registro.(Pamela)
    function clear(){
      vm.nameEvent = '';
      vm.nameBlaze = '';
      vm.hourBlaze =  '';
      vm.placeBlaze =  '';
      vm.photo =  '';
    }// Cierre de la función clear.(Pamela)

    // Inicio de la función inactive, que se encarga de cambiar el estado del profesor.(Pamela)
    //función que cambia el estado a inabilitado.(Pamela)
    vm.inactive = function(pBlaze){
      var blazesList = blazeService.getBlazes();
      for (var i = 0; i < blazesList.length; i++) {
        if (blazesList[i].nameBlaze == pBlaze.nameBlaze) {
          blazesList[i].state = 'inhabilitado';
          console.log(blazesList[i].state)
        }// Cierre del if.(Pamela)
      }// Cierre del ciclo.(Pamela)
      blazeService.updateState(blazesList);
      init();
    }// Cierre de la funcion inactive.(Pamela)

    //función que cambia el estado a activo.(Pamela)
    vm.active = function(pBlaze){
      var blazesList = blazeService.getBlazes();
      for (var i = 0; i < blazesList.length; i++) {
        if (blazesList[i].nameBlaze == pBlaze.nameBlaze) {
          blazesList[i].state = 'Activo';
          console.log(blazesList[i].state)
        }// Cierre del if.(Pamela)
      }// Cierre del ciclo.(Pamela)
      blazeService.updateState(blazesList);
      init();
    }// Cierre de la funcion active.(Pamela)
  }// Cierre de la función studentController.(Pamela)
})();

