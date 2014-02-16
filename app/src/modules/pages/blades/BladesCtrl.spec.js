'use strict';

describe('BladesCtrl', function() {
	var $ctrl, $scope ={};
	
	beforeEach(module('myApp'));
	
	beforeEach(inject(function(_$rootScope_, _$controller_) {
		$scope = _$rootScope_.$new();
		$ctrl = _$controller_('BladesCtrl', {$scope: $scope});
		
		$scope.bladesSplash.feature='1';
		$scope.bladesSplash.header='2';
		$scope.bladesDatasystem.header='3';
	}));
	
	it('various blades values', function() {
		$scope.$digest();

		// verify values
		expect($scope.bladesSplash.feature).toBe('1');
		expect($scope.bladesSplash.header).toBe('2');
		expect($scope.bladesDatasystem.header).toBe('3');
	});
});