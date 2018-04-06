myApp.controller('searchController',  function($scope, KeysTopics, SecurityTopics, SlotsTopics, SurveillanceTopics, TableGamesTopics, CrimminalTopics, ConceptsTopics, OnCallTopics, LogIn){
    
    //show the "you are not log in" warning
    $scope.lockout = LogIn.getLog();    
    
    //retrieve data from each service 
    $scope.keysData = KeysTopics.getKeysTopics();
    $scope.securityData = SecurityTopics.getSecurityTopics();
    $scope.slotsData = SlotsTopics.getSlotsTopics();
    $scope.surveillanceData = SurveillanceTopics.getSurveillanceTopics();
    $scope.tableGamesData =  TableGamesTopics.getTableGamesTopics();
    $scope.crimminalData = CrimminalTopics.getCrimminalTopics();
    $scope.conceptsData = ConceptsTopics.getconceptsTopics();
    $scope.onCallData = OnCallTopics.getOnCallTopics();   
    
    //combine all data sources into a single array
    $scope.preSortData = $scope.keysData.concat($scope.securityData, $scope.slotsData, $scope.surveillanceData, $scope.tableGamesData, $scope.crimminalData, $scope.conceptsData, $scope.onCallData);
    

    //sort the data by mainTopic string
    // tip from https://www.w3schools.com/js/js_array_sort.asp
    $scope.sortedData = $scope.preSortData.sort(function(a,b){
            var x = a.mainTopic.toLowerCase();
            var y = b.mainTopic.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
    });
    
    // linking data to the search page
    $scope.combinedTopics = $scope.sortedData;
});//end of searchController