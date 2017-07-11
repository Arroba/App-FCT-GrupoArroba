(function(){
  angular
    .module('fctApp')
    .controller('profileAsistentController', profileAsistentController);
    function profileAsistentController(AuthService,$cookies){

      var vm = this;

      vm.logOut = function(){
        AuthService.logOut();
      }

    }// Cierre de la función profileAsistentController
})();
