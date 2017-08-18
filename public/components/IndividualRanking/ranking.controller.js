// Hecho por Fabián Quirós
(function(){
  angular
  .module('fctApp')
  .controller('rankingController', rankingController);
rankingController.$inject = ['fightsService','$scope','academiesService','studentService','eventsService','$scope','$mdDialog']


  function rankingController(fightsService,$scope,academiesService,studentService,eventsService,$scope,$mdDialog){

    var vm = this;

    vm.fights = "";
    vm.selectEvent = {};
    loadFights();

      // Inicio de la función init que es la que se inicializa de primiera
      function loadFights(){
      eventsService.getEvents().then(function (response) {
          vm.eventsRel = response.data;
        });

      academiesService.getAcademies().then(function (response) {
          vm.academiesRel = response.data;
        });

      studentService.getStudents().then(function (response) {
          vm.studentRel = response.data;
        });
      vm.to = new Date();
      }

      // function init(){
      //   vm.fights;
      //   vm.eventsRel = eventsService.getEvents();
      //   vm.studentRel = datalistFilter();
      //   vm.academiesRel = academiesService.getAcademies();
      // }init(); // Cierre de la función init

      // Inicio de la función save, que se encarga de obtener los datos y enviarlos para ser guardados
      vm.save= function(){
        var newFights = {
          event: vm.nameEvent,
          competition: vm.competition,
          competitor: vm.competitor,
          points: Number(0)
        } // Cierre de newFights
        eventsService.getEvents().then(function (response) {
          vm.eventsRel = response.data;
        });

        for (var i = 0; i < vm.eventsRel.length; i++) {
          if (vm.eventsRel[i].name == vm.nameEvent) {
              vm.eventsRel[i].fights =newFights;
              vm.eventUpdate =  vm.eventsRel[i];
          }
        }

        eventsService.updateEvent(vm.eventUpdate).then(function (response) {
        loadFights();
        vm.event = true;
        vm.competition = false;
        vm.competitor = null;

      });
        clear();
      } // Cierre de la función save

      // Filtrar los datos para calendarios

      vm.callCategories = function(pEventSelected){
        eventsService.getEvents().then(function (response) {
          vm.eventsRel = response.data;
        });

        var SelectedEvent = {};
        for (var i = 0; i < vm.eventsRel.length; i++) {
          if (vm.eventsRel[i].name == pEventSelected) {
             SelectedEvent = vm.eventsRel[i];
          }
        }
        vm.selectEvent = SelectedEvent;
      }


      vm.callCalendar = function(pCompetition){
        showCalendar(pCompetition);
      }



      vm.calculateWinner = function(){
        var fightsList = vm.fights;
        var nPuntajeMayor = 0;
        var winner = "";
        var objetWinner = "";

        for (var i = 0; i < fightsList.length; i++) {
          if (fightsList[i].points > nPuntajeMayor) {
            nPuntajeMayor = fightsList[i].points;
            winner = fightsList[i].competitor;
            objetWinner = fightsList[i];
          }
        }

        document.querySelector('#winner').value = winner;

        vm.selectEvent.winners = objetWinner;



        eventsService.updateWinner(vm.selectEvent).then(function (response) {
        vm.event = true;
        vm.competition = false;
        vm.competitor = null;

      });




      }




      function showCalendar(pCompetition){
        var calendarList =     vm.selectEvent;
        var findCompetitors = [];

      for (var i = 0; i < calendarList.fights.length; i++) {
        if (calendarList.fights[i].competition == pCompetition) {
          findCompetitors.push(vm.selectEvent.fights[i]);
        }

        vm.fights = findCompetitors;
      }





        // var competitors = [];
        //   switch (pCompetition) {
        //     case 'primera':
        //     for (var i = 0; i < fightsList.length; i++) {
        //       if (fightsList[i].competition == pCompetition) {
        //         competitors.push(fightsList[i]);
        //       }
        //     } // Cierre del ciclo
        //   break;
        //   case 'segunda':
        //     for (var i = 0; i < fightsList.length; i++) {
        //       if (fightsList[i].competition == pCompetition) {
        //         competitors.push(fightsList[i]);
        //       }
        //     } // Cierre del ciclo
        //   break;
        //   case 'tercera':
        //     for (var i = 0; i < fightsList.length; i++) {
        //       if (fightsList[i].competition == pCompetition) {
        //         competitors.push(fightsList[i]);
        //       }
        //     } // Cierre del ciclo
        //   break;
        //   case 'cuarta':
        //     for (var i = 0; i < fightsList.length; i++) {
        //       if (fightsList[i].competition == pCompetition) {
        //         competitors.push(fightsList[i]);
        //       }
        //     } // Cierre del ciclo
        //   break;
        //   default:
        //   break;

        // }
        // vm.fights = competitors;

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

        // fin datos cuarta competición
      } // Cierre de la función getInfo

      // Inicio de la función update, que se encarga de devolver los datos para ser editados
      vm.update = function(){
        var fightsEdit = {
          nameEvent: vm.nameEvent,
          // Primera Competición

        } // Cierre de fightsEdit
        fightsService.updateFight(fightsEdit);
        init();
        clean();
      } // Cierre de la función update

      // Inicio de la función clean, que se encarga de limpiar los datos despúes de un registro
      function clean(){
        vm.nameEvent='';

      } // Cierre de la función clean


      //Puntuación competición 1
      //función que asigna puntos. Funcion final
      vm. addPoint0 = function(){
        var fightsList = vm.fights;
          vm.fights[0].points = Number(vm.fights[0].points + 1);
          console.log(vm.fights[0].points);
      }// Cierre de la funcion assingPoints

      //Puntuación competición 1
      //función que asigna puntos. Funcion final
      vm. addPoint1 = function(){
        var fightsList = vm.fights;
          vm.fights[1].points = Number(vm.fights[0].points + 1);
          console.log(vm.fights[0].points);

      }// Cierre de la funcion assingPoints

      //Puntuación competición 1
      //función que asigna puntos. Funcion final
      vm. addPoint2 = function(){
        var fightsList = vm.fights;
          vm.fights[2].points = Number(vm.fights[0].points + 1);
          console.log(vm.fights[0].points);

      }// Cierre de la funcion assingPoints


      //Puntuación competición 1
      //función que asigna puntos. Funcion final
      vm. addPoint3 = function(){
        var fightsList = vm.fights;
          vm.fights[3].points = Number(vm.fights[0].points + 1);
          console.log(vm.fights[0].points);

      }// Cierre de la funcion assingPoints

      //Puntuación competición 1
      //función que asigna puntos. Funcion final
      vm. addPoint4 = function(){
        var fightsList = vm.fights;
          vm.fights[4].points = Number(vm.fights[0].points + 1);
          console.log(vm.fights[0].points);

      }// Cierre de la funcion assingPoints






      function clear(){
        vm.nameEvent = '';
        vm.competition = '';
        vm.competitor= '';     
      }






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
