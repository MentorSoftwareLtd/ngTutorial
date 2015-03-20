app.run(function() {
    console.log('Run');
});

var app=angular.module('ngTutorial',[]);

app.controller('MainCtrl',function($scope, $rootScope, $http,
                                   $injector,
                                   msConst, msValue,
                                   msFactory,
                                   msService) {
    console.log('Const', msConst);
    console.log('Value', msValue);
    console.log('Service', msService);
    console.log('Factory', msFactory);

    var service =$injector.get('msService');
    console.log('Service by injector', service, msService==service);

    $scope.name="Name1";
    /*$scope.$watch('name',
     function(newValue, oldValue){
     console.log('Model changed',
     newValue, oldValue);
     });*/
    $scope.people=[];
    $scope.loadPeople = function() {
        $http.get('/api/people').success(
            function(data, status, headers, config) {
                $scope.people=data;
                console.log(data, status);
            })
    }
});


//services
app.constant('msConst',{a : 1});

app.value('msValue',{a : 2});

app.service('msService',function() {
    this.name="Service";
});

app.factory('msFactory',function() {
    return {
        name : 'service'
    }
});

//
app.directive('myDirective', function() {
    return {
        templateUrl: 'templates/myDir2.html',
        scope: {
            model: '=myModel'
        }
    };
});

/**
 * Created by mdylag on 20/03/15.
 */
app.directive('myDirective', function() {
    return {
        template: '<h1>Directive</h1>' +
        '<p>Name: {{name}} </p>'
    };
});

app.directive('myDirective', function() {
    return {
        templateUrl: 'templates/myDir1.html'
    };
});

app.directive('myDirective', function() {
    return {
        templateUrl: 'templates/myDir2.html',
        scope: {
            model: '=myModel'
        }
    };
});

