'use strict';

describe('TofdmcCtrl', function() {
	var $ctrl, $scope ={};
	
	beforeEach(module('myApp'));
	
	beforeEach(inject(function(_$rootScope_, _$controller_) {
		$scope = _$rootScope_.$new();
		$ctrl = _$controller_('TofdmcCtrl', {$scope: $scope});
	
		$scope.tofdmcSplash.feature='1';
		$scope.tofdmcDatasystem.header='2';
		$scope.tofdmcLogdata.header='3';
		$scope.tofdmcZones.header='4';
		$scope.tofdmcCalblock.header='5';
		$scope.tofdmcCaldata.header='6';
		$scope.tofdmcFrame.header='7';
		$scope.tofdmcHinge.header='8';
		$scope.tofdmcRtdata.header='9';
		$scope.tofdmcAnalysis.header='10';
		$scope.tofdmcReport.header='11';
	}));
	
	it('various tofdmc values', function() {
		$scope.$digest();

		// verify values
		expect($scope.tofdmcSplash.feature).toBe('1');
		expect($scope.tofdmcDatasystem.header).toBe('2');
		expect($scope.tofdmcLogdata.header).toBe('3');
		expect($scope.tofdmcZones.header).toBe('4');
		expect($scope.tofdmcCalblock.header).toBe('5');
		expect($scope.tofdmcCaldata.header).toBe('6');
		expect($scope.tofdmcFrame.header).toBe('7');
		expect($scope.tofdmcHinge.header).toBe('8');
		expect($scope.tofdmcRtdata.header).toBe('9');
		expect($scope.tofdmcAnalysis.header).toBe('10');
		expect($scope.tofdmcReport.header).toBe('11');
	});
});