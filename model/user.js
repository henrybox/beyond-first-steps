function User(id) {
    "use strict";

    var events = new Events({'bind': this});

    var users = {
        '1': 'Funes Mori',
        '2': 'Benedeto',
        '3': 'Cavenaghi'
    };

    Object.defineProperty(this, 'id', {
        'get': function () {
            return id;
        }
    });

    Object.defineProperty(this, 'name', {
        'get': function () {
            return users[id];
        }
    });

}
