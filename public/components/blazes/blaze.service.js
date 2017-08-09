(function () {
  angular
  .module('fctApp')
  .service('blazeService', blazeService
);

// Inicio de función blazeService.(Pamela)
  function blazeService(){
    var blazes = [];
    var publicAPI = {
      setBlazes : _setBlazes,
      getBlazes : _getBlazes,
      updateBlazes  : _updateBlazes,
      updateState: _updateState,
    };// Cierre del publicAPI.(Pamela)
    return publicAPI;

    // Inicio de la funcion setBlazes, que se encarga de registar los datos en el localStorage.(Pamela)
    function _setBlazes(pBlazes){
      var blazesList = _getBlazes();

      blazesList.push(pBlazes);
      localStorage.setItem('lsBlazesList', JSON.stringify(blazesList));
    }// Cierre de la función setBlazes.(Pamela)

    // Inicio de la función getBlazes, que se encarga de obtener los datos más actualizados.(Pamela)
    function _getBlazes(){
      var blazesList = JSON.parse(localStorage.getItem('lsBlazesList'));
      if(blazesList == null){
        blazesList = blazes;
      }
      return blazesList;
    }// Cierre de la función getBlazes.(Pamela)

    // Inicio de la función updateBlazes, que se encarga de permitir la edición de datos.(Pamela)
    function _updateBlazes(pobjBlazes){
      var blazesList = _getBlazes();
      for(var i = 0; i < blazesList.length; i++){
        if(blazesList[i].nameBlaze == pobjBlazes.nameBlaze){
          blazesList[i] = pobjBlazes;
        }
      }
      localStorage.setItem('lsBlazesList', JSON.stringify(blazesList));
    }// Cierre de la función updateBlazes.(Pamela)

    //función que actualiza el estado.(Pamela)
    function _updateState(pBlazesList){

      localStorage.setItem('lsBlazesList', JSON.stringify(pBlazesList));
    }//cierre función updateState.(Pamela)

  }// Fin de función teacherService.(Pamela)
})();
