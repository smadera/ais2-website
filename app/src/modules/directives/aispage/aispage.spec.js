'use strict';

describe('appAispage', function() {
	var elm, elmScope, $scope, $compile, $timeout;
	
	beforeEach(module('myApp'));
	
	/**
	@param params
		@param {String} html
	*/
	var createElm =function(params) {
		var html ="<div app-aispage>"+
		"</div>";
		if(params.html) {
			html =params.html;
		}
		// elm =angular.element(html);
		elm =$compile(html)($scope);
		// $scope.$digest();
		$scope.$apply();		//NOTE: required otherwise the alert directive won't be compiled!!!! ... wtf?
		elmScope =elm.isolateScope();
		var elements ={
			// 'somePart':elm.find('div').children().find('div')
		};
		return elements;
	};
	
	beforeEach(inject(function(_$rootScope_, _$compile_, _$timeout_) {
		$compile = _$compile_;
		$timeout = _$timeout_;
		$scope = _$rootScope_.$new();
		
		$scope.pagevalues =[
			{
				header: '1',
				image: '',
				title: '3',
				toptext: '4',
				bottomtext: '5',
				listtitle: '',
				lists: []
			}
		];
	}));
	
	// afterEach(function() {
	// });
	
	it('should call aispage function', function() {
		
		var html ="<div app-aispage aispagevalues='pagevalues[0]'></div>";
		var eles =createElm({html:html});
		
		$scope.$digest();

		// verify values
		expect($scope.pagevalues[0].header).toBe('1');
		expect($scope.pagevalues[0].title).toBe('3');
		expect($scope.pagevalues[0].toptext).toBe('4');
		expect($scope.pagevalues[0].bottomtext).toBe('5');
	});
	
});