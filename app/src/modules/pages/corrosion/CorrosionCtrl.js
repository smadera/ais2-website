/**
*/

'use strict';

angular.module('myApp').controller('CorrosionCtrl', ['$scope',
function($scope) {
	
	$scope.corrosionSplash =[
		{ feature: 'Corrosion Mapping, Simple and Easy' },
		{ feature: 'Windows 7 Based, High Speed 125 MHz <abbr title="Analog to Digital converter">A/D</abbr>' },
		{ feature: 'Examine Plates, Pipes, Vessels and Tanks' },
		{ feature: 'Airless Bubblers and Transducers Available' },
		{ feature: 'Integrated Reporting Software' },
		{ feature: 'Nice Turn-Key Operation, Proven and Reliable' },
		{ feature: 'Transports Easily in Compact, Small Cases' }
	];
	$scope.corrosionLargearea =[
		{
			header: 'High Speed High Resolution Scanning',
			image: $scope.appPathImg+'/corrosion-largearea.jpg',
			title: '<strong>Large Area Cscan</strong>',
			toptext: 'High resolution Cscan corrosion mapping is likely the most intensive AUT examination in regards to speeds at which large amounts of data are collected, stored, and imaged.<p>The examination requries a high speed raster scanner capable of covering large areas quickly. It also requires a fast data system collecting raw Ascans and high throughput rates.</p>',
			bottomtext: 'Typical raster scan speeds range upwards of 25"/sec while acquiring waveforms every 0.02" of travel. Typical scan indexes range from 0.1" to 0.25". Indexing at 0.1" is common. This type of scanning is commonly referred to as a "Large Area Cscan".',
			listtitle: '',
			lists: []
		}
	];
	$scope.corrosionRoboscanner =[
		{
			header: 'RoboScanner',
			image: $scope.appPathImg+'/corrosion-roboscanner.jpg',
			title: '<strong>RoboScanner</strong>',
			toptext: 'Large area Cscans require an automated scanner of which there are two basic types. The more common is one capable of scanning OD surfaces (pipes, vessels, tank walls). The other scanner type is one capable of scanning ID surfaces typically by crawling on the inside surfaces of pipes.<p>The RoboScanner is an example of the more common OD scanner.</p>',
			bottomtext: '',
			listtitle: '',
			lists: []
		}
	];
	$scope.corrosionConfigurations =[
		{
			header: 'RoboScanner Configurations',
			image: $scope.appPathImg+'/corrosion-configuration.jpg',
			title: '<strong>RoboScanner Configurations</strong>',
			toptext: 'The RoboScanner is an industrial dual axis magnetic wheel scanner designed for Automated <abbr title="Ultrasonic Testing">UT</abbr> applications. Attached to the RoboScanner\'s magnetic wheel carriage is a high speed hinged raster arm.<p>This design allows easy adaptation for a variety of AUT solutions.</p>',
			bottomtext: '',
			listtitle: '',
			lists: []
		}
	];
	$scope.corrosionLongarm =[
		{
			header: 'RoboScanner Long Arm',
			image: $scope.appPathImg+'/corrosion-longarm.jpg',
			title: '<strong>RoboScanner 22" Raster Arm</strong>',
			toptext: 'The RoboScanner comes standard with an 11" chain driven Raster Arm. AIS also provides a longer  22" arm.',
			bottomtext: '',
			listtitle: '',
			lists: []
		}
	];
	$scope.corrosionRobopipe =[
		{
			header: 'RoboPipe Crawler',
			image: $scope.appPathImg+'/corrosion-robopipe.jpg',
			title: '<strong>RoboPipe Crawler (Shown in 5" ID Pipe)</strong>',
			toptext: 'For scanning ID surfaces, Automated Inspection Systems provides a RoboPipe Crawler.  The RoboPipe Crawler features a true centering device, axial all wheel drive, and circumferential scanning. Typical ID pipe diameters range from 5"-8", 10"-16", and 18"-22".',
			bottomtext: '',
			listtitle: '',
			lists: []
		}
	];
	$scope.corrosionDatasystem =[
		{
			header: 'Data System',
			image: $scope.appPathImg+'/corrosion-datasystem.jpg',
			title: '<strong>NB-2000 Plus Data System</strong>',
			toptext: 'For extremely high speed and high scanning resolution the RoboScanner interfaces directly with the <abbr title="Automated Inspection Systems, Inc.">AIS</abbr> NB-2000Mcx and NB-2000 Plus data systems.<p>These data systems are used to perform a variety of industrial inspection applications - Corrosion Mapping, Weld Examination, Advanced TOFD Techniques.</p><abbr title="Automated Inspection Systems, Inc.">AIS</abbr> data systems provide a comprehensive analysis package suitable for all applications.</p><p>Raw data wave forms are collected, permanently stored, and imaged. Data from multiple channels can be correlated, overlaid, and stitched together creating very large images.</p>Analysis algorithms are standard software features.</p>',
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
	$scope.corrosionDucer =[
		{
			header: 'Straight Beam Transducer',
			image: $scope.appPathImg+'/corrosion-ducer.jpg',
			title: '<strong>Standard Dual Straight Beam</strong>',
			toptext: 'Conventional off the shelf straight beam transducers interface directly to the RoboScanner. For most applications <abbr title="Automated Inspection Systems, Inc.">AIS</abbr> provides a dual angle straight beam transducer in a 1"x1" stainless housing.<p>This housing provides wear resistance when scanning large areas at high speeds.</p>',
			bottomtext: '',
			listtitle: '',
			lists: []
		}
	];
	$scope.corrosionBubbler =[
		{
			header: 'Airless Bubbler',
			image: $scope.appPathImg+'/corrosion-bubbler.jpg',
			title: '<strong>Airless Bubbler</strong>',
			toptext: 'For smaller diameters and/or rougher surfaces, <abbr title="Automated Inspection Systems, Inc.">AIS</abbr> provides a unique "Airless Bubbler" which utilizes a small water column based contact immersion technique.<p>The bubbler uses standard off the shelf quick change single element transducers from a variety of manufacturers.</p>',
			bottomtext: 'The "Airless Bubbler" addresses curvature and coupling issues.',
			listtitle: '<strong>Features include:</strong>',
			lists: [{spec: 'Compensates for the curvature of the scanning surface'},
					{spec: 'Uses a column of water to ensure reliable coupling'},
					{spec: 'Vents any air or bubbles which would otherwise interfere with the ultrasonic signal'},
					{spec: 'The design uses conventional off the shelf, commonly used quick change transducers'},
					{spec: 'Well suited for ID Pipe scanning'},
					{spec: 'The "Airless Bubbler" is economical'} 
					]
		}
	];
	$scope.corrosionDataanal =[
		{
			header: 'Data Analysis Software',
			image: $scope.appPathImg+'/corrosion-analysis.jpg',
			title: '<strong>Cscan with Varying Indications</strong>',
			toptext: 'The <abbr title="Automated Inspection Systems, Inc.">AIS</abbr> NB-2000 data system features a complete data analysis package. In addition to standard correlated Cscan, Bscan, End View, Ascan, and Raw data displays. The analysis software has advanced features.<p>Software is versatile and allows for different ways to view and analyze data.</p><p>One typical method is illustrated using an example of a plate with indications ranging from very shallow (just below the front surface) to mid wall to very deep (just above the back surface.</p>',
			bottomtext: 'The image above shows the raw captured Cscan Data. TOF or depth is represented in color where purple/blue is deep (back wall) while dark red to orange is shallow.',
			listtitle: '<strong>Features include:</strong>',
			lists: [{spec: 'Displays are synched and coordinated'},
					{spec: 'Data is positionally and geometrically correct'},
					{spec: 'Multiple exams can be easily stitched together'},
					{spec: 'Automated Target Detection Algorithms'},
					{spec: 'Nearest neighbor clustering algorithms'},
					{spec: 'ASCII output files for input into RSTRENG and other FE (finite element) programs'} 
					]
		}
	];
	$scope.corrosionFeature =[
		{
			header: 'Data Analysis Features',
			image: $scope.appPathImg+'/corrosion-feature.jpg',
			title: '<strong>Nominal Back Wall is Removed</strong>',
			toptext: 'To analyze this data, the operator begins by removing the back wall.',
			bottomtext: '',
			listtitle: '',
			lists: []
		}
	];
	$scope.corrosionDeworm =[
		{
			header: 'DeWorming Algorithm',
			image: $scope.appPathImg+'/corrosion-deworm.jpg',
			title: '<strong>Deworming Algorithm Applied</strong>',
			toptext: 'A special deworming algorithm is applied to group the data into indications and to ferret out false targets.',
			bottomtext: '',
			listtitle: '',
			lists: []
		}
	];
	$scope.corrosionReport =[
		{
			header: 'Generated Reports',
			image: $scope.appPathImg+'/corrosion-report.jpg',
			title: '<strong>Reported Results</strong>',
			toptext: 'The location, depth, area, and equivalent diameter of these targets are then summarized in a report which is optionally readable by other numerical analysis programs including RSTRENG.',
			bottomtext: '',
			listtitle: '',
			lists: []
		}
	];
	$scope.corrosionFscscan =[
		{
			header: 'Front Surface Cscan',
			image: $scope.appPathImg+'/corrosion-fscscan.jpg',
			title: '<strong>Front Surface Cscan</strong>',
			toptext: 'The airless bubbler is capable of mapping both the front and back surfaces simultaneously. In the case of the front surface corrosion, the water path to the front surface is measured and displayed in Cscan format.',
			bottomtext: 'The above image shows a small divoted test plate, and the front surface Cscan from the test plate.',
			listtitle: '',
			lists: []
		}
	];
	$scope.corrosionPipewall =[
		{
			header: 'Pipe Wall Thickness',
			image: $scope.appPathImg+'/corrosion-pipewall.jpg',
			title: '<strong>12" OD x 400" Long Pipe w/ Triple Bend</strong>',
			toptext: 'The image below shows a more conventional wall thickness mapping of a 12" pipe with a triple bend scanning from the OD surface. Nominal wall thickness is thicker (blue) in the intrados and thinner (red/green) in the extrados.',
			bottomtext: '',
			listtitle: '',
			lists: []
		}
	];
	$scope.corrosionVessel =[
		{
			header: 'Corrosion Mapping of Vessels and Tanks',
			image: $scope.appPathImg+'/corrosion-vessel.jpg',
			title: '<strong>Stitched Cscan Images of Vessel</strong>',
			toptext: 'Corrosion mapping and wall thickness measurements are not limited to piping. Most any component may be examined as long as the RoboScanner can articulate the transducer onto the surface.<p>The analysis software will combine/stitch data from individual scans to create a composite image. The example below shows stitched corrosion mapping images of a pressure vessel.</p>',
			bottomtext: '',
			listtitle: '',
			lists: []
		}
	];
	$scope.corrosionVesselhead =[
		{
			header: 'Corrosion Mapping of Vessel Head',
			image: $scope.appPathImg+'/corrosion-vesselhead.jpg',
			title: '<strong>Vessel Head - Stitched Cscan Images</strong>',
			toptext: 'The example below shows stitched corrosion mapping images of a pressure vessel head.',
			bottomtext: 'For all examples shown, a wave form is collected every 0.02" circumferentially and every 0.10" axially. A high sampling rate combined with high throughput accounts for the detailed imaging and high resolution data',
			listtitle: '',
			lists: []
		}
	];
	
}]);