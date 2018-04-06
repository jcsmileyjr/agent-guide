myApp.controller('conceptsController',  function($scope, ConceptsTopics, LogIn){
    
    //show the "you are not log in" warning
    $scope.lockout = LogIn.getLog();
    
    //retrieve data from the concepts service and to be sorted
    $scope.preSortData =ConceptsTopics.getconceptsTopics();

    //sort the data by mainTopic string
    // tip from https://www.w3schools.com/js/js_array_sort.asp
    $scope.sortedData = $scope.preSortData.sort(function(a,b){
            var x = a.mainTopic.toLowerCase();
            var y = b.mainTopic.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
    });
    
    // linking data to the concepts page
    $scope.conceptsTopics = $scope.sortedData;  
});//end of the Controller