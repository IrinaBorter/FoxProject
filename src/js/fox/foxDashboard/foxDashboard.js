export default module => {
    module.directive('foxDashboard', [
        'foxFactory', '$state',
        function(Fox, $state) {
            return {
                template: require('./foxDashboard.html'),
                link: {pre: preLink}
            };

            function preLink(scope) {
                scope.foxes = Fox.getFoxes();
                scope.foxes =  scope.foxes.map(fox => {
                    if (!fox.image) {
                        fox.image = Fox.getDefaultImage();
                    }

                    return fox;
                });
                scope.goToFoxProfile = function(fox) {
                    $state.go('foxProfile', {foxId: fox.id});
                }
            }
        }
    ]);
}