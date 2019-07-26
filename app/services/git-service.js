angular.module('myApp').factory('gitService', ['$q', '$http', 'AuthenticationService', function($q, $http, authenticationService) {
    var gitService = {

        authenticateUser: function(user, password) {
            authenticationService
        },

        getOrganizationRepos: function(username, password, organization) {
            var deferred = $q.defer();

            authenticationService.SetCredentials(username, password);

            var reposUrl = "https://api.github.com/orgs/"+ organization +"/repos";
            $http({method: 'GET', url: reposUrl, cache: false}).then(
                function success(response) {
                    deferred.resolve(response.data);
                },
                function error(data) {
                    deferred.reject(data);
                });
            return deferred.promise;
        }
    };
    return gitService;
}]);