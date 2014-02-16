/**
@toc

@param {Object} scope (attrs that must be defined on the scope (i.e. in the controller) - they can't just be defined in the partial html). REMEMBER: use snake-case when setting these on the partial!
TODO

@param {Object} attrs REMEMBER: use snake-case when setting these on the partial! i.e. my-attr='1' NOT myAttr='1'
TODO

@dependencies
TODO

@usage
partial / html:
<div app-aispage></div>
TODO

controller / js:
TODO

//end: usage
*/

'use strict';

angular.module('app').directive('appAispage', ['$rootScope', function ($rootScope) {

	return {
		restrict: 'A',
		scope: {
            aispagevalues: "="
		},

		// replace: true,
		template: function(element, attrs) {
		/*
			var defaultsAttrs ={
			};
			for(var xx in defaultsAttrs) {
				if(attrs[xx] ===undefined) {
					attrs[xx] =defaultsAttrs[xx];
				}
			}
		*/	
			var html ="<div>"+
				"<h5 class='Ais-header' ng-bind-html=\"aispagevalues.header\"></h5>"+
				"<div class='not4big'>"+
					"<p ng-bind-html=\"aispagevalues.toptext\"></p>"+
				"</div> <!-- not4big -->"+
				"<div class='flexbox'>"+
					"<div class='use4big'>"+
						"<p ng-bind-html=\"aispagevalues.toptext\"></p>"+
						"<div class='Ais-lists'>"+
							"<p style='text-align: left;' ng-bind-html=\"aispagevalues.listtitle\"></p>"+
							"<ol>"+
								"<div ng-repeat='item in aispagevalues.lists'>"+
									"<li ng-bind-html=\"item.spec\"></li>"+
								"</div> <!-- ng-repeat -->"+
							"</ol>"+
						"</div> <!-- Ais-list -->"+
						"<p style='text-align: left;' ng-bind-html=\"aispagevalues.bottomtext\"></p>"+
					"</div> <!-- use4big -->"+
					"<div class='not4big'>"+
						"<div class='Ais-lists'>"+
							"<p style='text-align: left;' ng-bind-html=\"aispagevalues.listtitle\"></p>"+
							"<ol>"+
								"<div ng-repeat='item in aispagevalues.lists'>"+
									"<li ng-bind-html=\"item.spec\"></li>"+
								"</div> <!-- ng-repeat -->"+
							"</ol>"+
						"</div> <!-- Ais-list -->"+
					"</div> <!-- not4big -->"+
					"<div class='flex1'>&nbsp;</div>"+
					"<div class='Ais-imageF'>"+
						"<img ng-src=\"{{aispagevalues.image}}\" onerror=\'this.style.display = \"none\"\'>"+
						"<div ng-bind-html=\"aispagevalues.title\"></div>"+
					"</div>"+
					"<div class='flex1'>&nbsp;</div>"+
				"</div> <!-- flexbox -->"+
				"<div class='not4big'>"+
					"<p style='text-align: left;' ng-bind-html=\"aispagevalues.bottomtext\"></p>"+
				"</div> <!-- not4big -->"+			
			"</div>";
			return html;
		},
		
		link: function(scope, element, attrs) {
		},
		
		controller: function($scope, $element, $attrs) {
		}
	};
}]);