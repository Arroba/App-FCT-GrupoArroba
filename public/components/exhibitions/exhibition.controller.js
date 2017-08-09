(function() {
  angular
  .module('fctApp')
  .controller('exhibitionController', exhibitionController);
  function exhibitionController(exhibitionService,ImageService,Upload,eventsGeneralService,placeService,$scope){

    var vm = this;
    vm.cloudObj = ImageService.getConfiguration();

    // Inicio de la función init que es la que se inicializa de primera.(Pamela)
    function init(){
      vm.exhibitions = exhibitionService.getExhibitions();
      vm.eventsRel = eventsGeneralService.getEvents();
      vm.placeRel = placeService.getPlace();
      vm.to = new Date();
    }init();

    $scope.pagina = 1;
      $scope.siguiente = function() {
        $scope.pagina++;
      }

      $scope.anterior = function() {
        $scope.pagina--;
      }
      $scope.registro1 = function() {
        $scope.pagina = 1;
      }

    // Inicio de la función presave.(Pamela)
    vm.presave= function(newExhibition){
      vm.cloudObj.data.file = document.getElementById("photo").files[0];
      Upload.upload(vm.cloudObj)
        .success(function(data){
          newExhibition.photo = data.url;
          vm.save(newExhibition);
        }); // Cierre de la función success.(Pamela)
    } // Cierre de la función presave.(Pamela)

    // Inicio de la función save, que se encarga de obtener los datos y enviarlos para ser guardados.(Pamela)
    vm.save= function(){
      var newExhibition = {
        nameExhibition: vm.nameExhibition,
        date: vm.date,
        time: vm.time,
        place: vm.place,
        guestsExhibition: vm.guestsExhibition,
        status: 'Activo',
        photo: vm.photo
      }// Cierre de newExhibition.(Pamela)
      // intento de restringir los usuarios que se registran
      if(vm.exhibitions.length == 0){
        exhibitionService.setExhibitions(newExhibition);
        document.querySelector('.Accepted').innerHTML = 'Registro completado!';
        console.log(vm.exhibitions);
        clear();
        init();
        return;
      }else{
        for(var i = 0; i < vm.exhibitions.length; i++){
          if(newExhibition.nameExhibition == vm.exhibitions[i].nameExhibition){
            document.querySelector('.failId').innerHTML = '**El Nombre ya  está registrado, por favor ingrese otro**';
            return;
          }
          else{
            console.log(newExhibition);
            exhibitionService.setExhibitions(newExhibition);
            document.querySelector('.failId').innerHTML = '';
            document.querySelector('.Accepted').innerHTML = 'Registro completado!';
            console.log(vm.exhibitions);
            clear();
            init();
            return;
          }
        }
      }
    }// Cierre de la función save.(Pamela)

    // Inicio: de la función getInfo, que se encarga de obtener los datos.(Pamela)
    vm.getInfo = function(pExhibition){
      vm.nameExhibition = pExhibition.nameExhibition;
      vm.Date = new Date (pExhibition.date);
      vm.time = new Date (pExhibition.time);
      vm.place = pExhibition.place;
      vm.guestsExhibition = pExhibition.guestsExhibition;
      vm.photo = pExhibition.photo;
    }// Cierre de la función getInfo.(Pamela)

    //función que cambia boton segun la información para modificar Pili
    vm.hideButton = function(){
      document.querySelector('#actualizar').classList.remove('displayNone');
      document.querySelector('#registrar').classList.add('displayNone');
    }

    // Inicio de la función update, que se encarga de devolver los datos para ser editados.(Pamela)
    vm.update = function(){
      document.querySelector('#actualizar').classList.add('displayNone');
      document.querySelector('#registrar').classList.remove('displayNone');
      var exhibitionEdited = {
        nameExhibition: vm.nameExhibition,
        date: vm.date,
        time: vm.time,
        place: vm.place,
        guestsExhibition: vm.guestsExhibition,
        status: 'Activo',
        photo: vm.photo
      }// Cierre de exhibitionEdited.(Pamela)
      exhibitionService.updateExhibitions(exhibitionEdited);
      init();
      clear();
    }// Cierre de la función update.(Pamela)

    // Inicio de la función clear, que se encarga de limpiar los datos despúes de un registro.(Pamela)
    function clear(){
      vm.nameExhibition = '';
      vm.date = '';
      vm.time =  '';
      vm.place =  '';
      vm.guestsExhibition =  '';
      vm.photo =  '';
    }// Cierre de la función clear.(Pamela)

    // Inicio de la función inactive, que se encarga de cambiar el estado del profesor.(Pamela)
    //función que cambia el estado a inabilitado.(Pamela)
    vm.inactive = function(pExhibition){
      var exhibitionsList = exhibitionService.getExhibitions();
      for (var i = 0; i < exhibitionsList.length; i++) {
        if (exhibitionsList[i].nameExhibition == pExhibition.nameExhibition) {
          exhibitionsList[i].status = 'inhabilitado';
          console.log(exhibitionsList[i].status)
        }// Cierre del if.(Pamela)
      }// Cierre del ciclo.(Pamela)
      exhibitionService.updateState(exhibitionsList);
      init();
    }// Cierre de la funcion inactive.(Pamela)

    //función que cambia el estado a activo.(Pamela)
    vm.active = function(pExhibition){
      var exhibitionsList = exhibitionService.getExhibitions();
      for (var i = 0; i < exhibitionsList.length; i++) {
        if (exhibitionsList[i].nameExhibition == pExhibition.nameExhibition) {
          exhibitionsList[i].status = 'Activo';
          console.log(exhibitionsList[i].status)
        }// Cierre del if.(Pamela)
      }// Cierre del ciclo.(Pamela)
      exhibitionService.updateState(exhibitionsList);
      init();
    }// Cierre de la funcion active.(Pamela)
  }
})();
