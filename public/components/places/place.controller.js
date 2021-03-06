
  (function(){
    angular
    .module('fctApp')
    .controller('placeController', placeController);// Declaración del controlador
    placeController.$inject = ['placeService','$scope'];

    function placeController(placeService,$scope){

      var vm = this;
      vm.places = "";
      loadPlaces();
      load_map();


      function loadPlaces(){
        placeService.getPlaces().then(function (response) {
          vm.places = response.data;
        });
        vm.to = new Date();
      }
      // Función que guarda los datos

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


      vm.save= function(){// Objeto que obtener
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
       }

        //
        if(vm.places.length == 0){
          placeService.setPlaces(newPlace);
          clear();
          loadPlaces();

          swal({
            type: 'success',
            title: '¡Registro completado!',
            timer: 3000,
            showConfirmButton: false
          })
          return;
        }else{
          for(var i = 0; i < vm.places.length; i++){
            if(newPlace.namePlace == vm.places[i].namePlace){
              swal({
               type: 'error',
               title: '¡El nombre del lugar ya existe!',
               timer: 3000,
               showConfirmButton: false
             }).then(
             function () {},
                // handling the promise rejection
                function (dismiss) {
                  if (dismiss === 'timer') {
                    console.log('El nombre del lugar ya existe')
                  }
                }
                )
             return;
           }
           else if(newPlace.phone == vm.places[i].phone){
            swal({
             type: 'error',
             title: '¡El número telefónico ya existe!',
             timer: 3000,
             showConfirmButton: false
           }).then(
           function () {},
              // handling the promise rejection
              function (dismiss) {
                if (dismiss === 'timer') {
                  console.log('El número telefónico ya existe')
                }
              }
              )
           return;
         }
         else{
          placeService.setPlaces(newPlace).then(function (response) {
           vm.namePlace = null;
           vm.location =  null;
           vm.capacity =  null;
           vm.phone = null;
           vm.timestart = null;
           vm.timeFinish = null;
           vm.nameContact = null;
           vm.firstName = null;
           vm.secondName = null;
           loadPlaces();
         });
          clear();
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



      vm.getAddressCard = function(place){
          // Obtenemos la dirección y la asignamos a una variable
          var address = place.namePlace + ',Costa Rica';
          // Creamos el Objeto Geocoder
          var geocoder = new google.maps.Geocoder();
          // Hacemos la petición indicando la dirección e invocamos la función
          // geocodeResult enviando todo el resultado obtenido
          geocoder.geocode({ 'address': address}, geocodeResultCard);
      }

      function geocodeResultCard(results, status) {
          // Verificamos el estatus
          if (status == 'OK') {
              // Si hay resultados encontrados, centramos y repintamos el mapa
              // esto para eliminar cualquier pin antes puesto
              var mapOptions = {
                  center: results[0].geometry.location,
                  mapTypeId: google.maps.MapTypeId.ROADMAP
              };

              map = new google.maps.Map($("#map_modal").get(0), mapOptions);
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









      //función que toma la información para modificar
      vm.getInfo = function(pPlace){
        vm.id = pPlace._id;
        vm.namePlace = pPlace.namePlace;
        vm.location = pPlace.location;
        vm.capacity = pPlace.capacity;
        vm.phone = pPlace.phone;
        vm.timestart = new Date(pPlace.timestart);
        vm.timeFinish = new Date(pPlace.timeFinish);
        vm.nameContact = pPlace.nameContact;
        vm.firstName = pPlace.firstName;
        vm.secondName = pPlace.secondName;
      }//cierrre función info

      //función que cambia boton segun la información para modificar
      vm.hideButton = function(){
        document.querySelector('#actualizar').classList.remove('displayNone');
        document.querySelector('#registrar').classList.add('displayNone');
      }

      //función que modifica los datos
      vm.update = function(){
        document.querySelector('#actualizar').classList.add('displayNone');
        document.querySelector('#registrar').classList.remove('displayNone');
        var newPlace = {
         _id: vm.id,
         namePlace: vm.namePlace,
         location: vm.location,
         capacity: vm.capacity,
         phone: vm.phone,
         timestart: vm.timestart,
         timeFinish: vm.timeFinish,
         nameContact: vm.nameContact,
         firstName: vm.firstName,
         secondName: vm.secondName
       }
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
       placeService.updatePlace(newPlace).then(function(response){
        placeService.getPlaces()
        .then(function(response){
          vm.places = response.data;
        })
        .catch(function(err){
          console.log(err);
        })
      });
       loadPlaces();
       clear();
      }//cierre funcion update

      //función par limpiar los inputs PREGUNTAR
      function clear(){
        vm.namePlace = '';
        vm.location = '';
        vm.capacity = '';
        vm.phone = '';
        vm.timestart = '';
        vm.timeFinish = '';
        vm.nameContact = '';
        vm.firstName = '';
        vm.secondName = '';
      } //cierre función clear

    }// Cierre de la función placeController
})();


