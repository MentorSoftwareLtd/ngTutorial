
describe('PeopleCtrl', function() {
    var authRequestHandler, ctrl, $rootScope;
    var people = [{fn: 'name1', ln: 'name2'}];
    // Set up the module
  beforeEach(function () {
    angular.mock.module('ngTutorial');
  });

  beforeEach(inject(function($injector) {
      $httpBackend = $injector.get('$httpBackend');
      var $http = $injector.get('$http');
      console.log($http);
    // backend definition common for all tests
      authRequestHandler = $httpBackend.when('GET', '/api/people')
          .respond(people);
      // Get hold of a scope (i.e. the root scope)
      $rootScope = $injector.get('$rootScope');
      // The $controller service is used to create instances of controllers
      var $controller = $injector.get('$controller');
      ctrl = $controller('PeopleCtrl', {
          $scope : $rootScope
      });


  }));

    it('should load people', function() {
      expect($rootScope.people).toBeDefined();
      expect($rootScope.loadPeople).toBeDefined();

      $httpBackend.expectGET('/api/people');
        $rootScope.loadPeople();
        $httpBackend.flush();
        expect($rootScope.people).toEqual(people);
        console.log('ppp',$rootScope.people);


        //expect($rootScope.people).toBeDefined();
        //expect($rootScope.loadPeople).toBeDefined();
    });



});
