angular.module('starter')

    .controller('NavbarCtrl', [ '$scope', 'ProjectSvc', function($scope,ProjectSvc){
        $scope.projects = ProjectSvc.getProjects();
    }]);
