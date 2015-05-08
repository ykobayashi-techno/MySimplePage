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
        
        $scope.webList = [
            { title:'google', address:'http://www.google.co.jp/' },
            { title:'AngularJs', address:'https://angularjs.org/' },
            { title:'GIGAZINE', address:'http://gigazine.net' },
            { title:'my github', address:'https://github.com/ykobayashi-techno' }
        ];
	}
]);