var app=angular.module('ngTutorial',['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/',{
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
    }).when('/people',{
        templateUrl: 'templates/people.html',
        controller: 'PeopleCtrl'
    }).when('/add',{
        templateUrl: 'templates/add.html',
        controller: 'AddCtrl'
    }).otherwise({
        redirectTo :'/'
    });
});

app.controller('MainCtrl',function($scope){

});
app.controller('HomeCtrl',function($scope){
    $scope.name="ngTutorial";
});
app.controller('AddCtrl',function($scope, $http){
    $scope.name="ngTutorial";
    $scope.save = function(form) {
        console.log($scope.person);
        if ($scope.AddPerson.$valid) {
            $http.post('/api/add',$scope.person).success(
                function(data, status, headers, config) {
                    console.log('fsada');
                })
        }
    }
});


app.controller('PeopleCtrl',function($scope, $rootScope, $http,
                                   PeopleService) {
    /*$scope.$watch('name',
        function(newValue, oldValue){
            console.log('Model changed',
                newValue, oldValue);
    });*/
    $scope.people=[];
    $scope.loadPeople = function() {
        PeopleService.loadPeople(function(data) {
            $scope.people=data;
        })
    }
});

app.service('PeopleService',function($http) {

    this.loadPeople=function(callBackSuccess) {
        $http.get('/api/people').success(
            function(data, status, headers, config) {
                callBackSuccess(data);
            })

    };
});


app.directive('myDirective', function() {
    return {
        templateUrl: 'directive/myDir2.html',
        scope: {
            model: '=myModel'
        }
    };
});





//
