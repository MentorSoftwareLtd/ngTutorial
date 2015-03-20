var angular=require('../../../bower_components/angular');

var app=angular.module('ngTutorial.controllers',[]);
app.controller('MainController', ['$scope', function ($scope) {
    $scope.message = 'Hello ';
}]);

/*(function() {
})();
*/
