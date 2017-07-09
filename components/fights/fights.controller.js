// Hecho por Fabián Quirós
(function(){
  angular
    .module('fctApp')
    .controller('fightsController', fightsController);

    function fightsController(fightsService,$scope){

      var vm = this;

      // Inicio de la función init que es la que se inicializa de primiera
      function init(){
        vm.fights = fightsService.getFights();
      }init(); // Cierre de la función init

      $scope.pagina = 1;
      $scope.siguiente = function() {
        $scope.pagina++;
      }

      $scope.anterior = function() {
        $scope.pagina--;
      }

      // Inicio de la función save, que se encarga de obtener los datos y enviarlos para ser guardados
      vm.save= function(){
        var newFights = {
          // nombre del evento
          nameEvent: vm.nameEvent,
          // datos de la primera competición
          genderComp1: vm.genderComp1,
          weightCategoryComp1: vm.weightCategoryComp1,
          ageCategoryComp1: vm.ageCategoryComp1,
          name1Compe1: vm.name1Compe1,
          name2Compe1: vm.name2Compe1,
          name3Compe1: vm.name3Compe1,
          name4Compe1: vm.name4Compe1,
          name5Compe1: vm.name5Compe1,
          points1Compe1: Number(0),
          points2Compe1: Number(0),
          points3Compe1: Number(0),
          points4Compe1: Number(0),
          points5Compe1: Number(0),
          // fin datos primera competición
          // datos de la segunda competición
          genderComp2: vm.genderComp2,
          weightCategoryComp2: vm.weightCategoryComp2,
          ageCategoryComp2: vm.ageCategoryComp2,
          name1Compe2: vm.name1Compe2,
          name2Compe2: vm.name2Compe2,
          name3Compe2: vm.name3Compe2,
          name4Compe2: vm.name4Compe2,
          name5Compe2: vm.name5Compe2,
          points1Compe2: Number(0),
          points2Compe2: Number(0),
          points3Compe2: Number(0),
          points4Compe2: Number(0),
          points5Compe2: Number(0),
          // fin datos segunda competición
          // datos de la tercera competición
          genderComp3: vm.genderComp3,
          weightCategoryComp3: vm.weightCategoryComp3,
          ageCategoryComp3: vm.ageCategoryComp3,
          name1Compe3: vm.name1Compe3,
          name2Compe3: vm.name2Compe3,
          name3Compe3: vm.name3Compe3,
          name4Compe3: vm.name4Compe3,
          name5Compe3: vm.name5Compe3,
          points1Compe3: Number(0),
          points2Compe3: Number(0),
          points3Compe3: Number(0),
          points4Compe3: Number(0),
          points5Compe3: Number(0),
          // fin datos cuarta competición
          genderComp4: vm.genderComp4,
          weightCategoryComp4: vm.weightCategoryComp4,
          ageCategoryComp4: vm.ageCategoryComp4,
          name1Compe4: vm.name1Compe4,
          name2Compe4: vm.name2Compe4,
          name3Compe4: vm.name3Compe4,
          name4Compe4: vm.name4Compe4,
          name5Compe4: vm.name5Compe3,
          points1Compe4: Number(0),
          points2Compe4: Number(0),
          points3Compe4: Number(0),
          points4Compe4: Number(0),
          points5Compe4: Number(0),
          // fin datos cuarta competición
          status: 'Activo'
        } // Cierre de newFights
        fightsService.setFights(newFights);
        init();
        clean();
      } // Cierre de la función save

      // Inicio: de la función getInfo, que se encarga de obtener los datos
      vm.getInfo = function(pFights){
        vm.nameEvent = pFights.nameEvent;
        // datos de la primera competición
        vm.genderComp1 = pFights.genderComp1,
        vm.weightCategoryComp1 = pFights.weightCategoryComp1,
        vm.ageCategoryComp1 = pFights.ageCategoryComp1,
        vm.name1Compe1 = pFights.name1Compe1,
        vm.name2Compe1 = pFights.name2Compe1,
        vm.name3Compe1 = pFights.name3Compe1,
        vm.name4Compe1 = pFights.name4Compe1,
        vm.name5Compe1 = pFights.name5Compe1,
        // fin datos primera competición
        // datos de la segunda competición
        vm.genderComp2 = pFights.genderComp2,
        vm.weightCategoryComp2 = pFights.weightCategoryComp2,
        vm.ageCategoryComp2 = pFights.ageCategoryComp2,
        vm.name1Compe2 = pFights.name1Compe2,
        vm.name2Compe2 = pFights.name2Compe2,
        vm.name3Compe2 = pFights.name3Compe2,
        vm.name4Compe2 = pFights.name4Compe2,
        vm.name5Compe2 = pFights.name5Compe2,
        // fin datos segunda competición
        // datos de la tercera competición
        vm.genderComp3 = pFights.genderComp3,
        vm.weightCategoryComp3 = pFights.weightCategoryComp3,
        vm.ageCategoryComp3 = pFights.ageCategoryComp3,
        vm.name1Compe3 = pFights.name1Compe3,
        vm.name2Compe3 = pFights.name2Compe3,
        vm.name3Compe3 = pFights.name3Compe3,
        vm.name4Compe3 = pFights.name4Compe3,
        vm.name5Compe3 = pFights.name5Compe3,
        // fin datos cuarta competición
        vm.genderComp4 = pFights.genderComp4,
        vm.weightCategoryComp4 = pFights.weightCategoryComp4,
        vm.ageCategoryComp4 = pFights.ageCategoryComp4,
        vm.name1Compe4 = pFights.name1Compe4,
        vm.name2Compe4 = pFights.name2Compe4,
        vm.name3Compe4 = pFights.name3Compe4,
        vm.name4Compe4 = pFights.name4Compe4,
        vm.name5Compe4 = pFights.name5Compe4;
        // fin datos cuarta competición
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
        vm.nameEvent,
        // datos de la primera competición
        vm.genderComp1='';
        vm.weightCategoryComp1='';
        vm.ageCategoryComp1='';
        vm.name1Compe1='';
        vm.name2Compe1='';
        vm.name3Compe1='';
        vm.name4Compe1='';
        // fin datos primera competición
        // datos de la segunda competición
        vm.genderComp2='';
        vm.weightCategoryComp2='';
        vm.ageCategoryComp2='';
        vm.name1Compe2='';
        vm.name2Compe2='';
        vm.name3Compe2='';
        vm.name4Compe2='';
        // fin datos segunda competición
        // datos de la tercera competición
        vm.genderComp3='';
        vm.weightCategoryComp3='';
        vm.ageCategoryComp3='';
        vm.name1Compe3='';
        vm.name2Compe3='';
        vm.name3Compe3='';
        vm.name4Compe3='';
        // fin datos cuarta competición
        vm.genderComp4='';
        vm.weightCategoryComp4='';
        vm.ageCategoryComp4='';
        vm.name1Compe4='';
        vm.name2Compe4='';
        vm.name3Compe4='';
        vm.name4Compe4='';
        // fin datos cuarta competición
        status: 'Activo'
      } // Cierre de la función clean

      //Puntuación competición 1
      //función que asigna puntos
      vm.assingPointsOneName1Comp1 = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].name1Compe1 == pFights.name1Compe1) {
              fightsList[i].points1Compe1 = Number(pFights.points1Compe1 + 1);
              document.querySelector("#points1Compe1").value=  Number(fightsList[i].points1Compe1) ;
            }
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

      vm.assingPointsOneName2Comp1 = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].name2Compe1 == pFights.name2Compe1) {
              fightsList[i].points2Compe1 = Number(pFights.points2Compe1 + 1);
              document.querySelector("#points2Compe1").value=  Number(fightsList[i].points2Compe1) ;
            }
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

      vm.assingPointsOneName3Comp1 = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].name3Compe1 == pFights.name3Compe1) {
              fightsList[i].points3Compe1 = Number(pFights.points3Compe1 + 1);
              document.querySelector("#points3Compe1").value=  Number(fightsList[i].points3Compe1) ;
            }
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

      vm.assingPointsOneName4Comp1 = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].name4Compe1 == pFights.name4Compe1) {
              fightsList[i].points4Compe1 = Number(pFights.points4Compe1 + 1);
              document.querySelector("#points4Compe1").value=  Number(fightsList[i].points4Compe1) ;
            }
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

      vm.assingPointsOneName5Comp1 = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].name5Compe1 == pFights.name5Compe1) {
              fightsList[i].points5Compe1 = Number(pFights.points5Compe1 + 1);
              document.querySelector("#points5Compe1").value=  Number(fightsList[i].points5Compe1) ;
            }
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints
      // cierre asignación de puntos para la primera competición

      //Puntuación competición 2
      //función que asigna puntos
      vm.assingPointsOneName1Comp2 = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].name1Compe2 == pFights.name1Compe2) {
              fightsList[i].points1Compe2 = Number(pFights.points1Compe2 + 1);
              document.querySelector("#points1Compe2").value=  Number(fightsList[i].points1Compe2) ;
            }
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

      vm.assingPointsOneName2Comp2 = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].name2Compe2 == pFights.name2Compe2) {
              fightsList[i].points2Compe2 = Number(pFights.points2Compe2 + 1);
              document.querySelector("#points2Compe2").value=  Number(fightsList[i].points2Compe2) ;
            }
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

      vm.assingPointsOneName3Comp2 = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].name3Compe2 == pFights.name3Compe2) {
              fightsList[i].points3Compe2 = Number(pFights.points3Compe2 + 1);
              document.querySelector("#points3Compe2").value=  Number(fightsList[i].points3Compe2) ;
            }
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

      vm.assingPointsOneName4Comp2 = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].name4Compe2 == pFights.name4Compe2) {
              fightsList[i].points4Compe2 = Number(pFights.points4Compe2 + 1);
              document.querySelector("#points4Compe2").value=  Number(fightsList[i].points4Compe2) ;
            }
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

      vm.assingPointsOneName5Comp2 = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].name5Compe2 == pFights.name5Compe2) {
              fightsList[i].points5Compe2 = Number(pFights.points5Compe2 + 1);
              document.querySelector("#points5Compe2").value=  Number(fightsList[i].points5Compe2) ;
            }
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

      //Puntuación competición 3
      //función que asigna puntos
      vm.assingPointsOneName1Comp3 = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].name1Compe3 == pFights.name1Compe3) {
              fightsList[i].points1Compe3 = Number(pFights.points1Compe3 + 1);
              document.querySelector("#points1Compe3").value=  Number(fightsList[i].points1Compe3) ;
            }
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

      vm.assingPointsOneName2Comp3 = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].name2Compe3 == pFights.name2Compe3) {
              fightsList[i].points2Compe3 = Number(pFights.points2Compe3 + 1);
              document.querySelector("#points2Compe3").value=  Number(fightsList[i].points2Compe3) ;
            }
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

      vm.assingPointsOneName3Comp3 = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].name3Compe3 == pFights.name3Compe3) {
              fightsList[i].points3Compe3 = Number(pFights.points3Compe3 + 1);
              document.querySelector("#points3Compe3").value=  Number(fightsList[i].points3Compe3) ;
            }
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

      vm.assingPointsOneName4Comp3 = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].name4Compe3 == pFights.name4Compe3) {
              fightsList[i].points4Compe3 = Number(pFights.points4Compe3 + 1);
              document.querySelector("#points4Compe3").value=  Number(fightsList[i].points4Compe3) ;
            }
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

      vm.assingPointsOneName5Comp3 = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].name5Compe3 == pFights.name5Compe3) {
              fightsList[i].points5Compe3 = Number(pFights.points5Compe3 + 1);
              document.querySelector("#points5Compe3").value=  Number(fightsList[i].points5Compe3) ;
            }
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

      //Puntuación competición 4
      //función que asigna puntos
      vm.assingPointsOneName1Comp4 = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].name1Compe4 == pFights.name1Compe4) {
              fightsList[i].points1Compe4 = Number(pFights.points1Compe4 + 1);
              document.querySelector("#points1Compe4").value=  Number(fightsList[i].points1Compe4) ;
            }
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

      vm.assingPointsOneName2Comp4 = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].name2Compe4 == pFights.name2Compe4) {
              fightsList[i].points2Compe4 = Number(pFights.points2Compe4 + 1);
              document.querySelector("#points2Compe4").value=  Number(fightsList[i].points2Compe4) ;
            }
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

      vm.assingPointsOneName3Comp4 = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].name3Compe4 == pFights.name3Compe4) {
              fightsList[i].points3Compe4 = Number(pFights.points3Compe4 + 1);
              document.querySelector("#points3Compe4").value=  Number(fightsList[i].points3Compe4) ;
            }
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

      vm.assingPointsOneName4Comp4 = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].name4Compe4 == pFights.name4Compe4) {
              fightsList[i].points4Compe4 = Number(pFights.points4Compe4 + 1);
              document.querySelector("#points4Compe4").value=  Number(fightsList[i].points4Compe4) ;
            }
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints

      vm.assingPointsOneName5Comp4 = function(pFights){
        var fightsList = fightsService.getFights();
          for (var i = 0; i < fightsList.length; i++) {
            if (fightsList[i].name5Compe4 == pFights.name5Compe4) {
              fightsList[i].points5Compe4 = Number(pFights.points5Compe4 + 1);
              document.querySelector("#points5Compe4").value=  Number(fightsList[i].points5Compe4) ;
            }
          } // Cierre del ciclo
        fightsService.updateState(fightsList);
        init();
      }// Cierre de la funcion assingPoints4

    }// Cierre de la función fightsController
})();
