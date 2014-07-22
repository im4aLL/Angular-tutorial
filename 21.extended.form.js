var myApp = angular.module('myApp', []);

myApp.factory('Data', function(){
	var db = {};
	
	db.countryList = [
		{ name : 'Bangladesh', code : 'BD' },
		{ name : 'United States', code : 'US' },
		{ name : 'Russia', code : 'RU' }
	];

	db.user = {
		'username' : 'John',
		'fullname' : 'John Smith'
	};

	return db;
});

function globalCtrl($scope){
	$scope.toggle = {};
	$scope.toggle.state = false;

	$scope.bodyClick = function(){
		$scope.toggle.state = false;
	};

}

function formCtrl($scope, Data){
	//$scope.user = Data.user;
	$scope.countries = Data.countryList;
	$scope.err = {};

	$scope.submitFrm = function(form){
		
		if( form.$valid === false ) {
			var requiredFields = form.$error.required,
				focused = false;

			for(var i=0; i < requiredFields.length; i++){
				requiredFields[i].$setViewValue('');
				$scope.err[requiredFields[i].$name] = true;
			}
		}

		console.log(form);
		console.log($scope.user);

		return false;
	};

	$scope.customSelect = function(object){
		$scope.toggle.state = false;
		$scope.user.country = object;
	};

	$scope.clickEvent = function($event){
		$scope.toggle.state = !$scope.toggle.state;
		$event.stopPropagation();
	};

}