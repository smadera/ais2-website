/**
*/

'use strict';

angular.module('myApp').controller('AutoScannersCtrl', ['$scope','$location','$anchorScroll',
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
	
	$scope.autoscanners =[
		{
			index: 'autoscan1',
			title: 'RoboScanner',
			image: $scope.appPathImg+'/corrosion-roboscanner.jpg',
			text: 'The <abbr title="Automated Inspection Systems, Inc.">AIS</abbr> RoboScanner is a dual axis magnetic wheel crawler that is compact and versatile. Sporting an onboard controller and user interface, the RoboScanner easily connects to any conventional and/or phased array <abbr title="Ultrasonic Testing">UT</abbr> data system without the need of a <abbr title="Personal Computer">PC</abbr> or laptop computer. Its versatile design will scan 2" diameter pipes up to large tanks and vessels. Perform high speed and high resolution corrosion mapping using the new airless bubbler technology. With full wave form recording every 0.02", large area Cscans can be acquired at rates up to 120" square inches per minute, fast, reliably, and efficiently. Attach any pair of Tofd probes and/or phased array transducers to the RoboScanner arm and instantly transform cumbersome manual scanner weld examinations to fully automated inspections. The RoboScanner is plug compatible with all conventional <abbr title="Automated Ultrasonic Testing">AUT</abbr> data systems. And this little scanner goes were you go. No matter how remote the inspection component, with the flick of a switch, the RoboScanner switches from AC power to car battery operation.',
			features: [	{spec: 'Compatible with conventional UT data systems'},
						{spec: 'Onboard controller and user interface (PC not required)'},
						{spec: 'Scan 2" diameter pipe up to large vessels and tanks'},
						{spec: 'High speed large area corrosion mapping (120+ Square Inches / Minute)'},
						{spec: 'Compatible with Tofd and/or phased array probes for weld examination'},
						{spec: 'Car battery operation and/or 110/220v AC'},
						{spec: 'Corrosion mapping, 120+ Square Inches / Minute (Dual Axis Raster Scan)'} ],
			total: '7'
		},
		{
			index: 'autoscan2',
			title: 'RoboFrame',
			image: $scope.appPathImg+'/roboframe.jpg',
			text: 'The <abbr title="Automated Inspection Systems, Inc.">AIS</abbr> RoboFrame is a dual axis frame scanner that is light weight, compact and versatile. Sporting an onboard controller and user interface, the RoboFrame easily connects to any conventional and/or phased array <abbr title="Ultrasonic Testing">UT</abbr> data system without the need of a <abbr title="Personal Computer">PC</abbr> or laptop computer. This versatile design is used for large tanks, vessels, aircraft parts, and immersion tanks. Perform high speed and high resolution scanning up to scan speeds of 30"/sec with scan and index resolution down to 0.01". Scanner attachment options include suction cups, vacuum cups, or fixed feet for factory and immersion applications. Raster Arm scans 22.5". Index dimension is variable per customer needs.',
			features: [	{spec: 'Works with the AIS NB-2000 Plus and NB-2000MCx UT data systems'},
						{spec: 'Compatible with conventional and phased array UT data systems'},
						{spec: 'Onboard controller and user interface, PC not required'},
						{spec: 'Attachment options: Suction cups, vacuum cups, or fixed feet'},
						{spec: 'For industrial, aerospace, and factory applications'},
						{spec: 'Compatible with many existing immersion tanks'} ],
			total: '6'
		},
		{
			index: 'autoscan3',
			title: 'RoboPipe',
			image: $scope.appPathImg+'/corrosion-robopipe.jpg',
			text: 'The <abbr title="Automated Inspection Systems, Inc.">AIS</abbr> RoboPipe Scanner is a dual axis scanner that crawls down the inside of Pipes scanning circumferentially while acquiring high resolution corrosion data. Typical ID pipe diameters range from 5"-8", 10"-16", and 18"-22".',
			features: [	{spec: 'Works with the AIS NB-2000 Plus and NB-2000MCx UT data systems'},
						{spec: 'True centering device'},
						{spec: 'Fits a variety of Pipe Diameters'},
						{spec: 'Dual Axis automated Scanner'},
						{spec: 'All wheel Axial Drive'},
						{spec: 'DC Servo motors'},
						{spec: 'Circumferential Scanning'} ],
			total: '7'
		}
	];
	
}]);