function loader() {
    $(window).on("load", function () {
        $('.main-hero .background').addClass('active');
        $("#ctn-preloader").addClass("loaded"),
            $("#ctn-preloader").hasClass("loaded") &&
                $("#preloader")
                    .delay(900)
                    .queue(function () {
                        AOS.init();
                        $(this).remove();
                    });
    });
}
loader();