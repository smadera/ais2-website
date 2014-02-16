/**
*/

'use strict';

angular.module('myApp').controller('TurbineCtrl', ['$scope',
function($scope) {

	$scope.turbineSplash =[
		{ feature: 'Windows 7 Based, High Speed 125 MHz <abbr title="Analog to Digital converter">A/D</abbr>' },
		{ feature: 'Examine Bore Diameters down to 2.9 Inches' },
		{ feature: 'Calibration Blocks and Procedures Available' },
		{ feature: 'Automated Bore Inspection, Simple and Easy' },
		{ feature: 'Nice Turn-Key Operation, Proven and Reliable' },
		{ feature: 'Detect and Size Flaws Automatically' },
		{ feature: 'Optional Bore Head down to 2.0 Inch Diameter' },
		{ feature: 'It has been Qualified by <abbr title="Electric Power Research Institute">EPRI</abbr>' },
		{ feature: 'Transports Easily in Compact, Small Cases' }
	];
	$scope.turbineDatasystem =[
		{
			header: 'Data System',
			image: $scope.appPathImg+'/turbine-datasystem.jpg',
			title: '<strong>Rotorbore Data System</strong>',
			toptext: 'The <abbr title="Automated Inspection Systems, Inc.">AIS</abbr> Rotorbore Inspection System is based on our NB-2000 MCx multichannel Automated <abbr title="Ultrasonic Testing">UT</abbr> data acquisition technology.<p>Consisting of Dual Industrial Computers powered by a high speed Windows 7 computer platform, it boosts a high performance eight-channel <abbr title="Ultrasonic Testing">UT</abbr> instrument (<abbr title="Automated Inspection Systems, Inc.">AIS</abbr> Megapulser) rack mounted in a portable shipping case.</p>',
			bottomtext: '',
			listtitle: '<strong>Features include:</strong>',
			lists: [{spec: '90 dB of dynamic range'},
					{spec: '"No noise" <abbr title="Distance Amplitude Correction">DAC</abbr> Curve'},
					{spec: 'Proprietary "Low Noise" power technology'},
					{spec: 'Full wave form capture'},
					{spec: 'Integrated scanner, acquisition and analysis software'},
					{spec: 'Separate Analysis Computer'},
					{spec: 'Industrial and transportable enclosure'} 
					]
		}
	];
	$scope.turbineSledscanner =[
		{
			header: 'Sled Scanner',
			image: $scope.appPathImg+'/turbine-sledscanner.jpg',
			title: '<strong>Rotorbore Sled Scanner</strong>',
			toptext: 'The scanning device features a small, light weight and compact sled scanner.',
			bottomtext: '',
			listtitle: '<strong>Features include:</strong>',
			lists: [{spec: 'Dual axis, automated scanner'},
					{spec: 'Clamps to the bore flange'},
					{spec: 'Integrated Calibration block holder'},
					{spec: 'Nine torque (extension) tubes'}
					]
		}
	];
	$scope.turbineScanhead =[
		{
			header: 'Scan Head',
			image: $scope.appPathImg+'/turbine-scanhead.jpg',
			title: '<strong>Rotorbore Scan Head</strong>',
			toptext: 'An air actuated scan head articulates three independent spring loaded forks radially for bore sizes between 2.9 and 10 inch diameters. Each fork can hold up to two transducer wedges for a total of six sensors.<p>The six transducers can be any combination of:</p>',
			bottomtext: '',
			listtitle: '',
			lists: [{spec: 'Circumferential looking radial shear waves'},
					{spec: 'Forward and aft axial shear waves'},
					{spec: 'Near and far straight beam probes'},
					{spec: 'Eddy current surface probe'}
					]
		}
	];
	$scope.turbineBottlebore =[
		{
			header: 'Bottle Bore Compliant',
			image: $scope.appPathImg+'/turbine-bottlebore.jpg',
			title: '<strong>Bottle Bore Compliant</strong>',
			toptext: 'The scan head\'s small and compact articulating design allows for inspection of most bottle bores.',
			bottomtext: '',
			listtitle: '',
			lists: []
		}
	];
	$scope.turbineSmallhead =[
		{
			header: 'Small Bore Scan Head',
			image: $scope.appPathImg+'/turbine-smallhead.jpg',
			title: '<strong>Small Bore Scan Head</strong>',
			toptext: '<abbr title="Automated Inspection Systems, Inc.">AIS</abbr> offers an optional miniature scan head for small bore diameters down to 2 inches.',
			bottomtext: '',
			listtitle: '<strong>Features include:</strong>',
			lists: [{spec: 'Pneumatic head'},
					{spec: 'Two independent articulating forks'},
					{spec: 'Scans with two transducers'},
					{spec: 'Bottle bore compliant'},
					{spec: 'For 3 inch down to 2 inch bore diameters'}
					]
		}
	];
	$scope.turbineCalblock =[
		{
			header: 'Calibration Block',
			image: $scope.appPathImg+'/turbine-calblock.jpg',
			title: '<strong>Calibration Standard</strong>',
			toptext: 'The rotorbore scan sled has an integrated calibration block holder allowing for calibration on multiple bore diameters without having to dismount the scanner from the bore. This makes scanning bores with bottles and multiple bore diameters simple and efficient.',
			bottomtext: '',
			listtitle: '',
			lists: []
		}
	];
	$scope.turbineCallegacy =[
		{
			header: 'Legacy Cal Blocks',
			image: $scope.appPathImg+'/turbine-legacy.jpg',
			title: '<strong>Scanner Dimensions for Legacy Cal Blocks</strong>',
			toptext: 'The <abbr title="Automated Inspection Systems, Inc.">AIS</abbr> rotorbore system can be used with legacy calibration blocks customers might already have.',
			bottomtext: '',
			listtitle: '',
			lists: []
		}
	];
	$scope.turbineDataacq =[
		{
			header: 'Data Acquisition',
			image: $scope.appPathImg+'/turbine-rtdisplay.jpg',
			title: '<strong>Real Time Data Display</strong>',
			toptext: 'Data is recorded from the following types of channels:',
			bottomtext: 'A-scans from all channels are displayed in real time allowing the operator to perform  cursory analysis and a check of data quality.',
			listtitle: '',
			lists: [{spec: '<abbr title="ClockWise">CW</abbr> and <abbr title="Counter ClockWise">CCW</abbr> circumferential shear wave'},
					{spec: 'Forward and Aft axial looking shear wave'},
					{spec: 'Straight beam, near field and far field'},
					{spec: 'Eddy current surface probe (optional)'}
					]
		}
	];
	$scope.turbineDataanal =[
		{
			header: 'Data Analysis',
			image: $scope.appPathImg+'/turbine-correctedsps.jpg',
			title: '<strong>Geometrically Correct Cscan, Bscans, Ascans</strong>',
			toptext: 'Data analysis software is application specific for inspecting turbine rotorbores. All standard display types, A-scan, B-scan, C-scan, D-scan, B\'-scan, stacked A-scans, are provided.<p>The display software links all views providing a powerful analysis tool. All positional information is corrected for the curvature of the rotor, and the B-scan is mapped in the circular shape of the rotor cross-section for accurate visual representation.</p>',
			bottomtext: '',
			listtitle: '',
			lists: []
		}
	];
	$scope.turbineDataalgo =[
		{
			header: 'Flaw Proximity Algorithm',
			image: $scope.appPathImg+'/turbine-processedsp.jpg',
			title: '<strong>Processed Calibration Block Data</strong><p><strong>Showing Results of FPA (DeWorming)</strong></p>',
			toptext: 'The analysis software relies on an advanced signal processing "Flaw Proximity Algorithm" (FPA) to analyze the rotorbore data. The <abbr title="Flaw Proximity Algorithm">FPA</abbr> looks at unique and inherent wave form characteristics and uses a moving window detector to evaluate Ascans collectively.<p>These characteristics include:</p>',
			bottomtext: 'The results of the <abbr title="Flaw Proximity Algorithm">FPA</abbr> will automatically detect and link targets of significance and interest. The software then images these targets in Bore corrected coordinates for clarity. Targets are then reviewed by the operator and either accepted or rejected.',
			listtitle: '',
			lists: [{spec: 'Standing Wave Filter'},
					{spec: 'Target Motion (how the target walks along the Ascan display, i.e. rises and falls)'},
					{spec: 'Signal to Noise Ratio (SNR)'},
					{spec: 'Nearest Neighbor (DeWorming) Filter'}
					]
		}
	];
	$scope.turbineDatatable =[
		{
			header: 'Fracture Mechanics',
			image: $scope.appPathImg+'/turbine-analysis.jpg',
			title: '<strong>Numerical Analysis Formats</strong>',
			toptext: 'Accepted targets are summarized in a separate file for input into a fracture mechanics analysis program. These programs will combine the history of the rotor, the size-shape-and-stage geometry, along with the results from the <abbr title="Ultrasonic Testing">UT</abbr> to determine life-assessement and remaining serviceability.<p>The <abbr title="Flaw Proximity Algorithm">FPA</abbr> targets are formatted in two widely accepted industry standards:</p>',
			bottomtext: '',
			listtitle: '',
			lists: [{spec: 'SAFER'},
					{spec: 'WEROLE (Westinghouse /  Siemens)'}
					]
		}
	];
	$scope.turbineEddycurr =[
		{
			header: 'Eddy Current Surface Examination',
			image: $scope.appPathImg+'/turbine-eddycurrent.jpg',
			title: '<strong>Eddy Current Cscan Correlates with <abbr title="Ultrasonic Testing">UT</abbr> data</strong>',
			toptext: 'The rotorbore system also allows for a supplementary surface examination using an Eddy Current probe to correlate with the <abbr title="Ultrasonic Testing">UT</abbr> information.<p>The Eddy Current option requires a separate customer supplied instrument with an analog output and can be utilized in one of the following three manners:</p>',
			bottomtext: 'A-scans from all channels are displayed in real time allowing the operator to perform  cursory analysis and a check of data quality.',
			listtitle: '',
			lists: [{spec: 'One phase of the <abbr title="Eddy current Testing">ET</abbr> channel can be recorded with the <abbr title="Ultrasonic Testing">UT</abbr> data'},
					{spec: 'A separate <abbr title="Eddy current Testing">ET</abbr> instrument can record the <abbr title="Eddy current Testing">ET</abbr> data based on the axial and circumferential encoder outputs from the sled scanner'},
					{spec: 'A combination of both 1 and 2 above can be performed'}
					]
		}
	];
	$scope.turbineEddyfsut =[
		{
			header: 'Surface Breaking Defects',
			image: $scope.appPathImg+'/turbine-fsutdata.jpg',
			title: '<strong>Surface Targets as Seen with UT</strong>',
			toptext: 'The eddy current examination is normally performed in lieu of a magnetic particle surface examination. Concurrently, the eddy current examination can augment the <abbr title="Ultrasonic Testing">UT</abbr> which is also sensitive to surface breaking defects.',
			bottomtext: '',
			listtitle: '',
			lists: []
		}
	];
	$scope.turbineComport =[
		{
			header: 'Compact and Portable',
			image: $scope.appPathImg+'/turbine-knaackbox.jpg',
			title: '<strong>Industrial Knaack Box Container</strong>',
			toptext: 'The rotorbore system is designed to be easily transported from jobsite to jobsite and / or stored between uses. The system is packaged in two transportable and reusable containers:',
			bottomtext: '',
			listtitle: '',
			lists: [{spec: 'Knaack Box: 72 x 24 x 24 inches'},
					{spec: 'Industrial Computer Rack: 28 x 28 x 22 inches'}
					]
		}
	];
	
}]);