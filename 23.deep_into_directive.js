var app = angular.module('myApp', []);

app.controller('controller', function($scope){
	$scope.name = "James";
});

app.directive('superman', function() {
	return {
		restrict: 'AE',
		replace: true,
		template: '<h4>I am superman!</h4>',
		link: function($scope, iElm, iAttrs){
			//console.log(iAttrs);
			//console.log(iAttrs.$$element);
		}
	};
});