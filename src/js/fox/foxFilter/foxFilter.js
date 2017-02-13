import foxFilterStyle from './foxFilter.css';

export default module => module.directive('foxFilter', [
    'foxFactory',
    function(Fox) {
        return {
            template: require('./foxFilter.html'),
            link: {
                pre: preLink
            },
        };

        function preLink(scope) {
            scope.fields = Fox.getFields();
        }
    }
]).filter('filterByField',
    function() {
        return function(items, field, value) {
            switch(field) {
                case 'age': {
                    if (value === '') {
                        return items;
                    }

                    return items.filter(item => item[field] === parseInt(value, 10));
                }
                default: {
                    return items.filter(item => item[field].includes(value));
                }
            }
        }
    }
);