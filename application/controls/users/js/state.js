function updateState(controller, state) {
    "use strict";

    // Should never be an object with methods.
    state.users = controller.users;

}
