(function(){
  angular
    .module('fctApp')
    .controller('placeController', placeController);
    function placeController(placeService,$scope){

      var vm = this;
      vm.to = new Date();

      // Inicio de la función init que es la que se inicializa de primiera
      function init(){
        vm.place = placeService.getPlace();
        load_map();
      }init(); // Cierre de la función init

      $scope.pagina = 1;
      $scope.siguiente = function() {
        $scope.pagina = 2;
      }
      $scope.anterior = function() {
        $scope.pagina = 1;
      }
      $scope.registro1 = function() {
        $scope.pagina = 1;
      }

      // Inicio de la función save, que se encarga de obtener los datos y enviarlos para ser guardados
      vm.save= function(){
        var newPlace = {
          namePlace: vm.namePlace,
          location: vm.location,
          capacity: vm.capacity,
          phone: vm.phone,
          timestart: vm.timestart,
          timeFinish: vm.timeFinish,
          nameContact: vm.nameContact,
          firstName: vm.firstName,
          secondName: vm.secondName,
          latitud: vm.latitud,
          longitud: vm.longitud
        } // Cierre de newCompetition
        // intento de restringir los usuarios que se registran
        if(vm.place.length == 0){
          placeService.setPlace(newPlace);
          clean();
          init();
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
          for(var i = 0; i < vm.place.length; i++){
            if(newPlace.namePlace == vm.place[i].namePlace){
              swal({
              type: 'error',
              title: '¡Nombre ya registrado!',
              timer: 3000,
              showConfirmButton: false
            }).then(
              function () {},
              // handling the promise rejection
              function (dismiss) {
                if (dismiss === 'timer') {
                  console.log('Nombre ya registrado')
                }
              }
            )
              return;
            }
            else{
              placeService.setPlace(newPlace);
              clean();
              init();
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
      }// Cierre de la función save.()

      // Inicio: de la función getInfo, que se encarga de obtener los datos
      vm.getInfo = function(pPlace){
        vm.namePlace = pPlace.namePlace;
        vm.location = pPlace.location;
        vm.capacity = pPlace.capacity;
        vm.phone = pPlace.phone;
        vm.timestart = new Date(pPlace.timestart);
        vm.timeFinish = new Date(pPlace.timeFinish);
        vm.nameContact = pPlace.nameContact;
        vm.firstName = pPlace.firstName;
        vm.secondName = pPlace.secondName;
        vm.latitud = pPlace.vm.latitud;
        vm.longitud = pPlace.vm.longitud;
      } // Cierre de la función getInfo

      //función que cambia boton segun la información para modificar
      vm.hideButton = function(){
        document.querySelector('#actualizar').classList.remove('displayNone');
        document.querySelector('#registrar').classList.add('displayNone');
      }

      // Inicio de la función update, que se encarga de devolver los datos para ser editados
      vm.update = function(){
        document.querySelector('#actualizar').classList.add('displayNone');
        document.querySelector('#registrar').classList.remove('displayNone');
        var placeEdit = {
          namePlace: vm.namePlace,
          location: vm.location,
          capacity: vm.capacity,
          phone: vm.phone,
          timestart: vm.timestart,
          timeFinish: vm.timeFinish,
          nameContact: vm.nameContact,
          firstName: vm.firstName,
          secondName: vm.secondName,
          latitud: vm.latitud,
          longitud: vm.longitud
        } // Cierre de competitionEdit

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
        placeService.updatePlace(placeEdit).then(function(response){
          placeService.getPlace()
            .then(function(response){
              vm.place = response.data;
            })
            .catch(function(err){
              console.log(err);
            })
         });
        init();
        clean();
      } // Cierre de la función update

      // Inicio de la función clean, que se encarga de limpiar los datos despúes de un registro
      function clean(){
        vm.namePlace = '';
        vm.location = '';
        vm.capacity = '';
        vm.phone = '';
        vm.timestart = '';
        vm.timeFinish = '';
        vm.nameContact = '';
        vm.firstName = '';
        vm.secondName = '';
      } // Cierre de la función clean


      // Inicio funciones para mapas
      var map;

      function load_map() {
          var myLatlng = new google.maps.LatLng(9.748917, -83.753428);
          var myOptions = {
              zoom: 4,
              center: myLatlng,
              mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          map = new google.maps.Map($("#map_canvas").get(0), myOptions);
      }

      vm.getAddress = function(){
          // Obtenemos la dirección y la asignamos a una variable
          var address = $('#address').val() + ',Costa Rica';
          // Creamos el Objeto Geocoder
          var geocoder = new google.maps.Geocoder();
          // Hacemos la petición indicando la dirección e invocamos la función
          // geocodeResult enviando todo el resultado obtenido
          geocoder.geocode({ 'address': address}, geocodeResult);
      }

      function geocodeResult(results, status) {
          // Verificamos el estatus
          if (status == 'OK') {
              // Si hay resultados encontrados, centramos y repintamos el mapa
              // esto para eliminar cualquier pin antes puesto
              var mapOptions = {
                  center: results[0].geometry.location,
                  mapTypeId: google.maps.MapTypeId.ROADMAP
              };
              map = new google.maps.Map($("#map_canvas").get(0), mapOptions);
              // fitBounds acercará el mapa con el zoom adecuado de acuerdo a lo buscado
              map.fitBounds(results[0].geometry.viewport);
              // Dibujamos un marcador con la ubicación del primer resultado obtenido
              var markerOptions = { position: results[0].geometry.location }
              var marker = new google.maps.Marker(markerOptions);
              marker.setMap(map);
          } else {
              // En caso de no haber resultados o que haya ocurrido un error
              // lanzamos un mensaje con el error
              vm.showAlert();
          }
      }
      // cierre funciones para mapas
      // inicio función de retorno para error en geocódigo
    vm.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('La dirección es incorrecta')
        .textContent('Por favor ingrese otra')
        .ariaLabel('')
        .targetEvent(ev)
    );
  };
      // fin función de retorno para error en geocódigo


    }// Cierre de la función placeController
})();
