export default module => {
    module.config([
        '$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('dashboard', {
                    url: '/dashboard',
                    template: '<div fox-dashboard></div>'
                })
                .state('createFox', {
                    url: '/createFox',
                    template: '<div create-fox-profile></div>'
                })
                .state('foxProfile', {
                    url: '/foxes/:foxId',
                    template: '<div fox-profile></div>',
                    controller: function ($state) {
                        console.log($state.current.name);
                    }
                });
            $urlRouterProvider
                .otherwise('/dashboard');
        }
    ]);
}