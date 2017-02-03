import navigationStyle from './navigation.css';

export default module => {
    module.directive('navigation', [
        function() {
            return {
                template: require('./navigation.html'),
                scope: {},
                link: preLink
            };

            function preLink($scope) {
                console.log($scope.nextSibling);
            }
        }
    ]);
}