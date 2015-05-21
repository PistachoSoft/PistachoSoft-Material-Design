angular.module('starter')

    .controller('ProjectsCtrl', [ '$scope', '$sce', 'ProjectSvc', function($scope,$sce,ProjectSvc){
        $scope.projects = ProjectSvc.getProjects();
    }]);