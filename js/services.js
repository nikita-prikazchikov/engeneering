/**
 * Created by nprikazchikov on 3/2/15.
 */

var engineeringServices = angular.module('engineeringServices', ['ngResource']);

//engineeringServices.factory('TestCases', ['$resource', function ($resource) {
//    return $resource('/api/testcases/:id', null, {});
//}]);

//engineeringServices.factory("TestCaseFactory", ['TestCases', function (TestCases) {
//    return {
//        data: {testcases: []},
//        getData: function (filter) {
//            var self = this;
//            TestCases.query(filter, function (data) {
//                self.data.testcases = data;
//            });
//        }
//    };
//}]);

engineeringServices.factory("VisibilityFactory", function () {
    return {
        data: {
            filter: true
        }
    };
});