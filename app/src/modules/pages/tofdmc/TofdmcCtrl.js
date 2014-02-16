/**
*/

'use strict';

angular.module('myApp').controller('TofdmcCtrl', ['$scope',
function($scope) {
	
	$scope.tofdmcSplash =[
		{ feature: 'Multi Zone Automated TOFD Inspection, Simple and Easy' },
		{ feature: 'Windows 7 Based, High Speed 125 MHz <abbr title="Analog to Digital converter">A/D</abbr>' },
		{ feature: 'Examine Welds, Light Wall and Heavy Wall Pressure Vessels' },
		{ feature: 'Calibration Blocks and Procedures Available' },
		{ feature: 'Code Case 2235 Reporting Software' },
		{ feature: 'Nice Turn-Key Operation, Proven and Reliable' },
		{ feature: 'Transports Easily in Compact, Small Cases' }
		
	];
	$scope.tofdmcDatasystem =[
		{
			header: 'Data System',
			image: $scope.appPathImg+'/tofdmc-datasystem.jpg',
			title: '<strong>NB-2000MCx Portable Data System</strong>',
			toptext: 'The <abbr title="Automated Inspection Systems, Inc.">AIS</abbr> Heavy Wall Pressure Vessel Inspection System is based on our NB-2000 MCx multichannel Automated <abbr title="Ultrasonic Testing">UT</abbr> data acquisition technology.<p>Consisting of a full featured portable laptop powered by a high speed Windows 7 computer platform, it boosts a high performance eight-channel <abbr title="Ultrasonic Testing">UT</abbr> instrument (<abbr title="Automated Inspection Systems, Inc.">AIS</abbr> Megapulser) mounted in a portable case.</p>',
			bottomtext: 'A full featured portable laptop based data system records, images and provides code compliant analysis and report writing software',
			listtitle: '<strong>Features include:</strong>',
			lists: [{spec: '90 dB of dynamic range'},
					{spec: '"No noise" <abbr title="Distance Amplitude Correction">DAC</abbr> Curve'},
					{spec: 'Proprietary "Low Noise" power technology'},
					{spec: 'Full wave form capture'},
					{spec: 'Integrated scanner, acquisition and analysis software'},
					{spec: 'Code Case 2235 compliant Reporting Software'},
					{spec: 'Industrial and transportable enclosure'} 
					]
		}
	];
	$scope.tofdmcLogdata =[
		{
			header: 'Log Data',
			image: $scope.appPathImg+'/tofdmc-logdata.jpg',
			title: '',
			toptext: 'The NB-2000MCx also comes standard with our new UHS (Ultra High Sensitivity) TOFD technique using a log amplification technique. 90 dBs of low end sensitivity easily detects the smallest (low signal to noise) of targets while	preventing the larger (high signal to noise) targets from saturation.<p>Storing the Raw LOG fourteen bit data allows for sensitivity (gain) changes to be made on the acquired data.</p>',
			bottomtext: 'In addition, a digital band pass filter removes all low and high frequency noise. While wave form averaging further enhances the signal to noise of the low end signals providing an excellent TOFD waveform. The NB-2000MCx/RoboScanner records raw data at up to 6500 Ascans/Sec allowing for high scans speeds and wave form averaging.',
			listtitle: '',
			lists: []
		}
	];
	$scope.tofdmcZones =[
		{
			header: 'Zonal Technique',
			image: $scope.appPathImg+'/tofdmc-zones.jpg',
			title: '<strong>MCx-TOFD Zonal Technique</strong>',
			toptext: 'Examine pressure vessel welds up to 340 mm wall thickness with the MCx-TOFD zonal technique.',
			bottomtext: 'The MCx-TOFD Zonal solution uses both TOFD and Pulse Echo techniques to ensure full examination coverage. Multiple simultaneous channels allow for zonal overlap and zone to zone correlation.',
			listtitle: '',
			lists: []
		}
	];
	$scope.tofdmcCalblock =[
		{
			header: 'Heavy Wall Calibration Block',
			image: $scope.appPathImg+'/tofdmc-calblock.jpg',
			title: '<strong>Qualification Block</strong>',
			toptext: 'A typical heavy wall qualification block is shown below. Normally these blocks contain a top and bottom surface notch, and two embedded defects.',
			bottomtext: '',
			listtitle: '',
			lists: []
		}
	];
	$scope.tofdmcCaldata =[
		{
			header: 'Heavy Wall Calibration Data',
			image: $scope.appPathImg+'/tofdmc-caldata.jpg',
			title: '<strong>Zonal Qualification Block Data</strong>',
			toptext: 'Four channels of data acquired from this Calibration Block are shown below.',
			bottomtext: '',
			listtitle: '',
			lists: []
		}
	];
	$scope.tofdmcFrame =[
		{
			header: 'Automated Scanner and TOFD Frame',
			image: $scope.appPathImg+'/tofdmc-frame.jpg',
			title: '<strong>RoboScanner with Modular TOFD Frame</strong>',
			toptext: 'A heavy duty magnetic wheel motorized RoboScanner features multiple attachment points and a modular frame system. Scanner and Frame easily configure for Circumferential Welds, Long Seams, extreme Heavy Wall Welds (220 mm), and smaller diameter vessels.',
			bottomtext: '',
			listtitle: '',
			lists: []
		}
	];
	$scope.tofdmcHinge =[
		{
			header: 'RoboScanner Hinged Frame',
			image: $scope.appPathImg+'/tofdmc-hinge.jpg',
			title: '<strong>Hinged Frame Conforms to Vessel Diameter</strong>',
			toptext: 'A convenient hinge between scanner and  frame provides conformity to all diameter vessels.',
			bottomtext: '',
			listtitle: '',
			lists: []
		}
	];
	$scope.tofdmcRtdata =[
		{
			header: 'Single Pass Examination',
			image: $scope.appPathImg+'/tofdmc-rtdata.jpg',
			title: '<strong>MultiChannel RealTime Display</strong>',
			toptext: 'Circumferential and Longitudinal welds are inspected quickly and efficiently in a single pass. Imaged results are obtained and evaluated instantly.',
			bottomtext: 'Single pass exam with instant results showing channel to channel correlation',
			listtitle: '',
			lists: []
		}
	];
	$scope.tofdmcAnalysis =[
		{
			header: 'Analysis and Code Compliant Software',
			image: $scope.appPathImg+'/tofdmc-analysis.jpg',
			title: '<strong>Point and Click Analysis Software</strong>',
			toptext: 'Analysis software easily images the collected data, provides zone to zone correlation.',
			bottomtext: '',
			listtitle: '',
			lists: []
		}
	];
	$scope.tofdmcReport =[
		{
			header: 'Code Case 2235 Report Software',
			image: $scope.appPathImg+'/tofdmc-report.jpg',
			title: '<strong>Code Compliant Report Generation</strong>',
			toptext: 'Point, click, and drag features allow the analyst to locate and size indications for input into a code compliant computer generated report.',
			bottomtext: '',
			listtitle: '',
			lists: []
		}
	];
	
}]);