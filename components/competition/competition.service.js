// Hecho por Fabián Quirós
(function(){
  angular
  .module('fctApp')
  .service('competitionService', competitionService);

  // Inicio de función competitionService
  function competitionService(){
    var competition = [];
    var publicAPI = {
      setCompetition : _setCompetition,
      getCompetition : _getCompetition,
      updateCompetition : _updateCompetition,
      updateState: _updateState
    }; // Cierre del publicAPI
    return publicAPI;

    // Inicio de la funcion setCompetition, que se encarga de registar los datos en el localStorage
    function _setCompetition(pCompetition){
      var competitionList = _getCompetition();

      competitionList.push(pCompetition);
      localStorage.setItem('lsCompetitionList', JSON.stringify(competitionList));
    } // Cierre de la función setCompetition

    // Inicio de la función getCompetition, que se encarga de obtener los datos más actualizados
    function _getCompetition(){
      var competitionList = JSON.parse(localStorage.getItem('lsCompetitionList'));
      if(competitionList == null){
        competitionList = competition;
      } // Cierre del if
      return competitionList;
    } // Cierre de la funcíon getCompetition

    // Inicio de la función updateCompetition, que se encarga de permitir la edición de datos
    function _updateCompetition(pobjCompetition){
      var competitionList = _getCompetition();
      for(var i = 0; i < competitionList.length; i++){
        if(competitionList[i].name == pobjCompetition.name){
          competitionList[i] = pobjCompetition;
        } // Cierre del if
      } // Cierre del ciclo
      localStorage.setItem('lsCompetitionList', JSON.stringify(competitionList));
    }// Fin de la función updateCompetition

    //función que actualiza el estado
      function _updateState(pCompetitionList){
        localStorage.setItem('lsCompetitionList', JSON.stringify(pCompetitionList));
      }//cierre función updateState

  }// Fin de función competitionService
})();
