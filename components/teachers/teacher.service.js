// Hecho por Fabián
(function(){
  angular
  .module('fctApp')
  .service('teacherService', teacherService);

  // Inicio de función teacherService
  function teacherService(){
    var teachers = [];
    var publicAPI = {
      setTeachers : _setTeachers,
      getTeachers : _getTeachers,
      updateTeacher : _updateTeacher,
      updateState: _updateState
    }; // Cierre del publicAPI
    return publicAPI;


    // Inicio de la funcion setTeachers, que se encarga de registar los datos en el localStorage
    function _setTeachers(pTeacher){
      var teachersList = _getTeachers();

      teachersList.push(pTeacher);
      localStorage.setItem('lsUsersList', JSON.stringify(teachersList));
    } // Cierre de la función setTeachers


    // Inicio de la función getTeachers, que se encarga de obtener los datos más actualizados
    function _getTeachers(){
      var teachersList = JSON.parse(localStorage.getItem('lsUsersList'));
      if(teachersList == null){
        teachersList = teachers;
      } // Cierre del if
      return teachersList;
    } // Cierre de la funcíon getTeachers


    // Inicio de la función updateTeacher, que se encarga de permitir la edición de datos
    function _updateTeacher(pobjTeacher){
      var teachersList = _getTeachers();
      for(var i = 0; i < teachersList.length; i++){
        if(teachersList[i].id == pobjTeacher.id){
          teachersList[i] = pobjTeacher;
        } // Cierre del if
      } // Cierre del ciclo
      localStorage.setItem('lsUsersList', JSON.stringify(teachersList));
    }// Fin de la función updateTeacher


    //función que actualiza el estado
      function _updateState(pTeacherList){

        localStorage.setItem('lsUsersList', JSON.stringify(pTeacherList));
      }//cierre función updateState


  }// Fin de función teacherService
})();
