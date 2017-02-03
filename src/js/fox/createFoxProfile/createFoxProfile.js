export default module => {
    module.directive('createFoxProfile', [
        'foxFactory', '$state',
        function(Fox, $state) {
            return {
                template: require('./createFoxProfile.html'),
                link: {
                    pre: preLink
                },
            };

            function preLink(scope) {
                scope.addFox = function() {
                    Fox.addFox(scope.fox);
                    scope.fox = {};
                    $state.go('dashboard');
                }
            }
        }
    ]);
}