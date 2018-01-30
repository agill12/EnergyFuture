angular.module("EnergyApp",["ngRoute"]);
angular.module("EnergyApp").config(function($locationProvider,$routeProvider){
    $locationProvider.html5Mode(true);
    
    $routeProvider
    .when("/",{
        templateUrl: "templates/home.html",
        
    })
    .when("/current",{
        templateUrl:"templates/current.html"
    })
    .when("/sources",{
        templateUrl:"templates/sources.html",
       
    })
    .when("/storage",{
        templateUrl:"templates/storage.html",
       
    })
    .when("/getinvolved",{
        templateUrl:"templates/getinvolved.html",
       
    })
    .when("/efficiency",{
        templateUrl:"templates/efficiency.html",
       
    });
   
        
});