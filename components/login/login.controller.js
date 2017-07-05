(function() {
angular.module('fctApp')
  .controller('LoginController',LoginController);
  function LoginController(AuthService, userService){
    var vm = this;
  	function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
    	vm.users = userService.getUsers();
    	vm.email = '';
    	vm.password = '';
  	}init();
    vm.login = function(){
      AuthService.getCredencials(vm.email,vm.password);
    }
  }
}());
