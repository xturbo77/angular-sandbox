'use strict';

var app = angular.module('monitoringApp', ['ngStorage']);

app.controller('MainCtrl', function ($rootScope, $localStorage) {
    $rootScope.$storage = $localStorage;
    
    // alerts
    $rootScope.alerts = [];
    $rootScope.closeAlert = function (index) {
        $rootScope.alerts.splice(index, 1);
    };
    $rootScope.addAlert = function (msg, type) {
        $rootScope.alerts.push({'msg': msg, 'type': type || 'info'});
    };
    
});