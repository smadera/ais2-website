'use strict';

describe('TurbineCtrl', function() {
	var $ctrl, $scope ={};
	
	beforeEach(module('myApp'));
	
	beforeEach(inject(function(_$rootScope_, _$controller_) {
		$scope = _$rootScope_.$new();
		$ctrl = _$controller_('TurbineCtrl', {$scope: $scope});
		
		$scope.turbineSplash.feature='1';
		$scope.turbineDatasystem.header='2';
		$scope.turbineSledscanner.header='3';
		$scope.turbineScanhead.header='4';
		$scope.turbineBottlebore.header='5';
		$scope.turbineSmallhead.header='6';
		$scope.turbineCalblock.header='7';
		$scope.turbineCallegacy.header='8';
		$scope.turbineDataacq.header='9';
		$scope.turbineDataanal.header='10';
		$scope.turbineEddycurr.header='11';
		$scope.turbineEddyfsut.header='12';
		$scope.turbineComport.header='13';
	}));
	
	it('various turbine values', function() {
		$scope.$digest();

		// verify values
		expect($scope.turbineSplash.feature).toBe('1');
		expect($scope.turbineDatasystem.header).toBe('2');
		expect($scope.turbineSledscanner.header).toBe('3');
		expect($scope.turbineScanhead.header).toBe('4');
		expect($scope.turbineBottlebore.header).toBe('5');
		expect($scope.turbineSmallhead.header).toBe('6');
		expect($scope.turbineCalblock.header).toBe('7');
		expect($scope.turbineCallegacy.header).toBe('8');
		expect($scope.turbineDataacq.header).toBe('9');
		expect($scope.turbineDataanal.header).toBe('10');
		expect($scope.turbineEddycurr.header).toBe('11');
		expect($scope.turbineEddyfsut.header).toBe('12');
		expect($scope.turbineComport.header).toBe('13');
	});
});