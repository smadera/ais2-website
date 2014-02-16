'use strict';

describe('AboutCtrl', function() {
	var $ctrl, $scope ={};
	
	beforeEach(module('myApp'));
	
	beforeEach(inject(function(_$rootScope_, _$controller_) {
		$scope = _$rootScope_.$new();
		$ctrl = _$controller_('AboutCtrl', {$scope: $scope});
	}));
	
	it('about page', function() {
		$scope.$digest();
	});
});