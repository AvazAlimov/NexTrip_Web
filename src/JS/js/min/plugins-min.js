!function (t) {
    t.flexslider = function (e, n) {
        var i = t(e);
        i.vars = t.extend({}, t.flexslider.defaults, n);
        var o, a = i.vars.namespace, s = window.navigator && window.navigator.msPointerEnabled && window.MSGesture, r = ("ontouchstart" in window || s || window.DocumentTouch && document instanceof DocumentTouch) && i.vars.touch, l = "click touchend MSPointerUp", u = "", c = "vertical" === i.vars.direction, d = i.vars.reverse, p = i.vars.itemWidth > 0, h = "fade" === i.vars.animation, f = "" !== i.vars.asNavFor, v = {}, m = !0;
        t.data(e, "flexslider", i), v = {
            init: function () {
                i.animating = !1, i.currentSlide = parseInt(i.vars.startAt ? i.vars.startAt : 0, 10), isNaN(i.currentSlide) && (i.currentSlide = 0), i.animatingTo = i.currentSlide, i.atEnd = 0 === i.currentSlide || i.currentSlide === i.last, i.containerSelector = i.vars.selector.substr(0, i.vars.selector.search(" ")), i.slides = t(i.vars.selector, i), i.container = t(i.containerSelector, i), i.count = i.slides.length, i.syncExists = t(i.vars.sync).length > 0, "slide" === i.vars.animation && (i.vars.animation = "swing"), i.prop = c ? "top" : "marginLeft", i.args = {}, i.manualPause = !1, i.stopped = !1, i.started = !1, i.startTimeout = null, i.transitions = !i.vars.video && !h && i.vars.useCSS && function () {
                        var t = document.createElement("div"), e = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                        for (var n in e)if (void 0 !== t.style[e[n]])return i.pfx = e[n].replace("Perspective", "").toLowerCase(), i.prop = "-" + i.pfx + "-transform", !0;
                        return !1
                    }(), i.ensureAnimationEnd = "", "" !== i.vars.controlsContainer && (i.controlsContainer = t(i.vars.controlsContainer).length > 0 && t(i.vars.controlsContainer)), "" !== i.vars.manualControls && (i.manualControls = t(i.vars.manualControls).length > 0 && t(i.vars.manualControls)), i.vars.randomize && (i.slides.sort(function () {
                    return Math.round(Math.random()) - .5
                }), i.container.empty().append(i.slides)), i.doMath(), i.setup("init"), i.vars.controlNav && v.controlNav.setup(), i.vars.directionNav && v.directionNav.setup(), i.vars.keyboard && (1 === t(i.containerSelector).length || i.vars.multipleKeyboard) && t(document).bind("keyup", function (t) {
                    var e = t.keyCode;
                    if (!i.animating && (39 === e || 37 === e)) {
                        var n = 39 === e ? i.getTarget("next") : 37 === e ? i.getTarget("prev") : !1;
                        i.flexAnimate(n, i.vars.pauseOnAction)
                    }
                }), i.vars.mousewheel && i.bind("mousewheel", function (t, e) {
                    t.preventDefault();
                    var n = i.getTarget(0 > e ? "next" : "prev");
                    i.flexAnimate(n, i.vars.pauseOnAction)
                }), i.vars.pausePlay && v.pausePlay.setup(), i.vars.slideshow && i.vars.pauseInvisible && v.pauseInvisible.init(), i.vars.slideshow && (i.vars.pauseOnHover && i.hover(function () {
                    i.manualPlay || i.manualPause || i.pause()
                }, function () {
                    i.manualPause || i.manualPlay || i.stopped || i.play()
                }), i.vars.pauseInvisible && v.pauseInvisible.isHidden() || (i.vars.initDelay > 0 ? i.startTimeout = setTimeout(i.play, i.vars.initDelay) : i.play())), f && v.asNav.setup(), r && i.vars.touch && v.touch(), (!h || h && i.vars.smoothHeight) && t(window).bind("resize orientationchange focus", v.resize), i.find("img").attr("draggable", "false"), setTimeout(function () {
                    i.vars.start(i)
                }, 200)
            }, asNav: {
                setup: function () {
                    i.asNav = !0, i.animatingTo = Math.floor(i.currentSlide / i.move), i.currentItem = i.currentSlide, i.slides.removeClass(a + "active-slide").eq(i.currentItem).addClass(a + "active-slide"), s ? (e._slider = i, i.slides.each(function () {
                        var e = this;
                        e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", function (t) {
                            t.preventDefault(), t.currentTarget._gesture && t.currentTarget._gesture.addPointer(t.pointerId)
                        }, !1), e.addEventListener("MSGestureTap", function (e) {
                            e.preventDefault();
                            var n = t(this), o = n.index();
                            t(i.vars.asNavFor).data("flexslider").animating || n.hasClass("active") || (i.direction = i.currentItem < o ? "next" : "prev", i.flexAnimate(o, i.vars.pauseOnAction, !1, !0, !0))
                        })
                    })) : i.slides.on(l, function (e) {
                        e.preventDefault();
                        var n = t(this), o = n.index(), s = n.offset().left - t(i).scrollLeft();
                        0 >= s && n.hasClass(a + "active-slide") ? i.flexAnimate(i.getTarget("prev"), !0) : t(i.vars.asNavFor).data("flexslider").animating || n.hasClass(a + "active-slide") || (i.direction = i.currentItem < o ? "next" : "prev", i.flexAnimate(o, i.vars.pauseOnAction, !1, !0, !0))
                    })
                }
            }, controlNav: {
                setup: function () {
                    i.manualControls ? v.controlNav.setupManual() : v.controlNav.setupPaging()
                }, setupPaging: function () {
                    var e, n, o = "thumbnails" === i.vars.controlNav ? "control-thumbs" : "control-paging", s = 1;
                    if (i.controlNavScaffold = t('<ol class="' + a + "control-nav " + a + o + '"></ol>'), i.pagingCount > 1)for (var r = 0; r < i.pagingCount; r++) {
                        if (n = i.slides.eq(r), e = "thumbnails" === i.vars.controlNav ? '<img src="' + n.attr("data-thumb") + '"/>' : "<a>" + s + "</a>", "thumbnails" === i.vars.controlNav && !0 === i.vars.thumbCaptions) {
                            var c = n.attr("data-thumbcaption");
                            "" != c && void 0 != c && (e += '<span class="' + a + 'caption">' + c + "</span>")
                        }
                        i.controlNavScaffold.append("<li>" + e + "</li>"), s++
                    }
                    i.controlsContainer ? t(i.controlsContainer).append(i.controlNavScaffold) : i.append(i.controlNavScaffold), v.controlNav.set(), v.controlNav.active(), i.controlNavScaffold.delegate("a, img", l, function (e) {
                        if (e.preventDefault(), "" === u || u === e.type) {
                            var n = t(this), o = i.controlNav.index(n);
                            n.hasClass(a + "active") || (i.direction = o > i.currentSlide ? "next" : "prev", i.flexAnimate(o, i.vars.pauseOnAction))
                        }
                        "" === u && (u = e.type), v.setToClearWatchedEvent()
                    })
                }, setupManual: function () {
                    i.controlNav = i.manualControls, v.controlNav.active(), i.controlNav.bind(l, function (e) {
                        if (e.preventDefault(), "" === u || u === e.type) {
                            var n = t(this), o = i.controlNav.index(n);
                            n.hasClass(a + "active") || (i.direction = o > i.currentSlide ? "next" : "prev", i.flexAnimate(o, i.vars.pauseOnAction))
                        }
                        "" === u && (u = e.type), v.setToClearWatchedEvent()
                    })
                }, set: function () {
                    var e = "thumbnails" === i.vars.controlNav ? "img" : "a";
                    i.controlNav = t("." + a + "control-nav li " + e, i.controlsContainer ? i.controlsContainer : i)
                }, active: function () {
                    i.controlNav.removeClass(a + "active").eq(i.animatingTo).addClass(a + "active")
                }, update: function (e, n) {
                    i.pagingCount > 1 && "add" === e ? i.controlNavScaffold.append(t("<li><a>" + i.count + "</a></li>")) : 1 === i.pagingCount ? i.controlNavScaffold.find("li").remove() : i.controlNav.eq(n).closest("li").remove(), v.controlNav.set(), i.pagingCount > 1 && i.pagingCount !== i.controlNav.length ? i.update(n, e) : v.controlNav.active()
                }
            }, directionNav: {
                setup: function () {
                    var e = t('<ul class="' + a + 'direction-nav"><li><a class="' + a + 'prev" href="#">' + i.vars.prevText + '</a></li><li><a class="' + a + 'next" href="#">' + i.vars.nextText + "</a></li></ul>");
                    i.controlsContainer ? (t(i.controlsContainer).append(e), i.directionNav = t("." + a + "direction-nav li a", i.controlsContainer)) : (i.append(e), i.directionNav = t("." + a + "direction-nav li a", i)), v.directionNav.update(), i.directionNav.bind(l, function (e) {
                        e.preventDefault();
                        var n;
                        ("" === u || u === e.type) && (n = i.getTarget(t(this).hasClass(a + "next") ? "next" : "prev"), i.flexAnimate(n, i.vars.pauseOnAction)), "" === u && (u = e.type), v.setToClearWatchedEvent()
                    })
                }, update: function () {
                    var t = a + "disabled";
                    1 === i.pagingCount ? i.directionNav.addClass(t).attr("tabindex", "-1") : i.vars.animationLoop ? i.directionNav.removeClass(t).removeAttr("tabindex") : 0 === i.animatingTo ? i.directionNav.removeClass(t).filter("." + a + "prev").addClass(t).attr("tabindex", "-1") : i.animatingTo === i.last ? i.directionNav.removeClass(t).filter("." + a + "next").addClass(t).attr("tabindex", "-1") : i.directionNav.removeClass(t).removeAttr("tabindex")
                }
            }, pausePlay: {
                setup: function () {
                    var e = t('<div class="' + a + 'pauseplay"><a></a></div>');
                    i.controlsContainer ? (i.controlsContainer.append(e), i.pausePlay = t("." + a + "pauseplay a", i.controlsContainer)) : (i.append(e), i.pausePlay = t("." + a + "pauseplay a", i)), v.pausePlay.update(i.vars.slideshow ? a + "pause" : a + "play"), i.pausePlay.bind(l, function (e) {
                        e.preventDefault(), ("" === u || u === e.type) && (t(this).hasClass(a + "pause") ? (i.manualPause = !0, i.manualPlay = !1, i.pause()) : (i.manualPause = !1, i.manualPlay = !0, i.play())), "" === u && (u = e.type), v.setToClearWatchedEvent()
                    })
                }, update: function (t) {
                    "play" === t ? i.pausePlay.removeClass(a + "pause").addClass(a + "play").html(i.vars.playText) : i.pausePlay.removeClass(a + "play").addClass(a + "pause").html(i.vars.pauseText)
                }
            }, touch: function () {
                function t(t) {
                    i.animating ? t.preventDefault() : (window.navigator.msPointerEnabled || 1 === t.touches.length) && (i.pause(), m = c ? i.h : i.w, y = Number(new Date), b = t.touches[0].pageX, x = t.touches[0].pageY, v = p && d && i.animatingTo === i.last ? 0 : p && d ? i.limit - (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo : p && i.currentSlide === i.last ? i.limit : p ? (i.itemW + i.vars.itemMargin) * i.move * i.currentSlide : d ? (i.last - i.currentSlide + i.cloneOffset) * m : (i.currentSlide + i.cloneOffset) * m, u = c ? x : b, f = c ? b : x, e.addEventListener("touchmove", n, !1), e.addEventListener("touchend", o, !1))
                }

                function n(t) {
                    b = t.touches[0].pageX, x = t.touches[0].pageY, g = c ? u - x : u - b, w = c ? Math.abs(g) < Math.abs(b - f) : Math.abs(g) < Math.abs(x - f);
                    var e = 500;
                    (!w || Number(new Date) - y > e) && (t.preventDefault(), !h && i.transitions && (i.vars.animationLoop || (g /= 0 === i.currentSlide && 0 > g || i.currentSlide === i.last && g > 0 ? Math.abs(g) / m + 2 : 1), i.setProps(v + g, "setTouch")))
                }

                function o() {
                    if (e.removeEventListener("touchmove", n, !1), i.animatingTo === i.currentSlide && !w && null !== g) {
                        var t = d ? -g : g, a = i.getTarget(t > 0 ? "next" : "prev");
                        i.canAdvance(a) && (Number(new Date) - y < 550 && Math.abs(t) > 50 || Math.abs(t) > m / 2) ? i.flexAnimate(a, i.vars.pauseOnAction) : h || i.flexAnimate(i.currentSlide, i.vars.pauseOnAction, !0)
                    }
                    e.removeEventListener("touchend", o, !1), u = null, f = null, g = null, v = null
                }

                function a(t) {
                    t.stopPropagation(), i.animating ? t.preventDefault() : (i.pause(), e._gesture.addPointer(t.pointerId), S = 0, m = c ? i.h : i.w, y = Number(new Date), v = p && d && i.animatingTo === i.last ? 0 : p && d ? i.limit - (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo : p && i.currentSlide === i.last ? i.limit : p ? (i.itemW + i.vars.itemMargin) * i.move * i.currentSlide : d ? (i.last - i.currentSlide + i.cloneOffset) * m : (i.currentSlide + i.cloneOffset) * m)
                }

                function r(t) {
                    t.stopPropagation();
                    var n = t.target._slider;
                    if (n) {
                        var i = -t.translationX, o = -t.translationY;
                        return S += c ? o : i, g = S, w = c ? Math.abs(S) < Math.abs(-i) : Math.abs(S) < Math.abs(-o), t.detail === t.MSGESTURE_FLAG_INERTIA ? void setImmediate(function () {
                            e._gesture.stop()
                        }) : void((!w || Number(new Date) - y > 500) && (t.preventDefault(), !h && n.transitions && (n.vars.animationLoop || (g = S / (0 === n.currentSlide && 0 > S || n.currentSlide === n.last && S > 0 ? Math.abs(S) / m + 2 : 1)), n.setProps(v + g, "setTouch"))))
                    }
                }

                function l(t) {
                    t.stopPropagation();
                    var e = t.target._slider;
                    if (e) {
                        if (e.animatingTo === e.currentSlide && !w && null !== g) {
                            var n = d ? -g : g, i = e.getTarget(n > 0 ? "next" : "prev");
                            e.canAdvance(i) && (Number(new Date) - y < 550 && Math.abs(n) > 50 || Math.abs(n) > m / 2) ? e.flexAnimate(i, e.vars.pauseOnAction) : h || e.flexAnimate(e.currentSlide, e.vars.pauseOnAction, !0)
                        }
                        u = null, f = null, g = null, v = null, S = 0
                    }
                }

                var u, f, v, m, g, y, w = !1, b = 0, x = 0, S = 0;
                s ? (e.style.msTouchAction = "none", e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", a, !1), e._slider = i, e.addEventListener("MSGestureChange", r, !1), e.addEventListener("MSGestureEnd", l, !1)) : e.addEventListener("touchstart", t, !1)
            }, resize: function () {
                !i.animating && i.is(":visible") && (p || i.doMath(), h ? v.smoothHeight() : p ? (i.slides.width(i.computedW), i.update(i.pagingCount), i.setProps()) : c ? (i.viewport.height(i.h), i.setProps(i.h, "setTotal")) : (i.vars.smoothHeight && v.smoothHeight(), i.newSlides.width(i.computedW), i.setProps(i.computedW, "setTotal")))
            }, smoothHeight: function (t) {
                if (!c || h) {
                    var e = h ? i : i.viewport;
                    t ? e.animate({height: i.slides.eq(i.animatingTo).height()}, t) : e.height(i.slides.eq(i.animatingTo).height())
                }
            }, sync: function (e) {
                var n = t(i.vars.sync).data("flexslider"), o = i.animatingTo;
                switch (e) {
                    case"animate":
                        n.flexAnimate(o, i.vars.pauseOnAction, !1, !0);
                        break;
                    case"play":
                        n.playing || n.asNav || n.play();
                        break;
                    case"pause":
                        n.pause()
                }
            }, uniqueID: function (e) {
                return e.find("[id]").each(function () {
                    var e = t(this);
                    e.attr("id", e.attr("id") + "_clone")
                }), e
            }, pauseInvisible: {
                visProp: null, init: function () {
                    var t = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document)return "hidden";
                    for (var e = 0; e < t.length; e++)t[e] + "Hidden" in document && (v.pauseInvisible.visProp = t[e] + "Hidden");
                    if (v.pauseInvisible.visProp) {
                        var n = v.pauseInvisible.visProp.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(n, function () {
                            v.pauseInvisible.isHidden() ? i.startTimeout ? clearTimeout(i.startTimeout) : i.pause() : i.started ? i.play() : i.vars.initDelay > 0 ? setTimeout(i.play, i.vars.initDelay) : i.play()
                        })
                    }
                }, isHidden: function () {
                    return document[v.pauseInvisible.visProp] || !1
                }
            }, setToClearWatchedEvent: function () {
                clearTimeout(o), o = setTimeout(function () {
                    u = ""
                }, 3e3)
            }
        }, i.flexAnimate = function (e, n, o, s, l) {
            if (i.vars.animationLoop || e === i.currentSlide || (i.direction = e > i.currentSlide ? "next" : "prev"), f && 1 === i.pagingCount && (i.direction = i.currentItem < e ? "next" : "prev"), !i.animating && (i.canAdvance(e, l) || o) && i.is(":visible")) {
                if (f && s) {
                    var u = t(i.vars.asNavFor).data("flexslider");
                    if (i.atEnd = 0 === e || e === i.count - 1, u.flexAnimate(e, !0, !1, !0, l), i.direction = i.currentItem < e ? "next" : "prev", u.direction = i.direction, Math.ceil((e + 1) / i.visible) - 1 === i.currentSlide || 0 === e)return i.currentItem = e, i.slides.removeClass(a + "active-slide").eq(e).addClass(a + "active-slide"), !1;
                    i.currentItem = e, i.slides.removeClass(a + "active-slide").eq(e).addClass(a + "active-slide"), e = Math.floor(e / i.visible)
                }
                if (i.animating = !0, i.animatingTo = e, n && i.pause(), i.vars.before(i), i.syncExists && !l && v.sync("animate"), i.vars.controlNav && v.controlNav.active(), p || i.slides.removeClass(a + "active-slide").eq(e).addClass(a + "active-slide"), i.atEnd = 0 === e || e === i.last, i.vars.directionNav && v.directionNav.update(), e === i.last && (i.vars.end(i), i.vars.animationLoop || i.pause()), h)r ? (i.slides.eq(i.currentSlide).css({
                    opacity: 0,
                    zIndex: 1
                }), i.slides.eq(e).css({
                    opacity: 1,
                    zIndex: 2
                }), i.wrapup(w)) : (i.slides.eq(i.currentSlide).css({zIndex: 1}).animate({opacity: 0}, i.vars.animationSpeed, i.vars.easing), i.slides.eq(e).css({zIndex: 2}).animate({opacity: 1}, i.vars.animationSpeed, i.vars.easing, i.wrapup)); else {
                    var m, g, y, w = c ? i.slides.filter(":first").height() : i.computedW;
                    p ? (m = i.vars.itemMargin, y = (i.itemW + m) * i.move * i.animatingTo, g = y > i.limit && 1 !== i.visible ? i.limit : y) : g = 0 === i.currentSlide && e === i.count - 1 && i.vars.animationLoop && "next" !== i.direction ? d ? (i.count + i.cloneOffset) * w : 0 : i.currentSlide === i.last && 0 === e && i.vars.animationLoop && "prev" !== i.direction ? d ? 0 : (i.count + 1) * w : d ? (i.count - 1 - e + i.cloneOffset) * w : (e + i.cloneOffset) * w, i.setProps(g, "", i.vars.animationSpeed), i.transitions ? (i.vars.animationLoop && i.atEnd || (i.animating = !1, i.currentSlide = i.animatingTo), i.container.unbind("webkitTransitionEnd transitionend"), i.container.bind("webkitTransitionEnd transitionend", function () {
                        clearTimeout(i.ensureAnimationEnd), i.wrapup(w)
                    }), clearTimeout(i.ensureAnimationEnd), i.ensureAnimationEnd = setTimeout(function () {
                        i.wrapup(w)
                    }, i.vars.animationSpeed + 100)) : i.container.animate(i.args, i.vars.animationSpeed, i.vars.easing, function () {
                        i.wrapup(w)
                    })
                }
                i.vars.smoothHeight && v.smoothHeight(i.vars.animationSpeed)
            }
        }, i.wrapup = function (t) {
            h || p || (0 === i.currentSlide && i.animatingTo === i.last && i.vars.animationLoop ? i.setProps(t, "jumpEnd") : i.currentSlide === i.last && 0 === i.animatingTo && i.vars.animationLoop && i.setProps(t, "jumpStart")), i.animating = !1, i.currentSlide = i.animatingTo, i.vars.after(i)
        }, i.animateSlides = function () {
            !i.animating && m && i.flexAnimate(i.getTarget("next"))
        }, i.pause = function () {
            clearInterval(i.animatedSlides), i.animatedSlides = null, i.playing = !1, i.vars.pausePlay && v.pausePlay.update("play"), i.syncExists && v.sync("pause")
        }, i.play = function () {
            i.playing && clearInterval(i.animatedSlides), i.animatedSlides = i.animatedSlides || setInterval(i.animateSlides, i.vars.slideshowSpeed), i.started = i.playing = !0, i.vars.pausePlay && v.pausePlay.update("pause"), i.syncExists && v.sync("play")
        }, i.stop = function () {
            i.pause(), i.stopped = !0
        }, i.canAdvance = function (t, e) {
            var n = f ? i.pagingCount - 1 : i.last;
            return e ? !0 : f && i.currentItem === i.count - 1 && 0 === t && "prev" === i.direction ? !0 : f && 0 === i.currentItem && t === i.pagingCount - 1 && "next" !== i.direction ? !1 : t !== i.currentSlide || f ? i.vars.animationLoop ? !0 : i.atEnd && 0 === i.currentSlide && t === n && "next" !== i.direction ? !1 : i.atEnd && i.currentSlide === n && 0 === t && "next" === i.direction ? !1 : !0 : !1
        }, i.getTarget = function (t) {
            return i.direction = t, "next" === t ? i.currentSlide === i.last ? 0 : i.currentSlide + 1 : 0 === i.currentSlide ? i.last : i.currentSlide - 1
        }, i.setProps = function (t, e, n) {
            var o = function () {
                var n = t ? t : (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo, o = function () {
                    if (p)return "setTouch" === e ? t : d && i.animatingTo === i.last ? 0 : d ? i.limit - (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo : i.animatingTo === i.last ? i.limit : n;
                    switch (e) {
                        case"setTotal":
                            return d ? (i.count - 1 - i.currentSlide + i.cloneOffset) * t : (i.currentSlide + i.cloneOffset) * t;
                        case"setTouch":
                            return d ? t : t;
                        case"jumpEnd":
                            return d ? t : i.count * t;
                        case"jumpStart":
                            return d ? i.count * t : t;
                        default:
                            return t
                    }
                }();
                return -1 * o + "px"
            }();
            i.transitions && (o = c ? "translate3d(0," + o + ",0)" : "translate3d(" + o + ",0,0)", n = void 0 !== n ? n / 1e3 + "s" : "0s", i.container.css("-" + i.pfx + "-transition-duration", n), i.container.css("transition-duration", n)), i.args[i.prop] = o, (i.transitions || void 0 === n) && i.container.css(i.args), i.container.css("transform", o)
        }, i.setup = function (e) {
            if (h)i.slides.css({
                width: "100%",
                "float": "left",
                marginRight: "-100%",
                position: "relative"
            }), "init" === e && (r ? i.slides.css({
                opacity: 0,
                display: "block",
                webkitTransition: "opacity " + i.vars.animationSpeed / 1e3 + "s ease",
                zIndex: 1
            }).eq(i.currentSlide).css({opacity: 1, zIndex: 2}) : i.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(i.currentSlide).css({zIndex: 2}).animate({opacity: 1}, i.vars.animationSpeed, i.vars.easing)), i.vars.smoothHeight && v.smoothHeight(); else {
                var n, o;
                "init" === e && (i.viewport = t('<div class="' + a + 'viewport"></div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(i).append(i.container), i.cloneCount = 0, i.cloneOffset = 0, d && (o = t.makeArray(i.slides).reverse(), i.slides = t(o), i.container.empty().append(i.slides))), i.vars.animationLoop && !p && (i.cloneCount = 2, i.cloneOffset = 1, "init" !== e && i.container.find(".clone").remove(), v.uniqueID(i.slides.first().clone().addClass("clone").attr("aria-hidden", "true")).appendTo(i.container), v.uniqueID(i.slides.last().clone().addClass("clone").attr("aria-hidden", "true")).prependTo(i.container)), i.newSlides = t(i.vars.selector, i), n = d ? i.count - 1 - i.currentSlide + i.cloneOffset : i.currentSlide + i.cloneOffset, c && !p ? (i.container.height(200 * (i.count + i.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function () {
                    i.newSlides.css({display: "block"}), i.doMath(), i.viewport.height(i.h), i.setProps(n * i.h, "init")
                }, "init" === e ? 100 : 0)) : (i.container.width(200 * (i.count + i.cloneCount) + "%"), i.setProps(n * i.computedW, "init"), setTimeout(function () {
                    i.doMath(), i.newSlides.css({
                        width: i.computedW,
                        "float": "left",
                        display: "block"
                    }), i.vars.smoothHeight && v.smoothHeight()
                }, "init" === e ? 100 : 0))
            }
            p || i.slides.removeClass(a + "active-slide").eq(i.currentSlide).addClass(a + "active-slide"), i.vars.init(i)
        }, i.doMath = function () {
            var t = i.slides.first(), e = i.vars.itemMargin, n = i.vars.minItems, o = i.vars.maxItems;
            i.w = void 0 === i.viewport ? i.width() : i.viewport.width(), i.h = t.height(), i.boxPadding = t.outerWidth() - t.width(), p ? (i.itemT = i.vars.itemWidth + e, i.minW = n ? n * i.itemT : i.w, i.maxW = o ? o * i.itemT - e : i.w, i.itemW = i.minW > i.w ? (i.w - e * (n - 1)) / n : i.maxW < i.w ? (i.w - e * (o - 1)) / o : i.vars.itemWidth > i.w ? i.w : i.vars.itemWidth, i.visible = Math.floor(i.w / i.itemW), i.move = i.vars.move > 0 && i.vars.move < i.visible ? i.vars.move : i.visible, i.pagingCount = Math.ceil((i.count - i.visible) / i.move + 1), i.last = i.pagingCount - 1, i.limit = 1 === i.pagingCount ? 0 : i.vars.itemWidth > i.w ? i.itemW * (i.count - 1) + e * (i.count - 1) : (i.itemW + e) * i.count - i.w - e) : (i.itemW = i.w, i.pagingCount = i.count, i.last = i.count - 1), i.computedW = i.itemW - i.boxPadding
        }, i.update = function (t, e) {
            i.doMath(), p || (t < i.currentSlide ? i.currentSlide += 1 : t <= i.currentSlide && 0 !== t && (i.currentSlide -= 1), i.animatingTo = i.currentSlide), i.vars.controlNav && !i.manualControls && ("add" === e && !p || i.pagingCount > i.controlNav.length ? v.controlNav.update("add") : ("remove" === e && !p || i.pagingCount < i.controlNav.length) && (p && i.currentSlide > i.last && (i.currentSlide -= 1, i.animatingTo -= 1), v.controlNav.update("remove", i.last))), i.vars.directionNav && v.directionNav.update()
        }, i.addSlide = function (e, n) {
            var o = t(e);
            i.count += 1, i.last = i.count - 1, c && d ? void 0 !== n ? i.slides.eq(i.count - n).after(o) : i.container.prepend(o) : void 0 !== n ? i.slides.eq(n).before(o) : i.container.append(o), i.update(n, "add"), i.slides = t(i.vars.selector + ":not(.clone)", i), i.setup(), i.vars.added(i)
        }, i.removeSlide = function (e) {
            var n = isNaN(e) ? i.slides.index(t(e)) : e;
            i.count -= 1, i.last = i.count - 1, isNaN(e) ? t(e, i.slides).remove() : c && d ? i.slides.eq(i.last).remove() : i.slides.eq(e).remove(), i.doMath(), i.update(n, "remove"), i.slides = t(i.vars.selector + ":not(.clone)", i), i.setup(), i.vars.removed(i)
        }, v.init()
    }, t(window).blur(function () {
        focused = !1
    }).focus(function () {
        focused = !0
    }), t.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function () {
        },
        before: function () {
        },
        after: function () {
        },
        end: function () {
        },
        added: function () {
        },
        removed: function () {
        },
        init: function () {
        }
    }, t.fn.flexslider = function (e) {
        if (void 0 === e && (e = {}), "object" == typeof e)return this.each(function () {
            var n = t(this), i = e.selector ? e.selector : ".slides > li", o = n.find(i);
            1 === o.length && e.allowOneSlide === !0 || 0 === o.length ? (o.fadeIn(400), e.start && e.start(n)) : void 0 === n.data("flexslider") && new t.flexslider(this, e)
        });
        var n = t(this).data("flexslider");
        switch (e) {
            case"play":
                n.play();
                break;
            case"pause":
                n.pause();
                break;
            case"stop":
                n.stop();
                break;
            case"next":
                n.flexAnimate(n.getTarget("next"), !0);
                break;
            case"prev":
            case"previous":
                n.flexAnimate(n.getTarget("prev"), !0);
                break;
            default:
                "number" == typeof e && n.flexAnimate(e, !0)
        }
    }
}(jQuery), !function () {
    function t() {
    }

    function e(t) {
        return a.retinaImageSuffix + t
    }

    function n(t, n) {
        if (this.path = t || "", "undefined" != typeof n && null !== n)this.at_2x_path = n, this.perform_check = !1; else {
            if (void 0 !== document.createElement) {
                var i = document.createElement("a");
                i.href = this.path, i.pathname = i.pathname.replace(s, e), this.at_2x_path = i.href
            } else {
                var o = this.path.split("?");
                o[0] = o[0].replace(s, e), this.at_2x_path = o.join("?")
            }
            this.perform_check = !0
        }
    }

    function i(t) {
        this.el = t, this.path = new n(this.el.getAttribute("src"), this.el.getAttribute("data-at2x"));
        var e = this;
        this.path.check_2x_variant(function (t) {
            t && e.swap()
        })
    }

    var o = "undefined" == typeof exports ? window : exports, a = {
        retinaImageSuffix: "@2x",
        check_mime_type: !0,
        force_original_dimensions: !0
    };
    o.Retina = t, t.configure = function (t) {
        null === t && (t = {});
        for (var e in t)t.hasOwnProperty(e) && (a[e] = t[e])
    }, t.init = function (t) {
        null === t && (t = o);
        var e = t.onload || function () {
            };
        t.onload = function () {
            var t, n, o = document.getElementsByTagName("img"), a = [];
            for (t = 0; t < o.length; t += 1)n = o[t], n.getAttributeNode("data-no-retina") || a.push(new i(n));
            e()
        }
    }, t.isRetina = function () {
        var t = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
        return o.devicePixelRatio > 1 ? !0 : o.matchMedia && o.matchMedia(t).matches ? !0 : !1
    };
    var s = /\.\w+$/;
    o.RetinaImagePath = n, n.confirmed_paths = [], n.prototype.is_external = function () {
        return !(!this.path.match(/^https?\:/i) || this.path.match("//" + document.domain))
    }, n.prototype.check_2x_variant = function (t) {
        var e, i = this;
        return this.is_external() ? t(!1) : this.perform_check || "undefined" == typeof this.at_2x_path || null === this.at_2x_path ? this.at_2x_path in n.confirmed_paths ? t(!0) : (e = new XMLHttpRequest, e.open("HEAD", this.at_2x_path), e.onreadystatechange = function () {
            if (4 !== e.readyState)return t(!1);
            if (e.status >= 200 && e.status <= 399) {
                if (a.check_mime_type) {
                    var o = e.getResponseHeader("Content-Type");
                    if (null === o || !o.match(/^image/i))return t(!1)
                }
                return n.confirmed_paths.push(i.at_2x_path), t(!0)
            }
            return t(!1)
        }, void e.send()) : t(!0)
    }, o.RetinaImage = i, i.prototype.swap = function (t) {
        function e() {
            n.el.complete ? (a.force_original_dimensions && (n.el.setAttribute("width", n.el.offsetWidth), n.el.setAttribute("height", n.el.offsetHeight)), n.el.setAttribute("src", t)) : setTimeout(e, 5)
        }

        "undefined" == typeof t && (t = this.path.at_2x_path);
        var n = this;
        e()
    }, t.isRetina() && t.init(o)
}(), window.Modernizr = function (t, e, n) {
    function i(t) {
        m.cssText = t
    }

    function o(t, e) {
        return i(w.join(t + ";") + (e || ""))
    }

    function a(t, e) {
        return typeof t === e
    }

    function s(t, e) {
        return !!~("" + t).indexOf(e)
    }

    function r(t, e) {
        for (var i in t) {
            var o = t[i];
            if (!s(o, "-") && m[o] !== n)return "pfx" == e ? o : !0
        }
        return !1
    }

    function l(t, e, i) {
        for (var o in t) {
            var s = e[t[o]];
            if (s !== n)return i === !1 ? t[o] : a(s, "function") ? s.bind(i || e) : s
        }
        return !1
    }

    function u(t, e, n) {
        var i = t.charAt(0).toUpperCase() + t.slice(1), o = (t + " " + x.join(i + " ") + i).split(" ");
        return a(e, "string") || a(e, "undefined") ? r(o, e) : (o = (t + " " + S.join(i + " ") + i).split(" "), l(o, e, n))
    }

    var c = "2.8.3", d = {}, p = !0, h = e.documentElement, f = "modernizr", v = e.createElement(f), m = v.style, g, y = {}.toString, w = " -webkit- -moz- -o- -ms- ".split(" "), b = "Webkit Moz O ms", x = b.split(" "), S = b.toLowerCase().split(" "), C = {svg: "http://www.w3.org/2000/svg"}, _ = {}, M = {}, A = {}, L = [], T = L.slice, P, I = {}.hasOwnProperty, k;
    k = a(I, "undefined") || a(I.call, "undefined") ? function (t, e) {
        return e in t && a(t.constructor.prototype[e], "undefined")
    } : function (t, e) {
        return I.call(t, e)
    }, Function.prototype.bind || (Function.prototype.bind = function (t) {
        var e = this;
        if ("function" != typeof e)throw new TypeError;
        var n = T.call(arguments, 1), i = function () {
            if (this instanceof i) {
                var o = function () {
                };
                o.prototype = e.prototype;
                var a = new o, s = e.apply(a, n.concat(T.call(arguments)));
                return Object(s) === s ? s : a
            }
            return e.apply(t, n.concat(T.call(arguments)))
        };
        return i
    }), _.cssgradients = function () {
        var t = "background-image:", e = "gradient(linear,left top,right bottom,from(#9f9),to(white));", n = "linear-gradient(left top,#9f9, white);";
        return i((t + "-webkit- ".split(" ").join(e + t) + w.join(n + t)).slice(0, -t.length)), s(m.backgroundImage, "gradient")
    }, _.csstransforms = function () {
        return !!u("transform")
    }, _.csstransitions = function () {
        return u("transition")
    }, _.svg = function () {
        return !!e.createElementNS && !!e.createElementNS(C.svg, "svg").createSVGRect
    }, _.inlinesvg = function () {
        var t = e.createElement("div");
        return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == C.svg
    }, _.svgclippaths = function () {
        return !!e.createElementNS && /SVGClipPath/.test(y.call(e.createElementNS(C.svg, "clipPath")))
    };
    for (var E in _)k(_, E) && (P = E.toLowerCase(), d[P] = _[E](), L.push((d[P] ? "" : "no-") + P));
    return d.addTest = function (t, e) {
        if ("object" == typeof t)for (var i in t)k(t, i) && d.addTest(i, t[i]); else {
            if (t = t.toLowerCase(), d[t] !== n)return d;
            e = "function" == typeof e ? e() : e, "undefined" != typeof p && p && (h.className += " " + (e ? "" : "no-") + t), d[t] = e
        }
        return d
    }, i(""), v = g = null, function (t, e) {
        function n(t, e) {
            var n = t.createElement("p"), i = t.getElementsByTagName("head")[0] || t.documentElement;
            return n.innerHTML = "x<style>" + e + "</style>", i.insertBefore(n.lastChild, i.firstChild)
        }

        function i() {
            var t = y.elements;
            return "string" == typeof t ? t.split(" ") : t
        }

        function o(t) {
            var e = m[t[f]];
            return e || (e = {}, v++, t[f] = v, m[v] = e), e
        }

        function a(t, n, i) {
            if (n || (n = e), g)return n.createElement(t);
            i || (i = o(n));
            var a;
            return a = i.cache[t] ? i.cache[t].cloneNode() : p.test(t) ? (i.cache[t] = i.createElem(t)).cloneNode() : i.createElem(t), !a.canHaveChildren || d.test(t) || a.tagUrn ? a : i.frag.appendChild(a)
        }

        function s(t, n) {
            if (t || (t = e), g)return t.createDocumentFragment();
            n = n || o(t);
            for (var a = n.frag.cloneNode(), s = 0, r = i(), l = r.length; l > s; s++)a.createElement(r[s]);
            return a
        }

        function r(t, e) {
            e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function (n) {
                return y.shivMethods ? a(n, t, e) : e.createElem(n)
            }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-]+/g, function (t) {
                    return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
                }) + ");return n}")(y, e.frag)
        }

        function l(t) {
            t || (t = e);
            var i = o(t);
            return y.shivCSS && !h && !i.hasCSS && (i.hasCSS = !!n(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), g || r(t, i), t
        }

        var u = "3.7.0", c = t.html5 || {}, d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, h, f = "_html5shiv", v = 0, m = {}, g;
        !function () {
            try {
                var t = e.createElement("a");
                t.innerHTML = "<xyz></xyz>", h = "hidden" in t, g = 1 == t.childNodes.length || function () {
                        e.createElement("a");
                        var t = e.createDocumentFragment();
                        return "undefined" == typeof t.cloneNode || "undefined" == typeof t.createDocumentFragment || "undefined" == typeof t.createElement
                    }()
            } catch (n) {
                h = !0, g = !0
            }
        }();
        var y = {
            elements: c.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: u,
            shivCSS: c.shivCSS !== !1,
            supportsUnknownElements: g,
            shivMethods: c.shivMethods !== !1,
            type: "default",
            shivDocument: l,
            createElement: a,
            createDocumentFragment: s
        };
        t.html5 = y, l(e)
    }(this, e), d._version = c, d._prefixes = w, d._domPrefixes = S, d._cssomPrefixes = x, d.testProp = function (t) {
        return r([t])
    }, d.testAllProps = u, h.className = h.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (p ? " js " + L.join(" ") : ""), d
}(this, this.document), function (t, e, n) {
    function i(t) {
        return "[object Function]" == f.call(t)
    }

    function o(t) {
        return "string" == typeof t
    }

    function a() {
    }

    function s(t) {
        return !t || "loaded" == t || "complete" == t || "uninitialized" == t
    }

    function r() {
        var t = v.shift();
        m = 1, t ? t.t ? p(function () {
            ("c" == t.t ? L.injectCss : L.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
        }, 0) : (t(), r()) : m = 0
    }

    function l(t, n, i, o, a, l, u) {
        function c(e) {
            if (!f && s(d.readyState) && (b.r = f = 1, !m && r(), d.onload = d.onreadystatechange = null, e)) {
                "img" != t && p(function () {
                    w.removeChild(d)
                }, 50);
                for (var i in _[n])_[n].hasOwnProperty(i) && _[n][i].onload()
            }
        }

        var u = u || L.errorTimeout, d = e.createElement(t), f = 0, g = 0, b = {t: i, s: n, e: a, a: l, x: u};
        1 === _[n] && (g = 1, _[n] = []), "object" == t ? d.data = n : (d.src = n, d.type = t), d.width = d.height = "0", d.onerror = d.onload = d.onreadystatechange = function () {
            c.call(this, g)
        }, v.splice(o, 0, b), "img" != t && (g || 2 === _[n] ? (w.insertBefore(d, y ? null : h), p(c, u)) : _[n].push(d))
    }

    function u(t, e, n, i, a) {
        return m = 0, e = e || "j", o(t) ? l("c" == e ? x : b, t, e, this.i++, n, i, a) : (v.splice(this.i++, 0, t), 1 == v.length && r()), this
    }

    function c() {
        var t = L;
        return t.loader = {load: u, i: 0}, t
    }

    var d = e.documentElement, p = t.setTimeout, h = e.getElementsByTagName("script")[0], f = {}.toString, v = [], m = 0, g = "MozAppearance" in d.style, y = g && !!e.createRange().compareNode, w = y ? d : h.parentNode, d = t.opera && "[object Opera]" == f.call(t.opera), d = !!e.attachEvent && !d, b = g ? "object" : d ? "script" : "img", x = d ? "script" : b, S = Array.isArray || function (t) {
            return "[object Array]" == f.call(t)
        }, C = [], _ = {}, M = {
        timeout: function (t, e) {
            return e.length && (t.timeout = e[0]), t
        }
    }, A, L;
    L = function (t) {
        function e(t) {
            var t = t.split("!"), e = C.length, n = t.pop(), i = t.length, n = {
                url: n,
                origUrl: n,
                prefixes: t
            }, o, a, s;
            for (a = 0; i > a; a++)s = t[a].split("="), (o = M[s.shift()]) && (n = o(n, s));
            for (a = 0; e > a; a++)n = C[a](n);
            return n
        }

        function s(t, o, a, s, r) {
            var l = e(t), u = l.autoCallback;
            l.url.split(".").pop().split("?").shift(), l.bypass || (o && (o = i(o) ? o : o[t] || o[s] || o[t.split("/").pop().split("?")[0]]), l.instead ? l.instead(t, o, a, s, r) : (_[l.url] ? l.noexec = !0 : _[l.url] = 1, a.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : n, l.noexec, l.attrs, l.timeout), (i(o) || i(u)) && a.load(function () {
                c(), o && o(l.origUrl, r, s), u && u(l.origUrl, r, s), _[l.url] = 2
            })))
        }

        function r(t, e) {
            function n(t, n) {
                if (t) {
                    if (o(t))n || (u = function () {
                        var t = [].slice.call(arguments);
                        c.apply(this, t), d()
                    }), s(t, u, e, 0, r); else if (Object(t) === t)for (h in p = function () {
                        var e = 0, n;
                        for (n in t)t.hasOwnProperty(n) && e++;
                        return e
                    }(), t)t.hasOwnProperty(h) && (!n && !--p && (i(u) ? u = function () {
                        var t = [].slice.call(arguments);
                        c.apply(this, t), d()
                    } : u[h] = function (t) {
                        return function () {
                            var e = [].slice.call(arguments);
                            t && t.apply(this, e), d()
                        }
                    }(c[h])), s(t[h], u, e, h, r))
                } else!n && d()
            }

            var r = !!t.test, l = t.load || t.both, u = t.callback || a, c = u, d = t.complete || a, p, h;
            n(r ? t.yep : t.nope, !!l), l && n(l)
        }

        var l, u, d = this.yepnope.loader;
        if (o(t))s(t, 0, d, 0); else if (S(t))for (l = 0; l < t.length; l++)u = t[l], o(u) ? s(u, 0, d, 0) : S(u) ? L(u) : Object(u) === u && r(u, d); else Object(t) === t && r(t, d)
    }, L.addPrefix = function (t, e) {
        M[t] = e
    }, L.addFilter = function (t) {
        C.push(t)
    }, L.errorTimeout = 1e4, null == e.readyState && e.addEventListener && (e.readyState = "loading", e.addEventListener("DOMContentLoaded", A = function () {
        e.removeEventListener("DOMContentLoaded", A, 0), e.readyState = "complete"
    }, 0)), t.yepnope = c(), t.yepnope.executeStack = r, t.yepnope.injectJs = function (t, n, i, o, l, u) {
        var c = e.createElement("script"), d, f, o = o || L.errorTimeout;
        c.src = t;
        for (f in i)c.setAttribute(f, i[f]);
        n = u ? r : n || a, c.onreadystatechange = c.onload = function () {
            !d && s(c.readyState) && (d = 1, n(), c.onload = c.onreadystatechange = null)
        }, p(function () {
            d || (d = 1, n(1))
        }, o), l ? c.onload() : h.parentNode.insertBefore(c, h)
    }, t.yepnope.injectCss = function (t, n, i, o, s, l) {
        var o = e.createElement("link"), u, n = l ? r : n || a;
        o.href = t, o.rel = "stylesheet", o.type = "text/css";
        for (u in i)o.setAttribute(u, i[u]);
        s || (h.parentNode.insertBefore(o, h), p(n, 0))
    }
}(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
}, function () {
    var t, e, n, i = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }, o = [].indexOf || function (t) {
            for (var e = 0, n = this.length; n > e; e++)if (e in this && this[e] === t)return e;
            return -1
        };
    e = function () {
        function t() {
        }

        return t.prototype.extend = function (t, e) {
            var n, i;
            for (n in e)i = e[n], null == t[n] && (t[n] = i);
            return t
        }, t.prototype.isMobile = function (t) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
        }, t
    }(), n = this.WeakMap || this.MozWeakMap || (n = function () {
            function t() {
                this.keys = [], this.values = []
            }

            return t.prototype.get = function (t) {
                var e, n, i, o, a;
                for (a = this.keys, e = i = 0, o = a.length; o > i; e = ++i)if (n = a[e], n === t)return this.values[e]
            }, t.prototype.set = function (t, e) {
                var n, i, o, a, s;
                for (s = this.keys, n = o = 0, a = s.length; a > o; n = ++o)if (i = s[n], i === t)return void(this.values[n] = e);
                return this.keys.push(t), this.values.push(e)
            }, t
        }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function () {
            function t() {
                console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }

            return t.notSupported = !0, t.prototype.observe = function () {
            }, t
        }()), this.WOW = function () {
        function a(t) {
            null == t && (t = {}), this.scrollCallback = i(this.scrollCallback, this), this.scrollHandler = i(this.scrollHandler, this), this.start = i(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), this.animationNameCache = new n
        }

        return a.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0
        }, a.prototype.init = function () {
            var t;
            return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : document.addEventListener("DOMContentLoaded", this.start), this.finished = []
        }, a.prototype.start = function () {
            var e, n, i, o;
            if (this.stopped = !1, this.boxes = function () {
                    var t, n, i, o;
                    for (i = this.element.getElementsByClassName(this.config.boxClass), o = [], t = 0, n = i.length; n > t; t++)e = i[t], o.push(e);
                    return o
                }.call(this), this.all = function () {
                    var t, n, i, o;
                    for (i = this.boxes, o = [], t = 0, n = i.length; n > t; t++)e = i[t], o.push(e);
                    return o
                }.call(this), this.boxes.length)if (this.disabled())this.resetStyle(); else {
                for (o = this.boxes, n = 0, i = o.length; i > n; n++)e = o[n], this.applyStyle(e, !0);
                window.addEventListener("scroll", this.scrollHandler, !1), window.addEventListener("resize", this.scrollHandler, !1), this.interval = setInterval(this.scrollCallback, 50)
            }
            return this.config.live ? new t(function (t) {
                return function (e) {
                    var n, i, o, a, s;
                    for (s = [], o = 0, a = e.length; a > o; o++)i = e[o], s.push(function () {
                        var t, e, o, a;
                        for (o = i.addedNodes || [], a = [], t = 0, e = o.length; e > t; t++)n = o[t], a.push(this.doSync(n));
                        return a
                    }.call(t));
                    return s
                }
            }(this)).observe(document.body, {childList: !0, subtree: !0}) : void 0
        }, a.prototype.stop = function () {
            return this.stopped = !0, window.removeEventListener("scroll", this.scrollHandler, !1), window.removeEventListener("resize", this.scrollHandler, !1), null != this.interval ? clearInterval(this.interval) : void 0
        }, a.prototype.sync = function () {
            return t.notSupported ? this.doSync(this.element) : void 0
        }, a.prototype.doSync = function (t) {
            var e, n, i, a, s;
            if (!this.stopped) {
                if (null == t && (t = this.element), 1 !== t.nodeType)return;
                for (t = t.parentNode || t, a = t.getElementsByClassName(this.config.boxClass), s = [], n = 0, i = a.length; i > n; n++)e = a[n], o.call(this.all, e) < 0 ? (this.applyStyle(e, !0), this.boxes.push(e), this.all.push(e), s.push(this.scrolled = !0)) : s.push(void 0);
                return s
            }
        }, a.prototype.show = function (t) {
            return this.applyStyle(t), t.className = "" + t.className + " " + this.config.animateClass
        }, a.prototype.applyStyle = function (t, e) {
            var n, i, o;
            return i = t.getAttribute("data-wow-duration"), n = t.getAttribute("data-wow-delay"), o = t.getAttribute("data-wow-iteration"), this.animate(function (a) {
                return function () {
                    return a.customStyle(t, e, i, n, o)
                }
            }(this))
        }, a.prototype.animate = function () {
            return "requestAnimationFrame" in window ? function (t) {
                return window.requestAnimationFrame(t)
            } : function (t) {
                return t()
            }
        }(), a.prototype.resetStyle = function () {
            var t, e, n, i, o;
            for (i = this.boxes, o = [], e = 0, n = i.length; n > e; e++)t = i[e], o.push(t.setAttribute("style", "visibility: visible;"));
            return o
        }, a.prototype.customStyle = function (t, e, n, i, o) {
            return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", n && this.vendorSet(t.style, {animationDuration: n}), i && this.vendorSet(t.style, {animationDelay: i}), o && this.vendorSet(t.style, {animationIterationCount: o}), this.vendorSet(t.style, {animationName: e ? "none" : this.cachedAnimationName(t)}), t
        }, a.prototype.vendors = ["moz", "webkit"], a.prototype.vendorSet = function (t, e) {
            var n, i, o, a;
            a = [];
            for (n in e)i = e[n], t["" + n] = i, a.push(function () {
                var e, a, s, r;
                for (s = this.vendors, r = [], e = 0, a = s.length; a > e; e++)o = s[e], r.push(t["" + o + n.charAt(0).toUpperCase() + n.substr(1)] = i);
                return r
            }.call(this));
            return a
        }, a.prototype.vendorCSS = function (t, e) {
            var n, i, o, a, s, r;
            for (i = window.getComputedStyle(t), n = i.getPropertyCSSValue(e), r = this.vendors, a = 0, s = r.length; s > a; a++)o = r[a], n = n || i.getPropertyCSSValue("-" + o + "-" + e);
            return n
        }, a.prototype.animationName = function (t) {
            var e;
            try {
                e = this.vendorCSS(t, "animation-name").cssText
            } catch (n) {
                e = window.getComputedStyle(t).getPropertyValue("animation-name")
            }
            return "none" === e ? "" : e
        }, a.prototype.cacheAnimationName = function (t) {
            return this.animationNameCache.set(t, this.animationName(t))
        }, a.prototype.cachedAnimationName = function (t) {
            return this.animationNameCache.get(t)
        }, a.prototype.scrollHandler = function () {
            return this.scrolled = !0
        }, a.prototype.scrollCallback = function () {
            var t;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
                var e, n, i, o;
                for (i = this.boxes, o = [], e = 0, n = i.length; n > e; e++)t = i[e], t && (this.isVisible(t) ? this.show(t) : o.push(t));
                return o
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, a.prototype.offsetTop = function (t) {
            for (var e; void 0 === t.offsetTop;)t = t.parentNode;
            for (e = t.offsetTop; t = t.offsetParent;)e += t.offsetTop;
            return e
        }, a.prototype.isVisible = function (t) {
            var e, n, i, o, a;
            return n = t.getAttribute("data-wow-offset") || this.config.offset, a = window.pageYOffset, o = a + Math.min(this.element.clientHeight, innerHeight) - n, i = this.offsetTop(t), e = i + t.clientHeight, o >= i && e >= a
        }, a.prototype.util = function () {
            return null != this._util ? this._util : this._util = new e
        }, a.prototype.disabled = function () {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, a
    }()
}.call(this), function (t, e, n) {
    "use strict";
    var i = t.document, o = t.Modernizr, a = function (t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }, s = "Moz Webkit O Ms".split(" "), r = function (t) {
        var e = i.documentElement.style, n;
        if ("string" == typeof e[t])return t;
        t = a(t);
        for (var o = 0, r = s.length; r > o; o++)if (n = s[o] + t, "string" == typeof e[n])return n
    }, l = r("transform"), u = r("transitionProperty"), c = {
        csstransforms: function () {
            return !!l
        }, csstransforms3d: function () {
            var t = !!r("perspective");
            if (t) {
                var n = " -o- -moz- -ms- -webkit- -khtml- ".split(" "), i = "@media (" + n.join("transform-3d),(") + "modernizr)", o = e("<style>" + i + "{#modernizr{height:3px}}</style>").appendTo("head"), a = e('<div id="modernizr" />').appendTo("html");
                t = 3 === a.height(), a.remove(), o.remove()
            }
            return t
        }, csstransitions: function () {
            return !!u
        }
    }, d;
    if (o)for (d in c)o.hasOwnProperty(d) || o.addTest(d, c[d]); else {
        o = t.Modernizr = {_version: "1.6ish: miniModernizr for Isotope"};
        var p = " ", h;
        for (d in c)h = c[d](), o[d] = h, p += " " + (h ? "" : "no-") + d;
        e("html").addClass(p)
    }
    if (o.csstransforms) {
        var f = o.csstransforms3d ? {
            translate: function (t) {
                return "translate3d(" + t[0] + "px, " + t[1] + "px, 0) "
            }, scale: function (t) {
                return "scale3d(" + t + ", " + t + ", 1) "
            }
        } : {
            translate: function (t) {
                return "translate(" + t[0] + "px, " + t[1] + "px) "
            }, scale: function (t) {
                return "scale(" + t + ") "
            }
        }, v = function (t, n, i) {
            var o = e.data(t, "isoTransform") || {}, a = {}, s, r = {}, u;
            a[n] = i, e.extend(o, a);
            for (s in o)u = o[s], r[s] = f[s](u);
            var c = r.translate || "", d = r.scale || "", p = c + d;
            e.data(t, "isoTransform", o), t.style[l] = p
        };
        e.cssNumber.scale = !0, e.cssHooks.scale = {
            set: function (t, e) {
                v(t, "scale", e)
            }, get: function (t, n) {
                var i = e.data(t, "isoTransform");
                return i && i.scale ? i.scale : 1
            }
        }, e.fx.step.scale = function (t) {
            e.cssHooks.scale.set(t.elem, t.now + t.unit)
        }, e.cssNumber.translate = !0, e.cssHooks.translate = {
            set: function (t, e) {
                v(t, "translate", e)
            }, get: function (t, n) {
                var i = e.data(t, "isoTransform");
                return i && i.translate ? i.translate : [0, 0]
            }
        }
    }
    var m, g;
    o.csstransitions && (m = {
        WebkitTransitionProperty: "webkitTransitionEnd",
        MozTransitionProperty: "transitionend",
        OTransitionProperty: "oTransitionEnd otransitionend",
        transitionProperty: "transitionend"
    }[u], g = r("transitionDuration"));
    var y = e.event, w = e.event.handle ? "handle" : "dispatch", b;
    y.special.smartresize = {
        setup: function () {
            e(this).bind("resize", y.special.smartresize.handler)
        }, teardown: function () {
            e(this).unbind("resize", y.special.smartresize.handler)
        }, handler: function (t, e) {
            var n = this, i = arguments;
            t.type = "smartresize", b && clearTimeout(b), b = setTimeout(function () {
                y[w].apply(n, i)
            }, "execAsap" === e ? 0 : 100)
        }
    }, e.fn.smartresize = function (t) {
        return t ? this.bind("smartresize", t) : this.trigger("smartresize", ["execAsap"])
    }, e.Isotope = function (t, n, i) {
        this.element = e(n), this._create(t), this._init(i)
    };
    var x = ["width", "height"], S = e(t);
    e.Isotope.settings = {
        resizable: !0,
        layoutMode: "masonry",
        containerClass: "isotope",
        itemClass: "isotope-item",
        hiddenClass: "isotope-hidden",
        hiddenStyle: {opacity: 0, scale: .001},
        visibleStyle: {opacity: 1, scale: 1},
        containerStyle: {position: "relative", overflow: "hidden"},
        animationEngine: "best-available",
        animationOptions: {queue: !1, duration: 800},
        sortBy: "original-order",
        sortAscending: !0,
        resizesContainer: !0,
        transformsEnabled: !0,
        itemPositionDataEnabled: !1
    }, e.Isotope.prototype = {
        _create: function (t) {
            this.options = e.extend({}, e.Isotope.settings, t), this.styleQueue = [], this.elemCount = 0;
            var n = this.element[0].style;
            this.originalStyle = {};
            var i = x.slice(0);
            for (var o in this.options.containerStyle)i.push(o);
            for (var a = 0, s = i.length; s > a; a++)o = i[a], this.originalStyle[o] = n[o] || "";
            this.element.css(this.options.containerStyle), this._updateAnimationEngine(), this._updateUsingTransforms();
            var r = {
                "original-order": function (t, e) {
                    return e.elemCount++, e.elemCount
                }, random: function () {
                    return Math.random()
                }
            };
            this.options.getSortData = e.extend(this.options.getSortData, r), this.reloadItems(), this.offset = {
                left: parseInt(this.element.css("padding-left") || 0, 10),
                top: parseInt(this.element.css("padding-top") || 0, 10)
            };
            var l = this;
            setTimeout(function () {
                l.element.addClass(l.options.containerClass)
            }, 0), this.options.resizable && S.bind("smartresize.isotope", function () {
                l.resize()
            }), this.element.delegate("." + this.options.hiddenClass, "click", function () {
                return !1
            })
        }, _getAtoms: function (t) {
            var e = this.options.itemSelector, n = e ? t.filter(e).add(t.find(e)) : t, i = {position: "absolute"};
            return n = n.filter(function (t, e) {
                return 1 === e.nodeType
            }), this.usingTransforms && (i.left = 0, i.top = 0), n.css(i).addClass(this.options.itemClass), this.updateSortData(n, !0), n
        }, _init: function (t) {
            this.$filteredAtoms = this._filter(this.$allAtoms), this._sort(), this.reLayout(t)
        }, option: function (t) {
            if (e.isPlainObject(t)) {
                this.options = e.extend(!0, this.options, t);
                var n;
                for (var i in t)n = "_update" + a(i), this[n] && this[n]()
            }
        }, _updateAnimationEngine: function () {
            var t = this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, ""), e;
            switch (t) {
                case"css":
                case"none":
                    e = !1;
                    break;
                case"jquery":
                    e = !0;
                    break;
                default:
                    e = !o.csstransitions
            }
            this.isUsingJQueryAnimation = e, this._updateUsingTransforms()
        }, _updateTransformsEnabled: function () {
            this._updateUsingTransforms()
        }, _updateUsingTransforms: function () {
            var t = this.usingTransforms = this.options.transformsEnabled && o.csstransforms && o.csstransitions && !this.isUsingJQueryAnimation;
            t || (delete this.options.hiddenStyle.scale, delete this.options.visibleStyle.scale), this.getPositionStyles = t ? this._translate : this._positionAbs
        }, _filter: function (t) {
            var e = "" === this.options.filter ? "*" : this.options.filter;
            if (!e)return t;
            var n = this.options.hiddenClass, i = "." + n, o = t.filter(i), a = o;
            if ("*" !== e) {
                a = o.filter(e);
                var s = t.not(i).not(e).addClass(n);
                this.styleQueue.push({$el: s, style: this.options.hiddenStyle})
            }
            return this.styleQueue.push({$el: a, style: this.options.visibleStyle}), a.removeClass(n), t.filter(e)
        }, updateSortData: function (t, n) {
            var i = this, o = this.options.getSortData, a, s;
            t.each(function () {
                a = e(this), s = {};
                for (var t in o)s[t] = n || "original-order" !== t ? o[t](a, i) : e.data(this, "isotope-sort-data")[t];
                e.data(this, "isotope-sort-data", s)
            })
        }, _sort: function () {
            var t = this.options.sortBy, e = this._getSorter, n = this.options.sortAscending ? 1 : -1, i = function (i, o) {
                var a = e(i, t), s = e(o, t);
                return a === s && "original-order" !== t && (a = e(i, "original-order"), s = e(o, "original-order")), (a > s ? 1 : s > a ? -1 : 0) * n
            };
            this.$filteredAtoms.sort(i)
        }, _getSorter: function (t, n) {
            return e.data(t, "isotope-sort-data")[n]
        }, _translate: function (t, e) {
            return {translate: [t, e]}
        }, _positionAbs: function (t, e) {
            return {left: t, top: e}
        }, _pushPosition: function (t, e, n) {
            e = Math.round(e + this.offset.left), n = Math.round(n + this.offset.top);
            var i = this.getPositionStyles(e, n);
            this.styleQueue.push({
                $el: t,
                style: i
            }), this.options.itemPositionDataEnabled && t.data("isotope-item-position", {x: e, y: n})
        }, layout: function (t, e) {
            var n = this.options.layoutMode;
            if (this["_" + n + "Layout"](t), this.options.resizesContainer) {
                var i = this["_" + n + "GetContainerSize"]();
                this.styleQueue.push({$el: this.element, style: i})
            }
            this._processStyleQueue(t, e), this.isLaidOut = !0
        }, _processStyleQueue: function (t, n) {
            var i = this.isLaidOut && this.isUsingJQueryAnimation ? "animate" : "css", a = this.options.animationOptions, s = this.options.onLayout, r, l, u, c;
            if (l = function (t, e) {
                    e.$el[i](e.style, a)
                }, this._isInserting && this.isUsingJQueryAnimation)l = function (t, e) {
                r = e.$el.hasClass("no-transition") ? "css" : i, e.$el[r](e.style, a)
            }; else if (n || s || a.complete) {
                var d = !1, p = [n, s, a.complete], h = this;
                if (u = !0, c = function () {
                        if (!d) {
                            for (var e, n = 0, i = p.length; i > n; n++)e = p[n], "function" == typeof e && e.call(h.element, t, h);
                            d = !0
                        }
                    }, this.isUsingJQueryAnimation && "animate" === i)a.complete = c, u = !1; else if (o.csstransitions) {
                    for (var f = 0, v = this.styleQueue[0], y = v && v.$el, w; !y || !y.length;) {
                        if (w = this.styleQueue[f++], !w)return;
                        y = w.$el
                    }
                    var b = parseFloat(getComputedStyle(y[0])[g]);
                    b > 0 && (l = function (t, e) {
                        e.$el[i](e.style, a).one(m, c)
                    }, u = !1)
                }
            }
            e.each(this.styleQueue, l), u && c(), this.styleQueue = []
        }, resize: function () {
            this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout()
        }, reLayout: function (t) {
            this["_" + this.options.layoutMode + "Reset"](), this.layout(this.$filteredAtoms, t)
        }, addItems: function (t, e) {
            var n = this._getAtoms(t);
            this.$allAtoms = this.$allAtoms.add(n), e && e(n)
        }, insert: function (t, e) {
            this.element.append(t);
            var n = this;
            this.addItems(t, function (t) {
                var i = n._filter(t);
                n._addHideAppended(i), n._sort(), n.reLayout(), n._revealAppended(i, e)
            })
        }, appended: function (t, e) {
            var n = this;
            this.addItems(t, function (t) {
                n._addHideAppended(t), n.layout(t), n._revealAppended(t, e)
            })
        }, _addHideAppended: function (t) {
            this.$filteredAtoms = this.$filteredAtoms.add(t), t.addClass("no-transition"), this._isInserting = !0, this.styleQueue.push({
                $el: t,
                style: this.options.hiddenStyle
            })
        }, _revealAppended: function (t, e) {
            var n = this;
            setTimeout(function () {
                t.removeClass("no-transition"), n.styleQueue.push({
                    $el: t,
                    style: n.options.visibleStyle
                }), n._isInserting = !1, n._processStyleQueue(t, e)
            }, 10)
        }, reloadItems: function () {
            this.$allAtoms = this._getAtoms(this.element.children())
        }, remove: function (t, e) {
            this.$allAtoms = this.$allAtoms.not(t), this.$filteredAtoms = this.$filteredAtoms.not(t);
            var n = this, i = function () {
                t.remove(), e && e.call(n.element)
            };
            t.filter(":not(." + this.options.hiddenClass + ")").length ? (this.styleQueue.push({
                $el: t,
                style: this.options.hiddenStyle
            }), this._sort(), this.reLayout(i)) : i()
        }, shuffle: function (t) {
            this.updateSortData(this.$allAtoms), this.options.sortBy = "random", this._sort(), this.reLayout(t)
        }, destroy: function () {
            var t = this.usingTransforms, e = this.options;
            this.$allAtoms.removeClass(e.hiddenClass + " " + e.itemClass).each(function () {
                var e = this.style;
                e.position = "", e.top = "", e.left = "", e.opacity = "", t && (e[l] = "")
            });
            var n = this.element[0].style;
            for (var i in this.originalStyle)n[i] = this.originalStyle[i];
            this.element.unbind(".isotope").undelegate("." + e.hiddenClass, "click").removeClass(e.containerClass).removeData("isotope"), S.unbind(".isotope")
        }, _getSegments: function (t) {
            var e = this.options.layoutMode, n = t ? "rowHeight" : "columnWidth", i = t ? "height" : "width", o = t ? "rows" : "cols", s = this.element[i](), r, l = this.options[e] && this.options[e][n] || this.$filteredAtoms["outer" + a(i)](!0) || s;
            r = Math.floor(s / l), r = Math.max(r, 1), this[e][o] = r, this[e][n] = l
        }, _checkIfSegmentsChanged: function (t) {
            var e = this.options.layoutMode, n = t ? "rows" : "cols", i = this[e][n];
            return this._getSegments(t), this[e][n] !== i
        }, _masonryReset: function () {
            this.masonry = {}, this._getSegments();
            var t = this.masonry.cols;
            for (this.masonry.colYs = []; t--;)this.masonry.colYs.push(0)
        }, _masonryLayout: function (t) {
            var n = this, i = n.masonry;
            t.each(function () {
                var t = e(this), o = Math.ceil(t.outerWidth(!0) / i.columnWidth);
                if (o = Math.min(o, i.cols), 1 === o)n._masonryPlaceBrick(t, i.colYs); else {
                    var a = i.cols + 1 - o, s = [], r, l;
                    for (l = 0; a > l; l++)r = i.colYs.slice(l, l + o), s[l] = Math.max.apply(Math, r);
                    n._masonryPlaceBrick(t, s)
                }
            })
        }, _masonryPlaceBrick: function (t, e) {
            for (var n = Math.min.apply(Math, e), i = 0, o = 0, a = e.length; a > o; o++)if (e[o] === n) {
                i = o;
                break
            }
            var s = this.masonry.columnWidth * i, r = n;
            this._pushPosition(t, s, r);
            var l = n + t.outerHeight(!0), u = this.masonry.cols + 1 - a;
            for (o = 0; u > o; o++)this.masonry.colYs[i + o] = l
        }, _masonryGetContainerSize: function () {
            var t = Math.max.apply(Math, this.masonry.colYs);
            return {height: t}
        }, _masonryResizeChanged: function () {
            return this._checkIfSegmentsChanged()
        }, _fitRowsReset: function () {
            this.fitRows = {x: 0, y: 0, height: 0}
        }, _fitRowsLayout: function (t) {
            var n = this, i = this.element.width(), o = this.fitRows;
            t.each(function () {
                var t = e(this), a = t.outerWidth(!0), s = t.outerHeight(!0);
                0 !== o.x && a + o.x > i && (o.x = 0, o.y = o.height), n._pushPosition(t, o.x, o.y), o.height = Math.max(o.y + s, o.height), o.x += a
            })
        }, _fitRowsGetContainerSize: function () {
            return {height: this.fitRows.height}
        }, _fitRowsResizeChanged: function () {
            return !0
        }, _cellsByRowReset: function () {
            this.cellsByRow = {index: 0}, this._getSegments(), this._getSegments(!0)
        }, _cellsByRowLayout: function (t) {
            var n = this, i = this.cellsByRow;
            t.each(function () {
                var t = e(this), o = i.index % i.cols, a = Math.floor(i.index / i.cols), s = (o + .5) * i.columnWidth - t.outerWidth(!0) / 2, r = (a + .5) * i.rowHeight - t.outerHeight(!0) / 2;
                n._pushPosition(t, s, r), i.index++
            })
        }, _cellsByRowGetContainerSize: function () {
            return {height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top}
        }, _cellsByRowResizeChanged: function () {
            return this._checkIfSegmentsChanged()
        }, _straightDownReset: function () {
            this.straightDown = {y: 0}
        }, _straightDownLayout: function (t) {
            var n = this;
            t.each(function (t) {
                var i = e(this);
                n._pushPosition(i, 0, n.straightDown.y), n.straightDown.y += i.outerHeight(!0)
            })
        }, _straightDownGetContainerSize: function () {
            return {height: this.straightDown.y}
        }, _straightDownResizeChanged: function () {
            return !0
        }, _masonryHorizontalReset: function () {
            this.masonryHorizontal = {}, this._getSegments(!0);
            var t = this.masonryHorizontal.rows;
            for (this.masonryHorizontal.rowXs = []; t--;)this.masonryHorizontal.rowXs.push(0)
        }, _masonryHorizontalLayout: function (t) {
            var n = this, i = n.masonryHorizontal;
            t.each(function () {
                var t = e(this), o = Math.ceil(t.outerHeight(!0) / i.rowHeight);
                if (o = Math.min(o, i.rows), 1 === o)n._masonryHorizontalPlaceBrick(t, i.rowXs); else {
                    var a = i.rows + 1 - o, s = [], r, l;
                    for (l = 0; a > l; l++)r = i.rowXs.slice(l, l + o), s[l] = Math.max.apply(Math, r);
                    n._masonryHorizontalPlaceBrick(t, s)
                }
            })
        }, _masonryHorizontalPlaceBrick: function (t, e) {
            for (var n = Math.min.apply(Math, e), i = 0, o = 0, a = e.length; a > o; o++)if (e[o] === n) {
                i = o;
                break
            }
            var s = n, r = this.masonryHorizontal.rowHeight * i;
            this._pushPosition(t, s, r);
            var l = n + t.outerWidth(!0), u = this.masonryHorizontal.rows + 1 - a;
            for (o = 0; u > o; o++)this.masonryHorizontal.rowXs[i + o] = l
        }, _masonryHorizontalGetContainerSize: function () {
            var t = Math.max.apply(Math, this.masonryHorizontal.rowXs);
            return {width: t}
        }, _masonryHorizontalResizeChanged: function () {
            return this._checkIfSegmentsChanged(!0)
        }, _fitColumnsReset: function () {
            this.fitColumns = {x: 0, y: 0, width: 0}
        }, _fitColumnsLayout: function (t) {
            var n = this, i = this.element.height(), o = this.fitColumns;
            t.each(function () {
                var t = e(this), a = t.outerWidth(!0), s = t.outerHeight(!0);
                0 !== o.y && s + o.y > i && (o.x = o.width, o.y = 0), n._pushPosition(t, o.x, o.y), o.width = Math.max(o.x + a, o.width), o.y += s
            })
        }, _fitColumnsGetContainerSize: function () {
            return {width: this.fitColumns.width}
        }, _fitColumnsResizeChanged: function () {
            return !0
        }, _cellsByColumnReset: function () {
            this.cellsByColumn = {index: 0}, this._getSegments(), this._getSegments(!0)
        }, _cellsByColumnLayout: function (t) {
            var n = this, i = this.cellsByColumn;
            t.each(function () {
                var t = e(this), o = Math.floor(i.index / i.rows), a = i.index % i.rows, s = (o + .5) * i.columnWidth - t.outerWidth(!0) / 2, r = (a + .5) * i.rowHeight - t.outerHeight(!0) / 2;
                n._pushPosition(t, s, r), i.index++
            })
        }, _cellsByColumnGetContainerSize: function () {
            return {width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth}
        }, _cellsByColumnResizeChanged: function () {
            return this._checkIfSegmentsChanged(!0)
        }, _straightAcrossReset: function () {
            this.straightAcross = {x: 0}
        }, _straightAcrossLayout: function (t) {
            var n = this;
            t.each(function (t) {
                var i = e(this);
                n._pushPosition(i, n.straightAcross.x, 0), n.straightAcross.x += i.outerWidth(!0)
            })
        }, _straightAcrossGetContainerSize: function () {
            return {width: this.straightAcross.x}
        }, _straightAcrossResizeChanged: function () {
            return !0
        }
    }, e.fn.imagesLoaded = function (t) {
        function n() {
            t.call(o, a)
        }

        function i(t) {
            var o = t.target;
            o.src !== r && -1 === e.inArray(o, l) && (l.push(o), --s <= 0 && (setTimeout(n), a.unbind(".imagesLoaded", i)))
        }

        var o = this, a = o.find("img").add(o.filter("img")), s = a.length, r = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", l = [];
        return s || n(), a.bind("load.imagesLoaded error.imagesLoaded", i).each(function () {
            var t = this.src;
            this.src = r, this.src = t
        }), o
    };
    var C = function (e) {
        t.console && t.console.error(e)
    };
    e.fn.isotope = function (t, n) {
        if ("string" == typeof t) {
            var i = Array.prototype.slice.call(arguments, 1);
            this.each(function () {
                var n = e.data(this, "isotope");
                return n ? e.isFunction(n[t]) && "_" !== t.charAt(0) ? void n[t].apply(n, i) : void C("no such method '" + t + "' for isotope instance") : void C("cannot call methods on isotope prior to initialization; attempted to call method '" + t + "'")
            })
        } else this.each(function () {
            var i = e.data(this, "isotope");
            i ? (i.option(t), i._init(n)) : e.data(this, "isotope", new e.Isotope(t, this, n))
        });
        return this
    }
}(window, jQuery), !function (t, e) {
    function n(t) {
        return "object" == typeof t
    }

    function i(t) {
        return "string" == typeof t
    }

    function o(t) {
        return "number" == typeof t
    }

    function a(t) {
        return t === e
    }

    function s() {
        H = google.maps, D || (D = {
            verbose: !1,
            queryLimit: {attempt: 5, delay: 250, random: 250},
            classes: function () {
                var e = {};
                return t.each("Map Marker InfoWindow Circle Rectangle OverlayView StreetViewPanorama KmlLayer TrafficLayer BicyclingLayer GroundOverlay StyledMapType ImageMapType".split(" "), function (t, n) {
                    e[n] = H[n]
                }), e
            }(),
            map: {mapTypeId: H.MapTypeId.ROADMAP, center: [46.578498, 2.457275], zoom: 2},
            overlay: {pane: "floatPane", content: "", offset: {x: 0, y: 0}},
            geoloc: {getCurrentPosition: {maximumAge: 6e4, timeout: 5e3}}
        })
    }

    function r(t, e) {
        return a(t) ? "gmap3_" + (e ? j + 1 : ++j) : t
    }

    function l(t) {
        var e, n = H.version.split(".");
        for (t = t.split("."), e = 0; e < n.length; e++)n[e] = parseInt(n[e], 10);
        for (e = 0; e < t.length; e++) {
            if (t[e] = parseInt(t[e], 10), !n.hasOwnProperty(e))return !1;
            if (n[e] < t[e])return !1
        }
        return !0
    }

    function u(e, n, i, o, a) {
        function s(n, o) {
            n && t.each(n, function (t, n) {
                var s = e, r = n;
                R(n) && (s = n[0], r = n[1]), o(i, t, function (t) {
                    r.apply(s, [a || i, t, l])
                })
            })
        }

        var r = n.td || {}, l = {id: o, data: r.data, tag: r.tag};
        s(r.events, H.event.addListener), s(r.onces, H.event.addListenerOnce)
    }

    function c(t) {
        var e, n = [];
        for (e in t)t.hasOwnProperty(e) && n.push(e);
        return n
    }

    function d(t, e) {
        var n, i = arguments;
        for (n = 2; n < i.length; n++)if (e in i[n] && i[n].hasOwnProperty(e))return void(t[e] = i[n][e])
    }

    function p(e, n) {
        var i, o, a = ["data", "tag", "id", "events", "onces"], s = {};
        if (e.td)for (i in e.td)e.td.hasOwnProperty(i) && "options" !== i && "values" !== i && (s[i] = e.td[i]);
        for (o = 0; o < a.length; o++)d(s, a[o], n, e.td);
        return s.options = t.extend({}, e.opts || {}, n.options || {}), s
    }

    function h() {
        if (D.verbose) {
            var t, e = [];
            if (window.console && W(console.error)) {
                for (t = 0; t < arguments.length; t++)e.push(arguments[t]);
                console.error.apply(console, e)
            } else {
                for (e = "", t = 0; t < arguments.length; t++)e += arguments[t].toString() + " ";
                alert(e)
            }
        }
    }

    function f(t) {
        return (o(t) || i(t)) && "" !== t && !isNaN(t)
    }

    function v(t) {
        var e, i = [];
        if (!a(t))if (n(t))if (o(t.length))i = t; else for (e in t)i.push(t[e]); else i.push(t);
        return i
    }

    function m(e) {
        return e ? W(e) ? e : (e = v(e), function (i) {
            var o;
            if (a(i))return !1;
            if (n(i)) {
                for (o = 0; o < i.length; o++)if (t.inArray(i[o], e) >= 0)return !0;
                return !1
            }
            return t.inArray(i, e) >= 0
        }) : void 0
    }

    function g(t, e, n) {
        var o = e ? t : null;
        return !t || i(t) ? o : t.latLng ? g(t.latLng) : t instanceof H.LatLng ? t : f(t.lat) ? new H.LatLng(t.lat, t.lng) : !n && R(t) && f(t[0]) && f(t[1]) ? new H.LatLng(t[0], t[1]) : o
    }

    function y(t) {
        var e, n;
        return !t || t instanceof H.LatLngBounds ? t || null : (R(t) ? 2 === t.length ? (e = g(t[0]), n = g(t[1])) : 4 === t.length && (e = g([t[0], t[1]]), n = g([t[2], t[3]])) : "ne" in t && "sw" in t ? (e = g(t.ne), n = g(t.sw)) : "n" in t && "e" in t && "s" in t && "w" in t && (e = g([t.n, t.e]), n = g([t.s, t.w])), e && n ? new H.LatLngBounds(n, e) : null)
    }

    function w(t, e, n, o, a) {
        var s = n ? g(o.td, !1, !0) : !1, r = s ? {latLng: s} : o.td.address ? i(o.td.address) ? {address: o.td.address} : o.td.address : !1, l = r ? U.get(r) : !1, u = this;
        r ? (a = a || 0, l ? (o.latLng = l.results[0].geometry.location, o.results = l.results, o.status = l.status, e.apply(t, [o])) : (r.location && (r.location = g(r.location)), r.bounds && (r.bounds = y(r.bounds)), C().geocode(r, function (i, s) {
            s === H.GeocoderStatus.OK ? (U.store(r, {
                results: i,
                status: s
            }), o.latLng = i[0].geometry.location, o.results = i, o.status = s, e.apply(t, [o])) : s === H.GeocoderStatus.OVER_QUERY_LIMIT && a < D.queryLimit.attempt ? setTimeout(function () {
                w.apply(u, [t, e, n, o, a + 1])
            }, D.queryLimit.delay + Math.floor(Math.random() * D.queryLimit.random)) : (h("geocode failed", s, r), o.latLng = o.results = !1, o.status = s, e.apply(t, [o]))
        }))) : (o.latLng = g(o.td, !1, !0), e.apply(t, [o]))
    }

    function b(e, n, i, o) {
        function a() {
            do r++; while (r < e.length && !("address" in e[r]));
            return r >= e.length ? void i.apply(n, [o]) : void w(s, function (n) {
                delete n.td, t.extend(e[r], n), a.apply(s, [])
            }, !0, {td: e[r]})
        }

        var s = this, r = -1;
        a()
    }

    function x(t, e, n) {
        var i = !1;
        navigator && navigator.geolocation ? navigator.geolocation.getCurrentPosition(function (o) {
            i || (i = !0, n.latLng = new H.LatLng(o.coords.latitude, o.coords.longitude), e.apply(t, [n]))
        }, function () {
            i || (i = !0, n.latLng = !1, e.apply(t, [n]))
        }, n.opts.getCurrentPosition) : (n.latLng = !1, e.apply(t, [n]))
    }

    function S(t) {
        var e, i = !1;
        if (n(t) && t.hasOwnProperty("get")) {
            for (e in t)if ("get" !== e)return !1;
            i = !t.get.hasOwnProperty("callback")
        }
        return i
    }

    function C() {
        return q.geocoder || (q.geocoder = new H.Geocoder), q.geocoder
    }

    function _() {
        var t = [];
        this.get = function (e) {
            if (t.length) {
                var i, o, a, s, r, l = c(e);
                for (i = 0; i < t.length; i++) {
                    for (s = t[i], r = l.length === s.keys.length, o = 0; o < l.length && r; o++)a = l[o], r = a in s.request, r && (r = n(e[a]) && "equals" in e[a] && W(e[a]) ? e[a].equals(s.request[a]) : e[a] === s.request[a]);
                    if (r)return s.results
                }
            }
        }, this.store = function (e, n) {
            t.push({request: e, keys: c(e), results: n})
        }
    }

    function M() {
        var t = [], e = this;
        e.empty = function () {
            return !t.length
        }, e.add = function (e) {
            t.push(e)
        }, e.get = function () {
            return t.length ? t[0] : !1
        }, e.ack = function () {
            t.shift()
        }
    }

    function A() {
        function e(t) {
            return {id: t.id, name: t.name, object: t.obj, tag: t.tag, data: t.data}
        }

        function n(t) {
            W(t.setMap) && t.setMap(null), W(t.remove) && t.remove(), W(t.free) && t.free(), t = null
        }

        var i = {}, o = {}, s = this;
        s.add = function (t, e, n, a) {
            var l = t.td || {}, u = r(l.id);
            return i[e] || (i[e] = []), u in o && s.clearById(u), o[u] = {
                obj: n,
                sub: a,
                name: e,
                id: u,
                tag: l.tag,
                data: l.data
            }, i[e].push(u), u
        }, s.getById = function (t, n, i) {
            var a = !1;
            return t in o && (a = n ? o[t].sub : i ? e(o[t]) : o[t].obj), a
        }, s.get = function (t, n, a, s) {
            var r, l, u = m(a);
            if (!i[t] || !i[t].length)return null;
            for (r = i[t].length; r;)if (r--, l = i[t][n ? r : i[t].length - r - 1], l && o[l]) {
                if (u && !u(o[l].tag))continue;
                return s ? e(o[l]) : o[l].obj
            }
            return null
        }, s.all = function (t, n, s) {
            var r = [], l = m(n), u = function (t) {
                var n, a;
                for (n = 0; n < i[t].length; n++)if (a = i[t][n], a && o[a]) {
                    if (l && !l(o[a].tag))continue;
                    r.push(s ? e(o[a]) : o[a].obj)
                }
            };
            if (t in i)u(t); else if (a(t))for (t in i)u(t);
            return r
        }, s.rm = function (t, e, n) {
            var a, r;
            if (!i[t])return !1;
            if (e)if (n)for (a = i[t].length - 1; a >= 0 && (r = i[t][a], !e(o[r].tag)); a--); else for (a = 0; a < i[t].length && (r = i[t][a], !e(o[r].tag)); a++); else a = n ? i[t].length - 1 : 0;
            return a in i[t] ? s.clearById(i[t][a], a) : !1
        }, s.clearById = function (t, e) {
            if (t in o) {
                var s, r = o[t].name;
                for (s = 0; a(e) && s < i[r].length; s++)t === i[r][s] && (e = s);
                return n(o[t].obj), o[t].sub && n(o[t].sub), delete o[t], i[r].splice(e, 1), !0
            }
            return !1
        }, s.objGetById = function (t) {
            var e, n;
            if (i.clusterer)for (n in i.clusterer)if ((e = o[i.clusterer[n]].obj.getById(t)) !== !1)return e;
            return !1
        }, s.objClearById = function (t) {
            var e;
            if (i.clusterer)for (e in i.clusterer)if (o[i.clusterer[e]].obj.clearById(t))return !0;
            return null
        }, s.clear = function (t, e, n, o) {
            var a, r, l, u = m(o);
            if (t && t.length)t = v(t); else {
                t = [];
                for (a in i)t.push(a)
            }
            for (r = 0; r < t.length; r++)if (l = t[r], e)s.rm(l, u, !0); else if (n)s.rm(l, u, !1); else for (; s.rm(l, u, !1););
        }, s.objClear = function (e, n, a, s) {
            var r;
            if (i.clusterer && (t.inArray("marker", e) >= 0 || !e.length))for (r in i.clusterer)o[i.clusterer[r]].obj.clear(n, a, s)
        }
    }

    function L(e, n, o) {
        function a(t) {
            var e = {};
            return e[t] = {}, e
        }

        function s() {
            var t;
            for (t in o)if (o.hasOwnProperty(t) && !l.hasOwnProperty(t))return t
        }

        var r, l = {}, u = this, c = {
            latLng: {
                map: !1,
                marker: !1,
                infowindow: !1,
                circle: !1,
                overlay: !1,
                getlatlng: !1,
                getmaxzoom: !1,
                getelevation: !1,
                streetviewpanorama: !1,
                getaddress: !0
            }, geoloc: {getgeoloc: !0}
        };
        i(o) && (o = a(o)), u.run = function () {
            for (var i, a; i = s();) {
                if (W(e[i]))return r = i, a = t.extend(!0, {}, D[i] || {}, o[i].options || {}), void(i in c.latLng ? o[i].values ? b(o[i].values, e, e[i], {
                    td: o[i],
                    opts: a,
                    session: l
                }) : w(e, e[i], c.latLng[i], {td: o[i], opts: a, session: l}) : i in c.geoloc ? x(e, e[i], {
                    td: o[i],
                    opts: a,
                    session: l
                }) : e[i].apply(e, [{td: o[i], opts: a, session: l}]));
                l[i] = null
            }
            n.apply(e, [o, l])
        }, u.ack = function (t) {
            l[r] = t, u.run.apply(u, [])
        }
    }

    function T() {
        return q.ds || (q.ds = new H.DirectionsService), q.ds
    }

    function P() {
        return q.dms || (q.dms = new H.DistanceMatrixService), q.dms
    }

    function I() {
        return q.mzs || (q.mzs = new H.MaxZoomService), q.mzs
    }

    function k() {
        return q.es || (q.es = new H.ElevationService), q.es
    }

    function E(t) {
        function e() {
            var t = this;
            return t.onAdd = function () {
            }, t.onRemove = function () {
            }, t.draw = function () {
            }, D.classes.OverlayView.apply(t, [])
        }

        e.prototype = D.classes.OverlayView.prototype;
        var n = new e;
        return n.setMap(t), n
    }

    function N(e, i, o) {
        function a(t) {
            N[t] || (delete z[t].options.map, N[t] = new D.classes.Marker(z[t].options), u(e, {td: z[t]}, N[t], z[t].id))
        }

        function s() {
            return (y = B.getProjection()) ? (M = !0, T.push(H.event.addListener(i, "zoom_changed", h)), T.push(H.event.addListener(i, "bounds_changed", h)), void v()) : void setTimeout(function () {
                s.apply(L, [])
            }, 25)
        }

        function l(t) {
            n(P[t]) ? (W(P[t].obj.setMap) && P[t].obj.setMap(null), W(P[t].obj.remove) && P[t].obj.remove(), W(P[t].shadow.remove) && P[t].obj.remove(), W(P[t].shadow.setMap) && P[t].shadow.setMap(null), delete P[t].obj, delete P[t].shadow) : N[t] && N[t].setMap(null), delete P[t]
        }

        function c() {
            var t, e, n, i, o, a, s, r, l = Math.cos, u = Math.sin, c = arguments;
            return c[0] instanceof H.LatLng ? (t = c[0].lat(), n = c[0].lng(), c[1] instanceof H.LatLng ? (e = c[1].lat(), i = c[1].lng()) : (e = c[1], i = c[2])) : (t = c[0], n = c[1], c[2] instanceof H.LatLng ? (e = c[2].lat(), i = c[2].lng()) : (e = c[2], i = c[3])), o = Math.PI * t / 180, a = Math.PI * n / 180, s = Math.PI * e / 180, r = Math.PI * i / 180, 6371e3 * Math.acos(Math.min(l(o) * l(s) * l(a) * l(r) + l(o) * u(a) * l(s) * u(r) + u(o) * u(s), 1))
        }

        function d() {
            var t = c(i.getCenter(), i.getBounds().getNorthEast()), e = new H.Circle({
                center: i.getCenter(),
                radius: 1.25 * t
            });
            return e.getBounds()
        }

        function p() {
            var t, e = {};
            for (t in P)e[t] = !0;
            return e
        }

        function h() {
            clearTimeout(g), g = setTimeout(v, 25)
        }

        function f(t) {
            var e = y.fromLatLngToDivPixel(t), n = y.fromDivPixelToLatLng(new H.Point(e.x + o.radius, e.y - o.radius)), i = y.fromDivPixelToLatLng(new H.Point(e.x - o.radius, e.y + o.radius));
            return new H.LatLngBounds(i, n)
        }

        function v() {
            if (!S && !_ && M) {
                var e, n, a, s, r, u, c, h, v, m, g, y = !1, x = [], L = {}, T = i.getZoom(), I = "maxZoom" in o && T > o.maxZoom, k = p();
                for (C = !1, T > 3 && (r = d(), y = r.getSouthWest().lng() < r.getNorthEast().lng()), e = 0; e < z.length; e++)!z[e] || y && !r.contains(z[e].options.position) || w && !w(O[e]) || x.push(e);
                for (; ;) {
                    for (e = 0; L[e] && e < x.length;)e++;
                    if (e === x.length)break;
                    if (s = [], A && !I) {
                        g = 10;
                        do for (h = s, s = [], g--, c = h.length ? r.getCenter() : z[x[e]].options.position, r = f(c), n = e; n < x.length; n++)L[n] || r.contains(z[x[n]].options.position) && s.push(n); while (h.length < s.length && s.length > 1 && g)
                    } else for (n = e; n < x.length; n++)if (!L[n]) {
                        s.push(n);
                        break
                    }
                    for (u = {
                        indexes: [],
                        ref: []
                    }, v = m = 0, a = 0; a < s.length; a++)L[s[a]] = !0, u.indexes.push(x[s[a]]), u.ref.push(x[s[a]]), v += z[x[s[a]]].options.position.lat(), m += z[x[s[a]]].options.position.lng();
                    v /= s.length, m /= s.length, u.latLng = new H.LatLng(v, m), u.ref = u.ref.join("-"), u.ref in k ? delete k[u.ref] : (1 === s.length && (P[u.ref] = !0), b(u))
                }
                t.each(k, function (t) {
                    l(t)
                }), _ = !1
            }
        }

        var g, y, w, b, x, S = !1, C = !1, _ = !1, M = !1, A = !0, L = this, T = [], P = {}, I = {}, k = {}, N = [], z = [], O = [], B = E(i, o.radius);
        s(), L.getById = function (t) {
            return t in I ? (a(I[t]), N[I[t]]) : !1
        }, L.rm = function (t) {
            var e = I[t];
            N[e] && N[e].setMap(null), delete N[e], N[e] = !1, delete z[e], z[e] = !1, delete O[e], O[e] = !1, delete I[t], delete k[e], C = !0
        }, L.clearById = function (t) {
            return t in I ? (L.rm(t), !0) : void 0
        }, L.clear = function (t, e, n) {
            var i, o, a, s, r, l = [], u = m(n);
            for (t ? (i = z.length - 1, o = -1, a = -1) : (i = 0, o = z.length, a = 1), s = i; s !== o && (!z[s] || u && !u(z[s].tag) || (l.push(k[s]), !e && !t)); s += a);
            for (r = 0; r < l.length; r++)L.rm(l[r])
        }, L.add = function (t, e) {
            t.id = r(t.id), L.clearById(t.id), I[t.id] = N.length, k[N.length] = t.id, N.push(null), z.push(t), O.push(e), C = !0
        }, L.addMarker = function (t, n) {
            n = n || {}, n.id = r(n.id), L.clearById(n.id), n.options || (n.options = {}), n.options.position = t.getPosition(), u(e, {td: n}, t, n.id), I[n.id] = N.length, k[N.length] = n.id, N.push(t), z.push(n), O.push(n.data || {}), C = !0
        }, L.td = function (t) {
            return z[t]
        }, L.value = function (t) {
            return O[t]
        }, L.marker = function (t) {
            return t in N ? (a(t), N[t]) : !1
        }, L.markerIsSet = function (t) {
            return Boolean(N[t])
        }, L.setMarker = function (t, e) {
            N[t] = e
        }, L.store = function (t, e, n) {
            P[t.ref] = {obj: e, shadow: n}
        }, L.free = function () {
            var e;
            for (e = 0; e < T.length; e++)H.event.removeListener(T[e]);
            T = [], t.each(P, function (t) {
                l(t)
            }), P = {}, t.each(z, function (t) {
                z[t] = null
            }), z = [], t.each(N, function (t) {
                N[t] && (N[t].setMap(null), delete N[t])
            }), N = [], t.each(O, function (t) {
                delete O[t]
            }), O = [], I = {}, k = {}
        }, L.filter = function (t) {
            w = t, v()
        }, L.enable = function (t) {
            A !== t && (A = t, v())
        }, L.display = function (t) {
            b = t
        }, L.error = function (t) {
            x = t
        }, L.beginUpdate = function () {
            S = !0
        }, L.endUpdate = function () {
            S = !1, C && v()
        }, L.autofit = function (t) {
            var e;
            for (e = 0; e < z.length; e++)z[e] && t.extend(z[e].options.position)
        }
    }

    function z(t, e) {
        var n = this;
        n.id = function () {
            return t
        }, n.filter = function (t) {
            e.filter(t)
        }, n.enable = function () {
            e.enable(!0)
        }, n.disable = function () {
            e.enable(!1)
        }, n.add = function (t, n, i) {
            i || e.beginUpdate(), e.addMarker(t, n), i || e.endUpdate()
        }, n.getById = function (t) {
            return e.getById(t)
        }, n.clearById = function (t, n) {
            var i;
            return n || e.beginUpdate(), i = e.clearById(t), n || e.endUpdate(), i
        }, n.clear = function (t, n, i, o) {
            o || e.beginUpdate(), e.clear(t, n, i), o || e.endUpdate()
        }
    }

    function O(e, n, i, o) {
        var a = this, s = [];
        D.classes.OverlayView.call(a), a.setMap(e), a.onAdd = function () {
            var e = a.getPanes();
            n.pane in e && t(e[n.pane]).append(o), t.each("dblclick click mouseover mousemove mouseout mouseup mousedown".split(" "), function (e, n) {
                s.push(H.event.addDomListener(o[0], n, function (e) {
                    t.Event(e).stopPropagation(), H.event.trigger(a, n, [e]), a.draw()
                }))
            }), s.push(H.event.addDomListener(o[0], "contextmenu", function (e) {
                t.Event(e).stopPropagation(), H.event.trigger(a, "rightclick", [e]), a.draw()
            }))
        }, a.getPosition = function () {
            return i
        }, a.setPosition = function (t) {
            i = t, a.draw()
        }, a.draw = function () {
            var t = a.getProjection().fromLatLngToDivPixel(i);
            o.css("left", t.x + n.offset.x + "px").css("top", t.y + n.offset.y + "px")
        }, a.onRemove = function () {
            var t;
            for (t = 0; t < s.length; t++)H.event.removeListener(s[t]);
            o.remove()
        }, a.hide = function () {
            o.hide()
        }, a.show = function () {
            o.show()
        }, a.toggle = function () {
            o && (o.is(":visible") ? a.show() : a.hide())
        }, a.toggleDOM = function () {
            a.setMap(a.getMap() ? null : e)
        }, a.getDOMElement = function () {
            return o[0]
        }
    }

    function B(o) {
        function s() {
            !x && (x = C.get()) && x.run()
        }

        function c() {
            x = null, C.ack(), s.call(S)
        }

        function d(t) {
            var e, n = t.td.callback;
            n && (e = Array.prototype.slice.call(arguments, 1), W(n) ? n.apply(o, e) : R(n) && W(n[1]) && n[1].apply(n[0], e))
        }

        function f(t, e, n) {
            n && u(o, t, e, n), d(t, e), x.ack(e)
        }

        function m(e, n) {
            n = n || {};
            var i = n.td && n.td.options ? n.td.options : 0;
            E ? i && (i.center && (i.center = g(i.center)), E.setOptions(i)) : (i = n.opts || t.extend(!0, {}, D.map, i || {}), i.center = e || g(i.center), E = new D.classes.Map(o.get(0), i))
        }

        function w(n) {
            var i, a, s = new N(o, E, n), r = {}, l = {}, c = [], d = /^[0-9]+$/;
            for (a in n)d.test(a) ? (c.push(1 * a), l[a] = n[a], l[a].width = l[a].width || 0, l[a].height = l[a].height || 0) : r[a] = n[a];
            return c.sort(function (t, e) {
                return t > e
            }), i = r.calculator ? function (e) {
                var n = [];
                return t.each(e, function (t, e) {
                    n.push(s.value(e))
                }), r.calculator.apply(o, [n])
            } : function (t) {
                return t.length
            }, s.error(function () {
                h.apply(S, arguments)
            }), s.display(function (a) {
                var d, p, h, f, v, m, y = i(a.indexes);
                if (n.force || y > 1)for (d = 0; d < c.length; d++)c[d] <= y && (p = l[c[d]]);
                p ? (v = p.offset || [-p.width / 2, -p.height / 2], h = t.extend({}, r), h.options = t.extend({
                    pane: "overlayLayer",
                    content: p.content ? p.content.replace("CLUSTER_COUNT", y) : "",
                    offset: {x: ("x" in v ? v.x : v[0]) || 0, y: ("y" in v ? v.y : v[1]) || 0}
                }, r.options || {}), f = S.overlay({
                    td: h,
                    opts: h.options,
                    latLng: g(a)
                }, !0), h.options.pane = "floatShadow", h.options.content = t(document.createElement("div")).width(p.width + "px").height(p.height + "px").css({cursor: "pointer"}), m = S.overlay({
                    td: h,
                    opts: h.options,
                    latLng: g(a)
                }, !0), r.data = {latLng: g(a), markers: []}, t.each(a.indexes, function (t, e) {
                    r.data.markers.push(s.value(e)), s.markerIsSet(e) && s.marker(e).setMap(null)
                }), u(o, {td: r}, m, e, {main: f, shadow: m}), s.store(a, f, m)) : t.each(a.indexes, function (t, e) {
                    s.marker(e).setMap(E)
                })
            }), s
        }

        function b(e, n, i) {
            var a = [], s = "values" in e.td;
            return s || (e.td.values = [{options: e.opts}]), e.td.values.length ? (m(), t.each(e.td.values, function (t, s) {
                var r, l, c, d, h = p(e, s);
                if (h.options[i])if (h.options[i][0][0] && R(h.options[i][0][0]))for (l = 0; l < h.options[i].length; l++)for (c = 0; c < h.options[i][l].length; c++)h.options[i][l][c] = g(h.options[i][l][c]); else for (l = 0; l < h.options[i].length; l++)h.options[i][l] = g(h.options[i][l]);
                h.options.map = E, d = new H[n](h.options), a.push(d), r = _.add({td: h}, n.toLowerCase(), d), u(o, {td: h}, d, r)
            }), void f(e, s ? a : a[0])) : void f(e, !1)
        }

        var x, S = this, C = new M, _ = new A, E = null;
        S._plan = function (t) {
            var e;
            for (e = 0; e < t.length; e++)C.add(new L(S, c, t[e]));
            s()
        }, S.map = function (t) {
            m(t.latLng, t), u(o, t, E), f(t, E)
        }, S.destroy = function (t) {
            _.clear(), o.empty(), E && (E = null), f(t, !0)
        }, S.overlay = function (e, n) {
            var i = [], a = "values" in e.td;
            return a || (e.td.values = [{
                latLng: e.latLng,
                options: e.opts
            }]), e.td.values.length ? (O.__initialised || (O.prototype = new D.classes.OverlayView, O.__initialised = !0), t.each(e.td.values, function (a, s) {
                var r, l, c = p(e, s), d = t(document.createElement("div")).css({
                    border: "none",
                    borderWidth: 0,
                    position: "absolute"
                });
                d.append(c.options.content), l = new O(E, c.options, g(c) || g(s), d), i.push(l), d = null, n || (r = _.add(e, "overlay", l), u(o, {td: c}, l, r))
            }), n ? i[0] : void f(e, a ? i : i[0])) : void f(e, !1)
        }, S.marker = function (e) {
            var n, i, a, s = "values" in e.td, l = !E;
            return s || (e.opts.position = e.latLng || g(e.opts.position), e.td.values = [{options: e.opts}]), e.td.values.length ? (l && m(), e.td.cluster && !E.getBounds() ? void H.event.addListenerOnce(E, "bounds_changed", function () {
                S.marker.apply(S, [e])
            }) : void(e.td.cluster ? (e.td.cluster instanceof z ? (i = e.td.cluster, a = _.getById(i.id(), !0)) : (a = w(e.td.cluster), i = new z(r(e.td.id, !0), a), _.add(e, "clusterer", i, a)), a.beginUpdate(), t.each(e.td.values, function (t, n) {
                var i = p(e, n);
                i.options.position = g(i.options.position ? i.options.position : n), i.options.position && (i.options.map = E, l && (E.setCenter(i.options.position), l = !1), a.add(i, n))
            }), a.endUpdate(), f(e, i)) : (n = [], t.each(e.td.values, function (t, i) {
                var a, s, r = p(e, i);
                r.options.position = g(r.options.position ? r.options.position : i), r.options.position && (r.options.map = E, l && (E.setCenter(r.options.position), l = !1), s = new D.classes.Marker(r.options), n.push(s), a = _.add({td: r}, "marker", s), u(o, {td: r}, s, a))
            }), f(e, s ? n : n[0])))) : void f(e, !1)
        }, S.getroute = function (t) {
            t.opts.origin = g(t.opts.origin, !0), t.opts.destination = g(t.opts.destination, !0), T().route(t.opts, function (e, n) {
                d(t, n === H.DirectionsStatus.OK ? e : !1, n), x.ack()
            })
        }, S.getdistance = function (t) {
            var e;
            for (t.opts.origins = v(t.opts.origins), e = 0; e < t.opts.origins.length; e++)t.opts.origins[e] = g(t.opts.origins[e], !0);
            for (t.opts.destinations = v(t.opts.destinations), e = 0; e < t.opts.destinations.length; e++)t.opts.destinations[e] = g(t.opts.destinations[e], !0);
            P().getDistanceMatrix(t.opts, function (e, n) {
                d(t, n === H.DistanceMatrixStatus.OK ? e : !1, n), x.ack()
            })
        }, S.infowindow = function (n) {
            var i = [], s = "values" in n.td;
            s || (n.latLng && (n.opts.position = n.latLng), n.td.values = [{options: n.opts}]), t.each(n.td.values, function (t, r) {
                var l, c, d = p(n, r);
                d.options.position = g(d.options.position ? d.options.position : r.latLng), E || m(d.options.position), c = new D.classes.InfoWindow(d.options), c && (a(d.open) || d.open) && (s ? c.open(E, d.anchor || e) : c.open(E, d.anchor || (n.latLng ? e : n.session.marker ? n.session.marker : e))), i.push(c), l = _.add({td: d}, "infowindow", c), u(o, {td: d}, c, l)
            }), f(n, s ? i : i[0])
        }, S.circle = function (e) {
            var n = [], i = "values" in e.td;
            return i || (e.opts.center = e.latLng || g(e.opts.center), e.td.values = [{options: e.opts}]), e.td.values.length ? (t.each(e.td.values, function (t, i) {
                var a, s, r = p(e, i);
                r.options.center = g(r.options.center ? r.options.center : i), E || m(r.options.center), r.options.map = E, s = new D.classes.Circle(r.options), n.push(s), a = _.add({td: r}, "circle", s), u(o, {td: r}, s, a)
            }), void f(e, i ? n : n[0])) : void f(e, !1)
        }, S.getaddress = function (t) {
            d(t, t.results, t.status), x.ack()
        }, S.getlatlng = function (t) {
            d(t, t.results, t.status), x.ack()
        }, S.getmaxzoom = function (t) {
            I().getMaxZoomAtLatLng(t.latLng, function (e) {
                d(t, e.status === H.MaxZoomStatus.OK ? e.zoom : !1, status), x.ack()
            })
        }, S.getelevation = function (t) {
            var e, n = [], i = function (e, n) {
                d(t, n === H.ElevationStatus.OK ? e : !1, n), x.ack()
            };
            if (t.latLng)n.push(t.latLng); else for (n = v(t.td.locations || []), e = 0; e < n.length; e++)n[e] = g(n[e]);
            if (n.length)k().getElevationForLocations({locations: n}, i); else {
                if (t.td.path && t.td.path.length)for (e = 0; e < t.td.path.length; e++)n.push(g(t.td.path[e]));
                n.length ? k().getElevationAlongPath({path: n, samples: t.td.samples}, i) : x.ack()
            }
        }, S.defaults = function (e) {
            t.each(e.td, function (e, i) {
                D[e] = n(D[e]) ? t.extend({}, D[e], i) : i
            }), x.ack(!0)
        }, S.rectangle = function (e) {
            var n = [], i = "values" in e.td;
            return i || (e.td.values = [{options: e.opts}]), e.td.values.length ? (t.each(e.td.values, function (t, i) {
                var a, s, r = p(e, i);
                r.options.bounds = y(r.options.bounds ? r.options.bounds : i), E || m(r.options.bounds.getCenter()), r.options.map = E, s = new D.classes.Rectangle(r.options), n.push(s), a = _.add({td: r}, "rectangle", s), u(o, {td: r}, s, a)
            }), void f(e, i ? n : n[0])) : void f(e, !1)
        }, S.polyline = function (t) {
            b(t, "Polyline", "path")
        }, S.polygon = function (t) {
            b(t, "Polygon", "paths")
        }, S.trafficlayer = function (t) {
            m();
            var e = _.get("trafficlayer");
            e || (e = new D.classes.TrafficLayer, e.setMap(E), _.add(t, "trafficlayer", e)), f(t, e)
        }, S.bicyclinglayer = function (t) {
            m();
            var e = _.get("bicyclinglayer");
            e || (e = new D.classes.BicyclingLayer, e.setMap(E), _.add(t, "bicyclinglayer", e)), f(t, e)
        }, S.groundoverlay = function (t) {
            t.opts.bounds = y(t.opts.bounds), t.opts.bounds && m(t.opts.bounds.getCenter());
            var e, n = new D.classes.GroundOverlay(t.opts.url, t.opts.bounds, t.opts.opts);
            n.setMap(E), e = _.add(t, "groundoverlay", n), f(t, n, e)
        }, S.streetviewpanorama = function (e) {
            e.opts.opts || (e.opts.opts = {}), e.latLng ? e.opts.opts.position = e.latLng : e.opts.opts.position && (e.opts.opts.position = g(e.opts.opts.position)), e.td.divId ? e.opts.container = document.getElementById(e.td.divId) : e.opts.container && (e.opts.container = t(e.opts.container).get(0));
            var n, i = new D.classes.StreetViewPanorama(e.opts.container, e.opts.opts);
            i && E.setStreetView(i), n = _.add(e, "streetviewpanorama", i), f(e, i, n)
        }, S.kmllayer = function (e) {
            var n = [], i = "values" in e.td;
            return i || (e.td.values = [{options: e.opts}]), e.td.values.length ? (t.each(e.td.values, function (t, i) {
                var a, s, r, c = p(e, i);
                E || m(), r = c.options, c.options.opts && (r = c.options.opts, c.options.url && (r.url = c.options.url)), r.map = E, s = l("3.10") ? new D.classes.KmlLayer(r) : new D.classes.KmlLayer(r.url, r), n.push(s), a = _.add({td: c}, "kmllayer", s), u(o, {td: c}, s, a)
            }), void f(e, i ? n : n[0])) : void f(e, !1)
        }, S.panel = function (e) {
            m();
            var n, i, s = 0, r = 0, l = t(document.createElement("div"));
            l.css({
                position: "absolute",
                zIndex: 1e3,
                visibility: "hidden"
            }), e.opts.content && (i = t(e.opts.content), l.append(i), o.first().prepend(l), a(e.opts.left) ? a(e.opts.right) ? e.opts.center && (s = (o.width() - i.width()) / 2) : s = o.width() - i.width() - e.opts.right : s = e.opts.left, a(e.opts.top) ? a(e.opts.bottom) ? e.opts.middle && (r = (o.height() - i.height()) / 2) : r = o.height() - i.height() - e.opts.bottom : r = e.opts.top, l.css({
                top: r,
                left: s,
                visibility: "visible"
            })), n = _.add(e, "panel", l), f(e, l, n), l = null
        }, S.directionsrenderer = function (e) {
            e.opts.map = E;
            var n, i = new H.DirectionsRenderer(e.opts);
            e.td.divId ? i.setPanel(document.getElementById(e.td.divId)) : e.td.container && i.setPanel(t(e.td.container).get(0)), n = _.add(e, "directionsrenderer", i), f(e, i, n)
        }, S.getgeoloc = function (t) {
            f(t, t.latLng)
        }, S.styledmaptype = function (t) {
            m();
            var e = new D.classes.StyledMapType(t.td.styles, t.opts);
            E.mapTypes.set(t.td.id, e), f(t, e)
        }, S.imagemaptype = function (t) {
            m();
            var e = new D.classes.ImageMapType(t.opts);
            E.mapTypes.set(t.td.id, e), f(t, e)
        }, S.autofit = function (e) {
            var n = new H.LatLngBounds;
            t.each(_.all(), function (t, e) {
                e.getPosition ? n.extend(e.getPosition()) : e.getBounds ? (n.extend(e.getBounds().getNorthEast()), n.extend(e.getBounds().getSouthWest())) : e.getPaths ? e.getPaths().forEach(function (t) {
                    t.forEach(function (t) {
                        n.extend(t)
                    })
                }) : e.getPath ? e.getPath().forEach(function (t) {
                    n.extend(t)
                }) : e.getCenter ? n.extend(e.getCenter()) : "function" == typeof z && e instanceof z && (e = _.getById(e.id(), !0), e && e.autofit(n))
            }), n.isEmpty() || E.getBounds() && E.getBounds().equals(n) || ("maxZoom" in e.td && H.event.addListenerOnce(E, "bounds_changed", function () {
                this.getZoom() > e.td.maxZoom && this.setZoom(e.td.maxZoom)
            }), E.fitBounds(n)), f(e, !0)
        }, S.clear = function (e) {
            if (i(e.td)) {
                if (_.clearById(e.td) || _.objClearById(e.td))return void f(e, !0);
                e.td = {name: e.td}
            }
            e.td.id ? t.each(v(e.td.id), function (t, e) {
                _.clearById(e) || _.objClearById(e)
            }) : (_.clear(v(e.td.name), e.td.last, e.td.first, e.td.tag), _.objClear(v(e.td.name), e.td.last, e.td.first, e.td.tag)), f(e, !0)
        }, S.get = function (n, o, a) {
            var s, r, l = o ? n : n.td;
            return o || (a = l.full), i(l) ? (r = _.getById(l, !1, a) || _.objGetById(l), r === !1 && (s = l, l = {})) : s = l.name, "map" === s && (r = E), r || (r = [], l.id ? (t.each(v(l.id), function (t, e) {
                r.push(_.getById(e, !1, a) || _.objGetById(e))
            }), R(l.id) || (r = r[0])) : (t.each(s ? v(s) : [e], function (e, n) {
                var i;
                l.first ? (i = _.get(n, !1, l.tag, a), i && r.push(i)) : l.all ? t.each(_.all(n, l.tag, a), function (t, e) {
                    r.push(e)
                }) : (i = _.get(n, !0, l.tag, a), i && r.push(i))
            }), l.all || R(s) || (r = r[0]))), r = R(r) || !l.all ? r : [r], o ? r : void f(n, r)
        }, S.exec = function (e) {
            t.each(v(e.td.func), function (n, i) {
                t.each(S.get(e.td, !0, e.td.hasOwnProperty("full") ? e.td.full : !0), function (t, e) {
                    i.call(o, e)
                })
            }), f(e, !0)
        }, S.trigger = function (e) {
            if (i(e.td))H.event.trigger(E, e.td); else {
                var n = [E, e.td.eventName];
                e.td.var_args && t.each(e.td.var_args, function (t, e) {
                    n.push(e)
                }), H.event.trigger.apply(H.event, n)
            }
            d(e), x.ack()
        }
    }

    var D, H, j = 0, W = t.isFunction, R = t.isArray, q = {}, U = new _;
    t.fn.gmap3 = function () {
        var e, n = [], i = !0, o = [];
        for (s(), e = 0; e < arguments.length; e++)arguments[e] && n.push(arguments[e]);
        return n.length || n.push("map"), t.each(this, function () {
            var e = t(this), a = e.data("gmap3");
            i = !1, a || (a = new B(e), e.data("gmap3", a)), 1 !== n.length || "get" !== n[0] && !S(n[0]) ? a._plan(n) : o.push("get" === n[0] ? a.get("map", !0) : a.get(n[0].get, !0, n[0].get.full))
        }), o.length ? 1 === o.length ? o[0] : o : this
    }
}(jQuery);