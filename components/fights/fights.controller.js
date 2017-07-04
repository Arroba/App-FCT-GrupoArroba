// Hecho por Fabián Quirós
(function(){
  angular
    .module('fctApp')
    .controller('fightsController', fightsController);
    function fightsController(fightsService,competitionService){

      var vm = this;

      // Inicio de la función init que es la que se inicializa de primiera
      function init(){
        vm.fights = fightsService.getFights();
        vm.competitionRel = competitionService.getCompetition();
      }init(); // Cierre de la función init

      // Inicio de la función save, que se encarga de obtener los datos y enviarlos para ser guardados
      vm.save= function(){
        var newFights = {
          studentOne: vm.studentOne,
          studentTwo: vm.studentTwo,
          studentThree: vm.studentThree,
          studentFour: vm.studentFour,
          studentFive: vm.studentFive,
          studentSix: vm.studentSix,
          studentSeven: vm.studentSeven,
          studentEight: vm.studentEight,
          status: 'Activo',
          pointsOne: Number(0),
          pointsTwo: Number(0),
          pointsThree: Number(0),
          pointsFour: Number(0),
          pointsFive: Number(0),
          pointsSix: Number(0),
          pointsSeven: Number(0),
          pointsEight: Number(0)
        } // Cierre de newFights
        fightsService.setFights(newFights);
        init();
        clean();
      } // Cierre de la función save

      // Inicio: de la función getInfo, que se encarga de obtener los datos
      vm.getInfo = function(pFights){
        vm.studentOne = pFights.studentOne;
        vm.studentTwo = pFights.studentTwo;
        vm.studentThree = pFights.studentThree;
        vm.studentFour = pFights.studentFour;
        vm.studentFive = pFights.studentFive;
        vm.studentSix = pFights.studentSix;
        vm.studentSeven = pFights.studentSeven;
        vm.studentEight = pFights.studentEight;
      } // Cierre de la función getInfo

      // Inicio de la función update, que se encarga de devolver los datos para ser editados
      vm.update = function(){
        var fightsEdit = {
          studentOne: vm.studentOne,
          studentTwo: vm.studentTwo,
          studentThree: vm.studentThree,
          studentFour: vm.studentFour,
          studentFive: vm.studentFive,
          studentSix: vm.studentSix,
          studentSeven: vm.studentSeven,
          studentEight: vm.studentEight,
          status: 'Activo',
          pointsOne: Number(0),
          pointsTwo: Number(0),
          pointsThree: Number(0),
          pointsFour: Number(0),
          pointsFive: Number(0),
          pointsSix: Number(0),
          pointsSeven: Number(0),
          pointsEight: Number(0)
        } // Cierre de fightsEdit
        fightsService.updateFight(fightsEdit);
        init();
        clean();
      } // Cierre de la función update

      // Inicio de la función clean, que se encarga de limpiar los datos despúes de un registro
      function clean(){
        vm.studentOne = '';
        vm.studentTwo = '';
        vm.studentThree = '';
        vm.studentFour = '';
        vm.studentFive = '';
        vm.studentSix = '';
        vm.studentSeven = '';
        vm.studentEight = '';
      } // Cierre de la función clean

      //función que quita puntos
      vm.removeOne = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].studentOne == pFights.studentOne) {
              fightsList[i].pointsOne = Number(pFights.pointsOne - 1);
              console.log(fightsList[i].pointsOne)
            } // Cierre del if
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

      //función que asigna puntos
      vm.assingPointsOne = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].studentOne == pFights.studentOne) {
              // document.getElementById("inputNumero").value="+"+valor;
              fightsList[i].pointsOne = Number(pFights.pointsOne + 1);
              console.log(fightsList[i].pointsOne)
            } // Cierre del if
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

      //función que quita puntos
      vm.removeTwo = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].studentTwo == pFights.studentTwo) {
              fightsList[i].pointsTwo = Number(pFights.pointsTwo - 1);
              console.log(fightsList[i].pointsTwo)
            } // Cierre del if
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

      //función que asigna puntos
      vm.assingPointsTwo = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].studentTwo == pFights.studentTwo) {
              // document.getElementById("inputNumero").value="+"+valor;
              fightsList[i].pointsTwo = Number(pFights.pointsTwo + 1);
              console.log(fightsList[i].pointsTwo)
            } // Cierre del if
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

      //función que quita puntos
      vm.removeThree = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].studentThree == pFights.studentThree) {
              fightsList[i].pointsThree = Number(pFights.pointsThree - 1);
              console.log(fightsList[i].pointsThree)
            } // Cierre del if
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

      //función que asigna puntos
      vm.assingPointsThree = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].studentThree == pFights.studentThree) {
              // document.getElementById("inputNumero").value="+"+valor;
              fightsList[i].pointsThree = Number(pFights.pointsThree + 1);
              console.log(fightsList[i].pointsThree)
            } // Cierre del if
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

      //función que quita puntos
      vm.removeFour = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].studentFour == pFights.studentFour) {
              fightsList[i].pointsFour = Number(pFights.pointsFour - 1);
              console.log(fightsList[i].pointsFour)
            } // Cierre del if
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

      //función que asigna puntos
      vm.assingPointsFour = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].studentFour == pFights.studentFour) {
              // document.getElementById("inputNumero").value="+"+valor;
              fightsList[i].pointsFour = Number(pFights.pointsFour + 1);
              console.log(fightsList[i].pointsFour)
            } // Cierre del if
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

      //función que quita puntos
      vm.removeFive = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].studentFive == pFights.studentFive) {
              fightsList[i].pointsFive = Number(pFights.pointsFive - 1);
              console.log(fightsList[i].pointsFive)
            } // Cierre del if
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

      //función que asigna puntos
      vm.assingPointsFive = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].studentFive == pFights.studentFive) {
              // document.getElementById("inputNumero").value="+"+valor;
              fightsList[i].pointsFive = Number(pFights.pointsFive + 1);
              console.log(fightsList[i].pointsFive)
            } // Cierre del if
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

      //función que quita puntos
      vm.removeSix = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].studentSix == pFights.studentSix) {
              fightsList[i].pointsSix = Number(pFights.pointsSix - 1);
              console.log(fightsList[i].pointsSix)
            } // Cierre del if
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

      //función que asigna puntos
      vm.assingPointsSix = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].studentSix == pFights.studentSix) {
              // document.getElementById("inputNumero").value="+"+valor;
              fightsList[i].pointsSix = Number(pFights.pointsSix + 1);
              console.log(fightsList[i].pointsSix)
            } // Cierre del if
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

      //función que quita puntos
      vm.removeSeven = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].studentSeven == pFights.studentSeven) {
              fightsList[i].pointsSeven = Number(pFights.pointsSeven - 1);
              console.log(fightsList[i].pointsSeven)
            } // Cierre del if
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

      //función que asigna puntos
      vm.assingPointsSeven = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].studentSeven == pFights.studentSeven) {
              // document.getElementById("inputNumero").value="+"+valor;
              fightsList[i].pointsSeven = Number(pFights.pointsSeven + 1);
              console.log(fightsList[i].pointsSeven)
            } // Cierre del if
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

      //función que quita puntos
      vm.removeEight = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].studentEight == pFights.studentEight) {
              fightsList[i].pointsEight = Number(pFights.pointsEight - 1);
              console.log(fightsList[i].pointsEight)
            } // Cierre del if
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

      //función que asigna puntos
      vm.assingPointsEight = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].studentEight == pFights.studentEight) {
              // document.getElementById("inputNumero").value="+"+valor;
              fightsList[i].pointsEight = Number(pFights.pointsEight + 1);
              console.log(fightsList[i].pointsEight)
            } // Cierre del if
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

    }// Cierre de la función fightsController
})();
