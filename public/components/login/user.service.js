(function(){
  'use strict';
  angular
  .module('fctApp')
  .service('userService', userService);

  function userService($http,$cookies,teacherService,studentService){
    var users = [];
    var publicAPI = {
      setUsers : _setUsers,
      getUsers : _getUsers,
      updateUser : _updateUser,
      getCookie: _getCookie
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

    function _setUsers(pUser){
      return $http.post('http://localhost:3000/api/save_user',pUser)
      }

    // Inicio de la función getTeachers, que se encarga de obtener los datos más actualizados
    function _getUsers(){
      return $http.get('http://localhost:3000/api/get_all_teachers');
    } // Cierre de la funcíon getTeachers


    function _updateUser(pobjUsuario){
        return $http.put('http://localhost:3000/api/update_users',pobjUsuario);
    }



   function _getCookie(){
    return $cookies.get('currentUserActive');
   }

  }
   
})();
