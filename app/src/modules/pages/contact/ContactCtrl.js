/**
*/

'use strict';

angular.module('myApp').controller('ContactCtrl', ['$scope','appHttp',
function($scope,appHttp) {

	$scope.numSent = 0;
	$scope.numGood = 0;
	$scope.numFail = 0;
	$scope.msgStatus = '';
	
    //note: not all fields have to be defined; if undefined they'll default to blank and will be set by Angular
    $scope.formVals ={
        first_name:'',
        last_name:'',
        email:'',
        phone:'',
        company:'',
        country:'',
        comment:'',
        terms: 'yes'
    };
        
    $scope.opts ={
        ngChange: function() {$scope.onChange({}); }
    };
        
    $scope.optsPhone ={
        validationMessages: {
			pattern: 'Numbers only please!'
        }
    };
        
    $scope.onChange =function() {
        console.log('onChange fired');
    };
        
    $scope.submitForm =function() {
        if($scope.contactForm.$valid) {
			var vals = {
				form_vals: $scope.formVals
			};
			$scope.numSent++;
			$scope.msgStatus = 'Processing...';
			var promise1 =appHttp.go({}, {url:'user/sendContact', data:vals}, {});
			promise1.then(
				function(response) { // resolve
					$scope.numGood++;
					$scope.msgStatus = 'Message Sent';
				},
				function(response) { // reject
					$scope.numFail++;
					$scope.msgStatus = 'Message Failed';
				}
			);
        }
        else {
            console.log('form invalid');
        }
    };
	
}]);
/**
*/
