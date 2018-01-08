function Controller(change, dependencies, properties, specs) {
    "use strict";

    // Defining users property
    var users = new dependencies.model.Users();
    Object.defineProperty(this, 'users', {
        'get': function () {
            return users;
        }
    });

    users.bind('change', change);
    users.fetch();

    var name;
    Object.defineProperty(this, 'name', {
        'get': function () {
            return name;
        },
        'set': function (value) {
            name = value;
            events.trigger('change');
        }
    });

    // Defining ready property
    Object.defineProperty(this, 'ready', {
        'get': function () {
            return true;
        }
    });

}
