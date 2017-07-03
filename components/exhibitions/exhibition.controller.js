(function() {
  angular
  .module('fctApp')
  .controller('exhibitionController', exhibitionController);
  function exhibitionController(exhibitionService,ImageService,Upload, eventsService){

    var vm = this;
    vm.cloudObj = ImageService.getConfiguration();

    // Inicio de la función init que es la que se inicializa de primera.(Pamela)
    function init(){
      vm.exhibitions = exhibitionService.getExhibitions();
      vm.eventsRel = eventsService.getEvents();
      vm.to = new Date();
    }init();

    // Inicio de la función presave.(Pamela)
    vm.presave= function(newExhibition){
      vm.cloudObj.data.file = document.getElementById("photo").files[0];
      Upload.upload(vm.cloudObj)
        .success(function(data){
          newExhibition.photo = data.url;
          vm.save(newExhibition);
        }); // Cierre de la función success.(Pamela)
    } // Cierre de la función presave.(Pamela)

    // Inicio de la función save, que se encarga de obtener los datos y enviarlos para ser guardados.(Pamela)
    vm.save= function(){
      var newExhibition = {
        nameEvent: vm.nameEvent,
        nameExhibition: vm.nameExhibition,
        hourExhibition: vm.hourExhibition,
        placeExhibition: vm.placeExhibition,
        guestsExhibition: vm.guestsExhibition,
        state: 'Activo',
        photo: vm.photo
      }// Cierre de newExhibition.(Pamela)
      exhibitionService.setExhibitions(newExhibition);
      init();
      clear();
    }// Cierre de la función save.(Pamela)

    // Inicio: de la función getInfo, que se encarga de obtener los datos.(Pamela)
    vm.getInfo = function(pExhibition){
      vm.nameEvent = pBlaze.nameEvent;
      vm.nameExhibition = pExhibition.nameExhibition;
      vm.hourExhibition = pExhibition.hourExhibition;
      vm.placeExhibition = pExhibition.placeExhibition;
      vm.guestsExhibition = pExhibition.guestsExhibition;
      vm.photo = pExhibition.photo;
    }// Cierre de la función getInfo.(Pamela)

    // Inicio de la función update, que se encarga de devolver los datos para ser editados.(Pamela)
    vm.update = function(){
      var exhibitionEdited = {
        nameEvent: vm.nameEvent,
        nameExhibition: vm.nameExhibition,
        hourExhibition: vm.hourExhibition,
        placeExhibition: vm.placeExhibition,
        guestsExhibition: vm.guestsExhibition,
        state: 'Activo',
        photo: vm.photo
      }// Cierre de exhibitionEdited.(Pamela)
      exhibitionService.updateExhibitions(exhibitionEdited);
      init();
      clear();
    }// Cierre de la función update.(Pamela)

    // Inicio de la función clear, que se encarga de limpiar los datos despúes de un registro.(Pamela)
    function clear(){
      vm.nameEvent = '';
      vm.nameExhibition = '';
      vm.hourExhibition =  '';
      vm.placeExhibition =  '';
      vm.guestsExhibition =  '';
      vm.photo =  '';
    }// Cierre de la función clear.(Pamela)

    // Inicio de la función inactive, que se encarga de cambiar el estado del profesor.(Pamela)
    //función que cambia el estado a inabilitado.(Pamela)
    vm.inactive = function(pExhibition){
      var exhibitionsList = exhibitionService.getExhibitions();
      for (var i = 0; i < exhibitionsList.length; i++) {
        if (exhibitionsList[i].nameExhibition == pExhibition.nameExhibition) {
          exhibitionsList[i].state = 'inhabilitado';
          console.log(exhibitionsList[i].state)
        }// Cierre del if.(Pamela)
      }// Cierre del ciclo.(Pamela)
      exhibitionService.updateState(exhibitionsList);
      init();
    }// Cierre de la funcion inactive.(Pamela)

    //función que cambia el estado a activo.(Pamela)
    vm.active = function(pExhibition){
      var exhibitionsList = exhibitionService.getExhibitions();
      for (var i = 0; i < exhibitionsList.length; i++) {
        if (exhibitionsList[i].nameExhibition == pExhibition.nameExhibition) {
          exhibitionsList[i].state = 'Activo';
          console.log(exhibitionsList[i].state)
        }// Cierre del if.(Pamela)
      }// Cierre del ciclo.(Pamela)
      exhibitionService.updateState(exhibitionsList);
      init();
    }// Cierre de la funcion active.(Pamela)
  }
})();
