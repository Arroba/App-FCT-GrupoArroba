(function() {
  angular.module('fctApp')
  .service('AuthService',AuthService);
  function AuthService(userService, $cookies,$location){
    return {
      getCredencials:_getAuthCredencials,
      logOut : _destroyAuthCredentials
    }
    function _getAuthCredencials(pEmail,pPassword){
      //console.log("Yass work correctly auth service. The user is %s and the password is %s",pUsername,pPassword);
      var userFounded = userService.findUsers(pEmail);
      if(userFounded == undefined){
        document.querySelector('.blocked').innerHTML = 'Usuario o contraseña incorrectos';
      }
      _validateFields(pEmail, pPassword, userFounded);
      $cookies.put('currentUserActive',userFounded.email);
    }
    function _destroyAuthCredentials(){
      var currentUser = $cookies.get('currentUserActive');
      $cookies.remove('currentUserActive');
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
    function _redirectTo(pValidUser){
      switch (pValidUser.userType) {
        case 'administrator':
          $location.path('/academies');
          break;
        case 'assistant':
          $location.path('/events');
          break;
        case 'teacher':
          $location.path('/sponsors');
          break;
        case 'student':
          $location.path('/students');
        break;
        default:
          document.querySelector('.blocked').innerHTML = 'Usuario o contraseña incorrectos';
        break;

      }
    }
  }
}());
