(function(){
  angular
  .module('fctApp')
  .service('teacherService', teacherService);

  // Inicio de función teacherService
  function teacherService($http){
    var teachers = [];
    var publicAPI = {
      setTeachers : _setTeachers,
      getTeachers : _getTeachers,
      updateTeacher : _updateTeacher
      // updateState: _updateState
    }; // Cierre del publicAPI
    return publicAPI;


    // Inicio de la funcion setTeachers, que se encarga de registar los datos en el localStorage
    function _setTeachers(pTeacher){
      return $http.post('http://localhost:3000/api/save_teachers',pTeacher)
    } // Cierre de la función setTeachers


    // Inicio de la función getTeachers, que se encarga de obtener los datos más actualizados
    function _getTeachers(){
      return $http.get('http://localhost:3000/api/get_all_teachers');
    } // Cierre de la funcíon getTeachers


    // Inicio de la función updateTeacher, que se encarga de permitir la edición de datos
    function _updateTeacher(pobjTeacher){
      console.log(pobjTeacher);
      return $http.put('http://localhost:3000/api/update_teacher',pobjTeacher);
    }// Fin de la función updateTeacher





    // function _updateState(pTeacherList){
    //   return $http.put('http://localhost:3000/api/update_teacher',pTeacherList);
    // }


  }// Fin de función teacherService
})();
