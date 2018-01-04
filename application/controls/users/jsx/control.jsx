exports = module.react.createControl({
    'render': function (state, actions) {
        "use strict";

        var output = [];

        console.log(state);

        if (!state.ready) {
            output.push(
                <paper-button key="button" raised onClick={actions.initialise}>
                    Initialise
                </paper-button>
            );
        }
        else {
            output.push(
                <paper-button key="button" raised onClick={actions.reset}>Reset</paper-button>
            );
        }

        output.push(
            <div key="label" className="message">
                {(state.ready) ? 'Hello: ' + state.users : 'Control not initialised'}
            </div>
        );

        return (
            <div>Render: {output}</div>
        );

    }
});
