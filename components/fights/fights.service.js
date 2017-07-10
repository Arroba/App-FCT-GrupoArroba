// Hecho por Fabián Quirós
(function(){
  angular
  .module('fctApp')
  .service('fightsService',fightsService);

  // Inicio de función competitionService
  function fightsService(){
    var fights = [];
    var publicAPI = {
      setFights : _setFights,
      getFights : _getFights,
      updateFight : _updateFight,
      updateState: _updateState
    }; // Cierre del publicAPI
    return publicAPI;


    // Inicio de la funcion setCompetition, que se encarga de registar los datos en el localStorage
    function _setFights(pFights){
      var fightsList = _getFights();

      fightsList.push(pFights);
      localStorage.setItem('lsFightsList', JSON.stringify(fightsList));
    } // Cierre de la función setCompetition


    // Inicio de la función getCompetition, que se encarga de obtener los datos más actualizados
    function _getFights(){
      var fightsList = JSON.parse(localStorage.getItem('lsFightsList'));
      if(fightsList == null){
        fightsList = fights;
      } // Cierre del if
      return fightsList;
    } // Cierre de la funcíon getCompetition


    // Inicio de la función updateCompetition, que se encarga de permitir la edición de datos
    function _updateFight(pobjFight){
      var fightsList = _getFights();
      for(var i = 0; i < fightsList.length; i++){
        if(fightsList[i].name === pobjFight.name){
          fightsList[i] = pobjFight;
        } // Cierre del if
      } // Cierre del ciclo
      localStorage.setItem('lsFightsList', JSON.stringify(fightsList));
    }// Fin de la función updateCompetition


    //función que actualiza el estado
      function _updateState(pFightsList){

        localStorage.setItem('lsFightsList', JSON.stringify(pFightsList));
      }//cierre función updateState


  }// Fin de función competitionService
})();
