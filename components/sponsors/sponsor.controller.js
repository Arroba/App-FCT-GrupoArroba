(function(){
  angular
    .module('fctApp')
    .controller('sponsorController', sponsorController);
    function sponsorController(sponsorService,ImageService,Upload){

      var vm = this;
      vm.cloudObj = ImageService.getConfiguration();

      function init(){//Función de inicializar
        vm.sponsors = sponsorService.getSponsors();
      }init();//Fin función

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
            state:'Activo',
            nameSponsorRep: vm.nameSponsorRep,
            firstNameSponsorRep: vm.firstNameSponsorRep,
            lastNameSponsorRep: vm.lastNameSponsorRep,
            idSponsorRep: vm.idSponsorRep,
            nameSponsor: vm.nameSponsor,
            nameSponsorCompany: vm.nameSponsorCompany,
            sponsorType: vm.sponsorType,
            sponsorDesc: vm.sponsorDesc,
            sponsorMonetary: vm.sponsorMonetary,
            photo: vm.photo,
            photo: vm.photo
        }
        sponsorService.setSponsors(newSponsor);
        init();
        clear();
      }//fin de función de guardar

        vm.getInfo = function(pSponsor){//Función que modifica
        vm.nameSponsorRep = pSponsor.nameSponsorRep;
        vm.firstNameSponsorRep = pSponsor.firstNameSponsorRep;
        vm.lastNameSponsorRep = pSponsor.lastNameSponsorRep;
        vm.idSponsorRep = pSponsor.idSponsorRep;
        vm.nameSponsor = pSponsor.nameSponsor;
        vm.nameSponsorCompany = pSponsor.nameSponsorCompany;
        vm.sponsorType = pSponsor.sponsorType;
        vm.sponsorDesc = pSponsor.sponsorDesc;
        vm.sponsorMonetary = pSponsor.sponsorMonetary;
        vm.photo = pSponsor.photo;
        vm.photo = pSponsor.photo;
      }//Fin función modificar

      vm.update = function(){//Función que actualiza
        var sponsorEdited = {
            state:'Activo',
            nameSponsorRep: vm.nameSponsorRep,
            firstNameSponsorRep: vm.firstNameSponsorRep,
            lastNameSponsorRep: vm.lastNameSponsorRep,
            idSponsorRep: vm.idSponsorRep,
            nameSponsor: vm.nameSponsor,
            nameSponsorCompany: vm.nameSponsorCompany,
            sponsorType: vm.sponsorType,
            sponsorDesc: vm.sponsorDesc,
            sponsorMonetary: vm.sponsorMonetary,
            photo: vm.photo,
            photo: vm.photo
        }
        sponsorService.updateSponsor(sponsorEdited);
        init();
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
        vm.sponsorDesc =  '';
        vm.sponsorMonetary =  '';
        vm.photo =  '';
        vm.photo =  '';
      }//Fin función que limpia

      vm.inactive = function(pSponsor){//Inicia función aprobación
        var sponsorsList = sponsorsService.getSponsors();
          for (var i = 0; i < sponsorsList.length; i++) {//Inicia ciclo for
            if (sponsorsList[i].email == pSponsor.email) {//Inicia función if
              sponsorsList[i].state = 'inhabilitado';
              console.log(sponsorsList[i].state)
            }// Cierre del if
          }// Cierre del ciclo
        sponsorsService.updateState(sponsorsList);
        init();
      }// Cierre de la funcion aprobación

      vm.active = function(pSponsor){//Inicia función aprobación
        var sponsorsList = sponsorsService.getSponsors();
          for (var i = 0; i < sponsorsList.length; i++) {
            if (sponsorsList[i].email == pAcademy.email) {
              sponsorsList[i].state = 'Activo';
              console.log(sponsorsList[i].state)
            }// Cierre del if
          }// Cierre del ciclo
        sponsorsService.updateState(sponsorsList);
        init();
      }// Cierre de la funcion aprobación
    }
})();
