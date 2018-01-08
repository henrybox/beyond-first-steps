function Actions(controller, properties) {
    "use strict";

    this.removeUser = function (event) {
        var id = $(event.currentTarget).data('id');
        return controller.users.removeUser(id);
    };

    this.changeName = function (event) {
        var value = $(event.currentTarget).val();
        controller.name = value;
    };

    this.addUser = function (event) {
        event.preventDefault();
        controller.users.addUser(controller.name);
        return false;
    };

}