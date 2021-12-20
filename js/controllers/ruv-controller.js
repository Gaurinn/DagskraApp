angular.module('tvApp').controller('ruvController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    $http.get('http://apis.is/tv/'+$routeParams.channel).success(function (data) {

        $scope.ruvGuide = data.results;

    }).error(function (err, data) {
        console.log(err, data);
    });

    $scope.selectShow = function (show) {
        $scope.full = show;
    };

    $scope.checkChannel = function () {

        if ($routeParams.channel === "stod3") {
            
            return true;
        }

    }
}]);