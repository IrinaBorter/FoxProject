export default module => {
    module.factory('foxFactory', [
        function() {
            const foxesArray = [
                {
                    id: 1,
                    name: 'Name 1',
                    age: 5,
                    birthday: new Date(2012, 2, 18),
                    color: 'ginger',
                    image: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/02/juniper-fox-happiest-instagram-9.jpg'
                },
                {
                    id: 2,
                    name: 'Name 2',
                    age: 3,
                    birthday: new Date(2011, 10, 11),
                    color: 'ginger',
                    image: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/02/juniper-fox-happiest-instagram-9.jpg'
                },
                {
                    id: 3,
                    name: 'Name 3',
                    age: 7,
                    birthday: new Date(2010, 4, 8),
                    color: 'ginger',
                    image: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/02/juniper-fox-happiest-instagram-9.jpg'
                },
                {
                    id: 4,
                    name: 'Name 1',
                    age: 5,
                    birthday: new Date(2012, 2, 18),
                    color: 'ginger',
                    image: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/02/juniper-fox-happiest-instagram-9.jpg'
                },
                {
                    id: 5,
                    name: 'Name 2',
                    age: 3,
                    birthday: new Date(2011, 10, 11),
                    color: 'ginger',
                    image: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/02/juniper-fox-happiest-instagram-9.jpg'
                },
                {
                    id: 6,
                    name: 'Name 3',
                    age: 7,
                    birthday: new Date(2010, 4, 8),
                    color: 'ginger',
                    image: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/02/juniper-fox-happiest-instagram-9.jpg'
                },
                {
                    id: 7,
                    name: 'Name 1',
                    age: 5,
                    birthday: new Date(2012, 2, 18),
                    color: 'ginger',
                    image: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/02/juniper-fox-happiest-instagram-9.jpg'
                },
                {
                    id: 8,
                    name: 'Name 2',
                    age: 3,
                    birthday: new Date(2011, 10, 11),
                    color: 'ginger',
                    image: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/02/juniper-fox-happiest-instagram-9.jpg'
                },
                {
                    id: 9,
                    name: 'Name 3',
                    age: 7,
                    birthday: new Date(2010, 4, 8),
                    color: 'ginger',
                    image: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/02/juniper-fox-happiest-instagram-9.jpg'
                },
            ];
            const foxesColors = ['red', 'grey', 'ginger', 'blue', 'black', 'green', 'pink', 'yellow'];
            const DEFAULT_IMAGE = 'http://static.boredpanda.com/blog/wp-content/uploads/2016/02/juniper-fox-happiest-instagram-9.jpg';

            function getFoxes() {
                return foxesArray;
            }

            function getFoxesColors() {
                return foxesColors;
            }

            function add(fox) {
                fox.id = foxesArray.length + 1;
                foxesArray.push(fox);
            }

            function remove(fox) {
                const index = foxesArray.indexOf(fox);

                if (index >= 0 && index < foxesArray.length) {
                    foxesArray.splice(index , 1);
                }
            }

            function at(id) {
                return foxesArray.filter(item => item.id === id)[0];
            }

            function indexOf(fox) {
                return foxesArray.indexOf(fox);
            }

            function edit(newFox) {
                foxesArray.forEach((fox, index, array) => {
                    if (fox.id === newFox.id) {
                        array[index] = newFox;
                    }
                });
            }

            function getDefaultImage() {
                return DEFAULT_IMAGE;
            }

            return {
                getFoxes,
                add,
                remove,
                at,
                indexOf,
                edit,
                getDefaultImage,
                getFoxesColors
            };
        }
    ]);
}