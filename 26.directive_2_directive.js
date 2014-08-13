var myApp = angular.module("myApp", []);

myApp.directive("superhero", function(){
    return {
        restrict: "E",
		scope: {},
        controller: function($scope){
        	$scope.power = [];
			
			this.addStrength = function(){
				$scope.power.push("Strength");
			}
			
			this.addFlight = function(){
				$scope.power.push("Flight");
			}
			
			this.addSpeed = function(){
				$scope.power.push("Speed");
			}
        },
        link: function($scope, element, attr){
            element.bind("mouseenter", function(){
                console.log( $scope.power );
            });
        }
    }
});


myApp.directive("speed", function(){
	return {
		require: "superhero",
		link: function( $scope, element, attr, superheroCtrl ) {
			superheroCtrl.addSpeed();
		}
	}
});

myApp.directive("flight", function(){
	return {
		require: "superhero",
		link: function( $scope, element, attr, superheroCtrl ) {
			superheroCtrl.addFlight();
		}
	}
});

myApp.directive("strength", function(){
	return {
		require: "superhero",
		link: function( $scope, element, attr, superheroCtrl ) {
			superheroCtrl.addStrength();
		}
	}
});