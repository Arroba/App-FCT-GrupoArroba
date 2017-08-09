(function () {
  angular
  .module('fctApp')
  .service('exhibitionService', exhibitionService);

  // Inicio de función exhibitionService.(Pamela)
  function exhibitionService(){
    var exhibitions = [];
    var publicAPI = {
      setExhibitions : _setExhibitions,
      getExhibitions  : _getExhibitions,
      updateExhibitions  : _updateExhibitions,
      updateState : _updateState,
    };// Cierre del publicAPI.(Pamela)
    return publicAPI;

    // Inicio de la funcion setExhibitions, que se encarga de registar los datos en el localStorage.(Pamela)
    function _setExhibitions(pExhibition){
      var exhibitionsList = _getExhibitions();

      exhibitionsList.push(pExhibition);
      localStorage.setItem('lsExhibitionsList', JSON.stringify(exhibitionsList));
    }// Cierre de la función setExhibitions.(Pamela)

    // Inicio de la función getExhibitions, que se encarga de obtener los datos más actualizados.(Pamela)
    function _getExhibitions(){
      var exhibitionsList = JSON.parse(localStorage.getItem('lsExhibitionsList'));
      if(exhibitionsList == null){
        exhibitionsList = exhibitions;
      }
      return exhibitionsList;
    }// Cierre de la función getExhibitions.(Pamela)

    // Inicio de la función updateExhibitions, que se encarga de permitir la edición de datos.(Pamela)
    function _updateExhibitions(pobjExhibition){
      var exhibitionsList = _getExhibitions();
      for(var i = 0; i < exhibitionsList.length; i++){
        if(exhibitionsList[i].nameExhibition == pobjExhibition.nameExhibition){
          exhibitionsList[i] = pobjExhibition;
        }
      }
      localStorage.setItem('lsExhibitionsList', JSON.stringify(exhibitionsList));
    }// Cierre de la función updateExhibitions.(Pamela)

    //función que actualiza el estado.(Pamela)
    function _updateState(pexhibitionsList){

      localStorage.setItem('lsExhibitionsList', JSON.stringify(pexhibitionsList));
    }//cierre función updateState.(Pamela)


  }// Fin de función exhibitionService.(Pamela)

})();
