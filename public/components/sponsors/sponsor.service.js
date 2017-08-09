(function(){
  angular
  .module('fctApp')
  .service('sponsorService', sponsorService);

  function sponsorService(){//Función oculta datos al público
    var sponsors = [];
    var publicAPI = {
      setSponsors : _setSponsors,
      getSponsors : _getSponsors,
      updateSponsor : _updateSponsor,
      updateState: _updateState
    };
    return publicAPI;//Función oculta datos al público

    function _setSponsors(pSponsor){//Función envía datos al LS
      var sponsorsList = _getSponsors();

      sponsorsList.push(pSponsor);
      localStorage.setItem('lsSponsorsList', JSON.stringify(sponsorsList));
    }//Fin función envía datos al LS

    function _getSponsors(){//funcion que toma datos del LS
      var sponsorsList = JSON.parse(localStorage.getItem('lsSponsorsList'));
      if(sponsorsList == null){
        sponsorsList = sponsors;
      }
      return sponsorsList;
    }//Fin funcion que toma datos del LS

    function _updateSponsor(pobjSponsor){//Funcíon que actualiza patrocinador
      var sponsorsList = _getSponsors();
      for(var i = 0; i < sponsorsList.length; i++){
        if(sponsorsList[i].idSponsorRep === pobjSponsor.idSponsorRep){
          sponsorsList[i] = pobjSponsor;
        }
      }
      localStorage.setItem('lsSponsorsList', JSON.stringify(sponsorsList));
    }//Fin funcíon que actualiza patrocinador

    //Función actualiza estado del PATROCINADOR
      function _updateState(pSponsorList){
        localStorage.setItem('lsSponsorsList', JSON.stringify(pSponsorList));
      }//Fin función actualiza estado del PATROCINADOR
  }//Fin función oculta datos al público
})();
