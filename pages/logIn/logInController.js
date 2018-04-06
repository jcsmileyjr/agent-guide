myApp.controller('logInController',  function($scope, LogIn, $state, $window, SurveillanceTopics, ConceptsTopics, CrimminalTopics, KeysTopics, OnCallTopics, SecurityTopics, TableGamesTopics, SlotsTopics){
    
    //used to hide or show failed login text
    $scope.failedLogIn = false;
    
    //restart the app by reloading the browser page and routing to logIn page
    $scope.restart = function(){
        $window.location.reload();
        $state.go("logIn");
    }    
    
    //function that uses the LogIn service to validate or invalidate the users's password. It validates the password, then send the the results back. If the results is false, a failed message is displayed. If the results are true, then lockout variable use throughout the app to hide the data is removed, the user is sent to the surveillance page, and all pages are opened to be viewed. 
    $scope.logPwd = function(pwd){      
        $scope.validatedPwd = LogIn.logIn(pwd);
        
        if($scope.validatedPwd === false){
            //if the password is incorrect, then the "fail" message is shown
            $scope.failedLogIn = true;
        }else {
            
            //update the "lockout" variable across the app to remove warning
            LogIn.loggedIn();      
            
            //if the password is correct, then the user is sent to the surveillance page
            $state.go("surveillance");       
        }
    }//end of function
    
});//end of logInController