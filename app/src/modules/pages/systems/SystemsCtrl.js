/**
*/

'use strict';

angular.module('myApp').controller('SystemsCtrl', ['$scope','$location','$anchorScroll',
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

	$scope.aisystems =[
		{
			index: 'aisystem1',
			title: 'NB2000 Plus',
			image: $scope.appPathImg+'/corrosion-datasystem.jpg',
			text: 'A complete and compact automated <abbr title="Ultrasonic Testing">UT</abbr> data system, the NB-2000 Plus can handle Pulse Echo, TOFD or Thru Transmission techniques packaged in a small portable ruggedized carrying case. A laptop based Windows computer allows for acquired data to be analyzed and multiple channels correlated immediately and simultaneously using our advanced Viewdata analysis software featuring Cscans, Bscans, End Views, Raw Data, Wave Form displays, TOFD analysis and automated report generation. The 125MHz PCI digitizer ensures high resolution and high speed wave form recording. Pulse on position by Interfacing to both motorized and manual scanners. Typical applications include - corrosion mapping, squirter systems, immersion tanks and composites. Whether you are in the Aerospace, Power Generation, Petrochemical, Industrial, Construction, or inspection industry, the NB-2000 Plus will save you time and money, as well as produce reliable results. With images that are easy to interpret and understand, NB-2000 Plus will meet all your quality assurance needs.',
			features: [	{spec: 'Full featured Windows laptop UT data system'},
						{spec: '125 MHz PCI A/D for high resolution and high speed wave form recording'},
						{spec: 'Seperate Pulser and Receiver to handle Pitch - Catch technique'},
						{spec: '12 C-scan gates, amplitude and Time of Flight for each'},
						{spec: 'Full waveform capture of Raw LOG data'},
						{spec: 'Coordinated A-scan, B-scan, and C-scan displays'},
						{spec: 'Angle beam corrected display and analysis'},
						{spec: 'Weld profile and part geometry overlays'},
						{spec: 'Supports Time of Flight (TOFD) techniques'},
						{spec: 'Transducer characterization'},
						{spec: 'Supports your transducers'},
						{spec: '90 Db of dynamic range'},					
						{spec: 'Report generation'} ],
			total: '13'
		},
		{
			index: 'aisystem2',
			title: 'NB2000 MCx',
			image: $scope.appPathImg+'/system-nb2000mcx.jpg',
			text: 'A complete and compact automated <abbr title="Ultrasonic Testing">UT</abbr> data system, the NB-2000MCx comes standard with 8 or 16 data channels in a small portable ruggedized carrying case. A laptop based Windows computer allows for acquired data to be analyzed and multiple channels correlated immediately and simultaneously using our advanced Viewdata analysis software featuring Cscans, Bscans, End Views, Raw Data, Wave Form displays, TOFD analysis and automated report generation. The 125MHz PCI digitizer ensures high resolution and high speed wave form recording. Examine with any combination of your highest and lowest frequency transducers. Pulse on position by Interfacing to both motorized and manual scanners. Techniques include - thin wall TOFD, heavy wall TOFD, angle beam weld examination, straight beam, and combined techniques such as TOFD with conventional pulse echo. Typical applications include - heavy wall pressure vessel weld examination up to 16" wall thickness, pipe weld examination, thin wall vessels and pipes, corrosion mapping, long seam examinations, gas spheres, squirter systems, immersion tanks, and cross country pipe line girth weld inspection. Whether you are in the Power Generation, Petrochemical, Industrial, Construction, Aerospace or inspection industry, the NB-2000MCx will save you time and money, as well as produce reliable results. With images that are easy to interpret and understand, NB-2000MCx will meet all your quality assurance needs.',
			features: [	{spec: 'Portable 8 or 16 channel full featured Windows laptop UT data system'},
						{spec: '125 MHz PCI A/D for high resolution and high speed wave form recording'},
						{spec: 'MCx-Multichannel TOFD technique for heavy wall (up to 16") using combined TOFD and pulse echo channels'},
						{spec: '12 C-scan gates, amplitude and Time of Flight for each'},
						{spec: 'Full waveform capture of Raw LOG data'},
						{spec: 'Coordinated A-scan, B-scan, and C-scan displays'},
						{spec: 'Angle beam corrected display and analysis'},
						{spec: 'Weld profile and part geometry overlays'},
						{spec: 'Supports Time of Flight (TOFD) techniques'},
						{spec: 'Transducer characterization'},
						{spec: 'Supports your transducers'},
						{spec: '8 or 16 Pulsers/Receivers with 90 Db of dynamic range'},					
						{spec: 'Report generation'} ],
			total: '13'
		},
		{
			index: 'aisystem3',
			title: 'Millenium',
			image: $scope.appPathImg+'/system-millenium.gif',
			text: 'The Millennium <abbr title="Automated Ultrasonic Testing">AUT</abbr> system provides an industrial solution for your factory and application needs. It can be configured to 8, 16, 24, 36, or 48 <abbr title="Ultrasonic Testing">UT</abbr> channels. Shock-mounted in an industrial enclosure, this <abbr title="Automated Ultrasonic Testing">AUT</abbr> system fits your factory floor, inside an SUV, or anywhere on an ocean barge. In addition to being interfaced with your factory scanner or gantry, all <abbr title="Automated Inspection Systems, Inc.">AIS</abbr> motorized and manual scanners are plug compatible and packaged ready-to-go.',
			features: [	{spec: 'Industrial shock absorbing enclosure for factory or field use'},
						{spec: 'Configurable for up to 48 channels'},
						{spec: '125 MHz PCI A/D for high resolution and high speed wave form recording'},
						{spec: 'MCx-Multichannel TOFD technique for heavy wall (up to 16") using combined TOFD and pulse echo channels'},
						{spec: '12 C-scan gates, amplitude and Time of Flight for each'},
						{spec: 'Full waveform capture of Raw LOG data'},
						{spec: 'Coordinated A-scan, B-scan, and C-scan displays'},
						{spec: 'Angle beam corrected display and analysis'},
						{spec: 'Weld profile and part geometry overlays'},
						{spec: 'Supports Time of Flight (TOFD) techniques'},
						{spec: 'Transducer characterization'},
						{spec: 'Supports your transducers'},
						{spec: '8 or 16 Pulsesr/Receivers with 90 Db of dynamic range'},					
						{spec: 'Report generation'} ],
			total: '14'
		},
		{
			index: 'aisystem4',
			title: 'PipeRig3',
			image: $scope.appPathImg+'/system-piperig3.jpg',
			text: 'Ultrasonic Pipeline Girthweld Inspection suited for cross country main lines, tie ins, offshore pipe laying, and spool yards. This complete turnkey product includes data system with embedded scan controller, pipe scanner, transducer frame, umbilical, couplant pump, scribe line marker, and band tools. A powerful 125 MHz A/D combines high resolution TOFD with pulse echo zonal techniques to examine both manual (SMAW) and automated (GMAW) welds. Analysis software sizes and reports in accordance with API code. Battery operated.',
			features: [	{spec: 'Portable 24 channel full featured Windows laptop UT data system'},
						{spec: 'Any combination of TOFD, Pulse Echo, Tandem, Volumetric, and Transverse Channels'},
						{spec: 'Cables and Umbilical are designed to withstand affects of fatigue cycling'},
						{spec: 'Light weight scanner is easier on scanner operator'},
						{spec: 'Light weight minimizes wear to drive wheel and roller bearings'},
						{spec: 'Low profile scan head clears 8" gap between pipe and ground'},
						{spec: 'Light weight scanner limits wear to pipe band and walking of the band'},
						{spec: 'Couplant system is only on when wter flows limiting pump wear'},
						{spec: 'Battery operation eliminates need for converters, generators, and/or inverters'},
						{spec: 'System is transportable in 3 reusable shipping containers'} ],
			total: '10'
		}
	];

}]);