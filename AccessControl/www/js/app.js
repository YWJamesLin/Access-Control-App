// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives', 'ionic-material'])

.run(function($rootScope, $ionicPlatform, $timeout, AccessControl, Material) {
   $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
         cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
         cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
         // org.apache.cordova.statusbar required
         StatusBar.styleDefault();
      }

      AccessControl.initialize();

      $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options) {
         switch (fromState.name) {
            case 'accessControl.users':
               document.getElementById('fab').classList.add('motion');
               break;
         }
      });
      $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
         Material.rede();
         switch (toState.name) {
            case 'accessControl.users':
               $timeout(function() {
                  document.getElementById('fab').classList.remove('motion');
               }, 0);
               break;
         }
      });
   });
});
