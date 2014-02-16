/**
*/

'use strict';

angular.module('myApp').controller('PhotosCtrl', ['$scope','$location','$anchorScroll',
function($scope,$location,$anchorScroll) {

// function gotoAnchor
	$scope.gotoAnchor = function(anchorID) {
//		alert(anchorID);
		var old = $location.hash();
		// set the location.hash to the id of the element you wish to scroll to.
		//$location.hash('top');
		$location.hash(anchorID);
		// call $anchorScroll()
		$anchorScroll();
		//reset to old to keep any additional routing logic from kicking in
		$location.hash(old);	
	}; // end of function gotoAnchor

	$scope.photos =[
		{
			index: 'photo1',
			title: 'Gas Sphere Weld',
			pictures: [	{image: $scope.appPathImg+'/sphere1.jpg'},
						{image: $scope.appPathImg+'/sphere2.jpg'},
						{image: $scope.appPathImg+'/sphere3.jpg'},
						{image: $scope.appPathImg+'/sphere4.jpg'}],
			total: '4'
		},
		{
			index: 'photo2',
			title: 'Heavy Wall Pressure Vessel',
			pictures: [	{image: $scope.appPathImg+'/vessel1.jpg'},
						{image: $scope.appPathImg+'/vessel2.jpg'},
						{image: $scope.appPathImg+'/vessel3.jpg'},
						{image: $scope.appPathImg+'/vessel4.jpg'}],
			total: '4'
		},
		{
			index: 'photo3',
			title: 'Raster Scan Weld',
			pictures: [	{image: $scope.appPathImg+'/girthweld1.jpg'},
						{image: $scope.appPathImg+'/girthweld2.jpg'},
						{image: $scope.appPathImg+'/girthweld3.jpg'}],
			total: '3'
		},
		{
			index: 'photo4',
			title: 'API-1104 Pipe Weld',
			pictures: [	{image: $scope.appPathImg+'/pipeweld1.jpg'},
						{image: $scope.appPathImg+'/pipeweld2.jpg'},
						{image: $scope.appPathImg+'/pipeweld3.jpg'},
						{image: $scope.appPathImg+'/pipeweld4.jpg'}],
			total: '4'
		},
		{
			index: 'photo5',
			title: 'AWS D1.5 Bridge Flange',
			pictures: [	{image: $scope.appPathImg+'/bridgeflange1.jpg'},
						{image: $scope.appPathImg+'/bridgeflange2.jpg'},
						{image: $scope.appPathImg+'/bridgeflange3.jpg'},
						{image: $scope.appPathImg+'/bridgeflange4.jpg'}],
			total: '4'
		},
		{
			index: 'photo6',
			title: 'Turbine Disk Rim',
			pictures: [	{image: $scope.appPathImg+'/turbinedisk1.jpg'},
						{image: $scope.appPathImg+'/turbinedisk2.jpg'},
						{image: $scope.appPathImg+'/turbinedisk3.jpg'}],
			total: '3'
		},
		{
			index: 'photo7',
			title: 'Turbine Rotorbore',
			pictures: [	{image: $scope.appPathImg+'/rotorbore1.jpg'},
						{image: $scope.appPathImg+'/rotorbore2.jpg'},
						{image: $scope.appPathImg+'/rotorbore3.jpg'}],
			total: '3'
		},
		{
			index: 'photo8',
			title: 'Cross Country Pipeline',
			pictures: [	{image: $scope.appPathImg+'/pipeline1.jpg'},
						{image: $scope.appPathImg+'/pipeline2.jpg'},
						{image: $scope.appPathImg+'/pipeline3.jpg'},
						{image: $scope.appPathImg+'/pipeline4.jpg'}],
			total: '4'
		}
	];
	
}]);