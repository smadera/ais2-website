/**
*/

'use strict';

angular.module('myApp').controller('BladesCtrl', ['$scope',
function($scope) {
	
	$scope.bladesSplash =[
		{ feature: 'Blade Inspection, Simple, Easy and Fast' },
		{ feature: 'Windows 7 Based, High Speed 125 MHz <abbr title="Analog to Digital converter">A/D</abbr>' },
		{ feature: 'Integrated Analysis and Reporting Software' },
		{ feature: 'Nice Turn-Key Operation, Proven and Reliable' }
	];
	$scope.bladesReqs =[
		{
			header: 'High Speed High Resolution Scanning',
			image: $scope.appPathImg+'/video3.jpg',
			title: '<strong>Scan Large Blades</strong>',
			toptext: 'High resolution Blade Inspection requires large amounts of data to be collected, stored, and imaged.<p>The examination requries a high speed raster scanner capable of covering large areas quickly. It also requires a fast data system collecting raw Ascans and high throughput rates.</p>',
			bottomtext: 'Typical raster scan speeds range upwards of 25"/sec while acquiring waveforms every 0.02" of travel. Typical scan indexes range from 0.1" to 0.25". Indexing at 0.1" is common.',
			listtitle: '',
			lists: []
		}
	];
	$scope.bladesDatasystem =[
		{
			header: 'Data System',
			image: $scope.appPathImg+'/turbine-datasystem.jpg',
			title: '<strong>Blade Data System</strong>',
			toptext: 'For extremely high speed and high scanning resolution the RoboScanner interfaces directly with the <abbr title="Automated Inspection Systems, Inc.">AIS</abbr> NB-2000 Plus data system.<p>Raw data wave forms are collected, permanently stored, and imaged. Data from multiple channels can be correlated, overlaid, and stitched together creating very large images.</p>Analysis algorithms are standard software features.</p>',
			bottomtext: 'A full featured portable laptop based data system records, images and provides analysis and report writing software',
			listtitle: '<strong>Features include:</strong>',
			lists: [{spec: '90 dB of dynamic range'},
					{spec: '"No noise" <abbr title="Distance Amplitude Correction">DAC</abbr> Curve'},
					{spec: 'Proprietary "Low Noise" power technology'},
					{spec: 'Full wave form capture'},
					{spec: 'Integrated scanner, acquisition and analysis software'},
					{spec: 'Industrial and transportable enclosure'} 
					]
		}
	];
	
}]);