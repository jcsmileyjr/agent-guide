/*A service that checks the the pwd for the logIn page */
myApp.factory('LogIn',  function ($http) {
    
var log = {"lockUserOut":true};    
    
return {
    
        //function to return current value of log. Use to inform users to log in.
        getLog: function(){
            return log.lockUserOut;
        },
    
        //function to update current value of log. Use to inform users to log in.
        loggedIn: function(){
            log.lockUserOut = false;
        },//end of the return
    
        // function to validate a password
        logIn : function(pwd){
            var success = false;
            var demoPWD = "test";

            /*validates the password sent by the user, if not then send back false*/
            if(pwd === demoPWD){
                success = true;
            }
            return success;

        }    
    
        }//end of the return
});