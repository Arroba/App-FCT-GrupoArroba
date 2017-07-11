(function(){
  angular
    .module('fctApp')
    .controller('profileAdminController', profileAdminController);
    function profileAdminController(AuthService,$cookies){

      var vm = this;

      vm.logOut = function(){
        AuthService.logOut();
      }

    }// Cierre de la función profileAdminController
})();
