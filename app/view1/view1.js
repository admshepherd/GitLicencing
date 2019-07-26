'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'gitService', function($scope, gitService) {
        $scope.reposList = [];

        $scope.getOrganizationRepos = function(user, password, organization) {
            var projectsPromise = gitService.getOrganizationRepos(user, password, organization);
            projectsPromise.then(function(repos) {
                $scope.reposList = repos;
            }, function(data) {
                $scope.reposList.push({name: "call failed, status: "+data.status + " " + data.statusText});
            });
        }

        $scope.sendLicensePullRequest = function(project) {

        }
}]);