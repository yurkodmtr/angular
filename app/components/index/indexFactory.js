app.factory('indexFactory', function($http){
    var obj = {};

    obj.get = function() {
        $http({
            method: 'GET',
            url: 'json1.json'
        }).then(function successCallback(response) {
            console.log(response);
            return response;
        }, function errorCallback(response) {
            console.log('error');
        });
    };

    return obj;

});