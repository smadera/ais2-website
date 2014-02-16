'use strict';

describe('ManualScannersCtrl', function() {
	var $ctrl, $scope ={}, $urloc;
	
	beforeEach(module('myApp'));
	
	beforeEach(inject(function(_$rootScope_, _$controller_, _$location_) {
		$scope = _$rootScope_.$new();
		$ctrl = _$controller_('ManualScannersCtrl', {$scope: $scope});
		$urloc = _$location_;
	}));
	
	it('verify gotoAnchor function', function() {
		var ii;
		var old = $urloc.path();
		var num = 3;
		for (ii=0; ii<=num; ii++) {
			$scope.gotoAnchor(ii);
			$scope.$digest();
			expect($urloc.path()).toBe(old);
		}
	});
});