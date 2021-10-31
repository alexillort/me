function grain(t) {
    function e() {
        s = l.width = 2 * l.clientWidth, r = l.height = 2 * l.clientHeight, h = l.getContext("2d"), h.scale(u, d)
    }

    function i() {
        v = document.createElement("canvas"), v.width = c, v.height = c, y = v.getContext("2d"), w = y.createImageData(c, c)
    }

    function n() {
        for (var t, e = 0; m > e; e += 4) t = 255 * Math.random() | 0, w.data[e] = t, w.data[e + 1] = t, w.data[e + 2] = t, w.data[e + 3] = g;
        y.putImageData(w, 0, 0)
    }

    function o() {
        h.clearRect(0, 0, s, r), h.fillStyle = h.createPattern(v, "repeat"), h.fillRect(0, 0, s, r)
    }

    function a() {
        ++C % p === 0 && (n(), o()), ("play" === t || "init" === t) && requestAnimationFrame(a), "pause" === t && (n(), o(), cancelAnimationFrame(a))
    }
    var s, r, l = document.getElementById("grain"),
        h, c = 150,
        u = 1,
        d = 1,
        p = 8,
        f = 0,
        g = 20,
        m = c * c * 4,
        v, y, w, C = 0;
    "play" === t && requestAnimationFrame(a), jQuery(window).load(function() {
        e(), i(), requestAnimationFrame(a)
    })
}

function chart() {
    if (jQuery(".chart").length) var t = jQuery("#chart-maslow").get(0).getContext("2d"),
        e = new Chart(t).Line(maslowChartData, {
            responsive: !0,
            scaleShowGridLines: !1,
            scaleShowLabels: !1,
            showScale: !1,
            scaleGridLineColor: "rgba(0,0,0,0)"
        }),
        i = jQuery("#chart-student-1").get(0).getContext("2d"),
        e = new Chart(i).Bar(studentSurvey1, {
            responsive: !0,
            tooltipTemplate: "<%= value %>"
        }),
        n = jQuery("#chart-student-2").get(0).getContext("2d"),
        e = new Chart(n).Bar(studentSurvey2, {
            responsive: !0,
            tooltipTemplate: "<%= value %>%"
        }),
        o = jQuery("#chart-student-3").get(0).getContext("2d"),
        e = new Chart(o).Bar(studentSurvey3, {
            responsive: !0,
            tooltipTemplate: "<%= value %>%"
        }),
        a = jQuery("#chart-student-4").get(0).getContext("2d"),
        e = new Chart(a).Bar(studentSurvey4, {
            responsive: !0,
            tooltipTemplate: "<%= value %>%"
        })
}

function prepareFrames() {
    var t = document.createElement("img");
    t.src = "/wp-content/themes/aaron/media/compressed/video_bg-" + (cur + 1) + ".jpg", cur++, cur > stop ? (cur = homeFrame, prepareArray()) : prepareFrames()
}

function prepareArray() {
    var t = document.createElement("img");
    t.onload = function() {
        cur++, imgArr.push(this), cur >= stop ? (arrayReady = !0, jQuery("#main").removeClass("loading").addClass("animate-in"), jQuery(".video_bg_wrap").removeClass("loading").addClass("animate-in")) : prepareArray()
    }, t.src = "/wp-content/themes/aaron/media/compressed/video_bg-" + (cur + 1) + ".jpg"
}

function play(t, e, i) {
    var n = e;
    if (canvas.width = 1920, canvas.height = 1080, isPlaying);
    else if ("forward" === t) {
        isPlaying = !0;
        var o = !0,
            a = setInterval(function() {
                n++, n === i - 1 && (clearInterval(a), isPlaying = !1, setCurrentFrame(i)), ctx.drawImage(imgArr[n], 0, 0), o && (jQuery("#current_frame").addClass("hide"), o = !1)
            }, 1e3 / 24)
    } else {
        isPlaying = !0;
        var o = !0,
            a = setInterval(function() {
                n--, ctx.drawImage(imgArr[n], 0, 0), o && (jQuery("#current_frame").addClass("hide"), o = !1), n === i && (clearInterval(a), isPlaying = !1, setCurrentFrame(i))
            }, 1e3 / 24)
    }
}

function setCurrentFrame(t) {
    var e = document.createElement("img");
    0 === t ? jQuery("#current_frame").attr("src", "/wp-content/themes/aaron/media/full_quality/Main000.jpg") : 80 === t ? jQuery("#current_frame").attr("src", "/wp-content/themes/aaron/media/full_quality/Main080.jpg") : 170 === t && jQuery("#current_frame").attr("src", "/wp-content/themes/aaron/media/full_quality/Main170.jpg"), e.onload = function() {
        jQuery("#current_frame").removeClass("hide")
    }, 0 === t ? e.src = "/wp-content/themes/aaron/media/full_quality/Main000.jpg" : 80 === t ? e.src = "/wp-content/themes/aaron/media/full_quality/Main080.jpg" : 170 === t && (e.src = "/wp-content/themes/aaron/media/full_quality/Main170.jpg")
}

function hometoWork() {
    play("forward", homeFrame, workFrame)
}

function hometoAbout() {
    play("forward", homeFrame, aboutFrame)
}

function worktoHome() {
    play("reverse", workFrame, homeFrame)
}

function worktoAbout() {
    play("forward", workFrame, aboutFrame)
}

function abouttoHome() {
    play("reverse", aboutFrame, homeFrame)
}

function abouttoWork() {
    play("reverse", aboutFrame, workFrame)
}

function contentNavigationInit() {
    jQuery(".color-adapt").length && (jQuery(document).on("scroll", checkScroll), jQuery("[data-brightness]").each(function(t, e) {
        brightnessElements[t] = e
    }))
}

function checkScroll() {
    window.requestAnimationFrame ? window.requestAnimationFrame(onScroll) : setTimeout(onScroll, 300)
}

function onScroll(t) {
    var e = jQuery(document).scrollTop(),
        i = jQuery(window).height() / 2 - jQuery(".content-navigation").outerHeight(),
        n = e - jQuery(window).outerHeight();
    if (jQuery(".color-adapt").each(function(t, e) {
            var i = jQuery(e).offset().top,
                n = jQuery(e).offset().top + jQuery(e).outerHeight() / 2,
                o = jQuery(e);
            jQuery(brightnessElements).each(function(t, e) {
                var a = jQuery(e).offset().top,
                    s = jQuery(e).offset().top + jQuery(e).outerHeight();
                if (n >= a && s >= i) {
                    var r = jQuery(e).attr("data-brightness");
                    o.removeClass("light").removeClass("dark"), o.addClass(r)
                }
            })
        }), jQuery("#case-study-navigation .content-link").length) {
        jQuery("#case-study-navigation .content-link").each(function() {
            var t = jQuery(this),
                n = jQuery(t.attr("href"));
            n.offset().top - i <= e && n.offset().top + n.outerHeight() > e + i ? (jQuery(".content-link").parent("#case-study-navigation").removeClass("active"), t.parent("li").addClass("active")) : t.parent("li").removeClass("active")
        });
        var o = jQuery("#case-study-navigation .content-link:first-of-type"),
            a = jQuery(o.attr("href"));
        a.position().top - i <= e ? jQuery("#case-study-navigation").addClass("active") : jQuery("#case-study-navigation").removeClass("active"), jQuery(".page-end").length && (e + i >= jQuery(".page-end").offset().top ? jQuery("#case-study-navigation").addClass("hide") : jQuery("#case-study-navigation").removeClass("hide"))
    }
}

function init() {
    jQuery(".video").fitVids(), currentClass = jQuery("#main > div").data("page"), jQuery(".video_bg_wrap").addClass(currentClass), scroll = jQuery(window).scrollTop();
    var t = 300;
    jQuery(".project-item").on("click", function() {
        jQuery(this).addClass("active"), jQuery(this).css({
            top: scroll
        })
    }), onScrollCheck(), jQuery(window).scroll(function() {
        onScrollCheck()
    }), arrangeProjects(), jQuery(window).on("resize", function(t) {
        arrangeProjects()
    }), chart(), contentNavigationInit()
}

function onScrollCheck() {
    scroll = jQuery(window).scrollTop(), scroll > 0 ? jQuery("body").addClass("scrolled") : jQuery("body").removeClass("scrolled"), jQuery(".page-end").length && (scroll > jQuery(".page-end").offset().top || scroll >= jQuery("body").height() - jQuery(window).height() ? jQuery("body").addClass("at-page-end") : jQuery("body").removeClass("at-page-end"))
}

function arrangeProjects() {
    var t = jQuery(window).height(),
        e = t / 10 * 7,
        i = e;
    jQuery(".project-item").each(function(t, e) {
        i -= .2 * e.getBoundingClientRect().height, jQuery(e).css({
            top: i
        }), i += .8 * e.getBoundingClientRect().height + 100
    }), jQuery("#project-sizer").height(i - e - 300)
}! function(t, e, i, n) {
    "use strict";
    if (!e.history.pushState) return t.fn.smoothState = function() {
        return this
    }, void(t.fn.smoothState.options = {});
    if (!t.fn.smoothState) {
        var o = t("html, body"),
            a = e.console,
            s = {
                debug: !1,
                anchors: "a",
                hrefRegex: "",
                forms: "form",
                allowFormCaching: !1,
                repeatDelay: 500,
                blacklist: ".no-smoothState",
                prefetch: !1,
                prefetchOn: "mouseover touchstart",
                cacheLength: 0,
                loadingClass: "is-loading",
                scroll: !0,
                alterRequest: function(t) {
                    return t
                },
                onBefore: function(t, e) {},
                onStart: {
                    duration: 0,
                    render: function(t) {}
                },
                onProgress: {
                    duration: 0,
                    render: function(t) {}
                },
                onReady: {
                    duration: 0,
                    render: function(t, e) {
                        t.html(e)
                    }
                },
                onAfter: function(t, e) {}
            },
            r = {
                isExternal: function(t) {
                    var i = t.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
                    return "string" == typeof i[1] && i[1].length > 0 && i[1].toLowerCase() !== e.location.protocol ? !0 : "string" == typeof i[2] && i[2].length > 0 && i[2].replace(new RegExp(":(" + {
                        "http:": 80,
                        "https:": 443
                    } [e.location.protocol] + ")?$"), "") !== e.location.host ? !0 : !1
                },
                stripHash: function(t) {
                    return t.replace(/#.*/, "")
                },
                isHash: function(t, i) {
                    i = i || e.location.href;
                    var n = t.indexOf("#") > -1 ? !0 : !1,
                        o = r.stripHash(t) === r.stripHash(i) ? !0 : !1;
                    return n && o
                },
                translate: function(e) {
                    var i = {
                        dataType: "html",
                        type: "GET"
                    };
                    return e = "string" == typeof e ? t.extend({}, i, {
                        url: e
                    }) : t.extend({}, i, e)
                },
                shouldLoadAnchor: function(t, e, i) {
                    var o = t.prop("href");
                    return !(r.isExternal(o) || r.isHash(o) || t.is(e) || t.prop("target") || typeof i !== n && "" !== i && -1 === t.prop("href").search(i))
                },
                clearIfOverCapacity: function(t, e) {
                    return Object.keys || (Object.keys = function(t) {
                        var e, i = [];
                        for (e in t) Object.prototype.hasOwnProperty.call(t, e) && i.push(e);
                        return i
                    }), Object.keys(t).length > e && (t = {}), t
                },
                storePageIn: function(e, i, n, o) {
                    var a = t("<html></html>").append(t(n));
                    return e[i] = {
                        status: "loaded",
                        title: a.find("title").first().text(),
                        html: a.find("#" + o),
                        doc: n
                    }, e
                },
                triggerAllAnimationEndEvent: function(e, i) {
                    i = " " + i || "";
                    var n = 0,
                        o = "animationstart webkitAnimationStart oanimationstart MSAnimationStart",
                        a = "animationend webkitAnimationEnd oanimationend MSAnimationEnd",
                        s = "allanimationend",
                        l = function(i) {
                            t(i.delegateTarget).is(e) && (i.stopPropagation(), n++)
                        },
                        h = function(i) {
                            t(i.delegateTarget).is(e) && (i.stopPropagation(), n--, 0 === n && e.trigger(s))
                        };
                    e.on(o, l), e.on(a, h), e.on("allanimationend" + i, function() {
                        n = 0, r.redraw(e)
                    })
                },
                redraw: function(t) {
                    t.height()
                }
            },
            l = function(i) {
                if (null !== i.state) {
                    var n = e.location.href,
                        o = t("#" + i.state.id),
                        a = o.data("smoothState");
                    a.href === n || r.isHash(n, a.href) || a.load(n, !1)
                }
            },
            h = function(s, l) {
                var h = t(s),
                    c = h.prop("id"),
                    u = null,
                    d = !1,
                    p = {},
                    f = e.location.href,
                    g = function(t) {
                        t = t || !1, t && p.hasOwnProperty(t) ? delete p[t] : p = {}, h.data("smoothState").cache = p
                    },
                    m = function(e, i) {
                        i = i || t.noop;
                        var n = r.translate(e);
                        if (p = r.clearIfOverCapacity(p, l.cacheLength), !p.hasOwnProperty(n.url) || "undefined" != typeof n.data) {
                            p[n.url] = {
                                status: "fetching"
                            };
                            var o = t.ajax(n);
                            o.done(function(t) {
                                r.storePageIn(p, n.url, t, c), h.data("smoothState").cache = p
                            }), o.fail(function() {
                                p[n.url].status = "error"
                            }), i && o.always(i)
                        }
                    },
                    v = function() {
                        if (u) {
                            var e = t(u, h);
                            if (e.length) {
                                var i = e.offset().top;
                                o.scrollTop(i)
                            }
                            u = null
                        }
                    },
                    y = function(n) {
                        var s = "#" + c,
                            r = p[n] ? t(p[n].html.html()) : null;
                        r.length ? (i.title = p[n].title, h.data("smoothState").href = n, l.loadingClass && o.removeClass(l.loadingClass), l.onReady.render(h, r), h.one("ss.onReadyEnd", function() {
                            d = !1, l.onAfter(h, r), l.scroll && v()
                        }), e.setTimeout(function() {
                            h.trigger("ss.onReadyEnd")
                        }, l.onReady.duration)) : !r && l.debug && a ? a.warn("No element with an id of " + s + " in response from " + n + " in " + p) : e.location = n
                    },
                    w = function(t, i, n) {
                        var s = r.translate(t);
                        "undefined" == typeof i && (i = !0), "undefined" == typeof n && (n = !0);
                        var u = !1,
                            d = !1,
                            f = {
                                loaded: function() {
                                    var t = u ? "ss.onProgressEnd" : "ss.onStartEnd";
                                    d && u ? d && y(s.url) : h.one(t, function() {
                                        y(s.url), n || g(s.url)
                                    }), i && e.history.pushState({
                                        id: c
                                    }, p[s.url].title, s.url), d && !n && g(s.url)
                                },
                                fetching: function() {
                                    u || (u = !0, h.one("ss.onStartEnd", function() {
                                        l.loadingClass && o.addClass(l.loadingClass), l.onProgress.render(h), e.setTimeout(function() {
                                            h.trigger("ss.onProgressEnd"), d = !0
                                        }, l.onProgress.duration)
                                    })), e.setTimeout(function() {
                                        p.hasOwnProperty(s.url) && f[p[s.url].status]()
                                    }, 10)
                                },
                                error: function() {
                                    l.debug && a ? a.log("There was an error loading: " + s.url) : e.location = s.url
                                }
                            };
                        p.hasOwnProperty(s.url) || m(s), l.onStart.render(h), e.setTimeout(function() {
                            l.scroll && o.scrollTop(0), h.trigger("ss.onStartEnd")
                        }, l.onStart.duration), f[p[s.url].status]()
                    },
                    C = function(e) {
                        var i, n = t(e.currentTarget);
                        r.shouldLoadAnchor(n, l.blacklist, l.hrefRegex) && !d && (e.stopPropagation(), i = r.translate(n.prop("href")), i = l.alterRequest(i), m(i))
                    },
                    b = function(e) {
                        var i = t(e.currentTarget);
                        if (!e.metaKey && !e.ctrlKey && r.shouldLoadAnchor(i, l.blacklist, l.hrefRegex) && (e.stopPropagation(), e.preventDefault(), !k())) {
                            P();
                            var n = r.translate(i.prop("href"));
                            d = !0, u = i.prop("hash"), n = l.alterRequest(n), l.onBefore(i, h), w(n)
                        }
                    },
                    S = function(e) {
                        var i = t(e.currentTarget);
                        if (!i.is(l.blacklist) && (e.preventDefault(), e.stopPropagation(), !k())) {
                            P();
                            var o = {
                                url: i.prop("action"),
                                data: i.serialize(),
                                type: i.prop("method")
                            };
                            d = !0, o = l.alterRequest(o), "get" === o.type.toLowerCase() && (o.url = o.url + "?" + o.data), l.onBefore(i, h), w(o, n, l.allowFormCaching)
                        }
                    },
                    x = 0,
                    k = function() {
                        var t = null === l.repeatDelay,
                            e = parseInt(Date.now()) > x;
                        return !(t || e)
                    },
                    P = function() {
                        x = parseInt(Date.now()) + parseInt(l.repeatDelay)
                    },
                    L = function(t) {
                        l.anchors && (t.on("click", l.anchors, b), l.prefetch && t.on(l.prefetchOn, l.anchors, C)), l.forms && t.on("submit", l.forms, S)
                    },
                    F = function() {
                        var t = h.prop("class");
                        h.removeClass(t), r.redraw(h), h.addClass(t)
                    };
                return l = t.extend({}, t.fn.smoothState.options, l), null === e.history.state && e.history.replaceState({
                    id: c
                }, i.title, f), r.storePageIn(p, f, i.documentElement.outerHTML, c), r.triggerAllAnimationEndEvent(h, "ss.onStartEnd ss.onProgressEnd ss.onEndEnd"), L(h), {
                    href: f,
                    cache: p,
                    clear: g,
                    load: w,
                    fetch: m,
                    restartCSSAnimations: F
                }
            },
            c = function(e) {
                return this.each(function() {
                    var i = this.tagName.toLowerCase();
                    this.id && "body" !== i && "html" !== i && !t.data(this, "smoothState") ? t.data(this, "smoothState", new h(this, e)) : !this.id && a ? a.warn("Every smoothState container needs an id but the following one does not have one:", this) : "body" !== i && "html" !== i || !a || a.warn("The smoothstate container cannot be the " + this.tagName + " tag")
                })
            };
        e.onpopstate = l, t.smoothStateUtility = r, t.fn.smoothState = c, t.fn.smoothState.options = s
    }
}(jQuery, window, document), jQuery.scrollLock = function t() {
        "use strict";

        function t() {
            var t = n.attr("style"),
                e = [],
                i = {};
            t && (e = t.split(/;\s/), jQuery.each(e, function o(t) {
                if (t) {
                    var e = t.split(/\s:\s/);
                    e.length < 2 || (i[e[0]] = e[1])
                }
            }), jQuery.extend(s, i))
        }

        function e() {
            var e = {};
            o || (a = {
                scrollLeft: jQuery(window).scrollLeft(),
                scrollTop: jQuery(window).scrollTop()
            }, t(), jQuery.extend(e, r, {
                left: -a.scrollLeft + "px",
                top: -a.scrollTop + "px"
            }), n.css(e), jQuery(window).scrollLeft(0).scrollTop(0), o = !0)
        }

        function i() {
            o && (n.attr("style", jQuery("<x>").css(s).attr("style") || ""), jQuery(window).scrollLeft(a.scrollLeft).scrollTop(a.scrollTop), o = !1)
        }
        var n = jQuery("html"),
            o = !1,
            a = {
                scrollLeft: jQuery(window).scrollLeft(),
                scrollTop: jQuery(window).scrollTop()
            },
            s = {},
            r = {
                "overflow-y": "scroll",
                position: "fixed",
                width: "100%"
            };
        return t(),
            function l(t) {
                arguments.length ? t ? e() : i() : o ? i() : e()
            }
    }(), ! function(t) {
        t.fn.colourBrightness = function() {
            function t(t) {
                for (var e = "";
                    "html" != t[0].tagName.toLowerCase() && (e = t.css("background-color"), "rgba(0, 0, 0, 0)" == e || "transparent" == e);) t = t.parent();
                return e
            }
            var e, i, n, o, a = t(this);
            return a.match(/^rgb/) ? (a = a.match(/rgba?\(([^)]+)\)/)[1], a = a.split(/ *, */).map(Number), e = a[0], i = a[1], n = a[2]) : "#" == a[0] && 7 == a.length ? (e = parseInt(a.slice(1, 3), 16), i = parseInt(a.slice(3, 5), 16), n = parseInt(a.slice(5, 7), 16)) : "#" == a[0] && 4 == a.length && (e = parseInt(a[1] + a[1], 16), i = parseInt(a[2] + a[2], 16), n = parseInt(a[3] + a[3], 16)), o = (299 * e + 587 * i + 114 * n) / 1e3, 125 > o ? this.removeClass("light").addClass("dark") : this.removeClass("dark").addClass("light"), this
        }
    }(jQuery), ! function(t, e) {
        "function" == typeof define && define.amd ? define(e) : t.BackgroundCheck = e(t)
    }(this, function() {
        "use strict";

        function t(t) {
            if (void 0 === t || void 0 === t.targets) throw "Missing attributes";
            W.debug = n(t.debug, !1), W.debugOverlay = n(t.debugOverlay, !1), W.targets = s(t.targets), W.images = s(t.images || "img", !0), W.changeParent = n(t.changeParent, !1), W.threshold = n(t.threshold, 50), W.minComplexity = n(t.minComplexity, 30), W.minOverlap = n(t.minOverlap, 50), W.windowEvents = n(t.windowEvents, !0), W.maxDuration = n(t.maxDuration, 500), W.mask = n(t.mask, {
                r: 0,
                g: 255,
                b: 0
            }), W.classes = n(t.classes, {
                dark: "background--dark",
                light: "background--light",
                complex: "background--complex"
            }), void 0 === F && (r(), F && (T.style.position = "fixed", T.style.top = "0px", T.style.left = "0px", T.style.width = "100%", T.style.height = "100%", window.addEventListener(M, x.bind(null, function() {
                c(), S()
            })), window.addEventListener("scroll", x.bind(null, S)), c(), S()))
        }

        function e() {
            F = null, T = null, A = null, W = {}, j && clearTimeout(j)
        }

        function i(t) {
            P("debug") && console.log(t)
        }

        function n(t, e) {
            return o(t, typeof e), void 0 === t ? e : t
        }

        function o(t, e) {
            if (void 0 !== t && typeof t !== e) throw "Incorrect attribute type"
        }

        function a(t) {
            for (var e, n, o = [], a = 0; a < t.length; a++)
                if (e = t[a], o.push(e), "IMG" !== e.tagName) {
                    if (n = window.getComputedStyle(e).backgroundImage, n.split(/,url|, url/).length > 1) throw "Multiple backgrounds are not supported";
                    if (!n || "none" === n) throw "Element is not an <img> but does not have a background-image";
                    o[a] = {
                        img: new Image,
                        el: o[a]
                    }, n = n.slice(4, -1), n = n.replace(/"/g, ""), o[a].img.src = n, i("CSS Image - " + n)
                } return o
        }

        function s(t, e) {
            var i = t;
            if ("string" == typeof t ? i = document.querySelectorAll(t) : t && 1 === t.nodeType && (i = [t]), !i || 0 === i.length || void 0 === i.length) throw "Elements not found";
            return e && (i = a(i)), i = Array.prototype.slice.call(i)
        }

        function r() {
            T = document.createElement("canvas"), T && T.getContext ? (A = T.getContext("2d"), F = !0) : F = !1, l()
        }

        function l() {
            P("debugOverlay") ? (T.style.opacity = .5, T.style.pointerEvents = "none", document.body.appendChild(T)) : T.parentNode && T.parentNode.removeChild(T)
        }

        function h(t) {
            var n = (new Date).getTime() - t;
            i("Duration: " + n + "ms"), n > P("maxDuration") && (console.log("BackgroundCheck - Killed"), m(), e())
        }

        function c() {
            R = {
                left: 0,
                top: 0,
                right: document.body.clientWidth,
                bottom: window.innerHeight
            }, T.width = document.body.clientWidth, T.height = window.innerHeight
        }

        function u(t, e, i) {
            var n, o;
            return -1 !== t.indexOf("px") ? n = parseFloat(t) : -1 !== t.indexOf("%") ? (n = parseFloat(t), o = n / 100, n = o * e, i && (n -= i * o)) : n = e, n
        }

        function d(t) {
            var e = window.getComputedStyle(t.el);
            t.el.style.backgroundRepeat = "no-repeat", t.el.style.backgroundOrigin = "padding-box";
            var i = e.backgroundSize.split(" "),
                n = i[0],
                o = void 0 === i[1] ? "auto" : i[1],
                a = t.el.clientWidth / t.el.clientHeight,
                s = t.img.naturalWidth / t.img.naturalHeight;
            "cover" === n ? a >= s ? (n = "100%", o = "auto") : (n = "auto", i[0] = "auto", o = "100%") : "contain" === n && (1 / s > 1 / a ? (n = "auto", i[0] = "auto", o = "100%") : (n = "100%", o = "auto")), n = "auto" === n ? t.img.naturalWidth : u(n, t.el.clientWidth), o = "auto" === o ? n / t.img.naturalWidth * t.img.naturalHeight : u(o, t.el.clientHeight), "auto" === i[0] && "auto" !== i[1] && (n = o / t.img.naturalHeight * t.img.naturalWidth);
            var r = e.backgroundPosition;
            "top" === r ? r = "50% 0%" : "left" === r ? r = "0% 50%" : "right" === r ? r = "100% 50%" : "bottom" === r ? r = "50% 100%" : "center" === r && (r = "50% 50%"), r = r.split(" ");
            var l, h;
            return 4 === r.length ? (l = r[1], h = r[3]) : (l = r[0], h = r[1]), h = h || "50%", l = u(l, t.el.clientWidth, n), h = u(h, t.el.clientHeight, o), 4 === r.length && ("right" === r[0] && (l = t.el.clientWidth - t.img.naturalWidth - l), "bottom" === r[2] && (h = t.el.clientHeight - t.img.naturalHeight - h)), l += t.el.getBoundingClientRect().left, h += t.el.getBoundingClientRect().top, {
                left: Math.floor(l),
                right: Math.floor(l + n),
                top: Math.floor(h),
                bottom: Math.floor(h + o),
                width: Math.floor(n),
                height: Math.floor(o)
            }
        }

        function p(t) {
            var e, i, n;
            if (t.nodeType) {
                var o = t.getBoundingClientRect();
                e = {
                    left: o.left,
                    right: o.right,
                    top: o.top,
                    bottom: o.bottom,
                    width: o.width,
                    height: o.height
                }, n = t.parentNode, i = t
            } else e = d(t), n = t.el, i = t.img;
            n = n.getBoundingClientRect(), e.imageTop = 0, e.imageLeft = 0, e.imageWidth = i.naturalWidth, e.imageHeight = i.naturalHeight;
            var a, s = e.imageHeight / e.height;
            return e.top < n.top && (a = n.top - e.top, e.imageTop = s * a, e.imageHeight -= s * a, e.top += a, e.height -= a), e.left < n.left && (a = n.left - e.left, e.imageLeft += s * a, e.imageWidth -= s * a, e.width -= a, e.left += a), e.bottom > n.bottom && (a = e.bottom - n.bottom, e.imageHeight -= s * a, e.height -= a), e.right > n.right && (a = e.right - n.right, e.imageWidth -= s * a, e.width -= a), e.imageTop = Math.floor(e.imageTop), e.imageLeft = Math.floor(e.imageLeft), e.imageHeight = Math.floor(e.imageHeight), e.imageWidth = Math.floor(e.imageWidth), e
        }

        function f(t) {
            var e = p(t);
            t = t.nodeType ? t : t.img, e.imageWidth > 0 && e.imageHeight > 0 && e.width > 0 && e.height > 0 ? A.drawImage(t, e.imageLeft, e.imageTop, e.imageWidth, e.imageHeight, e.left, e.top, e.width, e.height) : i("Skipping image - " + t.src + " - area too small")
        }

        function g(t, e, i) {
            var n = t.className;
            switch (i) {
                case "add":
                    n += " " + e;
                    break;
                case "remove":
                    var o = new RegExp("(?:^|\\s)" + e + "(?!\\S)", "g");
                    n = n.replace(o, "")
            }
            t.className = n.trim()
        }

        function m(t) {
            for (var e, i = t ? [t] : P("targets"), n = 0; n < i.length; n++) e = i[n], e = P("changeParent") ? e.parentNode : e, g(e, P("classes").light, "remove"), g(e, P("classes").dark, "remove"), g(e, P("classes").complex, "remove")
        }

        function v(t) {
            var e, n, o, a, s = t.getBoundingClientRect(),
                r = 0,
                l = 0,
                h = 0,
                c = 0,
                u = P("mask");
            if (s.width > 0 && s.height > 0) {
                m(t), t = P("changeParent") ? t.parentNode : t, n = A.getImageData(s.left, s.top, s.width, s.height).data;
                for (var d = 0; d < n.length; d += 4) n[d] === u.r && n[d + 1] === u.g && n[d + 2] === u.b ? c++ : (r++, e = .2126 * n[d] + .7152 * n[d + 1] + .0722 * n[d + 2], o = e - h, l += o * o, h += o / r);
                c <= n.length / 4 * (1 - P("minOverlap") / 100) && (a = Math.sqrt(l / r) / 255, h /= 255, i("Target: " + t.className + " lum: " + h + " var: " + a), g(t, h <= P("threshold") / 100 ? P("classes").dark : P("classes").light, "add"), a > P("minComplexity") / 100 && g(t, P("classes").complex, "add"))
            }
        }

        function y(t, e) {
            return t = (t.nodeType ? t : t.el).getBoundingClientRect(), e = e === R ? e : (e.nodeType ? e : e.el).getBoundingClientRect(), !(t.right < e.left || t.left > e.right || t.top > e.bottom || t.bottom < e.top)
        }

        function w(t) {
            for (var e, i = (new Date).getTime(), n = t && ("IMG" === t.tagName || t.img) ? "image" : "targets", o = t ? !1 : !0, a = P("targets").length, s = 0; a > s; s++) e = P("targets")[s], y(e, R) && ("targets" !== n || t && t !== e ? "image" === n && y(e, t) && v(e) : (o = !0, v(e)));
            if ("targets" === n && !o) throw t + " is not a target";
            h(i)
        }

        function C(t) {
            var e = function(t) {
                    var e = 0;
                    return "static" !== window.getComputedStyle(t).position && (e = parseInt(window.getComputedStyle(t).zIndex, 10) || 0, e >= 0 && e++), e
                },
                i = t.parentNode,
                n = i ? e(i) : 0,
                o = e(t);
            return 1e5 * n + o
        }

        function b(t) {
            var e = !1;
            return t.sort(function(t, i) {
                t = t.nodeType ? t : t.el, i = i.nodeType ? i : i.el;
                var n = t.compareDocumentPosition(i),
                    o = 0;
                return t = C(t), i = C(i), t > i && (e = !0), t === i && 2 === n ? o = 1 : t === i && 4 === n && (o = -1), o || t - i
            }), i("Sorted: " + e), e && i(t), e
        }

        function S(t, e, n) {
            if (F) {
                var o = P("mask");
                i("--- BackgroundCheck ---"), i("onLoad event: " + (n && n.src)), e !== !0 && (A.clearRect(0, 0, T.width, T.height), A.fillStyle = "rgb(" + o.r + ", " + o.g + ", " + o.b + ")", A.fillRect(0, 0, T.width, T.height));
                for (var a, s, r = n ? [n] : P("images"), l = b(r), h = !1, c = 0; c < r.length; c++) a = r[c], y(a, R) && (s = a.nodeType ? a : a.img, 0 === s.naturalWidth ? (h = !0, i("Loading... " + a.src), s.removeEventListener("load", S), l ? s.addEventListener("load", S.bind(null, null, !1, null)) : s.addEventListener("load", S.bind(null, t, !0, a))) : (i("Drawing: " + a.src), f(a)));
                n || h ? n && w(n) : w(t)
            }
        }

        function x(t) {
            P("windowEvents") === !0 && (j && clearTimeout(j), j = setTimeout(t, 200))
        }

        function k(t, e) {
            if (void 0 === W[t]) throw "Unknown property - " + t;
            if (void 0 === e) throw "Missing value for " + t;
            if ("targets" === t || "images" === t) try {
                e = s("images" !== t || e ? e : "img", "images" === t ? !0 : !1)
            } catch (i) {
                throw e = [], i
            } else o(e, typeof W[t]);
            m(), W[t] = e, S(), "debugOverlay" === t && l()
        }

        function P(t) {
            if (void 0 === W[t]) throw "Unknown property - " + t;
            return W[t]
        }

        function L() {
            for (var t, e = P("images"), i = [], n = 0; n < e.length; n++) t = p(e[n]), i.push(t);
            return i
        }
        var F, T, A, j, R, M = void 0 !== window.orientation ? "orientationchange" : "resize",
            W = {};
        return {
            init: t,
            destroy: e,
            refresh: S,
            set: k,
            get: P,
            getImageData: L
        }
    }),
    function($) {
        "use strict";
        $.fn.fitVids = function(t) {
            var e = {
                customSelector: null,
                ignore: null
            };
            if (!document.getElementById("fit-vids-style")) {
                var i = document.head || document.getElementsByTagName("head")[0],
                    n = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
                    o = document.createElement("div");
                o.innerHTML = '<p>x</p><style id="fit-vids-style">' + n + "</style>", i.appendChild(o.childNodes[1])
            }
            return t && $.extend(e, t), this.each(function() {
                var t = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
                e.customSelector && t.push(e.customSelector);
                var i = ".fitvidsignore";
                e.ignore && (i = i + ", " + e.ignore);
                var n = $(this).find(t.join(","));
                n = n.not("object object"), n = n.not(i), n.each(function(t) {
                    var e = $(this);
                    if (!(e.parents(i).length > 0 || "embed" === this.tagName.toLowerCase() && e.parent("object").length || e.parent(".fluid-width-video-wrapper").length)) {
                        e.css("height") || e.css("width") || !isNaN(e.attr("height")) && !isNaN(e.attr("width")) || (e.attr("height", 9), e.attr("width", 16));
                        var n = "object" === this.tagName.toLowerCase() || e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)) ? parseInt(e.attr("height"), 10) : e.height(),
                            o = isNaN(parseInt(e.attr("width"), 10)) ? e.width() : parseInt(e.attr("width"), 10),
                            a = n / o;
                        if (!e.attr("id")) {
                            var s = "fitvid" + t;
                            e.attr("id", s)
                        }
                        e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * a + "%"), e.removeAttr("height").removeAttr("width")
                    }
                })
            })
        }
    }(window.jQuery || window.Zepto),
    function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = function(t) {
                this.canvas = t.canvas, this.ctx = t;
                var e = function(t, e) {
                        return t["offset" + e] ? t["offset" + e] : document.defaultView.getComputedStyle(t).getPropertyValue(e)
                    },
                    i = this.width = e(t.canvas, "Width") || t.canvas.width,
                    o = this.height = e(t.canvas, "Height") || t.canvas.height;
                return i = this.width = t.canvas.width, o = this.height = t.canvas.height, this.aspectRatio = this.width / this.height, n.retinaScale(this), this
            };
        i.defaults = {
            global: {
                animation: !0,
                animationSteps: 60,
                animationEasing: "easeOutQuart",
                showScale: !0,
                scaleOverride: !1,
                scaleSteps: null,
                scaleStepWidth: null,
                scaleStartValue: null,
                scaleLineColor: "rgba(0,0,0,.1)",
                scaleLineWidth: 1,
                scaleShowLabels: !0,
                scaleLabel: "<%=value%>",
                scaleIntegersOnly: !0,
                scaleBeginAtZero: !1,
                scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                scaleFontSize: 12,
                scaleFontStyle: "normal",
                scaleFontColor: "#666",
                responsive: !1,
                maintainAspectRatio: !0,
                showTooltips: !0,
                customTooltips: !1,
                tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
                tooltipFillColor: "rgba(0,0,0,0.8)",
                tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                tooltipFontSize: 14,
                tooltipFontStyle: "normal",
                tooltipFontColor: "#fff",
                tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                tooltipTitleFontSize: 14,
                tooltipTitleFontStyle: "bold",
                tooltipTitleFontColor: "#fff",
                tooltipTitleTemplate: "<%= label%>",
                tooltipYPadding: 6,
                tooltipXPadding: 6,
                tooltipCaretSize: 8,
                tooltipCornerRadius: 6,
                tooltipXOffset: 10,
                tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
                multiTooltipTemplate: "<%= value %>",
                multiTooltipKeyBackground: "#fff",
                segmentColorDefault: ["#A6CEE3", "#1F78B4", "#B2DF8A", "#33A02C", "#FB9A99", "#E31A1C", "#FDBF6F", "#FF7F00", "#CAB2D6", "#6A3D9A", "#B4B482", "#B15928"],
                segmentHighlightColorDefaults: ["#CEF6FF", "#47A0DC", "#DAFFB2", "#5BC854", "#FFC2C1", "#FF4244", "#FFE797", "#FFA728", "#F2DAFE", "#9265C2", "#DCDCAA", "#D98150"],
                onAnimationProgress: function() {},
                onAnimationComplete: function() {}
            }
        }, i.types = {};
        var n = i.helpers = {},
            o = n.each = function(t, e, i) {
                var n = Array.prototype.slice.call(arguments, 3);
                if (t)
                    if (t.length === +t.length) {
                        var o;
                        for (o = 0; o < t.length; o++) e.apply(i, [t[o], o].concat(n))
                    } else
                        for (var a in t) e.apply(i, [t[a], a].concat(n))
            },
            a = n.clone = function(t) {
                var e = {};
                return o(t, function(i, n) {
                    t.hasOwnProperty(n) && (e[n] = i)
                }), e
            },
            s = n.extend = function(t) {
                return o(Array.prototype.slice.call(arguments, 1), function(e) {
                    o(e, function(i, n) {
                        e.hasOwnProperty(n) && (t[n] = i)
                    })
                }), t
            },
            r = n.merge = function(t, e) {
                var i = Array.prototype.slice.call(arguments, 0);
                return i.unshift({}), s.apply(null, i)
            },
            l = n.indexOf = function(t, e) {
                if (Array.prototype.indexOf) return t.indexOf(e);
                for (var i = 0; i < t.length; i++)
                    if (t[i] === e) return i;
                return -1
            },
            h = (n.where = function(t, e) {
                var i = [];
                return n.each(t, function(t) {
                    e(t) && i.push(t)
                }), i
            }, n.findNextWhere = function(t, e, i) {
                i || (i = -1);
                for (var n = i + 1; n < t.length; n++) {
                    var o = t[n];
                    if (e(o)) return o
                }
            }, n.findPreviousWhere = function(t, e, i) {
                i || (i = t.length);
                for (var n = i - 1; n >= 0; n--) {
                    var o = t[n];
                    if (e(o)) return o
                }
            }, n.inherits = function(t) {
                var e = this,
                    i = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                        return e.apply(this, arguments)
                    },
                    n = function() {
                        this.constructor = i
                    };
                return n.prototype = e.prototype, i.prototype = new n, i.extend = h, t && s(i.prototype, t), i.__super__ = e.prototype, i
            }),
            c = n.noop = function() {},
            u = n.uid = function() {
                var t = 0;
                return function() {
                    return "chart-" + t++
                }
            }(),
            d = n.warn = function(t) {
                window.console && "function" == typeof window.console.warn && console.warn(t)
            },
            p = n.amd = "function" == typeof define && define.amd,
            f = n.isNumber = function(t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            },
            g = n.max = function(t) {
                return Math.max.apply(Math, t)
            },
            m = n.min = function(t) {
                return Math.min.apply(Math, t)
            },
            v = (n.cap = function(t, e, i) {
                if (f(e)) {
                    if (t > e) return e
                } else if (f(i) && i > t) return i;
                return t
            }, n.getDecimalPlaces = function(t) {
                if (t % 1 !== 0 && f(t)) {
                    var e = t.toString();
                    if (e.indexOf("e-") < 0) return e.split(".")[1].length;
                    if (e.indexOf(".") < 0) return parseInt(e.split("e-")[1]);
                    var i = e.split(".")[1].split("e-");
                    return i[0].length + parseInt(i[1])
                }
                return 0
            }),
            y = n.radians = function(t) {
                return t * (Math.PI / 180)
            },
            w = (n.getAngleFromPoint = function(t, e) {
                var i = e.x - t.x,
                    n = e.y - t.y,
                    o = Math.sqrt(i * i + n * n),
                    a = 2 * Math.PI + Math.atan2(n, i);
                return 0 > i && 0 > n && (a += 2 * Math.PI), {
                    angle: a,
                    distance: o
                }
            }, n.aliasPixel = function(t) {
                return t % 2 === 0 ? 0 : .5
            }),
            C = (n.splineCurve = function(t, e, i, n) {
                var o = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)),
                    a = Math.sqrt(Math.pow(i.x - e.x, 2) + Math.pow(i.y - e.y, 2)),
                    s = n * o / (o + a),
                    r = n * a / (o + a);
                return {
                    inner: {
                        x: e.x - s * (i.x - t.x),
                        y: e.y - s * (i.y - t.y)
                    },
                    outer: {
                        x: e.x + r * (i.x - t.x),
                        y: e.y + r * (i.y - t.y)
                    }
                }
            }, n.calculateOrderOfMagnitude = function(t) {
                return Math.floor(Math.log(t) / Math.LN10)
            }),
            b = (n.calculateScaleRange = function(t, e, i, n, a) {
                var s = 2,
                    r = Math.floor(e / (1.5 * i)),
                    l = s >= r,
                    h = [];
                o(t, function(t) {
                    null == t || h.push(t)
                });
                var c = m(h),
                    u = g(h);
                u === c && (u += .5, c >= .5 && !n ? c -= .5 : u += .5);
                for (var d = Math.abs(u - c), p = C(d), f = Math.ceil(u / (1 * Math.pow(10, p))) * Math.pow(10, p), v = n ? 0 : Math.floor(c / (1 * Math.pow(10, p))) * Math.pow(10, p), y = f - v, w = Math.pow(10, p), b = Math.round(y / w);
                    (b > r || r > 2 * b) && !l;)
                    if (b > r) w *= 2, b = Math.round(y / w), b % 1 !== 0 && (l = !0);
                    else if (a && p >= 0) {
                    if (w / 2 % 1 !== 0) break;
                    w /= 2, b = Math.round(y / w)
                } else w /= 2, b = Math.round(y / w);
                return l && (b = s, w = y / b), {
                    steps: b,
                    stepValue: w,
                    min: v,
                    max: v + b * w
                }
            }, n.template = function(t, e) {
                function i(t, e) {
                    var i = /\W/.test(t) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : n[t] = n[t];
                    return e ? i(e) : i
                }
                if (t instanceof Function) return t(e);
                var n = {};
                return i(t, e)
            }),
            S = (n.generateLabels = function(t, e, i, n) {
                var a = new Array(e);
                return t && o(a, function(e, o) {
                    a[o] = b(t, {
                        value: i + n * (o + 1)
                    })
                }), a
            }, n.easingEffects = {
                linear: function(t) {
                    return t
                },
                easeInQuad: function(t) {
                    return t * t
                },
                easeOutQuad: function(t) {
                    return -1 * t * (t - 2)
                },
                easeInOutQuad: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                },
                easeInCubic: function(t) {
                    return t * t * t
                },
                easeOutCubic: function(t) {
                    return 1 * ((t = t / 1 - 1) * t * t + 1)
                },
                easeInOutCubic: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                },
                easeInQuart: function(t) {
                    return t * t * t * t
                },
                easeOutQuart: function(t) {
                    return -1 * ((t = t / 1 - 1) * t * t * t - 1)
                },
                easeInOutQuart: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                },
                easeInQuint: function(t) {
                    return 1 * (t /= 1) * t * t * t * t
                },
                easeOutQuint: function(t) {
                    return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
                },
                easeInOutQuint: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                },
                easeInSine: function(t) {
                    return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
                },
                easeOutSine: function(t) {
                    return 1 * Math.sin(t / 1 * (Math.PI / 2))
                },
                easeInOutSine: function(t) {
                    return -.5 * (Math.cos(Math.PI * t / 1) - 1)
                },
                easeInExpo: function(t) {
                    return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
                },
                easeOutExpo: function(t) {
                    return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1)
                },
                easeInOutExpo: function(t) {
                    return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
                },
                easeInCirc: function(t) {
                    return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
                },
                easeOutCirc: function(t) {
                    return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
                },
                easeInOutCirc: function(t) {
                    return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                },
                easeInElastic: function(t) {
                    var e = 1.70158,
                        i = 0,
                        n = 1;
                    return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i)))
                },
                easeOutElastic: function(t) {
                    var e = 1.70158,
                        i = 0,
                        n = 1;
                    return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / i) + 1)
                },
                easeInOutElastic: function(t) {
                    var e = 1.70158,
                        i = 0,
                        n = 1;
                    return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = 1 * (.3 * 1.5)), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), 1 > t ? -.5 * (n * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i)) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i) * .5 + 1)
                },
                easeInBack: function(t) {
                    var e = 1.70158;
                    return 1 * (t /= 1) * t * ((e + 1) * t - e)
                },
                easeOutBack: function(t) {
                    var e = 1.70158;
                    return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1)
                },
                easeInOutBack: function(t) {
                    var e = 1.70158;
                    return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
                },
                easeInBounce: function(t) {
                    return 1 - S.easeOutBounce(1 - t)
                },
                easeOutBounce: function(t) {
                    return (t /= 1) < 1 / 2.75 ? 1 * (7.5625 * t * t) : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                },
                easeInOutBounce: function(t) {
                    return .5 > t ? .5 * S.easeInBounce(2 * t) : .5 * S.easeOutBounce(2 * t - 1) + .5
                }
            }),
            x = n.requestAnimFrame = function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                    return window.setTimeout(t, 1e3 / 60)
                }
            }(),
            k = (n.cancelAnimFrame = function() {
                return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(t) {
                    return window.clearTimeout(t, 1e3 / 60)
                }
            }(), n.animationLoop = function(t, e, i, n, o, a) {
                var s = 0,
                    r = S[i] || S.linear,
                    l = function() {
                        s++;
                        var i = s / e,
                            h = r(i);
                        t.call(a, h, i, s), n.call(a, h, i), e > s ? a.animationFrame = x(l) : o.apply(a)
                    };
                x(l)
            }, n.getRelativePosition = function(t) {
                var e, i, n = t.originalEvent || t,
                    o = t.currentTarget || t.srcElement,
                    a = o.getBoundingClientRect();
                return n.touches ? (e = n.touches[0].clientX - a.left, i = n.touches[0].clientY - a.top) : (e = n.clientX - a.left, i = n.clientY - a.top), {
                    x: e,
                    y: i
                }
            }, n.addEvent = function(t, e, i) {
                t.addEventListener ? t.addEventListener(e, i) : t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i
            }),
            P = n.removeEvent = function(t, e, i) {
                t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent ? t.detachEvent("on" + e, i) : t["on" + e] = c
            },
            L = (n.bindEvents = function(t, e, i) {
                t.events || (t.events = {}), o(e, function(e) {
                    t.events[e] = function() {
                        i.apply(t, arguments)
                    }, k(t.chart.canvas, e, t.events[e])
                })
            }, n.unbindEvents = function(t, e) {
                o(e, function(e, i) {
                    P(t.chart.canvas, i, e)
                })
            }),
            F = n.getMaximumWidth = function(t) {
                var e = t.parentNode,
                    i = parseInt(A(e, "padding-left")) + parseInt(A(e, "padding-right"));
                return e.clientWidth - i
            },
            T = n.getMaximumHeight = function(t) {
                var e = t.parentNode,
                    i = parseInt(A(e, "padding-bottom")) + parseInt(A(e, "padding-top"));
                return e.clientHeight - i
            },
            A = n.getStyle = function(t, e) {
                return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
            },
            j = (n.getMaximumSize = n.getMaximumWidth, n.retinaScale = function(t) {
                var e = t.ctx,
                    i = t.canvas.width,
                    n = t.canvas.height;
                window.devicePixelRatio && (e.canvas.style.width = i + "px", e.canvas.style.height = n + "px", e.canvas.height = n * window.devicePixelRatio, e.canvas.width = i * window.devicePixelRatio, e.scale(window.devicePixelRatio, window.devicePixelRatio))
            }),
            R = n.clear = function(t) {
                t.ctx.clearRect(0, 0, t.width, t.height)
            },
            M = n.fontString = function(t, e, i) {
                return e + " " + t + "px " + i
            },
            W = n.longestText = function(t, e, i) {
                t.font = e;
                var n = 0;
                return o(i, function(e) {
                    var i = t.measureText(e).width;
                    n = i > n ? i : n
                }), n
            },
            Q = n.drawRoundedRectangle = function(t, e, i, n, o, a) {
                t.beginPath(), t.moveTo(e + a, i), t.lineTo(e + n - a, i), t.quadraticCurveTo(e + n, i, e + n, i + a), t.lineTo(e + n, i + o - a), t.quadraticCurveTo(e + n, i + o, e + n - a, i + o), t.lineTo(e + a, i + o), t.quadraticCurveTo(e, i + o, e, i + o - a), t.lineTo(e, i + a), t.quadraticCurveTo(e, i, e + a, i), t.closePath()
            };
        i.instances = {}, i.Type = function(t, e, n) {
            this.options = e, this.chart = n, this.id = u(), i.instances[this.id] = this, e.responsive && this.resize(), this.initialize.call(this, t)
        }, s(i.Type.prototype, {
            initialize: function() {
                return this
            },
            clear: function() {
                return R(this.chart), this
            },
            stop: function() {
                return i.animationService.cancelAnimation(this), this
            },
            resize: function(t) {
                this.stop();
                var e = this.chart.canvas,
                    i = F(this.chart.canvas),
                    n = this.options.maintainAspectRatio ? i / this.chart.aspectRatio : T(this.chart.canvas);
                return e.width = this.chart.width = i, e.height = this.chart.height = n, j(this.chart), "function" == typeof t && t.apply(this, Array.prototype.slice.call(arguments, 1)), this
            },
            reflow: c,
            render: function(t) {
                if (t && this.reflow(), this.options.animation && !t) {
                    var e = new i.Animation;
                    e.numSteps = this.options.animationSteps, e.easing = this.options.animationEasing, e.render = function(t, e) {
                        var i = n.easingEffects[e.easing],
                            o = e.currentStep / e.numSteps,
                            a = i(o);
                        t.draw(a, o, e.currentStep)
                    }, e.onAnimationProgress = this.options.onAnimationProgress, e.onAnimationComplete = this.options.onAnimationComplete, i.animationService.addAnimation(this, e)
                } else this.draw(), this.options.onAnimationComplete.call(this);
                return this
            },
            generateLegend: function() {
                return b(this.options.legendTemplate, this)
            },
            destroy: function() {
                this.clear(), L(this, this.events);
                var t = this.chart.canvas;
                t.width = this.chart.width, t.height = this.chart.height, t.style.removeProperty ? (t.style.removeProperty("width"), t.style.removeProperty("height")) : (t.style.removeAttribute("width"), t.style.removeAttribute("height")), delete i.instances[this.id]
            },
            showTooltip: function(t, e) {
                "undefined" == typeof this.activeElements && (this.activeElements = []);
                var a = function(t) {
                    var e = !1;
                    return t.length !== this.activeElements.length ? e = !0 : (o(t, function(t, i) {
                        t !== this.activeElements[i] && (e = !0)
                    }, this), e)
                }.call(this, t);
                if (a || e) {
                    if (this.activeElements = t, this.draw(), this.options.customTooltips && this.options.customTooltips(!1), t.length > 0)
                        if (this.datasets && this.datasets.length > 1) {
                            for (var s, r, h = this.datasets.length - 1; h >= 0 && (s = this.datasets[h].points || this.datasets[h].bars || this.datasets[h].segments, r = l(s, t[0]), -1 === r); h--);
                            var c = [],
                                u = [],
                                d = function(t) {
                                    var e, i, o, a, s, l = [],
                                        h = [],
                                        d = [];
                                    return n.each(this.datasets, function(t) {
                                        e = t.points || t.bars || t.segments, e[r] && e[r].hasValue() && l.push(e[r])
                                    }), n.each(l, function(t) {
                                        h.push(t.x), d.push(t.y), c.push(n.template(this.options.multiTooltipTemplate, t)), u.push({
                                            fill: t._saved.fillColor || t.fillColor,
                                            stroke: t._saved.strokeColor || t.strokeColor
                                        })
                                    }, this), s = m(d), o = g(d), a = m(h), i = g(h), {
                                        x: a > this.chart.width / 2 ? a : i,
                                        y: (s + o) / 2
                                    }
                                }.call(this, r);
                            new i.MultiTooltip({
                                x: d.x,
                                y: d.y,
                                xPadding: this.options.tooltipXPadding,
                                yPadding: this.options.tooltipYPadding,
                                xOffset: this.options.tooltipXOffset,
                                fillColor: this.options.tooltipFillColor,
                                textColor: this.options.tooltipFontColor,
                                fontFamily: this.options.tooltipFontFamily,
                                fontStyle: this.options.tooltipFontStyle,
                                fontSize: this.options.tooltipFontSize,
                                titleTextColor: this.options.tooltipTitleFontColor,
                                titleFontFamily: this.options.tooltipTitleFontFamily,
                                titleFontStyle: this.options.tooltipTitleFontStyle,
                                titleFontSize: this.options.tooltipTitleFontSize,
                                cornerRadius: this.options.tooltipCornerRadius,
                                labels: c,
                                legendColors: u,
                                legendColorBackground: this.options.multiTooltipKeyBackground,
                                title: b(this.options.tooltipTitleTemplate, t[0]),
                                chart: this.chart,
                                ctx: this.chart.ctx,
                                custom: this.options.customTooltips
                            }).draw()
                        } else o(t, function(t) {
                            var e = t.tooltipPosition();
                            new i.Tooltip({
                                x: Math.round(e.x),
                                y: Math.round(e.y),
                                xPadding: this.options.tooltipXPadding,
                                yPadding: this.options.tooltipYPadding,
                                fillColor: this.options.tooltipFillColor,
                                textColor: this.options.tooltipFontColor,
                                fontFamily: this.options.tooltipFontFamily,
                                fontStyle: this.options.tooltipFontStyle,
                                fontSize: this.options.tooltipFontSize,
                                caretHeight: this.options.tooltipCaretSize,
                                cornerRadius: this.options.tooltipCornerRadius,
                                text: b(this.options.tooltipTemplate, t),
                                chart: this.chart,
                                custom: this.options.customTooltips
                            }).draw()
                        }, this);
                    return this
                }
            },
            toBase64Image: function() {
                return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
            }
        }), i.Type.extend = function(t) {
            var e = this,
                n = function() {
                    return e.apply(this, arguments)
                };
            if (n.prototype = a(e.prototype), s(n.prototype, t), n.extend = i.Type.extend, t.name || e.prototype.name) {
                var o = t.name || e.prototype.name,
                    l = i.defaults[e.prototype.name] ? a(i.defaults[e.prototype.name]) : {};
                i.defaults[o] = s(l, t.defaults), i.types[o] = n, i.prototype[o] = function(t, e) {
                    var a = r(i.defaults.global, i.defaults[o], e || {});
                    return new n(t, a, this)
                }
            } else d("Name not provided for this chart, so it hasn't been registered");
            return e
        }, i.Element = function(t) {
            s(this, t), this.initialize.apply(this, arguments), this.save()
        }, s(i.Element.prototype, {
            initialize: function() {},
            restore: function(t) {
                return t ? o(t, function(t) {
                    this[t] = this._saved[t]
                }, this) : s(this, this._saved), this
            },
            save: function() {
                return this._saved = a(this), delete this._saved._saved, this
            },
            update: function(t) {
                return o(t, function(t, e) {
                    this._saved[e] = this[e], this[e] = t
                }, this), this
            },
            transition: function(t, e) {
                return o(t, function(t, i) {
                    this[i] = (t - this._saved[i]) * e + this._saved[i]
                }, this), this
            },
            tooltipPosition: function() {
                return {
                    x: this.x,
                    y: this.y
                }
            },
            hasValue: function() {
                return f(this.value)
            }
        }), i.Element.extend = h, i.Point = i.Element.extend({
            display: !0,
            inRange: function(t, e) {
                var i = this.hitDetectionRadius + this.radius;
                return Math.pow(t - this.x, 2) + Math.pow(e - this.y, 2) < Math.pow(i, 2)
            },
            draw: function() {
                if (this.display) {
                    var t = this.ctx;
                    t.beginPath(), t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), t.closePath(), t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.fillStyle = this.fillColor, t.fill(), t.stroke()
                }
            }
        }), i.Arc = i.Element.extend({
            inRange: function(t, e) {
                var i = n.getAngleFromPoint(this, {
                        x: t,
                        y: e
                    }),
                    o = i.angle % (2 * Math.PI),
                    a = (2 * Math.PI + this.startAngle) % (2 * Math.PI),
                    s = (2 * Math.PI + this.endAngle) % (2 * Math.PI) || 360,
                    r = a > s ? s >= o || o >= a : o >= a && s >= o,
                    l = i.distance >= this.innerRadius && i.distance <= this.outerRadius;
                return r && l
            },
            tooltipPosition: function() {
                var t = this.startAngle + (this.endAngle - this.startAngle) / 2,
                    e = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
                return {
                    x: this.x + Math.cos(t) * e,
                    y: this.y + Math.sin(t) * e
                }
            },
            draw: function(t) {
                var e = this.ctx;
                e.beginPath(), e.arc(this.x, this.y, this.outerRadius < 0 ? 0 : this.outerRadius, this.startAngle, this.endAngle), e.arc(this.x, this.y, this.innerRadius < 0 ? 0 : this.innerRadius, this.endAngle, this.startAngle, !0), e.closePath(), e.strokeStyle = this.strokeColor, e.lineWidth = this.strokeWidth, e.fillStyle = this.fillColor, e.fill(), e.lineJoin = "bevel", this.showStroke && e.stroke()
            }
        }), i.Rectangle = i.Element.extend({
            draw: function() {
                var t = this.ctx,
                    e = this.width / 2,
                    i = this.x - e,
                    n = this.x + e,
                    o = this.base - (this.base - this.y),
                    a = this.strokeWidth / 2;
                this.showStroke && (i += a, n -= a, o += a), t.beginPath(), t.fillStyle = this.fillColor, t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.moveTo(i, this.base), t.lineTo(i, o), t.lineTo(n, o), t.lineTo(n, this.base), t.fill(), this.showStroke && t.stroke()
            },
            height: function() {
                return this.base - this.y
            },
            inRange: function(t, e) {
                return t >= this.x - this.width / 2 && t <= this.x + this.width / 2 && e >= this.y && e <= this.base
            }
        }), i.Animation = i.Element.extend({
            currentStep: null,
            numSteps: 60,
            easing: "",
            render: null,
            onAnimationProgress: null,
            onAnimationComplete: null
        }), i.Tooltip = i.Element.extend({
            draw: function() {
                var t = this.chart.ctx;
                t.font = M(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", this.yAlign = "above";
                var e = this.caretPadding = 2,
                    i = t.measureText(this.text).width + 2 * this.xPadding,
                    n = this.fontSize + 2 * this.yPadding,
                    o = n + this.caretHeight + e;
                this.x + i / 2 > this.chart.width ? this.xAlign = "left" : this.x - i / 2 < 0 && (this.xAlign = "right"), this.y - o < 0 && (this.yAlign = "below");
                var a = this.x - i / 2,
                    s = this.y - o;
                if (t.fillStyle = this.fillColor, this.custom) this.custom(this);
                else {
                    switch (this.yAlign) {
                        case "above":
                            t.beginPath(), t.moveTo(this.x, this.y - e), t.lineTo(this.x + this.caretHeight, this.y - (e + this.caretHeight)), t.lineTo(this.x - this.caretHeight, this.y - (e + this.caretHeight)), t.closePath(), t.fill();
                            break;
                        case "below":
                            s = this.y + e + this.caretHeight, t.beginPath(), t.moveTo(this.x, this.y + e), t.lineTo(this.x + this.caretHeight, this.y + e + this.caretHeight), t.lineTo(this.x - this.caretHeight, this.y + e + this.caretHeight), t.closePath(), t.fill()
                    }
                    switch (this.xAlign) {
                        case "left":
                            a = this.x - i + (this.cornerRadius + this.caretHeight);
                            break;
                        case "right":
                            a = this.x - (this.cornerRadius + this.caretHeight)
                    }
                    Q(t, a, s, i, n, this.cornerRadius), t.fill(), t.fillStyle = this.textColor, t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.text, a + i / 2, s + n / 2)
                }
            }
        }), i.MultiTooltip = i.Element.extend({
            initialize: function() {
                this.font = M(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = M(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), this.titleHeight = this.title ? 1.5 * this.titleFontSize : 0, this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + this.titleHeight, this.ctx.font = this.titleFont;
                var t = this.ctx.measureText(this.title).width,
                    e = W(this.ctx, this.font, this.labels) + this.fontSize + 3,
                    i = g([e, t]);
                this.width = i + 2 * this.xPadding;
                var n = this.height / 2;
                this.y - n < 0 ? this.y = n : this.y + n > this.chart.height && (this.y = this.chart.height - n), this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset
            },
            getLineHeight: function(t) {
                var e = this.y - this.height / 2 + this.yPadding,
                    i = t - 1;
                return 0 === t ? e + this.titleHeight / 3 : e + (1.5 * this.fontSize * i + this.fontSize / 2) + this.titleHeight
            },
            draw: function() {
                if (this.custom) this.custom(this);
                else {
                    Q(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
                    var t = this.ctx;
                    t.fillStyle = this.fillColor, t.fill(), t.closePath(), t.textAlign = "left", t.textBaseline = "middle", t.fillStyle = this.titleTextColor, t.font = this.titleFont, t.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), t.font = this.font, n.each(this.labels, function(e, i) {
                        t.fillStyle = this.textColor, t.fillText(e, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(i + 1)), t.fillStyle = this.legendColorBackground, t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize), t.fillStyle = this.legendColors[i].fill, t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize)
                    }, this)
                }
            }
        }), i.Scale = i.Element.extend({
            initialize: function() {
                this.fit()
            },
            buildYLabels: function() {
                this.yLabels = [];
                for (var t = v(this.stepValue), e = 0; e <= this.steps; e++) this.yLabels.push(b(this.templateString, {
                    value: (this.min + e * this.stepValue).toFixed(t)
                }));
                this.yLabelWidth = this.display && this.showLabels ? W(this.ctx, this.font, this.yLabels) + 10 : 0
            },
            addXLabel: function(t) {
                this.xLabels.push(t), this.valuesCount++, this.fit()
            },
            removeXLabel: function() {
                this.xLabels.shift(), this.valuesCount--, this.fit()
            },
            fit: function() {
                this.startPoint = this.display ? this.fontSize : 0, this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height, this.startPoint += this.padding, this.endPoint -= this.padding;
                var t, e = this.endPoint,
                    i = this.endPoint - this.startPoint;
                for (this.calculateYRange(i), this.buildYLabels(), this.calculateXLabelRotation(); i > this.endPoint - this.startPoint;) i = this.endPoint - this.startPoint, t = this.yLabelWidth, this.calculateYRange(i), this.buildYLabels(), t < this.yLabelWidth && (this.endPoint = e, this.calculateXLabelRotation())
            },
            calculateXLabelRotation: function() {
                this.ctx.font = this.font;
                var t, e, i = this.ctx.measureText(this.xLabels[0]).width,
                    n = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
                if (this.xScalePaddingRight = n / 2 + 3, this.xScalePaddingLeft = i / 2 > this.yLabelWidth ? i / 2 : this.yLabelWidth, this.xLabelRotation = 0, this.display) {
                    var o, a = W(this.ctx, this.font, this.xLabels);
                    this.xLabelWidth = a;
                    for (var s = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > s && 0 === this.xLabelRotation || this.xLabelWidth > s && this.xLabelRotation <= 90 && this.xLabelRotation > 0;) o = Math.cos(y(this.xLabelRotation)), t = o * i, e = o * n, t + this.fontSize / 2 > this.yLabelWidth && (this.xScalePaddingLeft = t + this.fontSize / 2), this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = o * a;
                    this.xLabelRotation > 0 && (this.endPoint -= Math.sin(y(this.xLabelRotation)) * a + 3)
                } else this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding
            },
            calculateYRange: c,
            drawingArea: function() {
                return this.startPoint - this.endPoint
            },
            calculateY: function(t) {
                var e = this.drawingArea() / (this.min - this.max);
                return this.endPoint - e * (t - this.min)
            },
            calculateX: function(t) {
                var e = (this.xLabelRotation > 0, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)),
                    i = e / Math.max(this.valuesCount - (this.offsetGridLines ? 0 : 1), 1),
                    n = i * t + this.xScalePaddingLeft;
                return this.offsetGridLines && (n += i / 2), Math.round(n)
            },
            update: function(t) {
                n.extend(this, t), this.fit()
            },
            draw: function() {
                var t = this.ctx,
                    e = (this.endPoint - this.startPoint) / this.steps,
                    i = Math.round(this.xScalePaddingLeft);
                this.display && (t.fillStyle = this.textColor, t.font = this.font, o(this.yLabels, function(o, a) {
                    var s = this.endPoint - e * a,
                        r = Math.round(s),
                        l = this.showHorizontalLines;
                    t.textAlign = "right", t.textBaseline = "middle", this.showLabels && t.fillText(o, i - 10, s), 0 !== a || l || (l = !0), l && t.beginPath(), a > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), r += n.aliasPixel(t.lineWidth), l && (t.moveTo(i, r), t.lineTo(this.width, r), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(i - 5, r), t.lineTo(i, r), t.stroke(), t.closePath()
                }, this), o(this.xLabels, function(e, i) {
                    var n = this.calculateX(i) + w(this.lineWidth),
                        o = this.calculateX(i - (this.offsetGridLines ? .5 : 0)) + w(this.lineWidth),
                        a = this.xLabelRotation > 0,
                        s = this.showVerticalLines;
                    0 !== i || s || (s = !0), s && t.beginPath(), i > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), s && (t.moveTo(o, this.endPoint), t.lineTo(o, this.startPoint - 3), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(o, this.endPoint), t.lineTo(o, this.endPoint + 5), t.stroke(), t.closePath(), t.save(), t.translate(n, a ? this.endPoint + 12 : this.endPoint + 8), t.rotate(-1 * y(this.xLabelRotation)), t.font = this.font, t.textAlign = a ? "right" : "center", t.textBaseline = a ? "middle" : "top", t.fillText(e, 0, 0), t.restore()
                }, this))
            }
        }), i.RadialScale = i.Element.extend({
            initialize: function() {
                this.size = m([this.height, this.width]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2
            },
            calculateCenterOffset: function(t) {
                var e = this.drawingArea / (this.max - this.min);
                return (t - this.min) * e
            },
            update: function() {
                this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(), this.buildYLabels()
            },
            buildYLabels: function() {
                this.yLabels = [];
                for (var t = v(this.stepValue), e = 0; e <= this.steps; e++) this.yLabels.push(b(this.templateString, {
                    value: (this.min + e * this.stepValue).toFixed(t)
                }))
            },
            getCircumference: function() {
                return 2 * Math.PI / this.valuesCount
            },
            setScaleSize: function() {
                var t, e, i, n, o, a, s, r, l, h, c, u, d = m([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]),
                    p = this.width,
                    g = 0;
                for (this.ctx.font = M(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), e = 0; e < this.valuesCount; e++) t = this.getPointPosition(e, d), i = this.ctx.measureText(b(this.templateString, {
                    value: this.labels[e]
                })).width + 5, 0 === e || e === this.valuesCount / 2 ? (n = i / 2, t.x + n > p && (p = t.x + n, o = e), t.x - n < g && (g = t.x - n, s = e)) : e < this.valuesCount / 2 ? t.x + i > p && (p = t.x + i, o = e) : e > this.valuesCount / 2 && t.x - i < g && (g = t.x - i, s = e);
                l = g, h = Math.ceil(p - this.width), a = this.getIndexAngle(o), r = this.getIndexAngle(s), c = h / Math.sin(a + Math.PI / 2), u = l / Math.sin(r + Math.PI / 2), c = f(c) ? c : 0, u = f(u) ? u : 0, this.drawingArea = d - (u + c) / 2, this.setCenterPoint(u, c)
            },
            setCenterPoint: function(t, e) {
                var i = this.width - e - this.drawingArea,
                    n = t + this.drawingArea;
                this.xCenter = (n + i) / 2, this.yCenter = this.height / 2
            },
            getIndexAngle: function(t) {
                var e = 2 * Math.PI / this.valuesCount;
                return t * e - Math.PI / 2
            },
            getPointPosition: function(t, e) {
                var i = this.getIndexAngle(t);
                return {
                    x: Math.cos(i) * e + this.xCenter,
                    y: Math.sin(i) * e + this.yCenter
                }
            },
            draw: function() {
                if (this.display) {
                    var t = this.ctx;
                    if (o(this.yLabels, function(e, i) {
                            if (i > 0) {
                                var n, o = i * (this.drawingArea / this.steps),
                                    a = this.yCenter - o;
                                if (this.lineWidth > 0)
                                    if (t.strokeStyle = this.lineColor, t.lineWidth = this.lineWidth, this.lineArc) t.beginPath(), t.arc(this.xCenter, this.yCenter, o, 0, 2 * Math.PI), t.closePath(), t.stroke();
                                    else {
                                        t.beginPath();
                                        for (var s = 0; s < this.valuesCount; s++) n = this.getPointPosition(s, this.calculateCenterOffset(this.min + i * this.stepValue)), 0 === s ? t.moveTo(n.x, n.y) : t.lineTo(n.x, n.y);
                                        t.closePath(), t.stroke()
                                    } if (this.showLabels) {
                                    if (t.font = M(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                                        var r = t.measureText(e).width;
                                        t.fillStyle = this.backdropColor, t.fillRect(this.xCenter - r / 2 - this.backdropPaddingX, a - this.fontSize / 2 - this.backdropPaddingY, r + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY)
                                    }
                                    t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = this.fontColor, t.fillText(e, this.xCenter, a)
                                }
                            }
                        }, this), !this.lineArc) {
                        t.lineWidth = this.angleLineWidth, t.strokeStyle = this.angleLineColor;
                        for (var e = this.valuesCount - 1; e >= 0; e--) {
                            var i = null,
                                n = null;
                            if (this.angleLineWidth > 0 && (i = this.calculateCenterOffset(this.max), n = this.getPointPosition(e, i), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(n.x, n.y), t.stroke(), t.closePath()), this.backgroundColors && this.backgroundColors.length == this.valuesCount) {
                                null == i && (i = this.calculateCenterOffset(this.max)), null == n && (n = this.getPointPosition(e, i));
                                var a = this.getPointPosition(0 === e ? this.valuesCount - 1 : e - 1, i),
                                    s = this.getPointPosition(e === this.valuesCount - 1 ? 0 : e + 1, i),
                                    r = {
                                        x: (a.x + n.x) / 2,
                                        y: (a.y + n.y) / 2
                                    },
                                    l = {
                                        x: (n.x + s.x) / 2,
                                        y: (n.y + s.y) / 2
                                    };
                                t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(r.x, r.y), t.lineTo(n.x, n.y), t.lineTo(l.x, l.y), t.fillStyle = this.backgroundColors[e], t.fill(), t.closePath()
                            }
                            var h = this.getPointPosition(e, this.calculateCenterOffset(this.max) + 5);
                            t.font = M(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), t.fillStyle = this.pointLabelFontColor;
                            var c = this.labels.length,
                                u = this.labels.length / 2,
                                d = u / 2,
                                p = d > e || e > c - d,
                                f = e === d || e === c - d;
                            0 === e ? t.textAlign = "center" : e === u ? t.textAlign = "center" : u > e ? t.textAlign = "left" : t.textAlign = "right", f ? t.textBaseline = "middle" : p ? t.textBaseline = "bottom" : t.textBaseline = "top", t.fillText(this.labels[e], h.x, h.y)
                        }
                    }
                }
            }
        }), i.animationService = {
            frameDuration: 17,
            animations: [],
            dropFrames: 0,
            addAnimation: function(t, e) {
                for (var i = 0; i < this.animations.length; ++i)
                    if (this.animations[i].chartInstance === t) return void(this.animations[i].animationObject = e);
                this.animations.push({
                    chartInstance: t,
                    animationObject: e
                }), 1 == this.animations.length && n.requestAnimFrame.call(window, this.digestWrapper)
            },
            cancelAnimation: function(t) {
                var e = n.findNextWhere(this.animations, function(e) {
                    return e.chartInstance === t
                });
                e && this.animations.splice(e, 1)
            },
            digestWrapper: function() {
                i.animationService.startDigest.call(i.animationService)
            },
            startDigest: function() {
                var t = Date.now(),
                    e = 0;
                this.dropFrames > 1 && (e = Math.floor(this.dropFrames), this.dropFrames -= e);
                for (var i = 0; i < this.animations.length; i++) null === this.animations[i].animationObject.currentStep && (this.animations[i].animationObject.currentStep = 0), this.animations[i].animationObject.currentStep += 1 + e, this.animations[i].animationObject.currentStep > this.animations[i].animationObject.numSteps && (this.animations[i].animationObject.currentStep = this.animations[i].animationObject.numSteps), this.animations[i].animationObject.render(this.animations[i].chartInstance, this.animations[i].animationObject), this.animations[i].animationObject.currentStep == this.animations[i].animationObject.numSteps && (this.animations[i].animationObject.onAnimationComplete.call(this.animations[i].chartInstance), this.animations.splice(i, 1), i--);
                var o = Date.now(),
                    a = o - t - this.frameDuration,
                    s = a / this.frameDuration;
                s > 1 && (this.dropFrames += s), this.animations.length > 0 && n.requestAnimFrame.call(window, this.digestWrapper)
            }
        }, n.addEvent(window, "resize", function() {
            var t;
            return function() {
                clearTimeout(t), t = setTimeout(function() {
                    o(i.instances, function(t) {
                        t.options.responsive && t.resize(t.render, !0)
                    })
                }, 50)
            }
        }()), p ? define(function() {
            return i
        }) : "object" == typeof module && module.exports && (module.exports = i), t.Chart = i, i.noConflict = function() {
            return t.Chart = e, i
        }
    }.call(this),
    function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            n = {
                scaleBeginAtZero: !0,
                scaleShowGridLines: !0,
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleGridLineWidth: 1,
                scaleShowHorizontalLines: !0,
                scaleShowVerticalLines: !0,
                barShowStroke: !0,
                barStrokeWidth: 2,
                barValueSpacing: 5,
                barDatasetSpacing: 1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>'
            };
        e.Type.extend({
            name: "Bar",
            defaults: n,
            initialize: function(t) {
                var n = this.options;
                this.ScaleClass = e.Scale.extend({
                    offsetGridLines: !0,
                    calculateBarX: function(t, e, i) {
                        var o = this.calculateBaseWidth(),
                            a = this.calculateX(i) - o / 2,
                            s = this.calculateBarWidth(t);
                        return a + s * e + e * n.barDatasetSpacing + s / 2
                    },
                    calculateBaseWidth: function() {
                        return this.calculateX(1) - this.calculateX(0) - 2 * n.barValueSpacing
                    },
                    calculateBarWidth: function(t) {
                        var e = this.calculateBaseWidth() - (t - 1) * n.barDatasetSpacing;
                        return e / t
                    }
                }), this.datasets = [], this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getBarsAtEvent(t) : [];
                    this.eachBars(function(t) {
                        t.restore(["fillColor", "strokeColor"])
                    }), i.each(e, function(t) {
                        t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                    }), this.showTooltip(e)
                }), this.BarClass = e.Rectangle.extend({
                    strokeWidth: this.options.barStrokeWidth,
                    showStroke: this.options.barShowStroke,
                    ctx: this.chart.ctx
                }), i.each(t.datasets, function(e, n) {
                    var o = {
                        label: e.label || null,
                        fillColor: e.fillColor,
                        strokeColor: e.strokeColor,
                        bars: []
                    };
                    this.datasets.push(o), i.each(e.data, function(i, n) {
                        o.bars.push(new this.BarClass({
                            value: i,
                            label: t.labels[n],
                            datasetLabel: e.label,
                            strokeColor: e.strokeColor,
                            fillColor: e.fillColor,
                            highlightFill: e.highlightFill || e.fillColor,
                            highlightStroke: e.highlightStroke || e.strokeColor
                        }))
                    }, this)
                }, this), this.buildScale(t.labels), this.BarClass.prototype.base = this.scale.endPoint, this.eachBars(function(t, e, n) {
                    i.extend(t, {
                        width: this.scale.calculateBarWidth(this.datasets.length),
                        x: this.scale.calculateBarX(this.datasets.length, n, e),
                        y: this.scale.endPoint
                    }), t.save()
                }, this), this.render()
            },
            update: function() {
                this.scale.update(), i.each(this.activeElements, function(t) {
                    t.restore(["fillColor", "strokeColor"])
                }), this.eachBars(function(t) {
                    t.save()
                }), this.render()
            },
            eachBars: function(t) {
                i.each(this.datasets, function(e, n) {
                    i.each(e.bars, t, this, n)
                }, this)
            },
            getBarsAtEvent: function(t) {
                for (var e, n = [], o = i.getRelativePosition(t), a = function(t) {
                        n.push(t.bars[e])
                    }, s = 0; s < this.datasets.length; s++)
                    for (e = 0; e < this.datasets[s].bars.length; e++)
                        if (this.datasets[s].bars[e].inRange(o.x, o.y)) return i.each(this.datasets, a), n;
                return n
            },
            buildScale: function(t) {
                var e = this,
                    n = function() {
                        var t = [];
                        return e.eachBars(function(e) {
                            t.push(e.value)
                        }), t
                    },
                    o = {
                        templateString: this.options.scaleLabel,
                        height: this.chart.height,
                        width: this.chart.width,
                        ctx: this.chart.ctx,
                        textColor: this.options.scaleFontColor,
                        fontSize: this.options.scaleFontSize,
                        fontStyle: this.options.scaleFontStyle,
                        fontFamily: this.options.scaleFontFamily,
                        valuesCount: t.length,
                        beginAtZero: this.options.scaleBeginAtZero,
                        integersOnly: this.options.scaleIntegersOnly,
                        calculateYRange: function(t) {
                            var e = i.calculateScaleRange(n(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                            i.extend(this, e)
                        },
                        xLabels: t,
                        font: i.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                        lineWidth: this.options.scaleLineWidth,
                        lineColor: this.options.scaleLineColor,
                        showHorizontalLines: this.options.scaleShowHorizontalLines,
                        showVerticalLines: this.options.scaleShowVerticalLines,
                        gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                        gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                        padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0,
                        showLabels: this.options.scaleShowLabels,
                        display: this.options.showScale
                    };
                this.options.scaleOverride && i.extend(o, {
                    calculateYRange: i.noop,
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                }), this.scale = new this.ScaleClass(o)
            },
            addData: function(t, e) {
                i.each(t, function(t, i) {
                    this.datasets[i].bars.push(new this.BarClass({
                        value: t,
                        label: e,
                        datasetLabel: this.datasets[i].label,
                        x: this.scale.calculateBarX(this.datasets.length, i, this.scale.valuesCount + 1),
                        y: this.scale.endPoint,
                        width: this.scale.calculateBarWidth(this.datasets.length),
                        base: this.scale.endPoint,
                        strokeColor: this.datasets[i].strokeColor,
                        fillColor: this.datasets[i].fillColor
                    }))
                }, this), this.scale.addXLabel(e), this.update()
            },
            removeData: function() {
                this.scale.removeXLabel(), i.each(this.datasets, function(t) {
                    t.bars.shift()
                }, this), this.update()
            },
            reflow: function() {
                i.extend(this.BarClass.prototype, {
                    y: this.scale.endPoint,
                    base: this.scale.endPoint
                });
                var t = i.extend({
                    height: this.chart.height,
                    width: this.chart.width
                });
                this.scale.update(t)
            },
            draw: function(t) {
                var e = t || 1;
                this.clear(), this.chart.ctx, this.scale.draw(e), i.each(this.datasets, function(t, n) {
                    i.each(t.bars, function(t, i) {
                        t.hasValue() && (t.base = this.scale.endPoint, t.transition({
                            x: this.scale.calculateBarX(this.datasets.length, n, i),
                            y: this.scale.calculateY(t.value),
                            width: this.scale.calculateBarWidth(this.datasets.length)
                        }, e).draw())
                    }, this)
                }, this)
            }
        })
    }.call(this),
    function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            n = {
                segmentShowStroke: !0,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 2,
                percentageInnerCutout: 50,
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate: !0,
                animateScale: !1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>'
            };
        e.Type.extend({
            name: "Doughnut",
            defaults: n,
            initialize: function(t) {
                this.segments = [], this.outerRadius = (i.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, this.SegmentArc = e.Arc.extend({
                    ctx: this.chart.ctx,
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                    i.each(this.segments, function(t) {
                        t.restore(["fillColor"])
                    }), i.each(e, function(t) {
                        t.fillColor = t.highlightColor
                    }), this.showTooltip(e)
                }), this.calculateTotal(t), i.each(t, function(e, i) {
                    e.color || (e.color = "hsl(" + 360 * i / t.length + ", 100%, 50%)"), this.addData(e, i, !0)
                }, this), this.render()
            },
            getSegmentsAtEvent: function(t) {
                var e = [],
                    n = i.getRelativePosition(t);
                return i.each(this.segments, function(t) {
                    t.inRange(n.x, n.y) && e.push(t)
                }, this), e
            },
            addData: function(t, i, n) {
                var o = void 0 !== i ? i : this.segments.length;
                "undefined" == typeof t.color && (t.color = e.defaults.global.segmentColorDefault[o % e.defaults.global.segmentColorDefault.length], t.highlight = e.defaults.global.segmentHighlightColorDefaults[o % e.defaults.global.segmentHighlightColorDefaults.length]), this.segments.splice(o, 0, new this.SegmentArc({
                    value: t.value,
                    outerRadius: this.options.animateScale ? 0 : this.outerRadius,
                    innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout,
                    fillColor: t.color,
                    highlightColor: t.highlight || t.color,
                    showStroke: this.options.segmentShowStroke,
                    strokeWidth: this.options.segmentStrokeWidth,
                    strokeColor: this.options.segmentStrokeColor,
                    startAngle: 1.5 * Math.PI,
                    circumference: this.options.animateRotate ? 0 : this.calculateCircumference(t.value),
                    label: t.label
                })), n || (this.reflow(), this.update())
            },
            calculateCircumference: function(t) {
                return this.total > 0 ? 2 * Math.PI * (t / this.total) : 0
            },
            calculateTotal: function(t) {
                this.total = 0, i.each(t, function(t) {
                    this.total += Math.abs(t.value)
                }, this)
            },
            update: function() {
                this.calculateTotal(this.segments), i.each(this.activeElements, function(t) {
                    t.restore(["fillColor"])
                }), i.each(this.segments, function(t) {
                    t.save()
                }), this.render()
            },
            removeData: function(t) {
                var e = i.isNumber(t) ? t : this.segments.length - 1;
                this.segments.splice(e, 1), this.reflow(), this.update()
            },
            reflow: function() {
                i.extend(this.SegmentArc.prototype, {
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.outerRadius = (i.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, i.each(this.segments, function(t) {
                    t.update({
                        outerRadius: this.outerRadius,
                        innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                    })
                }, this)
            },
            draw: function(t) {
                var e = t ? t : 1;
                this.clear(), i.each(this.segments, function(t, i) {
                    t.transition({
                        circumference: this.calculateCircumference(t.value),
                        outerRadius: this.outerRadius,
                        innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                    }, e), t.endAngle = t.startAngle + t.circumference, t.draw(), 0 === i && (t.startAngle = 1.5 * Math.PI), i < this.segments.length - 1 && (this.segments[i + 1].startAngle = t.endAngle)
                }, this)
            }
        }), e.types.Doughnut.extend({
            name: "Pie",
            defaults: i.merge(n, {
                percentageInnerCutout: 0
            })
        })
    }.call(this),
    function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            n = {
                scaleShowGridLines: !0,
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleGridLineWidth: 1,
                scaleShowHorizontalLines: !0,
                scaleShowVerticalLines: !0,
                bezierCurve: !0,
                bezierCurveTension: .4,
                pointDot: !0,
                pointDotRadius: 4,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: !0,
                datasetStrokeWidth: 2,
                datasetFill: !0,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>',
                offsetGridLines: !1
            };
        e.Type.extend({
            name: "Line",
            defaults: n,
            initialize: function(t) {
                this.PointClass = e.Point.extend({
                    offsetGridLines: this.options.offsetGridLines,
                    strokeWidth: this.options.pointDotStrokeWidth,
                    radius: this.options.pointDotRadius,
                    display: this.options.pointDot,
                    hitDetectionRadius: this.options.pointHitDetectionRadius,
                    ctx: this.chart.ctx,
                    inRange: function(t) {
                        return Math.pow(t - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2)
                    }
                }), this.datasets = [], this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                    this.eachPoints(function(t) {
                        t.restore(["fillColor", "strokeColor"])
                    }), i.each(e, function(t) {
                        t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                    }), this.showTooltip(e)
                }), i.each(t.datasets, function(e) {
                    var n = {
                        label: e.label || null,
                        fillColor: e.fillColor,
                        strokeColor: e.strokeColor,
                        pointColor: e.pointColor,
                        pointStrokeColor: e.pointStrokeColor,
                        points: []
                    };
                    this.datasets.push(n), i.each(e.data, function(i, o) {
                        n.points.push(new this.PointClass({
                            value: i,
                            label: t.labels[o],
                            datasetLabel: e.label,
                            strokeColor: e.pointStrokeColor,
                            fillColor: e.pointColor,
                            highlightFill: e.pointHighlightFill || e.pointColor,
                            highlightStroke: e.pointHighlightStroke || e.pointStrokeColor
                        }))
                    }, this), this.buildScale(t.labels), this.eachPoints(function(t, e) {
                        i.extend(t, {
                            x: this.scale.calculateX(e),
                            y: this.scale.endPoint
                        }), t.save()
                    }, this)
                }, this), this.render()
            },
            update: function() {
                this.scale.update(), i.each(this.activeElements, function(t) {
                    t.restore(["fillColor", "strokeColor"])
                }), this.eachPoints(function(t) {
                    t.save()
                }), this.render()
            },
            eachPoints: function(t) {
                i.each(this.datasets, function(e) {
                    i.each(e.points, t, this)
                }, this)
            },
            getPointsAtEvent: function(t) {
                var e = [],
                    n = i.getRelativePosition(t);
                return i.each(this.datasets, function(t) {
                    i.each(t.points, function(t) {
                        t.inRange(n.x, n.y) && e.push(t)
                    })
                }, this), e
            },
            buildScale: function(t) {
                var n = this,
                    o = function() {
                        var t = [];
                        return n.eachPoints(function(e) {
                            t.push(e.value)
                        }), t
                    },
                    a = {
                        templateString: this.options.scaleLabel,
                        height: this.chart.height,
                        width: this.chart.width,
                        ctx: this.chart.ctx,
                        textColor: this.options.scaleFontColor,
                        offsetGridLines: this.options.offsetGridLines,
                        fontSize: this.options.scaleFontSize,
                        fontStyle: this.options.scaleFontStyle,
                        fontFamily: this.options.scaleFontFamily,
                        valuesCount: t.length,
                        beginAtZero: this.options.scaleBeginAtZero,
                        integersOnly: this.options.scaleIntegersOnly,
                        calculateYRange: function(t) {
                            var e = i.calculateScaleRange(o(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                            i.extend(this, e)
                        },
                        xLabels: t,
                        font: i.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                        lineWidth: this.options.scaleLineWidth,
                        lineColor: this.options.scaleLineColor,
                        showHorizontalLines: this.options.scaleShowHorizontalLines,
                        showVerticalLines: this.options.scaleShowVerticalLines,
                        gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                        gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                        padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
                        showLabels: this.options.scaleShowLabels,
                        display: this.options.showScale
                    };
                this.options.scaleOverride && i.extend(a, {
                    calculateYRange: i.noop,
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                }), this.scale = new e.Scale(a)
            },
            addData: function(t, e) {
                i.each(t, function(t, i) {
                    this.datasets[i].points.push(new this.PointClass({
                        value: t,
                        label: e,
                        datasetLabel: this.datasets[i].label,
                        x: this.scale.calculateX(this.scale.valuesCount + 1),
                        y: this.scale.endPoint,
                        strokeColor: this.datasets[i].pointStrokeColor,
                        fillColor: this.datasets[i].pointColor
                    }))
                }, this), this.scale.addXLabel(e), this.update()
            },
            removeData: function() {
                this.scale.removeXLabel(), i.each(this.datasets, function(t) {
                    t.points.shift()
                }, this), this.update()
            },
            reflow: function() {
                var t = i.extend({
                    height: this.chart.height,
                    width: this.chart.width
                });
                this.scale.update(t)
            },
            draw: function(t) {
                var e = t || 1;
                this.clear();
                var n = this.chart.ctx,
                    o = function(t) {
                        return null !== t.value
                    },
                    a = function(t, e, n) {
                        return i.findNextWhere(e, o, n) || t
                    },
                    s = function(t, e, n) {
                        return i.findPreviousWhere(e, o, n) || t
                    };
                this.scale && (this.scale.draw(e), i.each(this.datasets, function(t) {
                    var r = i.where(t.points, o);
                    i.each(t.points, function(t, i) {
                        t.hasValue() && t.transition({
                            y: this.scale.calculateY(t.value),
                            x: this.scale.calculateX(i)
                        }, e)
                    }, this), this.options.bezierCurve && i.each(r, function(t, e) {
                        var n = e > 0 && e < r.length - 1 ? this.options.bezierCurveTension : 0;
                        t.controlPoints = i.splineCurve(s(t, r, e), t, a(t, r, e), n), t.controlPoints.outer.y > this.scale.endPoint ? t.controlPoints.outer.y = this.scale.endPoint : t.controlPoints.outer.y < this.scale.startPoint && (t.controlPoints.outer.y = this.scale.startPoint), t.controlPoints.inner.y > this.scale.endPoint ? t.controlPoints.inner.y = this.scale.endPoint : t.controlPoints.inner.y < this.scale.startPoint && (t.controlPoints.inner.y = this.scale.startPoint)
                    }, this), n.lineWidth = this.options.datasetStrokeWidth, n.strokeStyle = t.strokeColor, n.beginPath(), i.each(r, function(t, e) {
                        if (0 === e) n.moveTo(t.x, t.y);
                        else if (this.options.bezierCurve) {
                            var i = s(t, r, e);
                            n.bezierCurveTo(i.controlPoints.outer.x, i.controlPoints.outer.y, t.controlPoints.inner.x, t.controlPoints.inner.y, t.x, t.y)
                        } else n.lineTo(t.x, t.y)
                    }, this), this.options.datasetStroke && n.stroke(), this.options.datasetFill && r.length > 0 && (n.lineTo(r[r.length - 1].x, this.scale.endPoint), n.lineTo(r[0].x, this.scale.endPoint), n.fillStyle = t.fillColor, n.closePath(), n.fill()), i.each(r, function(t) {
                        t.draw()
                    })
                }, this))
            }
        })
    }.call(this),
    function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            n = {
                scaleShowLabelBackdrop: !0,
                scaleBackdropColor: "rgba(255,255,255,0.75)",
                scaleBeginAtZero: !0,
                scaleBackdropPaddingY: 2,
                scaleBackdropPaddingX: 2,
                scaleShowLine: !0,
                segmentShowStroke: !0,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 2,
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate: !0,
                animateScale: !1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>'
            };
        e.Type.extend({
            name: "PolarArea",
            defaults: n,
            initialize: function(t) {
                this.segments = [], this.SegmentArc = e.Arc.extend({
                    showStroke: this.options.segmentShowStroke,
                    strokeWidth: this.options.segmentStrokeWidth,
                    strokeColor: this.options.segmentStrokeColor,
                    ctx: this.chart.ctx,
                    innerRadius: 0,
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.scale = new e.RadialScale({
                    display: this.options.showScale,
                    fontStyle: this.options.scaleFontStyle,
                    fontSize: this.options.scaleFontSize,
                    fontFamily: this.options.scaleFontFamily,
                    fontColor: this.options.scaleFontColor,
                    showLabels: this.options.scaleShowLabels,
                    showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                    backdropColor: this.options.scaleBackdropColor,
                    backdropPaddingY: this.options.scaleBackdropPaddingY,
                    backdropPaddingX: this.options.scaleBackdropPaddingX,
                    lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                    lineColor: this.options.scaleLineColor,
                    lineArc: !0,
                    width: this.chart.width,
                    height: this.chart.height,
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2,
                    ctx: this.chart.ctx,
                    templateString: this.options.scaleLabel,
                    valuesCount: t.length
                }), this.updateScaleRange(t), this.scale.update(), i.each(t, function(t, e) {
                    this.addData(t, e, !0)
                }, this), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                    i.each(this.segments, function(t) {
                        t.restore(["fillColor"])
                    }), i.each(e, function(t) {
                        t.fillColor = t.highlightColor
                    }), this.showTooltip(e)
                }), this.render()
            },
            getSegmentsAtEvent: function(t) {
                var e = [],
                    n = i.getRelativePosition(t);
                return i.each(this.segments, function(t) {
                    t.inRange(n.x, n.y) && e.push(t)
                }, this), e
            },
            addData: function(t, e, i) {
                var n = e || this.segments.length;
                this.segments.splice(n, 0, new this.SegmentArc({
                    fillColor: t.color,
                    highlightColor: t.highlight || t.color,
                    label: t.label,
                    value: t.value,
                    outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(t.value),
                    circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(),
                    startAngle: 1.5 * Math.PI
                })), i || (this.reflow(), this.update())
            },
            removeData: function(t) {
                var e = i.isNumber(t) ? t : this.segments.length - 1;
                this.segments.splice(e, 1), this.reflow(), this.update()
            },
            calculateTotal: function(t) {
                this.total = 0, i.each(t, function(t) {
                    this.total += t.value
                }, this), this.scale.valuesCount = this.segments.length
            },
            updateScaleRange: function(t) {
                var e = [];
                i.each(t, function(t) {
                    e.push(t.value)
                });
                var n = this.options.scaleOverride ? {
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                } : i.calculateScaleRange(e, i.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                i.extend(this.scale, n, {
                    size: i.min([this.chart.width, this.chart.height]),
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                })
            },
            update: function() {
                this.calculateTotal(this.segments), i.each(this.segments, function(t) {
                    t.save()
                }), this.reflow(), this.render()
            },
            reflow: function() {
                i.extend(this.SegmentArc.prototype, {
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.updateScaleRange(this.segments), this.scale.update(), i.extend(this.scale, {
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                }), i.each(this.segments, function(t) {
                    t.update({
                        outerRadius: this.scale.calculateCenterOffset(t.value)
                    })
                }, this)
            },
            draw: function(t) {
                var e = t || 1;
                this.clear(), i.each(this.segments, function(t, i) {
                    t.transition({
                        circumference: this.scale.getCircumference(),
                        outerRadius: this.scale.calculateCenterOffset(t.value)
                    }, e), t.endAngle = t.startAngle + t.circumference, 0 === i && (t.startAngle = 1.5 * Math.PI), i < this.segments.length - 1 && (this.segments[i + 1].startAngle = t.endAngle), t.draw()
                }, this), this.scale.draw()
            }
        })
    }.call(this),
    function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers;
        e.Type.extend({
            name: "Radar",
            defaults: {
                scaleShowLine: !0,
                angleShowLineOut: !0,
                scaleShowLabels: !1,
                scaleBeginAtZero: !0,
                angleLineColor: "rgba(0,0,0,.1)",
                angleLineWidth: 1,
                pointLabelFontFamily: "'Arial'",
                pointLabelFontStyle: "normal",
                pointLabelFontSize: 10,
                pointLabelFontColor: "#666",
                pointDot: !0,
                pointDotRadius: 3,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: !0,
                datasetStrokeWidth: 2,
                datasetFill: !0,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>'
            },
            initialize: function(t) {
                this.PointClass = e.Point.extend({
                    strokeWidth: this.options.pointDotStrokeWidth,
                    radius: this.options.pointDotRadius,
                    display: this.options.pointDot,
                    hitDetectionRadius: this.options.pointHitDetectionRadius,
                    ctx: this.chart.ctx
                }), this.datasets = [], this.buildScale(t), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                    this.eachPoints(function(t) {
                        t.restore(["fillColor", "strokeColor"])
                    }), i.each(e, function(t) {
                        t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                    }), this.showTooltip(e)
                }), i.each(t.datasets, function(e) {
                    var n = {
                        label: e.label || null,
                        fillColor: e.fillColor,
                        strokeColor: e.strokeColor,
                        pointColor: e.pointColor,
                        pointStrokeColor: e.pointStrokeColor,
                        points: []
                    };
                    this.datasets.push(n), i.each(e.data, function(i, o) {
                        var a;
                        this.scale.animation || (a = this.scale.getPointPosition(o, this.scale.calculateCenterOffset(i))), n.points.push(new this.PointClass({
                            value: i,
                            label: t.labels[o],
                            datasetLabel: e.label,
                            x: this.options.animation ? this.scale.xCenter : a.x,
                            y: this.options.animation ? this.scale.yCenter : a.y,
                            strokeColor: e.pointStrokeColor,
                            fillColor: e.pointColor,
                            highlightFill: e.pointHighlightFill || e.pointColor,
                            highlightStroke: e.pointHighlightStroke || e.pointStrokeColor
                        }))
                    }, this)
                }, this), this.render()
            },
            eachPoints: function(t) {
                i.each(this.datasets, function(e) {
                    i.each(e.points, t, this)
                }, this)
            },
            getPointsAtEvent: function(t) {
                var e = i.getRelativePosition(t),
                    n = i.getAngleFromPoint({
                        x: this.scale.xCenter,
                        y: this.scale.yCenter
                    }, e),
                    o = 2 * Math.PI / this.scale.valuesCount,
                    a = Math.round((n.angle - 1.5 * Math.PI) / o),
                    s = [];
                return (a >= this.scale.valuesCount || 0 > a) && (a = 0), n.distance <= this.scale.drawingArea && i.each(this.datasets, function(t) {
                    s.push(t.points[a])
                }), s
            },
            buildScale: function(t) {
                this.scale = new e.RadialScale({
                    display: this.options.showScale,
                    fontStyle: this.options.scaleFontStyle,
                    fontSize: this.options.scaleFontSize,
                    fontFamily: this.options.scaleFontFamily,
                    fontColor: this.options.scaleFontColor,
                    showLabels: this.options.scaleShowLabels,
                    showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                    backdropColor: this.options.scaleBackdropColor,
                    backgroundColors: this.options.scaleBackgroundColors,
                    backdropPaddingY: this.options.scaleBackdropPaddingY,
                    backdropPaddingX: this.options.scaleBackdropPaddingX,
                    lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                    lineColor: this.options.scaleLineColor,
                    angleLineColor: this.options.angleLineColor,
                    angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0,
                    pointLabelFontColor: this.options.pointLabelFontColor,
                    pointLabelFontSize: this.options.pointLabelFontSize,
                    pointLabelFontFamily: this.options.pointLabelFontFamily,
                    pointLabelFontStyle: this.options.pointLabelFontStyle,
                    height: this.chart.height,
                    width: this.chart.width,
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2,
                    ctx: this.chart.ctx,
                    templateString: this.options.scaleLabel,
                    labels: t.labels,
                    valuesCount: t.datasets[0].data.length
                }), this.scale.setScaleSize(), this.updateScaleRange(t.datasets), this.scale.buildYLabels()
            },
            updateScaleRange: function(t) {
                var e = function() {
                        var e = [];
                        return i.each(t, function(t) {
                            t.data ? e = e.concat(t.data) : i.each(t.points, function(t) {
                                e.push(t.value)
                            })
                        }), e
                    }(),
                    n = this.options.scaleOverride ? {
                        steps: this.options.scaleSteps,
                        stepValue: this.options.scaleStepWidth,
                        min: this.options.scaleStartValue,
                        max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                    } : i.calculateScaleRange(e, i.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                i.extend(this.scale, n)
            },
            addData: function(t, e) {
                this.scale.valuesCount++, i.each(t, function(t, i) {
                    var n = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(t));
                    this.datasets[i].points.push(new this.PointClass({
                        value: t,
                        label: e,
                        datasetLabel: this.datasets[i].label,
                        x: n.x,
                        y: n.y,
                        strokeColor: this.datasets[i].pointStrokeColor,
                        fillColor: this.datasets[i].pointColor
                    }))
                }, this), this.scale.labels.push(e), this.reflow(), this.update()
            },
            removeData: function() {
                this.scale.valuesCount--, this.scale.labels.shift(), i.each(this.datasets, function(t) {
                    t.points.shift()
                }, this), this.reflow(), this.update()
            },
            update: function() {
                this.eachPoints(function(t) {
                    t.save()
                }), this.reflow(), this.render()
            },
            reflow: function() {
                i.extend(this.scale, {
                    width: this.chart.width,
                    height: this.chart.height,
                    size: i.min([this.chart.width, this.chart.height]),
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                }), this.updateScaleRange(this.datasets), this.scale.setScaleSize(), this.scale.buildYLabels()
            },
            draw: function(t) {
                var e = t || 1,
                    n = this.chart.ctx;
                this.clear(), this.scale.draw(), i.each(this.datasets, function(t) {
                    i.each(t.points, function(t, i) {
                        t.hasValue() && t.transition(this.scale.getPointPosition(i, this.scale.calculateCenterOffset(t.value)), e)
                    }, this), n.lineWidth = this.options.datasetStrokeWidth, n.strokeStyle = t.strokeColor, n.beginPath(), i.each(t.points, function(t, e) {
                        0 === e ? n.moveTo(t.x, t.y) : n.lineTo(t.x, t.y)
                    }, this), n.closePath(), n.stroke(), n.fillStyle = t.fillColor, this.options.datasetFill && n.fill(), i.each(t.points, function(t) {
                        t.hasValue() && t.draw()
                    })
                }, this)
            }
        })
    }.call(this);
var maslowChartData = {
        labels: ["Physiology", "Safety", "Social", "Esteem"],
        datasets: [{
            label: "Maslow's Hierarchy",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [100, 80, 60, 40]
        }, {
            label: "Grand Rapids",
            fillColor: "rgba(107, 188, 102, 0.5)",
            strokeColor: "#68BD62",
            pointColor: "#68BD62",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "#68BD62",
            data: [21, 12, 104, 44]
        }]
    },
    studentSurvey1 = {
        labels: ["0-2", "3-4", "5-6", "7-8", ">9"],
        datasets: [{
            label: "",
            fillColor: "#6BBC66",
            strokeColor: "#fff",
            highlightFill: "#262626",
            highlightStroke: "#fff",
            data: [22, 19, 16, 14, 29]
        }]
    },
    studentSurvey2 = {
        labels: ["Car", "Walk", "Bus", "Bike"],
        datasets: [{
            label: "",
            fillColor: "#6BBC66",
            strokeColor: "#fff",
            highlightFill: "#262626",
            highlightStroke: "#fff",
            data: [77, 6, 15, 2]
        }]
    },
    studentSurvey3 = {
        labels: ["Meijer", "Family Fare", "Farmers Market", "Walmart", "Other"],
        datasets: [{
            label: "",
            fillColor: "#6BBC66",
            strokeColor: "#fff",
            highlightFill: "#262626",
            highlightStroke: "#fff",
            data: [65, 5, 7, 9, 14]
        }]
    },
    studentSurvey4 = {
        labels: ["Yes", "No", "Maybe"],
        datasets: [{
            label: "",
            fillColor: "#6BBC66",
            strokeColor: "#fff",
            highlightFill: "#262626",
            highlightStroke: "#fff",
            data: [93, 4, 3]
        }]
    };
jQuery(document).ready(function() {
    chart()
});
var container = "",
    frames = "",
    homeFrame = "",
    workFrame = "",
    aboutFrame = "",
    current = "",
    isPlaying = !1,
    start = "",
    stop = "",
    cur = "",
    imgArr = "",
    canvas = "",
    ctx = "";
arrayReady = !1, jQuery(document).ready(function() {
    grain("play"), homeFrame = 0, workFrame = 80, aboutFrame = 170, start = homeFrame, stop = aboutFrame, cur = start, imgArr = [], canvas = document.getElementById("videoCanvas"), ctx = canvas.getContext("2d"), current = jQuery("#main > div").data("page")
}), jQuery(window).load(function() {
    prepareFrames()
}), jQuery(document).ready(function() {
    function t(t, n, s) {
        jQuery(n).attr("data-lightbox-content") ? jQuery(".lightbox").hasClass("active") ? a(n) : o(n) : jQuery(t).hasClass("active") ? e(t, s) : i(t, s)
    }

    function e(t, e) {
        jQuery.scrollLock(!1), console.log("close"), jQuery("html").removeClass("modal-active"), jQuery("html").removeClass(e), jQuery(t).removeClass("active")
    }

    function i(t, e) {
        jQuery.scrollLock(), jQuery("html").addClass("modal-active"), jQuery("html").addClass(e), jQuery(t).addClass("active")
    }

    function n() {
        jQuery.scrollLock(!1), console.log("close"), jQuery("html").removeClass("modal-active"), jQuery("html").removeClass("modal-type-slide-out"), jQuery(".modal").removeClass("active")
    }

    function o(t) {
        console.log("open"), console.log(jQuery(t).attr("data-lightbox-content"));
        var e = jQuery(t).attr("data-lightbox-content"),
            i = "<div class='background' style=\"background-image:url('" + e + "')\"></div>";
        i += "<img class='hide' src='" + e + "'/>", jQuery(".lightbox .content").empty(), jQuery(".lightbox .content").append(i), jQuery(".lightbox").addClass("active")
    }

    function a(t) {
        jQuery(".lightbox").removeClass("active")
    }
    jQuery(document).on("click", ".close-modal", function(e) {
        e.preventDefault();
        var i = jQuery(this).parent(".modal"),
            n = jQuery(i).attr("data-modal-type"),
            o = "modal-type-" + n,
            a = this;
        t(i, a, o)
    }), jQuery(document).on("click", ".modal-toggle", function(e) {
        e.preventDefault(), console.log("click");
        var i = jQuery(this).attr("data-modal"),
            n = jQuery(i).attr("data-modal-type"),
            o = "modal-type-" + n,
            a = this;
        t(i, a, o)
    })
});
var brightnessElements = [];
jQuery(document).ready(function() {
    contentNavigationInit(), onScroll()
});
var duration = 300,
    currentClass = "",
    scroll = 0;
jQuery(window).on("load", function() {
    currentClass = jQuery("#main > div").data("page")
}), jQuery(document).ready(function($) {
    "use strict";
    jQuery("#main").addClass("loading"), jQuery(".video_bg_wrap").addClass("loading"), init();
    var t = "fade",
        e = {
            prefetch: !0,
            cacheLength: 2,
            scroll: !1,
            blacklist: ".no-smoothState, .modal-toggle",
            onBefore: function(e, i) {
                var n = $("#main > .page").data("page"),
                    o = e.data("target");
                n = n ? n : 0, o = o ? o : 0, t = "home" == n && "work" == o ? "hometoWork" : "home" == n && "about" == o ? "hometoAbout" : "work" == n && "home" == o ? "worktoHome" : "work" == n && "about" == o ? "worktoAbout" : "about" == n && "home" == o ? "abouttoHome" : "about" == n && "work" == o ? "abouttoWork" : "home" == n && "home" == o ? "nothing" : "about" == n && "about" == o ? "nothing" : "work" == n && "work" == o ? "nothing" : "work" == n && "case_study" == o ? "worktoCaseStudy" : "beach" != n && "thrive" != n && "strictly" != n || "case_study" != o ? "default" : "CaseStudytoCaseStudy"
            },
            onStart: {
                duration: 10,
                render: function(e) {
                    function i() {
                        "hometoWork" == t ? (duration = 0, setTimeout(function() {
                            hometoWork(), grain(!0)
                        }, 200)) : "hometoAbout" == t ? (duration = 0, setTimeout(function() {
                            hometoAbout(), grain(!0)
                        }, 800)) : "worktoHome" == t ? worktoHome() : "worktoAbout" == t ? (duration = 0, setTimeout(function() {
                            worktoAbout()
                        }, 800)) : "abouttoHome" == t ? abouttoHome() : "abouttoWork" == t ? (duration = 800, setTimeout(function() {
                            abouttoWork()
                        }, 400)) : "worktoCaseStudy" == t || "CaseStudytoCaseStudy" == t ? (jQuery.scrollLock(), duration = 1e3) : "default" == t && (jQuery(window).scrollTop(0), duration = 100)
                    }
                    var n = function o() {
                        arrayReady ? i() : setTimeout(o, 10)
                    };
                    e.attr("data-transition", t).addClass("animate-out").addClass("loading").removeClass("animate-in"), jQuery(".video_bg_wrap").attr("data-transition", t).addClass("animate-out").removeClass("animate-in"), n()
                }
            },
            onReady: {
                duration: 0,
                render: function(t, e) {
                    setTimeout(function() {
                        t.addClass("loading"), t.html(e).promise().done(function() {
                            console.log(window.location.pathname), window.ga && window.ga("send", "pageview", window.location.pathname), jQuery.scrollLock(!1), jQuery(window).scrollTop(0), setTimeout(function() {
                                t.removeClass("loading").removeClass("animate-out").addClass("animate-in"), jQuery(".video_bg_wrap").removeClass("animate-out").addClass("animate-in").removeClass(currentClass), t.attr("data-transition", ""), jQuery(".video_bg_wrap").attr("data-transition", ""), init()
                            }, 10)
                        })
                    }, duration)
                }
            }
        },
        i = $("#main").smoothState(e).data("smoothState")
});
//# sourceMappingURL=./main-min.js.map

require=function(){function t(e,o,r){function n(a,c){if(!o[a]){if(!e[a]){var s="function"==typeof require&&require;if(!c&&s)return s(a,!0);if(i)return i(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var l=o[a]={exports:{}};e[a][0].call(l.exports,function(t){var o=e[a][1][t];return n(o?o:t)},l,l.exports,t,e,o,r)}return o[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)n(r[a]);return n}return t}()({1:[function(t,e,o){"use strict";e.exports={getWindow:function(){return window},getDocument:function(){return document},getNavigator:function(){return navigator}}},{}],2:[function(t,e,o){"use strict";function r(){var t=n.getWindow(),e=n.getDocument(),o=n.getNavigator();return!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch||o.maxTouchPoints>0||o.msMaxTouchPoints>0)}var n=t("./helpers/globals"),i=t("@marcom/ac-function/once");e.exports=i(r),e.exports.original=r},{"./helpers/globals":1,"@marcom/ac-function/once":3}],3:[function(t,e,o){"use strict";e.exports=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}}},{}],4:[function(t,e,o){"use strict";function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function i(t){if(f===setTimeout)return setTimeout(t,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function a(t){if(p===clearTimeout)return clearTimeout(t);if((p===n||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(t);try{return p(t)}catch(e){try{return p.call(null,t)}catch(e){return p.call(this,t)}}}function c(){h&&y&&(h=!1,y.length?d=y.concat(d):g=-1,d.length&&s())}function s(){if(!h){var t=i(c);h=!0;for(var e=d.length;e;){for(y=d,d=[];++g<e;)y&&y[g].run();g=-1,e=d.length}y=null,h=!1,a(t)}}function u(t,e){this.fun=t,this.array=e}function l(){}var f,p,m=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(t){f=r}try{p="function"==typeof clearTimeout?clearTimeout:n}catch(t){p=n}}();var y,d=[],h=!1,g=-1;m.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)e[o-1]=arguments[o];d.push(new u(t,e)),1!==d.length||h||i(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=l,m.addListener=l,m.once=l,m.off=l,m.removeListener=l,m.removeAllListeners=l,m.emit=l,m.prependListener=l,m.prependOnceListener=l,m.listeners=function(t){return[]},m.binding=function(t){throw new Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(t){throw new Error("process.chdir is not supported")},m.umask=function(){return 0}},{}],5:[function(t,e,o){"use strict";var r=function(t,e){this._target=t,this._tests={},this.addTests(e)},n=r.prototype;n.addTests=function(t){this._tests=Object.assign(this._tests,t)},n._supports=function(t){return"undefined"!=typeof this._tests[t]&&("function"==typeof this._tests[t]&&(this._tests[t]=this._tests[t]()),this._tests[t])},n._addClass=function(t,e){e=e||"no-",this._supports(t)?this._target.classList.add(t):this._target.classList.add(e+t)},n.htmlClass=function(){var t;this._target.classList.remove("no-js"),this._target.classList.add("js");for(t in this._tests)this._tests.hasOwnProperty(t)&&this._addClass(t)},e.exports=r},{}],6:[function(t,e,o){"use strict";function r(t,e){this._target=t||document.body,this._attr=e||n,this._focusMethod=this._lastFocusMethod=!1,this._onKeyDown=this._onKeyDown.bind(this),this._onMouseDown=this._onMouseDown.bind(this),this._onTouchStart=this._onTouchStart.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this),this._onWindowBlur=this._onWindowBlur.bind(this),this._bindEvents()}var n="data-focus-method",i="touch",a="mouse",c="key",s=r.prototype;s._bindEvents=function(){this._target.addEventListener("keydown",this._onKeyDown,!0),this._target.addEventListener("mousedown",this._onMouseDown,!0),this._target.addEventListener("touchstart",this._onTouchStart,!0),this._target.addEventListener("focus",this._onFocus,!0),this._target.addEventListener("blur",this._onBlur,!0),window.addEventListener("blur",this._onWindowBlur)},s._onKeyDown=function(t){this._focusMethod=c},s._onMouseDown=function(t){this._focusMethod!==i&&(this._focusMethod=a)},s._onTouchStart=function(t){this._focusMethod=i},s._onFocus=function(t){this._focusMethod||(this._focusMethod=this._lastFocusMethod),t.target.setAttribute(this._attr,this._focusMethod),this._lastFocusMethod=this._focusMethod,this._focusMethod=!1},s._onBlur=function(t){t.target.removeAttribute(this._attr)},s._onWindowBlur=function(t){this._focusMethod=!1},e.exports=r},{}],7:[function(t,e,o){"use strict";t("@marcom/ac-polyfills");var r=t("./FeatureDetect"),n=t("./defaultTests");e.exports=new r(document.documentElement,n),e.exports.FeatureDetect=r;var i=t("./FocusManager");document.addEventListener&&document.addEventListener("DOMContentLoaded",function(){new i})},{"./FeatureDetect":5,"./FocusManager":6,"./defaultTests":8,"@marcom/ac-polyfills":"@marcom/ac-polyfills"}],8:[function(t,e,o){"use strict";var r=t("@marcom/ac-feature/touchAvailable");e.exports={touch:r,"progressive-image":!0}},{"@marcom/ac-feature/touchAvailable":2}],9:[function(t,e,o){"use strict";e.exports={getWindow:function(){return window},getDocument:function(){return document},getNavigator:function(){return navigator}}},{}],10:[function(t,e,o){"use strict";function r(){var t=n.getWindow(),e=t.matchMedia("(prefers-reduced-motion)");return!(!e||!e.matches)}var n=t("./helpers/globals");e.exports=r},{"./helpers/globals":9}],11:[function(t,e,o){"use strict";function r(){var t=n.getWindow(),e=n.getDocument(),o=n.getNavigator();return!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch||o.maxTouchPoints>0||o.msMaxTouchPoints>0)}var n=t("./helpers/globals"),i=t("@marcom/function-utils/once");e.exports=i(r),e.exports.original=r},{"./helpers/globals":9,"@marcom/function-utils/once":12}],12:[function(t,e,o){"use strict";e.exports=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}}},{}],13:[function(t,e,o){"use strict";e.exports={browser:{safari:!1,chrome:!1,firefox:!1,ie:!1,opera:!1,android:!1,edge:!1,version:{string:"",major:0,minor:0,patch:0,documentMode:!1}},os:{osx:!1,ios:!1,android:!1,windows:!1,linux:!1,fireos:!1,chromeos:!1,version:{string:"",major:0,minor:0,patch:0}}}},{}],14:[function(t,e,o){"use strict";e.exports={browser:[{name:"edge",userAgent:"Edge",version:["rv","Edge"],test:function(t){return t.ua.indexOf("Edge")>-1||"Mozilla/5.0 (Windows NT 10.0; Win64; x64)"===t.ua}},{name:"chrome",userAgent:"Chrome"},{name:"firefox",test:function(t){return t.ua.indexOf("Firefox")>-1&&t.ua.indexOf("Opera")===-1},version:"Firefox"},{name:"android",userAgent:"Android"},{name:"safari",test:function(t){return t.ua.indexOf("Safari")>-1&&t.vendor.indexOf("Apple")>-1},version:"Version"},{name:"ie",test:function(t){return t.ua.indexOf("IE")>-1||t.ua.indexOf("Trident")>-1},version:["MSIE","rv"],parseDocumentMode:function(){var t=!1;return document.documentMode&&(t=parseInt(document.documentMode,10)),t}},{name:"opera",userAgent:"Opera",version:["Version","Opera"]}],os:[{name:"windows",test:function(t){return t.ua.indexOf("Windows")>-1},version:"Windows NT"},{name:"osx",userAgent:"Mac",test:function(t){return t.ua.indexOf("Macintosh")>-1}},{name:"ios",test:function(t){return t.ua.indexOf("iPhone")>-1||t.ua.indexOf("iPad")>-1},version:["iPhone OS","CPU OS"]},{name:"linux",userAgent:"Linux",test:function(t){return(t.ua.indexOf("Linux")>-1||t.platform.indexOf("Linux")>-1)&&t.ua.indexOf("Android")===-1}},{name:"fireos",test:function(t){return t.ua.indexOf("Firefox")>-1&&t.ua.indexOf("Mobile")>-1},version:"rv"},{name:"android",userAgent:"Android",test:function(t){return t.ua.indexOf("Android")>-1}},{name:"chromeos",userAgent:"CrOS"}]}},{}],15:[function(t,e,o){"use strict";function r(t){return new RegExp(t+"[a-zA-Z\\s/:]+([0-9_.]+)","i")}function n(t,e){if("function"==typeof t.parseVersion)return t.parseVersion(e);var o=t.version||t.userAgent;"string"==typeof o&&(o=[o]);for(var n,i=o.length,a=0;a<i;a++)if(n=e.match(r(o[a])),n&&n.length>1)return n[1].replace(/_/g,".");return!1}function i(t,e,o){for(var r,i,a=t.length,c=0;c<a;c++)if("function"==typeof t[c].test?t[c].test(o)===!0&&(r=t[c].name):o.ua.indexOf(t[c].userAgent)>-1&&(r=t[c].name),r){if(e[r]=!0,i=n(t[c],o.ua),"string"==typeof i){var s=i.split(".");e.version.string=i,s&&s.length>0&&(e.version.major=parseInt(s[0]||0),e.version.minor=parseInt(s[1]||0),e.version.patch=parseInt(s[2]||0))}else"edge"===r&&(e.version.string="12.0.0",e.version.major="12",e.version.minor="0",e.version.patch="0");return"function"==typeof t[c].parseDocumentMode&&(e.version.documentMode=t[c].parseDocumentMode()),e}return e}function a(t){var e={};return e.browser=i(s.browser,c.browser,t),e.os=i(s.os,c.os,t),e}var c=t("./defaults"),s=t("./dictionary");e.exports=a},{"./defaults":13,"./dictionary":14}],16:[function(t,e,o){"use strict";var r={ua:window.navigator.userAgent,platform:window.navigator.platform,vendor:window.navigator.vendor};e.exports=t("./parseUserAgent")(r)},{"./parseUserAgent":15}],17:[function(t,e,o){!function(t){"use strict";t.console||(t.console={});for(var e,o,r=t.console,n=function(){},i=["memory"],a="assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(",");e=i.pop();)r[e]||(r[e]={});for(;o=a.pop();)"function"!=typeof r[o]&&(r[o]=n)}("undefined"==typeof window?this:window)},{}],18:[function(t,e,o){"use strict";var r=t("./promise/promise").Promise,n=t("./promise/polyfill").polyfill;o.Promise=r,o.polyfill=n},{"./promise/polyfill":22,"./promise/promise":23}],19:[function(t,e,o){"use strict";function r(t){var e=this;if(!n(t))throw new TypeError("You must pass an array to all.");return new e(function(e,o){function r(t){return function(e){n(t,e)}}function n(t,o){c[t]=o,0===--s&&e(c)}var a,c=[],s=t.length;0===s&&e([]);for(var u=0;u<t.length;u++)a=t[u],a&&i(a.then)?a.then(r(u),o):n(u,a)})}var n=t("./utils").isArray,i=t("./utils").isFunction;o.all=r},{"./utils":27}],20:[function(t,e,o){(function(t,e){"use strict";function r(){return function(){t.nextTick(a)}}function n(){var t=0,e=new l(a),o=document.createTextNode("");return e.observe(o,{characterData:!0}),function(){o.data=t=++t%2}}function i(){return function(){f.setTimeout(a,1)}}function a(){for(var t=0;t<p.length;t++){var e=p[t],o=e[0],r=e[1];o(r)}p=[]}function c(t,e){var o=p.push([t,e]);1===o&&s()}var s,u="undefined"!=typeof window?window:{},l=u.MutationObserver||u.WebKitMutationObserver,f="undefined"!=typeof e?e:void 0===this?window:this,p=[];s="undefined"!=typeof t&&"[object process]"==={}.toString.call(t)?r():l?n():i(),o.asap=c}).call(this,t("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{_process:4}],21:[function(t,e,o){"use strict";function r(t,e){return 2!==arguments.length?n[t]:void(n[t]=e)}var n={instrument:!1};o.config=n,o.configure=r},{}],22:[function(t,e,o){(function(e){"use strict";function r(){var t;t="undefined"!=typeof e?e:"undefined"!=typeof window&&window.document?window:self;var o="Promise"in t&&"resolve"in t.Promise&&"reject"in t.Promise&&"all"in t.Promise&&"race"in t.Promise&&function(){var e;return new t.Promise(function(t){e=t}),i(e)}();o||(t.Promise=n)}var n=t("./promise").Promise,i=t("./utils").isFunction;o.polyfill=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./promise":23,"./utils":27}],23:[function(t,e,o){"use strict";function r(t){if(!h(t))throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");if(!(this instanceof r))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._subscribers=[],n(t,this)}function n(t,e){function o(t){u(e,t)}function r(t){f(e,t)}try{t(o,r)}catch(n){r(n)}}function i(t,e,o,r){var n,i,a,c,l=h(o);if(l)try{n=o(r),a=!0}catch(p){c=!0,i=p}else n=r,a=!0;s(e,n)||(l&&a?u(e,n):c?f(e,i):t===E?u(e,n):t===x&&f(e,n))}function a(t,e,o,r){var n=t._subscribers,i=n.length;n[i]=e,n[i+E]=o,n[i+x]=r}function c(t,e){for(var o,r,n=t._subscribers,a=t._detail,c=0;c<n.length;c+=3)o=n[c],r=n[c+e],i(e,o,r,a);t._subscribers=null}function s(t,e){var o,r=null;try{if(t===e)throw new TypeError("A promises callback cannot return that same promise.");if(d(e)&&(r=e.then,h(r)))return r.call(e,function(r){return!!o||(o=!0,void(e!==r?u(t,r):l(t,r)))},function(e){return!!o||(o=!0,void f(t,e))}),!0}catch(n){return!!o||(f(t,n),!0)}return!1}function u(t,e){t===e?l(t,e):s(t,e)||l(t,e)}function l(t,e){t._state===O&&(t._state=S,t._detail=e,y.async(p,t))}function f(t,e){t._state===O&&(t._state=S,t._detail=e,y.async(m,t))}function p(t){c(t,t._state=E)}function m(t){c(t,t._state=x)}var y=t("./config").config,d=(t("./config").configure,t("./utils").objectOrFunction),h=t("./utils").isFunction,g=(t("./utils").now,t("./all").all),v=t("./race").race,w=t("./resolve").resolve,b=t("./reject").reject,A=t("./asap").asap;y.async=A;var O=void 0,S=0,E=1,x=2;r.prototype={constructor:r,_state:void 0,_detail:void 0,_subscribers:void 0,then:function(t,e){var o=this,r=new this.constructor(function(){});if(this._state){var n=arguments;y.async(function(){i(o._state,r,n[o._state-1],o._detail)})}else a(this,r,t,e);return r},"catch":function(t){return this.then(null,t)}},r.all=g,r.race=v,r.resolve=w,r.reject=b,o.Promise=r},{"./all":19,"./asap":20,"./config":21,"./race":24,"./reject":25,"./resolve":26,"./utils":27}],24:[function(t,e,o){"use strict";function r(t){var e=this;if(!n(t))throw new TypeError("You must pass an array to race.");return new e(function(e,o){for(var r,n=0;n<t.length;n++)r=t[n],r&&"function"==typeof r.then?r.then(e,o):e(r)})}var n=t("./utils").isArray;o.race=r},{"./utils":27}],25:[function(t,e,o){"use strict";function r(t){var e=this;return new e(function(e,o){o(t)})}o.reject=r},{}],26:[function(t,e,o){"use strict";function r(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=this;return new e(function(e){e(t)})}o.resolve=r},{}],27:[function(t,e,o){"use strict";function r(t){return n(t)||"object"==typeof t&&null!==t}function n(t){return"function"==typeof t}function i(t){return"[object Array]"===Object.prototype.toString.call(t)}var a=Date.now||function(){return(new Date).getTime()};o.objectOrFunction=r,o.isFunction=n,o.isArray=i,o.now=a},{}],28:[function(t,e,o){!function(t,o){function r(t,e){var o=t.createElement("p"),r=t.getElementsByTagName("head")[0]||t.documentElement;return o.innerHTML="x<style>"+e+"</style>",r.insertBefore(o.lastChild,r.firstChild)}function n(){var t=b.elements;return"string"==typeof t?t.split(" "):t}function i(t,e){var o=b.elements;"string"!=typeof o&&(o=o.join(" ")),"string"!=typeof t&&(t=t.join(" ")),b.elements=o+" "+t,l(e)}function a(t){var e=w[t[g]];return e||(e={},v++,t[g]=v,w[v]=e),e}function c(t,e,r){if(e||(e=o),p)return e.createElement(t);r||(r=a(e));var n;return n=r.cache[t]?r.cache[t].cloneNode():h.test(t)?(r.cache[t]=r.createElem(t)).cloneNode():r.createElem(t),!n.canHaveChildren||d.test(t)||n.tagUrn?n:r.frag.appendChild(n)}function s(t,e){if(t||(t=o),p)return t.createDocumentFragment();e=e||a(t);for(var r=e.frag.cloneNode(),i=0,c=n(),s=c.length;i<s;i++)r.createElement(c[i]);return r}function u(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(o){return b.shivMethods?c(o,t,e):e.createElem(o)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/[\w\-:]+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(b,e.frag)}function l(t){t||(t=o);var e=a(t);return!b.shivCSS||f||e.hasCSS||(e.hasCSS=!!r(t,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),p||u(t,e),t}var f,p,m="3.7.3-pre",y=t.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",v=0,w={};!function(){try{var t=o.createElement("a");t.innerHTML="<xyz></xyz>",f="hidden"in t,p=1==t.childNodes.length||function(){o.createElement("a");var t=o.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(e){f=!0,p=!0}}();var b={elements:y.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:m,shivCSS:y.shivCSS!==!1,supportsUnknownElements:p,shivMethods:y.shivMethods!==!1,type:"default",shivDocument:l,createElement:c,createDocumentFragment:s,addElements:i};t.html5=b,l(o),"object"==typeof e&&e.exports&&(e.exports=b)}("undefined"!=typeof window?window:this,document)},{}],29:[function(t,e,o){!function(){if(window.matchMedia&&window.matchMedia("all").addListener)return!1;var t=window.matchMedia,e=t("only all").matches,o=!1,r=0,n=[],i=function(e){clearTimeout(r),r=setTimeout(function(){for(var e=0,o=n.length;e<o;e++){var r=n[e].mql,i=n[e].listeners||[],a=t(r.media).matches;if(a!==r.matches){r.matches=a;for(var c=0,s=i.length;c<s;c++)i[c].call(window,r)}}},30)};window.matchMedia=function(r){var a=t(r),c=[],s=0;return a.addListener=function(t){e&&(o||(o=!0,window.addEventListener("resize",i,!0)),0===s&&(s=n.push({mql:a,listeners:c})),c.push(t))},a.removeListener=function(t){for(var e=0,o=c.length;e<o;e++)c[e]===t&&c.splice(e,1)},a}}()},{}],30:[function(t,e,o){window.matchMedia||(window.matchMedia=function(){"use strict";var t=window.styleMedia||window.media;if(!t){var e=document.createElement("style"),o=document.getElementsByTagName("script")[0],r=null;e.type="text/css",e.id="matchmediajs-test",o?o.parentNode.insertBefore(e,o):document.head.appendChild(e),r="getComputedStyle"in window&&window.getComputedStyle(e,null)||e.currentStyle,t={matchMedium:function(t){var o="@media "+t+"{ #matchmediajs-test { width: 1px; } }";return e.styleSheet?e.styleSheet.cssText=o:e.textContent=o,"1px"===r.width}}}return function(e){return{matches:t.matchMedium(e||"all"),media:e||"all"}}}())},{}],31:[function(t,e,o){"use strict";function r(){var t=document.createElement("a");if(t.relList)return t.relList.supports("ar")}function n(){return s.browser.safari&&12===s.browser.version.major}function i(){return n()&&r()}function a(){return!n()&&r()}var c=t("@marcom/ac-headjs"),s=t("@marcom/useragent-detect"),u=t("@marcom/feature-detect/touchAvailable"),l=t("@marcom/feature-detect/prefersReducedMotion"),f=function(){return s.browser.ie||s.browser.edge||l()||document.documentElement.classList.contains("aow")};c.addTests({fallback:f(),ie:s.browser.ie,edge:s.browser.edge,android:s.browser.android,ipados:(s.os.osx||s.os.ios)&&u(),ios:s.os.ios,touch:u(),"quick-look":r(),"quick-look-modern":a(),"quick-look-classic":i()}),c.htmlClass()},{"@marcom/ac-headjs":7,"@marcom/feature-detect/prefersReducedMotion":10,"@marcom/feature-detect/touchAvailable":11,"@marcom/useragent-detect":16}],"@marcom/ac-polyfills/Array/from":[function(t,e,o){"use strict";Array.from||(Array.from=function(){var t=Object.prototype.toString,e=function(e){return"function"==typeof e||"[object Function]"===t.call(e)},o=function(t){var e=Number(t);return isNaN(e)?0:0!==e&&isFinite(e)?(e>0?1:-1)*Math.floor(Math.abs(e)):e},r=Math.pow(2,53)-1,n=function(t){var e=o(t);return Math.min(Math.max(e,0),r)};return function(t){var o=this,r=Object(t);if(null==t)throw new TypeError("Array.from requires an array-like object - not null or undefined");var i,a=arguments.length>1?arguments[1]:void 0;if("undefined"!=typeof a){if(!e(a))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(i=arguments[2])}for(var c,s=n(r.length),u=e(o)?Object(new o(s)):new Array(s),l=0;l<s;)c=r[l],a?u[l]="undefined"==typeof i?a(c,l):a.call(i,c,l):u[l]=c,l+=1;return u.length=s,u}}())},{}],"@marcom/ac-polyfills/Array/isArray":[function(t,e,o){"use strict";Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)})},{}],"@marcom/ac-polyfills/Array/prototype.every":[function(t,e,o){"use strict";Array.prototype.every||(Array.prototype.every=function(t,e){var o,r=Object(this),n=r.length>>>0;if("function"!=typeof t)throw new TypeError(t+" is not a function");for(o=0;o<n;o+=1)if(o in r&&!t.call(e,r[o],o,r))return!1;return!0})},{}],"@marcom/ac-polyfills/Array/prototype.filter":[function(t,e,o){"use strict";Array.prototype.filter||(Array.prototype.filter=function(t,e){var o,r=Object(this),n=r.length>>>0,i=[];if("function"!=typeof t)throw new TypeError(t+" is not a function");for(o=0;o<n;o+=1)o in r&&t.call(e,r[o],o,r)&&i.push(r[o]);return i})},{}],"@marcom/ac-polyfills/Array/prototype.find":[function(t,e,o){"use strict";Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(t){if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),o=e.length>>>0;if("function"!=typeof t)throw new TypeError("predicate must be a function");for(var r=arguments[1],n=0;n<o;){var i=e[n];if(t.call(r,i,n,e))return i;n++}}})},{}],"@marcom/ac-polyfills/Array/prototype.forEach":[function(t,e,o){"use strict";Array.prototype.forEach||(Array.prototype.forEach=function(t,e){var o,r,n=Object(this);if("function"!=typeof t)throw new TypeError("No function object passed to forEach.");var i=this.length;for(o=0;o<i;o+=1)r=n[o],t.call(e,r,o,n)})},{}],"@marcom/ac-polyfills/Array/prototype.includes":[function(t,e,o){"use strict";Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,e){function o(t,e){return t===e||"number"==typeof t&&"number"==typeof e&&isNaN(t)&&isNaN(e)}if(null==this)throw new TypeError('"this" is null or not defined');var r=Object(this),n=r.length>>>0;if(0===n)return!1;for(var i=0|e,a=Math.max(i>=0?i:n-Math.abs(i),0);a<n;){if(o(r[a],t))return!0;a++}return!1}})},{}],"@marcom/ac-polyfills/Array/prototype.indexOf":[function(t,e,o){"use strict";Array.prototype.indexOf||(Array.prototype.indexOf=function(t,e){var o=e||0,r=0;if(o<0&&(o=this.length+e-1,o<0))throw"Wrapped past beginning of array while looking up a negative start index.";for(r=0;r<this.length;r++)if(this[r]===t)return r;return-1})},{}],"@marcom/ac-polyfills/Array/prototype.lastIndexOf":[function(t,e,o){"use strict";Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(t,e){var o,r=Object(this),n=r.length>>>0;if(e=parseInt(e,10),n<=0)return-1;for(o="number"==typeof e?Math.min(n-1,e):n-1,o=o>=0?o:n-Math.abs(o);o>=0;o-=1)if(o in r&&t===r[o])return o;return-1})},{}],"@marcom/ac-polyfills/Array/prototype.map":[function(t,e,o){"use strict";Array.prototype.map||(Array.prototype.map=function(t,e){var o,r=Object(this),n=r.length>>>0,i=new Array(n);if("function"!=typeof t)throw new TypeError(t+" is not a function");for(o=0;o<n;o+=1)o in r&&(i[o]=t.call(e,r[o],o,r));return i})},{}],"@marcom/ac-polyfills/Array/prototype.reduceRight":[function(t,e,o){"use strict";Array.prototype.reduceRight||(Array.prototype.reduceRight=function(t,e){var o,r=Object(this),n=r.length>>>0,i=n-1;if("function"!=typeof t)throw new TypeError(t+" is not a function");if(void 0===e){if(!n)throw new TypeError("Reduce of empty array with no initial value");o=r[n-1],i=n-2}else o=e;for(;i>=0;)i in r&&(o=t.call(void 0,o,r[i],i,r),i-=1);return o})},{}],"@marcom/ac-polyfills/Array/prototype.reduce":[function(t,e,o){"use strict";Array.prototype.reduce||(Array.prototype.reduce=function(t,e){var o,r=Object(this),n=r.length>>>0,i=0;if("function"!=typeof t)throw new TypeError(t+" is not a function");if("undefined"==typeof e){if(!n)throw new TypeError("Reduce of empty array with no initial value");o=r[0],i=1}else o=e;for(;i<n;)i in r&&(o=t.call(void 0,o,r[i],i,r),i+=1);return o})},{}],"@marcom/ac-polyfills/Array/prototype.slice":[function(t,e,o){"use strict";!function(){var t=Array.prototype.slice;try{t.call(document.documentElement)}catch(e){Array.prototype.slice=function(e,o){if(o="undefined"!=typeof o?o:this.length,"[object Array]"===Object.prototype.toString.call(this))return t.call(this,e,o);var r,n,i=[],a=this.length,c=e||0;c=c>=0?c:a+c;var s=o?o:a;if(o<0&&(s=a+o),n=s-c,n>0)if(i=new Array(n),this.charAt)for(r=0;r<n;r++)i[r]=this.charAt(c+r);else for(r=0;r<n;r++)i[r]=this[c+r];return i}}}()},{}],"@marcom/ac-polyfills/Array/prototype.some":[function(t,e,o){"use strict";Array.prototype.some||(Array.prototype.some=function(t,e){var o,r=Object(this),n=r.length>>>0;if("function"!=typeof t)throw new TypeError(t+" is not a function");for(o=0;o<n;o+=1)if(o in r&&t.call(e,r[o],o,r)===!0)return!0;return!1})},{}],"@marcom/ac-polyfills/Array":[function(t,e,o){"use strict";t("./Array/from"),t("./Array/isArray"),t("./Array/prototype.every"),t("./Array/prototype.filter"),t("./Array/prototype.find"),t("./Array/prototype.forEach"),t("./Array/prototype.includes"),t("./Array/prototype.indexOf"),t("./Array/prototype.lastIndexOf"),t("./Array/prototype.map"),t("./Array/prototype.reduce"),t("./Array/prototype.reduceRight"),t("./Array/prototype.slice"),t("./Array/prototype.some")},{"./Array/from":"@marcom/ac-polyfills/Array/from","./Array/isArray":"@marcom/ac-polyfills/Array/isArray","./Array/prototype.every":"@marcom/ac-polyfills/Array/prototype.every","./Array/prototype.filter":"@marcom/ac-polyfills/Array/prototype.filter","./Array/prototype.find":"@marcom/ac-polyfills/Array/prototype.find","./Array/prototype.forEach":"@marcom/ac-polyfills/Array/prototype.forEach","./Array/prototype.includes":"@marcom/ac-polyfills/Array/prototype.includes","./Array/prototype.indexOf":"@marcom/ac-polyfills/Array/prototype.indexOf","./Array/prototype.lastIndexOf":"@marcom/ac-polyfills/Array/prototype.lastIndexOf","./Array/prototype.map":"@marcom/ac-polyfills/Array/prototype.map","./Array/prototype.reduce":"@marcom/ac-polyfills/Array/prototype.reduce","./Array/prototype.reduceRight":"@marcom/ac-polyfills/Array/prototype.reduceRight","./Array/prototype.slice":"@marcom/ac-polyfills/Array/prototype.slice","./Array/prototype.some":"@marcom/ac-polyfills/Array/prototype.some"}],"@marcom/ac-polyfills/CustomEvent":[function(t,e,o){"use strict";if(document.createEvent)try{new window.CustomEvent("click")}catch(r){window.CustomEvent=function(){function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),o}return t.prototype=window.Event.prototype,t}()}},{}],"@marcom/ac-polyfills/Date/now":[function(t,e,o){"use strict";Date.now||(Date.now=function(){return(new Date).getTime()})},{}],"@marcom/ac-polyfills/Date/prototype.toISOString":[function(t,e,o){"use strict";Date.prototype.toISOString||(Date.prototype.toISOString=function(){if(!isFinite(this))throw new RangeError("Date.prototype.toISOString called on non-finite value.");var t,e,o={year:this.getUTCFullYear(),month:this.getUTCMonth()+1,day:this.getUTCDate(),hours:this.getUTCHours(),minutes:this.getUTCMinutes(),seconds:this.getUTCSeconds(),mseconds:(this.getUTCMilliseconds()/1e3).toFixed(3).substr(2,3)};for(t in o)o.hasOwnProperty(t)&&"year"!==t&&"mseconds"!==t&&(o[t]=1===String(o[t]).length?"0"+String(o[t]):String(o[t]));return(o.year<0||o.year>9999)&&(e=o.year<0?"-":"+",o.year=e+String(Math.abs(o.year/1e6)).substr(2,6)),o.year+"-"+o.month+"-"+o.day+"T"+o.hours+":"+o.minutes+":"+o.seconds+"."+o.mseconds+"Z"})},{}],"@marcom/ac-polyfills/Date/prototype.toJSON":[function(t,e,o){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};Date.prototype.toJSON||(Date.prototype.toJSON=function(t){var e,o=Object(this),n=function(t){var e="undefined"==typeof t?"undefined":r(t),o=[null,"undefined","boolean","string","number"].some(function(t){return t===e});return!!o},i=function(t){var e;if(n(t))return t;if(e="function"==typeof t.valueOf?t.valueOf():"function"==typeof t.toString?t.toString():null,e&&n(e))return e;throw new TypeError(t+" cannot be converted to a primitive")};if(e=i(o),"number"==typeof e&&!isFinite(e))return null;if("function"!=typeof o.toISOString)throw new TypeError("toISOString is not callable");return o.toISOString.call(o)})},{}],"@marcom/ac-polyfills/Date":[function(t,e,o){"use strict";t("./Date/now"),t("./Date/prototype.toISOString"),t("./Date/prototype.toJSON")},{"./Date/now":"@marcom/ac-polyfills/Date/now","./Date/prototype.toISOString":"@marcom/ac-polyfills/Date/prototype.toISOString","./Date/prototype.toJSON":"@marcom/ac-polyfills/Date/prototype.toJSON"}],"@marcom/ac-polyfills/Element/prototype.classList":[function(t,e,o){"use strict";"document"in self&&("classList"in document.createElement("_")?!function(){var t=document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var o,r=arguments.length;for(o=0;o<r;o++)t=arguments[o],e.call(this,t)}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var o=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:o.call(this,t)}}t=null}():!function(t){if("Element"in t){var e="classList",o="prototype",r=t.Element[o],n=Object,i=String[o].trim||function(){return this.replace(/^\s+|\s+$/g,"")},a=Array[o].indexOf||function(t){for(var e=0,o=this.length;e<o;e++)if(e in this&&this[e]===t)return e;return-1},c=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},s=function(t,e){if(""===e)throw new c("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(e))throw new c("INVALID_CHARACTER_ERR","String contains an invalid character");return a.call(t,e)},u=function(t){for(var e=i.call(t.getAttribute("class")||""),o=e?e.split(/\s+/):[],r=0,n=o.length;r<n;r++)this.push(o[r]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},l=u[o]=[],f=function(){return new u(this)};if(c[o]=Error[o],l.item=function(t){return this[t]||null},l.contains=function(t){return t+="",s(this,t)!==-1},l.add=function(){var t,e=arguments,o=0,r=e.length,n=!1;do t=e[o]+"",s(this,t)===-1&&(this.push(t),n=!0);while(++o<r);n&&this._updateClassName()},l.remove=function(){var t,e,o=arguments,r=0,n=o.length,i=!1;do for(t=o[r]+"",e=s(this,t);e!==-1;)this.splice(e,1),i=!0,e=s(this,t);while(++r<n);i&&this._updateClassName()},l.toggle=function(t,e){t+="";var o=this.contains(t),r=o?e!==!0&&"remove":e!==!1&&"add";return r&&this[r](t),e===!0||e===!1?e:!o},l.toString=function(){return this.join(" ")},n.defineProperty){var p={get:f,enumerable:!0,configurable:!0};try{n.defineProperty(r,e,p)}catch(m){m.number===-2146823252&&(p.enumerable=!1,n.defineProperty(r,e,p))}}else n[o].__defineGetter__&&r.__defineGetter__(e,f)}}(self))},{}],"@marcom/ac-polyfills/Element/prototype.matches":[function(t,e,o){"use strict";Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),o=e.length;--o>=0&&e.item(o)!==this;);
return o>-1})},{}],"@marcom/ac-polyfills/Element/prototype.remove":[function(t,e,o){"use strict";e.exports=function(){"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}},{}],"@marcom/ac-polyfills/Element":[function(t,e,o){"use strict";t("./Element/prototype.classList"),t("./Element/prototype.matches"),t("./Element/prototype.remove")},{"./Element/prototype.classList":"@marcom/ac-polyfills/Element/prototype.classList","./Element/prototype.matches":"@marcom/ac-polyfills/Element/prototype.matches","./Element/prototype.remove":"@marcom/ac-polyfills/Element/prototype.remove"}],"@marcom/ac-polyfills/Function/prototype.bind":[function(t,e,o){"use strict";Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),o=this,r=function(){},n=function(){return o.apply(this instanceof r&&t?this:t,e.concat(Array.prototype.slice.call(arguments)))};return r.prototype=this.prototype,n.prototype=new r,n})},{}],"@marcom/ac-polyfills/Function":[function(t,e,o){"use strict";t("./Function/prototype.bind")},{"./Function/prototype.bind":"@marcom/ac-polyfills/Function/prototype.bind"}],"@marcom/ac-polyfills/JSON":[function(require,module,exports){"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};"object"!==("undefined"==typeof JSON?"undefined":_typeof(JSON))&&(JSON={}),function(){function f(t){return t<10?"0"+t:t}function quote(t){return escapable.lastIndex=0,escapable.test(t)?'"'+t.replace(escapable,function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var o,r,n,i,a,c=gap,s=e[t];switch(s&&"object"===("undefined"==typeof s?"undefined":_typeof(s))&&"function"==typeof s.toJSON&&(s=s.toJSON(t)),"function"==typeof rep&&(s=rep.call(e,t,s)),"undefined"==typeof s?"undefined":_typeof(s)){case"string":return quote(s);case"number":return isFinite(s)?String(s):"null";case"boolean":case"null":return String(s);case"object":if(!s)return"null";if(gap+=indent,a=[],"[object Array]"===Object.prototype.toString.apply(s)){for(i=s.length,o=0;o<i;o+=1)a[o]=str(o,s)||"null";return n=0===a.length?"[]":gap?"[\n"+gap+a.join(",\n"+gap)+"\n"+c+"]":"["+a.join(",")+"]",gap=c,n}if(rep&&"object"===("undefined"==typeof rep?"undefined":_typeof(rep)))for(i=rep.length,o=0;o<i;o+=1)"string"==typeof rep[o]&&(r=rep[o],n=str(r,s),n&&a.push(quote(r)+(gap?": ":":")+n));else for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n=str(r,s),n&&a.push(quote(r)+(gap?": ":":")+n));return n=0===a.length?"{}":gap?"{\n"+gap+a.join(",\n"+gap)+"\n"+c+"}":"{"+a.join(",")+"}",gap=c,n}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx,escapable,gap,indent,meta,rep;"function"!=typeof JSON.stringify&&(escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(t,e,o){var r;if(gap="",indent="","number"==typeof o)for(r=0;r<o;r+=1)indent+=" ";else"string"==typeof o&&(indent=o);if(rep=e,e&&"function"!=typeof e&&("object"!==("undefined"==typeof e?"undefined":_typeof(e))||"number"!=typeof e.length))throw new Error("JSON.stringify");return str("",{"":t})}),"function"!=typeof JSON.parse&&(cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,JSON.parse=function(text,reviver){function walk(t,e){var o,r,n=t[e];if(n&&"object"===("undefined"==typeof n?"undefined":_typeof(n)))for(o in n)Object.prototype.hasOwnProperty.call(n,o)&&(r=walk(n,o),void 0!==r?n[o]=r:delete n[o]);return reviver.call(t,e,n)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}()},{}],"@marcom/ac-polyfills/NodeList/prototype.forEach":[function(t,e,o){"use strict";window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(var o=0;o<this.length;o++)t.call(e,this[o],o,this)})},{}],"@marcom/ac-polyfills/NodeList":[function(t,e,o){"use strict";t("./NodeList/prototype.forEach")},{"./NodeList/prototype.forEach":"@marcom/ac-polyfills/NodeList/prototype.forEach"}],"@marcom/ac-polyfills/Object/assign":[function(t,e,o){"use strict";"function"!=typeof Object.assign&&(Object.assign=function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");t=Object(t);for(var e=1;e<arguments.length;e++){var o=arguments[e];if(null!=o)for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t})},{}],"@marcom/ac-polyfills/Object/create":[function(t,e,o){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};if(!Object.create){var n=function(){};Object.create=function(t){if(arguments.length>1)throw new Error("Second argument not supported");if(null===t||"object"!==("undefined"==typeof t?"undefined":r(t)))throw new TypeError("Object prototype may only be an Object.");return n.prototype=t,new n}}},{}],"@marcom/ac-polyfills/Object/is":[function(t,e,o){"use strict";Object.is||(Object.is=function(t,e){return 0===t&&0===e?1/t===1/e:t!==t?e!==e:t===e})},{}],"@marcom/ac-polyfills/Object/keys":[function(t,e,o){"use strict";Object.keys||(Object.keys=function(t){var e,o=[];if(!t||"function"!=typeof t.hasOwnProperty)throw"Object.keys called on non-object.";for(e in t)t.hasOwnProperty(e)&&o.push(e);return o})},{}],"@marcom/ac-polyfills/Object":[function(t,e,o){"use strict";t("./Object/assign"),t("./Object/create"),t("./Object/is"),t("./Object/keys")},{"./Object/assign":"@marcom/ac-polyfills/Object/assign","./Object/create":"@marcom/ac-polyfills/Object/create","./Object/is":"@marcom/ac-polyfills/Object/is","./Object/keys":"@marcom/ac-polyfills/Object/keys"}],"@marcom/ac-polyfills/Promise":[function(t,e,o){"use strict";e.exports=t("es6-promise").polyfill()},{"es6-promise":18}],"@marcom/ac-polyfills/String/prototype.includes":[function(t,e,o){"use strict";String.prototype.includes||(String.prototype.includes=function(t,e){return"number"!=typeof e&&(e=0),!(e+t.length>this.length)&&this.indexOf(t,e)!==-1})},{}],"@marcom/ac-polyfills/String/prototype.trim":[function(t,e,o){"use strict";String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")})},{}],"@marcom/ac-polyfills/String":[function(t,e,o){"use strict";t("./String/prototype.trim"),t("./String/prototype.includes")},{"./String/prototype.includes":"@marcom/ac-polyfills/String/prototype.includes","./String/prototype.trim":"@marcom/ac-polyfills/String/prototype.trim"}],"@marcom/ac-polyfills/XMLHttpRequest":[function(t,e,o){"use strict";window.XMLHttpRequest=window.XMLHttpRequest||function(){var t;try{t=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){try{t=new ActiveXObject("Microsoft.XMLHTTP")}catch(e){t=!1}}return t}},{}],"@marcom/ac-polyfills/console.log":[function(t,e,o){"use strict";t("console-polyfill")},{"console-polyfill":17}],"@marcom/ac-polyfills/getComputedStyle":[function(t,e,o){"use strict";if(!window.getComputedStyle){var r=function a(t,e,o){t.document;var r,n=t.currentStyle[e].match(/(-?[\d\.]+)(%|cm|em|in|mm|pc|pt|)/)||[0,0,""],i=n[1],c=n[2];return o=o?/%|em/.test(c)&&t.parentElement?a(t.parentElement,"fontSize",null):16:o,r="fontSize"==e?o:/width/i.test(e)?t.clientWidth:t.clientHeight,"%"==c?i/100*r:"cm"==c?.3937*i*96:"em"==c?i*o:"in"==c?96*i:"mm"==c?.3937*i*96/10:"pc"==c?12*i*96/72:"pt"==c?96*i/72:i},n=function(t,e){var o="border"==e?"Width":"",r=e+"Top"+o,n=e+"Right"+o,i=e+"Bottom"+o,a=e+"Left"+o;t[e]=(t[r]==t[n]&&t[r]==t[i]&&t[r]==t[a]?[t[r]]:t[r]==t[i]&&t[a]==t[n]?[t[r],t[n]]:t[a]==t[n]?[t[r],t[n],t[i]]:[t[r],t[n],t[i],t[a]]).join(" ")},i=function(t){var e,o=this,i=t.currentStyle,a=r(t,"fontSize"),c=function(t){return"-"+t.toLowerCase()};for(e in i)if(Array.prototype.push.call(o,"styleFloat"==e?"float":e.replace(/[A-Z]/,c)),"width"==e)o[e]=t.offsetWidth+"px";else if("height"==e)o[e]=t.offsetHeight+"px";else if("styleFloat"==e)o["float"]=i[e],o.cssFloat=i[e];else if(/margin.|padding.|border.+W/.test(e)&&"auto"!=o[e])o[e]=Math.round(r(t,e,a))+"px";else if(/^outline/.test(e))try{o[e]=i[e]}catch(s){o.outlineColor=i.color,o.outlineStyle=o.outlineStyle||"none",o.outlineWidth=o.outlineWidth||"0px",o.outline=[o.outlineColor,o.outlineWidth,o.outlineStyle].join(" ")}else o[e]=i[e];n(o,"margin"),n(o,"padding"),n(o,"border"),o.fontSize=Math.round(a)+"px"};i.prototype={constructor:i,getPropertyPriority:function(){throw new Error("NotSupportedError: DOM Exception 9")},getPropertyValue:function(t){return this[t.replace(/-\w/g,function(t){return t[1].toUpperCase()})]},item:function(t){return this[t]},removeProperty:function(){throw new Error("NoModificationAllowedError: DOM Exception 7")},setProperty:function(){throw new Error("NoModificationAllowedError: DOM Exception 7")},getPropertyCSSValue:function(){throw new Error("NotSupportedError: DOM Exception 9")}},window.getComputedStyle=function(t){return new i(t)}}},{}],"@marcom/ac-polyfills/html5shiv":[function(t,e,o){"use strict";t("html5shiv/src/html5shiv")},{"html5shiv/src/html5shiv":28}],"@marcom/ac-polyfills/matchMedia":[function(t,e,o){"use strict";t("matchmedia-polyfill"),t("matchmedia-polyfill/matchMedia.addListener")},{"matchmedia-polyfill":30,"matchmedia-polyfill/matchMedia.addListener":29}],"@marcom/ac-polyfills/performance/now":[function(t,e,o){"use strict";t("../Date/now"),function(){if("performance"in window==0&&(window.performance={}),"now"in window.performance==0){var t=Date.now();performance.timing&&performance.timing.navigationStart&&(t=performance.timing.navigationStart),window.performance.now=function(){return Date.now()-t}}}()},{"../Date/now":"@marcom/ac-polyfills/Date/now"}],"@marcom/ac-polyfills/performance":[function(t,e,o){"use strict";t("./performance/now")},{"./performance/now":"@marcom/ac-polyfills/performance/now"}],"@marcom/ac-polyfills/requestAnimationFrame":[function(t,e,o){"use strict";!function(){for(var t=0,e=["ms","moz","webkit","o"],o=0;o<e.length&&!window.requestAnimationFrame;++o)window.requestAnimationFrame=window[e[o]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[o]+"CancelAnimationFrame"]||window[e[o]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,o){var r=Date.now(),n=Math.max(0,16-(r-t)),i=window.setTimeout(function(){e(r+n)},n);return t=r+n,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}()},{}],"@marcom/ac-polyfills":[function(t,e,o){"use strict";t("./Array"),t("./console.log"),t("./CustomEvent"),t("./Date"),t("./Element"),t("./Function"),t("./getComputedStyle"),t("./html5shiv"),t("./JSON"),t("./matchMedia"),t("./NodeList"),t("./Object"),t("./performance"),t("./Promise"),t("./requestAnimationFrame"),t("./String"),t("./XMLHttpRequest")},{"./Array":"@marcom/ac-polyfills/Array","./CustomEvent":"@marcom/ac-polyfills/CustomEvent","./Date":"@marcom/ac-polyfills/Date","./Element":"@marcom/ac-polyfills/Element","./Function":"@marcom/ac-polyfills/Function","./JSON":"@marcom/ac-polyfills/JSON","./NodeList":"@marcom/ac-polyfills/NodeList","./Object":"@marcom/ac-polyfills/Object","./Promise":"@marcom/ac-polyfills/Promise","./String":"@marcom/ac-polyfills/String","./XMLHttpRequest":"@marcom/ac-polyfills/XMLHttpRequest","./console.log":"@marcom/ac-polyfills/console.log","./getComputedStyle":"@marcom/ac-polyfills/getComputedStyle","./html5shiv":"@marcom/ac-polyfills/html5shiv","./matchMedia":"@marcom/ac-polyfills/matchMedia","./performance":"@marcom/ac-polyfills/performance","./requestAnimationFrame":"@marcom/ac-polyfills/requestAnimationFrame"}]},{},[31]);