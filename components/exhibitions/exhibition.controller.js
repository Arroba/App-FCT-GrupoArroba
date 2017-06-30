(function() {
  angular
  .module('fctApp')
  .controller('exhibitionController', exhibitionController);
  function exhibitionController(exhibitionService,ImageService,Upload){

    var vm = this;
    vm.cloudObj = ImageService.getConfiguration();

    // Inicio de la función init que es la que se inicializa de primiera
    function init(){
      vm.exhibitions = exhibitionService.getExhibitions();
      vm.to = new Date();
    }init();

    // Inicio de la función presave
    vm.presave= function(newExhibition){
      vm.cloudObj.data.file = document.getElementById("photo").files[0];
      Upload.upload(vm.cloudObj)
        .success(function(data){
          newExhibition.photo = data.url;
          vm.save(newExhibition);
        }); // Cierre de la función success
    } // Cierre de la función presave

    // Inicio de la función save, que se encarga de obtener los datos y enviarlos para ser guardados
    vm.save= function(){
      var newExhibition = {
        nameExhibition: vm.nameExhibition,
        hourExhibition: vm.hourExhibition,
        placeExhibition: vm.placeExhibition,
        guestsExhibition: vm.guestsExhibition,
        photo: vm.photo
      }// Cierre de newExhibition
      exhibitionService.setExhibitions(newExhibition);
      init();
      clear();
    }// Cierre de la función save

    // Inicio: de la función getInfo, que se encarga de obtener los datos
    vm.getInfo = function(pExhibition){
      vm.nameExhibition = pExhibition.nameExhibition;
      vm.hourExhibition = pExhibition.hourExhibition;
      vm.placeExhibition = pExhibition.placeExhibition;
      vm.guestsExhibition = pExhibition.guestsExhibition;
      vm.photo = pExhibition.photo;
    }// Cierre de la función getInfo

    // Inicio de la función update, que se encarga de devolver los datos para ser editados
    vm.update = function(){
      var exhibitionEdited = {
        nameExhibition: vm.nameExhibition,
        hourExhibition: vm.hourExhibition,
        placeExhibition: vm.placeExhibition,
        guestsExhibition: vm.guestsExhibition,
        photo: vm.photo
      }// Cierre de exhibitionEdited
      exhibitionService.updateExhibitions(exhibitionEdited);
      init();
      clear();
    }// Cierre de la función update

    // Inicio de la función clean, que se encarga de limpiar los datos despúes de un registro
    function clear(){
      vm.nameExhibition = '';
      vm.hourExhibition =  '';
      vm.placeExhibition =  '';
      vm.guestsExhibition =  '';
      vm.photo =  '';
    }// Cierre de la función clean
  }
})();
