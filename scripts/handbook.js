for (var i in sections) {
    var section = sections[i];
    $.ajax({
        type: 'GET',
        async: false,
        url: section + '.html',
        error: function() {
        },
        success: function(data) {
            $('#' + section).html(data);
        }
    });
}

$('a').click(function() {
    var adjustment = 73;
    var speed = 1;
    var header = this.hash;
    $('html,body').animate({
        scrollTop: $(header).offset().top - adjustment
    }, speed);
});

function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);

    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
    show('page', true);
    show('loading', false);
});