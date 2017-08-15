(function () {
  angular
  .module('fctApp')
  .service('blazeService', blazeService);

// Inicio de función blazeService.(Pamela)
  function blazeService($http){
    var blazes = [];
    var publicAPI = {
      setBlazes : _setBlazes,
      getBlazes : _getBlazes,
      updateBlazes  : _updateBlazes,
      updateState: _updateState
    };// Cierre del publicAPI
    return publicAPI;

  // Inicio de la funcion setBlazes, que se encarga de registar los datos en el localStorage.(Pamela)
    function _setBlazes(pBlazes){
     return $http.post('http://localhost:3000/api/save_blazes',pBlazes)
    }// Cierre de la función setBlazes.

    // Inicio de la función getBlazes, que se encarga de obtener los datos más actualizados.(Pamela)
    function _getBlazes(){
      return $http.get('http://localhost:3000/api/get_all_blazes');
    }// Cierre de la función getBlazes.

    // Inicio de la función updateBlazes, que se encarga de permitir la edición de datos.(Pamela)
    function _updateBlazes(pobjBlazes){
     console.log(pobjBlazes);
        return $http.put('http://localhost:3000/api/update_blaze',pobjBlazes);
    }// Cierre de la función updateBlazes

    //función que actualiza el estado.
    function _updateState(pBlazesList){
     $http.put('http://localhost:3000/api/update_state_blaze',pBlazesList);
    }//cierre función updateState.

  }// Fin de función blazeservice
})();
