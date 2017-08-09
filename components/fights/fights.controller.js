// Hecho por Fabián Quirós
(function(){
  angular
  .module('fctApp')
  .controller('fightsController', fightsController);


  function fightsController(fightsService,$scope,academiesService,studentService,eventsService,$scope,$mdDialog){

    var vm = this;

      // Inicio de la función init que es la que se inicializa de primiera
      function init(){
        vm.fights;
        vm.eventsRel = eventsService.getEvents();
        vm.studentRel = datalistFilter();
        vm.academiesRel = academiesService.getAcademies();
      }init(); // Cierre de la función init

    // Funciones encargadas de devolver o adelantar la página
      // $scope.pagina = 1;
      // $scope.siguiente = function() {
      //   $scope.pagina++;
      // } 

      // $scope.anterior = function() {
      //   $scope.pagina--;
      // }

      // $scope.registro1 = function() {
      //   $scope.pagina = 1;
      // }

      // Inicio de la función save, que se encarga de obtener los datos y enviarlos para ser guardados
      vm.save= function(){
        var newFights = {
          competition: vm.competition,
          competitor: vm.competitor,
          points: Number(0)
        } // Cierre de newFights
        fightsService.setFights(newFights);
        init();
        clean();
      } // Cierre de la función save

      // Filtrar los datos para calendarios

      vm.callCalendar = function(pCompetition){
        showCalendar(pCompetition);
      }

      function showCalendar(pCompetition){
        var fightsList = fightsService.getFights();
        var competitors = [];
          switch (pCompetition) {
            case 'primera':
            for (var i = 0; i < fightsList.length; i++) {
              if (fightsList[i].competition == pCompetition) {
                competitors.push(fightsList[i]);
              }
            } // Cierre del ciclo
          case 'segunda':
            for (var i = 0; i < fightsList.length; i++) {
              if (fightsList[i].competition == pCompetition) {
                competitors.push(fightsList[i]);
              }
            } // Cierre del ciclo
          break;
          case 'tercera':
            for (var i = 0; i < fightsList.length; i++) {
              if (fightsList[i].competition == pCompetition) {
                competitors.push(fightsList[i]);
              }
            } // Cierre del ciclo
          break;
          case 'cuarta':
            for (var i = 0; i < fightsList.length; i++) {
              if (fightsList[i].competition == pCompetition) {
                competitors.push(fightsList[i]);
              }
            } // Cierre del ciclo
          break;
          default:
          break;

        }
        vm.fights = competitors;
        init();
      }
    // fin filtrar los datos para calendarios

      // funcion de filtro para los datalist competición 1

      function datalistFilter(){
        var academyList = academiesService.getAcademies();
        var studentList = studentService.getStudents();
        var eventList = eventsService.getEvents();

        var studentFiltered = [];

        return studentList;

      }// fin de la función encargada de filtrar los datalist

      // Inicio: de la función getInfo, que se encarga de obtener los datos
      vm.getInfo = function(pFights){
        vm.nameEvent = pFights.nameEvent;
        // datos de la primera competición
        vm.name1Compe1 = pFights.name1Compe1;
        vm.name2Compe1 = pFights.name2Compe1;
        vm.name3Compe1 = pFights.name3Compe1;
        vm.name4Compe1 = pFights.name4Compe1;
        vm.name5Compe1 = pFights.name5Compe1;
        // fin datos primera competición
        // datos de la segunda competición
        vm.name1Compe2 = pFights.name1Compe2;
        vm.name2Compe2 = pFights.name2Compe2;
        vm.name3Compe2 = pFights.name3Compe2;
        vm.name4Compe2 = pFights.name4Compe2;
        vm.name5Compe2 = pFights.name5Compe2;
        // fin datos segunda competición
        // datos de la tercera competición
        vm.name1Compe3 = pFights.name1Compe3;
        vm.name2Compe3 = pFights.name2Compe3;
        vm.name3Compe3 = pFights.name3Compe3;
        vm.name4Compe3 = pFights.name4Compe3;
        vm.name5Compe3 = pFights.name5Compe3;
        // fin datos cuarta competición
        vm.name1Compe4 = pFights.name1Compe4;
        vm.name2Compe4 = pFights.name2Compe4;
        vm.name3Compe4 = pFights.name3Compe4;
        vm.name4Compe4 = pFights.name4Compe4;
        vm.name5Compe4 = pFights.name5Compe4
        // fin datos cuarta competición
      } // Cierre de la función getInfo

      // Inicio de la función update, que se encarga de devolver los datos para ser editados
      vm.update = function(){
        var fightsEdit = {
          nameEvent: vm.nameEvent,
          // Primera Competición
          name1Compe1: vm.name1Compe1,
          name2Compe1: vm.name2Compe1,
          name3Compe1: vm.name3Compe1,
          name4Compe1: vm.name4Compe1,
          name5Compe1: vm.name5Compe1,
          // datos de la segunda competición
          name1Compe2: vm.name1Compe2,
          name2Compe2: vm.name2Compe2,
          name3Compe2: vm.name3Compe2,
          name4Compe2: vm.name4Compe2,
          name5Compe2: vm.name5Compe2,
          // datos de la tercera competición
          name1Compe3: vm.name1Compe3,
          name2Compe3: vm.name2Compe3,
          name3Compe3: vm.name3Compe3,
          name4Compe3: vm.name4Compe3,
          name5Compe3: vm.name5Compe3,
          // Inicio datos cuarta competición
          name1Compe4: vm.name1Compe4,
          name2Compe4: vm.name2Compe4,
          name3Compe4: vm.name3Compe4,
          name4Compe4: vm.name4Compe4,
          name5Compe4: vm.name5Compe3,
        } // Cierre de fightsEdit
        fightsService.updateFight(fightsEdit);
        init();
        clean();
      } // Cierre de la función update

      // Inicio de la función clean, que se encarga de limpiar los datos despúes de un registro
      function clean(){
        vm.nameEvent='';
        // datos de la primera competición
        vm.name1Compe1='';
        vm.name2Compe1='';
        vm.name3Compe1='';
        vm.name4Compe1='';
        // fin datos primera competición
        // datos de la segunda competición
        vm.name1Compe2='';
        vm.name2Compe2='';
        vm.name3Compe2='';
        vm.name4Compe2='';
        // fin datos segunda competición
        // datos de la tercera competición
        vm.name1Compe3='';
        vm.name2Compe3='';
        vm.name3Compe3='';
        vm.name4Compe3='';
        // fin datos cuarta competición
        vm.name1Compe4='';
        vm.name2Compe4='';
        vm.name3Compe4='';
        vm.name4Compe4='';
        // fin datos cuarta competición
        status: 'Activo'
      } // Cierre de la función clean


      //Puntuación competición 1
      //función que asigna puntos. Funcion final
      $scope.assingPointsOneName1Comp1 = function(pFights){
        var fightsList = fightsService.getFights();
        for (var i = 0; i < fightsList.length; i++) {
          if (fightsList[i].name1Compe1 == pFights.name1Compe1) {
            fightsList[i].points1Compe1 = Number(pFights.points1Compe1 + 1);
            document.querySelector("#points1Compe1").value=  Number(fightsList[i].points1Compe1) ;
          }
          } // Cierre del ciclo
          $scope.showConfirm(fightsList);
      }// Cierre de la funcion assingPoints

      $scope.assingPointsOneName2Comp1 = function(pFights){
        var fightsList = fightsService.getFights();
        for (var i = 0; i < fightsList.length; i++) {
          if (fightsList[i].name2Compe1 == pFights.name2Compe1) {
            fightsList[i].points2Compe1 = Number(pFights.points2Compe1 + 1);
            document.querySelector("#points2Compe1").value=  Number(fightsList[i].points2Compe1) ;
          }
          } // Cierre del ciclo
          $scope.showConfirm(fightsList);
      }// Cierre de la funcion assingPoints

      $scope.assingPointsOneName3Comp1 = function(pFights){
        var fightsList = fightsService.getFights();
        for (var i = 0; i < fightsList.length; i++) {
          if (fightsList[i].name3Compe1 == pFights.name3Compe1) {
            fightsList[i].points3Compe1 = Number(pFights.points3Compe1 + 1);
            document.querySelector("#points3Compe1").value=  Number(fightsList[i].points3Compe1) ;
          }
          } // Cierre del ciclo
          $scope.showConfirm(fightsList);
      }// Cierre de la funcion assingPoints

      $scope.assingPointsOneName4Comp1 = function(pFights){
        var fightsList = fightsService.getFights();
        for (var i = 0; i < fightsList.length; i++) {
          if (fightsList[i].name4Compe1 == pFights.name4Compe1) {
            fightsList[i].points4Compe1 = Number(pFights.points4Compe1 + 1);
            document.querySelector("#points4Compe1").value=  Number(fightsList[i].points4Compe1) ;
          }
          } // Cierre del ciclo
          $scope.showConfirm(fightsList);
      }// Cierre de la funcion assingPoints

      $scope.assingPointsOneName5Comp1 = function(pFights){
        var fightsList = fightsService.getFights();
        for (var i = 0; i < fightsList.length; i++) {
          if (fightsList[i].name5Compe1 == pFights.name5Compe1) {
            fightsList[i].points5Compe1 = Number(pFights.points5Compe1 + 1);
            document.querySelector("#points5Compe1").value=  Number(fightsList[i].points5Compe1) ;
          }
          } // Cierre del ciclo
          $scope.showConfirm(fightsList);
      }// Cierre de la funcion assingPoints
      // cierre asignación de puntos para la primera competición


      //Puntuación competición 2
      //función que asigna puntos
      $scope.assingPointsOneName1Comp2 = function(pFights){
        var fightsList = fightsService.getFights();
        for (var i = 0; i < fightsList.length; i++) {
          if (fightsList[i].name1Compe2 == pFights.name1Compe2) {
            fightsList[i].points1Compe2 = Number(pFights.points1Compe2 + 1);
            document.querySelector("#points1Compe2").value=  Number(fightsList[i].points1Compe2) ;
          }
          } // Cierre del ciclo
          $scope.showConfirm(fightsList);
      }// Cierre de la funcion assingPoints

      $scope.assingPointsOneName2Comp2 = function(pFights){
        var fightsList = fightsService.getFights();
        for (var i = 0; i < fightsList.length; i++) {
          if (fightsList[i].name2Compe2 == pFights.name2Compe2) {
            fightsList[i].points2Compe2 = Number(pFights.points2Compe2 + 1);
            document.querySelector("#points2Compe2").value=  Number(fightsList[i].points2Compe2) ;
          }
          } // Cierre del ciclo
          $scope.showConfirm(fightsList);
      }// Cierre de la funcion assingPoints

      $scope.assingPointsOneName3Comp2 = function(pFights){
        var fightsList = fightsService.getFights();
        for (var i = 0; i < fightsList.length; i++) {
          if (fightsList[i].name3Compe2 == pFights.name3Compe2) {
            fightsList[i].points3Compe2 = Number(pFights.points3Compe2 + 1);
            document.querySelector("#points3Compe2").value=  Number(fightsList[i].points3Compe2) ;
          }
          } // Cierre del ciclo
          $scope.showConfirm(fightsList);
      }// Cierre de la funcion assingPoints

      $scope.assingPointsOneName4Comp2 = function(pFights){
        var fightsList = fightsService.getFights();
        for (var i = 0; i < fightsList.length; i++) {
          if (fightsList[i].name4Compe2 == pFights.name4Compe2) {
            fightsList[i].points4Compe2 = Number(pFights.points4Compe2 + 1);
            document.querySelector("#points4Compe2").value=  Number(fightsList[i].points4Compe2) ;
          }
          } // Cierre del ciclo
          $scope.showConfirm(fightsList);
      }// Cierre de la funcion assingPoints

      $scope.assingPointsOneName5Comp2 = function(pFights){
        var fightsList = fightsService.getFights();
        for (var i = 0; i < fightsList.length; i++) {
          if (fightsList[i].name5Compe2 == pFights.name5Compe2) {
            fightsList[i].points5Compe2 = Number(pFights.points5Compe2 + 1);
            document.querySelector("#points5Compe2").value=  Number(fightsList[i].points5Compe2) ;
          }
          } // Cierre del ciclo
          $scope.showConfirm(fightsList);
      }// Cierre de la funcion assingPoints



      //Puntuación competición 3
      //función que asigna puntos
      $scope.assingPointsOneName1Comp3 = function(pFights){
        var fightsList = fightsService.getFights();
        for (var i = 0; i < fightsList.length; i++) {
          if (fightsList[i].name1Compe3 == pFights.name1Compe3) {
            fightsList[i].points1Compe3 = Number(pFights.points1Compe3 + 1);
            document.querySelector("#points1Compe3").value=  Number(fightsList[i].points1Compe3) ;
          }
          } // Cierre del ciclo
          $scope.showConfirm(fightsList);
      }// Cierre de la funcion assingPoints

      $scope.assingPointsOneName2Comp3 = function(pFights){
        var fightsList = fightsService.getFights();
        for (var i = 0; i < fightsList.length; i++) {
          if (fightsList[i].name2Compe3 == pFights.name2Compe3) {
            fightsList[i].points2Compe3 = Number(pFights.points2Compe3 + 1);
            document.querySelector("#points2Compe3").value=  Number(fightsList[i].points2Compe3) ;
          }
          } // Cierre del ciclo
          $scope.showConfirm(fightsList);
      }// Cierre de la funcion assingPoints

      $scope.assingPointsOneName3Comp3 = function(pFights){
        var fightsList = fightsService.getFights();
        for (var i = 0; i < fightsList.length; i++) {
          if (fightsList[i].name3Compe3 == pFights.name3Compe3) {
            fightsList[i].points3Compe3 = Number(pFights.points3Compe3 + 1);
            document.querySelector("#points3Compe3").value=  Number(fightsList[i].points3Compe3) ;
          }
          } // Cierre del ciclo
          $scope.showConfirm(fightsList);
      }// Cierre de la funcion assingPoints

      $scope.assingPointsOneName4Comp3 = function(pFights){
        var fightsList = fightsService.getFights();
        for (var i = 0; i < fightsList.length; i++) {
          if (fightsList[i].name4Compe3 == pFights.name4Compe3) {
            fightsList[i].points4Compe3 = Number(pFights.points4Compe3 + 1);
            document.querySelector("#points4Compe3").value=  Number(fightsList[i].points4Compe3) ;
          }
          } // Cierre del ciclo
          $scope.showConfirm(fightsList);
      }// Cierre de la funcion assingPoints

      $scope.assingPointsOneName5Comp3 = function(pFights){
        var fightsList = fightsService.getFights();
        for (var i = 0; i < fightsList.length; i++) {
          if (fightsList[i].name5Compe3 == pFights.name5Compe3) {
            fightsList[i].points5Compe3 = Number(pFights.points5Compe3 + 1);
            document.querySelector("#points5Compe3").value=  Number(fightsList[i].points5Compe3) ;
          }
          } // Cierre del ciclo
          $scope.showConfirm(fightsList);
      }// Cierre de la funcion assingPoints


      //Puntuación competición 4
      //función que asigna puntos
      $scope.assingPointsOneName1Comp4 = function(pFights){
        var fightsList = fightsService.getFights();
        for (var i = 0; i < fightsList.length; i++) {
          if (fightsList[i].name1Compe4 == pFights.name1Compe4) {
            fightsList[i].points1Compe4 = Number(pFights.points1Compe4 + 1);
            document.querySelector("#points1Compe4").value=  Number(fightsList[i].points1Compe4) ;
          }
          } // Cierre del ciclo
          $scope.showConfirm(fightsList);
      }// Cierre de la funcion assingPoints

      $scope.assingPointsOneName2Comp4 = function(pFights){
        var fightsList = fightsService.getFights();
        for (var i = 0; i < fightsList.length; i++) {
          if (fightsList[i].name2Compe4 == pFights.name2Compe4) {
            fightsList[i].points2Compe4 = Number(pFights.points2Compe4 + 1);
            document.querySelector("#points2Compe4").value=  Number(fightsList[i].points2Compe4) ;
          }
          } // Cierre del ciclo
          $scope.showConfirm(fightsList);
      }// Cierre de la funcion assingPoints

      $scope.assingPointsOneName3Comp4 = function(pFights){
        var fightsList = fightsService.getFights();
        for (var i = 0; i < fightsList.length; i++) {
          if (fightsList[i].name3Compe4 == pFights.name3Compe4) {
            fightsList[i].points3Compe4 = Number(pFights.points3Compe4 + 1);
            document.querySelector("#points3Compe4").value=  Number(fightsList[i].points3Compe4) ;
          }
          } // Cierre del ciclo
          $scope.showConfirm(fightsList);
      }// Cierre de la funcion assingPoints

      $scope.assingPointsOneName4Comp4 = function(pFights){
        var fightsList = fightsService.getFights();
        for (var i = 0; i < fightsList.length; i++) {
          if (fightsList[i].name4Compe4 == pFights.name4Compe4) {
            fightsList[i].points4Compe4 = Number(pFights.points4Compe4 + 1);
            document.querySelector("#points4Compe4").value=  Number(fightsList[i].points4Compe4) ;
          }
          } // Cierre del ciclo
          $scope.showConfirm(fightsList);
      }// Cierre de la funcion assingPoints

      $scope.assingPointsOneName5Comp4 = function(pFights){
        var fightsList = fightsService.getFights();
        for (var i = 0; i < fightsList.length; i++) {
          if (fightsList[i].name5Compe4 == pFights.name5Compe4) {
            fightsList[i].points5Compe4 = Number(pFights.points5Compe4 + 1);
            document.querySelector("#points5Compe4").value=  Number(fightsList[i].points5Compe4) ;
          }
          } // Cierre del ciclo
          $scope.showConfirm(fightsList);
      }// Cierre de la funcion assingPoints4


      $scope.showConfirm = function(fightsList) {
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.confirm()
      .title('¿Desea asignar a este competidor como ganador?')
      .textContent('')
      .ariaLabel('Lucky day')
      .targetEvent(fightsList)
      .ok('Sí')
      .cancel('No');

      $mdDialog.show(confirm).then(function() {
        fightsService.updateState(fightsList);
        init();
        $scope.status = 'Punto confirmado';
      }, function() {
        $scope.status = 'Punto denegado';
      });
    };


    }// Cierre de la función fightsController
  })();
