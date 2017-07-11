(function(){
  angular
    .module('fctApp')
    .controller('profileAdminController', profileAdminController);
    function profileAdminController(userService,AuthService,$cookies){

      var vm = this;

      function init(){
        vm.foundCredentials = userService.findUsers(userService.getCookie());
      }init();

      vm.logOut = function(){
        AuthService.logOut();
      }

    }// Cierre de la función profileAdminController
})();
