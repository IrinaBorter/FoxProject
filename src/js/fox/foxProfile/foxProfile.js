import foxProfileStyle from './foxProfile.css';

export default module => {
    module.directive('foxProfile', [
        'foxFactory', '$stateParams', '$state', 'modalFactory',
        function(Fox, $stateParams, $state, modal) {
            return {
                template: require('./foxProfile.html'),
                link: link,
            };

            function link(scope) {
                const foxId = parseInt($stateParams.foxId, 10);

                scope.open = function() {
                   modal.open().result.then(function (res) {
                        console.log('Modal was closed!' + res);
                        scope.delete();
                    }, function () {
                        console.log('Modal dismissed at: ' + new Date());
                    });
                };

                scope.fox = Fox.at(foxId);

                scope.back = function() {
                    $state.go('dashboard');
                };

                scope.edit = function() {
                    $state.go('edit', {id: scope.fox.id});
                };

                scope.delete = function() {
                    Fox.remove(scope.fox);
                    scope.back();
                }
            }
        }
    ]);
}