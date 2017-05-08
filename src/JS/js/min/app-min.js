!function ($, a, i) {
    $(a).ready(function () {
        $(".slider").flexslider({
            animation: "fade",
            controlNav: !0,
            directionNav: !1,
            manualControls: ".flex-control-nav li"
        }), $(".menu-toggle").click(function () {
            $(".main-navigation .menu").slideToggle()
        }), $("[data-bg-color]").each(function () {
            var a = $(this).data("bg-color");
            $(this).css("background-color", a)
        }), $("[data-background]").each(function () {
            var a = $(this).data("background");
            $(this).css("background-image", "url(" + a + ")")
        });
        var a = $(".filterable-items");
        a.imagesLoaded(function () {
            a.isotope({
                filter: "*",
                layoutMode: "fitRows",
                animationOptions: {duration: 750, easing: "linear", queue: !1}
            })
        }), $(".filterable-nav a").click(function (i) {
            i.preventDefault(), $(".filterable-nav .current").removeClass("current"), $(this).addClass("current");
            var n = $(this).attr("data-filter");
            return a.isotope({filter: n, animationOptions: {duration: 750, easing: "linear", queue: !1}}), !1
        }), $(".mobile-filter").change(function () {
            var i = $(this).val();
            return a.isotope({filter: i, animationOptions: {duration: 750, easing: "linear", queue: !1}}), !1
        }), (new WOW).init()
    }), $(i).ready(function () {
    })
}(jQuery, document, window);