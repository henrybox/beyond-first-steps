function User(id) {
    "use strict";

    var events = new Events({'bind': this});

    Object.defineProperty(this, 'id', {
        'get': function () {
            return id;
        }
    });

    var name;
    Object.defineProperty(this, 'name', {
        'get': function () {
            return users[id];
        },
        'set': function (value) {

            if (name === value) {
                return;
            }

            name = value;
            events.trigger('change');

        }
    });

}
