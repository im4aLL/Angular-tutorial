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

app.directive('color', function(){
	return {
		restrict: 'A',
		replace: true,
		template: '<h4>Text from directive</h4>',
		link: function($scope, iElm, iAttrs){
			//console.log( iAttrs.color );
			console.log( iElm );

			switch( iAttrs.color ) {
				case 'red':
					iElm
						.css({ 'color' : '#ff0000' })
						.html('Im red and modified!');
				break;

				case 'green':
					iElm.css({ 'color' : 'green' });
				break;
			}


		}
	}
});