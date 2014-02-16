/**
*/

'use strict';

angular.module('myApp').controller('ManualScannersCtrl', ['$scope','$location','$anchorScroll',
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

	$scope.manualscanners =[
		{
			index: 'manscan1',
			title: 'Manual Mag XY',
			image: $scope.appPathImg+'/magxyscn.gif',
			text: 'The <abbr title="Automated Inspection Systems, Inc.">AIS</abbr> manual magnetic wheel scanner is small, compact, and has two encoded axis. It scans components of up to three inches in diameter. This can be used for angle beam raster scanning (weld examination) and straight beam examination (corrosion mapping).',
			features: [	{spec: 'Dual axis manual scanner'},
						{spec: 'Magnetic wheels'},
						{spec: 'Compliant transducer holder for scanning uneven surfaces'},
						{spec: 'Scans flat plate to small diameter pipe optional 200-foot cable'},
						{spec: 'Small and compact design'},
						{spec: 'Economical and field proven'} ],
			total: '6'
		},
		{
			index: 'manscan2',
			title: 'Manual TOFD Scanner',
			image: $scope.appPathImg+'/tofdscan.jpg',
			text: 'The <abbr title="Automated Inspection Systems, Inc.">AIS</abbr> Manual TOFD Scanner is a single axis scanner designed for your TOFD applications. With the NB-2000MC, acquire your TOFD data with two opposing channels of Pulse Echo data, allowing better coverage of the back surface zone. This scanner comes with either hardened rubber wheels and magnetic wheels, and plugs directly into the NB-2000 and the NB-2000MC.',
			features: [	{spec: 'Manually driven'},
						{spec: 'Single axis'},
						{spec: 'Adjustable transducer slides for varying thicknesses'},
						{spec: 'Compliant gimbal for scanning uneven surfaces'},
						{spec: 'Optional magnetic wheels'},
						{spec: 'Adapts to a wide range of pipe sizes'},
						{spec: 'Economical and field proven'} ],
			total: '7'
		},
		{
			index: 'manscan3',
			title: 'Manual Pipe Scanner',
			image: $scope.appPathImg+'/manual_pipe.jpg',
			text: 'The <abbr title="Automated Inspection Systems, Inc.">AIS</abbr> Manual Pipe Scanner is a dual axis scanner with a unique and simple clamp-on design. This is used primarily for small to medium diameter nonferrous pipes for corrosion mapping and angle beam weld examination. It can be plugged directly into the NB-2000 and NB-2000MC.',
			features: [	{spec: 'Simple to use and ruggedized'},
						{spec: 'Quick change clamps for varying pipe sizes'},
						{spec: 'Encoders on each axis'},
						{spec: 'Detents on each axis'},
						{spec: 'Raster scan or random walk'},
						{spec: 'Sure fitting metal screw lock connectors'} ],
			total: '6'
		},
		{
			index: 'manscan4',
			title: 'Mouse Scanner',
			image: $scope.appPathImg+'/mouse.jpg',
			text: 'The <abbr title="Automated Inspection Systems, Inc.">AIS</abbr> Manual Mouse Scanner is a single axis scanner that encodes any handheld transducer. Take a line scan, monitor corrosion, or scan an entire set of boiler tubes. This tiny scanner tackles the large jobs.',
			features: [	{spec: 'Handheld ergonomic design'},
						{spec: 'Adapts to standard wedges and transducers'},
						{spec: 'Handles straight or angle beam transducers'},
						{spec: 'Encoded axis for pulse on position'},
						{spec: 'Transducer aims parallel or perpendicular to encoded axis'},
						{spec: 'Acquire single line scans or build C scans'},
						{spec: 'Simple, intelligent, and affordable'} ],
			total: '7'
		},
		{
			index: 'manscan5',
			title: 'Nozzle Scanner',
			image: $scope.appPathImg+'/nozzle.jpg',
			text: 'The <abbr title="Automated Inspection Systems, Inc.">AIS</abbr> Nozzle Scanner is a manual dual axis magnetic wheel scanner designed specifically to handle the complex geometry of most vessel nozzles. Inspection of your nozzle using encoded <abbr title="Ultrasonic Testing">UT</abbr> ensures full coverage with repeatable and accurate results. Analysis software corrects and overlays part geometry over the recorded data, simplifying the data review and removing the complexity of a complex component.',
			features: [	{spec: 'Manually driven'},
						{spec: 'Dual axis position output'},
						{spec: 'Compliant gimbal for scanning uneven surfaces'},
						{spec: 'Magnetic wheels'},
						{spec: 'Fits 4" and larger nozzles'},
						{spec: 'Economical and field proven'} ],
			total: '6'
		}
	];
	
}]);