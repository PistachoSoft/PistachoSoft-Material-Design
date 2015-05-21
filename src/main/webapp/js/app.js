angular.module('starter', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider

            .state('starter', {
                url: "/",
                templateUrl: "index.html"
            })

            .state('home', {
                url: "/home",
                templateUrl: "templates/main/home.html"
            })
            
            .state('about', {
                url: "/about",
                templateUrl: "templates/main/about.html"
            })
        
            .state('projects', {
                url: "/projects",
                templateUrl: "templates/main/projects.html",
                controller: "ProjectsCtrl"
            });
        
        $urlRouterProvider.otherwise('home');
    });