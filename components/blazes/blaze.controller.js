(function() {
  angular
  .module('fctApp')
  .controller('blazeController', blazeController);
  function blazeController(blazeService,ImageService,Upload){

    var vm = this;
    vm.cloudObj = ImageService.getConfiguration();

    // Inicio de la función init que es la que se inicializa de primiera
    function init(){
      vm.blazes = blazeService.getBlazes();
      vm.to = new Date();
    }init();

    // Inicio de la función presave
    vm.presave= function(newBlaze){
      vm.cloudObj.data.file = document.getElementById("photo").files[0];
      Upload.upload(vm.cloudObj)
        .success(function(data){
          newBlaze.photo = data.url;
          vm.save(newBlaze);
        }); // Cierre de la función success
    } // Cierre de la función presave

    // Inicio de la función save, que se encarga de obtener los datos y enviarlos para ser guardados
    vm.save= function(){
      var newBlaze = {
        nameBlaze: vm.nameBlaze,
        hourBlaze: vm.hourBlaze,
        placeBlaze: vm.placeBlaze,
        photo: vm.photo
      }// Cierre de newBlaze
      blazeService.setBlazes(newBlaze);
      init();
      clear();
    }// Cierre de la función save

    // Inicio: de la función getInfo, que se encarga de obtener los datos
    vm.getInfo = function(pBlaze){
      vm.nameBlaze = pBlaze.nameBlaze;
      vm.hourBlaze = pBlaze.hourBlaze;
      vm.placeBlaze = pBlaze.placeBlaze;
      vm.photo = pBlaze.photo;
    }// Cierre de la función getInfo

    // Inicio de la función update, que se encarga de devolver los datos para ser editados
    vm.update = function(){
      var blazeEdited = {
        nameBlaze: vm.nameBlaze,
        hourBlaze: vm.hourBlaze,
        placeBlaze: vm.placeBlaze,
        photo: vm.photo
      }// Cierre de blazeEdited
      blazeService.updateBlazes(blazeEdited);
      init();
      clear();
    }// Cierre de la función update

    // Inicio de la función clean, que se encarga de limpiar los datos despúes de un registro
    function clear(){
      vm.nameBlaze = '';
      vm.hourBlaze =  '';
      vm.placeBlaze =  '';
      vm.photo =  '';
    }// Cierre de la función clean
  }
})();
