(function(){
  angular
  .module('fctApp')
  .service('studentService', studentService);

  // Inicio de función exhibitionService.(Pamela)
  function studentService(){
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
      var studentsList = _getStudents();

      studentsList.push(pStudent);
      localStorage.setItem('lsUsersList', JSON.stringify(studentsList));
    }// Cierre de la función setStudents.(Pamela)

    // Inicio de la función getStudents, que se encarga de obtener los datos más actualizados.(Pamela)
    function _getStudents(){
      var studentsList = JSON.parse(localStorage.getItem('lsUsersList'));
      if(studentsList == null){
        studentsList = students;
      }
      return studentsList;
    }// Cierre de la función getStudents.(Pamela)

    // Inicio de la función updateStudent, que se encarga de permitir la edición de datos.(Pamela)
    function _updateStudent(pobjStudent){
      var studentsList = _getStudents();
      for(var i = 0; i < studentsList.length; i++){
        if(studentsList[i].id == pobjStudent.id){
          studentsList[i] = pobjStudent;
        }
      }
      localStorage.setItem('lsUsersList', JSON.stringify(studentsList));
    }// Cierre de la función updateStudent.(Pamela)

    //función que actualiza el estado.(Pamela)
    function _updateState(pStudentsList){

      localStorage.setItem('lsUsersList', JSON.stringify(pStudentsList));
    }//cierre función updateState.(Pamela)

  }//Fin función studentService.(Pamela)
})();
