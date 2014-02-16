/**
*/

'use strict';

angular.module('myApp').controller('VideosCtrl', ['$scope','$location','$anchorScroll',
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

//	<!--
//		goto yuotube video then figure out how to embed youtube player
//		src="http://www.youtube.com/v/GrgI851qyKA&color1=0xb1b1b1&color2=0xcfcfcf&hl=en_US&feature=player_detailpage&fs=1"
//		?rel=0&fs=0 sets 2 youtube parameters (? for 1st parm then & to seperate additional parms
//			rel=0 turns off feature to show related videos when video ends
//			fs=0 disables full screen button
//			modestbranding=1 removes YouTube logo
//			for a list of valid parameters go to: https://developers.google.com/youtube/player_parameters
//	-->
	
	var utubeUrl = 'http://www.youtube.com';
	var utubeOpts = '?rel=0&fs=0&modestbranding=1';

	$scope.videos =[
		{
			index: 'video8',
			title: 'Pipe Corrosion Mapping Internal and External',
			picture: utubeUrl + '/v/bgmoCFh-kyQ' + utubeOpts,
			image: $scope.appPathImg + '/video8.jpg'
		},
		{
			index: 'video9',
			title: 'LASER Profilometry for OD Corrosion',
			picture: utubeUrl + '/v/GneX3r_R-dU' + utubeOpts,
			image: $scope.appPathImg + '/video9.jpg'
		},
		{
			index: 'video1',
			title: 'RoboScanner',
			picture: utubeUrl + '/v/GrgI851qyKA' + utubeOpts,
			image: $scope.appPathImg + '/video1.jpg'
		},
		{
			index: 'video2',
			title: 'RoboScanner Pipeline Dig Up Application',
			picture: utubeUrl + '/v/2IIg4VHD-3k' + utubeOpts,
			image: $scope.appPathImg + '/video2.jpg'
		},
		{
			index: 'video3',
			title: 'Wind Turbine Blade Bond Line Inspection',
			picture: utubeUrl + '/v/hrZ7j_6VVoQ' + utubeOpts,
			image: $scope.appPathImg + '/video3.jpg'
		},
		{
			index: 'video4',
			title: 'PipeRig3 Pipeline Girthweld Inspection',
			picture: utubeUrl + '/v/_oAgMZti3K0' + utubeOpts,
			image: $scope.appPathImg + '/video4.jpg'
		},
		{
			index: 'video5',
			title: 'MCx-TOFD for Heavywall Pressure Vessels',
			picture: utubeUrl + '/v/fOynJUtmWDg' + utubeOpts,
			image: $scope.appPathImg + '/video5.jpg'
		},
		{
			index: 'video6',
			title: 'Corrosion Mapping - Pressure Vessels and Tankwalls',
			picture: utubeUrl + '/v/OplbueoiEnE' + utubeOpts,
			image: $scope.appPathImg + '/video6.jpg'
		},
		{
			index: 'video7',
			title: 'Turbine Rotorbore Inspection',
			picture: utubeUrl + '/v/5zwM2eutrus' + utubeOpts,
			image: $scope.appPathImg + '/video7.jpg'
		}
	];
	
}]);