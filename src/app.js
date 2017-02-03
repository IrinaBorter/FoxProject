require('angular-ui-router');

const app = angular.module('app', ['ui.router']);

require('./js/navigation/navigation').default(app);
require('./js/fox/foxProfile/foxProfile').default(app);
require('./js/fox/foxFactory/foxFactory').default(app);
require('./js/fox/foxDashboard/foxDashboard').default(app);
require('./js/fox/createFoxProfile/createFoxProfile').default(app);
require('./js/router/router').default(app);