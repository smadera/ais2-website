'use strict';

describe('PreviewCtrl', function() {
	var $ctrl, $scope ={}, $urloc, $timeout;
	
	beforeEach(module('myApp'));
	
	beforeEach(inject(function(_$rootScope_, _$controller_, _$location_,_$timeout_) {
		$scope = _$rootScope_.$new();
		$ctrl = _$controller_('PreviewCtrl', {$scope: $scope});
		$urloc = _$location_;
		$timeout = _$timeout_;
		
		var minIntervalMSecs = 500;	// 0.5 secs
		var maxIntervalMSecs = 123456; // 123.456 secs
		var defIntervalMSecs = 3000; // 3.0 secs

		$scope.myInterval = maxIntervalMSecs; // Stop Timer
		$scope.optsCarousel.curSlide = 0;
		$scope.slides.length = 4;
		$scope.slides[0].details='corrosion';
		$scope.slides[1].details='tofdmc';
		$scope.slides[2].details='turbine';
		$scope.slides[3].details='blades';
		$scope.appPathLocation=$urloc.path();
	}));

	it('verify gotoProducts function', function() {
		$scope.gotoProducts(0);
		$scope.$digest();
	
		$scope.gotoProducts(-1);
		$scope.$digest();
		expect($urloc.path()).toBe($scope.appPathLocation+'home');

		$scope.gotoProducts(1);
		$scope.$digest();
		expect($urloc.path()).toBe($scope.appPathLocation+'systems');

		$scope.gotoProducts(2);
		$scope.$digest();
		expect($urloc.path()).toBe($scope.appPathLocation+'autoScanners');

		$scope.gotoProducts(3);
		$scope.$digest();
		expect($urloc.path()).toBe($scope.appPathLocation+'manualScanners');
	});
	
	it('verify gotoOthers function', function() {
		$scope.gotoOthers(0);
		$scope.$digest();
	
		$scope.gotoOthers(-1);
		$scope.$digest();
		expect($urloc.path()).toBe($scope.appPathLocation+'home');

		$scope.gotoOthers(-2);
		$scope.$digest();
		expect($urloc.path()).toBe($scope.appPathLocation+'about');

		$scope.gotoOthers(-3);
		$scope.$digest();
		expect($urloc.path()).toBe($scope.appPathLocation+'contact');

		$scope.gotoOthers(1);
		$scope.$digest();
		expect($urloc.path()).toBe($scope.appPathLocation+'photos');

		$scope.gotoOthers(2);
		$scope.$digest();
		expect($urloc.path()).toBe($scope.appPathLocation+'videos');
	});
	
	it('verify gotoTiles function', function() {
		var ii;
		$scope.currenTile = 0;
		$scope.tiles.length = 3;
		for (ii=-1; ii<=$scope.tiles.length; ii++) {
			if (ii >= 0 && ii < $scope.tiles.length) {
				$scope.tiles[ii].selected = '';
			}
			$scope.gotoTiles(ii);
			$scope.$digest();
			if (ii >= 0 && ii < $scope.tiles.length) {
				expect($scope.currenTile).toBe(ii);
				expect($scope.tiles[ii].selected).toBe('selected');
			}
		}
	});

	it('verify gotoSlide function', function() {
		var ii;
	
		for (ii=-1; ii<=$scope.slides.length; ii++) {
			if (ii >= 0 && ii < $scope.slides.length) {
				$scope.slides[ii].selected = '';
			}
			$scope.gotoSlide(ii,$scope.myInterval);
			$scope.$digest();
			if (ii >= 0 && ii < $scope.slides.length) {
				expect($scope.optsCarousel.curSlide).toBe(ii);
				expect($scope.slides[ii].selected).toBe('selected');
			}
		}
	});

	it('verify gotoDetails function', function() {
		var ii;
	
		for (ii=-1; ii<=$scope.slides.length; ii++) {
			$scope.gotoDetails(ii);
			$scope.$digest();
			if (ii == 0) {
				expect($urloc.path()).toBe($scope.appPathLocation+'corrosion');
			} else if (ii == 1) {
				expect($urloc.path()).toBe($scope.appPathLocation+'tofdmc');
			} else if (ii == 2) {
				expect($urloc.path()).toBe($scope.appPathLocation+'turbine');
			} else if (ii == 3) {
				expect($urloc.path()).toBe($scope.appPathLocation+'blades');
			}
		}
	});

	it('verify iconSlide function', function() {
		var ii, nn;
		var minIntervalMSecs = 500;	// 0.5 secs
		var maxIntervalMSecs = 123456; // 123.456 secs
		var defIntervalMSecs = 3000; // 3.0 secs
		$scope.currentIcon = 0;
		for (ii=0; ii<4; ii++) {
			if (ii == 0) {
				nn = 123;
				$scope.myInterval = defIntervalMSecs; // Start Timer
			} else if (ii == 1) {
				nn = -1;
				$scope.optsCarousel.curSlide = 0;				
			} else if (ii == 2) {
				nn = 1;
				$scope.optsCarousel.curSlide = $scope.slides.length - 1;				
			} else {
				nn = 0;
				$scope.myInterval = maxIntervalMSecs; // Stop Timer
			}
			$scope.icons[ii].active = '';
			$scope.iconSlide(nn);
			$scope.$digest();
			if (nn > 100) {
				$timeout.flush();
			}
			expect($scope.icons[$scope.currentIcon].active).toBe('active');
		}
	});

});