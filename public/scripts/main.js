window.onscroll = function() {scrollFunction()};

  $(document).on("scroll", function () {
        if
                ($(document).scrollTop() > 150) {
            $(".navbar-sticky").addClass("fixed-top");
            $(".nav-link").removeClass("tw");
            $('#imag').attr('src','hashlite-logo-color.png');
        } else
        {
            $(".navbar-sticky").removeClass("fixed-top");
            $(".nav-link").addClass("tw");
            $('#imag').attr('src','hashlite-logo-white.png');

        }
    });
