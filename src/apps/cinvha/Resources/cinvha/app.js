/**
 * Angularjs - Raptor.js
 * Generado automaticamente
 */

 var app = angular.module('cinvha', ['ngRoute', 'ngMaterial']);

 app.config(function($routeProvider, $locationProvider, $httpProvider,$controllerProvider,$mdThemingProvider) {
     app.controller = function (name, controller) {
         $controllerProvider.register(name, controller);
         return app;
     };
     
     
     $httpProvider.interceptors.push(function($q, $location) {
         return {
             'request': function(config) {
 
                 config.headers['X-Requested-With'] = 'XMLHttpRequest'
                 
                 if(config.ignoreLoading!=true)
                     $('.portal-loading').show()
                 return config;
             },
             'responseError': function(rejection) {
                 $('.portal-loading').fadeOut()

                 if (!rejection.config.ignoreRequest && rejection.status == 404)
                     $location.path('/404')
                 if (!rejection.config.ignoreRequest && rejection.status == 401) {
                     
                     $('.portal-loading p').html('Autenticación detectada, redireccionando....')
                     $('.portal-loading').show()
                     window.location.reload()
                     return;
                 }
 
                 return $q.reject(rejection);
             },
             'response': function(response) {
                 
                 $('.portal-loading').fadeOut()
                 
                 return response;
             }
         };
     });
 
     $routeProvider
             
             .when("/", {
                template: "<h1 class='text-center' style='font-size: 110px;margin-top: 40px'>Hola</h1><p class='text-center'>Reemplace esta plantilla por un fragmento cargado desde el servidor</p>",
                controller: "BaseController"
             })
             .when('/404', {
                template: "<h1 class='text-center' style='font-size: 110px;margin-top: 40px'>404</h1><p class='text-center'>La página solicitada no existe.</p>",
                controller: "404Controller"
             })
             .otherwise({redirectTo: '/404'});
 
 
 });
 
 app.controller('BaseController', function($scope, $mdSidenav) {
    $('.portal-loading').fadeOut()
 
 });
 app.controller('404Controller', function($scope, $mdSidenav) {
     $('.portal-loading').fadeOut()
 
 });
 
 
 
 
 