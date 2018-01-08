exports = module.react.createControl({
    'render': function (state, actions) {
        "use strict";

        var output = [];

        output.push(
            <div key="users-container" className="users-control">

                <iron-form key="input-container">
                    <form action={actions.addUser}>
                        <input type="text" key="input" value={state.name} onChange={actions.handleChange}/>
                    </form>
                </iron-form>

                <div key="users-list" className="users-list">
                    {state.fetched === true ?
                        <ul>
                            {state.entries.map(
                                u => (
                                    <paper-item key={u.id}>
                                        <iron-icon icon="star" slot="item-icon"/>
                                        {u.name}
                                        <button data-id={u.id} className="delete-btn" onClick={actions.removeUser}>X
                                        </button>
                                    </paper-item>
                                )
                            )}
                        </ul> : 'loading'
                    }
                </div>
            </div>
        );

        return (
            <div>Render: {output}</div>
        );

    }
});