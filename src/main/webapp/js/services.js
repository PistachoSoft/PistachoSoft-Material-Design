angular.module('starter')

    .factory('ProjectSvc', [ 'HOSTING', function(HOSTING){
        
        var projects = [
            {
                url: HOSTING.HOSTNAME+"twitter",
                app: "!Twitter",
                preview: "img/previews/twitter.jpg",
                wip: false
            },
            {
                url: HOSTING.HOSTNAME+"wsapp",
                app: "WsApp",
                preview: "img/previews/wsapp.jpg",
                wip: false
            },
            {
                url: HOSTING.HOSTNAME+"flow",
                app: "PistachoFlow",
                preview: "img/previews/flow.jpg",
                wip: true
            },
            {
                url: HOSTING.HOSTNAME+"chef",
                app: "Chef",
                preview: "img/previews/chef.jpg",
                wip: false
            },
            {
                url: HOSTING.HOSTNAME+"earthme",
                app: "EarthMe!",
                preview: "img/previews/earthme.jpg",
                wip: false
            },
            {
                url: HOSTING.HOSTNAME+"kids4kids",
                app: "Kids4Kids",
                preview: "img/previews/kids4kids.jpg",
                wip: false
            }
        ];
        
        return {
            getProjects: function(){
                return projects;
            }            
        };
    }]);
