'use strict';

describe('CorrosionCtrl', function() {
	var $ctrl, $scope ={};
	
	beforeEach(module('myApp'));
	
	beforeEach(inject(function(_$rootScope_, _$controller_) {
		$scope = _$rootScope_.$new();
		$ctrl = _$controller_('CorrosionCtrl', {$scope: $scope});
		
		$scope.corrosionSplash.feature='1';
		$scope.corrosionLargearea.header='2';
		$scope.corrosionRoboscanner.header='3';
		$scope.corrosionConfigurations.header='4';
		$scope.corrosionLongarm.header='5';
		$scope.corrosionRobopipe.header='6';
		$scope.corrosionDatasystem.header='7';
		$scope.corrosionDucer.header='8';
		$scope.corrosionBubbler.header='9';
		$scope.corrosionDataanal.header='10';
		$scope.corrosionFeature.header='11';
		$scope.corrosionDeworm.header='12';
		$scope.corrosionReport.header='13';
		$scope.corrosionFscscan.header='14';
		$scope.corrosionPipewall.header='15';
		$scope.corrosionVessel.header='16';
		$scope.corrosionVesselhead.header='17';
	}));
	
	it('various turbine values', function() {
		$scope.$digest();

		// verify values
		expect($scope.corrosionSplash.feature).toBe('1');
		expect($scope.corrosionLargearea.header).toBe('2');
		expect($scope.corrosionRoboscanner.header).toBe('3');
		expect($scope.corrosionConfigurations.header).toBe('4');
		expect($scope.corrosionLongarm.header).toBe('5');
		expect($scope.corrosionRobopipe.header).toBe('6');
		expect($scope.corrosionDatasystem.header).toBe('7');
		expect($scope.corrosionDucer.header).toBe('8');
		expect($scope.corrosionBubbler.header).toBe('9');
		expect($scope.corrosionDataanal.header).toBe('10');
		expect($scope.corrosionFeature.header).toBe('11');
		expect($scope.corrosionDeworm.header).toBe('12');
		expect($scope.corrosionReport.header).toBe('13');
		expect($scope.corrosionFscscan.header).toBe('14');
		expect($scope.corrosionPipewall.header).toBe('15');
		expect($scope.corrosionVessel.header).toBe('16');
		expect($scope.corrosionVesselhead.header).toBe('17');
	});
});