function Actions(controller, properties) {
    "use strict";

    this.removeUser = function (event) {
        var id = $(event.currentTarget).data('id');
        return controller.users.removeUser(id);
    };

    this.handleChange = function(event){
        var value = $(event.currentTarget).val();
        controller.inputContent = value;
    };

    this.addUser = function(event){
        event.preventDefault();
        var name = $(event.currentTarget).value;
        controller.users.addUser(name);
        return false;
    };

}