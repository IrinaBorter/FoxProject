import createFoxProfile from './createFoxProfile.css';

export default module => {
    module.directive('createFoxProfile', [
        'foxFactory', '$state',
        function(Fox, $state) {
            return {
                template: require('./createFoxProfile.html'),
                link: preLink,
            };

            function preLink(scope) {
                scope.colors = Fox.getFoxesColors();

                scope.addFox = function() {
                    Fox.add(scope.fox);
                    scope.fox = {};
                    $state.go('dashboard');
                };
            }
        }
    ]);
}