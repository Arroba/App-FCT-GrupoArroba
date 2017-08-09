(function(){
  angular
    .module('fctApp')
    .controller('profileAsistentController', profileAsistentController);
    function profileAsistentController(userService,AuthService,$cookies){

      var vm = this;

      function init(){
        vm.foundCredentials = userService.findUsers(userService.getCookie());
      }init();

      vm.logOut = function(){
        AuthService.logOut();
      }

    }// Cierre de la función profileAsistentController
})();
