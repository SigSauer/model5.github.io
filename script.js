//

$(window).scroll(function () {
    $("body").css("background-position","50% " + ($(this).scrollTop() / 1.5) + "px");
});