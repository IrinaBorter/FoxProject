export default module => module.factory('modalFactory', [
    '$uibModal',
    function($uibModal) {
        function open() {
            return $uibModal.open({
                animation: true,
                template: require('./modalTemplate.html'),
                controller: modalController,
            });
        }

        function modalController($scope, $uibModalInstance) {
            $scope.ok = function() {
                $uibModalInstance.close('close');
            };

            $scope.cancel = function() {
                $uibModalInstance.dismiss('cancel');
            };
        }

        return {
            open,
        };
    }
]);