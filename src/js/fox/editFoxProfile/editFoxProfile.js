export default module => {
    module.directive('editFoxProfile', [
        'foxFactory', '$stateParams', '$state',
        function(Fox, $stateParams, $state) {
            return {
                template: require('../createFoxProfile/createFoxProfile.html'),
                link: link,
            };

            function link(scope) {
                const foxId = parseInt($stateParams.id, 10);

                scope.fox = Fox.at(foxId);
                scope.colors = Fox.getFoxesColors();

                scope.save = function() {
                    Fox.edit(scope.fox);
                    $state.go('foxProfile', {foxId: foxId});
                };

                scope.cancel = function() {
                    scope.isEditing = false;
                    $state.go('foxProfile', {foxId: foxId});
                };
            }
        }
    ]);
}