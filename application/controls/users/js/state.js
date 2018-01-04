function updateState(controller, state) {
    "use strict";

    // Should never be an object with methods.
    var collection = controller.users;

    state.fetching = collection.fetching;
    state.entries = collection.entries;

}
