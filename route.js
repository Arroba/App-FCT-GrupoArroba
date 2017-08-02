(function(){
  'use strict';
  angular
  .module('fctRoutes', ['ui.router', 'oc.lazyLoad', 'angularCSS','ngMessages'])
  .config(configuration)


  configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configuration($stateProvider, $urlRouterProvider){
    $stateProvider

    .state('landingPage',{
      url : '/landing',
      templateUrl: 'components/landingPage/landing.view.html',
      css:'css/styleLanding.css'
    })

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

    .state('places',{
      url : '/places',
      templateUrl: './components/place/place.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/place/place.controller.js')
        }]
      },
      controller: 'placeController',
      controllerAs: 'vm',
      css:'css/styleMenu.css'
    })

    .state('beneficient',{
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
    })  //Olman

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

      .state('landingPageEvents',{
        url : '/landingPageEvents',
        templateUrl: 'components/landingPageEvents/landingPageEvents.view.html',
        css:'css/styleLandingEvents.css'
      })

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

      .state('totalAcademies',{
        url : '/totalAcademies',
        templateUrl: './components/academies/totalAcademies.html',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad){
            return $ocLazyLoad.load('./components/academies/academies.controller.js')
          }]
        },
        controller: 'academiesController',
        controllerAs: 'vm',
        css:'css/styleMenu.css'
      })

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

      .state('totalAcademiesAsistant',{
        url : '/totalAcademiesAsistant',
        templateUrl: './components/academies/totalAcademiesAsistant.html',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad){
            return $ocLazyLoad.load('./components/academies/academies.controller.js')
          }]
        },
        controller: 'academiesController',
        controllerAs: 'vm',
        css:'css/styleMenu.css'
      })

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

      .state('totalBeneficientsAsistant',{
        url : '/totalBeneficientsAsistant',
        templateUrl: './components/beneficientAssociation/totalBeneficientsAsistant.html',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad){
            return $ocLazyLoad.load('./components/beneficientAssociation/beneficient.controller.js')
          }]
        },
        controller: 'beneficientController',
        controllerAs: 'vm',
        css:'css/styleMenu.css'
      })

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

      .state('totalBlazesAsistant',{
        url : '/totalBlazesAsistant',
        templateUrl: './components/blazes/totalBlazesAsistant.html',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad){
            return $ocLazyLoad.load('./components/blazes/blaze.controller.js')
          }]
        },
        controller: 'blazeController',
        controllerAs: 'vm',
        css:'css/styleMenu.css'
      })

      .state('totalexhibitions',{
      url : '/totalexhibitions',
      templateUrl: './components/exhibitions/totalexhibitions.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/exhibitions/exhibition.controller.js')
         }]
        },
        controller: 'exhibitionController',
       controllerAs: 'vm',
       css:'css/styleMenu.css'
      })

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

      .state('totalExhibitionsAsistant',{
      url : '/totalExhibitionsAsistant',
      templateUrl: './components/exhibitions/totalExhibitionsAsistant.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/exhibitions/exhibition.controller.js')
         }]
        },
        controller: 'exhibitionController',
       controllerAs: 'vm',
       css:'css/styleMenu.css'
      })

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

      .state('totalPlaces',{
        url : '/totalPlaces',
        templateUrl: './components/place/totalPlaces.html',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad){
            return $ocLazyLoad.load('./components/place/place.controller.js')
          }]
        },
        controller: 'placeController',
        controllerAs: 'vm',
        css:'css/styleMenu.css'
      })

      .state('totalstudents',{
        url : '/totalstudents',
        templateUrl: './components/students/totalstudents.html',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad){
            return $ocLazyLoad.load('./components/students/student.controller.js')
          }]
        },
        controller: 'studentController',
        controllerAs: 'vm',
        css:'css/styleMenu.css'
      })

      .state('totalteachers',{
        url : '/totalteachers',
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

      .state('totalsponsors',{
        url : '/totalsponsors',
        templateUrl: './components/sponsors/totalsponsors.html',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad){
            return $ocLazyLoad.load('./components/sponsors/sponsor.controller.js')
          }]
        },
        controller: 'sponsorController',
        controllerAs: 'vm',
        css:'css/styleMenu.css'
      })

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
        css:'css/styleMenu.css'
      })

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
        css:'css/styleMenu.css'
      })

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



    $urlRouterProvider.otherwise('/landing');
  }//cierre de las rutas
})();
