(function(){
  angular
    .module('fctApp')
    .controller('sponsorController', sponsorController);

    sponsorController.$inject = ['sponsorService','ImageService','Upload','$scope','productService'];

    function sponsorController(sponsorService,ImageService,Upload,$scope,productService){

      var vm = this;
      vm.sponsors = "";
      loadSponsors();


      function loadSponsors(){
        sponsorService.getSponsors().then(function (response) {
            vm.sponsors = response.data;
          });

          productService.getProducts().then(function (response) {
              vm.productRel = response.data;
            });

          vm.cloudObj = ImageService.getConfiguration();
        }

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

      // Inicio de la función presave
          vm.presave= function(newSponsor){
            vm.cloudObj.data.file = document.getElementById("photo").files[0];
            Upload.upload(vm.cloudObj)
              .success(function(data){
              //  newSponsor.photoSponsorProduct = data.url;
                newSponsor.photo = data.url;
                vm.save(newSponsor);
              }); // Cierre de la función success
          } // Cierre de la función presave

      vm.save= function(){//Función de guardar
        var newSponsor = {
            nameSponsorRep: vm.nameSponsorRep,
            firstNameSponsorRep: vm.firstNameSponsorRep,
            lastNameSponsorRep: vm.lastNameSponsorRep,
            idSponsorRep: vm.idSponsorRep,
            nameSponsor: vm.nameSponsor,
            nameSponsorCompany: vm.nameSponsorCompany,
            sponsorType: vm.sponsorType,
            sponsorCoinType: vm.sponsorCoinType,
            sponsorDesc: vm.sponsorDesc,
            sponsorMonetary: vm.sponsorMonetary,
            product: vm.product,
            photo: vm.photo,
            status:'Activo'
        }

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

        sponsorService.setSponsors(newSponsor);
        loadSponsors();
        clear();
      }//fin de función de guardar

        vm.getInfo = function(pSponsor){//Función que modifica
        vm.id = pSponsor._id;
        vm.nameSponsorRep = pSponsor.nameSponsorRep;
        vm.firstNameSponsorRep = pSponsor.firstNameSponsorRep;
        vm.lastNameSponsorRep = pSponsor.lastNameSponsorRep;
        vm.idSponsorRep = pSponsor.idSponsorRep;
        vm.nameSponsor = pSponsor.nameSponsor;
        vm.nameSponsorCompany = pSponsor.nameSponsorCompany;
        vm.sponsorType = pSponsor.sponsorType;
        vm.sponsorCoinType = pSponsor.sponsorCoinType;
        vm.sponsorDesc = pSponsor.sponsorDesc;
        vm.sponsorMonetary = pSponsor.sponsorMonetary;
        vm.photo = pSponsor.photo;
        vm.product = pSponsor.product;
      }//Fin función modificar

      //función que cambia boton segun la información para modificar
      vm.hideButton = function(){
        document.querySelector('#actualizar').classList.remove('displayNone');
        document.querySelector('#registrar').classList.add('displayNone');
      }

      vm.update = function(){//Función que actualiza
        document.querySelector('#actualizar').classList.add('displayNone');
        document.querySelector('#registrar').classList.remove('displayNone');
        var NewSponsor = {
            _id : vm.id,
            nameSponsorRep: vm.nameSponsorRep,
            firstNameSponsorRep: vm.firstNameSponsorRep,
            lastNameSponsorRep: vm.lastNameSponsorRep,
            idSponsorRep: vm.idSponsorRep,
            nameSponsor: vm.nameSponsor,
            nameSponsorCompany: vm.nameSponsorCompany,
            sponsorType: vm.sponsorType,
            sponsorCoinType: vm.sponsorCoinType,
            sponsorDesc: vm.sponsorDesc,
            sponsorMonetary: vm.sponsorMonetary,
            photo: vm.photo,
            product: vm.product,
            status:'Activo'
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

        sponsorService.updateSponsor(NewSponsor).then(function(response){
          sponsorService.getSponsors()
            .then(function(response){
              vm.sponsors = response.data;
            })
            .catch(function(err){
              console.log(err);
            })  //función que actualiza el update (sabado tarde)

        });;
        loadSponsors();
        clear();
      }//Fin función que actualiza

      function clear(){//Función que limpia
        vm.nameSponsorRep = '';
        vm.firstNameSponsorRep =  '';
        vm.lastNameSponsorRep =  '';
        vm.idSponsorRep =  '';
        vm.nameSponsor =  '';
        vm.nameSponsorCompany =  '';
        vm.sponsorType =  '';
        vm.sponsorCoinType =  '';
        vm.sponsorDesc =  '';
        vm.sponsorMonetary =  '';
        vm.photo =  '';
        vm.product =  '';
      }//Fin función que limpia

      vm.inactive = function(pSponsor){//Inicia función aprobación
        pSponsor.status = "Inhabilitado";
        sponsorService.updateSponsor(pSponsor).then(function(response){
        });
      }// Cierre funcion inative

      vm.active = function(pSponsor){//Inicia función aprobación
        pSponsor.status = "Activo";
        sponsorService.updateSponsor(pSponsor).then(function(response){
        });
      }// Cierre funcion inative

    }
})();
