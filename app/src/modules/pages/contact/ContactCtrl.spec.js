'use strict';

describe('ContactCtrl', function() {
	var $ctrl, $scope ={}, $httpBackend;
	
	beforeEach(module('myApp'));
	
	beforeEach(inject(function(_$rootScope_, _$controller_, _$httpBackend_) {
		$scope = _$rootScope_.$new();
		$ctrl = _$controller_('ContactCtrl', {$scope: $scope});
		$httpBackend =_$httpBackend_;
	}));
	
	it('should have working submitForm function', function() {
		$httpBackend.expectPOST('/api/user/sendContact').respond({result: {code: 0}});

		expect($scope.numSent).toBe(0);
		expect($scope.numGood).toBe(0);
		expect($scope.numFail).toBe(0);
		
		$scope.formVals ={
			first_name:'first_name',
			last_name:'last_name',
			email:'ais2@ais4ndt.com',
			phone:'1234567890',
			company:'company',
			country:'USA',
			comment:'test comment',
			terms: 'yes'
		};
		$scope.$digest();		//validate form - UPDATE: this doesn't work without $compile function (i.e. works for unit testing directives but not controllers.. unless you want to mock out all the template HTML & $compile it too..
		// http://stackoverflow.com/questions/17106201/angularjs-how-to-mock-a-formcontroller-injected-in-scope
		// http://stackoverflow.com/questions/19156613/unit-test-controller-that-depends-on-form-validation-in-angularjs
		//manually make form valid
		$scope.contactForm ={
			$valid: true
		};
		$scope.submitForm();

		// expect($scope.$emit).toHaveBeenCalledWith('evtAppalertAlert', {close:true});
		
		//this works ONLY because it's inside an http request.. otherwise events have timing issues..
//		$scope.$on('loginEvt', function(evt, params) {
//			expect(params.loggedIn).toBe(true);
//			expect(params.user_id).toBe(user._id);
//			expect(params.sess_id).toBe(user.sess_id);
//		});
		
		$httpBackend.flush();
		$scope.$digest();

		// verify counters on success
		expect($scope.numSent).toBe(1);
		expect($scope.numGood).toBe(1);
		expect($scope.numFail).toBe(0);
		
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	it('should handle sendContact error 500', function() {
		$httpBackend.expectPOST('/api/user/sendContact').respond(500, {});

		$scope.$digest();		//validate form - UPDATE: this doesn't work without $compile function (i.e. works for unit testing directives but not controllers.. unless you want to mock out all the template HTML & $compile it too..
		// http://stackoverflow.com/questions/17106201/angularjs-how-to-mock-a-formcontroller-injected-in-scope
		// http://stackoverflow.com/questions/19156613/unit-test-controller-that-depends-on-form-validation-in-angularjs
		//manually make form valid
		$scope.contactForm ={
			$valid: true
		};
		$scope.submitForm();

		$httpBackend.flush();
		$scope.$digest();

		// verify counters on error
		expect($scope.numSent).toBe(1);
		expect($scope.numFail).toBe(1);
		expect($scope.numGood).toBe(0);
		
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	it('should handle invalid form error', function() {
		//manually make form invalid
		$scope.contactForm ={
			$valid: false
		};
		$scope.submitForm();

		$scope.$digest();

		// verify counters on error
		expect($scope.numSent).toBe(0);
		expect($scope.numFail).toBe(0);
		expect($scope.numGood).toBe(0);
	});

	it('verify onChange function exists', function() {
		$scope.onChange();
		$scope.opts.ngChange();

		$scope.$digest();
	});

});