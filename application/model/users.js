function Users() {
    "use strict";

    var events = new Events({'bind': this});

    var entries;
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

        setTimeout(function () {

            entries = [
                {
                    'id': 1,
                    'name': 'Guido'
                },
                {
                    'id': 2,
                    'name': 'Juan'
                }];

            fetching = false;
            fetched = true;
            events.trigger('change');

        }, 3000);

    };

}
