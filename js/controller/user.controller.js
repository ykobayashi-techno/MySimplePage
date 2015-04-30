'use strict';

var userControllers = angular.module('userControllers', []);

userControllers.controller('UserCtrl', [ '$scope',
	function($scope) {
		$scope.greeting = 'Hello!';
		$scope.items = [
			{ name:'Aさん', age:24 },
			{ name:'Bさん', age:22 },
			{ name:'Cさん', age:26 },
			{ name:'Dさん', age:28 }
		];
	}
]);