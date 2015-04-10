$(document).ready(function () {
    var $horizontal = $('#horizontal');

    $(window).scroll(function () {
        var s = $(this).scrollTop();
        $horizontal.css({
            'left': s
        });
    });
});
