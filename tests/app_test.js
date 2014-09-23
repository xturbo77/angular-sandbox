describe('MainCtrl function', function() {

    describe('MainCtrl', function() {
        var $scope, ctrl;

        beforeEach(module('monitoringApp'));

        beforeEach(inject(function($rootScope, $controller) {
            $scope = $rootScope.$new();
            ctrl = $controller('MainCtrl', {
                $scope: $scope
            });
        }));

        it('Controller should be defined', function() {
            expect(ctrl).toBeDefined();
        });

        it('alerts should be empty', function() {
            expect($scope.alerts.length).toBe(0);
        });


    });
});