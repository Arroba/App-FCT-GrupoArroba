(function() {
angular.module('fctApp')
  .controller('LoginController',LoginController);

  LoginController.$inject = ['AuthService', 'userService', 'teacherService'];


  function LoginController(AuthService, userService, teacherService,$cookies){
    var vm = this;

    function loadUsers(){
      userService.getUsers().then(function (response) {
          vm.users = response.data;
          vm.email = '';
          vm.password = '';
        });
      vm.to = new Date();
      vm.cloudObj = ImageService.getConfiguration();
      } 

    vm.login = function(){
      getCredencials(vm.email,vm.password);
    }

    function getCredencials(pEmail,pPassword){
      //console.log("Yass work correctly auth service. The user is %s and the password is %s",pUsername,pPassword);
      var userFounded = findUsers(pEmail);
      if(userFounded == undefined){
        document.querySelector('.blocked').innerHTML = 'Usuario o contraseña incorrectos';
      }
      AuthService.validateFields(pEmail, pPassword, userFounded);
      $cookies.put('currentUserActive',userFounded.email);
    }





        function findUsers(pUsernameToFind){
      teacherService.getTeachers().then(function (response) {
            vm.teachers = response.data;
      });
     for (var i = 0; i < vm.teachers.length; i++) {
       if(vm.teachers[i].email == pUsernameToFind){
         return vm.teachers[i];
       }
     }
   }
  }





}());
