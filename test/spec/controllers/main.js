'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('tareasApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it ('no debe tener items al empezar', function () {
    expect(scope.todos.length).toBe(0);
  });
});
