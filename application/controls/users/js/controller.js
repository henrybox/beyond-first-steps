function Controller(change, dependencies, properties, specs) {
    "use strict";

    // Referencing Users model.
    var Users = dependencies.model.Users;

    // Defining users property.
    var users;
    Object.defineProperty(this, 'users', {
        'get': function () {
            return users;
        }
    });

    // Defining ready property.
    Object.defineProperty(this, 'ready', {
        'get': function () {
            return !!user;
        }
    });

    // Update function - Stays the same?
    this.update = function () {

        if (user && properties.userId === user.id) {
            return user;
        }

        if (user) {
            user.unbind('change', change);
        }

        if (!properties.userId) {
            user = undefined;
        }
        else {
            user = new User(properties.userId);
            user.bind('change', change);
        }

        return user;

    };

}
