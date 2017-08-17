(function(){
  'use strict';
  angular
  .module('fctRoutes', ['ui.router', 'oc.lazyLoad', 'angularCSS','ngMessages'])
  .config(configuration)


  configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configuration($stateProvider, $urlRouterProvider){
    $stateProvider

//LANDING PAGE
    .state('landingPage',{
      url : '/landing',
      templateUrl: 'components/landingPage/landing.view.html',
      css:'css/styleLanding.css'
    })

   .state('landingPageEvents',{
      url : '/landingPageEvents',
      templateUrl: 'components/landingPageEvents/landingPageEvents.view.html',
      css:'css/styleLandingEvents.css'
  })

  .state('landingPageEventsTeacher',{
     url : '/landingPageEventsTeacher',
     templateUrl: 'components/landingPageEvents/landingPageEventsTeacher.view.html',
     css:'css/styleLandingEvents.css',
 })

 .state('landingPageEventsStudent',{
    url : '/landingPageEventsStudent',
    templateUrl: 'components/landingPageEvents/landingPageEventsStudent.view.html',
    css:'css/styleLandingEvents.css',
})

.state('landingPageEventsPublic',{
   url : '/landingPageEventsPublic',
   templateUrl: 'components/landingPageEvents/landingPageEventsPublic.view.html',
   css:'css/styleLandingEvents.css',
})

//LOGIN
    .state('login',{
      url : '/login',
      templateUrl: './components/login/login.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/login/login.controller.js')
        }]
      },
      controller: 'LoginController',
      controllerAs: 'vm',
      css:'css/styleLogin.css'
    })

//ACADEMIES  ADMI//
    .state('academies',{
      url : '/academies',
      templateUrl: './components/academies/academies.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/academies/academies.controller.js')
        }]
      },
      controller: 'academiesController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //REGISTRO Academias - ASISTENTE
    .state('academiesAssistant',{
      url : '/academiesAssistant',
      templateUrl: './components/academies/academiesAssistant.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/academies/academies.controller.js')
        }]
      },
      controller: 'academiesController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //TOTAL ACADEMIAS ADMI
    .state('totalAcademies',{
      url : '/totalAcademies',
      templateUrl: './components/academies/totalacademies.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/academies/academies.controller.js')
        }]
      },
      controller: 'academiesController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
      //ACADEMIAS TOTAL PROFESOR
    .state('totalAcademiesTeacher',{
      url : '/totalAcademiesTeacher',
      templateUrl: './components/academies/totalAcademiesTeacher.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/academies/academies.controller.js')
        }]
      },
      controller: 'academiesController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //TOTAL ACADEMIAS ASISTENTE
    .state('totalAcademiesAssistant',{
      url : '/totalAcademiesAssistant',
      templateUrl: './components/academies/totalAcademiesAssistant.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/academies/academies.controller.js')
        }]
      },
      controller: 'academiesController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })

//EVENTOS
    .state('events',{
      url : '/events',
      templateUrl: './components/events/event.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/events/event.controller.js')
        }]
      },
      controller: 'eventsController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })

    .state('eventAssistant',{
      url : '/eventAssistant',
      templateUrl: './components/events/eventAssistant.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/events/event.controller.js')
        }]
      },
      controller: 'eventsController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //EVENTOS GENERALES
    .state('eventsGeneral',{
      url : '/eventsGeneral',
      templateUrl: './components/eventsGeneral/eventsGeneral.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/eventsGeneral/eventsGeneral.controller.js')
        }]
      },
      controller: 'eventsGeneralController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })

    //TOTAL EVENTOS GENERALES
    .state('totaleventsGeneral',{
      url : '/totaleventsGeneral',
      templateUrl: './components/eventsGeneral/totaleventsGeneral.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/eventsGeneral/eventsGeneral.controller.js')
        }]
      },
      controller: 'eventsGeneralController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })

    //TOTAL EVENTOS GENERALES
    .state('totaleventsGeneralAssistant',{
      url : '/totaleventsGeneralAssistant',
      templateUrl: './components/eventsGeneral/totaleventsGeneralAssistant.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/eventsGeneral/eventsGeneral.controller.js')
        }]
      },
      controller: 'eventsGeneralController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })

    .state('totaleventsGeneralTeacher',{
      url : '/totaleventsGeneralTeacher',
      templateUrl: './components/eventsGeneral/totaleventsGeneralTeacher.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/eventsGeneral/eventsGeneral.controller.js')
        }]
      },
      controller: 'eventsGeneralController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })

    .state('eventsGeneralAssistant',{
      url : '/eventsGeneralAssistant',
      templateUrl: './components/eventsGeneral/eventsGeneralAssistant.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/eventsGeneral/eventsGeneral.controller.js')
        }]
      },
      controller: 'eventsGeneralController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })

    //FOGUEOS REGISTRO
    .state('blazes',{
      url : '/blazes',
      templateUrl: './components/blazes/blaze.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/blazes/blaze.controller.js')
        }]
      },
      controller: 'blazeController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //FOGUEOS REGISTRO ASISTENTE
    .state('blazeAssistant',{
      url : '/blazeAssistant',
      templateUrl: './components/blazes/blazeAssistant.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/blazes/blaze.controller.js')
        }]
      },
      controller: 'blazeController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //VISTA TOTAL FOGUEO REGISTRADOS
    .state('totalBlazes',{
      url : '/totalBlazes',
      templateUrl: './components/blazes/totalBlazes.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/blazes/blaze.controller.js')
        }]
      },
      controller: 'blazeController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //VISTA TOTAL FOGUEO REGISTRADOS PROFESOR
    .state('totalBlazesTeacher',{
      url : '/totalBlazesTeacher',
      templateUrl: './components/blazes/totalBlazesTeacher.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/blazes/blaze.controller.js')
        }]
      },
      controller: 'blazeController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //VISTA TOTAL FOGUEO REGISTRADOS PÚBLICO
    .state('totalBlazesPublic',{
      url : '/totalBlazesPublic',
      templateUrl: './components/blazes/totalBlazesPublic.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/blazes/blaze.controller.js')
        }]
      },
      controller: 'blazeController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //VISTA TOTAL FOGUEO REGISTRADOS ASISTENTE
    .state('totalBlazesAssistant',{
      url : '/totalBlazesAssistant',
      templateUrl: './components/blazes/totalBlazesAssistant.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/blazes/blaze.controller.js')
        }]
      },
      controller: 'blazeController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })

    //EXHIBICIONES REGISTRO
    .state('exhibitions',{
      url : '/exhibitions',
      templateUrl: './components/exhibitions/exhibition.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/exhibitions/exhibition.controller.js')
         }]
        },
      controller: 'exhibitionController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //EXHIBICIONES REGISTRO ASISTENTE
    .state('exhibitionAssistant',{
      url : '/exhibitionAssistant',
      templateUrl: './components/exhibitions/exhibitionAssistant.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/exhibitions/exhibition.controller.js')
         }]
      },
      controller: 'exhibitionController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //EXHIBICIONES REGISTRADAS
    .state('totalExhibitions',{
      url : '/totalExhibitions',
      templateUrl: './components/exhibitions/totalExhibitions.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/exhibitions/exhibition.controller.js')
         }]
        },
      controller: 'exhibitionController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //EXHIBICIONES REGISTRADAS ASISTENTE
    .state('totalExhibitionsAssistant',{
      url : '/totalExhibitionsAssistant',
      templateUrl: './components/exhibitions/totalExhibitionsAssistant.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/exhibitions/exhibition.controller.js')
         }]
        },
      controller: 'exhibitionController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //EXHIBICIONES REGISTRADAS PÚBLICO
    .state('totalExhibitionsPublic',{
      url : '/totalExhibitionsPublic',
      templateUrl: './components/exhibitions/totalExhibitionsPublic.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/exhibitions/exhibition.controller.js')
         }]
        },
      controller: 'exhibitionController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //EXHIBICIONES REGISTRADAS PROFESOR
    .state('totalExhibitionsTeacher',{
      url : '/totalExhibitionsTeacher',
      templateUrl: './components/exhibitions/totalExhibitionsTeacher.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/exhibitions/exhibition.controller.js')
         }]
        },
      controller: 'exhibitionController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //TORNEO
    .state('fights',{
      url : '/fights',
      templateUrl: './components/fights/fights.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/fights/fights.controller.js')
        }]
      },
      controller: 'fightsController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //Fights Asistente
    .state('fightsAssistant',{
      url : '/fightsAssistant',
      templateUrl: './components/fights/fightsAssistant.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/fights/fights.controller.js')
        }]
      },
      controller: 'fightsController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })

    //FOGUEOS REGISTRADOS
    .state('totalfights',{
      url : '/totalfights',
      templateUrl: './components/events/totalfights.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/events/event.controller.js')
        }]
      },
      controller: 'eventsController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })

    //FOGUEOS REGISTRADOS
    .state('totalfightsAssistant',{
      url : '/totalfightsAssistant',
      templateUrl: './components/events/totalfightsAssistant.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/events/event.controller.js')
        }]
      },
      controller: 'eventsController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })

//Registro PROFESOR ADMI
    .state('teachers',{
      url : '/teachers',
      templateUrl: './components/teachers/teacher.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/teachers/teacher.controller.js')
        }]
      },
      controller: 'teacherController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //REGISTRO PROFESOR  ASISTENTE
    .state('teacherAssistant',{
      url : '/teacherAssistant',
      templateUrl: './components/teachers/teacherAssistant.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/teachers/teacher.controller.js')
        }]
      },
      controller: 'teacherController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //PERFIL PROFESOR
    .state('teacherProfile',{
      url : '/teacherProfile',
      templateUrl: './components/teachers/profile.teacher.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/teachers/teacher.controller.js')
        }]
      },
      controller: 'teacherController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //TOTAL PROFESORES ADMI
    .state('totalTeachers',{
      url : '/totalTeachers',
      templateUrl: './components/teachers/totalteachers.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/teachers/teacher.controller.js')
        }]
      },
      controller: 'teacherController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //TOTAL PROFESORES ASISTENTE
    .state('totalTeachersAssistant',{
      url : '/totalTeachersAssistant',
      templateUrl: './components/teachers/totalTeachersAssistant.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/teachers/teacher.controller.js')
        }]
      },
      controller: 'teacherController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })

  //REGISTRO PATROCINADOR  ADMI
    .state('sponsors',{
      url : '/sponsors',
      templateUrl: './components/sponsors/sponsor.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/sponsors/sponsor.controller.js')
        }]
      },
      controller: 'sponsorController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //REGISTRO PATROCINADOR  ASISTENTE
    .state('sponsorAssistant',{
      url : '/sponsorAssistant',
      templateUrl: './components/sponsors/sponsorAssistant.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/sponsors/sponsor.controller.js')
        }]
      },
      controller: 'sponsorController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //TOTAL PATROCINADORES ADMI
    .state('totalSponsors',{
      url : '/totalSponsors',
      templateUrl: './components/sponsors/totalSponsors.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/sponsors/sponsor.controller.js')
        }]
      },
      controller: 'sponsorController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //TOTAL PATROCINADORES ASISTENTE
    .state('totalSponsorsAssistant',{
      url : '/totalSponsorsAssistant',
      templateUrl: './components/sponsors/totalSponsorsAssistant.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/sponsors/sponsor.controller.js')
        }]
      },
      controller: 'sponsorController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })

//REGISTROS ESTUDIANTES ADMI
    .state('students',{
      url : '/students',
      templateUrl: './components/students/student.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/students/student.controller.js')
        }]
      },
      controller: 'studentController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //REGISTRO ESTUDIANTES  ASISTENTE
    .state('studentAssistant',{
      url : '/studentAssistant',
      templateUrl: './components/students/studentAssistant.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/students/student.controller.js')
        }]
      },
      controller: 'studentController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //REGISTRO ESTUDIANTES  PROFESOR
    .state('studentTeacher',{
      url : '/studentTeacher',
      templateUrl: './components/students/studentTeacher.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/students/student.controller.js')
        }]
      },
      controller: 'studentController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //PERFIL ESTUDIANTE
    .state('studentProfile',{
      url : '/studentProfile',
      templateUrl: './components/students/profile.student.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/students/student.controller.js')
        }]
      },
      controller: 'studentController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //TOTAL ESTUDIANTES ADMI
    .state('totalStudents',{
      url : '/totalStudents',
      templateUrl: './components/students/totalStudents.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/students/student.controller.js')
        }]
      },
      controller: 'studentController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //TOTAL ESTUDIANTES  ASISTENTE
    .state('totalStudentsAssistant',{
      url : '/totalStudentsAssistant',
      templateUrl: './components/students/totalStudentsAssistant.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/students/student.controller.js')
        }]
      },
      controller: 'studentController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //TOTAL ESTUDIANTES  PROFESOR
    .state('totalStudentsTeacher',{
      url : '/totalStudentsTeacher',
      templateUrl: './components/students/totalStudentsTeacher.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/students/student.controller.js')
        }]
      },
      controller: 'studentController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })

// REGISTRO LUGARES ADMI
    .state('places',{
      url : '/places',
      templateUrl: './components/places/place.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/places/place.controller.js')
        }]
      },
      controller: 'placeController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //REGISTRO LUGARES  ASISTENTE
    .state('placeAssistant',{
      url : '/placeAssistant',
      templateUrl: './components/places/placeAssistant.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/places/place.controller.js')
        }]
      },
      controller: 'placeController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //TOTAL LUGARES ADMI
    .state('totalPlaces',{
      url : '/totalPlaces',
      templateUrl: './components/places/totalPlaces.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/places/place.controller.js')
         }]
        },
      controller: 'placeController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //TOTAL LUGARES  ASISTENTE
    .state('totalPlacesAssistant',{
      url : '/totalPlacesAssistant',
      templateUrl: './components/places/totalPlacesAssistant.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/places/place.controller.js')
         }]
        },
      controller: 'placeController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })

//REGISTRO ASOCIACION ADMI
    .state('beneficients',{
      url : '/beneficients',
      templateUrl: './components/beneficientAssociation/beneficient.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/beneficientAssociation/beneficient.controller.js')
        }]
      },
      controller: 'beneficientController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //REGISTRO ASOCIACION  ASISTENTE
    .state('beneficientAssistant',{
      url : '/beneficientAssistant',
      templateUrl: './components/beneficientAssociation/beneficientAssistant.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/beneficientAssociation/beneficient.controller.js')
        }]
      },
      controller: 'beneficientController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //TOTAL ASOCIACIONES ADMI
    .state('totalBeneficients',{
      url : '/totalBeneficients',
      templateUrl: './components/beneficientAssociation/totalBeneficients.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/beneficientAssociation/beneficient.controller.js')
        }]
      },
      controller: 'beneficientController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //TOTAL ASOCIACIONES  ASISTENTE
    .state('totalBeneficientsAssistant',{
      url : '/totalBeneficientsAssistant',
      templateUrl: './components/beneficientAssociation/totalBeneficientsAssistant.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/beneficientAssociation/beneficient.controller.js')
        }]
      },
      controller: 'beneficientController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })

// REGISTRO PRODUCTOS ADMI
    .state('products',{
      url : '/products',
      templateUrl: './components/products/product.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/products/product.controller.js')
        }]
      },
      controller: 'productController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //REGISTRO PRODUCTOS  ASISTENTE
    .state('productAssistant',{
      url : '/productAssistant',
      templateUrl: './components/products/productAssistant.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/products/product.controller.js')
        }]
      },
      controller: 'productController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //TOTAL PRODUCTOS ADMI
    .state('totalProducts',{
      url : '/totalProducts',
      templateUrl: './components/products/totalProducts.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/products/product.controller.js')
        }]
      },
      controller: 'productController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })
    //TOTAL PRODUCTOS  ASISTENTE
    .state('totalProductsAssistant',{
      url : '/totalProductsAssistant',
      templateUrl: './components/products/totalProductsAssistant.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/products/product.controller.js')
        }]
      },
      controller: 'productController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })

//REGISTRO ENTRADAS ADMI
    .state('tickets',{
      url : '/tickets',
      templateUrl: './components/tickets/tickets.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/tickets/tickets.controller.js')
        }]
      },
      controller: 'ticketsController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
      })

      //TOTAL ENTRADAS ADMI
          .state('totaltickets',{
            url : '/totaltickets',
            templateUrl: './components/tickets/totaltickets.view.html',
            resolve: {
              load: ['$ocLazyLoad', function($ocLazyLoad){
                return $ocLazyLoad.load('./components/tickets/tickets.controller.js')
              }]
            },
            controller: 'ticketsController',
            controllerAs: 'vm',
            css:'css/styleMenu.css'
            })

            //TOTAL ENTRADAS ASISTENTE
                .state('totalticketsAssistant',{
                  url : '/totalticketsAssistant',
                  templateUrl: './components/tickets/totalticketsAssistant.view.html',
                  resolve: {
                    load: ['$ocLazyLoad', function($ocLazyLoad){
                      return $ocLazyLoad.load('./components/tickets/tickets.controller.js')
                    }]
                  },
                  controller: 'ticketsController',
                  controllerAs: 'vm',
                  css:'css/styleMenu.css'
                  })

      //REGISTRO ENTRADAS  ASISTENTE
     .state('ticketAssistant',{
        url : '/ticketAssistant',
        templateUrl: './components/tickets/ticketAssistant.view.html',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad){
            return $ocLazyLoad.load('./components/tickets/tickets.controller.js')
          }]
        },
        controller: 'ticketsController',
        controllerAs: 'vm',
        css:'css/styleMenu.css'
      })
     //REGISTRO ENTRADAS  PUBLICO
     .state('ticketPublic',{
        url : '/ticketPublic',
        templateUrl: './components/tickets/ticketPublic.view.html',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad){
            return $ocLazyLoad.load('./components/tickets/tickets.controller.js')
          }]
        },
        controller: 'ticketsController',
        controllerAs: 'vm',
        css:'css/styleMenu.css'
      })
     //REGISTRO ENTRADAS  ESTUDIANTE
     .state('ticketStudent',{
        url : '/ticketStudent',
        templateUrl: './components/tickets/ticketStudent.view.html',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad){
            return $ocLazyLoad.load('./components/tickets/tickets.controller.js')
          }]
        },
        controller: 'ticketsController',
        controllerAs: 'vm',
        css:'css/styleMenu.css'
      })
     //REGISTRO ENTRADAS  PROFESOR
     .state('ticketTeacher',{
        url : '/ticketTeacher',
        templateUrl: './components/tickets/ticketTeacher.view.html',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad){
            return $ocLazyLoad.load('./components/tickets/tickets.controller.js')
          }]
        },
        controller: 'ticketsController',
        controllerAs: 'vm',
        css:'css/styleMenu.css'
      })

//PERFILES
     //Perfil de entrada
    .state('profileAdmi',{
      url : '/profileAdmi',
      templateUrl: './components/profiles/profile.admi.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/profiles/profileAdmin.controller.js')
        }]
      },
      controller: 'profileAdminController',
      controllerAs: 'vm',
      css:'css/styleLandingEvents.css'
    })

    //ADMINISTRADOR
    .state('profileAdministrador',{
      url : '/profileAdministrador',
      templateUrl: './components/profiles/profileAdministrador.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/profiles/profileAdmin.controller.js')
        }]
      },
      controller: 'profileAdminController',
      controllerAs: 'vm',
      css:'css/styleMenu.css',

    })
    //ASISTENTE
    .state('profileAsistent',{
      url : '/profileAsistent',
      templateUrl: './components/profiles/profile.asistent.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/profiles/profileAsistent.controller.js')
        }]
      },
      controller: 'profileAsistentController',
      controllerAs: 'vm',
      css:'css/styleMenu.css',
      css:'css/styleLandingEvents.css'
    })

    //ASISTENTE
    .state('visualizeAsistent',{
      url : '/visualizeAsistent',
      templateUrl: './components/profiles/visualizeAsistent.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/profiles/profileAsistent.controller.js')
        }]
      },
      controller: 'profileAsistentController',
      controllerAs: 'vm',
      css:'css/styleMenu.css',
    })


    //generalRanking
    .state('gRanking',{
      url : '/generalRanking',
      templateUrl: 'components/generalRanking/generalRanking.view.html',
      css:'css/ranking.css'
    })


        //generalRanking Asistente
        .state('generalRankingAssistant',{
          url : '/generalRankingAssistant',
          templateUrl: 'components/generalRanking/generalRankingAssistant.view.html',
          css:'css/ranking.css'
        })

        //generalRanking Teacher
        .state('generalRankingTeacher',{
          url : '/generalRankingTeacher',
          templateUrl: 'components/generalRanking/generalRankingTeacher.view.html',
          css:'css/ranking.css'
        })

        //generalRanking student
        .state('generalRankingStudent',{
          url : '/generalRankingStudent',
          templateUrl: 'components/generalRanking/generalRankingStudent.view.html',
          css:'css/ranking.css'
        })

        //generalRanking public
        .state('generalRankingPublic',{
          url : '/generalRankingPublic',
          templateUrl: 'components/generalRanking/generalRankingPublic.view.html',
          css:'css/ranking.css'
        })


     //individualRanking
    .state('iRanking',{
      url : '/individualRanking',
      templateUrl: 'components/individualRanking/individualRanking.view.html',
      css:'css/ranking.css'
    })

    //calendar
    .state('calendar',{
    url : '/calendar',
    templateUrl: './components/fights/calendar.view.html',
    resolve: {
      load: ['$ocLazyLoad', function($ocLazyLoad){
        return $ocLazyLoad.load('./components/fights/fights.controller.js')
      }]
    },
    controller: 'fightsController',
    controllerAs: 'vm',
    css:'css/styleCalendar.css'
  })

   .state('calendarAssistant',{
    url : '/calendarAssistant',
    templateUrl: './components/fights/calendar.assistant.view.html',
    resolve: {
      load: ['$ocLazyLoad', function($ocLazyLoad){
        return $ocLazyLoad.load('./components/fights/fights.controller.js')
      }]
    },
    controller: 'fightsController',
    controllerAs: 'vm',
    css:'css/styleMenu.css'
  })

    $urlRouterProvider.otherwise('/landing');
  }//cierre de las rutas
})();
