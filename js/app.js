//Sets the variable myApp as a Angular applicatation named 'IndexCards'
var myApp = angular.module('Agentpedia',['ui.router']);

// A .config function is used to provide 'state' and url routing for the app thru the stateProvider (from ui-router).
myApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider, $state) {

    //If no route or link is select, the app redirects to the nav page
    $urlRouterProvider.otherwise('/logIn');

    $stateProvider
        //The nav state redirects the user to the surveillance.html template  
        .state('surveillance', {
            url:'/surveillance',
            templateUrl: 'pages/surveillance/surveillance.html',
            controller: "surveillanceController"
        })
        //The nav state redirects the user to the tableGames.html template  
        .state('tableGames', {
            url:'/tableGames',
            templateUrl: 'pages/tableGames/tableGames.html',
            controller: "tableGamesController"
        })
        //The nav state redirects the user to the keys.html template  
        .state('keys', {
            url:'/keys',
            templateUrl: 'pages/keys/keys.html',
            controller: "keysController"
        })
        //The nav state redirects the user to the security.html template  
        .state('security', {
            url:'/security',
            templateUrl: 'pages/security/security.html',
            controller: "securityController"
        })
        //The nav state redirects the user to the slots.html template  
        .state('slots', {
            url:'/slots',
            templateUrl: 'pages/slots/slots.html',
            controller: "slotsController"
        })
        //The nav state redirects the user to the search.html template  
        .state('search', {
            url:'/search',
            templateUrl: 'pages/search/search.html',
            controller: "searchController"
        })
        //The nav state redirects the user to the crimminal.html template  
        .state('crimminal', {
            url:'/crimminal',
            templateUrl: 'pages/crimminal/crimminal.html',
            controller: "crimminalController"
        })
        //The nav state redirects the user to the onCall.html template  
        .state('onCall', {
            url:'/onCall',
            templateUrl: 'pages/onCall/onCall.html',
            controller: "onCallController"
        }) 
        //The nav state redirects the user to the concepts.html template  
        .state('concepts', {
            url:'/concepts',
            templateUrl: 'pages/concepts/concepts.html',
            controller: "conceptsController"
        })
        //The nav state redirects the user to the logIn.html template  
        .state('logIn', {
            url:'/logIn',
            templateUrl: 'pages/logIn/logIn.html',
            controller: "logInController"
        }) 
       //The nav state redirects the user to the about.html template  
        .state('about', {
            url:'/about',
            templateUrl: 'pages/about/about.html'
        })      
    
}]);


	myApp.run(function($transitions, LogIn) {

		  $transitions.onStart({ to: 'surveillance'}, function(trans) {

		    var auth = trans.injector().get('LogIn');

		    if (LogIn.getLog()===true) {

		      // User isn't authenticated. Redirect to a new Target State

		      return trans.router.stateService.target('logIn');

		    }

		  });

		    

		  $transitions.onStart({ to: 'tableGames'}, function(trans) {

		    var auth = trans.injector().get('LogIn');

		    if (LogIn.getLog()===true) {

		      // User isn't authenticated. Redirect to a new Target State

		      return trans.router.stateService.target('logIn');

		    }
		});
		  $transitions.onStart({ to: 'concepts'}, function(trans) {

		    var auth = trans.injector().get('LogIn');

		    if (LogIn.getLog()===true) {

		      // User isn't authenticated. Redirect to a new Target State

		      return trans.router.stateService.target('logIn');

		    }

		  });

		    

		  $transitions.onStart({ to: 'crimminal'}, function(trans) {

		    var auth = trans.injector().get('LogIn');

		    if (LogIn.getLog()===true) {

		      // User isn't authenticated. Redirect to a new Target State

		      return trans.router.stateService.target('logIn');

		    }
		}); 
		  $transitions.onStart({ to: 'keys'}, function(trans) {

		    var auth = trans.injector().get('LogIn');

		    if (LogIn.getLog()===true) {

		      // User isn't authenticated. Redirect to a new Target State

		      return trans.router.stateService.target('logIn');

		    }

		  });

		    

		  $transitions.onStart({ to: 'onCall'}, function(trans) {

		    var auth = trans.injector().get('LogIn');

		    if (LogIn.getLog()===true) {

		      // User isn't authenticated. Redirect to a new Target State

		      return trans.router.stateService.target('logIn');

		    }
		}); 
		  $transitions.onStart({ to: 'search'}, function(trans) {

		    var auth = trans.injector().get('LogIn');

		    if (LogIn.getLog()===true) {

		      // User isn't authenticated. Redirect to a new Target State

		      return trans.router.stateService.target('logIn');

		    }

		  });

		    

		  $transitions.onStart({ to: 'security'}, function(trans) {

		    var auth = trans.injector().get('LogIn');

		    if (LogIn.getLog()===true) {

		      // User isn't authenticated. Redirect to a new Target State

		      return trans.router.stateService.target('logIn');

		    }
		}); 
		  $transitions.onStart({ to: 'slots'}, function(trans) {

		    var auth = trans.injector().get('LogIn');

		    if (LogIn.getLog()===true) {

		      // User isn't authenticated. Redirect to a new Target State

		      return trans.router.stateService.target('logIn');

		    }

		  });
        
	})	
    