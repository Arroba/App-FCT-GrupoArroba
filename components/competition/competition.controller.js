// Hecho por Fabián Quirós
(function(){
  angular
    .module('fctApp')
    .controller('competitionController', competitionController);
    function competitionController(competitionService,studentService,placeService){

      var vm = this;
      vm.to = new Date();

      // Inicio de la función init que es la que se inicializa de primiera
      function init(){
        vm.competition = competitionService.getCompetition();
        vm.studentRel = studentService.getStudents();
        vm.placeRel = placeService.getPlace();
      }init(); // Cierre de la función init

      // Inicio de la función save, que se encarga de obtener los datos y enviarlos para ser guardados
      vm.save= function(){
        var newCompetition = {
          name: vm.name,
          time: vm.time,
          place: vm.place,
          ageCategory: vm.ageCategory,
          weightCategory: vm.weightCategory,
          grade: vm.grade,
          gender: vm.gender,
          age: vm.age,
          weight: vm.weight,
          cost: vm.cost,
          status: 'Activo'
        } // Cierre de newCompetition
        competitionService.setCompetition(newCompetition);
        init();
        clean();
      } // Cierre de la función save

      // Inicio: de la función getInfo, que se encarga de obtener los datos
      vm.getInfo = function(pCompetition){
        vm.name = pCompetition.name;
        vm.time = new Date(pCompetition.time);
        vm.place = pCompetition.place;
        vm.ageCategory = pCompetition.ageCategory;
        vm.weightCategory = pCompetition.weightCategory;
        vm.grade = pCompetition.grade;
        vm.gender = pCompetition.gender;
        vm.age = pCompetition.age;
        vm.weight = pCompetition.weight;
        vm.cost = pCompetition.cost;
      } // Cierre de la función getInfo

      // Inicio de la función update, que se encarga de devolver los datos para ser editados
      vm.update = function(){
        var competitionEdit = {
          name: vm.name,
          time: vm.time,
          place: vm.place,
          ageCategory: vm.ageCategory,
          weightCategory: vm.weightCategory,
          grade: vm.grade,
          gender: vm.gender,
          age: vm.age,
          weight: vm.weight,
          cost: vm.cost,
          status: 'Activo'
        } // Cierre de competitionEdit
        competitionService.updateCompetition(competitionEdit);
        init();
        clean();
      } // Cierre de la función update

      // Inicio de la función clean, que se encarga de limpiar los datos despúes de un registro
      function clean(){
        vm.name = '';
        vm.time = '';
        vm.place = '';
        vm.ageCategory= '';
        vm.weightCategory= '';
        vm.grade = '';
        vm.gender = '';
        vm.age = '';
        vm.weight = '';
        vm.cost = '';
      } // Cierre de la función clean

      //función que cambia el estado a inabilitado
      vm.inactive = function(pCompetition){
        var competitionList = competitionService.getCompetition();
          for (var i = 0; i < competitionList.length; i++) {
            if (competitionList[i].name == pCompetition.name) {
              competitionList[i].status = 'inhabilitado';
              console.log(competitionList[i].status)
            }// Cierre del if
          }// Cierre del ciclo
        competitionService.updateState(competitionList);
        init();
      }// Cierre funcion inative

      //función que cambia el estado a activo
      vm.active = function(pCompetition){
        var competitionList = competitionService.getCompetition();
          for (var i = 0; i < competitionList.length; i++) {
            if (competitionList[i].name == pCompetition.name) {
              competitionList[i].status = 'Activo';
              console.log(competitionList[i].status)
            }// Cierre del if
          }// Cierre del ciclo
        competitionService.updateState(competitionList);
        init();
      }// Cierre de la funcion active

      //función que cambia el estado a Disqualify
      vm.Disqualify = function(pCompetition){
        var competitionList = competitionService.getCompetition();
          for (var i = 0; i < competitionList.length; i++) {
            if (competitionList[i].name == pCompetition.name) {
              competitionList[i].status = 'Descalificado';
              console.log(competitionList[i].status)
            }// Cierre del if
          }// Cierre del ciclo
        competitionService.updateState(competitionList);
        init();
      }// Cierre de la funcion Disqualify

    }// Cierre de la función competitionController
})();
