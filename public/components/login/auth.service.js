(function() {
  angular.module('fctApp')
  .service('AuthService',AuthService);
  function AuthService(userService, $cookies,$location,teacherService){
    return {

      logOut : _destroyAuthCredentials,
      validateFields: _validateFields,
      findUsers: _findUsers
    }

    function _destroyAuthCredentials(){
      sessionStorage.clear();
      // var currentUser = $cookies.get('currentUserActive');
      // $cookies.remove('currentUserActive');
      _redirectTo(false);
    }
    function _validateFields(pEmail, pPassField, userFound){
      if(userFound.email == pEmail && userFound.password == pPassField){
        if(userFound.status == 'Activo'){
          _redirectTo(userFound);
        }
        else{
          document.querySelector('.blocked').innerHTML = 'Su cuenta se encuentra inhabilitada';
          return;
        }
      }else {
        _redirectTo(false);
      }
    }


    function _findUsers(pUsernameToFind){
      teacherService.getTeachers().then(function (response) {
            vm.teachers = response.data;
      });
     for (var i = 0; i < vm.teachers.length; i++) {
       if(vm.teachers[i].email == pUsernameToFind){
         return vm.teachers[i];
       }
     }
   }







    function _redirectTo(pValidUser){
      switch (pValidUser.userType) {
        case 'administrator':
          $location.path('/profileAdmi');
          break;
        case 'assistant':
          $location.path('/profileAsistent');
          break;
        case 'teacher':
          $location.path('/teacherProfile');
          break;
        case 'student':
          $location.path('/studentProfile');
        break;
        case'':
          document.querySelector('.blocked').innerHTML = 'Usuario o contraseña incorrectos';
        break;
        default:
        $location.path('/login');
        break;

      }
    }
  }
}());
