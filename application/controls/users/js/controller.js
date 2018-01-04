function Controller(change, dependencies, properties, specs) {
    "use strict";

    // Defining users property
    var users = new dependencies.model.Users();
    Object.defineProperty(this, 'users', {
        'get': function () {
            return users;
        }
    });

    users.fetch();

    // Defining ready property
    Object.defineProperty(this, 'ready', {
        'get': function () {
            return true;
        }
    });

}
