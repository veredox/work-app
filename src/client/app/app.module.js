(function () {
  'use strict';

  angular.module('app', [
    'app.core',
    'app.layout',
    'app.project.manage',
    'app.project.create',
    'app.project.core',
    'app.getting-started',
    'app.submit-work',
    'app.create-account'
  ]).config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(false);
  }]);

})();
