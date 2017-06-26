(function(){
  'use strict';
  angular
  .module('fctRoutes', ['ui.router', 'oc.lazyLoad', 'angularCSS'])
  .config(configuration)


  configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configuration($stateProvider, $urlRouterProvider){
    $stateProvider

    .state('landingPage',{
      url : '/landing',
      templateUrl: 'components/landingPage/landing.view.html',
    })

    $urlRouterProvider.otherwise('/landing');
  }//cierre de las rutas
})();
