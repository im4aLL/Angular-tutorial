var app = angular.module('myApp', []);

app.directive('enter', function(){
	return function($scope, elem, elemExtended){
		elem.bind('mouseenter', function(event) {
			console.log('I am inside of you!');
		});
	}
});

app.directive('leave', function(){
	return function($scope, elem, elemExtended){
		elem.bind('mouseleave', function(event) {
			console.log('Now i am leaving you!');
		});
	}
});

app.directive('popup', function(){
	return function($scope, elem, elemExtended){
		elem.bind('click', function(event) {
			console.log('Poke!');
		});
	}
});


app.directive('mouseIn', function(){
	return function($scope, elem, attr){
		elem.bind('mouseenter', function(event) {
			elem.addClass(attr.mouseIn);
		});
	}
});

app.directive('mouseOut', function(){
	return function($scope, elem, attr){
		elem.bind('mouseleave', function(event) {
			elem.removeClass(attr.mouseIn);
		});
	}
});