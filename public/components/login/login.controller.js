(function() {
angular.module('fctApp')
  .controller('LoginController',LoginController);

  LoginController.$inject = ['AuthService', 'userService', 'teacherService'];


  function LoginController(AuthService, userService, teacherService){
    var vm = this;

    function loadTeachers(){
      teacherService.getTeachers().then(function (response) {
          vm.users = response.data;
          vm.email = '';
          vm.password = '';
        });
      vm.to = new Date();
      vm.cloudObj = ImageService.getConfiguration();
      }

    vm.login = function(){
      AuthService.getCredencials(vm.email,vm.password);
    }
  }
}());
