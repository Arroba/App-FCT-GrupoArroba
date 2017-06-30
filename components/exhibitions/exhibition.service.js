(function () {
  angular
  .module('fctApp')
  .service('exhibitionService', exhibitionService);

  function exhibitionService(){
    var exhibitions = [];
    var publicAPI = {
      setExhibitions : _setExhibitions,
      getExhibitions  : _getExhibitions,
      updateExhibitions  : _updateExhibitions,

    };
    return publicAPI;

    function _setExhibitions(pExhibition){
      var exhibitionsList = _getExhibitions();

      exhibitionsList.push(pExhibition);
      localStorage.setItem('lsExhibitionsList', JSON.stringify(exhibitionsList));
    }

    function _getExhibitions(){
      var exhibitionsList = JSON.parse(localStorage.getItem('lsExhibitionsList'));
      if(exhibitionsList == null){
        exhibitionsList = exhibitions;
      }
      return exhibitionsList;
    }

    function _updateExhibitions(pobjExhibition){
      var exhibitionsList = _getExhibitions();
      for(var i = 0; i < exhibitionsList.length; i++){
        if(exhibitionsList[i].nameExhibition == pobjExhibition.nameExhibition){
          exhibitionsList[i] = pobjExhibition;
        }
      }
      localStorage.setItem('lsExhibitionsList', JSON.stringify(exhibitionsList));
    }

  }

})();
