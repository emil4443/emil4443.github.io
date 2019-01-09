$(function () {
    function a() {
        var a = this.getBoundingClientRect(),
            b = window.innerHeight || document.documentElement.clientHeight;
        return a.bottom < 0 || a.top > b
    }
    $(window).on("load", function () {
        $(".stagger-p > p").addClass("stagger"), $(".stagger").filter(a).removeClass("stagger"), $(".stagger").velocity("transition.GVIn", {
            stagger: 40,
            duration: 1e3,
            delay: 0,
            drag: !0
        })
    }), $.Velocity.RegisterEffect("transition.GVIn", {
        defaultDuration: 600,
        calls: [[{
            opacity: [1, 0],
            rotateX: [0, -14],
            translateZ: [0, 100],
            translateY: [0, 10],
            scale: [1, .98]
        }]],
        reset: {
            opacity: 1,
            rotateX: 0,
            translateZ: 0,
            translateY: 0,
            scale: 1
        }
    });
    var b = !1;
    $("a[href^=mailto]").on("click", function () {
        b = !0
    }), window.onbeforeunload = function () {
        b || $("body").addClass("unloading unloading--start"), b = !1
    }, document.body.onpageshow = function () {
        $("body").removeClass("unloading unloading--start")
    }
}), $(function () {
    function a() {
        var a = $(this);
        return d(a), e(a), b(), !1
    }

    function b() {
        g.addClass("companyModal--offstage"), setTimeout(function () {
            g.addClass("companyModal--visible")
        }, 20)
    }

    function c() {
        g.removeClass("companyModal--visible"), setTimeout(function () {
            g.removeClass("companyModal--offstage")
        }, f)
    }

    function d(a) {
        var b = a.attr("data-color");
        b ? (h.css({
            "background-color": b
        }), a.attr("data-colorIsDark") ? h.css({
            color: "#fff"
        }) : h.css({
            color: "#222"
        })) : h.css({
            "background-color": "#222",
            color: "#fff"
        })
    }

    function e(a) {
        $(".companyModal-name").html(a.attr("data-name")), $(".companyModal-about").html(a.attr("data-about"));
        var b = a.attr("data-exit");
        b ? $(".companyModal-exit").html(b).show() : $(".companyModal-exit").hide();
        var c = a.attr("data-investors");
        c ? $(".companyModal-investors").html("Investors: " + c).show() : $(".companyModal-investors").hide();
        var d = a.attr("href");
        d ? $(".companyModal-button").attr("href", d).html(d.replace(/https?:\/\/(www\.)?/, "")).show() : $(".companyModal-button").hide()
    }
    var f = 300,
        g = $(".companyModal"),
        h = $(".companyModal-box");
    g.css({
        transitionDuration: f / 2 + "ms"
    }), h.css({
        transitionDuration: f + "ms"
    }), g.click(c), $(".js-companyModalLink").click(a)
}), $(function () {
    function a(a) {
        var b = e.slick("getSlick");
        return $(b.$slides[a])
    }

    function b(a) {
        var b = a.attr("data-graphicId"),
            c = $('.slashGraphic-slide[data-id="' + b + '"]'),
            d = $('.slashGraphic-slide[data-id!="' + b + '"]');
        d.css({
            opacity: 0,
            display: "block",
            transform: "scaleX(0.9) scaleY(0.95) rotateZ(1deg)"
        }), c.css({
            opacity: 1,
            display: "block",
            transform: "scaleX(1) scaleY(1)"
        }), setTimeout(function () {
            c.css({
                opacity: 1,
                display: "block",
                transform: "scaleX(1) scaleY(1)"
            })
        }, 0), setTimeout(function () {
            d.css({
                opacity: 0,
                display: "block"
            })
        }, 500)
    }

    function c(a) {
        f = a.attr("data-color"), $(".theme-textColor").css({
            color: f
        }), $(".theme-fill").css({
            fill: f
        }), $(".button--themed").css({
            background: f
        })
    }

    function d(a) {
        "mouseenter" === a.type ? $(this).css({
            color: f
        }) : $(this).css({
            color: "#999"
        })
    }
    if ("/" == location.pathname) {
        var e = $(".home-carousel");
        if (0 != e.length) {
            var f = "#666";
            e.slick({
                arrows: !1,
                dots: !0,
                fade: !0,
                speed: 500,
                responsive: [{
                    breakpoint: 740,
                    settings: {
                        fade: !1
                    }
                }]
            }), c(a(0)), b(a(0)), setTimeout(function () {
                $(".nav-items").addClass("nav-items--animateColor"), $(".slashGraphic").addClass("slashGraphic--animated")
            }, 200), e.on("beforeChange", function (d, e, f, g) {
                var h = a(g);
                b(h), c(h)
            }), $(".slashGraphic").click(function () {
                e.slick("slickNext")
            }), $(".theme-colorHover").hover(d)
        }
    }
}), $(function () {
    function a() {
        i.width = Math.max($(window).innerWidth(), 600), i.height = Math.max($(window).innerHeight(), 400)
    }

    function b() {
        var a = j.x / i.width * 2 - 1,
            b = j.y / i.height * 2 - 1,
            c = a * d,
            l = b * d;
        k.x = k.x * e + c * (1 - e), k.y = k.y * e + l * (1 - e);
        var m = "translate(" + k.x + "px," + k.y + "px)",
            n = "translate(" + k.x * f + "px," + k.y * f + "px)";
        g.css({
            transform: m
        }), h.css({
            transform: n
        })
    }
    var c = 40,
        d = 10,
        e = .93,
        f = .32,
        g = $(".slashGraphic-slash"),
        h = $(".slashGraphic-backImage");
    if (0 != g.length && 0 != h && Modernizr.backgroundblendmode) {
        var i = {
                width: 400,
                height: 600
            },
            j = {
                x: 0,
                y: 0
            },
            k = {
                x: 0,
                y: 0
            };
        a(), setInterval(b, 1e3 / c), $(window).resize(a), $(document).mousemove(function (a) {
            j.x = a.clientX, j.y = a.clientY
        })
    }
}), $(function () {
    $(".portfolioSection-moreLink").click(function () {
        var a = $(this).parent().siblings(".companyList"),
            b = $(".companyList-item", a);
        a.is(":visible") ? ($(".portfolioSection-showLabel", this).show(), $(".portfolioSection-hideLabel", this).hide(), a.fadeOut(300)) : ($(".portfolioSection-showLabel", this).hide(), $(".portfolioSection-hideLabel", this).show(), b.addClass("animate-appear"), b.each(function (a, b) {
            $(b).css({
                transitionDelay: 5 * a + "ms",
                transitionDuration: 400 + 10 * a + "ms"
            })
        }), a.show(), setTimeout(function () {
            a.addClass("animate--start")
        }, 50), setTimeout(function () {
            b.removeClass("animate-appear"), a.removeClass("animate--start")
        }, 2e3))
    })
});
