require('angular-ui-router');
require('angular-ui-bootstrap');

const app = angular.module('app', ['ui.router', 'ui.bootstrap']);

require('./js/navigation/navigation').default(app);
require('./js/fox/foxProfile/foxProfile').default(app);
require('./js/fox/foxFactory/foxFactory').default(app);
require('./js/fox/foxDashboard/foxDashboard').default(app);
require('./js/fox/createFoxProfile/createFoxProfile').default(app);
require('./js/fox/editFoxProfile/editFoxProfile').default(app);
require('./js/router/router').default(app);
require('./js/fox/foxFilter/foxFilter').default(app);
require('./js/modalFactory/modalFactory').default(app);