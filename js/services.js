(function() {

  'use strict';

  angular
    .module('myApp.services', [])
    .service('coffeeService', coffeeService
  );

  coffeeService.$inject = ['$http'];

  function coffeeService($http) {
    /*jshint validthis: true */
    this.test = 'does this work?';
    this.getAllCoffee = function () {
      return $http.get('//stormy-atoll-55298.herokuapp.com/coffee/1');
    };
    this.test = 'does this shit work?';
  }

})();
