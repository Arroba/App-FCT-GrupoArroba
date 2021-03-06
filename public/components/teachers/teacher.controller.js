(function(){
  angular
    .module('fctApp')
    .controller('teacherController', teacherController);

    teacherController.$inject = ['teacherService','ImageService','Upload','academiesService','userService','AuthService','$cookies','$scope'];

    function teacherController(teacherService,ImageService,Upload,academiesService,userService,AuthService,$cookies,$scope){

      var vm = this;
      vm.teachers = "";
      loadTeachers();
      vm.foundCredentials = JSON.parse(sessionStorage.getItem('currentUserActive'));



      // Inicio de la función init que es la que se inicializa de primiera
      function loadTeachers(){
        teacherService.getTeachers().then(function (response) {
            vm.teachers = response.data;
          });

        academiesService.getAcademies().then(function (response) {
            vm.academiesRel = response.data;
          });

        // userService.findUsers(userService.getCookie()).then(function (response) {
        //     vm.foundCredentials = response.data;
        //   });

        vm.to = new Date();

        vm.cloudObj = ImageService.getConfiguration();
        }

      // function init(){
      //   vm.teachers = teacherService.getTeachers();
      //   vm.academiesRel = academiesService.getAcademies();
      //   vm.foundCredentials = userService.findUsers(userService.getCookie());
      //   vm.to = new Date();
      // }init();

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
      vm.presave= function(newTeacher){
        vm.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(vm.cloudObj)
          .success(function(data){
            newTeacher.photo = data.url;
            vm.save(newTeacher);
          }); // Cierre de la función success
      } // Cierre de la función presave


      // Inicio de la función save, que se encarga de obtener los datos y enviarlos para ser guardados
      vm.save= function(){
        var newTeacher = {
          name: vm.name,
          firstName: vm.firstName,
          lastName: vm.lastName,
          identi: vm.identi,
          date: vm.date,
          grade: vm.grade,
          email: vm.email,
          telephone: vm.telephone,
          civilStatus: vm.civilStatus,
          gender: vm.gender,
          password: vm.password,
          academies: vm.academies,
          status: 'Activo',
          photo: vm.photo,
          userType: 'teacher'
        } // Cierre de newTeacher
      // intento de restringir los usuarios que se registran
      if(vm.teachers.length == 0){
         teacherService.setTeachers(newTeacher);
         clean();
         loadTeachers();
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
        for(var i = 0; i < vm.teachers.length; i++){
          if(newTeacher.identi == vm.teachers[i].identi){
            swal({
           type: 'error',
           title: '¡La identificación ya existe!',
           timer: 3000,
           showConfirmButton: false
         }).then(
           function () {},
           // handling the promise rejection
           function (dismiss) {
             if (dismiss === 'timer') {
               console.log('La identificación ya existe')
             }
           }
         )
             return;
          }
          else if(newTeacher.email == vm.teachers[i].email){
                   swal({
                  type: 'error',
                  title: '¡El correo electrónico ya existe!',
                  timer: 3000,
                  showConfirmButton: false
                }).then(
                  function () {},
                  // handling the promise rejection
                  function (dismiss) {
                    if (dismiss === 'timer') {
                      console.log('El correo electrónico ya existe')
                    }
                  }
                )

                   return;
          }
            else{
                teacherService.setTeachers(newTeacher).then(function (response) {
                vm.name = null;
                vm.firstName = null;
                vm.lastName = null;
                vm.identi = null;
                vm.date = null;
                vm.grade = null;
                vm.email = null;
                vm.telephone = null;
                vm.civilStatus = null;
                vm.gender = null;
                vm.password = null;
                vm.academies = null;
                vm.status = null;
                vm.photo = null;
                vm.status = null;
                loadTeachers();
              });
                 clean();
                //  loadTeachers();
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

      }// Cierre de la función save.(Fabián)

      // Inicio: de la función getInfo, que se encarga de obtener los datos
      vm.getInfo = function(pTeacher){
        vm.id = pTeacher._id;
        vm.name = pTeacher.name;
        vm.firstName = pTeacher.firstName;
        vm.lastName = pTeacher.lastName;
        vm.identi = pTeacher.identi;
        vm.date = new Date(pTeacher.date);
        vm.grade = pTeacher.grade;
        vm.email = pTeacher.email;
        vm.telephone = pTeacher.telephone;
        vm.civilStatus = pTeacher.civilStatus;
        vm.gender = pTeacher.gender;
        vm.password = pTeacher.password;
        vm.academies = pTeacher.academies;
        vm.photo = pTeacher.photo;
      } // Cierre de la función getInfo
                              //función que cambia boton segun la información para modificar Pili
    vm.hideButton = function(){
      document.querySelector('#actualizar').classList.remove('displayNone');
      document.querySelector('#registrar').classList.add('displayNone');
    }

      // Inicio de la función update, que se encarga de devolver los datos para ser editados
      vm.update = function(){
        document.querySelector('#actualizar').classList.add('displayNone');
        document.querySelector('#registrar').classList.remove('displayNone');
        var teacherEdit = {
          _id : vm.id,
          name: vm.name,
          firstName: vm.firstName,
          lastName: vm.lastName,
          identi: vm.identi,
          date: vm.date,
          grade: vm.grade,
          email: vm.email,
          telephone: vm.telephone,
          civilStatus: vm.civilStatus,
          gender: vm.gender,
          password: vm.password,
          academies: vm.academies,
          status: 'Activo',
          photo: vm.photo
        } // Cierre de teacherEdit
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
        teacherService.updateTeacher(teacherEdit).then(function(response){
          teacherService.getTeachers()
            .then(function(response){
              vm.teachers = response.data;
            })
            .catch(function(err){
              console.log(err);
            })
         });
        loadTeachers();
        clean();
      } // Cierre de la función update


      // Inicio de la función clean, que se encarga de limpiar los datos despúes de un registro
      function clean(){
        vm.name = '';
        vm.firstName =  '';
        vm.lastName =  '';
        vm.identi =  '';
        vm.date =  '';
        vm.grade =  '';
        vm.email =  '';
        vm.telephone =  '';
        vm.civilStatus =  '';
        vm.gender =  '';
        vm.password = '';
        vm.academies = '';
        vm.photo = '';
      } // Cierre de la función clean


      // Inicio de la función inactive, que se encarga de cambiar el estado del profesor
      //función que cambia el estado a inabilitado
      vm.inactive = function(pTeacher){
        pTeacher.status = "Inhabilitado";
        teacherService.updateTeacher(pTeacher).then(function(response){
         });
      }// Cierre funcion inative

      //función que cambia el estado a activo
      vm.active = function(pTeacher){
        pTeacher.status = "Activo";
        teacherService.updateTeacher(pTeacher).then(function(response){
        });
      }// Cierre funcion inative

      vm.logOut = function(){
        AuthService.logOut();
      }

    }// Cierre de la función teacherController
})();
