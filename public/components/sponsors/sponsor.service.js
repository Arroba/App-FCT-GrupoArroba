(function(){
  angular
  .module('fctApp')
  .service('sponsorService', sponsorService);

  function sponsorService($http){//Función oculta datos al público
    var sponsors = [];
    var publicAPI = {
      setSponsors : _setSponsors,
      getSponsors : _getSponsors,
      updateSponsor : _updateSponsor,
      updateState: _updateState
    };
    return publicAPI;//Función oculta datos al público

    function _setSponsors(pSponsor){//Función envía datos al LS
        return $http.post('http://localhost:3000/api/save_sponsors',pSponsor)
    }//Fin función envía datos al LS

    function _getSponsors(){//funcion que toma datos del LS
      return $http.get('http://localhost:3000/api/get_all_sponsors');
    }//Fin funcion que toma datos del LS

    //funcíon que actualiza los datos
        function _updateSponsor(pobjSponsor){
          console.log(pobjSponsor);
          return $http.put('http://localhost:3000/api/update_sponsor',pobjSponsor);
        }//cierre función updatedAcademy

        //función que actualiza el estado
        function _updateState(pSponsorList){
          return $http.put('http://localhost:3000/api/update_sponsor',pSponsorList);
        }//cierre función updateState

      }//cierre función principal del service
})();
