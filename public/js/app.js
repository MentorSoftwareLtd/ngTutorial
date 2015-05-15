var app=angular.module('ngTutorial',[]);
app.controller('PeopleCtrl',  function ($scope, $http) {
  $scope.message = 'Hello ';
  $scope.people = [];
  $scope.loadPeople = function() {
    $http.get('/api/people').success(function(data) {
      $scope.people=data;
    });
  };


});

