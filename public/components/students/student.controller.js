(function(){
  angular
    .module('fctApp')
    .controller('studentController', studentController);

    studentController.$inject = ['studentService','ImageService','Upload','academiesService','teacherService','userService','AuthService','$cookies','fightsService','eventsService','$scope'];

    function studentController(studentService,ImageService,Upload,academiesService,teacherService,userService,AuthService,$cookies,fightsService,eventsService,$scope){

      var vm = this;
      vm.students = "";
      vm.academiesRel = {};
      loadStudents();

      function loadStudents(){
      studentService.getStudents().then(function (response) {
          vm.students = response.data;
        });

        academiesService.getAcademies().then(function (response) {
            vm.academiesRel = response.data;
        });

        teacherService.getTeachers().then(function (response) {
            vm.teachersRel = response.data;
        });

    // Función que guarda los datos
    vm.to = new Date();

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
      vm.presave= function(newStudent){
        vm.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(vm.cloudObj)
          .success(function(data){
            newStudent.photo = data.url;
            vm.save(newStudent);
          }); // Cierre de la función success
      } // Cierre de la función presave

    // Inicio de la función save, que se encarga de obtener los datos y enviarlos para ser guardados.(Pamela)
      vm.save= function(){
        var newStudent = {
          id: vm.id,
          name: vm.name,
          firstName: vm.firstName,
          lastName: vm.lastName,
          gender: vm.gender,
          date: vm.date,
          civilStatus: vm.civilStatus,
          email: vm.email,
          telephone: vm.telephone,
          address: vm.address,
          weight: vm.weight,
          height: vm.height,
          ageCategory: vm.ageCategory,
          weightCategory: vm.weightCategory,
          grade: vm.grade,
          academies: vm.academies,
          teachers: vm.teachers,
          status: 'Activo',
          password: vm.password,
          photo: vm.photo,
          userType: 'student'
        }// Cierre de newStudent.(Pamela)

        if(vm.students.length == 0){
          studentService.setStudents(newStudent);
          clear();
          loadStudents();
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
        for(var i = 0; i < vm.students.length; i++){
          if(newStudent.id == vm.students[i].id){
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
          else if(newStudent.email == vm.students[i].email){
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
                studentService.setStudents(newStudent).then(function (response) {
                  vm.id = null;
                  vm.firstName = null;
                  vm.surname = null;
                  vm.secondSurname = null;
                  vm.gender = null;
                  vm.date = null;
                  vm.civilStatus = null;
                  vm.email = null;
                  vm.telephone = null;
                  vm.address = null;
                  vm.weight = null;
                  vm.height = null;
                  vm.grade = null;
                  vm.academies = null;
                  vm.teachers = null;
                  vm.status = null;
                  vm.password = null;
                  vm.photo = null;
                loadStudents();
              });
                 clear();
                 loadStudents();
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

      // Inicio: de la función getInfo, que se encarga de obtener los datos.(Pamela)
      vm.getInfo = function(pStudent){
        vm.id = pStudent._id;
        vm.id = pStudent.id;
        vm.name = pStudent.name;
        vm.firstName = pStudent.firstName;
        vm.lastName = pStudent.lastName;
        vm.gender = pStudent.gender;
        vm.date = new Date(pStudent.date);
        vm.civilStatus = pStudent.civilStatus;
        vm.email = pStudent.email;
        vm.telephone = pStudent.telephone;
        vm.address = pStudent.address;
        vm.weight = pStudent.weight;
        vm.height = pStudent.height;
        vm.academies = pStudent.academies;
        vm.teachers = pStudent.teachers;
        vm.grade = pStudent.grade;
        vm.password = pStudent.password
        vm.photo = pStudent.photo;
      }// Cierre de la función getInfo.(Pamela)
    //función que cambia boton segun la información para modificar Pili
    vm.hideButton = function(){
      document.querySelector('#actualizar').classList.remove('displayNone');
      document.querySelector('#registrar').classList.add('displayNone');
    }

      // Inicio de la función update, que se encarga de devolver los datos para ser editados.(Pamela)

      //función que modifica los datos
      vm.update = function(){
        document.querySelector('#actualizar').classList.add('displayNone');
        document.querySelector('#registrar').classList.remove('displayNone');
        var newStudent = {
          _id : vm.id,
          id: vm.id,
          name: vm.name,
          firstName: vm.firstName,
          lastName: vm.lastName,
          gender: vm.gender,
          date: vm.date,
          civilStatus: vm.civilStatus,
          email: vm.email,
          telephone: vm.telephone,
          address: vm.address,
          weight: vm.weight,
          height: vm.height,
          academies: vm.academies,
          teachers: vm.teachers,
          grade: vm.grade,
          status: 'Activo',
          password: vm.password,
          photo: vm.photo
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
       studentService.updateStudent(newStudent).then(function(response){
        studentService.getStudents()
          .then(function(response){
            vm.students = response.data;
          })
          .catch(function(err){
            console.log(err);
          })
       });
        loadStudents();
        clear();
      } // Cierre de la función update


      // Inicio de la función clear, que se encarga de limpiar los datos despúes de un registro.(Pamela)
      function clear(){
        vm.id = '';
        vm.name =  '';
        vm.firstName =  '';
        vm.lastName =  '';
        vm.gender =  '';
        vm.date =  '';
        vm.civilStatus =  '';
        vm.email =  '';
        vm.telephone =  '';
        vm.address =  '';
        vm.weight =  '';
        vm.height =  '';
        vm.academies = '';
        vm.teachers = '';
        vm.grade =  '';
        vm.password = '';
        vm.photo = '';
      }// Cierre de la función clear.(Pamela)

      // Inicio de la función inactive, que se encarga de cambiar el estado del profesor.(Pamela)
      //función que cambia el estado a inabilitado.(Pamela)
      vm.inactive = function(pStudent){
        var studentsList = studentService.getStudents();
        for (var i = 0; i < studentsList.length; i++) {
          if (studentsList[i].email == pStudent.email) {
            studentsList[i].status = 'inhabilitado';
            console.log(studentsList[i].status)
          }// Cierre del if.(Pamela)
        }// Cierre del ciclo.(Pamela)
        studentService.updateState(studentsList);
        loadStudents();
      }// Cierre de la funcion inactive.(Pamela)

      //función que cambia el estado a activo.(Pamela)
      vm.active = function(pStudent){
        var studentsList = studentService.getStudents();
        for (var i = 0; i < studentsList.length; i++) {
          if (studentsList[i].email == pStudent.email) {
            studentsList[i].status = 'Activo';
            console.log(studentsList[i].status)
          }// Cierre del if.(Pamela)
        }// Cierre del ciclo.(Pamela)
        studentService.updateState(studentsList);
        loadStudents();
      }// Cierre de la funcion active.(Pamela)

      vm.logOut = function(){
        AuthService.logOut();
      }

    }// Cierre de la función studentController.(Pamela)
})();
