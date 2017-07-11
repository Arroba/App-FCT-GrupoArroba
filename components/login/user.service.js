(function(){
  'use strict';
  angular
  .module('fctApp')
  .service('userService', userService);

  function userService($cookies){
    var users = [];
    var publicAPI = {
      setUsers : _setUsers,
      getUsers : _getUsers,
      updateUser : _updateUser,
      findUsers:_findUsers,
      getCookie: _getCookie
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

    function _setUsers(pUser){
      var usersList = _getUsers();

      usersList.push(pUser);
      localStorage.setItem('lsUsersList', JSON.stringify(usersList));
    }

    function _getUsers(){
      var usersList = JSON.parse(localStorage.getItem('lsUsersList'));
      // Objeto que introduce los datos del administrador
      var Administrator = {
        name: 'Pilar',
        firstName: 'Granados',
        lastName: 'Acosta',
        id: 'admin',
        email: 'pilarGA@gmail.com',
        telephone: 83043948,
        password: 123456789,
        resident: 'Montes de Oca',
        year: '12 de Julio 1998',
        status: 'Activo',
        photo: 'http://res.cloudinary.com/dbvdk8f2r/image/upload/v1499755560/pilar_ay71zu.jpg',
        userType: 'administrator'
      } // Cierre del objeto Administrator

      // Objeto que introduce los datos del Assistant
      var Assistant = {
        name: 'Wilken',
        firstName: 'Chacón',
        lastName: 'Acosta',
        id: 'asist',
        email: 'wilkenCA@gmail.com',
        telephone: 83043948,
        password: 123456789,
        resident: 'Montes de Oca',
        year: '25 de Julio 1990',
        status: 'Activo',
        photo: 'http://res.cloudinary.com/dbvdk8f2r/image/upload/v1499755417/wilken_inimbl.jpg',
        userType: 'assistant'
      } // Cierre del objeto Assistant

      if(usersList == null){
        usersList = users;
        usersList.push(Administrator,Assistant)
      }else {
        usersList.push(Administrator,Assistant)
      }
      return usersList;
    }
    function _updateUser(pobjUsuario){
      var usersList = _getUsers();
      for(var i = 0; i < usersList.length; i++){
        if(usersList[i].id == pobjUsuario.id){
          usersList[i] = pobjUsuario;
        }
      }
      localStorage.setItem('lsUsersList', JSON.stringify(usersList));
    }
    function _findUsers(pUsernameToFind){
      var userStorage = _getUsers();
     for (var i = 0; i < userStorage.length; i++) {
       if(userStorage[i].email == pUsernameToFind){
         return userStorage[i];
       }
     }
   }

   function _getCookie(){
    return $cookies.get('currentUserActive');
   }
  }

})();
