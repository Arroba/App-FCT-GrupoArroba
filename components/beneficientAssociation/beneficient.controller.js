// Hecho por Wilken
(function(){
  angular
    .module('fctApp')
    .controller('beneficientController', beneficientController);
    function beneficientController(beneficientService){

      var vm = this;

      // Inicio de la función init que es la que se inicializa de primiera
      function init(){
        vm.beneficient = beneficientService.getBeneficient();
      }init(); // Cierre de la función init

      // Inicio de la función save, que se encarga de obtener los datos y enviarlos para ser guardados
      vm.save= function(){
        var newBeneficient = {
          person: vm.person,
          name: vm.name,
          type: vm.type,
          description: vm.description,
        } // Cierre de newBeneficient
        beneficientService.setBeneficient(newBeneficient);
        init();
        clean();
      } // Cierre de la función save

      // Inicio: de la función getInfo, que se encarga de obtener los datos
      vm.getInfo = function(pBeneficient){
        vm.person = pBeneficient.person;
        vm.name = pBeneficient.name;
        vm.type = pBeneficient.type;
        vm.description = pBeneficient.description;
      } // Cierre de la función getInfo

      // Inicio de la función update, que se encarga de devolver los datos para ser editados
      vm.update = function(){
        var beneficientEdit = {
          person: vm.person,
          name: vm.name,
          type: vm.type,
          description: vm.description,
        } // Cierre de beneficientEdit
        beneficientService.updateBeneficient(beneficientEdit);
        init();
        clean();
      } // Cierre de la función update

      // Inicio de la función clean, que se encarga de limpiar los datos despúes de un registro
      function clean(){
        vm.person = '';
        vm.name = '';
        vm.type = '';
        vm.description = '';
      } // Cierre de la función clean

    }// Cierre de la función beneficientController
})();

