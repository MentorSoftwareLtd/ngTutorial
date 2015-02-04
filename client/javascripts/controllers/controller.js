(function() {
    var app=angular.module('ngTutorial.controllers',[]);
    myApp.controller('MainController', ['$scope', function ($scope) {
        $scope.message = 'Hello ';
    }]);
})();
