(function(){
  angular
    .module('fctApp')
    .service('academiesService', academiesService);

    function academiesService(){
      var academies = [];
      var publicAPI = {
        setAcademies : _setAcademies,
        getAcademies : _getAcademies,
        updateAcademy : _updateAcademy,
        updateState: _updateState
      };
      return publicAPI;

      //Función que envía una dato al localStorage
      function _setAcademies(pAcademy){
        var academiesList = _getAcademies();

        academiesList.push(pAcademy);
        localStorage.setItem('lsAcademiesList', JSON.stringify(academiesList));
      }//cierre función setAcademies

      //funcion que toma los datos del localStorage
      function _getAcademies(){
        var academiesList = JSON.parse(localStorage.getItem('lsAcademiesList'));
        if(academiesList == null){
          academiesList = academies;
        }
        return academiesList;
      }//cierre de la función getAcademies

      //funcíon que actualiza los datos
      function _updateAcademy(pUpdatedAcademy){
        var academiesList = _getAcademies();
        for(var i = 0; i < academiesList.length; i++){
          if(academiesList[i].email == pUpdatedAcademy.email){
            academiesList[i] = pUpdatedAcademy;
          }
        }
        localStorage.setItem('lsAcademiesList', JSON.stringify(academiesList));
      }//cierre función updatedAcademy

      //función que actualiza el estado
      function _updateState(pAcademiesList){

        localStorage.setItem('lsAcademiesList', JSON.stringify(pAcademiesList));
      }//cierre función updateState

    }//cierre función principal del service

})();
