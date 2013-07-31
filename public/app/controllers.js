'use strict';

function ZDViewCtrl($scope, $http) {
	
	/*//Numero estatico
	$scope.tickets = [
		{"count": "2"}
	];*/

	//Valor que está no json
	$http.get('views/29639836.json').success(function(data) {
	   $scope.tickets = data;
	});

	/*$http.get('views/29639836.json').success(function(data) {
	    $scope.tickets = [
			{ "count" : data.count}];
 	});*/
}