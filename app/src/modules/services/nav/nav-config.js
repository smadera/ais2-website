/**
This file pairs with the nav.js file/service. This is the custom stuff - the lists (objects) of components and buttons.

Sets up the header and footer navigation buttons / displays.
Each button generally has the following properties (but check the corresponding HTML template for a full reference)
	- either `html` or 'icon' and 'iconHtml' of the content to display, i.e. "Title Here" or "<span class='fa fa-bell'></span>" or "&nbsp;"
	- either an `href` or `click`. For the `click`, it's generally a $rootScope.$broadcast that can be listened for in the appropriate controller for that page.
	- `classes` which is an object that has style classes to apply for different parts of the nav item (i.e. `cont` is usually the class for the outer-most container)
		- use classes.cont ='hidden' as a special class to HIDE (display:none) the entire header and/or footer
	
@example
buttons: [
	//icon and text/html
	{
		icon: 'fa fa-bolt',
		iconHtml: 'Test',
		href: this.paths.appPathLink+'dev-test/test'
	},
	//html/text only
	{
		html: "Notifications",
		href: this.paths.appPathLink+'notifications',
		id: 'notifications'
	},
	//icon only
	{
		icon: 'fa fa-arrow-left',
		click: function() { $rootScope.$broadcast('NavEventChangePage', {page:'event1'}); },
	},
	//NOTE: this works, but should just use icon instead of stuffing in html
	{
		html: "<span class='icon-tribe'></span>",
		href: this.paths.appPathLink+'tribes'
	}
]

@module nav
@class nav-config

@toc
1. init
2. initPaths
3. initComponents
4. initPages

*/

'use strict';

angular.module('app').
factory('appNavConfig', ['appConfig', 'jrgArray', function(appConfig, jrgArray) {
var inst ={

	//self: appNav,		//so can use 'self' instead of 'this' in this file and it will still work to refer to appNav INSTEAD of this file.		//UPDATE: does NOT work - circular dependency..
	historyBack: false,		//placeholder - will be set in appNav
	
	inited: false,		//trigger that will be set after this first time this is run

	pathRoot: 'modules/services/nav/',
	
	paths: {},		//holds file paths for various things, specifically templates (HTML template files) and appPathLink. See initPaths function for more info.
	
	components :{},		//will hold parts of pages for use later

	pages :{},		//will hold all the navigation page objects for defining the nav (header and footer)

	/**
	For all the pages where the url route is not the same as the pages key
	@property pagesRouteMap Key-pairs where the key corresponds to this.pages array keys and the value corresponds to the url page to match. i.e. {'login': 'login-url'}
	@type Object
	@example
		eventviewinfo:{
			url: 'eventview',		//the sanitized version of the url (i.e. no hypens)
			params: {
				page: 'info'
			}
		},
		//will match things like 'test/898' or 'test/yes/no' in case passing in :id or other sub-page parameters in the URL (but NOT in GET query params)
		test:{
			urlRegex: 'test\/'		//the sanitized version of the url (i.e. no hypens)
		},
	*/
	pagesRouteMap: {
	},
	
	/**
	@toc 1.
	@method init
	*/
	init: function(params) {
		if(!this.inited) {		//only init once
			this.initPaths(params);
			this.initComponents({});
			this.initPages(params);
			
			this.inited =true;		//set for next time
		}
	},
	
	/**
	@toc 2.
	@method initPaths
	*/
	initPaths: function(params) {
		this.pathRoot =appConfig.dirPaths.staticPath+this.pathRoot;		//prepend static path to account for different environments / configs and ensure this always references the correct path
		this.paths.templates = {
			headerDropdown: this.pathRoot+'header-dropdown/header-dropdown.html',
			footerFlex: this.pathRoot+'footer-flex/footer-flex.html'
		};
		this.paths.appPathLink =appConfig.dirPaths.appPathLink;
	},
	
	/**
	@toc 3.
	@method initComponents
	*/
	initComponents: function(params) {
		var self =this;
		
		//NOTE: this references a function in THIS file/service, which is NOT what we want, we want to reference appNav SO we need to overwrite/set the historyBack function here from appNav later so this will work!
		this.components.backButton ={
			icon: 'fa fa-arrow-left',
			// html: "<span class='fa fa-arrow-left'></span>",
			click: function() {self.historyBack({}); }
		};
		
		this.components.headerDropdown ={
			template: self.paths.templates.headerDropdown,
			buttons: {
				left: [
				],
				right: [
					{
						icon: 'fa fa-home',
						iconHtml: 'Preview',
						href: this.paths.appPathLink+'preview'					
					},
					{
						icon: 'fa fa-suitcase',
						iconHtml: 'Products',
						dropdown: { // must remove href from above when dropdown is added
							visible: false,
							buttons:[
								{
									html:"<div><div class='dropdown-text'>Systems</div></div>",
									href: this.paths.appPathLink+'systems'
								},
								{
									html:"<div><div class='dropdown-text'>AutoScanners</div></div>",
									href: this.paths.appPathLink+'autoScanners'
								},
								{
									html:"<div><div class='dropdown-text'>ManualScanners</div></div>",
									href: this.paths.appPathLink+'manualScanners'
								}
							]
						}
					},
					{
						icon: 'fa fa-picture-o',
						iconHtml: 'Gallery',
						dropdown: { // must remove href from above when dropdown is added
							visible: false,
							buttons:[
								{
									html:"<div><div class='dropdown-text'>Photos</div></div>",
									href: this.paths.appPathLink+'photos'
								},
								{
									html:"<div><div class='dropdown-text'>Videos</div></div>",
									href: this.paths.appPathLink+'videos'
								}
							]
						}
					}
				]
			}
		};
		
		this.components.footerMain ={
			template: this.paths.templates.footerFlex,
			classes: {
				cont: ''
			},
			buttons: [
				{
					icon: 'fa fa-info-circle',
					iconHtml: 'About',
					href: this.paths.appPathLink+'about'
				},
				{
					/* used if not using seperate contact page 
					html: "Contact Us",
					href: 'mailto:ais@slip.net?Subject=WEBsite%20Contact'
					*/
					icon: 'fa fa-user',
					iconHtml: 'Contact',
					href: this.paths.appPathLink+'contact' 
				}
			]
		};
		//hardcoded array indices for use to change these buttons later
		this.components.footerMainIndices ={
		};
		
		this.components.defaultNav ={
			header: this.components.headerDropdown,
			footer: this.components.footerMain
		};
	},
	
	/**
	NOTE: need to COPY / deep clone the components otherwise they'll overwrite backwards (copying arrays/objects by reference instead of by value)
	@toc 4.
	@method initPages
	*/
	initPages: function(params) {
		
		this.pages.defaultPage =jrgArray.copy(this.components.defaultNav);			//in case missed a page, show default nav
		
		//site-specific
		//CUSTOM nav definitions
		//login
		this.pages.login ={
			header: {
				template: this.paths.templates.headerCentered,
				title: {
					html: '&nbsp;'
				},
				buttons: {
					left: [
						{
							html: "&nbsp;"
						}
					],
					right: [
						{
							html: "&nbsp;"
						}
					]
				}
			},
			footer: {
				template: this.paths.templates.footerFlex,
				buttons: [
					{
						html: "&nbsp;"
					}
				]
			}
		};
		
		//signup
		this.pages.signup ={
			header: {
				template: this.paths.templates.headerCentered,
				title: {
					html: '&nbsp;'
				},
				buttons: {
					left: [
						{
							html: "&nbsp;"
						}
					],
					right: [
						{
							html: "&nbsp;"
						}
					]
				}
			},
			footer: {
				template: this.paths.templates.footerFlex,
				buttons: [
					{
						html: "&nbsp;"
					}
				]
			}
		};
		
		
		//test
		this.pages.test =jrgArray.copy(this.components.defaultNav);
		// this.pages.test.header.classes ={
			// cont: 'hidden'
		// };
		// this.pages.test.footer.classes ={
			// cont: 'hidden'
		// };
		
		//end: CUSTOM nav definitions
	}
};
inst.init({});
return inst;
}]);