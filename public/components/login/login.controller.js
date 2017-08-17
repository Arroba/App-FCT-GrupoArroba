(function() {
angular.module('fctApp')
  .controller('LoginController',LoginController);

  LoginController.$inject = ['AuthService', 'userService', 'teacherService','$cookies','studentService'];


  function LoginController(AuthService, userService, teacherService,$cookies,studentService){
    var vm = this;
    vm.teachers = {};
    vm.students = {};
     teacherService.getTeachers().then(function (response) {
            vm.teachers = response.data;
      });
      studentService.getStudents().then(function (response) {
          vm.students = response.data;
        });


    var users = userService.getAllUsers();



    function loadUsers(){
      teacherService.getTeachers().then(function (response) {
          vm.teachers = response.data;
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
      // $cookies.put('currentUserActive',userFounded.email);
      sessionStorage.setItem('currentUserActive',JSON.stringify(userFounded));
    }





    function findUsers(pUsernameToFind){

      var bNoEncontrado = false;
     for (var i = 0; i < vm.teachers.length; i++) {
       if(vm.teachers[i].email == pUsernameToFind){
         return vm.teachers[i];
       }else{
          bNoEncontrado = true;
       }
     }
     if(bNoEncontrado == true){

       for (var i = 0; i < vm.students.length; i++) {
         if(vm.students[i].email == pUsernameToFind){
           return vm.students[i];
         }
       }

     }

   }






  }





}());
