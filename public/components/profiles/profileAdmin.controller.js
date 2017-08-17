(function(){
  angular
    .module('fctApp')
    .controller('profileAdminController', profileAdminController);
    function profileAdminController(userService,AuthService,$cookies){

      var vm = this;

      function init(){
        vm.foundCredentials = JSON.parse(sessionStorage.getItem('currentUserActive'));
      }init();

      vm.logOut = function(){
        AuthService.logOut();
      }

    }// Cierre de la función profileAdminController
})();
