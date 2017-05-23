app.controller("indexCtrl", function($scope, indexFactory) {
    $scope.incomeData = indexFactory.get();

    console.log($scope.incomeData);
});