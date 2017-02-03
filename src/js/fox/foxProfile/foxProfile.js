import foxProfileStyle from './foxProfile.css';

export default module => {
    module.directive('foxProfile', [
        'foxFactory', '$stateParams',
        function(Fox, $stateParams) {
            return {
                template: require('./foxProfile.html'),
                link: link,
            };

            function link(scope) {
                const foxId = parseInt($stateParams.foxId, 10);

                scope.fox = Fox.at(foxId);
                if (!scope.fox.image) {
                    scope.fox.image.image = Fox.getDefaultImage();
                }
            }

        }
    ]);
}