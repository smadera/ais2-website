/**
*/

'use strict';

angular.module('myApp').controller('PreviewCtrl', ['$scope','$timeout','$location',
function($scope,$timeout,$location) {

	var stopTimer;	// used to cancel Timer
	var minIntervalMSecs = 500;	// 0.5 secs
	var maxIntervalMSecs = 123456; // 123.456 secs
	var defIntervalMSecs = 3000; // 3.0 secs
	var ii;

// AIS Products////////////////////////////////////////////////////////////////////////	
// function gotoProducts
	$scope.gotoProducts = function(locProductIx) {
		var productPage ='';
		$scope.myInterval = maxIntervalMSecs; // Stop Timer
		$timeout.cancel(stopTimer);	// cancel Timer
		
		if (locProductIx < 0) { // Products
			productPage = 'home'; // no longer valid so will go home
		} else if (locProductIx == 1) { // Systems
			productPage = 'systems';
		} else if (locProductIx == 2) { // AutoScanners
			productPage = 'autoScanners';
		} else if (locProductIx == 3) { // Millenium
			productPage = 'manualScanners';
		} else {
			alert(locProductIx);
		}
		$location.url($scope.appPathLocation+productPage);
	}; // end of function gotoProducts
// AIS Products////////////////////////////////////////////////////////////////////////	
	
// Contact, About, Gallery Photos and Videos//////////////////////////////////////////	
// function gotoOthers
	$scope.gotoOthers = function(locOtherIx) {
		var otherPage ='';
		$scope.myInterval = maxIntervalMSecs; // Stop Timer
		$timeout.cancel(stopTimer);	// cancel Timer
		
		if (locOtherIx == -1) { // Home
			otherPage = 'home';
		} else if (locOtherIx == -2) { // About
			otherPage = 'about';
		} else if (locOtherIx == -3) { // Contact
			otherPage = 'contact';
		} else if (locOtherIx == 1) { // Photos
			otherPage = 'photos';
		} else if (locOtherIx == 2) { // Videos
			otherPage = 'videos';
		} else {
			alert(locOtherIx);
		}
		$location.url($scope.appPathLocation+otherPage);
	}; // end of function gotoOthers
// Contact, About, Gallery Photos and Videos////////////////////////////////////////////////////////////////////////	

// Tiles /////////////////////////////////////////////////////////////////////	
	$scope.currenTile = 0;
	
// function gotoTiles
	$scope.gotoTiles = function(locTileIx) {
//		alert(locTileIx);
		$scope.myInterval = maxIntervalMSecs; // Stop Timer
		$timeout.cancel(stopTimer);	// cancel Timer
		
		$scope.tiles[$scope.currenTile].selected = '';
		if (locTileIx < 0) locTileIx = 0;
		if (locTileIx > ($scope.tiles.length - 1)) locTileIx = ($scope.tiles.length - 1);
		$scope.currenTile = locTileIx;
		$scope.tiles[$scope.currenTile].selected = 'selected';
//		$location.url($scope.appPathLocation+$scope.tiles[locTileIx].details);
	}; // end of function gotoTiles
	
	$scope.tiles =[
		{
			image: $scope.appPathImg+'/tile1.jpg',
			text: 'Everything built / made in-house in the USA, includes development, engineering, hardware and software. Training and support are always available from original manufacturers.',
			details: 'tofdmc'
		},
		{
			image: $scope.appPathImg+'/tile2.jpg',
			text: 'Acquire and store raw LOG data which allows analyst adjustments so data only needs to be acquired once. Parameters such as Gain, DAC, Cscan, Filtering can be tweaked in Viewer software.',
			details: 'corrosion'
		},
		{
			image: $scope.appPathImg+'/tile3.jpg',
			text: 'Advanced analysis software capable of creating raw data videos which allows analyst to view inside the part to verify its integrity.',
			details: 'turbine'
		}
	];

	for (ii=0; ii<$scope.tiles.length; ii++) {
		$scope.tiles[ii].selected = '';
	}
// Tiles //////////////////////////////////////////////////////////////////////////	
	
	$scope.optsCarousel = {
		curSlide:0
	};
	$scope.myInterval = defIntervalMSecs;

// function gotoSlide
	$scope.gotoSlide = function(locIndex, newInterval) {
		$scope.slides[$scope.optsCarousel.curSlide].selected = '';
		if (locIndex < 0) locIndex = 0;
		if (locIndex > ($scope.slides.length - 1)) locIndex = ($scope.slides.length - 1);
		$scope.optsCarousel.curSlide = locIndex;
		$scope.slides[$scope.optsCarousel.curSlide].selected = 'selected';
		$scope.myInterval = newInterval;
	}; // end of function gotoSlide

// function gotoDetails
	$scope.gotoDetails = function(locIndex) {
//		alert(locIndex);
		$scope.myInterval = maxIntervalMSecs; // Stop Timer
		$timeout.cancel(stopTimer);	// cancel Timer
		
		if (locIndex < 0) locIndex = 0;
		if (locIndex > ($scope.slides.length - 1)) locIndex = ($scope.slides.length - 1);
		// console.log($scope.appPathLocation+$scope.slides[locIndex].details);
		$location.url($scope.appPathLocation+$scope.slides[locIndex].details);
	}; // end of function gotoDetails
	
// function changeSlide
	function changeSlide() { // local function only
		stopTimer = $timeout(function() {
			var locIndex = $scope.optsCarousel.curSlide;

			if ($scope.myInterval < minIntervalMSecs) {
				// if interval is too small, make it really big to optimize code
				$scope.myInterval = maxIntervalMSecs;
			}
			if ($scope.myInterval < maxIntervalMSecs) { // only bump curSlide if interval is valid
				if ($scope.optsCarousel.curSlide >=($scope.slides.length-1)) {
					locIndex = 0;
				} else {
					locIndex++;
				}
			}
			$scope.gotoSlide(locIndex,$scope.myInterval);
			if ($scope.myInterval < maxIntervalMSecs) { // only bump curSlide if interval is valid
				changeSlide(); //call itself
			} else {
				$timeout.cancel(stopTimer);	// cancel Timer
			}
		}, $scope.myInterval);
	} // end of function changeSlide
	
// Icons /////////////////////////////////////////////////////////////////////////////	
	$scope.currentIcon = 0;
	
// function iconSlide
	$scope.iconSlide = function(value) {
//		alert(value);
		var locIndex = $scope.optsCarousel.curSlide;
		var locIconIx = $scope.currentIcon;
		$scope.icons[locIconIx].active = '';
	
		// Default to Stop Timer and Change Slide
		var startStop = -1;
		var newInterval = maxIntervalMSecs;
		$timeout.cancel(stopTimer);	// cancel Timer
		
		if (value < 0) {
			locIconIx = 2; // Backwards
			locIndex--; // go to previous slide, stop timer
			if (locIndex < 0) locIndex = ($scope.slides.length - 1);
		} else if (value > 0) {
			if (value < 100) {
				locIconIx = 3; // Forwards
				locIndex++; // go to next slide, stop timer
				if (locIndex > ($scope.slides.length - 1)) {
					locIndex = 0;				
				}
			} else {
				locIconIx = 0; // Play
				// Start Timer
				startStop = 1;
				newInterval = defIntervalMSecs;
			}
		} else { // value = 0
			locIconIx = 1; // Stop
			startStop = 0;
			// Stop timer
		}
		$scope.currentIcon = locIconIx;
		$scope.icons[locIconIx].active = 'active';
		$scope.gotoSlide(locIndex,newInterval);
		if (startStop !== 0) {
			changeSlide();
		} else {
			$timeout.cancel(stopTimer);	// cancel Timer
		}
	}; // end of function iconSlide

	$scope.icons =[
		{
			text: 'Play',
			active: 'active'
		},
		{
			text: 'Stop',
			active: ''
		},
		{
			text: 'Bkwd',
			active: ''
		},
		{
			text: 'Frwd',
			active: ''
		}
	];
//	for (ii=0; ii<$scope.icons.length; ii++) {
//		$scope.icons[ii].active = '';
//	}
// Icons /////////////////////////////////////////////////////////////////////	
	
	$scope.slides =[
		{
			image: $scope.appPathImg+'/preview-corrosion.jpg',
			text: 'Corrosion Mapping',
			details: 'corrosion'
		},
		{
			image: $scope.appPathImg+'/preview-mctofd.jpg',
			text: 'Heavywall Girth Welds',
			details: 'tofdmc'
		},
		{
			image: $scope.appPathImg+'/preview-rotorbore.jpg',
			text: 'Steam Turbine Rotorbores',
			details: 'turbine'
		},
		{
			image: $scope.appPathImg+'/preview-windblade.jpg',
			text: 'Wind Turbine Blades',
			details: 'blades'
		}
	];

	for (ii=0; ii<$scope.slides.length; ii++) {
		$scope.slides[ii].selected = '';
	}
	$scope.gotoSlide($scope.optsCarousel.curSlide,$scope.myInterval);

	changeSlide();

}]);