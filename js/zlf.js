var app=angular.module("zlf",['ng','ngRoute', 'ngAnimate']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/zlf_start', {
      templateUrl: 'tpl/start.html'
    })
    .when('/zlf_main', {
      templateUrl: 'tpl/main.html'
    })
    .when('/zlf_resume', {
      templateUrl: 'tpl/resume.html'
    })
    .when('/zlf_project', {
      templateUrl: 'tpl/project.html'
    })
    .when('/zlf_skill', {
      templateUrl: 'tpl/skill.html'
    })
    .otherwise({redirectTo: '/zlf_start'})
})


app.controller('parentCtrl', ['$scope', '$location',
  function ($scope, $location) {

    $scope.jump = function (routePath) {
      $location.path(routePath);
    }
  }
])