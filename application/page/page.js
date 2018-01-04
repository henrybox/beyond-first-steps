function Page($container, vdir, dependencies) {
    "use strict";

    var texts = {
        'title': 'Users list'
    };
    var $page = $(module.render('page', texts));
    $container
        .attr('id', 'user-control')
        .append($page);

    var control = $container.children('user-control');

}
