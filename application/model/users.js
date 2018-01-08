function Users() {
    "use strict";

    var events = new Events({'bind': this});

    var entries;
    var newEntry;
    var inputContent;

    Object.defineProperty(this, 'entries', {
        'get': function () {
            return entries;
        }
    });

    var fetching, fetched;
    Object.defineProperty(this, 'fetching', {
        'get': function () {
            return !!fetching;
        }
    });
    Object.defineProperty(this, 'fetched', {
        'get': function () {
            return !!fetched;
        }
    });

    this.fetch = function () {

        fetching = true;
        events.trigger('change');

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    // Examine the text in the response
                    response.json().then(function (data) {
                        entries = data;

                        fetching = false;
                        fetched = true;
                        events.trigger('change');
                    });
                }
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });

    };

    this.removeUser = function (id) {
        entries = entries.filter(function (u) {
            return u.id !== id;
        });
        events.trigger('change');
    };

    this.handleChange = function(view){
      events.trigger('change');
    };

    this.addUser = function(name){
        newEntry = {name: name};
        if(newEntry.name !== undefined && newEntry.name.length > 0){
            entries.push(newEntry);
            events.trigger('change');
        }
    };



}
