(function(){
  angular
  .module('fctApp')
  .service('exhibitionService', exhibitionService);

  function exhibitionService($http){//Función oculta datos al público
    var exhibitions = [];
    var publicAPI = {
      setExhibitions : _setExhibitions,
      getExhibitions : _getExhibitions,
      updateExhibition : _updateExhibition,
      updateState: _updateState
    };
    return publicAPI;//Función oculta datos al público

    function _setExhibitions(pExhibition){//Función envía datos al LS
        return $http.post('http://localhost:3000/api/save_exhibitions',pExhibition)
    }//Fin función envía datos al LS

    function _getExhibitions(){//funcion que toma datos del LS
      return $http.get('http://localhost:3000/api/get_all_exhibitions');
    }//Fin funcion que toma datos del LS

    //funcíon que actualiza los datos
        function _updateExhibition(pobjExhibiton){
          console.log(pobjExhibiton);
          return $http.put('http://localhost:3000/api/update_sponsor',pobjExhibiton);
        }//cierre función updatedAcademy

        //función que actualiza el estado
        function _updateState(pExhibitionList){
          return $http.put('http://localhost:3000/api/update_sponsor',pExhibitionList);
        }//cierre función updateState

      }//cierre función principal del service
})();
