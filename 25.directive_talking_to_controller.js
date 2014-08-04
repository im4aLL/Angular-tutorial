var app = angular.module('twitterApp', []);

app.controller('AppCtrl', function($scope){
	$scope.loadMoreTweet = function(){
		alert("Loading more tweettttt!");
	};

	$scope.deleteMoreTweet = function(){
		alert("Deleting tweets!");
	};
});

app.directive('ctajs', function(){
	return function($scope, elem, attr){
		elem.bind('click', function() {
			$scope.$apply(attr.ctajs);
		});
	}
});