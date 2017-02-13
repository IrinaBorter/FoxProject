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
                scope.fox = {
                    name: '',
                    age: null,
                    birthday: '',
                    color: 'ginger'
                };

                scope.addFox = function() {
                    let isValid = true;

                    Object.keys(scope.fox).forEach(key => {
                        if (!scope.fox[key]) {
                            isValid = false;
                        }
                    });

                    if (isValid) {
                        Fox.add(scope.fox);
                        $state.go('dashboard');
                    }
                };
            }
        }
    ]);
}