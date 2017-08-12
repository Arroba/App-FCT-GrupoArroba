(function() {
  angular
  .module('fctApp')
  .controller('blazeController', blazeController);
  function blazeController(blazeService,ImageService,Upload, eventsGeneralService,placeService,$scope){

    var vm = this;
    vm.cloudObj = ImageService.getConfiguration();

    // Inicio de la función loadBlazes que es la que se inicializa de primera.(Pamela)
    function loadBlazes(){
      vm.blazes = blazeService.getBlazes();
      vm.eventsRel = eventsGeneralService.getEvents();
      vm.placeRel = placeService.getPlace();
      vm.to = new Date();
    }loadBlazes();

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
    vm.presave= function(newBlaze){
      vm.cloudObj.data.file = document.getElementById("photo").files[0];
      Upload.upload(vm.cloudObj)
        .success(function(data){
          newBlaze.photo = data.url;
          vm.save(newBlaze);
        }); // Cierre de la función success.(Pamela)
    } // Cierre de la función presave.(Pamela)

    // Inicio de la función save, que se encarga de obtener los datos y enviarlos para ser guardados.(Pamela)
    vm.save= function(){
      var newBlaze = {
        nameBlaze: vm.nameBlaze,
        date1: vm.date1,
        time1: vm.time1,
        time2: vm.time2,
        date2: vm.date2,
        place: vm.place,
        status: 'Activo',
        photo: vm.photo
      }// Cierre de newBlaze.(Pamela)
      // intento de restringir los usuarios que se registran
      if(vm.blazes.length == 0){
        blazeService.setBlazes(newBlaze);
        clear();
        loadBlazes();

        swal({
        type: 'success',
        title: '¡Registro completado!',
        timer: 3000,
        showConfirmButton: false
      }).then(
        function () {},
        // handling the promise rejection
        function (dismiss) {
          if (dismiss === 'timer') {
            console.log('Registro completado')
          }
        }
      )
        return;
      }else{
        for(var i = 0; i < vm.blazes.length; i++){
          if(newBlaze.nameBlaze == vm.blazes[i].nameBlaze){

            swal({
           type: 'error',
           title: '¡El nombre de fogueo ya existe!',
           timer: 3000,
           showConfirmButton: false
         }).then(
           function () {},
           // handling the promise rejection
           function (dismiss) {
             if (dismiss === 'timer') {
               console.log('El nombre de fogueo ya existe')
             }
           }
         )

            return;
          }
          else{
            blazeService.setBlazes(newBlaze);
            clear();
            loadBlazes();
            swal({
            type: 'success',
            title: '¡Registro completado!',
            timer: 3000,
            showConfirmButton: false
          }).then(
            function () {},
            // handling the promise rejection
            function (dismiss) {
              if (dismiss === 'timer') {
                console.log('Registro completado')
              }
            }
          )
            return;
          }
        }
      }
    }// Cierre de la función save.(Pamela)


    // Inicio: de la función getInfo, que se encarga de obtener los datos.(Pamela)
    vm.getInfo = function(pBlaze){
      vm.nameBlaze = pBlaze.nameBlaze;
      vm.date1 = new Date (pBlaze.date1);
      vm.time1 = new Date (pBlaze.time1);
      vm.time2 = new Date (pBlaze.time2);
      vm.date2 = new Date (pBlaze.date2);
      vm.place = pBlaze.place;
      vm.photo = pBlaze.photo;
    }// Cierre de la función getInfo.(Pamela)

    //función que cambia boton segun la información para modificar
    vm.hideButton = function(){
      document.querySelector('#actualizar').classList.remove('displayNone');
      document.querySelector('#registrar').classList.add('displayNone');
    }

    // Inicio de la función update, que se encarga de devolver los datos para ser editados.(Pamela)
    vm.update = function(){
      document.querySelector('#actualizar').classList.add('displayNone');
      document.querySelector('#registrar').classList.remove('displayNone');
      var newBlaze = {
        nameBlaze: vm.nameBlaze,
        date1: vm.date1,
        time1: vm.time1,
        time2: vm.time2,
        date2: vm.date2,
        place: vm.place,
        status: 'Activo',
        photo: vm.photo
      }// Cierre de blazeEdited.(Pamela)

      swal({
       type: 'success',
       title: '¡Información actualizada!',
       timer: 3000,
       showConfirmButton: false
      }).then(
        function () {},
        // handling the promise rejection
        function (dismiss) {
          if (dismiss === 'timer') {
            console.log('Información actualizada')
          }
        }
      )
      blazeService.updateBlazes(newBlaze).then(function(response){
        blazeService.getBlazes()
        .then(function(response){
          vm.blazes = response.data;
        })
        .catch(function(err){
          console.log(err);
        })
      });
      loadBlazes();
      clear();
    }// Cierre de la función update.(Pamela)

    // Inicio de la función clear, que se encarga de limpiar los datos despúes de un registro.(Pamela)
    function clear(){
      vm.nameBlaze = '';
      vm.date1 =  '';
      vm.time1 =  '';
      vm.time2 =  '';
      vm.date2 =  '';
      vm.place =  '';
      vm.photo =  '';
    }// Cierre de la función clear.(Pamela)

    // Inicio de la función inactive, que se encarga de cambiar el estado del profesor.(Pamela)
    //función que cambia el estado a inabilitado.(Pamela)
    vm.inactive = function(pBlaze){
      var blazesList = blazeService.getBlazes();
      for (var i = 0; i < blazesList.length; i++) {
        if (blazesList[i].nameBlaze == pBlaze.nameBlaze) {
          blazesList[i].status = 'inhabilitado';
          console.log(blazesList[i].status)
        }// Cierre del if.(Pamela)
      }// Cierre del ciclo.(Pamela)
      blazeService.updateState(blazesList);
      loadBlazes();
    }// Cierre de la funcion inactive.(Pamela)

    //función que cambia el estado a activo.(Pamela)
    vm.active = function(pBlaze){
      var blazesList = blazeService.getBlazes();
      for (var i = 0; i < blazesList.length; i++) {
        if (blazesList[i].nameBlaze == pBlaze.nameBlaze) {
          blazesList[i].status = 'Activo';
          console.log(blazesList[i].status)
        }// Cierre del if.(Pamela)
      }// Cierre del ciclo.(Pamela)
      blazeService.updateState(blazesList);
      loadBlazes();
    }// Cierre de la funcion active.(Pamela)
  }// Cierre de la función studentController.(Pamela)
})();
