(function(){
  angular
  .module('fctApp')
  .service('studentService', studentService);

  // Inicio de función exhibitionService.(Pamela)
  function studentService($http){
    var students = [];
    var publicAPI = {
      setStudents : _setStudents,
      getStudents : _getStudents,
      updateStudent : _updateStudent,
      updateState: _updateState
    }; // Cierre del publicAPI.(Pamela)
    return publicAPI;

  // Inicio de la funcion setStudents, que se encarga de registar los datos en el localStorage.(Pamela)
    function _setStudents(pStudent){
      return $http.post('http://localhost:3000/api/save_students',pStudent)
    }// Cierre de la función setStudents.(Pamela)

    // Inicio de la función getStudents, que se encarga de obtener los datos más actualizados.(Pamela)
    function _getStudents(){
      return $http.get('http://localhost:3000/api/get_all_students');
    }// Cierre de la función getStudents.(Pamela)

    //funcíon que actualiza los datos
      function _updateStudent(pobjStudent){
        console.log(pobjStudent);
        return $http.put('http://localhost:3000/api/update_student',pobjStudent);
      }//cierre función updatedAcademy

      //función que actualiza el estado
      function _updateState(pStudentList){
         $http.put('http://localhost:3000/api/update_state_students',pStudentList);
      }//cierre función updateState

    }//cierre función principal del service

})();
