(function () {
  angular
  .module('fctApp')
  .service('blazeService', blazeService
);

  function blazeService(){
    var blazes = [];
    var publicAPI = {
      setBlazes : _setBlazes,
      getBlazes : _getBlazes,
      updateBlazes  : _updateBlazes,

    };
    return publicAPI;

    function _setBlazes(pBlazes){
      var blazesList = _getBlazes();

      blazesList.push(pBlazes);
      localStorage.setItem('lsBlazesList', JSON.stringify(blazesList));
    }

    function _getBlazes(){
      var blazesList = JSON.parse(localStorage.getItem('lsBlazesList'));
      if(blazesList == null){
        blazesList = blazes;
      }
      return blazesList;
    }

    function _updateBlazes(pobjBlazes){
      var blazesList = _getBlazes();
      for(var i = 0; i < blazesList.length; i++){
        if(blazesList[i].nameBlaze == pobjBlazes.nameBlaze){
          blazesList[i] = pobjBlazes;
        }
      }
      localStorage.setItem('lsBlazesList', JSON.stringify(blazesList));
    }

  }

})();
