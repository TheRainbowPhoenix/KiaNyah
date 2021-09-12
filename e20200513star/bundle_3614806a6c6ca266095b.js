/*! Copyright © 2011 - 2020 miHoYo. All Rights Reserved */
!function(e) {
    function c(c) {
        for (var n, i, l = c[0], u = c[1], g = c[2], v = 0, o = []; v < l.length; v++)
            i = l[v],
            Object.prototype.hasOwnProperty.call(a, i) && a[i] && o.push(a[i][0]),
            a[i] = 0;
        for (n in u)
            Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
        for (m && m(c); o.length; )
            o.shift()();
        return r.push.apply(r, g || []),
        t()
    }
    function t() {
        for (var e, c = 0; c < r.length; c++) {
            for (var t = r[c], n = !0, l = 1; l < t.length; l++) {
                var u = t[l];
                0 !== a[u] && (n = !1)
            }
            n && (r.splice(c--, 1),
            e = i(i.s = t[0]))
        }
        return e
    }
    var n = {}
      , a = {
        0: 0
    }
      , r = [];
    function i(c) {
        if (n[c])
            return n[c].exports;
        var t = n[c] = {
            i: c,
            l: !1,
            exports: {}
        };
        return e[c].call(t.exports, t, t.exports, i),
        t.l = !0,
        t.exports
    }
    i.m = e,
    i.c = n,
    i.d = function(e, c, t) {
        i.o(e, c) || Object.defineProperty(e, c, {
            enumerable: !0,
            get: t
        })
    }
    ,
    i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(e, c) {
        if (1 & c && (e = i(e)),
        8 & c)
            return e;
        if (4 & c && "object" == typeof e && e && e.__esModule)
            return e;
        var t = Object.create(null);
        if (i.r(t),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        }),
        2 & c && "string" != typeof e)
            for (var n in e)
                i.d(t, n, function(c) {
                    return e[c]
                }
                .bind(null, n));
        return t
    }
    ,
    i.n = function(e) {
        var c = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return i.d(c, "a", c),
        c
    }
    ,
    i.o = function(e, c) {
        return Object.prototype.hasOwnProperty.call(e, c)
    }
    ,
    i.p = "";
    var l = window.webpackJsonp = window.webpackJsonp || []
      , u = l.push.bind(l);
    l.push = c,
    l = l.slice();
    for (var g = 0; g < l.length; g++)
        c(l[g]);
    var m = u;
    r.push([260, 1]),
    t()
}(Array(61).concat([function(e, c, t) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
        value: !0
    }),
    t(263);
    var n, a, r = u(t(142)), i = u(t(143)), l = u(t(145));
    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    c.default = (n = regeneratorRuntime.mark((function e(c) {
        var n, a, u, g, m;
        return regeneratorRuntime.wrap((function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    (0,
                    l.default)(c),
                    n = [];
                    try {
                        for (a = Object.keys(r.default),
                        u = 0; u < a.length; u++)
                            g = a[u],
                            m = t(562)("" + r.default[g]).default,
                            n.push(m(c))
                    } catch (e) {
                        i.default.error(e)
                    }
                    return e.abrupt("return", Object.assign.apply(Object, [{}].concat(n)));
                case 4:
                case "end":
                    return e.stop()
                }
        }
        ), e, this)
    }
    )),
    a = function() {
        var e = n.apply(this, arguments);
        return new Promise((function(c, t) {
            return function n(a, r) {
                try {
                    var i = e[a](r)
                      , l = i.value
                } catch (e) {
                    return void t(e)
                }
                if (!i.done)
                    return Promise.resolve(l).then((function(e) {
                        n("next", e)
                    }
                    ), (function(e) {
                        n("throw", e)
                    }
                    ));
                c(l)
            }("next")
        }
        ))
    }
    ,
    function(e) {
        return a.apply(this, arguments)
    }
    )
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, c, t) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
        value: !0
    });
    var n = i(t(563))
      , a = i(t(564))
      , r = t(664);
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    c.default = function(e) {
        e.use(n.default);
        var c = new n.default({
            routes: a.default
        });
        return c.beforeEach((function(c, t, n) {
            r.beforeRouterUpdate.bind(e)(c, t, n)
        }
        )),
        c.afterEach((function(c, t) {
            r.afterRouterUpdate.bind(e)(c, t)
        }
        )),
        {
            router: c
        }
    }
}
, , function(e, c, t) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
        value: !0
    }),
    c.setLocalStorageCache = function(e, c) {
        var t = window.localStorage
          , n = JSON.stringify({
            timestamp: (new Date).getTime(),
            value: c
        });
        t.setItem(e, n)
    }
    ,
    c.getLocalStorageCache = function(e) {
        var c = window.localStorage.getItem(e);
        if (null == c)
            return null;
        return JSON.parse(c).value
    }
    ,
    c.removeLocalStorageCache = function(e) {
        window.localStorage.removeItem(e)
    }
    ,
    c.getLocalStorageInfo = function(e) {
        var c = window.localStorage.getItem(e);
        if (void 0 === c)
            return;
        return JSON.parse(c)
    }
    ;
    var n;
    c.memoryCache = (n = {},
    {
        set: function(e, c) {
            n[e] = {
                timestamp: Date.now(),
                value: c
            }
        },
        get: function(e) {
            return n[e] ? n[e].value : null
        },
        remove: function(e) {
            void 0 !== e && delete n[e]
        },
        getInfo: function(e) {
            return n[e]
        }
    })
}
, , , , function(e, c, t) {
    "use strict";
    t.r(c);
    var n = t(101)
      , a = t.n(n);
    for (var r in n)
        "default" !== r && function(e) {
            t.d(c, e, (function() {
                return n[e]
            }
            ))
        }(r);
    c.default = a.a
}
, function(e, c, t) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
        value: !0
    });
    var n = r(t(238))
      , a = r(t(590));
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t(660),
    c.default = {
        name: "home",
        components: {
            scene: a.default
        },
        data: function() {
            return {
                isBanner: !1,
                nowScene: 1,
                isBtn: !1,
                isRule: !1,
                isToggle: !1,
                isHistory: !1,
                isHomeDialog: !1,
                isGuide: !1,
                isShowHomeDialog: !1,
                isGuideVideo: !1,
                isHistoryPlay: !1,
                styleConfig: {
                    ruleStyle: {
                        width: "9.35rem",
                        height: "5.16rem",
                        backgroundImage: "url(" + this.$MI18N.IMAGE["modal-rule"] + ")"
                    },
                    historyStyle: {
                        width: "10.48rem",
                        height: "5.39rem",
                        backgroundImage: "url(" + this.$MI18N.IMAGE["modal-history"] + ")"
                    },
                    awardStyle: {
                        width: "7.5rem",
                        height: "4.41rem",
                        backgroundImage: "url(" + t(661) + ")"
                    }
                },
                mapActiveId: 0,
                isSkip: !1,
                isVideoEnd: !1,
                note_list: [],
                userData: {
                    guide: 0,
                    coin_army: 0,
                    coin_food: 0,
                    map_list: [],
                    flag: !1
                },
                nowGuideIdx: -1,
                nowAwardId: 1,
                isAward: !1,
                dialogData: JSON.parse(this.$MI18N.WORD["dialog-js"]),
                canToggle: !0,
                isGuideSkip: !1
            }
        },
        computed: {
            nowSendCost: function() {
                var e = this;
                if (0 === this.userData.map_list.length || 0 === this.mapActiveId)
                    return {
                        coin1: 0,
                        coin2: 0
                    };
                var c = this.userData.map_list.find((function(c) {
                    return c.id === e.mapActiveId
                }
                ));
                return {
                    coin1: c.cost_army,
                    coin2: c.cost_food
                }
            },
            canSend: function() {
                return this.nowSendCost.coin1 <= this.userData.coin_army && this.nowSendCost.coin2 <= this.userData.coin_food
            },
            nowEventName: function() {
                return this.mapActiveId > 0 ? this.dialogData["text" + this.mapActiveId].name : ""
            }
        },
        methods: {
            handleCloseAward: function() {
                5 === this.mapActiveId && (this.nowGuideIdx = 5),
                this.canToggle = !0,
                this.isAward = !1
            },
            handleGuide: function(e) {
                switch (e) {
                case 1:
                    this.toggleScene(),
                    this.nowGuideIdx += 1;
                    break;
                case 2:
                    this.mapActiveId = 5,
                    this.nowGuideIdx += 1;
                    break;
                case 4:
                    this.nowGuideIdx = -1,
                    this.handleSend();
                    break;
                case 5:
                    this.nowGuideIdx = -1;
                    break;
                default:
                    this.nowGuideIdx += 1
                }
            },
            handleReHistory: function(e) {
                this.mapActiveId = e,
                this.isHistoryPlay = !0,
                this.isHistory = !1,
                this.handleDialogEnd()
            },
            handleHistory: function() {
                var e = this;
                this.note_list.every((function(e) {
                    return e.new_flag = !1
                }
                )),
                this.userData.flag = !1,
                n.default.getNote().then((function(c) {
                    e.isHistory = !0,
                    e.note_list = c.note_list
                }
                )).catch((function(c) {
                    if (c.data && c.data.retcode) {
                        var t = c.data.message;
                        e.$messageBox({
                            content: t
                        })
                    } else
                        e.$messageBox({
                            content: e.$MI18N.WORD["modal-error"]
                        })
                }
                )),
                setTimeout((function() {
                    e.$model(2, "", "note")
                }
                ), 200)
            },
            handleDialogEndHome: function() {
                this.isShowHomeDialog = !1,
                this.isHomeDialog = !1,
                this.$refs.mainScene.changeHomeDialog(1, "loop_index"),
                this.$refs.mainScene.changeHomeDialog(2, "loop_index"),
                this.getIndex(),
                this.isAward = !0
            },
            handleDialogEnd: function() {
                var e = this;
                this.nowScene = 4,
                setTimeout((function() {
                    e.isSkip = !0
                }
                ), 5e3),
                this.isHistoryPlay || this.$refs.mainScene.playWeimuVideo()
            },
            bindEvent: function() {
                setTimeout((function() {}
                ))
            },
            handleSend: function() {
                var e = this;
                this.canSend && n.default.attack({
                    data: {
                        id: this.mapActiveId
                    }
                }).then((function(c) {
                    e.nowAwardId = c.award_id,
                    e.userData.coin_army = c.coin_army,
                    e.userData.coin_food = c.coin_food,
                    e.nowScene = 3,
                    e.isShowHomeDialog = !0,
                    e.canToggle = !1
                }
                )).catch((function(c) {
                    if (c.data && c.data.retcode) {
                        var t = c.data.message;
                        e.$messageBox({
                            content: t
                        })
                    } else
                        e.$messageBox({
                            content: e.$MI18N.WORD["modal-error"]
                        })
                }
                ))
            },
            handleComplete: function() {
                this.isBanner = !0,
                this.isBtn = !0,
                setTimeout((function() {}
                ), 300)
            },
            toggleScene: function() {
                0 !== this.userData.map_list.length && this.canToggle && (1 === this.nowScene ? this.nowScene = 2 : this.nowScene = 1)
            },
            handleVideoEnd: function() {
                var e = this;
                this.isHistoryPlay ? (this.isHistoryPlay = !1,
                this.nowScene = 1,
                this.isSkip = !1) : (this.isVideoEnd = !0,
                this.$refs.mainScene.playWeiMuToScene(),
                setTimeout((function() {
                    e.nowScene = 1,
                    e.isVideoEnd = !1,
                    e.isSkip = !1
                }
                ), 1500))
            },
            getIndex: function() {
                var e = this;
                n.default.getIndex().then((function(c) {
                    console.log(c),
                    e.userData = c,
                    setTimeout((function() {
                        e.$refs.mainScene.isCheck() ? (console.log("1开始judge"),
                        e.judgeGuide()) : e.$messageBox({
                            content: "当前安卓版本过低，舰长请使用安卓7.0及以上版本，或崩坏3桌面版参与本次活动"
                        })
                    }
                    ))
                }
                )).catch((function(c) {
                    if (c.data && c.data.retcode) {
                        var t = c.data.message;
                        e.$messageBox({
                            content: t
                        })
                    } else
                        e.$messageBox({
                            content: e.$MI18N.WORD["modal-error"]
                        })
                }
                ))
            },
            judgeGuide: function() {
                var e = this.userData;
                if (0 !== e.map_list.length)
                    switch (console.log("2开始判断阶段"),
                    e.guide) {
                    case 0:
                        console.log("3阶段1"),
                        this.guideStage1();
                        break;
                    case 1:
                        this.guideStage2()
                    }
            },
            guideStage1: function() {
                var e = this;
                this.isGuideVideo = !0,
                console.log("4阶段1视频开启"),
                setTimeout((function() {
                    var c = e.$refs.guide;
                    c.play(),
                    setTimeout((function() {
                        e.isGuideSkip = !0
                    }
                    ), 3e3),
                    c.addEventListener("ended", (function() {
                        e.handleCloseGudie()
                    }
                    ))
                }
                ))
            },
            handleCloseGudie: function() {
                var e = this;
                n.default.setGuide().then((function() {
                    e.isGuideVideo = !1,
                    e.isGuideSkip = !1,
                    e.guideStage2()
                }
                )).catch((function(c) {
                    if (c.data && c.data.retcode) {
                        var t = c.data.message;
                        e.$messageBox({
                            content: t
                        })
                    } else
                        e.$messageBox({
                            content: e.$MI18N.WORD["modal-error"]
                        })
                }
                ))
            },
            guideStage2: function() {
                this.nowGuideIdx = 1
            }
        },
        mounted: function() {
            this.getIndex()
        },
        watch: {
            isRule: function() {
                this.$model(2, "", "rule")
            },
            nowScene: function(e, c) {
                var t = this;
                1 === e ? (4 !== c && this.$refs.mainScene.playMapToHome(),
                this.isToggle = !1,
                this.isBtn = !0,
                this.isShowHomeDialog && setTimeout((function() {
                    t.isHomeDialog = !0
                }
                ), 1e3)) : 2 === e && (this.$refs.mainScene.playHomeToMap(),
                this.mapActiveId = 0,
                setTimeout((function() {
                    t.isToggle = !0
                }
                ), 400),
                this.isBtn = !1,
                this.$model(2, "", "map")),
                this.isBanner = 3 !== e,
                4 === e && (this.isBanner = !1,
                setTimeout((function() {
                    var e = t.$refs.theater;
                    t.isHistoryPlay || setTimeout((function() {
                        e.currentTime = 0
                    }
                    ), 1500),
                    e.addEventListener("ended", (function() {
                        t.handleVideoEnd()
                    }
                    ))
                }
                )))
            }
        }
    }
}
, function(e, c, t) {
    "use strict";
    t.r(c);
    var n = t(103)
      , a = t.n(n);
    for (var r in n)
        "default" !== r && function(e) {
            t.d(c, e, (function() {
                return n[e]
            }
            ))
        }(r);
    c.default = a.a
}
, function(e, c, t) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
        value: !0
    });
    var n, a = t(591), r = (n = a) && n.__esModule ? n : {
        default: n
    };
    var i = t(70)
      , l = t(168)
      , u = l.TweenMax
      , g = l.Power3
      , m = t(255).default
      , v = r.default.getEventDispatcher()
      , o = t(256)
      , s = t(653).MaskPass
      , f = void 0
      , p = void 0
      , d = void 0
      , h = void 0
      , x = void 0
      , y = void 0
      , b = void 0
      , _ = null
      , w = null
      , S = []
      , k = void 0
      , z = Math.max(1.5, Math.min(2.5, window.devicePixelRatio - .5))
      , C = void 0
      , I = void 0
      , E = void 0;
    c.default = {
        name: "game-canvas",
        data: function() {
            return {
                display: !0,
                guide: -1
            }
        },
        mounted: function() {
            var e = this;
            this.checkWeb(),
            this.$bus.$on("playWalkIn", (function() {
                e.initPlayGal()
            }
            )),
            this.$bus.$on("changeGalDialog", (function(c) {
                var t = c.role
                  , n = c.action;
                console.log("收到 gal " + t + " " + n),
                e.changeGalDialog(t, n)
            }
            )),
            this.$bus.$on("changeHomeDialog", (function(c) {
                var t = c.role
                  , n = c.action;
                e.changeHomeDialog(t, n)
            }
            ))
        },
        methods: {
            isCheck: function() {
                return r.default.checkGL(this.$refs.webglCanvas)
            },
            checkWeb: function() {
                this.isCheck() ? this.prepareLoading() : this.$messageBox({
                    content: this.$MI18N.WORD["modal-low"]
                })
            },
            playWeimuVideo: function() {
                var e = this;
                x.getObjectByName("WEIMU").state.setAnimation(0, "in", !1),
                _ = x,
                w = h,
                k.mode.value = 0,
                setTimeout((function() {
                    k.mode.value = 1,
                    e.playWeiMuOut()
                }
                ), 1500)
            },
            playWeiMuToScene: function() {
                this.playWeiMuIn(),
                setTimeout((function() {
                    x.getObjectByName("WEIMU").state.setAnimation(0, "out", !1),
                    _ = x,
                    w = p,
                    k.mode.value = 0,
                    setTimeout((function() {
                        _ = p,
                        w = null,
                        k.mode.value = 1
                    }
                    ), 1500)
                }
                ), 1500)
            },
            playWeiMuIn: function() {
                x.getObjectByName("WEIMU").state.setAnimation(0, "in", !1),
                this.showScene(x)
            },
            playWeiMuOut: function() {
                x.getObjectByName("WEIMU").state.setAnimation(0, "out", !1),
                this.showScene(x)
            },
            playGal: function() {},
            initPlayGal: function() {
                var e = h.getObjectByName("SPINE1")
                  , c = h.getObjectByName("SPINE2");
                e.state.data.setMix(e.state.tracks[0].animation.name, "talk_in", 0),
                c.state.data.setMix(c.state.tracks[0].animation.name, "talk_in", 0),
                e.state.setAnimation(0, "talk_in", !1),
                c.state.setAnimation(0, "talk_in", !1),
                this.showScene(h)
            },
            changeGalDialog: function(e, c) {
                console.log("changeGalDialog", (new Date).valueOf());
                var t = h.getObjectByName("SPINE1")
                  , n = h.getObjectByName("SPINE2");
                1 === e ? t.state.setAnimation(0, c, !0) : n.state.setAnimation(0, c, !0)
            },
            changeHomeDialog: function(e, c) {
                var t = p.getObjectByName("SPINE1")
                  , n = p.getObjectByName("SPINE2");
                console.log("role：" + e + "  action：" + c),
                1 === e ? t.state.setAnimation(0, c, !0) : n.state.setAnimation(0, c, !0)
            },
            playHomeToMap: function(e) {
                this.changeToScene(p, d, .07, .1, e)
            },
            playMapToHome: function(e) {
                this.changeToScene(d, p, .07, .1, e)
            },
            showScene: function(e) {
                _ = e,
                w = null,
                this.draw3D()
            },
            changeToScene: function(e, c) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .5
                  , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5
                  , a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
                  , r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1.3;
                _ = e,
                w = c,
                k.center.value.set(t, n),
                u.fromTo(k.percent, r, {
                    value: 0
                }, {
                    value: 1.5,
                    overwrite: !0,
                    ease: g.easeInOut,
                    onComplete: function() {
                        _ = c,
                        w = null,
                        k.percent.value = 0,
                        a && a()
                    }
                })
            },
            onResize: function() {
                var e = document.querySelector("#frame")
                  , c = e.clientWidth
                  , t = e.clientHeight;
                b.setSize(c, t),
                y.left = -c / 2,
                y.right = c / 2,
                y.top = t / 2,
                y.bottom = -t / 2,
                y.zoom = c / t >= 1334 / 750 ? t / 750 : c / 1334,
                y.updateProjectionMatrix();
                var n = c * z
                  , a = t * z;
                S[0].setSize(n, a),
                S[1].setSize(n, a),
                k.setResolution(n, a)
            },
            onLoadingComplete: function() {
                C.removeEventListener("complete", this.onLoadingComplete),
                this.init3D(),
                this.buildLoadingScene(),
                this.prepareContent(),
                this.showScene(f)
            },
            onContentProgress: function(e) {
                v.dispatchEvent({
                    type: "LOAD_PROGRESS",
                    progress: e.progress
                })
            },
            onContentComplete: function() {
                this.$emit("complete"),
                C.removeEventListener("progress", this.onContentProgress),
                C.removeEventListener("complete", this.onContentComplete),
                this.buildContentScene(),
                this.changeToScene(f, p)
            },
            prepareLoading: function() {
                (C = r.default.getLoader()).addEventListener("complete", this.onLoadingComplete),
                C.loadManifest(o.LOADING_MANIFEST)
            },
            prepareContent: function() {
                C.addEventListener("complete", this.onContentComplete),
                C.addEventListener("progress", this.onContentProgress);
                var e = -1 !== this.guide ? o.CONTENT_MANIFEST.concat(o.USER_GUIDE_MANIFEST) : o.CONTENT_MANIFEST;
                C.loadManifest(e)
            },
            buildLoadingScene: function() {
                var e = C.getResult("stage-all");
                E.initGeometry(e.geometry),
                E.initObject(e.sceneLoading, f, f)
            },
            buildContentScene: function() {
                var e = C.getResult("stage-all");
                E.initObject(e.sceneHome, p, p),
                E.initObject(e.sceneMap, d, d),
                E.initObject(e.sceneWeiMu, x, x),
                E.initObject(e.sceneGal, h, h),
                p.getObjectByName("SPINE1").state.setAnimation(0, "loop_index", !0),
                p.getObjectByName("SPINE2").state.setAnimation(0, "loop_index", !0);
                h.getObjectByName("SPINE1").state.data.defaultMix = .2,
                h.getObjectByName("SPINE2").state.data.defaultMix = .2
            },
            buildGuidScene: function() {},
            initScene: function() {
                f = new i.Scene,
                p = new i.Scene,
                d = new i.Scene,
                h = new i.Scene,
                x = new i.Scene
            },
            initCamera: function() {
                (y = new i.OrthographicCamera(-1,1,-1,1,1,1e3)).position.z = 100,
                y.matrixAutoUpdate = !1,
                y.updateMatrix()
            },
            initPass: function() {
                S[0] = new i.WebGLRenderTarget(1,1,{
                    format: i.RGBAFormat
                }),
                S[1] = new i.WebGLRenderTarget(1,1,{
                    format: i.RGBAFormat
                }),
                k = new s(b,S[0],S[1]),
                E.initBuffer("SCENE_BUFFER", S[0]),
                E.initBuffer("NEXT_BUFFER", S[1])
            },
            draw3D: function() {
                _ && b.render(_, y, S[0], !0),
                w && b.render(w, y, S[1], !0),
                (_ || w) && k.render(null, !0)
            },
            render3D: function() {
                m.delta.value = I.getDelta(),
                m.fps.value = Math.min(3, m.delta.value / .0167),
                m.time.value = I.getElapsedTime() % 1e4,
                this.display && this.draw3D(),
                window.requestAnimationFrame(this.render3D)
            },
            init3D: function() {
                try {
                    b = new i.WebGLRenderer({
                        canvas: this.$refs.webglCanvas,
                        alpha: !0
                    })
                } catch (e) {
                    return void console.log(e)
                }
                b.setClearColor(16777215, 0),
                b.setPixelRatio(z),
                b.autoClear = !1,
                E = new r.default({
                    renderer: b,
                    loader: C,
                    animationSetting: t(655).default,
                    uniformSetting: t(255).default,
                    shaderSetting: t(656).default,
                    spineSetting: t(256).SPINE_MANIFEST
                }),
                this.initScene(),
                this.initCamera(),
                this.initPass(),
                this.onResize(),
                I = new i.Clock,
                window.addEventListener("resize", this.onResize),
                this.render3D()
            }
        }
    }
}
, function(e, c, t) {}
, function(e, c, t) {
    "use strict";
    t.r(c);
    var n = t(106)
      , a = t.n(n);
    for (var r in n)
        "default" !== r && function(e) {
            t.d(c, e, (function() {
                return n[e]
            }
            ))
        }(r);
    c.default = a.a
}
, function(e, c, t) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
        value: !0
    }),
    t(663),
    c.default = {
        name: "about",
        data: function() {
            return {}
        },
        created: function() {},
        methods: {}
    }
}
, function(e, c, t) {
    "use strict";
    t.r(c);
    var n = t(108)
      , a = t.n(n);
    for (var r in n)
        "default" !== r && function(e) {
            t.d(c, e, (function() {
                return n[e]
            }
            ))
        }(r);
    c.default = a.a
}
, function(e, c, t) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
        value: !0
    }),
    c.default = {
        name: "app",
        beforeCreate: function() {},
        mounted: function() {
            var e = this;
            performance && setTimeout((function() {
                try {
                    var c = performance.getEntries().length
                      , t = performance.getEntries()[c - 1].responseEnd;
                    e.$model(1, (t / 1e3).toFixed(1) ? (t / 1e3).toFixed(1) : 0, "")
                } catch (e) {
                    console.log(e)
                }
            }
            ), 500)
        }
    }
}
, function(e, c, t) {
    "use strict";
    t.r(c);
    var n = t(110)
      , a = t.n(n);
    for (var r in n)
        "default" !== r && function(e) {
            t.d(c, e, (function() {
                return n[e]
            }
            ))
        }(r);
    c.default = a.a
}
, function(e, c, t) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
        value: !0
    }),
    c.default = {
        data: function() {
            return {}
        },
        props: {
            coinData: {
                type: Object
            }
        }
    }
}
, function(e, c, t) {}
, function(e, c, t) {
    "use strict";
    t.r(c);
    var n = t(113)
      , a = t.n(n);
    for (var r in n)
        "default" !== r && function(e) {
            t.d(c, e, (function() {
                return n[e]
            }
            ))
        }(r);
    c.default = a.a
}
, function(e, c, t) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
        value: !0
    }),
    c.default = {
        data: function() {
            return {
                dialogData: JSON.parse(this.$MI18N.WORD["dialog-js"]),
                nowData: {
                    after: [],
                    before: []
                },
                nowIdx: 0,
                nowText: [],
                isPlay: !1
            }
        },
        methods: {
            setData: function() {
                this.isPlay = !0,
                this.nowText = this.nowData[this.nowType][this.nowIdx],
                1 === this.initType ? (this.$bus.$emit("changeGalDialog", {
                    role: 1,
                    action: this.nowText.action1 ? this.nowText.action1 : "talk_off"
                }),
                this.$bus.$emit("changeGalDialog", {
                    role: 2,
                    action: this.nowText.action2 ? this.nowText.action2 : "talk_off"
                })) : (this.$bus.$emit("changeHomeDialog", {
                    role: 1,
                    action: this.nowText.action1 ? this.nowText.action1 : "loop_index"
                }),
                this.$bus.$emit("changeHomeDialog", {
                    role: 2,
                    action: this.nowText.action2 ? this.nowText.action2 : "loop_index"
                }))
            },
            handleNext: function() {
                this.nowIdx += 1,
                this.isEnd && this.$emit("end")
            }
        },
        watch: {
            nowIdx: function() {
                this.isEnd || this.setData()
            }
        },
        computed: {
            nowType: function() {
                return 1 === this.initType ? "before" : "after"
            },
            isEnd: function() {
                return this.nowIdx >= this.nowData[this.nowType].length
            },
            speaker: function() {
                return this.nowText.speak ? this.$MI18N.IMAGE["dialog-name-" + this.nowText.speak] : ""
            }
        },
        mounted: function() {
            var e = this;
            1 === this.initType && this.$bus.$emit("playWalkIn"),
            this.nowData = this.dialogData["text" + this.id],
            1 === this.initType ? setTimeout((function() {
                e.setData()
            }
            ), 1500) : this.setData()
        },
        props: {
            initType: {
                type: Number,
                default: 1
            },
            id: {
                type: Number
            }
        }
    }
}
, function(e, c, t) {}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e) {
    e.exports = JSON.parse('{"router":"./lib/router/index.js"}')
}
, function(e, c, t) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
        value: !0
    });
    var n = t(144);
    c.default = {
        log: function() {
            var e;
            (e = console)[n.Log].apply(e, arguments)
        },
        info: function() {
            var e;
            (e = console)[n.Info].apply(e, arguments)
        },
        warn: function() {
            var e;
            (e = console)[n.Warn].apply(e, arguments)
        },
        error: function() {
            var e;
            (e = console)[n.Error].apply(e, arguments)
        }
    }
}
, function(e, c, t) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
        value: !0
    });
    c.Log = "log",
    c.Info = "info",
    c.Warn = "warn",
    c.Error = "error"
}
, function(e, c, t) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
        value: !0
    });
    var n = g(t(465))
      , a = g(t(531))
      , r = Object.assign || function(e) {
        for (var c = 1; c < arguments.length; c++) {
            var t = arguments[c];
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
    }
      , i = g(t(227))
      , l = t(560)
      , u = g(t(561));
    function g(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function m(e, c, t) {
        var n = this
          , i = l.dealConfigsBeforeRequest ? l.dealConfigsBeforeRequest.bind(this)(e) : e
          , u = i.url
          , g = i.data
          , m = i.query
          , v = i.onSuccess
          , o = void 0 === v ? function() {}
        : v
          , s = i.onError
          , f = void 0 === s ? function() {}
        : s
          , p = function(e, c) {
            var t = {};
            for (var n in e)
                c.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t
        }(i, ["url", "data", "query", "onSuccess", "onError"])
          , d = [g, r({
            params: m
        }, p)];
        return "get" === t ? d = [r({
            params: g
        }, p)] : "delete" === t && (d = [r({
            params: m,
            data: g
        }, p)]),
        c[t].apply(c, [u].concat(function(e) {
            if (Array.isArray(e)) {
                for (var c = 0, t = Array(e.length); c < e.length; c++)
                    t[c] = e[c];
                return t
            }
            return Array.from(e)
        }(d))).then((function(c) {
            return l.requestComplete.bind(n)(c, e) ? null : (o.bind(n)((0,
            a.default)(c, "data")),
            c)
        }
        ), (function(c) {
            var t = (0,
            a.default)(c, "response");
            return l.requestComplete.bind(n)(t, e, c) ? null : (f.bind(n)(t),
            Promise.reject(c))
        }
        ))
    }
    function v(e) {
        var c = this;
        return {
            get: function(t) {
                return m.bind(c)(t, e, "get")
            },
            post: function(t) {
                return m.bind(c)(t, e, "post")
            },
            put: function(t) {
                return m.bind(c)(t, e, "put")
            },
            delete: function(t) {
                return m.bind(c)(t, e, "delete")
            }
        }
    }
    c.default = function(e) {
        var c = e;
        (0,
        n.default)(i.default.defaults, u.default),
        Object.defineProperty(c.prototype, "$http", {
            get: function() {
                return v.bind(this)(i.default)
            }
        })
    }
}
, , , , , , , , function(e, c, t) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
        value: !0
    });
    c.environment = "production",
    c.apiBase = "http://127.0.0.1:5000/api/"
}
, , , , , , , , , , , , , function(e, c) {
    e.exports = "#ifdef USE_TEXTURE\r\n  varying vec2 vUv;\r\n#endif\r\n#ifdef USE_INSTANCE\r\n  attribute vec4 rotation;\r\n  attribute vec3 offset;\r\n  attribute vec3 scale;\r\n#else\r\n  #include <skinning_pars_vertex>\r\n#endif\r\n\r\n#ifdef UV_OFFSET\r\n  uniform vec2 uvOffset;\r\n#endif\r\n\r\nvoid main(){\r\n      #ifdef USE_TEXTURE\r\n       vUv = uv;\r\n      #endif\r\n\r\n      #ifdef UV_OFFSET\r\n        vUv.y = (uv.y+uvOffset.x)/uvOffset.y;\r\n      #endif\r\n\r\n      #ifdef USE_INSTANCE\r\n        vec3 scaledPosition = position*scale;\r\n        vec3 transformed = (scaledPosition + 2.0 * cross(rotation.xyz, cross(rotation.xyz, scaledPosition) + rotation.w * scaledPosition))+offset;\r\n      #else\r\n        #include <beginnormal_vertex>\r\n\t\t\t\t#include <skinbase_vertex>\r\n\t\t\t  #include <skinnormal_vertex>\r\n\t\t\t\t#include <defaultnormal_vertex>\r\n\r\n\t\t\t\t#include <begin_vertex>\r\n\t\t\t\t#include <skinning_vertex>\r\n      #endif\r\n      #include <project_vertex>\r\n}\r\n"
}
, , , function(e, c, t) {
    "use strict";
    t.d(c, "a", (function() {
        return n
    }
    )),
    t.d(c, "b", (function() {
        return a
    }
    ));
    var n = function() {
        var e = this.$createElement;
        return (this._self._c || e)("router-view")
    }
      , a = [];
    n._withStripped = !0
}
, function(e, c, t) {
    "use strict";
    t.d(c, "a", (function() {
        return n
    }
    )),
    t.d(c, "b", (function() {
        return a
    }
    ));
    var n = function() {
        var e = this
          , c = e.$createElement
          , t = e._self._c || c;
        return e.isPlay ? t("div", {
            staticClass: "dialog-container animated fadeIn fast"
        }, [t("div", {
            staticClass: "dialog-mask",
            on: {
                click: e.handleNext
            }
        }), e._v(" "), t("div", {
            staticClass: "role-dialog bg center"
        }, [t("img", {
            staticClass: "name",
            attrs: {
                src: e.speaker,
                alt: ""
            }
        }), e._v(" "), t("div", {
            staticClass: "now-dialog"
        }, [e._v(e._s(e.nowText ? e.nowText.content : ""))]), e._v(" "), e._m(0)])]) : e._e()
    }
      , a = [function() {
        var e = this.$createElement
          , c = this._self._c || e;
        return c("div", {
            staticClass: "next"
        }, [c("img", {
            attrs: {
                type: "t",
                src: t(679),
                alt: ""
            }
        }), this._v(" "), c("img", {
            attrs: {
                type: "b",
                src: t(680),
                alt: ""
            }
        })])
    }
    ];
    n._withStripped = !0
}
, function(e, c, t) {
    "use strict";
    t.d(c, "a", (function() {
        return n
    }
    )),
    t.d(c, "b", (function() {
        return a
    }
    ));
    var n = function() {
        var e = this
          , c = e.$createElement
          , n = e._self._c || c;
        return n("div", {
            staticClass: "banner-container bg"
        }, [n("img", {
            staticClass: "money-pic",
            attrs: {
                src: t(236),
                alt: ""
            }
        }), e._v(" "), n("div", {
            staticClass: "money-text-1 money-text",
            domProps: {
                textContent: e._s(e.coinData.coin1)
            }
        }, [e._v("200")]), e._v(" "), n("img", {
            staticClass: "money-pic",
            attrs: {
                src: t(237),
                alt: ""
            }
        }), e._v(" "), n("div", {
            staticClass: "money-text-2 money-text",
            domProps: {
                textContent: e._s(e.coinData.coin2)
            }
        }, [e._v("200")])])
    }
      , a = [];
    n._withStripped = !0
}
, function(e, c, t) {
    "use strict";
    t.d(c, "a", (function() {
        return n
    }
    )),
    t.d(c, "b", (function() {
        return a
    }
    ));
    var n = function() {
        var e = this
          , c = e.$createElement
          , n = e._self._c || c;
        return n("div", {
            staticClass: "home-container"
        }, [n("transition", {
            attrs: {
                "enter-active-class": "animated bounceInDown"
            }
        }, [e.isBanner ? n("banner", {
            staticClass: "banner center",
            attrs: {
                coinData: {
                    coin1: e.userData.coin_army,
                    coin2: e.userData.coin_food
                }
            }
        }) : e._e()], 1), e._v(" "), n("div", {
            staticClass: "main-scene",
            class: {
                top: e.isVideoEnd
            }
        }, [n("scene", {
            ref: "mainScene",
            on: {
                complete: e.handleComplete
            }
        })], 1), e._v(" "), n("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: 1 === e.nowScene,
                expression: "nowScene === 1"
            }],
            staticClass: "part-home part"
        }, [e.isBtn ? n("div", {
            staticClass: "control-btn fadeInRight animated"
        }, [n("img", {
            staticClass: "rule",
            attrs: {
                src: e.$MI18N.IMAGE["btn-rule"],
                alt: ""
            },
            on: {
                click: function(c) {
                    e.isRule = !0
                }
            }
        }), e._v(" "), n("img", {
            staticClass: "history",
            attrs: {
                src: e.$MI18N.IMAGE["btn-history"],
                alt: ""
            },
            on: {
                click: e.handleHistory
            }
        }), e._v(" "), n("img", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.userData.flag,
                expression: "userData.flag"
            }],
            staticClass: "tag-new",
            attrs: {
                src: t(234),
                alt: ""
            }
        })]) : e._e(), e._v(" "), n("div", {
            staticClass: "btn-toggle",
            on: {
                click: e.toggleScene
            }
        }), e._v(" "), n("transition", {
            attrs: {
                "enter-active-class": "animated fadeInUp fast",
                "leave-active-class": "animated fadeOutDown fast"
            }
        }, [e.isHomeDialog ? n("mhy-dialog", {
            attrs: {
                id: e.mapActiveId,
                initType: 2
            },
            on: {
                end: e.handleDialogEndHome
            }
        }) : e._e()], 1), e._v(" "), n("mihoyo-event-dialog", {
            staticClass: "dialog-rule",
            attrs: {
                isOpen: e.isRule,
                containerClass: "bg full-center",
                containerStyle: e.styleConfig.ruleStyle,
                isFix: !0
            },
            on: {
                "update:isOpen": function(c) {
                    e.isRule = c
                },
                "update:is-open": function(c) {
                    e.isRule = c
                }
            }
        }, [n("div", {
            staticClass: "close",
            on: {
                click: function(c) {
                    e.isRule = !1
                }
            }
        }), e._v(" "), n("div", {
            staticClass: "menu-container scroll-hidden",
            domProps: {
                innerHTML: e._s(e.$MI18N.WORD["rule-text"])
            }
        })]), e._v(" "), n("mihoyo-event-dialog", {
            staticClass: "dialog-histroy",
            attrs: {
                isOpen: e.isHistory,
                containerClass: "bg full-center",
                containerStyle: e.styleConfig.historyStyle,
                isFix: !0
            },
            on: {
                "update:isOpen": function(c) {
                    e.isHistory = c
                },
                "update:is-open": function(c) {
                    e.isHistory = c
                }
            }
        }, [n("div", {
            staticClass: "close",
            on: {
                click: function(c) {
                    e.isHistory = !1
                }
            }
        }), e._v(" "), n("div", {
            staticClass: "menu-container"
        }, e._l(e.note_list, (function(c, a) {
            return n("div", {
                key: a,
                staticClass: "history-item"
            }, [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: c.new_flag,
                    expression: "item.new_flag"
                }],
                staticClass: "new-tag img"
            }, [n("img", {
                attrs: {
                    src: t(234),
                    alt: ""
                }
            })]), e._v(" "), n("div", {
                staticClass: "item-content img"
            }, [n("img", {
                attrs: {
                    src: e.$MI18N.IMAGE["h-" + (a + 1) + (c.attack_already ? "" : "-f")],
                    alt: ""
                },
                on: {
                    click: function(t) {
                        c.attack_already && e.handleReHistory(c.id)
                    }
                }
            })])])
        }
        )), 0)]), e._v(" "), n("mihoyo-event-dialog", {
            staticClass: "dialog-award",
            attrs: {
                isOpen: e.isAward,
                containerClass: "bg full-center",
                containerStyle: e.styleConfig.awardStyle,
                isFix: !0
            },
            on: {
                "update:isOpen": function(c) {
                    e.isAward = c
                },
                "update:is-open": function(c) {
                    e.isAward = c
                }
            }
        }, [n("div", {
            staticClass: "close",
            on: {
                click: function(c) {
                    e.isRule = !1
                }
            }
        }), e._v(" "), n("div", {
            staticClass: "menu-container"
        }, [n("div", {
            staticClass: "title center",
            domProps: {
                innerHTML: e._s(e.$MI18N.getLocaleText({
                    key: "home-88",
                    data: {
                        nowEventName: " <span style='color: #c38538'>" + e.nowEventName + "</span> "
                    }
                }))
            }
        }), e._v(" "), n("div", {
            staticClass: "award-content"
        }, [n("img", {
            staticClass: "inner",
            attrs: {
                src: t(235)("./award-" + e.nowAwardId + ".png"),
                alt: ""
            }
        }), e._v(" "), n("div", {
            staticClass: "num",
            attrs: {
                "data-text": "×" + e.$num(e.nowAwardId)
            },
            domProps: {
                textContent: e._s("×" + e.$num(e.nowAwardId))
            }
        })]), e._v(" "), n("div", {
            staticClass: "btn-confirm img center",
            on: {
                click: e.handleCloseAward
            }
        }, [n("img", {
            attrs: {
                src: e.$MI18N.IMAGE["btn-confirm"],
                alt: ""
            }
        })])])]), e._v(" "), n("transition", {
            attrs: {
                "leave-active-class": "animated fadeOut"
            }
        }, [e.isGuideVideo ? n("div", {
            staticClass: "guide-video"
        }, [n("video", {
            ref: "guide",
            staticStyle: {
                width: "100%",
                height: "100%"
            },
            attrs: {
                muted: "",
                playsinline: "",
                autoplay: "",
                "webkit-playsinline": "",
                src: e.$MI18N.WORD["video-guide"]
            },
            domProps: {
                muted: !0
            }
        }), e._v(" "), e.isGuideSkip ? n("div", {
            staticClass: "skip img animated fadeInDown",
            on: {
                click: e.handleCloseGudie
            }
        }, [n("img", {
            attrs: {
                src: e.$MI18N.IMAGE.skip,
                alt: ""
            }
        })]) : e._e()]) : e._e()])], 1), e._v(" "), 2 === e.nowScene ? n("div", {
            staticClass: "part part-map"
        }, [n("div", {
            staticClass: "btn-toggle img",
            on: {
                click: e.toggleScene
            }
        }, [e.isToggle ? n("img", {
            attrs: {
                src: e.$MI18N.IMAGE["btn-back"],
                alt: ""
            }
        }) : e._e()]), e._v(" "), n("div", {
            staticClass: "layer-container"
        }, e._l(7, (function(c, a) {
            return n("img", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: c === e.mapActiveId,
                    expression: "item === mapActiveId"
                }],
                key: a,
                staticClass: "layer animated slow",
                class: "layer-" + c,
                attrs: {
                    src: t(572)("./layer-" + c + ".png"),
                    alt: ""
                }
            })
        }
        )), 0), e._v(" "), n("div", {
            staticClass: "award-container"
        }, e._l(e.userData.map_list, (function(c, a) {
            return n("div", {
                key: a,
                staticClass: "award-inner animated fadeInDown fast delay-1s img",
                class: "award-inner-" + (a + 1),
                on: {
                    click: function(t) {
                        !c.attack_already && (e.mapActiveId = a + 1)
                    }
                }
            }, [n("img", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: c.attack_already,
                    expression: "item.attack_already"
                }],
                staticClass: "already center",
                attrs: {
                    src: e.$MI18N.IMAGE.already,
                    alt: ""
                }
            }), e._v(" "), n("div", {
                staticClass: "award-pannel bg",
                class: {
                    already: c.attack_already
                }
            }, [n("img", {
                staticClass: "award-bg",
                attrs: {
                    src: t(580),
                    alt: ""
                }
            }), e._v(" "), n("img", {
                staticClass: "every",
                attrs: {
                    src: t(235)("./award-" + c.award_id + ".png"),
                    alt: ""
                }
            }), e._v(" "), n("div", {
                staticClass: "cost center",
                attrs: {
                    "data-text": "×" + e.$num(c.award_id)
                },
                domProps: {
                    textContent: e._s("×" + e.$num(c.award_id))
                }
            })]), e._v(" "), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.mapActiveId === a + 1,
                    expression: "mapActiveId === idx+1"
                }],
                staticClass: "desc-container bg"
            }, [n("img", {
                attrs: {
                    src: t(236),
                    alt: ""
                }
            }), e._v(" "), n("div", {
                staticClass: "coin1",
                staticStyle: {
                    "margin-right": "0.08rem"
                },
                style: {
                    color: e.nowSendCost.coin1 > e.userData.coin_army ? "red" : "#673e12"
                },
                domProps: {
                    textContent: e._s(e.nowSendCost.coin1)
                }
            }), e._v(" "), n("img", {
                attrs: {
                    src: t(237),
                    alt: ""
                }
            }), e._v(" "), n("div", {
                staticClass: "coin2",
                style: {
                    color: e.nowSendCost.coin2 > e.userData.coin_food ? "red" : "#673e12"
                },
                domProps: {
                    textContent: e._s(e.nowSendCost.coin2)
                }
            })]), e._v(" "), n("img", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.mapActiveId === a + 1,
                    expression: "mapActiveId === idx+1"
                }],
                staticClass: "func-btn",
                attrs: {
                    src: e.$MI18N.IMAGE["btn-send" + (e.canSend ? "" : "-f")],
                    alt: ""
                },
                on: {
                    click: e.handleSend
                }
            })])
        }
        )), 0)]) : e._e(), e._v(" "), n("transition", {
            attrs: {
                "leave-active-class": "animated fadeOutDown fast"
            }
        }, [3 === e.nowScene ? n("div", {
            staticClass: "part part-role"
        }, [n("mhy-dialog", {
            attrs: {
                id: e.mapActiveId,
                initType: 1
            },
            on: {
                end: e.handleDialogEnd
            }
        })], 1) : e._e()]), e._v(" "), 4 === e.nowScene ? n("div", {
            staticClass: "part part-video",
            class: {
                show: e.isSkip,
                h: e.isHistoryPlay
            }
        }, [n("video", {
            ref: "theater",
            staticStyle: {
                width: "100%",
                height: "100%"
            },
            attrs: {
                autoplay: "",
                muted: "",
                playsinline: "",
                "webkit-playsinline": "",
                src: e.$MI18N.WORD["video-" + e.mapActiveId]
            },
            domProps: {
                muted: !0
            }
        }), e._v(" "), e.isSkip ? n("div", {
            staticClass: "skip img animated fadeInDown",
            on: {
                click: e.handleVideoEnd
            }
        }, [n("img", {
            attrs: {
                src: e.$MI18N.IMAGE.skip,
                alt: ""
            }
        })]) : e._e()]) : e._e(), e._v(" "), -1 !== e.nowGuideIdx ? n("div", {
            staticClass: "guide-container"
        }, e._l(5, (function(c, t) {
            return n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: c === e.nowGuideIdx,
                    expression: "item === nowGuideIdx"
                }],
                key: t,
                staticClass: "guide-item",
                class: "guide-item-" + c
            }, [n("img", {
                attrs: {
                    src: e.$MI18N.IMAGE["guide-" + c],
                    alt: ""
                }
            }), e._v(" "), n("div", {
                staticClass: "clickable",
                on: {
                    click: function(t) {
                        return e.handleGuide(c)
                    }
                }
            })])
        }
        )), 0) : e._e()], 1)
    }
      , a = [];
    n._withStripped = !0
}
, function(e, c, t) {
    "use strict";
    t.d(c, "a", (function() {
        return n
    }
    )),
    t.d(c, "b", (function() {
        return a
    }
    ));
    var n = function() {
        var e = this.$createElement;
        this._self._c;
        return this._m(0)
    }
      , a = [function() {
        var e = this.$createElement
          , c = this._self._c || e;
        return c("div", {
            staticClass: "about"
        }, [c("h2", [this._v("about页面")])])
    }
    ];
    n._withStripped = !0
}
, function(e, c, t) {
    "use strict";
    t.d(c, "a", (function() {
        return n
    }
    )),
    t.d(c, "b", (function() {
        return a
    }
    ));
    var n = function() {
        var e = this.$createElement;
        return (this._self._c || e)("canvas", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: this.display,
                expression: "display"
            }],
            ref: "webglCanvas",
            staticClass: "webgl-element"
        })
    }
      , a = [];
    n._withStripped = !0
}
, function(e, c) {
    e.exports = Vue
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, c, t) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
        value: !0
    }),
    c.default = function(e, c, t) {
        if ("number" != typeof e)
            return e;
        switch (c) {
        case "split":
            return function(e) {
                var c = []
                  , t = e
                  , n = "";
                for (; t > 1e3; )
                    c.push(t % 1e3),
                    t = Math.floor(t / 1e3);
                c.push(t);
                for (; c.length > 0; )
                    n += c.pop() + ",";
                return n.substr(0, n.length - 1)
            }(e);
        case "byte":
            return function(e) {
                var c = 0;
                if (e >= 1e3 && e < 1e6)
                    return {
                        value: c = parseFloat(e / 1024),
                        unit: "KB",
                        text: c + "KB"
                    };
                if (e >= 1e6 && e < 1e9)
                    return {
                        value: c = parseFloat(e / 1048576),
                        unit: "MB",
                        text: c + "MB"
                    };
                if (e >= 1e9)
                    return {
                        value: c = parseFloat(e / 1073741824),
                        unit: "GB",
                        text: c + "GB"
                    };
                return {
                    value: e,
                    unit: "B",
                    text: e + "B"
                }
            }(e);
        case "percent":
            return function(e, c) {
                var t = Math.round(100 * e);
                "fill" === c && t < 10 && (t = "0" + t);
                return t + "%"
            }(e, t);
        case "time":
            return function(e) {
                var c = e / 1e3 / 60 / 60
                  , t = Math.floor(c)
                  , n = 60 * (c - t)
                  , a = Math.floor(n)
                  , r = 60 * (n - a)
                  , i = Math.floor(r);
                return {
                    hour: t,
                    minute: a,
                    second: i,
                    millisecond: 1e3 * (r - i)
                }
            }(e);
        default:
            return e >= 1e3 && e < 1e6 ? parseFloat((e / 1e3).toFixed(t || 2)) + "K" : e >= 1e6 || e <= -1e6 ? parseFloat((e / 1e6).toFixed(t || 2)) + "M" : e
        }
    }
}
, function(e, c, t) {
    e.exports = t.p + "images/tag-new.5a1fb8b8.png"
}
, function(e, c, t) {
    var n = {
        "./award-1.png": 566,
        "./award-2.png": 567,
        "./award-3.png": 568,
        "./award-4.png": 569,
        "./award-5.png": 570,
        "./award-6.png": 571
    };
    function a(e) {
        var c = r(e);
        return t(c)
    }
    function r(e) {
        if (!t.o(n, e)) {
            var c = new Error("Cannot find module '" + e + "'");
            throw c.code = "MODULE_NOT_FOUND",
            c
        }
        return n[e]
    }
    a.keys = function() {
        return Object.keys(n)
    }
    ,
    a.resolve = r,
    e.exports = a,
    a.id = 235
}
, function(e, c, t) {
    e.exports = t.p + "images/money-1.4af98227.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/money-2.95c456f0.png"
}
, function(e, c, t) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
        value: !0
    });
    var n = t(581);
    function a(e) {
        for (var c = window.location.search.substring(1).split("&"), t = 0; t < c.length; t++) {
            var n = c[t].split("=");
            if (n[0] === e)
                return n[1]
        }
        return !1
    }
    var r = a("game_biz") ? a("game_biz") : "bh3_os";
    c.default = {
        getIndex: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , c = function(e) {
                return e
            }
              , t = function(e) {
                return e
            };
            return (0,
            n.post)("index?game_biz=" + r, e, c, t)
        },
        getNote: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , c = function(e) {
                return e
            }
              , t = function(e) {
                return e
            };
            return (0,
            n.post)("getNote?game_biz=" + r, e, c, t)
        },
        setGuide: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , c = function(e) {
                return e
            }
              , t = function(e) {
                return e
            };
            return (0,
            n.post)("setGuide?game_biz=" + r, e, c, t)
        },
        attack: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , c = function(e) {
                return e
            }
              , t = function(e) {
                return e
            };
            return (0,
            n.post)("attack?game_biz=" + r, e, c, t)
        },
        dataStat: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , c = function(e) {
                return e
            }
              , t = function(e) {
                return e
            };
            return (0,
            n.post)("dataStat?game_biz=" + r, e, c, t)
        }
    }
}
, , , , , , , , , , , , , , , , , function(e, c, t) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
        value: !0
    });
    var n = t(70);
    c.default = {
        fps: {
            value: 0
        },
        delta: {
            value: 0
        },
        time: {
            value: 0
        },
        resolution: {
            value: new n.Vector3(1,1,1)
        },
        resolutionGame: {
            value: new n.Vector2(1,1)
        }
    }
}
, function(e, c, t) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
        value: !0
    }),
    c.SPINE_MANIFEST = c.CONTENT_MANIFEST = c.USER_GUIDE_MANIFEST = c.LOADING_MANIFEST = void 0;
    var n, a = t(175), r = (n = a) && n.__esModule ? n : {
        default: n
    };
    c.LOADING_MANIFEST = [{
        src: t(636),
        id: "stage-all",
        type: "json"
    }, {
        src: t(637),
        id: "loading",
        type: "blob"
    }, {
        src: t(638),
        id: "loading-bg",
        type: "blob"
    }, {
        src: t(639),
        id: "wenzi",
        type: "blob"
    }],
    c.USER_GUIDE_MANIFEST = [],
    c.CONTENT_MANIFEST = [{
        src: t(640),
        id: "spine1",
        type: "blob"
    }, {
        src: t(641),
        id: "spine2",
        type: "blob"
    }, {
        src: t(642),
        id: "weimu",
        type: "blob"
    }, {
        src: t(643),
        id: "home-bg",
        type: "blob"
    }, {
        src: r.default.prototype.$MI18N.IMAGE["btn-home"],
        id: "btn-home",
        type: "blob"
    }, {
        src: t(644),
        id: "map-bg",
        type: "blob"
    }, {
        src: r.default.prototype.$MI18N.IMAGE["btn-back"],
        id: "btn-back",
        type: "blob"
    }],
    c.SPINE_MANIFEST = {
        wenzi: {
            json: t(645),
            atlas: t(646)
        },
        spine1: {
            json: t(647),
            atlas: t(648)
        },
        spine2: {
            json: t(649),
            atlas: t(650)
        },
        weimu: {
            json: t(651),
            atlas: t(652)
        }
    }
}
, function(e, c, t) {
    "use strict";
    e.exports = function(e) {
        return {
            "@configs": e("src/configs"),
            "@framework": e("src/framework/index.js"),
            "@httpService": e("src/framework/services/httpService.js"),
            "@cacheService": e("src/framework/services/cacheService.js"),
            "@routerService": e("src/framework/services/routerService.js"),
            "@numberFormat": e("src/framework/components/utils/numberFormat.js"),
            "@logger": e("src/framework/components/utils/logger.js"),
            "@libRegister": e("src/framework/libRegister.json")
        }
    }
}
, , , function(e, c, t) {
    t(261),
    e.exports = t(262)
}
, , function(e, c, t) {
    "use strict";
    var n = Object.assign || function(e) {
        for (var c = 1; c < arguments.length; c++) {
            var t = arguments[c];
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
    }
      , a = p(t(175))
      , r = p(t(61))
      , i = t(96)
      , l = p(t(665))
      , u = p(t(666))
      , g = t(153);
    t(667);
    var m = p(t(671))
      , v = p(t(672))
      , o = p(t(673))
      , s = p(t(684))
      , f = p(t(685));
    function p(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function d(e) {
        for (var c = window.location.search.substring(1).split("&"), t = 0; t < c.length; t++) {
            var n = c[t].split("=");
            if (n[0] === e)
                return n[1]
        }
        return !1
    }
    t(1021);
    var h = d("game_biz") ? d("game_biz") : "bh3_cn";
    (0,
    f.default)(a.default, "m202004291114241", h, g.environment, "", "global"),
    (0,
    s.default)(a.default),
    (0,
    o.default)(a.default),
    (0,
    v.default)(a.default),
    (0,
    r.default)(a.default).then((function(e) {
        a.default.use(l.default, {
            siteId: "1278835889",
            router: e.router
        }),
        a.default.use(u.default, {
            appId: "29",
            router: e.router,
            type: "event"
        });
        var c = new a.default(n({
            el: "#content",
            template: "<app />",
            components: {
                app: m.default
            }
        }, e));
        i.memoryCache.set("vueItem", c)
    }
    ))
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, c, t) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
        value: !0
    }),
    c.dealConfigsBeforeRequest = function(e) {
        return e
    }
    ,
    c.requestComplete = function(e) {
        "request" === e || !e || e.status;
        return !1
    }
}
, function(e, c, t) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
        value: !0
    });
    var n = t(153);
    c.default = {
        baseURL: n.apiBase,
        withCredentials: !0
    }
}
, function(e, c, t) {
    var n = {
        ".": 61,
        "./": 61,
        "./components/utils/logger": 143,
        "./components/utils/logger.js": 143,
        "./components/utils/loggerConfigs": 144,
        "./components/utils/loggerConfigs.js": 144,
        "./components/utils/numberFormat": 233,
        "./components/utils/numberFormat.js": 233,
        "./index": 61,
        "./index.js": 61,
        "./lib/router": 94,
        "./lib/router/": 94,
        "./lib/router/index": 94,
        "./lib/router/index.js": 94,
        "./libRegister": 142,
        "./libRegister.json": 142,
        "./services/cacheService": 96,
        "./services/cacheService.js": 96,
        "./services/httpService": 145,
        "./services/httpService.js": 145,
        "./webpackConfigs/utilWebpackAlias": 257,
        "./webpackConfigs/utilWebpackAlias.js": 257
    };
    function a(e) {
        var c = r(e);
        return t(c)
    }
    function r(e) {
        if (!t.o(n, e)) {
            var c = new Error("Cannot find module '" + e + "'");
            throw c.code = "MODULE_NOT_FOUND",
            c
        }
        return n[e]
    }
    a.keys = function() {
        return Object.keys(n)
    }
    ,
    a.resolve = r,
    e.exports = a,
    a.id = 562
}
, , function(e, c, t) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
        value: !0
    });
    var n = r(t(565))
      , a = r(t(662));
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = [{
        path: "/",
        name: "home",
        component: n.default,
        children: [{
            path: "about",
            name: "about",
            component: a.default
        }]
    }];
    c.default = i
}
, function(e, c, t) {
    "use strict";
    t.r(c);
    var n = t(172)
      , a = t(100);
    for (var r in a)
        "default" !== r && function(e) {
            t.d(c, e, (function() {
                return a[e]
            }
            ))
        }(r);
    var i = t(20)
      , l = Object(i.a)(a.default, n.a, n.b, !1, null, null, null);
    l.options.__file = "src/main/home/home.vue",
    c.default = l.exports
}
, function(e, c, t) {
    e.exports = t.p + "images/award-1.9a4a9e74.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/award-2.7a6194c1.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/award-3.3b457513.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/award-4.001ac844.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/award-5.9a4a9e74.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/award-6.be431e3e.png"
}
, function(e, c, t) {
    var n = {
        "./layer-1.png": 573,
        "./layer-2.png": 574,
        "./layer-3.png": 575,
        "./layer-4.png": 576,
        "./layer-5.png": 577,
        "./layer-6.png": 578,
        "./layer-7.png": 579
    };
    function a(e) {
        var c = r(e);
        return t(c)
    }
    function r(e) {
        if (!t.o(n, e)) {
            var c = new Error("Cannot find module '" + e + "'");
            throw c.code = "MODULE_NOT_FOUND",
            c
        }
        return n[e]
    }
    a.keys = function() {
        return Object.keys(n)
    }
    ,
    a.resolve = r,
    e.exports = a,
    a.id = 572
}
, function(e, c, t) {
    e.exports = t.p + "images/layer-1.3a208037.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/layer-2.d2828b7c.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/layer-3.3aca2013.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/layer-4.54f99f44.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/layer-5.6d0591ba.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/layer-6.b06ef738.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/layer-7.2840d774.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/award-bg.6181de82.png"
}
, , , , , , , , , , function(e, c, t) {
    "use strict";
    t.r(c);
    var n = t(174)
      , a = t(102);
    for (var r in a)
        "default" !== r && function(e) {
            t.d(c, e, (function() {
                return a[e]
            }
            ))
        }(r);
    t(659);
    var i = t(20)
      , l = Object(i.a)(a.default, n.a, n.b, !1, null, "47719356", null);
    l.options.__file = "src/components/animate/canvas.vue",
    c.default = l.exports
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, c, t) {
    e.exports = t.p + "src/resources/scene/stage_zh-cn.731f9bb1.json"
}
, function(e, c, t) {
    e.exports = t.p + "images/loading.fa255473.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/loading-bg.0a780857.jpg"
}
, function(e, c, t) {
    e.exports = t.p + "images/loading.60b6d335.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/delisha.162a4a53.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/lita.3a59962a.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/wiemu.7cec2886.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/home-bg.eab67fe2.jpg"
}
, function(e, c, t) {
    e.exports = t.p + "images/map-bg.0be4f219.jpg"
}
, function(e) {
    e.exports = JSON.parse('{"skeleton":{"hash":"8qt8Ntl4gSB1DxbvHJDsQYGbq24","spine":"3.8.94","x":-64.02,"y":-53.87,"width":112,"height":146},"bones":[{"name":"root","x":-136.02,"y":143.13},{"name":"bone","parent":"root","x":136.11,"y":-206.65},{"name":"棍子","parent":"bone","length":108.7,"rotation":90,"x":0.06,"y":14.97},{"name":"翅膀2","parent":"棍子","length":33.38,"rotation":-77.07,"x":102.02,"y":-4.29},{"name":"翅膀1","parent":"棍子","length":36.69,"rotation":74.52,"x":102.02,"y":3.34}],"slots":[{"name":"棍子","bone":"棍子","attachment":"棍子"},{"name":"翅膀2","bone":"翅膀2","attachment":"翅膀2"},{"name":"翅膀1","bone":"翅膀1","attachment":"翅膀1"},{"name":"蚊子","bone":"棍子","attachment":"蚊子"}],"skins":[{"name":"default","attachments":{"棍子":{"棍子":{"x":58.19,"y":-0.83,"rotation":-90,"width":10,"height":127}},"翅膀1":{"翅膀1":{"x":32.85,"y":0.63,"rotation":-164.52,"width":58,"height":55}},"翅膀2":{"翅膀2":{"x":30.31,"y":4.49,"rotation":-12.93,"width":30,"height":55}},"蚊子":{"蚊子":{"x":108.69,"y":-3.83,"rotation":-90,"width":44,"height":64}}}}],"animations":{"animation":{"bones":{"棍子":{"rotate":[{"angle":2,"curve":0.25,"c3":0.75},{"time":0.2,"angle":-2.04,"curve":0.25,"c3":0.75},{"time":0.4667,"angle":1.26,"curve":0.25,"c3":0.75},{"time":0.7,"angle":-2.67,"curve":0.25,"c3":0.75},{"time":0.7667,"angle":0.25,"curve":0.25,"c3":0.75},{"time":0.9,"angle":-1.83,"curve":0.25,"c3":0.75},{"time":1.2333,"angle":2.61,"curve":0.25,"c3":0.75},{"time":1.4333,"angle":-3.16,"curve":0.25,"c3":0.75},{"time":1.7333,"angle":2.97,"curve":0.25,"c3":0.75},{"time":2,"angle":2}],"translate":[{"curve":0.25,"c3":0.75},{"time":0.2667,"y":-6.45,"curve":0.25,"c3":0.75},{"time":0.3667,"y":6.45,"curve":0.25,"c3":0.75},{"time":0.4667,"y":-3.23,"curve":0.25,"c3":0.75},{"time":0.5667,"y":-5.99,"curve":0.25,"c3":0.75},{"time":0.6333,"y":-1.38,"curve":0.25,"c3":0.75},{"time":0.7333,"y":-0.46,"curve":0.25,"c3":0.75},{"time":0.8333,"y":-2.77,"curve":0.25,"c3":0.75},{"time":0.9667,"y":6.45,"curve":0.25,"c3":0.75},{"time":1.1,"curve":0.25,"c3":0.75},{"time":1.2333,"y":5.99,"curve":0.25,"c3":0.75},{"time":1.3,"y":3.23,"curve":0.25,"c3":0.75},{"time":1.4667,"y":8.3,"curve":0.25,"c3":0.75},{"time":1.5667,"y":5.99,"curve":0.25,"c3":0.75},{"time":2}]},"bone":{"translate":[{"x":-2.77,"curve":0.253,"c3":0.621,"c4":0.48},{"time":0.5,"x":5.99,"curve":0.37,"c2":0.47,"c3":0.753},{"time":1,"x":-2.77,"curve":0.253,"c3":0.621,"c4":0.48},{"time":1.5,"x":5.99,"curve":0.37,"c2":0.47,"c3":0.753},{"time":2}]},"翅膀1":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.2333,"angle":-12.79,"curve":0.25,"c3":0.75},{"time":0.3667,"angle":12.46,"curve":0.25,"c3":0.75},{"time":0.4667,"angle":-10.81,"curve":0.25,"c3":0.75},{"time":0.5667,"angle":8.15,"curve":0.25,"c3":0.75},{"time":0.7333,"angle":-12.37,"curve":0.25,"c3":0.75},{"time":0.8667,"angle":4.87,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":-9.9,"curve":0.25,"c3":0.75},{"time":1.0667,"angle":0.15,"curve":0.25,"c3":0.75},{"time":1.2,"angle":-9.64,"curve":0.25,"c3":0.75},{"time":1.3333,"angle":2.46,"curve":0.25,"c3":0.75},{"time":1.5333,"angle":-9.94,"curve":0.25,"c3":0.75},{"time":1.6667,"angle":1.13,"curve":0.25,"c3":0.75},{"time":1.8,"angle":-10.51,"curve":0.25,"c3":0.75},{"time":2,"angle":-3.33}]},"翅膀2":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.2667,"angle":10.88,"curve":0.25,"c3":0.75},{"time":0.4,"angle":-7.2,"curve":0.25,"c3":0.75},{"time":0.5,"angle":13.46,"curve":0.25,"c3":0.75},{"time":0.6,"angle":-2.74,"curve":0.25,"c3":0.75},{"time":0.7667,"angle":19.87,"curve":0.25,"c3":0.75},{"time":0.9,"angle":1.88,"curve":0.25,"c3":0.75},{"time":1,"angle":25,"curve":0.25,"c3":0.75},{"time":1.1,"angle":7.2,"curve":0.25,"c3":0.75},{"time":1.2333,"angle":25.38,"curve":0.25,"c3":0.75},{"time":1.3667,"angle":2.35,"curve":0.25,"c3":0.75},{"time":1.5667,"angle":25.22,"curve":0.25,"c3":0.75},{"time":1.7,"angle":12.31,"curve":0.25,"c3":0.75},{"time":2}]}}}}}')
}
, function(e, c) {
    e.exports = "\nloading.png\nsize: 130,76\nformat: RGBA8888\nfilter: Linear,Linear\nrepeat: none\n棍子\n  rotate: true\n  xy: 2, 66\n  size: 8, 125\n  orig: 10, 127\n  offset: 1, 1\n  index: -1\n翅膀1\n  rotate: true\n  xy: 45, 8\n  size: 56, 53\n  orig: 58, 55\n  offset: 1, 1\n  index: -1\n翅膀2\n  rotate: false\n  xy: 100, 11\n  size: 28, 53\n  orig: 30, 55\n  offset: 1, 1\n  index: -1\n蚊子\n  rotate: false\n  xy: 2, 2\n  size: 41, 62\n  orig: 44, 64\n  offset: 2, 1\n  index: -1\n"
}
, function(e) {
    e.exports = JSON.parse('{"skeleton":{"hash":"GAeYoFfPHqfslowPUl9PGsYaVzE","spine":"3.8.95","x":189.29,"y":-994.71,"width":718,"height":699.71},"bones":[{"name":"root"},{"name":"body","parent":"root","x":548.31,"y":-1039.64},{"name":"躯干","parent":"body","length":58.15,"rotation":91.49,"x":11.73,"y":274.24},{"name":"躯干2","parent":"躯干","length":55.92,"rotation":0.83,"x":58.15},{"name":"脸","parent":"躯干2","length":31.72,"rotation":-0.96,"x":74.56,"y":-6.05},{"name":"zhui","parent":"脸","rotation":-91.36},{"name":"眼框","parent":"脸","rotation":-91.36,"x":39.46,"y":-0.17},{"name":"眼珠","parent":"脸","rotation":-91.36,"x":45.61,"y":-0.31},{"name":"帽子","parent":"脸","x":253.51,"y":12.17},{"name":"头顶生气","parent":"脸","x":205.25,"y":-135.32},{"name":"腿左","parent":"躯干","length":88.03,"rotation":178.73,"x":-30.47,"y":48.37},{"name":"腿左2","parent":"腿左","length":83.75,"rotation":-2.75,"x":88.37,"y":-0.34},{"name":"腿右","parent":"躯干","length":89.56,"rotation":-177.83,"x":-30.34,"y":-37.34},{"name":"腿右2","parent":"腿右","length":84.7,"rotation":-5.25,"x":89.56},{"name":"躯干3","parent":"躯干","length":35.54,"rotation":149.33,"x":-2.52,"y":43.94},{"name":"躯干4","parent":"躯干3","length":47.58,"rotation":1.96,"x":35.54},{"name":"躯干5","parent":"躯干","length":39.62,"rotation":169.15,"x":-4.95,"y":12.56},{"name":"躯干6","parent":"躯干5","length":38.7,"rotation":0.98,"x":39.62},{"name":"躯干7","parent":"躯干","length":34.11,"rotation":-167.12,"x":-7.83,"y":-20.82},{"name":"躯干8","parent":"躯干7","length":39.91,"rotation":-2.71,"x":34.11},{"name":"躯干9","parent":"躯干","length":36.27,"rotation":-144.62,"x":-3.43,"y":-37.47},{"name":"躯干10","parent":"躯干9","length":45.49,"rotation":-7.13,"x":36.27},{"name":"拿扇子","parent":"躯干2","length":50.34,"rotation":148.45,"x":0.79,"y":42.76},{"name":"右前臂","parent":"拿扇子","length":59.5,"rotation":127.8,"x":50.8,"y":1.65},{"name":"手掌1","parent":"右前臂","x":74.69,"y":3.42},{"name":"手放后","parent":"躯干2","length":52.89,"rotation":-152.63,"x":-15.49,"y":-40.47},{"name":"肩膀披风1","parent":"躯干2","length":67.39,"rotation":129.48,"x":24.51,"y":50.44},{"name":"肩膀披风2","parent":"肩膀披风1","length":82.52,"rotation":9.85,"x":67.39},{"name":"肩膀披风3","parent":"肩膀披风2","length":76.47,"rotation":11.3,"x":82.52},{"name":"肩膀披风4","parent":"躯干2","length":57.58,"rotation":-142.09,"x":27.45,"y":-43.94},{"name":"肩膀披风5","parent":"肩膀披风4","length":84.03,"rotation":-13.23,"x":57.58},{"name":"肩膀披风6","parent":"肩膀披风5","length":86.23,"rotation":-14.06,"x":84.03},{"name":"刘海","parent":"脸","x":234.68,"y":12.16},{"name":"刘海2","parent":"刘海","length":66.23,"rotation":135.25,"x":-2.56,"y":70.44},{"name":"刘海3","parent":"刘海2","length":60.09,"rotation":17.27,"x":66.23},{"name":"刘海4","parent":"刘海3","length":75.66,"rotation":24.91,"x":60.09},{"name":"刘海5","parent":"刘海","length":71.96,"rotation":-129.5,"x":-2.33,"y":-53.39},{"name":"刘海6","parent":"刘海5","length":66.73,"rotation":-26.52,"x":71.96},{"name":"刘海7","parent":"刘海6","length":63.6,"rotation":-14.32,"x":66.25,"y":0.23},{"name":"刘海8","parent":"刘海7","length":56.98,"rotation":-42.36,"x":63.6},{"name":"刘海9","parent":"刘海","length":47.13,"rotation":-178.79,"x":-24.39,"y":-2.07},{"name":"刘海10","parent":"刘海9","length":49.38,"rotation":2.34,"x":47.13},{"name":"刘海11","parent":"刘海10","length":51.92,"rotation":3.87,"x":49.38},{"name":"辫子","parent":"刘海","length":61.42,"rotation":167.71,"x":-179.18,"y":-124.85},{"name":"辫子2","parent":"辫子","length":46.46,"rotation":-19.15,"x":61.42},{"name":"辫子3","parent":"辫子2","length":38.74,"rotation":-4.92,"x":46.46},{"name":"辫子4","parent":"辫子3","length":38.51,"rotation":-2.19,"x":38.74},{"name":"后发","parent":"刘海","length":76.01,"rotation":-172.56,"x":-137.58,"y":133.45},{"name":"后发2","parent":"后发","length":61.57,"rotation":31.31,"x":76.01},{"name":"后发3","parent":"后发2","length":61.34,"rotation":25.97,"x":61.57},{"name":"扇子","parent":"手掌1","length":77.35,"rotation":88.05,"x":7.6,"y":15.89},{"name":"ik1","parent":"躯干","rotation":-91.49,"x":26.51,"y":-5.17},{"name":"jiao_ik1","parent":"body","x":-36.24,"y":70.82},{"name":"jiaoIk2","parent":"body","x":53.76,"y":70.82},{"name":"大桌子B","parent":"root","x":-96.19,"y":-1024.09}],"slots":[{"name":"披风_张手","bone":"body"},{"name":"披风","bone":"躯干2","attachment":"披风"},{"name":"左手","bone":"body"},{"name":"手放后","bone":"手放后","attachment":"手放后"},{"name":"腿左","bone":"腿左","attachment":"腿左"},{"name":"腿右","bone":"腿右","attachment":"腿右"},{"name":"后发","bone":"后发","attachment":"后发"},{"name":"躯干","bone":"躯干","attachment":"躯干"},{"name":"手掌1","bone":"手掌1","attachment":"手掌1"},{"name":"拿扇子","bone":"拿扇子","attachment":"拿扇子"},{"name":"右前臂","bone":"右前臂","attachment":"右前臂"},{"name":"右手直","bone":"body"},{"name":"肩膀披风2","bone":"肩膀披风4","attachment":"肩膀披风2"},{"name":"肩膀披风1","bone":"肩膀披风1","attachment":"肩膀披风1"},{"name":"辫子","bone":"辫子","attachment":"辫子"},{"name":"超开心_手_张开1","bone":"body"},{"name":"超开心_手_张开2","bone":"body"},{"name":"脸","bone":"脸","attachment":"脸"},{"name":"眼框","bone":"眼框","attachment":"眼框"},{"name":"眼珠","bone":"眼珠","attachment":"眼珠"},{"name":"闭眼","bone":"脸","color":"ffffff00","attachment":"闭眼"},{"name":"嘴","bone":"zhui","attachment":"嘴_开心闭"},{"name":"表情","bone":"脸","attachment":"表情_默认"},{"name":"头顶生气","bone":"头顶生气"},{"name":"扇子","bone":"扇子","attachment":"扇子"},{"name":"刘海","bone":"刘海","attachment":"刘海"},{"name":"刘海中","bone":"脸","attachment":"刘海中"},{"name":"帽子","bone":"帽子","attachment":"帽子"},{"name":"大桌子B","bone":"大桌子B","attachment":"大桌子B"}],"ik":[{"name":"ik1","bones":["拿扇子","右前臂"],"target":"ik1"},{"name":"jiaoIk2","order":2,"bones":["腿右","腿右2"],"target":"jiaoIk2","bendPositive":false},{"name":"jiao_ik1","order":1,"bones":["腿左","腿左2"],"target":"jiao_ik1","bendPositive":false}],"skins":[{"name":"default","attachments":{"刘海":{"刘海":{"type":"mesh","uvs":[0.36218,0.00476,0.19801,0.12657,0.10281,0.30493,0.0628,0.54638,0.03521,0.67689,0,0.74214,0,0.78565,0.0559,0.80305,0.10833,0.78565,0.18973,0.91616,0.30976,0.95966,0.36218,0.93573,0.33321,0.83785,0.32907,0.68994,0.41599,0.53985,0.47945,0.36801,0.51532,0.32886,0.56499,0.38759,0.62155,0.54638,0.68225,0.68776,0.7264,0.71821,0.7195,0.83785,0.66432,1,0.78159,1,0.90713,0.94443,0.95542,0.78782,1,0.81827,1,0.74649,0.94576,0.42892,0.80366,0.13962,0.61327,0,0.17179,0.63556,0.23111,0.40281,0.34286,0.22662,0.47945,0.15267,0.52497,0.14397,0.60913,0.19617,0.74434,0.30928,0.82297,0.45067,0.90713,0.64426],"triangles":[33,1,0,33,0,34,32,1,33,2,1,32,32,33,14,3,2,32,31,3,32,13,31,32,4,3,31,14,13,32,5,7,6,8,4,31,4,7,5,4,8,7,9,31,13,9,13,12,8,31,9,10,9,12,10,12,11,21,20,39,24,21,39,23,21,24,22,21,23,39,38,28,20,19,38,39,20,38,39,28,27,25,39,27,25,27,26,24,39,25,19,18,38,35,0,30,36,35,30,36,30,29,37,36,29,17,16,36,17,36,37,38,37,29,28,38,29,18,17,37,18,37,38,34,0,35,16,34,35,16,35,36,15,33,34,16,15,34,14,33,15],"vertices":[4,32,39.31,59.43,0.17276,36,-113.54,-39.62,0.25079,34,-105.48,10.11,0.02909,33,-37.49,-21.65,0.54736,4,32,7.63,131.13,0.09022,35,-111.05,8.7,0.00159,34,-44.29,-38.88,0.32579,33,35.48,-50.28,0.58239,3,35,-61.32,-31.39,0.26399,34,17.7,-54.3,0.39673,33,99.25,-46.6,0.33928,3,35,5.18,-47.28,0.59667,34,84.71,-40.7,0.3683,33,159.2,-13.72,0.03504,2,35,41.18,-58.45,0.92841,34,122.06,-35.66,0.07159,2,35,59.38,-73.28,0.99934,34,144.81,-41.45,0.00066,1,35,71.3,-73.03,1,1,35,75.56,-48.78,1,4,32,-171.98,174.15,0.00001,35,70.31,-26.24,0.99982,34,134.92,5.82,0.00016,33,193.34,45.61,0.00001,1,35,105.33,9.67,1,2,35,116.16,61.76,0.99986,34,139.43,104.94,0.00014,4,32,-215.7,65.5,0.00055,35,109.13,84.26,0.98903,34,123.57,122.39,0.00928,33,147.91,153.55,0.00114,4,32,-188.59,77.37,0.00842,35,82.58,71.19,0.88246,34,105,99.35,0.08684,33,137.01,126.04,0.02229,4,32,-148.03,78.2,0.06067,35,42.1,68.55,0.60011,34,69.4,79.9,0.20341,33,108.78,96.9,0.13582,6,32,-107.81,39.68,0.22253,36,-4.72,-140.59,0.02258,37,-5.84,-160.04,0.00099,35,0.19,105.23,0.28154,34,15.94,95.52,0.22538,33,53.11,95.94,0.24698,7,32,-61.4,11.15,0.3974,36,-12.23,-86.63,0.11186,37,-36.65,-115.11,0.00796,38,-71.19,-137.2,0.00008,35,-47.46,131.65,0.05528,34,-38.4,99.41,0.15709,33,0.06,83.53,0.27034,7,32,-51.04,-4.6,0.42809,36,-6.67,-68.62,0.30896,37,-39.72,-96.51,0.05293,38,-78.75,-119.94,0.00362,35,-58.51,146.92,0.00443,34,-54.86,108.6,0.04135,33,-18.39,87.42,0.16062,8,32,-67.64,-25.66,0.27656,36,20.14,-68.03,0.40465,37,-15.99,-84.01,0.20283,38,-58.86,-101.96,0.05307,39,-21.79,-157.84,0.00384,35,-42.87,168.7,0.0005,34,-49.85,134.95,0.01023,33,-21.43,114.07,0.04832,7,32,-111.72,-49.06,0.09445,36,66.23,-87.16,0.34732,37,33.79,-80.55,0.30894,38,-11.48,-86.3,0.19502,39,2.67,-114.35,0.0495,34,-21.54,176.04,0.00096,33,-6.59,161.71,0.00382,5,32,-151.07,-74.35,0.01155,36,110.78,-101.44,0.16126,37,80.03,-73.44,0.31687,38,31.57,-67.97,0.33899,39,22.12,-71.81,0.17133,5,32,-159.86,-93.22,0.00066,36,130.93,-96.23,0.0434,37,95.74,-59.77,0.16968,38,43.4,-50.84,0.31621,39,19.34,-51.18,0.47005,5,32,-192.56,-89.46,0.00004,36,148.83,-123.85,0.01145,37,124.08,-76.5,0.05661,38,75.01,-60.04,0.17418,39,48.89,-36.68,0.75773,4,36,157.51,-173.52,0.00041,37,154.03,-117.06,0.00371,38,114.06,-91.94,0.02666,39,99.23,-33.94,0.96922,3,37,175.72,-71.28,0,38,123.75,-42.22,0.00273,39,72.89,9.33,0.99727,2,38,119.18,13.93,0.21899,39,31.69,47.75,0.78101,3,37,155.32,21.48,0.00402,38,81.05,42.62,0.59957,39,-15.81,43.25,0.39641,2,38,92.93,59.92,0.74166,39,-18.7,64.04,0.25834,3,37,153.33,43.73,0.19084,38,73.62,63.68,0.66789,39,-35.5,53.81,0.14127,4,36,156.53,24.64,0.26686,37,64.66,59.8,0.25731,38,-16.27,57.33,0.4107,39,-97.65,-11.44,0.06513,4,32,-2.17,-130.36,0.08254,36,59.29,49.08,0.51766,37,-33.25,38.26,0.25731,38,-105.82,12.25,0.1425,4,32,38.03,-49.04,0.17276,36,-29.02,28.38,0.51766,37,-103.03,-19.7,0.06647,33,-112.94,56.29,0.24312,4,32,-131.52,145.77,0.00101,35,28.62,0.31,0.6687,34,85.92,12.33,0.31607,33,144.62,37.28,0.01422,4,32,-68.38,118.63,0.02339,35,-35.67,24.59,0.33544,34,17.38,7.28,0.32085,33,80.67,12.11,0.32032,4,32,-21.26,69.22,0.3223,35,-84.95,71.84,0.00235,34,-47.22,29.38,0.32128,33,12.43,14.04,0.35407,6,32,-2.41,9.75,0.60478,36,-48.67,-40.22,0.04977,37,-89.98,-89.85,0.00006,35,-106.45,130.41,0.00008,34,-91.38,73.44,0.00545,33,-42.83,43,0.33986,5,32,-0.49,-9.97,0.62718,36,-34.67,-26.2,0.33674,37,-83.71,-71.06,0.00161,34,-102.18,90.05,0.0007,33,-58.07,55.66,0.03376,4,32,-15.66,-45.98,0.3284,36,2.76,-15,0.61117,37,-55.22,-44.32,0.06037,34,-105.34,128.99,0.00006,5,32,-48.03,-103.63,0.04492,36,67.84,-3.31,0.56141,37,-2.21,-4.8,0.38946,38,-65.09,-21.8,0.00419,34,-103.22,195.08,0.00003,5,32,-87.57,-136.67,0.00014,36,118.48,-12.81,0.27443,37,47.34,9.31,0.39328,38,-20.57,4.13,0.32743,39,-64.98,-53.66,0.00473,3,37,110.84,19.46,0.33451,38,38.45,29.67,0.54369,39,-38.57,4.98,0.1218],"hull":31}},"刘海中":{"刘海中":{"type":"mesh","uvs":[0.45077,0,0.24469,0,0.05531,0.12612,0,0.34401,0.01632,0.5555,0.16671,0.78621,0.40066,0.9304,0.62903,1,0.8017,0.85029,1,0.72853,1,0.46578,0.91867,0.2607,0.80727,0.06844,0.62346,0,0.45634,0.14214,0.48977,0.32158,0.50091,0.52345,0.5399,0.70289,0.57889,0.89195],"triangles":[14,0,13,1,0,14,6,18,7,7,18,8,18,6,17,6,5,17,18,17,8,8,17,9,17,4,16,17,5,4,17,10,9,17,16,10,16,3,15,14,15,2,2,15,3,4,3,16,16,15,10,15,11,10,2,1,14,11,14,12,12,14,13,14,11,15],"vertices":[1,32,-4.89,-3.31,1,3,40,-20.46,-20.37,0.28717,41,-68.36,-17.59,0.00083,32,-4.37,18.74,0.712,3,40,2.07,-41.67,0.87612,41,-46.73,-39.79,0.12183,42,-98.58,-33.21,0.00205,3,40,42.29,-49.4,0.57768,41,-6.86,-49.16,0.34555,42,-59.43,-45.25,0.07677,3,40,81.66,-49.42,0.24724,41,32.48,-50.79,0.36764,42,-20.29,-49.54,0.38512,3,40,125.25,-35.27,0.03489,41,76.62,-38.44,0.24871,42,24.58,-40.19,0.7164,2,41,105.48,-15.8,0.02499,42,54.91,-19.55,0.97501,2,41,120.48,7.44,0.01471,42,71.44,2.62,0.98529,3,40,140.21,32.07,0.00189,41,94.32,28.23,0.10846,42,46.74,25.13,0.88965,3,40,118.54,54.28,0.07799,41,73.57,51.31,0.32451,42,27.6,49.56,0.5975,3,40,69.72,56.47,0.33181,41,24.88,55.5,0.38898,42,-20.69,57.03,0.27921,3,40,31.22,49.49,0.66145,41,-13.87,50.1,0.29703,42,-59.72,54.26,0.04151,3,40,-5.04,39.19,0.91869,41,-50.52,41.29,0.08099,42,-96.88,47.95,0.00033,3,40,-18.64,20.11,0.30345,41,-64.89,22.79,0.00055,32,-5.33,-21.78,0.696,2,40,6.97,1.06,0.99041,41,-40.08,2.7,0.00959,2,40,40.47,3.14,0.65735,41,-6.52,3.41,0.34265,3,40,78.04,2.64,0.32401,41,30.99,1.38,0.34431,42,-18.25,2.62,0.33167,3,40,111.57,5.31,0.00028,41,64.6,2.67,0.33474,42,15.37,1.64,0.66499,2,41,99.99,3.82,0.00252,42,50.76,0.39,0.99748],"hull":14}},"右前臂":{"右前臂":{"type":"mesh","uvs":[0.07898,0.35513,0.01015,0.65481,0.09683,0.70873,0.41706,0.88394,0.75655,1,0.83842,0.69794,0.88657,0.37716,0.86972,0,0.69877,0,0.37372,0.0456,0.14017,0.08873,0.33016,0.44023,0.62659,0.48431],"triangles":[2,1,0,0,10,11,11,10,9,4,3,5,2,11,3,3,12,5,3,11,12,11,2,0,5,12,6,12,8,6,8,7,6,11,9,12,12,9,8],"vertices":[2,23,-6.54,8.83,0.47178,22,46.36,-8.4,0.52821,2,23,-19.16,-17.91,0.09008,22,75.83,-6.17,0.90992,2,23,-14.05,-28.87,0.54295,22,82.85,3.69,0.45705,2,23,17.43,-49.13,0.94104,22,84.92,41.06,0.05896,1,23,50.42,-64.9,1,1,23,62.9,-38.67,1,2,23,72.2,-10.23,0.99861,22,24.05,69.48,0.00139,2,23,75.65,24.34,0.98368,22,-7.71,55.42,0.01632,2,23,58.24,26.96,0.75577,22,-1.4,38.98,0.24423,2,23,24.51,27.81,0.42382,22,14.52,9.23,0.57618,2,23,0.13,27.47,0.10589,22,26.85,-11.8,0.89411,2,23,14.66,-7.43,0.66714,22,50.02,18.06,0.33286,1,23,44.25,-15.99,1],"hull":11}},"右手直":{"右手直":{"x":-92.81,"y":271.64,"width":129,"height":208}},"后发":{"后发":{"type":"mesh","uvs":[0.0178,0.11377,0,0.40061,0.00274,0.71933,0.12538,0.95518,0.2889,1,0.59874,0.97112,0.82785,0.73292,0.94515,0.61097,0.98818,0.14883,0.51353,0.05634,0.22435,0,0.22651,0.37193,0.2846,0.66834,0.50622,0.65878,0.71923,0.47392],"triangles":[6,14,7,7,14,8,14,9,8,13,11,9,11,10,9,0,10,11,14,13,9,12,11,13,6,5,13,6,13,14,4,12,13,4,13,5,2,11,12,3,2,12,3,12,4,1,0,11,2,1,11],"vertices":[4,47,-0.23,-30.06,0.2644,48,-80.77,13.94,0.01024,49,-121.86,74.86,0.00536,4,93.45,175.45,0.72,2,47,52.02,-43.15,0.65684,48,-42.93,-24.39,0.34316,3,47,111.03,-51.52,0.32351,48,3.14,-62.22,0.64978,49,-79.77,-30.35,0.02671,3,47,159.82,-24.71,0.02674,48,58.76,-64.66,0.73478,49,-30.84,-56.9,0.23848,3,47,175.03,18.77,0.00076,48,94.35,-35.42,0.42818,49,13.96,-46.2,0.57106,3,47,182.84,104.41,0.02219,48,145.53,33.69,0.12156,49,90.23,-6.48,0.85625,1,4,-27.64,-46.12,1,1,4,-5.62,-79.14,1,1,4,80.49,-93.12,1,4,47,10.18,107.28,0.04958,48,-0.49,125.87,0.00011,49,-0.68,140.34,0.04631,4,100.91,37.91,0.904,4,47,-12.5,29.73,0.31419,48,-60.17,71.41,0.00898,49,-78.18,117.5,0.06083,4,113.35,117.74,0.616,3,47,56.32,19.68,0.59916,48,-6.6,27.04,0.33265,49,-49.44,54.16,0.06819,3,47,113.56,27.09,0.30553,48,46.16,3.63,0.33871,49,-12.27,10.01,0.35576,3,47,121.19,88.03,0.06378,48,84.35,51.73,0.30866,49,43.13,36.53,0.62757,3,47,96.07,151.63,0.09372,48,95.94,119.12,0.00909,49,83.06,92.05,0.8972],"hull":11}},"嘴":{"嘴_= =":{"x":-3.55,"y":-0.98,"width":28,"height":7},"嘴_不满":{"x":1.95,"y":-9.98,"width":17,"height":9},"嘴_呆":{"x":-2.55,"y":-6.48,"width":18,"height":16},"嘴_开心":{"x":-4.55,"y":-1.48,"width":28,"height":22},"嘴_开心闭":{"x":-4.55,"y":-2.98,"width":22,"height":9},"嘴_生气":{"x":-3.05,"y":1.52,"width":75,"height":42},"嘴_疑惑":{"x":0.45,"y":-3.48,"width":18,"height":14}},"大桌子B":{"大桌子B":{"x":644.47,"y":156.88,"width":718,"height":255}},"头顶生气":{"头顶生气":{"x":1.75,"y":5.91,"rotation":-91.36,"width":130,"height":119},"头顶震惊":{"x":56.43,"y":-7.9,"rotation":-91.36,"width":123,"height":117}},"左手":{"左手":{"x":90.19,"y":265.14,"width":119,"height":169}},"帽子":{"帽子":{"x":36.39,"y":0.48,"rotation":-91.36,"width":226,"height":96}},"扇子":{"扇子":{"x":47.41,"y":0.94,"rotation":-96.62,"width":75,"height":108}},"手掌1":{"手掌1":{"x":1.09,"y":2.19,"rotation":-8.57,"width":37,"height":41},"手掌2":{"x":1.24,"y":3.18,"rotation":-8.57,"width":41,"height":45}},"手放后":{"手放后":{"x":54.69,"y":-4.82,"rotation":60.31,"width":63,"height":76}},"披风":{"披风":{"type":"mesh","uvs":[0.66887,0.19564,0.53171,0.19347,0.35114,0.20679,0.19672,0.21819,0.10948,0.35419,0.03155,0.50565,0,0.66637,0.03272,0.87501,0.19323,0.9971,0.38283,1,0.62011,1,0.80505,0.97083,0.9551,0.85492,1,0.72201,1,0.56592,0.95045,0.38356,0.82366,0.1981,0.24674,0.42528,0.18625,0.5891,0.20021,0.79465,0.39678,0.8441,0.61546,0.85801,0.78295,0.79465,0.84344,0.68492,0.84925,0.49174,0.78295,0.34492,0.44796,0.42992,0.42005,0.60765,0.62709,0.65401,0.65035,0.40519],"triangles":[25,0,16,25,16,15,29,1,0,29,0,25,26,1,29,24,25,15,24,29,25,24,28,29,28,26,29,21,28,22,24,15,14,23,24,14,23,28,24,23,14,13,22,28,23,12,23,13,22,23,12,11,22,12,21,22,11,10,21,11,21,20,28,20,21,10,9,20,10,5,4,18,18,17,27,6,5,18,19,18,27,6,18,19,7,6,19,8,7,19,8,19,20,20,19,27,9,8,20,20,27,28,18,4,17,27,26,28,17,3,2,4,3,17,26,2,1,17,2,26,27,17,26],"vertices":[4,26,-42.36,87.7,0.13925,27,-93.12,105.18,0.03808,31,-90.82,-60.69,0.00158,30,-18.82,-36.81,0.8211,3,26,-3.92,52.49,0.43905,27,-61.27,63.92,0.12638,30,-43.04,-82.97,0.43457,4,26,49.77,9.6,0.28965,27,-15.71,12.47,0.57048,28,-93.89,31.47,0.02017,30,-70.8,-145.83,0.1197,4,26,95.69,-27.09,0.24543,27,23.25,-31.53,0.66816,28,-64.3,-19.31,0.0745,30,-94.55,-199.59,0.01192,2,27,74.32,-33.4,0.5936,28,-14.59,-31.14,0.4064,2,27,126.66,-29.75,0.26026,28,37.46,-37.82,0.73974,2,27,170.16,-10.64,0.00112,28,83.85,-27.59,0.99888,1,28,131.34,10.62,1,2,27,198.78,105.64,0.00178,28,134.7,80.82,0.99822,3,27,154.74,162.65,0.00307,28,102.67,145.36,0.88995,31,109.02,-218.17,0.10698,3,27,98.8,233.37,0.00341,28,61.67,225.66,0.30205,31,129.23,-130.29,0.69454,2,28,22.27,284.46,0.00089,31,136.84,-59.93,0.99911,1,31,117.31,3.06,1,2,31,84.08,28.21,0.99993,30,172.45,6.94,0.00007,2,31,40.58,38.21,0.75183,30,132.67,27.21,0.24817,2,31,-14.47,31.54,0.4185,30,77.65,34.11,0.5815,4,26,-85.73,127.43,0.04698,27,-129.06,151.75,0.01003,31,-76.96,-3.53,0.08664,30,8.52,15.28,0.85636,4,26,121,29.73,0.25533,27,57.91,20.12,0.40211,28,-20.2,24.55,0.32773,30,-33.15,-209.55,0.01483,4,26,169.36,49.33,0.00278,27,108.91,31.16,0.35669,28,31.98,25.39,0.63773,30,-1.84,-251.31,0.0028,4,26,204.6,96.69,0.00208,27,151.73,71.79,0.05739,28,81.92,56.85,0.93823,30,52.94,-273.28,0.00229,5,26,158.34,157.03,0.00355,27,116.48,139.15,0.03841,28,60.55,129.81,0.85938,31,66.76,-203.01,0.09281,30,99.47,-213.15,0.00585,5,26,99.05,215.38,0.00573,27,68.04,206.79,0.02985,28,26.3,205.62,0.25429,31,89.25,-122.92,0.69318,30,140.74,-140.92,0.01695,4,26,39.53,244.3,0.00285,27,14.34,245.47,0.00048,31,85.85,-56.83,0.97863,30,153.5,-75.98,0.01804,4,26,1.47,236.23,0.00274,27,-24.53,244.02,0.00066,31,60.42,-27.4,0.87753,30,135.98,-41.25,0.11906,4,26,-37,196.52,0.00722,27,-69.23,211.48,0.00185,31,7.07,-12.87,0.55583,30,87.76,-14.2,0.4351,4,26,-46.21,148.42,0.05391,27,-86.53,165.67,0.01181,31,-39.5,-28.01,0.24364,30,38.91,-17.58,0.69064,5,26,64.88,81.69,0.29102,27,11.51,80.91,0.42762,28,-53.79,93.26,0.04697,31,-44.33,-157.52,0.00477,30,2.76,-142.03,0.22962,5,26,106.67,112.51,0.12156,27,57.95,104.13,0.42582,28,-3.7,106.93,0.31482,31,2.83,-179.24,0.00378,30,43.23,-174.56,0.13402,5,26,56.86,174.84,0.09976,27,19.54,174.06,0.0923,28,-27.67,183.02,0.00659,31,33.38,-105.54,0.43952,30,90.77,-110.49,0.36183,5,26,2.84,127.68,0.15437,27,-41.75,136.84,0.0657,28,-95.07,158.53,0.0003,31,-33.99,-80.98,0.06636,30,31.38,-70.3,0.71327],"hull":17}},"披风_张手":{"披风_张手":{"x":-3.31,"y":261.64,"width":412,"height":286}},"拿扇子":{"拿扇子":{"x":34.38,"y":0.59,"rotation":119.23,"width":69,"height":85}},"眼框":{"眼框":{"x":-3.78,"y":7.57,"width":200,"height":87}},"眼珠":{"眼珠":{"x":-5.28,"y":-3.59,"width":155,"height":57}},"肩膀披风1":{"肩膀披风1":{"type":"mesh","uvs":[0.94526,0.13599,0.82779,0,0.48976,0.00391,0.39626,0.29987,0.4514,0.39526,0.14694,0.65698,0,0.701,0,0.96272,0.28119,1,0.61922,0.91625,0.89971,0.56892,1,0.35612,0.7271,0.26563,0.68635,0.47843,0.53531,0.60806,0.33394,0.76705,0.14455,0.83553],"triangles":[15,5,4,16,6,5,16,5,15,15,14,9,7,6,16,8,16,15,8,15,9,7,16,8,12,2,1,12,1,0,3,2,12,12,0,11,4,3,12,13,4,12,13,12,11,10,13,11,14,4,13,14,15,4,10,9,14,10,14,13],"vertices":[1,26,-35.77,2.89,1,1,26,-35.97,-23.93,1,1,26,2.47,-57.52,1,2,26,42.19,-34.28,0.99823,27,-30.69,-29.47,0.00177,2,26,45.39,-18.21,0.6649,27,-24.78,-14.18,0.3351,2,26,105.48,-19.98,0.33156,27,34.12,-26.21,0.66844,1,27,52.99,-39.56,1,2,26,152.19,-1.04,0.0034,27,83.37,-15.53,0.9966,2,26,124.21,31.37,0.15899,27,61.36,21.19,0.84101,2,26,77.9,56.16,0.49199,27,19.97,53.53,0.50801,2,26,12.07,46.07,0.82192,27,-46.62,54.86,0.17808,2,26,-20.22,32.69,0.99966,27,-80.72,47.2,0.00034,1,26,1.57,-4.76,1,2,26,27.15,14.61,0.97366,27,-37.14,21.28,0.02634,2,26,56.94,13.71,0.64618,27,-7.94,15.3,0.35382,2,26,95.3,10.98,0.31284,27,29.38,6.05,0.68716,2,26,123.37,-0.52,0.00878,27,55.07,-10.09,0.99122],"hull":12}},"肩膀披风2":{"肩膀披风2":{"type":"mesh","uvs":[0,0.21953,0.07765,0.02896,0.27991,0,0.46512,0.12839,0.49193,0.35003,0.64059,0.51367,0.79412,0.69182,1,0.75396,1,0.95489,0.73319,1,0.50655,0.88446,0.24823,0.81196,0.19218,0.62346,0.11907,0.47225,0,0.35417,0.2458,0.27546,0.37496,0.52196,0.57967,0.75189,0.80874,0.84924],"triangles":[17,16,5,17,5,6,11,16,17,18,6,7,17,6,18,10,11,17,10,17,18,18,7,8,9,10,18,9,18,8,15,1,2,15,2,3,0,1,15,15,3,4,14,0,15,13,14,15,16,15,4,16,4,5,13,15,16,12,13,16,11,12,16],"vertices":[1,29,-18.13,-17.84,1,1,29,-32.52,6.45,1,1,29,-20.07,27.45,1,1,29,7.89,32.66,1,2,29,33.63,15.05,0.77247,30,-26.75,9.17,0.22753,2,29,62.55,13.76,0.43914,30,1.69,14.53,0.56086,2,29,93.39,11.59,0.10581,30,32.21,19.48,0.89419,1,30,51.09,37.36,1,1,30,76.15,24.59,1,2,29,121.64,-21.81,0.01462,30,67.36,-6.57,0.98538,2,29,91.88,-31.95,0.12967,30,40.7,-23.25,0.87033,2,29,64.27,-48.86,0.37432,30,17.7,-46.03,0.62568,2,29,39.82,-36.9,0.68493,30,-8.84,-39.99,0.31507,2,29,18.04,-29.87,0.90321,30,-31.66,-38.13,0.09679,2,29,-3.74,-30.01,0.99189,30,-52.82,-43.25,0.00811,2,29,6.75,-0.56,0.95153,30,-49.35,-12.18,0.04847,2,29,43.02,-11.12,0.64046,30,-11.63,-14.16,0.35954,2,29,83.33,-13.32,0.30712,30,28.11,-7.07,0.69288,2,29,111.34,-1.31,0.00916,30,52.64,11.03,0.99084],"hull":15}},"脸":{"脸":{"x":147.79,"y":9.54,"rotation":-91.36,"width":407,"height":344}},"腿右":{"腿右":{"type":"mesh","uvs":[0.06598,0,0.02137,0.26195,0.0158,0.37049,0.01022,0.46933,0.01022,0.54386,0.01022,0.78911,0,0.88408,0,0.95773,0.57333,1,1,0.97517,1,0.85501,0.8744,0.7678,0.83924,0.55051,0.82422,0.4577,0.82422,0.3608,0.84095,0.26583,0.8744,0,0.52873,0.83563,0.53989,0.91509,0.46608,0.54231,0.44864,0.47379,0.46127,0.37414,0.44329,0.26412],"triangles":[22,0,16,1,0,22,15,22,16,14,22,15,21,22,14,21,14,13,21,2,22,20,21,13,2,1,22,20,2,21,20,3,2,20,4,3,4,20,19,5,4,19,11,17,19,11,19,12,5,19,17,17,11,10,6,5,17,18,17,10,6,17,18,7,6,18,18,10,9,8,18,9,7,18,8,19,13,12,19,20,13],"vertices":[1,12,-13.29,-23.54,1,2,13,-45.39,-34.31,0.01433,12,41.4,-30.3,0.98567,2,13,-22.57,-34.23,0.24888,12,64.15,-32.18,0.75112,2,13,-1.74,-34.18,0.65421,12,84.91,-33.9,0.34579,2,13,13.93,-33.76,0.71257,12,100.55,-34.83,0.28743,1,13,65.46,-32.4,1,1,13,85.46,-32.51,1,1,13,100.92,-32.08,1,1,13,108.63,10,1,1,13,102.55,40.99,1,1,13,77.33,40.29,1,1,13,59.32,30.53,1,2,13,13.81,26.77,0.69091,12,105.6,25.5,0.30909,2,13,-5.63,25.17,0.63965,12,86.1,25.56,0.36035,2,13,-25.93,24.73,0.17032,12,65.84,26.85,0.82968,2,13,-45.88,25.53,0.00168,12,46.03,29.36,0.99832,1,12,-9.52,35.35,1,1,13,74.21,5.79,1,1,13,90.87,7.07,1,2,13,12.77,-0.5,0.71025,12,102.24,-1.59,0.28975,2,13,-1.59,-2.12,0.57419,12,87.8,-1.98,0.42581,2,13,-22.53,-1.7,0.21952,12,66.97,0.23,0.78048,2,13,-45.6,-3.5,0.00801,12,43.82,0.41,0.99199],"hull":17}},"腿左":{"腿左":{"type":"mesh","uvs":[0.58646,0,0.14525,0,0.08965,0.21231,0.06161,0.31941,0.03209,0.40311,0.04193,0.49366,0.02706,0.59908,0,0.79091,0,0.90366,0.08129,1,0.50933,1,1,0.98224,1,0.88999,0.91277,0.81824,0.88112,0.59187,0.86357,0.46632,0.87833,0.40482,0.88325,0.32966,0.91877,0.22936,1,0,0.51422,0.85413,0.49454,0.9293,0.49759,0.32789,0.48848,0.41367,0.48485,0.50511,0.49262,0.59739,0.52489,0.22718],"triangles":[26,1,0,2,1,26,18,0,19,26,0,18,22,3,2,26,22,2,17,26,18,22,26,17,16,22,17,23,3,22,23,22,16,4,3,23,15,23,16,24,15,14,5,4,23,24,5,23,25,24,14,6,5,24,6,24,25,13,20,25,13,25,14,20,8,7,7,6,25,25,20,7,21,8,20,20,13,12,12,21,20,11,21,12,9,8,21,10,21,11,9,21,10,24,23,15],"vertices":[1,10,-19.12,6.75,1,2,11,-102.95,-40.71,0.00497,10,-19.28,-26.16,0.99503,2,11,-57.22,-38.44,0.06002,10,26.3,-30.35,0.93998,2,11,-34.16,-37.3,0.22015,10,49.3,-32.46,0.77985,2,11,-16.86,-36.86,0.46945,10,66.49,-34.46,0.53055,2,11,1.56,-34.27,0.68372,10,85.09,-34.49,0.31628,2,11,24.11,-34.25,0.85693,10,107.42,-37.64,0.14307,1,11,65.15,-34.22,1,1,11,89.28,-33.57,1,1,11,109.8,-26.56,1,1,11,108.38,5.51,1,2,11,102.92,42.11,0.99994,10,196.19,26.88,0.00006,2,11,83.01,41.25,0.99687,10,176.35,28.82,0.00313,1,11,66.66,36.08,1,2,11,17.6,29.85,0.85592,10,109.99,26.74,0.14408,2,11,-9.61,26.4,0.50966,10,82.57,27.15,0.49034,2,11,-23.74,25.39,0.168,10,68.43,28.14,0.832,2,11,-39.87,23.53,0.112,10,52.2,28.57,0.888,1,10,30.55,31.32,1,1,10,-18.97,37.6,1,2,11,76.89,4.49,0.99869,10,165.12,-6.71,0.00131,1,11,93.17,3.73,1,2,11,-36.54,-4.93,0.1323,10,51.5,-0.08,0.8677,2,11,-18.31,-3.16,0.40164,10,69.8,-0.89,0.59836,2,11,1.23,-1.3,0.80609,10,89.4,-1.8,0.19391,2,11,21.23,0.23,0.92713,10,109.42,-3.09,0.07287,2,11,-58.31,-5.9,0.00001,10,29.81,2.02,0.99999],"hull":20}},"表情":{"正常脸红":{"x":-0.84,"y":6.07,"rotation":-91.36,"width":111,"height":9},"表情_= =":{"x":54.62,"y":3.75,"rotation":-91.36,"width":167,"height":50},"表情_不满":{"x":51.65,"y":4.82,"rotation":-91.36,"width":175,"height":80},"表情_呆":{"x":56.86,"y":13.7,"rotation":-91.36,"width":179,"height":92},"表情_开心":{"x":48.6,"y":2.9,"rotation":-91.36,"width":181,"height":108},"表情_生气":{"x":36.64,"y":4.68,"rotation":-91.36,"width":166,"height":110},"表情_疑惑":{"x":48.65,"y":4.89,"rotation":-91.36,"width":175,"height":74},"表情_默认":{"x":48.67,"y":7.27,"rotation":-91.36,"width":139,"height":106}},"超开心_手_张开1":{"超开心_手_张开1":{"x":-100.81,"y":373.14,"width":231,"height":183}},"超开心_手_张开2":{"超开心_手_张开2":{"x":120.69,"y":380.64,"width":216,"height":196}},"躯干":{"躯干":{"type":"mesh","uvs":[0.43404,0.00362,0.30918,0.0598,0.23697,0.14998,0.31369,0.3407,0.30768,0.50481,0.23396,0.60534,0.16777,0.71918,0.11211,0.86259,0.27007,0.94095,0.39944,0.93208,0.57395,0.93504,0.72138,0.95278,0.85226,0.90251,1,0.86407,1,0.79311,0.89679,0.62555,0.8297,0.51664,0.82067,0.36879,0.80864,0.18546,0.75147,0.06571,0.61307,0,0.30767,0.78719,0.35431,0.64822,0.40546,0.51368,0.40847,0.79902,0.43404,0.65413,0.4536,0.51072,0.56793,0.79606,0.56643,0.65266,0.56041,0.50629,0.71235,0.79163,0.68076,0.63196,0.65519,0.49446,0.82669,0.76649,0.77554,0.60978,0.74695,0.49003,0.57545,0.31113,0.41174,0.32963,0.71085,0.32444,0.56041,0.13224,0.39493,0.15442,0.69129,0.14703],"triangles":[39,0,20,41,39,20,19,41,20,40,1,0,40,0,39,2,1,40,41,19,18,36,39,41,40,39,36,38,41,18,3,2,40,3,40,37,38,18,17,36,41,38,37,40,36,32,36,38,29,37,36,29,36,32,31,28,29,33,15,14,12,33,14,13,12,14,35,38,17,32,38,35,35,17,16,34,35,16,34,16,15,31,35,34,33,34,15,30,31,34,30,34,33,30,27,28,30,28,31,30,33,12,10,27,30,11,30,12,10,30,11,31,32,35,31,29,32,25,28,27,27,24,25,9,21,24,24,27,10,9,24,10,26,37,29,26,29,28,25,26,28,23,3,37,23,37,26,4,3,23,22,4,23,5,4,22,25,23,26,22,23,25,21,5,22,25,24,22,6,5,21,24,21,22,7,6,21,8,7,21,8,21,9],"vertices":[4,14,-112.35,-51.54,0.03925,20,-140.58,15.91,0.00034,2,120.4,30.96,0.01375,3,62.69,30.05,0.94666,3,14,-87.09,-70.04,0.08625,2,108.11,59.76,0.04345,3,50.82,59.03,0.8703,4,14,-60.8,-74.21,0.22059,16,-78.83,-80.48,0,2,87.63,76.76,0.13453,3,30.58,76.33,0.64488,4,14,-30.69,-37.36,0.46061,16,-38.02,-56.02,0.0031,2,42.94,60.42,0.20355,3,-14.34,60.64,0.33274,5,15,-32.99,-18.88,0.13203,14,3.22,-20,0.66325,16,-0.23,-51.18,0,2,4.91,62.78,0.10286,3,-52.32,63.55,0.10186,4,15,-4.56,-23.16,0.46485,14,31.77,-23.3,0.52006,2,-17.97,80.19,0.01123,3,-74.95,81.29,0.00386,2,15,25.82,-24.5,0.79818,14,62.19,-23.6,0.20182,3,15,61.22,-20.57,0.94173,14,97.43,-18.46,0.00051,17,47.9,-82.5,0.05776,3,15,60.91,19.77,0.73949,16,101,-43.17,0.00007,17,60.63,-44.22,0.26044,5,15,45.59,45.06,0.34866,14,79.56,46.6,0.00215,16,94.17,-14.4,0.00078,17,54.3,-15.34,0.55977,19,39.94,-81.19,0.08864,6,15,28,80.76,0.06922,16,88.37,24.97,0.00646,17,49.18,24.13,0.53685,18,80.7,-44.61,0.00582,19,48.65,-42.36,0.3815,21,25.99,-85.66,0.00015,5,16,86.96,58.8,0.0007,17,48.35,57.98,0.19363,18,93.02,-13.07,0.0001,19,59.46,-10.27,0.69241,21,46.24,-58.52,0.11316,3,17,32.46,85.8,0.0235,19,54.07,21.31,0.46497,21,50.92,-26.83,0.51153,2,19,52.14,56.1,0.18265,21,59.89,6.84,0.81735,2,20,83.37,9.24,0.13333,21,45.59,15.01,0.86667,4,20,38.15,13.74,0.4562,21,0.16,13.87,0.53334,2,-26.58,-70.76,0.00963,3,-85.75,-69.52,0.00082,4,20,8.76,16.66,0.62742,21,-29.36,13.12,0.20001,2,-0.92,-56.13,0.13236,3,-59.88,-55.26,0.04022,3,20,-19.91,35.6,0.53761,2,33.42,-54.96,0.20559,3,-25.53,-54.59,0.2568,3,20,-55.59,58.92,0.22647,2,76.01,-53.32,0.20971,3,17.08,-53.57,0.56382,3,20,-85.63,65.16,0.05559,2,104.12,-41.01,0.08699,3,45.37,-41.68,0.85742,4,14,-132.99,-16.31,0.00936,20,-116.76,49.07,0.01208,2,120.18,-9.86,0.01431,3,61.88,-10.76,0.96424,4,15,25.27,11.08,0.56792,14,60.41,11.94,0.29952,16,64.41,-40.52,0.01735,17,24.09,-40.94,0.1152,6,15,-8.27,5.79,0.29235,14,27.08,5.51,0.58969,16,30.87,-35.28,0.04727,17,-9.35,-35.12,0.05744,2,-28.62,53.02,0.01206,3,-86,54.28,0.00118,6,15,-41.36,1.89,0.00757,14,-5.86,0.47,0.69489,16,-1.83,-28.85,0.05132,17,-41.93,-28.13,0.00899,2,2.28,40.55,0.15088,3,-55.28,41.36,0.08635,4,15,17.2,32.78,0.20083,14,51.6,33.35,0.12361,16,63.38,-17.4,0.17462,17,23.46,-17.8,0.50094,6,15,-15.36,22.59,0.10853,14,19.41,22.05,0.29016,16,29.26,-17.12,0.31644,17,-10.65,-16.94,0.25991,2,-30.47,34.88,0.02452,3,-88.1,36.17,0.00044,6,15,-46.99,11.34,0.01728,14,-11.81,9.72,0.43094,16,-4.29,-18.13,0.4731,17,-44.21,-17.37,0.04124,2,2.68,29.56,0.03678,3,-55.04,30.36,0.00065,5,16,56.78,18.36,0.236,17,17.48,18.07,0.45487,18,49.12,-37.95,0.0805,19,16.79,-37.19,0.21908,2,-64.17,5.22,0.00956,6,14,4.4,48.23,0.00266,16,24.01,12.61,0.31543,17,-15.39,12.88,0.23972,18,16.81,-30.02,0.0805,19,-15.86,-30.81,0.10089,2,-30.91,4.7,0.26079,6,14,-24.58,30.48,0.004,16,-9.27,5.73,0.46024,17,-48.78,6.57,0.01715,18,-16.43,-22.93,0.10911,19,-49.4,-25.3,0.01833,2,3.08,5.19,0.39118,6,16,50.41,50.69,0.01093,17,11.66,50.49,0.04375,18,56.3,-5.79,0.32048,19,22.43,-4.73,0.62237,21,12.75,-41.76,0.00019,2,-64,-27.72,0.00226,6,16,15.03,37.55,0.01093,17,-23.94,37.97,0.01242,18,18.62,-3.58,0.45446,19,-15.3,-4.31,0.32057,20,9.79,-26.55,0.03868,2,-26.78,-21.48,0.16295,5,16,-15.49,26.6,0.015,17,-54.65,27.55,0.00108,18,-13.73,-1.31,0.68149,20,-19.23,-12.08,0.05802,2,5.26,-16.48,0.24442,4,18,57.11,20.91,0.06626,19,21.99,21.97,0.31925,20,54.72,-18.67,0.26596,21,20.63,-16.23,0.34854,6,18,19,18.63,0.08791,19,-15.98,17.89,0.1366,20,18.64,-6.18,0.53447,21,-16.73,-8.32,0.19785,2,-22.2,-43.22,0.04157,3,-80.98,-42.05,0.00161,6,18,-9.53,19.21,0.13186,19,-44.51,17.12,0.00163,20,-7.5,5.28,0.8017,21,-44.08,-0.19,0.00005,2,5.74,-37.43,0.06235,3,-52.95,-36.66,0.00241,4,14,-65.78,11.4,0.1582,16,-54.5,1.75,0.00623,2,48.25,0.58,0.70765,3,-9.9,0.73,0.12792,4,14,-43.84,-19.1,0.4045,16,-44.19,-34.39,0.02556,2,44.93,38.01,0.43159,3,-12.67,38.2,0.13834,4,18,-48.79,20.77,0.00403,20,-43.17,21.74,0.24218,2,44.36,-30.19,0.56784,3,-14.23,-29.99,0.18595,2,14,-100.35,-11.83,0.00117,3,31.71,2.48,0.99883,3,14,-77.46,-42.26,0.09637,2,85.66,40.79,0.0754,3,28.1,40.38,0.82823,3,20,-78.77,42.87,0.04329,2,85.62,-26.81,0.07602,3,27.07,-27.2,0.88069],"hull":21}},"辫子":{"辫子":{"type":"mesh","uvs":[0.86793,0.00176,0.70715,0.00391,0.52342,0.16109,0.25007,0.27571,0,0.42307,0,0.62283,0.09322,0.7309,0.01256,0.81276,0.00808,1,0.38002,1,0.46964,0.88481,0.76092,0.81931,0.91328,0.64903,1,0.42635,1,0.17092,1,0,0.8147,0.20039,0.70267,0.3412,0.5279,0.53441,0.3621,0.74399,0.20077,0.90445],"triangles":[19,6,5,20,6,19,20,19,10,7,6,20,8,7,20,9,20,10,8,20,9,4,3,18,5,4,18,18,19,5,19,18,11,10,19,11,11,18,12,0,15,14,16,1,0,16,0,14,2,1,16,17,2,16,16,14,13,17,16,13,17,3,2,18,3,17,12,17,13,18,17,12],"vertices":[1,43,-9.28,10.99,1,3,43,-4.84,-9.93,0.95202,44,-59.34,-31.12,0.04591,45,-102.73,-40.08,0.00208,4,43,27.88,-28.51,0.70037,44,-22.34,-37.93,0.22522,45,-65.28,-43.69,0.0709,46,-102.28,-47.64,0.00352,4,43,55.25,-60.25,0.37891,44,13.93,-58.94,0.3325,45,-27.34,-61.52,0.25146,46,-63.69,-64,0.03713,4,43,87.89,-87.82,0.09427,44,53.81,-74.29,0.32327,45,13.7,-73.38,0.44461,46,-22.22,-74.29,0.13785,4,43,123.58,-80.94,0.01258,44,85.27,-56.07,0.14906,45,43.48,-52.53,0.47717,46,6.75,-52.31,0.36119,4,43,140.55,-65.03,0.0007,44,96.08,-35.49,0.04179,45,52.49,-31.1,0.31116,46,14.92,-30.55,0.64635,3,44,114.35,-37.3,0.00511,45,70.85,-31.34,0.11594,46,33.28,-30.09,0.87895,3,44,144.14,-20.75,0.00001,45,99.1,-12.29,0.01798,46,60.79,-9.97,0.98201,3,44,119.35,22.06,0.0023,45,70.74,28.24,0.13067,46,30.89,29.44,0.86703,3,44,95.24,21.88,0.10084,45,46.73,25.98,0.36303,46,6.98,26.27,0.53613,4,43,139.52,25.21,0.00838,44,65.51,49.43,0.34283,45,14.74,50.88,0.44257,46,-25.93,49.93,0.20622,4,43,105.25,39.23,0.18176,44,28.54,51.44,0.49835,45,-22.27,49.71,0.31744,46,-62.87,47.34,0.00244,3,43,63.27,42.88,0.51442,44,-12.31,41.11,0.40049,45,-62.08,35.92,0.08509,3,43,17.62,34.07,0.83938,44,-52.55,17.82,0.15851,45,-100.17,9.26,0.00212,2,43,-12.92,28.18,0.99932,44,-79.47,2.24,0.00068,1,43,27.56,10.89,1,3,43,55.55,1.11,0.66734,44,-5.91,-0.87,0.33263,46,-90.57,-8.84,0.00003,4,43,94.48,-15.05,0.33401,44,36.17,-3.37,0.33263,45,-9.96,-4.24,0.33333,46,-48.51,-6.1,0.00003,4,43,136.11,-29.47,0.00068,44,80.23,-3.34,0.33263,45,33.93,-0.43,0.33334,46,-4.79,-0.62,0.33336,2,45,70.16,-1.26,0.5,46,31.44,-0.06,0.5],"hull":16}},"闭眼":{"闭眼":{"x":62.64,"y":4.56,"rotation":-91.36,"width":171,"height":80}}}}],"animations":{"index_talk_shikao":{"slots":{"嘴":{"attachment":[{"name":"嘴_开心"},{"time":0.1667,"name":"嘴_= ="},{"time":0.3,"name":"嘴_疑惑"},{"time":0.4333,"name":"嘴_= ="},{"time":0.6,"name":"嘴_开心"},{"time":0.7667,"name":"嘴_= ="},{"time":0.9,"name":"嘴_疑惑"},{"time":1.0333,"name":"嘴_= ="},{"time":1.2,"name":"嘴_开心"},{"time":1.3667,"name":"嘴_= ="},{"time":1.5,"name":"嘴_疑惑"},{"time":1.6333,"name":"嘴_= ="}]},"眼框":{"attachment":[{"name":null}]},"眼珠":{"attachment":[{"name":null}]},"表情":{"attachment":[{"name":"表情_不满"}]}},"bones":{"躯干":{"translate":[{"x":-0.77,"curve":0.25,"c3":0.75},{"time":1,"x":6.61,"curve":0.25,"c3":0.75},{"time":2,"x":-0.77}]},"肩膀披风1":{"rotate":[{"angle":-3.03,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.3333,"angle":-5.05,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.1667,"angle":1.37,"curve":0.371,"c2":0.62,"c3":0.71},{"time":1.3333,"angle":2.05,"curve":0.243,"c3":0.649,"c4":0.6},{"time":2,"angle":-3.03}]},"肩膀披风2":{"rotate":[{"angle":0.04,"curve":0.351,"c2":0.4,"c3":0.757},{"time":0.6667,"angle":-5.05,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.1667,"angle":-1.49,"curve":0.338,"c2":0.35,"c3":0.675,"c4":0.69},{"time":1.3333,"angle":0.04,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.6667,"angle":2.05,"curve":0.265,"c3":0.618,"c4":0.43},{"time":2,"angle":0.04}]},"肩膀披风3":{"rotate":[{"angle":2.05,"curve":0.25,"c3":0.75},{"time":1,"angle":-5.05,"curve":0.29,"c3":0.629,"c4":0.38},{"time":1.1667,"angle":-4.37,"curve":0.311,"c2":0.25,"c3":0.649,"c4":0.6},{"time":1.3333,"angle":-3.03,"curve":0.351,"c2":0.4,"c3":0.757},{"time":2,"angle":2.05}]},"肩膀披风4":{"rotate":[{"angle":-4.36,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1667,"angle":-5.05,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":2.05,"curve":0.243,"c3":0.689,"c4":0.75},{"time":2,"angle":-4.36}]},"肩膀披风5":{"rotate":[{"angle":-1.5,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.5,"angle":-5.05,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.1667,"angle":0.04,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.5,"angle":2.05,"curve":0.25,"c3":0.625,"c4":0.5},{"time":2,"angle":-1.5}]},"肩膀披风6":{"rotate":[{"angle":1.37,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.8333,"angle":-5.05,"curve":0.265,"c3":0.618,"c4":0.43},{"time":1.1667,"angle":-3.03,"curve":0.351,"c2":0.4,"c3":0.757},{"time":1.8333,"angle":2.05,"curve":0.29,"c3":0.629,"c4":0.38},{"time":2,"angle":1.37}]},"躯干2":{"rotate":[{"angle":-0.26,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.4,"angle":0.14,"curve":0.25,"c3":0.75},{"time":1.4,"angle":-0.94,"curve":0.245,"c3":0.637,"c4":0.56},{"time":2,"angle":-0.26}]},"脸":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.2333,"angle":-0.72,"curve":0.25,"c3":0.75},{"time":0.4,"angle":-3.74,"curve":0.25,"c3":0.75},{"time":0.6333,"angle":-1.17,"curve":0.25,"c3":0.75},{"time":0.8667,"angle":-2.56,"curve":0.25,"c3":0.75},{"time":1.0667,"angle":-0.71,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":-2.56,"curve":0.25,"c3":0.75},{"time":1.4333,"angle":-0.71,"curve":0.25,"c3":0.75},{"time":1.6667,"angle":-1.78,"curve":0.25,"c3":0.75},{"time":2}]},"ik1":{"translate":[{"x":-29.65,"y":20.39,"curve":0.25,"c3":0.75},{"time":0.4667,"x":-40.21,"y":17.52,"curve":0.25,"c3":0.75},{"time":0.7,"x":-29.65,"y":20.39,"curve":0.25,"c3":0.75},{"time":0.9,"x":-40.21,"y":17.52,"curve":0.25,"c3":0.75},{"time":1.1,"x":-29.65,"y":20.39,"curve":0.25,"c3":0.75},{"time":1.3333,"x":-40.21,"y":17.52,"curve":0.25,"c3":0.75},{"time":2,"x":-29.65,"y":20.39}]},"辫子":{"rotate":[{"angle":1.98,"curve":0.25,"c3":0.75},{"time":1,"angle":5.23,"curve":0.25,"c3":0.75},{"time":2,"angle":1.98}]},"辫子2":{"rotate":[{"angle":2.52,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.2333,"angle":1.98,"curve":0.25,"c3":0.75},{"time":1.2333,"angle":5.23,"curve":0.242,"c3":0.671,"c4":0.68},{"time":2,"angle":2.52}]},"辫子3":{"rotate":[{"angle":3.46,"curve":0.378,"c2":0.52,"c3":0.748},{"time":0.4667,"angle":1.98,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":5.23,"curve":0.248,"c3":0.628,"c4":0.52},{"time":2,"angle":3.46}]},"辫子4":{"rotate":[{"angle":4.57,"curve":0.337,"c2":0.35,"c3":0.758},{"time":0.7333,"angle":1.98,"curve":0.25,"c3":0.75},{"time":1.7333,"angle":5.23,"curve":0.273,"c3":0.62,"c4":0.41},{"time":2,"angle":4.57}]},"后发":{"rotate":[{"angle":0.28,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1667,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":2.85,"curve":0.243,"c3":0.689,"c4":0.75},{"time":2,"angle":0.28}]},"后发2":{"rotate":[{"angle":1.04,"curve":0.345,"c2":0.37,"c3":0.683,"c4":0.72},{"time":0.1667,"angle":0.47,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.4,"curve":0.25,"c3":0.75},{"time":1.4,"angle":2.85,"curve":0.245,"c3":0.637,"c4":0.56},{"time":2,"angle":1.04}]},"后发3":{"rotate":[{"angle":1.8,"curve":0.33,"c2":0.32,"c3":0.667,"c4":0.67},{"time":0.1667,"angle":1.18,"curve":0.38,"c2":0.53,"c3":0.745},{"time":0.6,"curve":0.25,"c3":0.75},{"time":1.6,"angle":2.85,"curve":0.258,"c3":0.619,"c4":0.45},{"time":2,"angle":1.8}]},"刘海9":{"rotate":[{"angle":-2.62,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.3333,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":1.3333,"angle":4.27,"curve":0.243,"c3":0.649,"c4":0.6},{"time":2,"angle":-2.62}]},"刘海10":{"rotate":[{"angle":0.7,"curve":0.335,"c2":0.34,"c3":0.685,"c4":0.72},{"time":0.3333,"angle":-3.4,"curve":0.38,"c2":0.59,"c3":0.727},{"time":0.6,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":1.6,"angle":4.27,"curve":0.258,"c3":0.619,"c4":0.45},{"time":2,"angle":0.7}]},"刘海11":{"rotate":[{"angle":3.89,"curve":0.287,"c2":0.16,"c3":0.638,"c4":0.56},{"time":0.3333,"angle":0.31,"curve":0.367,"c2":0.46,"c3":0.754},{"time":0.9,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":1.9,"angle":4.27,"curve":0.305,"c3":0.64,"c4":0.36},{"time":2,"angle":3.89}]},"刘海2":{"rotate":[{"angle":-0.38,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.4,"angle":-1.09,"curve":0.25,"c3":0.75},{"time":1.4,"angle":0.84,"curve":0.245,"c3":0.637,"c4":0.56},{"time":2,"angle":-0.38}]},"刘海3":{"rotate":[{"angle":0.21,"curve":0.357,"c2":0.42,"c3":0.756},{"time":0.6333,"angle":-1.09,"curve":0.242,"c3":0.671,"c4":0.68},{"time":1.4,"angle":0.52,"curve":0.378,"c2":0.61,"c3":0.722},{"time":1.6333,"angle":0.84,"curve":0.261,"c3":0.618,"c4":0.44},{"time":2,"angle":0.21}]},"刘海4":{"rotate":[{"angle":0.76,"curve":0.289,"c2":0.17,"c3":0.755},{"time":0.9,"angle":-1.09,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.4,"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":1.9,"angle":0.84,"curve":0.305,"c3":0.64,"c4":0.36},{"time":2,"angle":0.76}]},"刘海5":{"rotate":[{"angle":-0.9,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1667,"angle":-1.09,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":0.84,"curve":0.243,"c3":0.689,"c4":0.75},{"time":2,"angle":-0.9}]},"刘海6":{"rotate":[{"angle":-0.54,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.3333,"angle":-1.09,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.1667,"angle":0.66,"curve":0.371,"c2":0.62,"c3":0.71},{"time":1.3333,"angle":0.84,"curve":0.243,"c3":0.649,"c4":0.6},{"time":2,"angle":-0.54}]},"刘海7":{"rotate":[{"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.5,"angle":-1.09,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.1667,"angle":0.3,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.5,"angle":0.84,"curve":0.25,"c3":0.625,"c4":0.5},{"time":2,"angle":-0.12}]},"刘海8":{"rotate":[{"angle":0.3,"curve":0.351,"c2":0.4,"c3":0.757},{"time":0.6667,"angle":-1.09,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.1667,"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":1.6667,"angle":0.84,"curve":0.265,"c3":0.618,"c4":0.43},{"time":2,"angle":0.3}]},"躯干3":{"rotate":[{"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1,"angle":3.39,"curve":0.25,"c3":0.75},{"time":2,"angle":-2.11}]},"躯干4":{"rotate":[{"angle":-1.39,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.2,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.2,"angle":3.39,"curve":0.243,"c3":0.68,"c4":0.71},{"time":2,"angle":-1.39}]},"躯干5":{"rotate":[{"angle":-1.39,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.2,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.2,"angle":3.39,"curve":0.243,"c3":0.68,"c4":0.71},{"time":2,"angle":-1.39}]},"躯干6":{"rotate":[{"angle":-0.35,"curve":0.353,"c2":0.4,"c3":0.692,"c4":0.76},{"time":0.2,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.3667,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.3667,"angle":3.39,"curve":0.244,"c3":0.643,"c4":0.58},{"time":2,"angle":-0.35}]},"躯干7":{"rotate":[{"angle":-0.32,"curve":0.382,"c2":0.56,"c3":0.739},{"time":0.3667,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.3667,"angle":3.39,"curve":0.244,"c3":0.643,"c4":0.58},{"time":2,"angle":-0.32}]},"躯干8":{"rotate":[{"angle":0.85,"curve":0.349,"c2":0.38,"c3":0.703,"c4":0.79},{"time":0.3667,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.5333,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.5333,"angle":3.39,"curve":0.252,"c3":0.622,"c4":0.48},{"time":2,"angle":0.85}]},"躯干9":{"rotate":[{"angle":0.88,"curve":0.372,"c2":0.48,"c3":0.752},{"time":0.5333,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.5333,"angle":3.39,"curve":0.252,"c3":0.622,"c4":0.48},{"time":2,"angle":0.88}]},"躯干10":{"rotate":[{"angle":2.04,"curve":0.328,"c2":0.32,"c3":0.705,"c4":0.79},{"time":0.5333,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.7,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.7,"angle":3.39,"curve":0.269,"c3":0.618,"c4":0.42},{"time":2,"angle":2.04}]},"扇子":{"rotate":[{"angle":-0.4,"curve":0.36,"c2":0.64,"c3":0.695},{"time":0.0667,"curve":0.25,"c3":0.75},{"time":0.5333,"angle":-15.71,"curve":0.25,"c3":0.75},{"time":0.7667,"angle":-2.17,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":-9.87,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":-2.81,"curve":0.25,"c3":0.75},{"time":1.4,"angle":-9.28,"curve":0.245,"c3":0.711,"c4":0.83},{"time":2,"angle":-0.4}]},"手掌1":{"rotate":[{"angle":-0.38,"curve":0.36,"c2":0.64,"c3":0.695},{"time":0.0667,"curve":0.25,"c3":0.75},{"time":0.5333,"angle":-4.58,"curve":0.25,"c3":0.75},{"time":0.7667,"angle":-2.17,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":-4.54,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":-2.81,"curve":0.25,"c3":0.75},{"time":1.4,"angle":-8.92,"curve":0.245,"c3":0.711,"c4":0.83},{"time":2,"angle":-0.38}]},"root":{"translate":[{"x":-657.87,"y":422.42}],"scale":[{"x":0.54,"y":0.54}]}}},"index_talk_shikao2":{"slots":{"嘴":{"attachment":[{"name":"嘴_疑惑"}]},"眼框":{"attachment":[{"name":null}]},"眼珠":{"attachment":[{"name":null}]},"表情":{"attachment":[{"name":"表情_疑惑"}]}},"bones":{"躯干":{"translate":[{"x":-0.77,"curve":0.25,"c3":0.75},{"time":1,"x":6.61,"curve":0.25,"c3":0.75},{"time":2,"x":-0.77}]},"肩膀披风1":{"rotate":[{"angle":-3.03,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.3333,"angle":-5.05,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.1667,"angle":1.37,"curve":0.371,"c2":0.62,"c3":0.71},{"time":1.3333,"angle":2.05,"curve":0.243,"c3":0.649,"c4":0.6},{"time":2,"angle":-3.03}]},"肩膀披风2":{"rotate":[{"angle":0.04,"curve":0.351,"c2":0.4,"c3":0.757},{"time":0.6667,"angle":-5.05,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.1667,"angle":-1.49,"curve":0.338,"c2":0.35,"c3":0.675,"c4":0.69},{"time":1.3333,"angle":0.04,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.6667,"angle":2.05,"curve":0.265,"c3":0.618,"c4":0.43},{"time":2,"angle":0.04}]},"肩膀披风3":{"rotate":[{"angle":2.05,"curve":0.25,"c3":0.75},{"time":1,"angle":-5.05,"curve":0.29,"c3":0.629,"c4":0.38},{"time":1.1667,"angle":-4.37,"curve":0.311,"c2":0.25,"c3":0.649,"c4":0.6},{"time":1.3333,"angle":-3.03,"curve":0.351,"c2":0.4,"c3":0.757},{"time":2,"angle":2.05}]},"肩膀披风4":{"rotate":[{"angle":-4.36,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1667,"angle":-5.05,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":2.05,"curve":0.243,"c3":0.689,"c4":0.75},{"time":2,"angle":-4.36}]},"肩膀披风5":{"rotate":[{"angle":-1.5,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.5,"angle":-5.05,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.1667,"angle":0.04,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.5,"angle":2.05,"curve":0.25,"c3":0.625,"c4":0.5},{"time":2,"angle":-1.5}]},"肩膀披风6":{"rotate":[{"angle":1.37,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.8333,"angle":-5.05,"curve":0.265,"c3":0.618,"c4":0.43},{"time":1.1667,"angle":-3.03,"curve":0.351,"c2":0.4,"c3":0.757},{"time":1.8333,"angle":2.05,"curve":0.29,"c3":0.629,"c4":0.38},{"time":2,"angle":1.37}]},"躯干2":{"rotate":[{"angle":-0.26,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.4,"angle":0.14,"curve":0.25,"c3":0.75},{"time":1.4,"angle":-0.94,"curve":0.245,"c3":0.637,"c4":0.56},{"time":2,"angle":-0.26}]},"脸":{"rotate":[{"angle":-0.72,"curve":0.337,"c2":0.35,"c3":0.758},{"time":0.7333,"angle":0.14,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.4,"angle":-0.63,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.7,"angle":-0.94,"curve":0.273,"c3":0.62,"c4":0.41},{"time":2,"angle":-0.72}]},"手掌1":{"rotate":[{"angle":0.69,"curve":0.24,"c3":0.376},{"time":0.3667,"angle":-4.09,"curve":0.307,"c3":0.676,"c4":0.78},{"time":0.6667,"angle":2.68,"curve":0.342,"c2":0.63,"c3":0.677},{"time":1,"angle":0.69,"curve":0.24,"c3":0.376},{"time":1.3667,"angle":-4.09,"curve":0.307,"c3":0.676,"c4":0.78},{"time":1.6667,"angle":2.68,"curve":0.342,"c2":0.63,"c3":0.677},{"time":2,"angle":0.69}]},"扇子":{"rotate":[{"angle":-6,"curve":0.382,"c2":0.58,"c3":0.731},{"time":0.1,"angle":-6.25,"curve":0.25,"c3":0.75},{"time":0.4667,"angle":-15.6,"curve":0.307,"c3":0.676,"c4":0.78},{"time":0.7667,"angle":-5.76,"curve":0.243,"c3":0.658,"c4":0.64},{"time":1,"angle":-6.14,"curve":0.381,"c2":0.59,"c3":0.729},{"time":1.1,"angle":-6.25,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":-15.6,"curve":0.307,"c3":0.676,"c4":0.78},{"time":1.7667,"angle":-5.23,"curve":0.243,"c3":0.655,"c4":0.63},{"time":2,"angle":-6}]},"ik1":{"translate":[{"x":-6.1,"y":-1.19,"curve":0.346,"c2":0.52,"c3":0.69},{"time":0.2667,"x":-11.13,"y":-2.17,"curve":0.309,"c3":0.691},{"time":0.7667,"curve":0.308,"c3":0.656,"c4":0.53},{"time":1,"x":-6.45,"y":-1.26,"curve":0.347,"c2":0.53,"c3":0.69},{"time":1.2,"x":-11.13,"y":-2.17,"curve":0.309,"c3":0.691},{"time":1.7,"curve":0.308,"c3":0.655,"c4":0.52},{"time":2,"x":-6.1,"y":-1.19}]},"辫子":{"rotate":[{"angle":1.98,"curve":0.25,"c3":0.75},{"time":1,"angle":5.23,"curve":0.25,"c3":0.75},{"time":2,"angle":1.98}]},"辫子2":{"rotate":[{"angle":2.52,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.2333,"angle":1.98,"curve":0.25,"c3":0.75},{"time":1.2333,"angle":5.23,"curve":0.242,"c3":0.671,"c4":0.68},{"time":2,"angle":2.52}]},"辫子3":{"rotate":[{"angle":3.46,"curve":0.378,"c2":0.52,"c3":0.748},{"time":0.4667,"angle":1.98,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":5.23,"curve":0.248,"c3":0.628,"c4":0.52},{"time":2,"angle":3.46}]},"辫子4":{"rotate":[{"angle":4.57,"curve":0.337,"c2":0.35,"c3":0.758},{"time":0.7333,"angle":1.98,"curve":0.25,"c3":0.75},{"time":1.7333,"angle":5.23,"curve":0.273,"c3":0.62,"c4":0.41},{"time":2,"angle":4.57}]},"后发":{"rotate":[{"angle":0.28,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1667,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":2.85,"curve":0.243,"c3":0.689,"c4":0.75},{"time":2,"angle":0.28}]},"后发2":{"rotate":[{"angle":1.04,"curve":0.345,"c2":0.37,"c3":0.683,"c4":0.72},{"time":0.1667,"angle":0.47,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.4,"curve":0.25,"c3":0.75},{"time":1.4,"angle":2.85,"curve":0.245,"c3":0.637,"c4":0.56},{"time":2,"angle":1.04}]},"后发3":{"rotate":[{"angle":1.8,"curve":0.33,"c2":0.32,"c3":0.667,"c4":0.67},{"time":0.1667,"angle":1.18,"curve":0.38,"c2":0.53,"c3":0.745},{"time":0.6,"curve":0.25,"c3":0.75},{"time":1.6,"angle":2.85,"curve":0.258,"c3":0.619,"c4":0.45},{"time":2,"angle":1.8}]},"刘海9":{"rotate":[{"angle":-2.62,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.3333,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":1.3333,"angle":4.27,"curve":0.243,"c3":0.649,"c4":0.6},{"time":2,"angle":-2.62}]},"刘海10":{"rotate":[{"angle":0.7,"curve":0.335,"c2":0.34,"c3":0.685,"c4":0.72},{"time":0.3333,"angle":-3.4,"curve":0.38,"c2":0.59,"c3":0.727},{"time":0.6,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":1.6,"angle":4.27,"curve":0.258,"c3":0.619,"c4":0.45},{"time":2,"angle":0.7}]},"刘海11":{"rotate":[{"angle":3.89,"curve":0.287,"c2":0.16,"c3":0.638,"c4":0.56},{"time":0.3333,"angle":0.31,"curve":0.367,"c2":0.46,"c3":0.754},{"time":0.9,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":1.9,"angle":4.27,"curve":0.305,"c3":0.64,"c4":0.36},{"time":2,"angle":3.89}]},"刘海2":{"rotate":[{"angle":-0.38,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.4,"angle":-1.09,"curve":0.25,"c3":0.75},{"time":1.4,"angle":0.84,"curve":0.245,"c3":0.637,"c4":0.56},{"time":2,"angle":-0.38}]},"刘海3":{"rotate":[{"angle":0.21,"curve":0.357,"c2":0.42,"c3":0.756},{"time":0.6333,"angle":-1.09,"curve":0.242,"c3":0.671,"c4":0.68},{"time":1.4,"angle":0.52,"curve":0.378,"c2":0.61,"c3":0.722},{"time":1.6333,"angle":0.84,"curve":0.261,"c3":0.618,"c4":0.44},{"time":2,"angle":0.21}]},"刘海4":{"rotate":[{"angle":0.76,"curve":0.289,"c2":0.17,"c3":0.755},{"time":0.9,"angle":-1.09,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.4,"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":1.9,"angle":0.84,"curve":0.305,"c3":0.64,"c4":0.36},{"time":2,"angle":0.76}]},"刘海5":{"rotate":[{"angle":-0.9,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1667,"angle":-1.09,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":0.84,"curve":0.243,"c3":0.689,"c4":0.75},{"time":2,"angle":-0.9}]},"刘海6":{"rotate":[{"angle":-0.54,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.3333,"angle":-1.09,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.1667,"angle":0.66,"curve":0.371,"c2":0.62,"c3":0.71},{"time":1.3333,"angle":0.84,"curve":0.243,"c3":0.649,"c4":0.6},{"time":2,"angle":-0.54}]},"刘海7":{"rotate":[{"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.5,"angle":-1.09,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.1667,"angle":0.3,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.5,"angle":0.84,"curve":0.25,"c3":0.625,"c4":0.5},{"time":2,"angle":-0.12}]},"刘海8":{"rotate":[{"angle":0.3,"curve":0.351,"c2":0.4,"c3":0.757},{"time":0.6667,"angle":-1.09,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.1667,"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":1.6667,"angle":0.84,"curve":0.265,"c3":0.618,"c4":0.43},{"time":2,"angle":0.3}]},"躯干3":{"rotate":[{"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1,"angle":3.39,"curve":0.25,"c3":0.75},{"time":2,"angle":-2.11}]},"躯干4":{"rotate":[{"angle":-1.39,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.2,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.2,"angle":3.39,"curve":0.243,"c3":0.68,"c4":0.71},{"time":2,"angle":-1.39}]},"躯干5":{"rotate":[{"angle":-1.39,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.2,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.2,"angle":3.39,"curve":0.243,"c3":0.68,"c4":0.71},{"time":2,"angle":-1.39}]},"躯干6":{"rotate":[{"angle":-0.35,"curve":0.353,"c2":0.4,"c3":0.692,"c4":0.76},{"time":0.2,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.3667,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.3667,"angle":3.39,"curve":0.244,"c3":0.643,"c4":0.58},{"time":2,"angle":-0.35}]},"躯干7":{"rotate":[{"angle":-0.32,"curve":0.382,"c2":0.56,"c3":0.739},{"time":0.3667,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.3667,"angle":3.39,"curve":0.244,"c3":0.643,"c4":0.58},{"time":2,"angle":-0.32}]},"躯干8":{"rotate":[{"angle":0.85,"curve":0.349,"c2":0.38,"c3":0.703,"c4":0.79},{"time":0.3667,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.5333,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.5333,"angle":3.39,"curve":0.252,"c3":0.622,"c4":0.48},{"time":2,"angle":0.85}]},"躯干9":{"rotate":[{"angle":0.88,"curve":0.372,"c2":0.48,"c3":0.752},{"time":0.5333,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.5333,"angle":3.39,"curve":0.252,"c3":0.622,"c4":0.48},{"time":2,"angle":0.88}]},"躯干10":{"rotate":[{"angle":2.04,"curve":0.328,"c2":0.32,"c3":0.705,"c4":0.79},{"time":0.5333,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.7,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.7,"angle":3.39,"curve":0.269,"c3":0.618,"c4":0.42},{"time":2,"angle":2.04}]},"root":{"translate":[{"x":-657.87,"y":422.42}],"scale":[{"x":0.54,"y":0.54}]}}},"index_talk_weixiao":{"slots":{"嘴":{"attachment":[{"name":"嘴_疑惑"},{"time":0.1667,"name":"嘴_开心闭"},{"time":0.3,"name":"嘴_疑惑"},{"time":0.4333,"name":"嘴_开心闭"},{"time":0.6,"name":"嘴_开心"},{"time":0.7667,"name":"嘴_开心闭"},{"time":0.9,"name":"嘴_疑惑"},{"time":1.0333,"name":"嘴_开心闭"},{"time":1.2,"name":"嘴_开心"},{"time":1.3667,"name":"嘴_开心闭"},{"time":1.5,"name":"嘴_疑惑"},{"time":1.6333,"name":"嘴_开心闭"}]},"眼框":{"color":[{"time":1.1333,"color":"ffffff00","curve":"stepped"},{"time":1.2,"color":"ffffffff"}]},"眼珠":{"color":[{"time":1.1,"color":"ffffff00","curve":"stepped"},{"time":1.2,"color":"ffffffff"}]},"闭眼":{"color":[{"time":1.1333,"color":"ffffffff","curve":"stepped"},{"time":1.2,"color":"ffffff00"}]}},"bones":{"躯干":{"translate":[{"x":-0.77,"curve":0.25,"c3":0.75},{"time":1,"x":6.61,"curve":0.25,"c3":0.75},{"time":2,"x":-0.77}]},"肩膀披风1":{"rotate":[{"angle":-3.03,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.3333,"angle":-5.05,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.1667,"angle":1.37,"curve":0.371,"c2":0.62,"c3":0.71},{"time":1.3333,"angle":2.05,"curve":0.243,"c3":0.649,"c4":0.6},{"time":2,"angle":-3.03}]},"肩膀披风2":{"rotate":[{"angle":0.04,"curve":0.351,"c2":0.4,"c3":0.757},{"time":0.6667,"angle":-5.05,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.1667,"angle":-1.49,"curve":0.338,"c2":0.35,"c3":0.675,"c4":0.69},{"time":1.3333,"angle":0.04,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.6667,"angle":2.05,"curve":0.265,"c3":0.618,"c4":0.43},{"time":2,"angle":0.04}]},"肩膀披风3":{"rotate":[{"angle":2.05,"curve":0.25,"c3":0.75},{"time":1,"angle":-5.05,"curve":0.29,"c3":0.629,"c4":0.38},{"time":1.1667,"angle":-4.37,"curve":0.311,"c2":0.25,"c3":0.649,"c4":0.6},{"time":1.3333,"angle":-3.03,"curve":0.351,"c2":0.4,"c3":0.757},{"time":2,"angle":2.05}]},"肩膀披风4":{"rotate":[{"angle":-4.36,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1667,"angle":-5.05,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":2.05,"curve":0.243,"c3":0.689,"c4":0.75},{"time":2,"angle":-4.36}]},"肩膀披风5":{"rotate":[{"angle":-1.5,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.5,"angle":-5.05,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.1667,"angle":0.04,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.5,"angle":2.05,"curve":0.25,"c3":0.625,"c4":0.5},{"time":2,"angle":-1.5}]},"肩膀披风6":{"rotate":[{"angle":1.37,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.8333,"angle":-5.05,"curve":0.265,"c3":0.618,"c4":0.43},{"time":1.1667,"angle":-3.03,"curve":0.351,"c2":0.4,"c3":0.757},{"time":1.8333,"angle":2.05,"curve":0.29,"c3":0.629,"c4":0.38},{"time":2,"angle":1.37}]},"躯干2":{"rotate":[{"angle":-0.26,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.4,"angle":0.14,"curve":0.25,"c3":0.75},{"time":1.4,"angle":-0.94,"curve":0.245,"c3":0.637,"c4":0.56},{"time":2,"angle":-0.26}]},"脸":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.2333,"angle":-0.72,"curve":0.25,"c3":0.75},{"time":0.4,"angle":-3.74,"curve":0.25,"c3":0.75},{"time":0.6333,"angle":-1.17,"curve":0.25,"c3":0.75},{"time":0.8667,"angle":-2.56,"curve":0.25,"c3":0.75},{"time":1.0667,"angle":-0.71,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":-2.56,"curve":0.25,"c3":0.75},{"time":1.4333,"angle":-0.71,"curve":0.25,"c3":0.75},{"time":1.6667,"angle":-1.78,"curve":0.25,"c3":0.75},{"time":2}]},"ik1":{"translate":[{"x":-29.65,"y":20.39,"curve":0.25,"c3":0.75},{"time":0.4667,"x":-40.21,"y":17.52,"curve":0.25,"c3":0.75},{"time":0.7,"x":-29.65,"y":20.39,"curve":0.25,"c3":0.75},{"time":0.9,"x":-40.21,"y":17.52,"curve":0.25,"c3":0.75},{"time":1.1,"x":-29.65,"y":20.39,"curve":0.25,"c3":0.75},{"time":1.3333,"x":-40.21,"y":17.52,"curve":0.25,"c3":0.75},{"time":2,"x":-29.65,"y":20.39}]},"辫子":{"rotate":[{"angle":1.98,"curve":0.25,"c3":0.75},{"time":1,"angle":5.23,"curve":0.25,"c3":0.75},{"time":2,"angle":1.98}]},"辫子2":{"rotate":[{"angle":2.52,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.2333,"angle":1.98,"curve":0.25,"c3":0.75},{"time":1.2333,"angle":5.23,"curve":0.242,"c3":0.671,"c4":0.68},{"time":2,"angle":2.52}]},"辫子3":{"rotate":[{"angle":3.46,"curve":0.378,"c2":0.52,"c3":0.748},{"time":0.4667,"angle":1.98,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":5.23,"curve":0.248,"c3":0.628,"c4":0.52},{"time":2,"angle":3.46}]},"辫子4":{"rotate":[{"angle":4.57,"curve":0.337,"c2":0.35,"c3":0.758},{"time":0.7333,"angle":1.98,"curve":0.25,"c3":0.75},{"time":1.7333,"angle":5.23,"curve":0.273,"c3":0.62,"c4":0.41},{"time":2,"angle":4.57}]},"后发":{"rotate":[{"angle":0.28,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1667,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":2.85,"curve":0.243,"c3":0.689,"c4":0.75},{"time":2,"angle":0.28}]},"后发2":{"rotate":[{"angle":1.04,"curve":0.345,"c2":0.37,"c3":0.683,"c4":0.72},{"time":0.1667,"angle":0.47,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.4,"curve":0.25,"c3":0.75},{"time":1.4,"angle":2.85,"curve":0.245,"c3":0.637,"c4":0.56},{"time":2,"angle":1.04}]},"后发3":{"rotate":[{"angle":1.8,"curve":0.33,"c2":0.32,"c3":0.667,"c4":0.67},{"time":0.1667,"angle":1.18,"curve":0.38,"c2":0.53,"c3":0.745},{"time":0.6,"curve":0.25,"c3":0.75},{"time":1.6,"angle":2.85,"curve":0.258,"c3":0.619,"c4":0.45},{"time":2,"angle":1.8}]},"刘海9":{"rotate":[{"angle":-2.62,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.3333,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":1.3333,"angle":4.27,"curve":0.243,"c3":0.649,"c4":0.6},{"time":2,"angle":-2.62}]},"刘海10":{"rotate":[{"angle":0.7,"curve":0.335,"c2":0.34,"c3":0.685,"c4":0.72},{"time":0.3333,"angle":-3.4,"curve":0.38,"c2":0.59,"c3":0.727},{"time":0.6,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":1.6,"angle":4.27,"curve":0.258,"c3":0.619,"c4":0.45},{"time":2,"angle":0.7}]},"刘海11":{"rotate":[{"angle":3.89,"curve":0.287,"c2":0.16,"c3":0.638,"c4":0.56},{"time":0.3333,"angle":0.31,"curve":0.367,"c2":0.46,"c3":0.754},{"time":0.9,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":1.9,"angle":4.27,"curve":0.305,"c3":0.64,"c4":0.36},{"time":2,"angle":3.89}]},"刘海2":{"rotate":[{"angle":-0.38,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.4,"angle":-1.09,"curve":0.25,"c3":0.75},{"time":1.4,"angle":0.84,"curve":0.245,"c3":0.637,"c4":0.56},{"time":2,"angle":-0.38}]},"刘海3":{"rotate":[{"angle":0.21,"curve":0.357,"c2":0.42,"c3":0.756},{"time":0.6333,"angle":-1.09,"curve":0.242,"c3":0.671,"c4":0.68},{"time":1.4,"angle":0.52,"curve":0.378,"c2":0.61,"c3":0.722},{"time":1.6333,"angle":0.84,"curve":0.261,"c3":0.618,"c4":0.44},{"time":2,"angle":0.21}]},"刘海4":{"rotate":[{"angle":0.76,"curve":0.289,"c2":0.17,"c3":0.755},{"time":0.9,"angle":-1.09,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.4,"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":1.9,"angle":0.84,"curve":0.305,"c3":0.64,"c4":0.36},{"time":2,"angle":0.76}]},"刘海5":{"rotate":[{"angle":-0.9,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1667,"angle":-1.09,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":0.84,"curve":0.243,"c3":0.689,"c4":0.75},{"time":2,"angle":-0.9}]},"刘海6":{"rotate":[{"angle":-0.54,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.3333,"angle":-1.09,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.1667,"angle":0.66,"curve":0.371,"c2":0.62,"c3":0.71},{"time":1.3333,"angle":0.84,"curve":0.243,"c3":0.649,"c4":0.6},{"time":2,"angle":-0.54}]},"刘海7":{"rotate":[{"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.5,"angle":-1.09,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.1667,"angle":0.3,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.5,"angle":0.84,"curve":0.25,"c3":0.625,"c4":0.5},{"time":2,"angle":-0.12}]},"刘海8":{"rotate":[{"angle":0.3,"curve":0.351,"c2":0.4,"c3":0.757},{"time":0.6667,"angle":-1.09,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.1667,"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":1.6667,"angle":0.84,"curve":0.265,"c3":0.618,"c4":0.43},{"time":2,"angle":0.3}]},"躯干3":{"rotate":[{"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1,"angle":3.39,"curve":0.25,"c3":0.75},{"time":2,"angle":-2.11}]},"躯干4":{"rotate":[{"angle":-1.39,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.2,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.2,"angle":3.39,"curve":0.243,"c3":0.68,"c4":0.71},{"time":2,"angle":-1.39}]},"躯干5":{"rotate":[{"angle":-1.39,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.2,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.2,"angle":3.39,"curve":0.243,"c3":0.68,"c4":0.71},{"time":2,"angle":-1.39}]},"躯干6":{"rotate":[{"angle":-0.35,"curve":0.353,"c2":0.4,"c3":0.692,"c4":0.76},{"time":0.2,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.3667,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.3667,"angle":3.39,"curve":0.244,"c3":0.643,"c4":0.58},{"time":2,"angle":-0.35}]},"躯干7":{"rotate":[{"angle":-0.32,"curve":0.382,"c2":0.56,"c3":0.739},{"time":0.3667,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.3667,"angle":3.39,"curve":0.244,"c3":0.643,"c4":0.58},{"time":2,"angle":-0.32}]},"躯干8":{"rotate":[{"angle":0.85,"curve":0.349,"c2":0.38,"c3":0.703,"c4":0.79},{"time":0.3667,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.5333,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.5333,"angle":3.39,"curve":0.252,"c3":0.622,"c4":0.48},{"time":2,"angle":0.85}]},"躯干9":{"rotate":[{"angle":0.88,"curve":0.372,"c2":0.48,"c3":0.752},{"time":0.5333,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.5333,"angle":3.39,"curve":0.252,"c3":0.622,"c4":0.48},{"time":2,"angle":0.88}]},"躯干10":{"rotate":[{"angle":2.04,"curve":0.328,"c2":0.32,"c3":0.705,"c4":0.79},{"time":0.5333,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.7,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.7,"angle":3.39,"curve":0.269,"c3":0.618,"c4":0.42},{"time":2,"angle":2.04}]},"眼框":{"scale":[{"time":1.0667,"curve":0.25,"c3":0.75},{"time":1.1,"y":0.498,"curve":0.25,"c3":0.75},{"time":1.2,"y":0.56,"curve":0.25,"c3":0.75},{"time":1.2333,"y":1.034,"curve":0.25,"c3":0.75},{"time":1.3333}]},"眼珠":{"translate":[{"time":0.5667,"curve":0.25,"c3":0.75},{"time":0.6333,"x":-0.05,"y":-2.05,"curve":"stepped"},{"time":0.9,"x":-0.05,"y":-2.05,"curve":0.25,"c3":0.75},{"time":0.9333}]},"扇子":{"rotate":[{"angle":-0.4,"curve":0.36,"c2":0.64,"c3":0.695},{"time":0.0667,"curve":0.25,"c3":0.75},{"time":0.5333,"angle":-15.71,"curve":0.25,"c3":0.75},{"time":0.7667,"angle":-2.17,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":-9.87,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":-2.81,"curve":0.25,"c3":0.75},{"time":1.4,"angle":-9.28,"curve":0.245,"c3":0.711,"c4":0.83},{"time":2,"angle":-0.4}]},"手掌1":{"rotate":[{"angle":-0.38,"curve":0.36,"c2":0.64,"c3":0.695},{"time":0.0667,"curve":0.25,"c3":0.75},{"time":0.5333,"angle":-4.58,"curve":0.25,"c3":0.75},{"time":0.7667,"angle":-2.17,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":-4.54,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":-2.81,"curve":0.25,"c3":0.75},{"time":1.4,"angle":-8.92,"curve":0.245,"c3":0.711,"c4":0.83},{"time":2,"angle":-0.38}]},"root":{"translate":[{"x":-657.87,"y":422.42}],"scale":[{"x":0.54,"y":0.54}]}}},"loop_index":{"slots":{"眼框":{"color":[{"time":1.5,"color":"ffffff00","curve":"stepped"},{"time":1.5667,"color":"ffffffff"}]},"眼珠":{"color":[{"time":1.4667,"color":"ffffff00","curve":"stepped"},{"time":1.5667,"color":"ffffffff"}]},"闭眼":{"color":[{"time":1.5,"color":"ffffffff","curve":"stepped"},{"time":1.5667,"color":"ffffff00"}]}},"bones":{"躯干":{"translate":[{"x":-0.77,"curve":0.25,"c3":0.75},{"time":1,"x":6.61,"curve":0.25,"c3":0.75},{"time":2,"x":-0.77,"curve":0.25,"c3":0.75},{"time":3,"x":6.61,"curve":0.25,"c3":0.75},{"time":4,"x":-0.77}]},"肩膀披风1":{"rotate":[{"angle":-3.03,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.3333,"angle":-5.05,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.1667,"angle":1.37,"curve":0.371,"c2":0.62,"c3":0.71},{"time":1.3333,"angle":2.05,"curve":0.243,"c3":0.649,"c4":0.6},{"time":2,"angle":-3.03,"curve":0.382,"c2":0.57,"c3":0.735},{"time":2.3333,"angle":-5.05,"curve":0.243,"c3":0.689,"c4":0.75},{"time":3.1667,"angle":1.37,"curve":0.371,"c2":0.62,"c3":0.71},{"time":3.3333,"angle":2.05,"curve":0.243,"c3":0.649,"c4":0.6},{"time":4,"angle":-3.03}]},"肩膀披风2":{"rotate":[{"angle":0.04,"curve":0.351,"c2":0.4,"c3":0.757},{"time":0.6667,"angle":-5.05,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.1667,"angle":-1.49,"curve":0.338,"c2":0.35,"c3":0.675,"c4":0.69},{"time":1.3333,"angle":0.04,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.6667,"angle":2.05,"curve":0.265,"c3":0.618,"c4":0.43},{"time":2,"angle":0.04,"curve":0.351,"c2":0.4,"c3":0.757},{"time":2.6667,"angle":-5.05,"curve":0.25,"c3":0.625,"c4":0.5},{"time":3.1667,"angle":-1.49,"curve":0.338,"c2":0.35,"c3":0.675,"c4":0.69},{"time":3.3333,"angle":0.04,"curve":0.382,"c2":0.57,"c3":0.735},{"time":3.6667,"angle":2.05,"curve":0.265,"c3":0.618,"c4":0.43},{"time":4,"angle":0.04}]},"肩膀披风3":{"rotate":[{"angle":2.05,"curve":0.25,"c3":0.75},{"time":1,"angle":-5.05,"curve":0.29,"c3":0.629,"c4":0.38},{"time":1.1667,"angle":-4.37,"curve":0.311,"c2":0.25,"c3":0.649,"c4":0.6},{"time":1.3333,"angle":-3.03,"curve":0.351,"c2":0.4,"c3":0.757},{"time":2,"angle":2.05,"curve":0.25,"c3":0.75},{"time":3,"angle":-5.05,"curve":0.29,"c3":0.629,"c4":0.38},{"time":3.1667,"angle":-4.37,"curve":0.311,"c2":0.25,"c3":0.649,"c4":0.6},{"time":3.3333,"angle":-3.03,"curve":0.351,"c2":0.4,"c3":0.757},{"time":4,"angle":2.05}]},"肩膀披风4":{"rotate":[{"angle":-4.36,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1667,"angle":-5.05,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":2.05,"curve":0.243,"c3":0.689,"c4":0.75},{"time":2,"angle":-4.36,"curve":0.371,"c2":0.62,"c3":0.71},{"time":2.1667,"angle":-5.05,"curve":0.25,"c3":0.75},{"time":3.1667,"angle":2.05,"curve":0.243,"c3":0.689,"c4":0.75},{"time":4,"angle":-4.36}]},"肩膀披风5":{"rotate":[{"angle":-1.5,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.5,"angle":-5.05,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.1667,"angle":0.04,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.5,"angle":2.05,"curve":0.25,"c3":0.625,"c4":0.5},{"time":2,"angle":-1.5,"curve":0.375,"c2":0.5,"c3":0.75},{"time":2.5,"angle":-5.05,"curve":0.243,"c3":0.649,"c4":0.6},{"time":3.1667,"angle":0.04,"curve":0.382,"c2":0.57,"c3":0.735},{"time":3.5,"angle":2.05,"curve":0.25,"c3":0.625,"c4":0.5},{"time":4,"angle":-1.5}]},"肩膀披风6":{"rotate":[{"angle":1.37,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.8333,"angle":-5.05,"curve":0.265,"c3":0.618,"c4":0.43},{"time":1.1667,"angle":-3.03,"curve":0.351,"c2":0.4,"c3":0.757},{"time":1.8333,"angle":2.05,"curve":0.29,"c3":0.629,"c4":0.38},{"time":2,"angle":1.37,"curve":0.311,"c2":0.25,"c3":0.757},{"time":2.8333,"angle":-5.05,"curve":0.265,"c3":0.618,"c4":0.43},{"time":3.1667,"angle":-3.03,"curve":0.351,"c2":0.4,"c3":0.757},{"time":3.8333,"angle":2.05,"curve":0.29,"c3":0.629,"c4":0.38},{"time":4,"angle":1.37}]},"躯干2":{"rotate":[{"angle":-0.26,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.4,"angle":0.14,"curve":0.25,"c3":0.75},{"time":1.4,"angle":-0.94,"curve":0.245,"c3":0.637,"c4":0.56},{"time":2,"angle":-0.26,"curve":0.381,"c2":0.55,"c3":0.742},{"time":2.4,"angle":0.14,"curve":0.25,"c3":0.75},{"time":3.4,"angle":-0.94,"curve":0.245,"c3":0.637,"c4":0.56},{"time":4,"angle":-0.26}]},"脸":{"rotate":[{"angle":-0.72,"curve":0.337,"c2":0.35,"c3":0.758},{"time":0.7333,"angle":0.14,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.4,"angle":-0.63,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.7,"angle":-0.94,"curve":0.273,"c3":0.62,"c4":0.41},{"time":2,"angle":-0.72,"curve":0.337,"c2":0.35,"c3":0.758},{"time":2.7333,"angle":0.14,"curve":0.243,"c3":0.649,"c4":0.6},{"time":3.4,"angle":-0.63,"curve":0.382,"c2":0.57,"c3":0.735},{"time":3.7333,"angle":-0.94,"curve":0.273,"c3":0.62,"c4":0.41},{"time":4,"angle":-0.72}]},"手掌1":{"rotate":[{"angle":0.69,"curve":0.24,"c3":0.376},{"time":0.3667,"angle":-4.09,"curve":0.307,"c3":0.676,"c4":0.78},{"time":0.6667,"angle":2.68,"curve":0.342,"c2":0.63,"c3":0.677},{"time":1,"angle":0.69,"curve":0.24,"c3":0.376},{"time":1.3667,"angle":-4.09,"curve":0.307,"c3":0.676,"c4":0.78},{"time":1.6667,"angle":2.68,"curve":0.342,"c2":0.63,"c3":0.677},{"time":2,"angle":0.69,"curve":0.24,"c3":0.376},{"time":2.3667,"angle":-4.09,"curve":0.307,"c3":0.676,"c4":0.78},{"time":2.6667,"angle":2.68,"curve":0.342,"c2":0.63,"c3":0.677},{"time":3,"angle":0.69,"curve":0.24,"c3":0.376},{"time":3.3667,"angle":-4.09,"curve":0.307,"c3":0.676,"c4":0.78},{"time":3.6667,"angle":2.68,"curve":0.342,"c2":0.63,"c3":0.677},{"time":4,"angle":0.69}]},"扇子":{"rotate":[{"angle":-6,"curve":0.382,"c2":0.58,"c3":0.731},{"time":0.1,"angle":-6.25,"curve":0.25,"c3":0.75},{"time":0.4667,"angle":-15.6,"curve":0.307,"c3":0.676,"c4":0.78},{"time":0.7667,"angle":-5.76,"curve":0.25,"c3":0.75},{"time":1.1,"angle":-6.25,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":-15.6,"curve":0.307,"c3":0.676,"c4":0.78},{"time":1.7667,"angle":-5.23,"curve":0.243,"c3":0.655,"c4":0.63},{"time":2,"angle":-6,"curve":0.382,"c2":0.58,"c3":0.731},{"time":2.1,"angle":-6.25,"curve":0.25,"c3":0.75},{"time":2.4667,"angle":-15.6,"curve":0.307,"c3":0.676,"c4":0.78},{"time":2.7667,"angle":-5.76,"curve":0.25,"c3":0.75},{"time":3.1,"angle":-6.25,"curve":0.25,"c3":0.75},{"time":3.4667,"angle":-15.6,"curve":0.307,"c3":0.676,"c4":0.78},{"time":3.7667,"angle":-5.23,"curve":0.243,"c3":0.655,"c4":0.63},{"time":4,"angle":-6}]},"ik1":{"translate":[{"x":-6.1,"y":-1.19,"curve":0.346,"c2":0.52,"c3":0.69},{"time":0.2333,"x":-11.13,"y":-2.17,"curve":0.309,"c3":0.691},{"time":0.7333,"curve":0.309,"c3":0.691},{"time":1.2333,"x":-11.13,"y":-2.17,"curve":0.309,"c3":0.691},{"time":1.7333,"curve":0.308,"c3":0.655,"c4":0.52},{"time":2,"x":-6.1,"y":-1.19,"curve":0.346,"c2":0.52,"c3":0.69},{"time":2.2333,"x":-11.13,"y":-2.17,"curve":0.309,"c3":0.691},{"time":2.7333,"curve":0.309,"c3":0.691},{"time":3.2333,"x":-11.13,"y":-2.17,"curve":0.309,"c3":0.691},{"time":3.7333,"curve":0.308,"c3":0.655,"c4":0.52},{"time":4,"x":-6.1,"y":-1.19}]},"辫子":{"rotate":[{"angle":1.98,"curve":0.25,"c3":0.75},{"time":1,"angle":5.23,"curve":0.25,"c3":0.75},{"time":2,"angle":1.98,"curve":0.25,"c3":0.75},{"time":3,"angle":5.23,"curve":0.25,"c3":0.75},{"time":4,"angle":1.98}]},"辫子2":{"rotate":[{"angle":2.52,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.2333,"angle":1.98,"curve":0.25,"c3":0.75},{"time":1.2333,"angle":5.23,"curve":0.242,"c3":0.671,"c4":0.68},{"time":2,"angle":2.52,"curve":0.378,"c2":0.61,"c3":0.722},{"time":2.2333,"angle":1.98,"curve":0.25,"c3":0.75},{"time":3.2333,"angle":5.23,"curve":0.242,"c3":0.671,"c4":0.68},{"time":4,"angle":2.52}]},"辫子3":{"rotate":[{"angle":3.46,"curve":0.378,"c2":0.52,"c3":0.748},{"time":0.4667,"angle":1.98,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":5.23,"curve":0.248,"c3":0.628,"c4":0.52},{"time":2,"angle":3.46,"curve":0.378,"c2":0.52,"c3":0.748},{"time":2.4667,"angle":1.98,"curve":0.25,"c3":0.75},{"time":3.4667,"angle":5.23,"curve":0.248,"c3":0.628,"c4":0.52},{"time":4,"angle":3.46}]},"辫子4":{"rotate":[{"angle":4.57,"curve":0.337,"c2":0.35,"c3":0.758},{"time":0.7333,"angle":1.98,"curve":0.25,"c3":0.75},{"time":1.7333,"angle":5.23,"curve":0.273,"c3":0.62,"c4":0.41},{"time":2,"angle":4.57,"curve":0.337,"c2":0.35,"c3":0.758},{"time":2.7333,"angle":1.98,"curve":0.25,"c3":0.75},{"time":3.7333,"angle":5.23,"curve":0.273,"c3":0.62,"c4":0.41},{"time":4,"angle":4.57}]},"后发":{"rotate":[{"angle":0.28,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1667,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":2.85,"curve":0.243,"c3":0.689,"c4":0.75},{"time":2,"angle":0.28,"curve":0.371,"c2":0.62,"c3":0.71},{"time":2.1667,"curve":0.25,"c3":0.75},{"time":3.1667,"angle":2.85,"curve":0.243,"c3":0.689,"c4":0.75},{"time":4,"angle":0.28}]},"后发2":{"rotate":[{"angle":1.04,"curve":0.345,"c2":0.37,"c3":0.683,"c4":0.72},{"time":0.1667,"angle":0.47,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.4,"curve":0.25,"c3":0.75},{"time":1.4,"angle":2.85,"curve":0.245,"c3":0.637,"c4":0.56},{"time":2,"angle":1.04,"curve":0.345,"c2":0.37,"c3":0.683,"c4":0.72},{"time":2.1667,"angle":0.47,"curve":0.378,"c2":0.61,"c3":0.722},{"time":2.4,"curve":0.25,"c3":0.75},{"time":3.4,"angle":2.85,"curve":0.245,"c3":0.637,"c4":0.56},{"time":4,"angle":1.04}]},"后发3":{"rotate":[{"angle":1.8,"curve":0.33,"c2":0.32,"c3":0.667,"c4":0.67},{"time":0.1667,"angle":1.18,"curve":0.38,"c2":0.53,"c3":0.745},{"time":0.6,"curve":0.25,"c3":0.75},{"time":1.6,"angle":2.85,"curve":0.258,"c3":0.619,"c4":0.45},{"time":2,"angle":1.8,"curve":0.33,"c2":0.32,"c3":0.667,"c4":0.67},{"time":2.1667,"angle":1.18,"curve":0.38,"c2":0.53,"c3":0.745},{"time":2.6,"curve":0.25,"c3":0.75},{"time":3.6,"angle":2.85,"curve":0.258,"c3":0.619,"c4":0.45},{"time":4,"angle":1.8}]},"刘海9":{"rotate":[{"angle":-2.62,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.3333,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":1.3333,"angle":4.27,"curve":0.243,"c3":0.649,"c4":0.6},{"time":2,"angle":-2.62,"curve":0.382,"c2":0.57,"c3":0.735},{"time":2.3333,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":3.3333,"angle":4.27,"curve":0.243,"c3":0.649,"c4":0.6},{"time":4,"angle":-2.62}]},"刘海10":{"rotate":[{"angle":0.7,"curve":0.335,"c2":0.34,"c3":0.685,"c4":0.72},{"time":0.3333,"angle":-3.4,"curve":0.38,"c2":0.59,"c3":0.727},{"time":0.6,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":1.6,"angle":4.27,"curve":0.258,"c3":0.619,"c4":0.45},{"time":2,"angle":0.7,"curve":0.335,"c2":0.34,"c3":0.685,"c4":0.72},{"time":2.3333,"angle":-3.4,"curve":0.38,"c2":0.59,"c3":0.727},{"time":2.6,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":3.6,"angle":4.27,"curve":0.258,"c3":0.619,"c4":0.45},{"time":4,"angle":0.7}]},"刘海11":{"rotate":[{"angle":3.89,"curve":0.287,"c2":0.16,"c3":0.638,"c4":0.56},{"time":0.3333,"angle":0.31,"curve":0.367,"c2":0.46,"c3":0.754},{"time":0.9,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":1.9,"angle":4.27,"curve":0.305,"c3":0.64,"c4":0.36},{"time":2,"angle":3.89,"curve":0.287,"c2":0.16,"c3":0.638,"c4":0.56},{"time":2.3333,"angle":0.31,"curve":0.367,"c2":0.46,"c3":0.754},{"time":2.9,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":3.9,"angle":4.27,"curve":0.305,"c3":0.64,"c4":0.36},{"time":4,"angle":3.89}]},"刘海2":{"rotate":[{"angle":-0.38,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.4,"angle":-1.09,"curve":0.25,"c3":0.75},{"time":1.4,"angle":0.84,"curve":0.245,"c3":0.637,"c4":0.56},{"time":2,"angle":-0.38,"curve":0.381,"c2":0.55,"c3":0.742},{"time":2.4,"angle":-1.09,"curve":0.25,"c3":0.75},{"time":3.4,"angle":0.84,"curve":0.245,"c3":0.637,"c4":0.56},{"time":4,"angle":-0.38}]},"刘海3":{"rotate":[{"angle":0.21,"curve":0.357,"c2":0.42,"c3":0.756},{"time":0.6333,"angle":-1.09,"curve":0.242,"c3":0.671,"c4":0.68},{"time":1.4,"angle":0.52,"curve":0.378,"c2":0.61,"c3":0.722},{"time":1.6333,"angle":0.84,"curve":0.261,"c3":0.618,"c4":0.44},{"time":2,"angle":0.21,"curve":0.357,"c2":0.42,"c3":0.756},{"time":2.6333,"angle":-1.09,"curve":0.242,"c3":0.671,"c4":0.68},{"time":3.4,"angle":0.52,"curve":0.378,"c2":0.61,"c3":0.722},{"time":3.6333,"angle":0.84,"curve":0.261,"c3":0.618,"c4":0.44},{"time":4,"angle":0.21}]},"刘海4":{"rotate":[{"angle":0.76,"curve":0.289,"c2":0.17,"c3":0.755},{"time":0.9,"angle":-1.09,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.4,"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":1.9,"angle":0.84,"curve":0.305,"c3":0.64,"c4":0.36},{"time":2,"angle":0.76,"curve":0.289,"c2":0.17,"c3":0.755},{"time":2.9,"angle":-1.09,"curve":0.25,"c3":0.625,"c4":0.5},{"time":3.4,"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":3.9,"angle":0.84,"curve":0.305,"c3":0.64,"c4":0.36},{"time":4,"angle":0.76}]},"刘海5":{"rotate":[{"angle":-0.9,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1667,"angle":-1.09,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":0.84,"curve":0.243,"c3":0.689,"c4":0.75},{"time":2,"angle":-0.9,"curve":0.371,"c2":0.62,"c3":0.71},{"time":2.1667,"angle":-1.09,"curve":0.25,"c3":0.75},{"time":3.1667,"angle":0.84,"curve":0.243,"c3":0.689,"c4":0.75},{"time":4,"angle":-0.9}]},"刘海6":{"rotate":[{"angle":-0.54,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.3333,"angle":-1.09,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.1667,"angle":0.66,"curve":0.371,"c2":0.62,"c3":0.71},{"time":1.3333,"angle":0.84,"curve":0.243,"c3":0.649,"c4":0.6},{"time":2,"angle":-0.54,"curve":0.382,"c2":0.57,"c3":0.735},{"time":2.3333,"angle":-1.09,"curve":0.243,"c3":0.689,"c4":0.75},{"time":3.1667,"angle":0.66,"curve":0.371,"c2":0.62,"c3":0.71},{"time":3.3333,"angle":0.84,"curve":0.243,"c3":0.649,"c4":0.6},{"time":4,"angle":-0.54}]},"刘海7":{"rotate":[{"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.5,"angle":-1.09,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.1667,"angle":0.3,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.5,"angle":0.84,"curve":0.25,"c3":0.625,"c4":0.5},{"time":2,"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":2.5,"angle":-1.09,"curve":0.243,"c3":0.649,"c4":0.6},{"time":3.1667,"angle":0.3,"curve":0.382,"c2":0.57,"c3":0.735},{"time":3.5,"angle":0.84,"curve":0.25,"c3":0.625,"c4":0.5},{"time":4,"angle":-0.12}]},"刘海8":{"rotate":[{"angle":0.3,"curve":0.351,"c2":0.4,"c3":0.757},{"time":0.6667,"angle":-1.09,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.1667,"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":1.6667,"angle":0.84,"curve":0.265,"c3":0.618,"c4":0.43},{"time":2,"angle":0.3,"curve":0.351,"c2":0.4,"c3":0.757},{"time":2.6667,"angle":-1.09,"curve":0.25,"c3":0.625,"c4":0.5},{"time":3.1667,"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":3.6667,"angle":0.84,"curve":0.265,"c3":0.618,"c4":0.43},{"time":4,"angle":0.3}]},"躯干3":{"rotate":[{"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1,"angle":3.39,"curve":0.25,"c3":0.75},{"time":2,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":3,"angle":3.39,"curve":0.25,"c3":0.75},{"time":4,"angle":-2.11}]},"躯干4":{"rotate":[{"angle":-1.39,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.2,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.2,"angle":3.39,"curve":0.243,"c3":0.68,"c4":0.71},{"time":2,"angle":-1.39,"curve":0.375,"c2":0.62,"c3":0.716},{"time":2.2,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":3.2,"angle":3.39,"curve":0.243,"c3":0.68,"c4":0.71},{"time":4,"angle":-1.39}]},"躯干5":{"rotate":[{"angle":-1.39,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.2,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.2,"angle":3.39,"curve":0.243,"c3":0.68,"c4":0.71},{"time":2,"angle":-1.39,"curve":0.375,"c2":0.62,"c3":0.716},{"time":2.2,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":3.2,"angle":3.39,"curve":0.243,"c3":0.68,"c4":0.71},{"time":4,"angle":-1.39}]},"躯干6":{"rotate":[{"angle":-0.35,"curve":0.353,"c2":0.4,"c3":0.692,"c4":0.76},{"time":0.2,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.3667,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.3667,"angle":3.39,"curve":0.244,"c3":0.643,"c4":0.58},{"time":2,"angle":-0.35,"curve":0.353,"c2":0.4,"c3":0.692,"c4":0.76},{"time":2.2,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":2.3667,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":3.3667,"angle":3.39,"curve":0.244,"c3":0.643,"c4":0.58},{"time":4,"angle":-0.35}]},"躯干7":{"rotate":[{"angle":-0.32,"curve":0.382,"c2":0.56,"c3":0.739},{"time":0.3667,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.3667,"angle":3.39,"curve":0.244,"c3":0.643,"c4":0.58},{"time":2,"angle":-0.32,"curve":0.382,"c2":0.56,"c3":0.739},{"time":2.3667,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":3.3667,"angle":3.39,"curve":0.244,"c3":0.643,"c4":0.58},{"time":4,"angle":-0.32}]},"躯干8":{"rotate":[{"angle":0.85,"curve":0.349,"c2":0.38,"c3":0.703,"c4":0.79},{"time":0.3667,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.5333,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.5333,"angle":3.39,"curve":0.252,"c3":0.622,"c4":0.48},{"time":2,"angle":0.85,"curve":0.349,"c2":0.38,"c3":0.703,"c4":0.79},{"time":2.3667,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":2.5333,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":3.5333,"angle":3.39,"curve":0.252,"c3":0.622,"c4":0.48},{"time":4,"angle":0.85}]},"躯干9":{"rotate":[{"angle":0.88,"curve":0.372,"c2":0.48,"c3":0.752},{"time":0.5333,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.5333,"angle":3.39,"curve":0.252,"c3":0.622,"c4":0.48},{"time":2,"angle":0.88,"curve":0.372,"c2":0.48,"c3":0.752},{"time":2.5333,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":3.5333,"angle":3.39,"curve":0.252,"c3":0.622,"c4":0.48},{"time":4,"angle":0.88}]},"躯干10":{"rotate":[{"angle":2.04,"curve":0.328,"c2":0.32,"c3":0.705,"c4":0.79},{"time":0.5333,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.7,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.7,"angle":3.39,"curve":0.269,"c3":0.618,"c4":0.42},{"time":2,"angle":2.04,"curve":0.328,"c2":0.32,"c3":0.705,"c4":0.79},{"time":2.5333,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":2.7,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":3.7,"angle":3.39,"curve":0.269,"c3":0.618,"c4":0.42},{"time":4,"angle":2.04}]},"眼珠":{"translate":[{"time":0.3667,"curve":0.25,"c3":0.75},{"time":0.4,"x":-0.05,"y":-2.05,"curve":"stepped"},{"time":1.4333,"x":-0.05,"y":-2.05,"curve":0.25,"c3":0.75},{"time":1.4667,"curve":"stepped"},{"time":2.3667,"curve":0.25,"c3":0.75},{"time":2.4,"x":-0.05,"y":-2.05,"curve":"stepped"},{"time":3.4333,"x":-0.05,"y":-2.05,"curve":0.25,"c3":0.75},{"time":3.4667}]},"眼框":{"scale":[{"time":1.4333,"curve":0.25,"c3":0.75},{"time":1.4667,"y":0.498,"curve":0.25,"c3":0.75},{"time":1.5667,"y":0.56,"curve":0.25,"c3":0.75},{"time":1.6,"y":1.034,"curve":0.25,"c3":0.75},{"time":1.7}]},"root":{"translate":[{"x":-657.87,"y":422.42}],"scale":[{"x":0.54,"y":0.54}]}}},"talk_in":{"slots":{"眼框":{"color":[{"time":1.5,"color":"ffffff00","curve":"stepped"},{"time":1.5667,"color":"ffffffff"}]},"眼珠":{"color":[{"time":1.4667,"color":"ffffff00","curve":"stepped"},{"time":1.5667,"color":"ffffffff"}]},"闭眼":{"color":[{"time":1.5,"color":"ffffffff","curve":"stepped"},{"time":1.5667,"color":"ffffff00"}]}},"bones":{"躯干":{"translate":[{"x":-0.77,"curve":0.25,"c3":0.75},{"time":1,"x":6.61,"curve":0.25,"c3":0.75},{"time":2,"x":-0.77,"curve":0.25,"c3":0.75},{"time":3,"x":6.61,"curve":0.25,"c3":0.75},{"time":4,"x":-0.77}]},"肩膀披风1":{"rotate":[{"angle":-3.03,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.3333,"angle":-5.05,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.1667,"angle":1.37,"curve":0.371,"c2":0.62,"c3":0.71},{"time":1.3333,"angle":2.05,"curve":0.243,"c3":0.649,"c4":0.6},{"time":2,"angle":-3.03,"curve":0.382,"c2":0.57,"c3":0.735},{"time":2.3333,"angle":-5.05,"curve":0.243,"c3":0.689,"c4":0.75},{"time":3.1667,"angle":1.37,"curve":0.371,"c2":0.62,"c3":0.71},{"time":3.3333,"angle":2.05,"curve":0.243,"c3":0.649,"c4":0.6},{"time":4,"angle":-3.03}]},"肩膀披风2":{"rotate":[{"angle":0.04,"curve":0.351,"c2":0.4,"c3":0.757},{"time":0.6667,"angle":-5.05,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.1667,"angle":-1.49,"curve":0.338,"c2":0.35,"c3":0.675,"c4":0.69},{"time":1.3333,"angle":0.04,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.6667,"angle":2.05,"curve":0.265,"c3":0.618,"c4":0.43},{"time":2,"angle":0.04,"curve":0.351,"c2":0.4,"c3":0.757},{"time":2.6667,"angle":-5.05,"curve":0.25,"c3":0.625,"c4":0.5},{"time":3.1667,"angle":-1.49,"curve":0.338,"c2":0.35,"c3":0.675,"c4":0.69},{"time":3.3333,"angle":0.04,"curve":0.382,"c2":0.57,"c3":0.735},{"time":3.6667,"angle":2.05,"curve":0.265,"c3":0.618,"c4":0.43},{"time":4,"angle":0.04}]},"肩膀披风3":{"rotate":[{"angle":2.05,"curve":0.25,"c3":0.75},{"time":1,"angle":-5.05,"curve":0.29,"c3":0.629,"c4":0.38},{"time":1.1667,"angle":-4.37,"curve":0.311,"c2":0.25,"c3":0.649,"c4":0.6},{"time":1.3333,"angle":-3.03,"curve":0.351,"c2":0.4,"c3":0.757},{"time":2,"angle":2.05,"curve":0.25,"c3":0.75},{"time":3,"angle":-5.05,"curve":0.29,"c3":0.629,"c4":0.38},{"time":3.1667,"angle":-4.37,"curve":0.311,"c2":0.25,"c3":0.649,"c4":0.6},{"time":3.3333,"angle":-3.03,"curve":0.351,"c2":0.4,"c3":0.757},{"time":4,"angle":2.05}]},"肩膀披风4":{"rotate":[{"angle":-4.36,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1667,"angle":-5.05,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":2.05,"curve":0.243,"c3":0.689,"c4":0.75},{"time":2,"angle":-4.36,"curve":0.371,"c2":0.62,"c3":0.71},{"time":2.1667,"angle":-5.05,"curve":0.25,"c3":0.75},{"time":3.1667,"angle":2.05,"curve":0.243,"c3":0.689,"c4":0.75},{"time":4,"angle":-4.36}]},"肩膀披风5":{"rotate":[{"angle":-1.5,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.5,"angle":-5.05,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.1667,"angle":0.04,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.5,"angle":2.05,"curve":0.25,"c3":0.625,"c4":0.5},{"time":2,"angle":-1.5,"curve":0.375,"c2":0.5,"c3":0.75},{"time":2.5,"angle":-5.05,"curve":0.243,"c3":0.649,"c4":0.6},{"time":3.1667,"angle":0.04,"curve":0.382,"c2":0.57,"c3":0.735},{"time":3.5,"angle":2.05,"curve":0.25,"c3":0.625,"c4":0.5},{"time":4,"angle":-1.5}]},"肩膀披风6":{"rotate":[{"angle":1.37,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.8333,"angle":-5.05,"curve":0.265,"c3":0.618,"c4":0.43},{"time":1.1667,"angle":-3.03,"curve":0.351,"c2":0.4,"c3":0.757},{"time":1.8333,"angle":2.05,"curve":0.29,"c3":0.629,"c4":0.38},{"time":2,"angle":1.37,"curve":0.311,"c2":0.25,"c3":0.757},{"time":2.8333,"angle":-5.05,"curve":0.265,"c3":0.618,"c4":0.43},{"time":3.1667,"angle":-3.03,"curve":0.351,"c2":0.4,"c3":0.757},{"time":3.8333,"angle":2.05,"curve":0.29,"c3":0.629,"c4":0.38},{"time":4,"angle":1.37}]},"躯干2":{"rotate":[{"angle":-0.26,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.4,"angle":0.14,"curve":0.25,"c3":0.75},{"time":1.4,"angle":-0.94,"curve":0.245,"c3":0.637,"c4":0.56},{"time":2,"angle":-0.26,"curve":0.381,"c2":0.55,"c3":0.742},{"time":2.4,"angle":0.14,"curve":0.25,"c3":0.75},{"time":3.4,"angle":-0.94,"curve":0.245,"c3":0.637,"c4":0.56},{"time":4,"angle":-0.26}]},"脸":{"rotate":[{"angle":-0.72,"curve":0.337,"c2":0.35,"c3":0.758},{"time":0.7333,"angle":0.14,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.4,"angle":-0.63,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.7,"angle":-0.94,"curve":0.273,"c3":0.62,"c4":0.41},{"time":2,"angle":-0.72,"curve":0.337,"c2":0.35,"c3":0.758},{"time":2.7333,"angle":0.14,"curve":0.243,"c3":0.649,"c4":0.6},{"time":3.4,"angle":-0.63,"curve":0.382,"c2":0.57,"c3":0.735},{"time":3.7333,"angle":-0.94,"curve":0.273,"c3":0.62,"c4":0.41},{"time":4,"angle":-0.72}]},"手掌1":{"rotate":[{"angle":0.69,"curve":0.24,"c3":0.376},{"time":0.3667,"angle":-4.09,"curve":0.307,"c3":0.676,"c4":0.78},{"time":0.6667,"angle":2.68,"curve":0.342,"c2":0.63,"c3":0.677},{"time":1,"angle":0.69,"curve":0.24,"c3":0.376},{"time":1.3667,"angle":-4.09,"curve":0.307,"c3":0.676,"c4":0.78},{"time":1.6667,"angle":2.68,"curve":0.342,"c2":0.63,"c3":0.677},{"time":2,"angle":0.69,"curve":0.24,"c3":0.376},{"time":2.3667,"angle":-4.09,"curve":0.307,"c3":0.676,"c4":0.78},{"time":2.6667,"angle":2.68,"curve":0.342,"c2":0.63,"c3":0.677},{"time":3,"angle":0.69,"curve":0.24,"c3":0.376},{"time":3.3667,"angle":-4.09,"curve":0.307,"c3":0.676,"c4":0.78},{"time":3.6667,"angle":2.68,"curve":0.342,"c2":0.63,"c3":0.677},{"time":4,"angle":0.69}]},"扇子":{"rotate":[{"angle":-6,"curve":0.382,"c2":0.58,"c3":0.731},{"time":0.1,"angle":-6.25,"curve":0.25,"c3":0.75},{"time":0.4667,"angle":-15.6,"curve":0.307,"c3":0.676,"c4":0.78},{"time":0.7667,"angle":-5.76,"curve":0.25,"c3":0.75},{"time":1.1,"angle":-6.25,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":-15.6,"curve":0.307,"c3":0.676,"c4":0.78},{"time":1.7667,"angle":-5.23,"curve":0.243,"c3":0.655,"c4":0.63},{"time":2,"angle":-6,"curve":0.382,"c2":0.58,"c3":0.731},{"time":2.1,"angle":-6.25,"curve":0.25,"c3":0.75},{"time":2.4667,"angle":-15.6,"curve":0.307,"c3":0.676,"c4":0.78},{"time":2.7667,"angle":-5.76,"curve":0.25,"c3":0.75},{"time":3.1,"angle":-6.25,"curve":0.25,"c3":0.75},{"time":3.4667,"angle":-15.6,"curve":0.307,"c3":0.676,"c4":0.78},{"time":3.7667,"angle":-5.23,"curve":0.243,"c3":0.655,"c4":0.63},{"time":4,"angle":-6}]},"ik1":{"translate":[{"x":-6.1,"y":-1.19,"curve":0.346,"c2":0.52,"c3":0.69},{"time":0.2333,"x":-11.13,"y":-2.17,"curve":0.309,"c3":0.691},{"time":0.7333,"curve":0.309,"c3":0.691},{"time":1.2333,"x":-11.13,"y":-2.17,"curve":0.309,"c3":0.691},{"time":1.7333,"curve":0.308,"c3":0.655,"c4":0.52},{"time":2,"x":-6.1,"y":-1.19,"curve":0.346,"c2":0.52,"c3":0.69},{"time":2.2333,"x":-11.13,"y":-2.17,"curve":0.309,"c3":0.691},{"time":2.7333,"curve":0.309,"c3":0.691},{"time":3.2333,"x":-11.13,"y":-2.17,"curve":0.309,"c3":0.691},{"time":3.7333,"curve":0.308,"c3":0.655,"c4":0.52},{"time":4,"x":-6.1,"y":-1.19}]},"辫子":{"rotate":[{"angle":1.98,"curve":0.25,"c3":0.75},{"time":1,"angle":5.23,"curve":0.25,"c3":0.75},{"time":2,"angle":1.98,"curve":0.25,"c3":0.75},{"time":3,"angle":5.23,"curve":0.25,"c3":0.75},{"time":4,"angle":1.98}]},"辫子2":{"rotate":[{"angle":2.52,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.2333,"angle":1.98,"curve":0.25,"c3":0.75},{"time":1.2333,"angle":5.23,"curve":0.242,"c3":0.671,"c4":0.68},{"time":2,"angle":2.52,"curve":0.378,"c2":0.61,"c3":0.722},{"time":2.2333,"angle":1.98,"curve":0.25,"c3":0.75},{"time":3.2333,"angle":5.23,"curve":0.242,"c3":0.671,"c4":0.68},{"time":4,"angle":2.52}]},"辫子3":{"rotate":[{"angle":3.46,"curve":0.378,"c2":0.52,"c3":0.748},{"time":0.4667,"angle":1.98,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":5.23,"curve":0.248,"c3":0.628,"c4":0.52},{"time":2,"angle":3.46,"curve":0.378,"c2":0.52,"c3":0.748},{"time":2.4667,"angle":1.98,"curve":0.25,"c3":0.75},{"time":3.4667,"angle":5.23,"curve":0.248,"c3":0.628,"c4":0.52},{"time":4,"angle":3.46}]},"辫子4":{"rotate":[{"angle":4.57,"curve":0.337,"c2":0.35,"c3":0.758},{"time":0.7333,"angle":1.98,"curve":0.25,"c3":0.75},{"time":1.7333,"angle":5.23,"curve":0.273,"c3":0.62,"c4":0.41},{"time":2,"angle":4.57,"curve":0.337,"c2":0.35,"c3":0.758},{"time":2.7333,"angle":1.98,"curve":0.25,"c3":0.75},{"time":3.7333,"angle":5.23,"curve":0.273,"c3":0.62,"c4":0.41},{"time":4,"angle":4.57}]},"后发":{"rotate":[{"angle":0.28,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1667,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":2.85,"curve":0.243,"c3":0.689,"c4":0.75},{"time":2,"angle":0.28,"curve":0.371,"c2":0.62,"c3":0.71},{"time":2.1667,"curve":0.25,"c3":0.75},{"time":3.1667,"angle":2.85,"curve":0.243,"c3":0.689,"c4":0.75},{"time":4,"angle":0.28}]},"后发2":{"rotate":[{"angle":1.04,"curve":0.345,"c2":0.37,"c3":0.683,"c4":0.72},{"time":0.1667,"angle":0.47,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.4,"curve":0.25,"c3":0.75},{"time":1.4,"angle":2.85,"curve":0.245,"c3":0.637,"c4":0.56},{"time":2,"angle":1.04,"curve":0.345,"c2":0.37,"c3":0.683,"c4":0.72},{"time":2.1667,"angle":0.47,"curve":0.378,"c2":0.61,"c3":0.722},{"time":2.4,"curve":0.25,"c3":0.75},{"time":3.4,"angle":2.85,"curve":0.245,"c3":0.637,"c4":0.56},{"time":4,"angle":1.04}]},"后发3":{"rotate":[{"angle":1.8,"curve":0.33,"c2":0.32,"c3":0.667,"c4":0.67},{"time":0.1667,"angle":1.18,"curve":0.38,"c2":0.53,"c3":0.745},{"time":0.6,"curve":0.25,"c3":0.75},{"time":1.6,"angle":2.85,"curve":0.258,"c3":0.619,"c4":0.45},{"time":2,"angle":1.8,"curve":0.33,"c2":0.32,"c3":0.667,"c4":0.67},{"time":2.1667,"angle":1.18,"curve":0.38,"c2":0.53,"c3":0.745},{"time":2.6,"curve":0.25,"c3":0.75},{"time":3.6,"angle":2.85,"curve":0.258,"c3":0.619,"c4":0.45},{"time":4,"angle":1.8}]},"刘海9":{"rotate":[{"angle":-2.62,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.3333,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":1.3333,"angle":4.27,"curve":0.243,"c3":0.649,"c4":0.6},{"time":2,"angle":-2.62,"curve":0.382,"c2":0.57,"c3":0.735},{"time":2.3333,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":3.3333,"angle":4.27,"curve":0.243,"c3":0.649,"c4":0.6},{"time":4,"angle":-2.62}]},"刘海10":{"rotate":[{"angle":0.7,"curve":0.335,"c2":0.34,"c3":0.685,"c4":0.72},{"time":0.3333,"angle":-3.4,"curve":0.38,"c2":0.59,"c3":0.727},{"time":0.6,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":1.6,"angle":4.27,"curve":0.258,"c3":0.619,"c4":0.45},{"time":2,"angle":0.7,"curve":0.335,"c2":0.34,"c3":0.685,"c4":0.72},{"time":2.3333,"angle":-3.4,"curve":0.38,"c2":0.59,"c3":0.727},{"time":2.6,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":3.6,"angle":4.27,"curve":0.258,"c3":0.619,"c4":0.45},{"time":4,"angle":0.7}]},"刘海11":{"rotate":[{"angle":3.89,"curve":0.287,"c2":0.16,"c3":0.638,"c4":0.56},{"time":0.3333,"angle":0.31,"curve":0.367,"c2":0.46,"c3":0.754},{"time":0.9,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":1.9,"angle":4.27,"curve":0.305,"c3":0.64,"c4":0.36},{"time":2,"angle":3.89,"curve":0.287,"c2":0.16,"c3":0.638,"c4":0.56},{"time":2.3333,"angle":0.31,"curve":0.367,"c2":0.46,"c3":0.754},{"time":2.9,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":3.9,"angle":4.27,"curve":0.305,"c3":0.64,"c4":0.36},{"time":4,"angle":3.89}]},"刘海2":{"rotate":[{"angle":-0.38,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.4,"angle":-1.09,"curve":0.25,"c3":0.75},{"time":1.4,"angle":0.84,"curve":0.245,"c3":0.637,"c4":0.56},{"time":2,"angle":-0.38,"curve":0.381,"c2":0.55,"c3":0.742},{"time":2.4,"angle":-1.09,"curve":0.25,"c3":0.75},{"time":3.4,"angle":0.84,"curve":0.245,"c3":0.637,"c4":0.56},{"time":4,"angle":-0.38}]},"刘海3":{"rotate":[{"angle":0.21,"curve":0.357,"c2":0.42,"c3":0.756},{"time":0.6333,"angle":-1.09,"curve":0.242,"c3":0.671,"c4":0.68},{"time":1.4,"angle":0.52,"curve":0.378,"c2":0.61,"c3":0.722},{"time":1.6333,"angle":0.84,"curve":0.261,"c3":0.618,"c4":0.44},{"time":2,"angle":0.21,"curve":0.357,"c2":0.42,"c3":0.756},{"time":2.6333,"angle":-1.09,"curve":0.242,"c3":0.671,"c4":0.68},{"time":3.4,"angle":0.52,"curve":0.378,"c2":0.61,"c3":0.722},{"time":3.6333,"angle":0.84,"curve":0.261,"c3":0.618,"c4":0.44},{"time":4,"angle":0.21}]},"刘海4":{"rotate":[{"angle":0.76,"curve":0.289,"c2":0.17,"c3":0.755},{"time":0.9,"angle":-1.09,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.4,"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":1.9,"angle":0.84,"curve":0.305,"c3":0.64,"c4":0.36},{"time":2,"angle":0.76,"curve":0.289,"c2":0.17,"c3":0.755},{"time":2.9,"angle":-1.09,"curve":0.25,"c3":0.625,"c4":0.5},{"time":3.4,"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":3.9,"angle":0.84,"curve":0.305,"c3":0.64,"c4":0.36},{"time":4,"angle":0.76}]},"刘海5":{"rotate":[{"angle":-0.9,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1667,"angle":-1.09,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":0.84,"curve":0.243,"c3":0.689,"c4":0.75},{"time":2,"angle":-0.9,"curve":0.371,"c2":0.62,"c3":0.71},{"time":2.1667,"angle":-1.09,"curve":0.25,"c3":0.75},{"time":3.1667,"angle":0.84,"curve":0.243,"c3":0.689,"c4":0.75},{"time":4,"angle":-0.9}]},"刘海6":{"rotate":[{"angle":-0.54,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.3333,"angle":-1.09,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.1667,"angle":0.66,"curve":0.371,"c2":0.62,"c3":0.71},{"time":1.3333,"angle":0.84,"curve":0.243,"c3":0.649,"c4":0.6},{"time":2,"angle":-0.54,"curve":0.382,"c2":0.57,"c3":0.735},{"time":2.3333,"angle":-1.09,"curve":0.243,"c3":0.689,"c4":0.75},{"time":3.1667,"angle":0.66,"curve":0.371,"c2":0.62,"c3":0.71},{"time":3.3333,"angle":0.84,"curve":0.243,"c3":0.649,"c4":0.6},{"time":4,"angle":-0.54}]},"刘海7":{"rotate":[{"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.5,"angle":-1.09,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.1667,"angle":0.3,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.5,"angle":0.84,"curve":0.25,"c3":0.625,"c4":0.5},{"time":2,"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":2.5,"angle":-1.09,"curve":0.243,"c3":0.649,"c4":0.6},{"time":3.1667,"angle":0.3,"curve":0.382,"c2":0.57,"c3":0.735},{"time":3.5,"angle":0.84,"curve":0.25,"c3":0.625,"c4":0.5},{"time":4,"angle":-0.12}]},"刘海8":{"rotate":[{"angle":0.3,"curve":0.351,"c2":0.4,"c3":0.757},{"time":0.6667,"angle":-1.09,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.1667,"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":1.6667,"angle":0.84,"curve":0.265,"c3":0.618,"c4":0.43},{"time":2,"angle":0.3,"curve":0.351,"c2":0.4,"c3":0.757},{"time":2.6667,"angle":-1.09,"curve":0.25,"c3":0.625,"c4":0.5},{"time":3.1667,"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":3.6667,"angle":0.84,"curve":0.265,"c3":0.618,"c4":0.43},{"time":4,"angle":0.3}]},"躯干3":{"rotate":[{"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1,"angle":3.39,"curve":0.25,"c3":0.75},{"time":2,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":3,"angle":3.39,"curve":0.25,"c3":0.75},{"time":4,"angle":-2.11}]},"躯干4":{"rotate":[{"angle":-1.39,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.2,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.2,"angle":3.39,"curve":0.243,"c3":0.68,"c4":0.71},{"time":2,"angle":-1.39,"curve":0.375,"c2":0.62,"c3":0.716},{"time":2.2,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":3.2,"angle":3.39,"curve":0.243,"c3":0.68,"c4":0.71},{"time":4,"angle":-1.39}]},"躯干5":{"rotate":[{"angle":-1.39,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.2,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.2,"angle":3.39,"curve":0.243,"c3":0.68,"c4":0.71},{"time":2,"angle":-1.39,"curve":0.375,"c2":0.62,"c3":0.716},{"time":2.2,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":3.2,"angle":3.39,"curve":0.243,"c3":0.68,"c4":0.71},{"time":4,"angle":-1.39}]},"躯干6":{"rotate":[{"angle":-0.35,"curve":0.353,"c2":0.4,"c3":0.692,"c4":0.76},{"time":0.2,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.3667,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.3667,"angle":3.39,"curve":0.244,"c3":0.643,"c4":0.58},{"time":2,"angle":-0.35,"curve":0.353,"c2":0.4,"c3":0.692,"c4":0.76},{"time":2.2,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":2.3667,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":3.3667,"angle":3.39,"curve":0.244,"c3":0.643,"c4":0.58},{"time":4,"angle":-0.35}]},"躯干7":{"rotate":[{"angle":-0.32,"curve":0.382,"c2":0.56,"c3":0.739},{"time":0.3667,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.3667,"angle":3.39,"curve":0.244,"c3":0.643,"c4":0.58},{"time":2,"angle":-0.32,"curve":0.382,"c2":0.56,"c3":0.739},{"time":2.3667,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":3.3667,"angle":3.39,"curve":0.244,"c3":0.643,"c4":0.58},{"time":4,"angle":-0.32}]},"躯干8":{"rotate":[{"angle":0.85,"curve":0.349,"c2":0.38,"c3":0.703,"c4":0.79},{"time":0.3667,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.5333,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.5333,"angle":3.39,"curve":0.252,"c3":0.622,"c4":0.48},{"time":2,"angle":0.85,"curve":0.349,"c2":0.38,"c3":0.703,"c4":0.79},{"time":2.3667,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":2.5333,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":3.5333,"angle":3.39,"curve":0.252,"c3":0.622,"c4":0.48},{"time":4,"angle":0.85}]},"躯干9":{"rotate":[{"angle":0.88,"curve":0.372,"c2":0.48,"c3":0.752},{"time":0.5333,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.5333,"angle":3.39,"curve":0.252,"c3":0.622,"c4":0.48},{"time":2,"angle":0.88,"curve":0.372,"c2":0.48,"c3":0.752},{"time":2.5333,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":3.5333,"angle":3.39,"curve":0.252,"c3":0.622,"c4":0.48},{"time":4,"angle":0.88}]},"躯干10":{"rotate":[{"angle":2.04,"curve":0.328,"c2":0.32,"c3":0.705,"c4":0.79},{"time":0.5333,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.7,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.7,"angle":3.39,"curve":0.269,"c3":0.618,"c4":0.42},{"time":2,"angle":2.04,"curve":0.328,"c2":0.32,"c3":0.705,"c4":0.79},{"time":2.5333,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":2.7,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":3.7,"angle":3.39,"curve":0.269,"c3":0.618,"c4":0.42},{"time":4,"angle":2.04}]},"眼珠":{"translate":[{"time":0.3667,"curve":0.25,"c3":0.75},{"time":0.4,"x":-0.05,"y":-2.05,"curve":"stepped"},{"time":1.4333,"x":-0.05,"y":-2.05,"curve":0.25,"c3":0.75},{"time":1.4667,"curve":"stepped"},{"time":2.3667,"curve":0.25,"c3":0.75},{"time":2.4,"x":-0.05,"y":-2.05,"curve":"stepped"},{"time":3.4333,"x":-0.05,"y":-2.05,"curve":0.25,"c3":0.75},{"time":3.4667}]},"眼框":{"scale":[{"time":1.4333,"curve":0.25,"c3":0.75},{"time":1.4667,"y":0.498,"curve":0.25,"c3":0.75},{"time":1.5667,"y":0.56,"curve":0.25,"c3":0.75},{"time":1.6,"y":1.034,"curve":0.25,"c3":0.75},{"time":1.7}]},"root":{"translate":[{"x":-990,"y":570}]},"大桌子B":{"translate":[{"y":-213.15,"curve":0.25,"c3":0.75},{"time":0.1667,"y":12.92,"curve":0.25,"c3":0.75},{"time":0.3667,"y":-2.15,"curve":0.25,"c3":0.75},{"time":0.6333}]},"body":{"rotate":[{"angle":7.68,"curve":"stepped"},{"time":0.2333,"angle":7.68,"curve":0.25,"c3":0.75},{"time":0.5667,"angle":-4.3,"curve":0.25,"c3":0.75},{"time":0.8667,"angle":0.71,"curve":0.25,"c3":0.75},{"time":1.2}],"translate":[{"x":-482.27,"curve":"stepped"},{"time":0.1667,"x":-482.27,"curve":0.25,"c3":0.75},{"time":0.5,"x":38.75,"curve":0.25,"c3":0.75},{"time":0.8,"x":-10.77,"curve":0.25,"c3":0.75},{"time":1.1333}]}}},"talk_off":{"slots":{"眼框":{"color":[{"time":1.5,"color":"ffffff00","curve":"stepped"},{"time":1.5667,"color":"ffffffff"}]},"眼珠":{"color":[{"time":1.4667,"color":"ffffff00","curve":"stepped"},{"time":1.5667,"color":"ffffffff"}]},"闭眼":{"color":[{"time":1.5,"color":"ffffffff","curve":"stepped"},{"time":1.5667,"color":"ffffff00"}]}},"bones":{"躯干":{"translate":[{"x":-0.77,"curve":0.25,"c3":0.75},{"time":1,"x":6.61,"curve":0.25,"c3":0.75},{"time":2,"x":-0.77,"curve":0.25,"c3":0.75},{"time":3,"x":6.61,"curve":0.25,"c3":0.75},{"time":4,"x":-0.77}]},"肩膀披风1":{"rotate":[{"angle":-3.03,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.3333,"angle":-5.05,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.1667,"angle":1.37,"curve":0.371,"c2":0.62,"c3":0.71},{"time":1.3333,"angle":2.05,"curve":0.243,"c3":0.649,"c4":0.6},{"time":2,"angle":-3.03,"curve":0.382,"c2":0.57,"c3":0.735},{"time":2.3333,"angle":-5.05,"curve":0.243,"c3":0.689,"c4":0.75},{"time":3.1667,"angle":1.37,"curve":0.371,"c2":0.62,"c3":0.71},{"time":3.3333,"angle":2.05,"curve":0.243,"c3":0.649,"c4":0.6},{"time":4,"angle":-3.03}]},"肩膀披风2":{"rotate":[{"angle":0.04,"curve":0.351,"c2":0.4,"c3":0.757},{"time":0.6667,"angle":-5.05,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.1667,"angle":-1.49,"curve":0.338,"c2":0.35,"c3":0.675,"c4":0.69},{"time":1.3333,"angle":0.04,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.6667,"angle":2.05,"curve":0.265,"c3":0.618,"c4":0.43},{"time":2,"angle":0.04,"curve":0.351,"c2":0.4,"c3":0.757},{"time":2.6667,"angle":-5.05,"curve":0.25,"c3":0.625,"c4":0.5},{"time":3.1667,"angle":-1.49,"curve":0.338,"c2":0.35,"c3":0.675,"c4":0.69},{"time":3.3333,"angle":0.04,"curve":0.382,"c2":0.57,"c3":0.735},{"time":3.6667,"angle":2.05,"curve":0.265,"c3":0.618,"c4":0.43},{"time":4,"angle":0.04}]},"肩膀披风3":{"rotate":[{"angle":2.05,"curve":0.25,"c3":0.75},{"time":1,"angle":-5.05,"curve":0.29,"c3":0.629,"c4":0.38},{"time":1.1667,"angle":-4.37,"curve":0.311,"c2":0.25,"c3":0.649,"c4":0.6},{"time":1.3333,"angle":-3.03,"curve":0.351,"c2":0.4,"c3":0.757},{"time":2,"angle":2.05,"curve":0.25,"c3":0.75},{"time":3,"angle":-5.05,"curve":0.29,"c3":0.629,"c4":0.38},{"time":3.1667,"angle":-4.37,"curve":0.311,"c2":0.25,"c3":0.649,"c4":0.6},{"time":3.3333,"angle":-3.03,"curve":0.351,"c2":0.4,"c3":0.757},{"time":4,"angle":2.05}]},"肩膀披风4":{"rotate":[{"angle":-4.36,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1667,"angle":-5.05,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":2.05,"curve":0.243,"c3":0.689,"c4":0.75},{"time":2,"angle":-4.36,"curve":0.371,"c2":0.62,"c3":0.71},{"time":2.1667,"angle":-5.05,"curve":0.25,"c3":0.75},{"time":3.1667,"angle":2.05,"curve":0.243,"c3":0.689,"c4":0.75},{"time":4,"angle":-4.36}]},"肩膀披风5":{"rotate":[{"angle":-1.5,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.5,"angle":-5.05,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.1667,"angle":0.04,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.5,"angle":2.05,"curve":0.25,"c3":0.625,"c4":0.5},{"time":2,"angle":-1.5,"curve":0.375,"c2":0.5,"c3":0.75},{"time":2.5,"angle":-5.05,"curve":0.243,"c3":0.649,"c4":0.6},{"time":3.1667,"angle":0.04,"curve":0.382,"c2":0.57,"c3":0.735},{"time":3.5,"angle":2.05,"curve":0.25,"c3":0.625,"c4":0.5},{"time":4,"angle":-1.5}]},"肩膀披风6":{"rotate":[{"angle":1.37,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.8333,"angle":-5.05,"curve":0.265,"c3":0.618,"c4":0.43},{"time":1.1667,"angle":-3.03,"curve":0.351,"c2":0.4,"c3":0.757},{"time":1.8333,"angle":2.05,"curve":0.29,"c3":0.629,"c4":0.38},{"time":2,"angle":1.37,"curve":0.311,"c2":0.25,"c3":0.757},{"time":2.8333,"angle":-5.05,"curve":0.265,"c3":0.618,"c4":0.43},{"time":3.1667,"angle":-3.03,"curve":0.351,"c2":0.4,"c3":0.757},{"time":3.8333,"angle":2.05,"curve":0.29,"c3":0.629,"c4":0.38},{"time":4,"angle":1.37}]},"躯干2":{"rotate":[{"angle":-0.26,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.4,"angle":0.14,"curve":0.25,"c3":0.75},{"time":1.4,"angle":-0.94,"curve":0.245,"c3":0.637,"c4":0.56},{"time":2,"angle":-0.26,"curve":0.381,"c2":0.55,"c3":0.742},{"time":2.4,"angle":0.14,"curve":0.25,"c3":0.75},{"time":3.4,"angle":-0.94,"curve":0.245,"c3":0.637,"c4":0.56},{"time":4,"angle":-0.26}]},"脸":{"rotate":[{"angle":-0.72,"curve":0.337,"c2":0.35,"c3":0.758},{"time":0.7333,"angle":0.14,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.4,"angle":-0.63,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.7,"angle":-0.94,"curve":0.273,"c3":0.62,"c4":0.41},{"time":2,"angle":-0.72,"curve":0.337,"c2":0.35,"c3":0.758},{"time":2.7333,"angle":0.14,"curve":0.243,"c3":0.649,"c4":0.6},{"time":3.4,"angle":-0.63,"curve":0.382,"c2":0.57,"c3":0.735},{"time":3.7333,"angle":-0.94,"curve":0.273,"c3":0.62,"c4":0.41},{"time":4,"angle":-0.72}]},"手掌1":{"rotate":[{"angle":0.69,"curve":0.24,"c3":0.376},{"time":0.3667,"angle":-4.09,"curve":0.307,"c3":0.676,"c4":0.78},{"time":0.6667,"angle":2.68,"curve":0.342,"c2":0.63,"c3":0.677},{"time":1,"angle":0.69,"curve":0.24,"c3":0.376},{"time":1.3667,"angle":-4.09,"curve":0.307,"c3":0.676,"c4":0.78},{"time":1.6667,"angle":2.68,"curve":0.342,"c2":0.63,"c3":0.677},{"time":2,"angle":0.69,"curve":0.24,"c3":0.376},{"time":2.3667,"angle":-4.09,"curve":0.307,"c3":0.676,"c4":0.78},{"time":2.6667,"angle":2.68,"curve":0.342,"c2":0.63,"c3":0.677},{"time":3,"angle":0.69,"curve":0.24,"c3":0.376},{"time":3.3667,"angle":-4.09,"curve":0.307,"c3":0.676,"c4":0.78},{"time":3.6667,"angle":2.68,"curve":0.342,"c2":0.63,"c3":0.677},{"time":4,"angle":0.69}]},"扇子":{"rotate":[{"angle":-6,"curve":0.382,"c2":0.58,"c3":0.731},{"time":0.1,"angle":-6.25,"curve":0.25,"c3":0.75},{"time":0.4667,"angle":-15.6,"curve":0.307,"c3":0.676,"c4":0.78},{"time":0.7667,"angle":-5.76,"curve":0.25,"c3":0.75},{"time":1.1,"angle":-6.25,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":-15.6,"curve":0.307,"c3":0.676,"c4":0.78},{"time":1.7667,"angle":-5.23,"curve":0.243,"c3":0.655,"c4":0.63},{"time":2,"angle":-6,"curve":0.382,"c2":0.58,"c3":0.731},{"time":2.1,"angle":-6.25,"curve":0.25,"c3":0.75},{"time":2.4667,"angle":-15.6,"curve":0.307,"c3":0.676,"c4":0.78},{"time":2.7667,"angle":-5.76,"curve":0.25,"c3":0.75},{"time":3.1,"angle":-6.25,"curve":0.25,"c3":0.75},{"time":3.4667,"angle":-15.6,"curve":0.307,"c3":0.676,"c4":0.78},{"time":3.7667,"angle":-5.23,"curve":0.243,"c3":0.655,"c4":0.63},{"time":4,"angle":-6}]},"ik1":{"translate":[{"x":-6.1,"y":-1.19,"curve":0.346,"c2":0.52,"c3":0.69},{"time":0.2333,"x":-11.13,"y":-2.17,"curve":0.309,"c3":0.691},{"time":0.7333,"curve":0.309,"c3":0.691},{"time":1.2333,"x":-11.13,"y":-2.17,"curve":0.309,"c3":0.691},{"time":1.7333,"curve":0.308,"c3":0.655,"c4":0.52},{"time":2,"x":-6.1,"y":-1.19,"curve":0.346,"c2":0.52,"c3":0.69},{"time":2.2333,"x":-11.13,"y":-2.17,"curve":0.309,"c3":0.691},{"time":2.7333,"curve":0.309,"c3":0.691},{"time":3.2333,"x":-11.13,"y":-2.17,"curve":0.309,"c3":0.691},{"time":3.7333,"curve":0.308,"c3":0.655,"c4":0.52},{"time":4,"x":-6.1,"y":-1.19}]},"辫子":{"rotate":[{"angle":1.98,"curve":0.25,"c3":0.75},{"time":1,"angle":5.23,"curve":0.25,"c3":0.75},{"time":2,"angle":1.98,"curve":0.25,"c3":0.75},{"time":3,"angle":5.23,"curve":0.25,"c3":0.75},{"time":4,"angle":1.98}]},"辫子2":{"rotate":[{"angle":2.52,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.2333,"angle":1.98,"curve":0.25,"c3":0.75},{"time":1.2333,"angle":5.23,"curve":0.242,"c3":0.671,"c4":0.68},{"time":2,"angle":2.52,"curve":0.378,"c2":0.61,"c3":0.722},{"time":2.2333,"angle":1.98,"curve":0.25,"c3":0.75},{"time":3.2333,"angle":5.23,"curve":0.242,"c3":0.671,"c4":0.68},{"time":4,"angle":2.52}]},"辫子3":{"rotate":[{"angle":3.46,"curve":0.378,"c2":0.52,"c3":0.748},{"time":0.4667,"angle":1.98,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":5.23,"curve":0.248,"c3":0.628,"c4":0.52},{"time":2,"angle":3.46,"curve":0.378,"c2":0.52,"c3":0.748},{"time":2.4667,"angle":1.98,"curve":0.25,"c3":0.75},{"time":3.4667,"angle":5.23,"curve":0.248,"c3":0.628,"c4":0.52},{"time":4,"angle":3.46}]},"辫子4":{"rotate":[{"angle":4.57,"curve":0.337,"c2":0.35,"c3":0.758},{"time":0.7333,"angle":1.98,"curve":0.25,"c3":0.75},{"time":1.7333,"angle":5.23,"curve":0.273,"c3":0.62,"c4":0.41},{"time":2,"angle":4.57,"curve":0.337,"c2":0.35,"c3":0.758},{"time":2.7333,"angle":1.98,"curve":0.25,"c3":0.75},{"time":3.7333,"angle":5.23,"curve":0.273,"c3":0.62,"c4":0.41},{"time":4,"angle":4.57}]},"后发":{"rotate":[{"angle":0.28,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1667,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":2.85,"curve":0.243,"c3":0.689,"c4":0.75},{"time":2,"angle":0.28,"curve":0.371,"c2":0.62,"c3":0.71},{"time":2.1667,"curve":0.25,"c3":0.75},{"time":3.1667,"angle":2.85,"curve":0.243,"c3":0.689,"c4":0.75},{"time":4,"angle":0.28}]},"后发2":{"rotate":[{"angle":1.04,"curve":0.345,"c2":0.37,"c3":0.683,"c4":0.72},{"time":0.1667,"angle":0.47,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.4,"curve":0.25,"c3":0.75},{"time":1.4,"angle":2.85,"curve":0.245,"c3":0.637,"c4":0.56},{"time":2,"angle":1.04,"curve":0.345,"c2":0.37,"c3":0.683,"c4":0.72},{"time":2.1667,"angle":0.47,"curve":0.378,"c2":0.61,"c3":0.722},{"time":2.4,"curve":0.25,"c3":0.75},{"time":3.4,"angle":2.85,"curve":0.245,"c3":0.637,"c4":0.56},{"time":4,"angle":1.04}]},"后发3":{"rotate":[{"angle":1.8,"curve":0.33,"c2":0.32,"c3":0.667,"c4":0.67},{"time":0.1667,"angle":1.18,"curve":0.38,"c2":0.53,"c3":0.745},{"time":0.6,"curve":0.25,"c3":0.75},{"time":1.6,"angle":2.85,"curve":0.258,"c3":0.619,"c4":0.45},{"time":2,"angle":1.8,"curve":0.33,"c2":0.32,"c3":0.667,"c4":0.67},{"time":2.1667,"angle":1.18,"curve":0.38,"c2":0.53,"c3":0.745},{"time":2.6,"curve":0.25,"c3":0.75},{"time":3.6,"angle":2.85,"curve":0.258,"c3":0.619,"c4":0.45},{"time":4,"angle":1.8}]},"刘海9":{"rotate":[{"angle":-2.62,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.3333,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":1.3333,"angle":4.27,"curve":0.243,"c3":0.649,"c4":0.6},{"time":2,"angle":-2.62,"curve":0.382,"c2":0.57,"c3":0.735},{"time":2.3333,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":3.3333,"angle":4.27,"curve":0.243,"c3":0.649,"c4":0.6},{"time":4,"angle":-2.62}]},"刘海10":{"rotate":[{"angle":0.7,"curve":0.335,"c2":0.34,"c3":0.685,"c4":0.72},{"time":0.3333,"angle":-3.4,"curve":0.38,"c2":0.59,"c3":0.727},{"time":0.6,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":1.6,"angle":4.27,"curve":0.258,"c3":0.619,"c4":0.45},{"time":2,"angle":0.7,"curve":0.335,"c2":0.34,"c3":0.685,"c4":0.72},{"time":2.3333,"angle":-3.4,"curve":0.38,"c2":0.59,"c3":0.727},{"time":2.6,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":3.6,"angle":4.27,"curve":0.258,"c3":0.619,"c4":0.45},{"time":4,"angle":0.7}]},"刘海11":{"rotate":[{"angle":3.89,"curve":0.287,"c2":0.16,"c3":0.638,"c4":0.56},{"time":0.3333,"angle":0.31,"curve":0.367,"c2":0.46,"c3":0.754},{"time":0.9,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":1.9,"angle":4.27,"curve":0.305,"c3":0.64,"c4":0.36},{"time":2,"angle":3.89,"curve":0.287,"c2":0.16,"c3":0.638,"c4":0.56},{"time":2.3333,"angle":0.31,"curve":0.367,"c2":0.46,"c3":0.754},{"time":2.9,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":3.9,"angle":4.27,"curve":0.305,"c3":0.64,"c4":0.36},{"time":4,"angle":3.89}]},"刘海2":{"rotate":[{"angle":-0.38,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.4,"angle":-1.09,"curve":0.25,"c3":0.75},{"time":1.4,"angle":0.84,"curve":0.245,"c3":0.637,"c4":0.56},{"time":2,"angle":-0.38,"curve":0.381,"c2":0.55,"c3":0.742},{"time":2.4,"angle":-1.09,"curve":0.25,"c3":0.75},{"time":3.4,"angle":0.84,"curve":0.245,"c3":0.637,"c4":0.56},{"time":4,"angle":-0.38}]},"刘海3":{"rotate":[{"angle":0.21,"curve":0.357,"c2":0.42,"c3":0.756},{"time":0.6333,"angle":-1.09,"curve":0.242,"c3":0.671,"c4":0.68},{"time":1.4,"angle":0.52,"curve":0.378,"c2":0.61,"c3":0.722},{"time":1.6333,"angle":0.84,"curve":0.261,"c3":0.618,"c4":0.44},{"time":2,"angle":0.21,"curve":0.357,"c2":0.42,"c3":0.756},{"time":2.6333,"angle":-1.09,"curve":0.242,"c3":0.671,"c4":0.68},{"time":3.4,"angle":0.52,"curve":0.378,"c2":0.61,"c3":0.722},{"time":3.6333,"angle":0.84,"curve":0.261,"c3":0.618,"c4":0.44},{"time":4,"angle":0.21}]},"刘海4":{"rotate":[{"angle":0.76,"curve":0.289,"c2":0.17,"c3":0.755},{"time":0.9,"angle":-1.09,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.4,"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":1.9,"angle":0.84,"curve":0.305,"c3":0.64,"c4":0.36},{"time":2,"angle":0.76,"curve":0.289,"c2":0.17,"c3":0.755},{"time":2.9,"angle":-1.09,"curve":0.25,"c3":0.625,"c4":0.5},{"time":3.4,"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":3.9,"angle":0.84,"curve":0.305,"c3":0.64,"c4":0.36},{"time":4,"angle":0.76}]},"刘海5":{"rotate":[{"angle":-0.9,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1667,"angle":-1.09,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":0.84,"curve":0.243,"c3":0.689,"c4":0.75},{"time":2,"angle":-0.9,"curve":0.371,"c2":0.62,"c3":0.71},{"time":2.1667,"angle":-1.09,"curve":0.25,"c3":0.75},{"time":3.1667,"angle":0.84,"curve":0.243,"c3":0.689,"c4":0.75},{"time":4,"angle":-0.9}]},"刘海6":{"rotate":[{"angle":-0.54,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.3333,"angle":-1.09,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.1667,"angle":0.66,"curve":0.371,"c2":0.62,"c3":0.71},{"time":1.3333,"angle":0.84,"curve":0.243,"c3":0.649,"c4":0.6},{"time":2,"angle":-0.54,"curve":0.382,"c2":0.57,"c3":0.735},{"time":2.3333,"angle":-1.09,"curve":0.243,"c3":0.689,"c4":0.75},{"time":3.1667,"angle":0.66,"curve":0.371,"c2":0.62,"c3":0.71},{"time":3.3333,"angle":0.84,"curve":0.243,"c3":0.649,"c4":0.6},{"time":4,"angle":-0.54}]},"刘海7":{"rotate":[{"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.5,"angle":-1.09,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.1667,"angle":0.3,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.5,"angle":0.84,"curve":0.25,"c3":0.625,"c4":0.5},{"time":2,"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":2.5,"angle":-1.09,"curve":0.243,"c3":0.649,"c4":0.6},{"time":3.1667,"angle":0.3,"curve":0.382,"c2":0.57,"c3":0.735},{"time":3.5,"angle":0.84,"curve":0.25,"c3":0.625,"c4":0.5},{"time":4,"angle":-0.12}]},"刘海8":{"rotate":[{"angle":0.3,"curve":0.351,"c2":0.4,"c3":0.757},{"time":0.6667,"angle":-1.09,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.1667,"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":1.6667,"angle":0.84,"curve":0.265,"c3":0.618,"c4":0.43},{"time":2,"angle":0.3,"curve":0.351,"c2":0.4,"c3":0.757},{"time":2.6667,"angle":-1.09,"curve":0.25,"c3":0.625,"c4":0.5},{"time":3.1667,"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":3.6667,"angle":0.84,"curve":0.265,"c3":0.618,"c4":0.43},{"time":4,"angle":0.3}]},"躯干3":{"rotate":[{"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1,"angle":3.39,"curve":0.25,"c3":0.75},{"time":2,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":3,"angle":3.39,"curve":0.25,"c3":0.75},{"time":4,"angle":-2.11}]},"躯干4":{"rotate":[{"angle":-1.39,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.2,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.2,"angle":3.39,"curve":0.243,"c3":0.68,"c4":0.71},{"time":2,"angle":-1.39,"curve":0.375,"c2":0.62,"c3":0.716},{"time":2.2,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":3.2,"angle":3.39,"curve":0.243,"c3":0.68,"c4":0.71},{"time":4,"angle":-1.39}]},"躯干5":{"rotate":[{"angle":-1.39,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.2,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.2,"angle":3.39,"curve":0.243,"c3":0.68,"c4":0.71},{"time":2,"angle":-1.39,"curve":0.375,"c2":0.62,"c3":0.716},{"time":2.2,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":3.2,"angle":3.39,"curve":0.243,"c3":0.68,"c4":0.71},{"time":4,"angle":-1.39}]},"躯干6":{"rotate":[{"angle":-0.35,"curve":0.353,"c2":0.4,"c3":0.692,"c4":0.76},{"time":0.2,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.3667,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.3667,"angle":3.39,"curve":0.244,"c3":0.643,"c4":0.58},{"time":2,"angle":-0.35,"curve":0.353,"c2":0.4,"c3":0.692,"c4":0.76},{"time":2.2,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":2.3667,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":3.3667,"angle":3.39,"curve":0.244,"c3":0.643,"c4":0.58},{"time":4,"angle":-0.35}]},"躯干7":{"rotate":[{"angle":-0.32,"curve":0.382,"c2":0.56,"c3":0.739},{"time":0.3667,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.3667,"angle":3.39,"curve":0.244,"c3":0.643,"c4":0.58},{"time":2,"angle":-0.32,"curve":0.382,"c2":0.56,"c3":0.739},{"time":2.3667,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":3.3667,"angle":3.39,"curve":0.244,"c3":0.643,"c4":0.58},{"time":4,"angle":-0.32}]},"躯干8":{"rotate":[{"angle":0.85,"curve":0.349,"c2":0.38,"c3":0.703,"c4":0.79},{"time":0.3667,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.5333,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.5333,"angle":3.39,"curve":0.252,"c3":0.622,"c4":0.48},{"time":2,"angle":0.85,"curve":0.349,"c2":0.38,"c3":0.703,"c4":0.79},{"time":2.3667,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":2.5333,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":3.5333,"angle":3.39,"curve":0.252,"c3":0.622,"c4":0.48},{"time":4,"angle":0.85}]},"躯干9":{"rotate":[{"angle":0.88,"curve":0.372,"c2":0.48,"c3":0.752},{"time":0.5333,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.5333,"angle":3.39,"curve":0.252,"c3":0.622,"c4":0.48},{"time":2,"angle":0.88,"curve":0.372,"c2":0.48,"c3":0.752},{"time":2.5333,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":3.5333,"angle":3.39,"curve":0.252,"c3":0.622,"c4":0.48},{"time":4,"angle":0.88}]},"躯干10":{"rotate":[{"angle":2.04,"curve":0.328,"c2":0.32,"c3":0.705,"c4":0.79},{"time":0.5333,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.7,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.7,"angle":3.39,"curve":0.269,"c3":0.618,"c4":0.42},{"time":2,"angle":2.04,"curve":0.328,"c2":0.32,"c3":0.705,"c4":0.79},{"time":2.5333,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":2.7,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":3.7,"angle":3.39,"curve":0.269,"c3":0.618,"c4":0.42},{"time":4,"angle":2.04}]},"眼珠":{"translate":[{"time":0.3667,"curve":0.25,"c3":0.75},{"time":0.4,"x":-0.05,"y":-2.05,"curve":"stepped"},{"time":1.4333,"x":-0.05,"y":-2.05,"curve":0.25,"c3":0.75},{"time":1.4667,"curve":"stepped"},{"time":2.3667,"curve":0.25,"c3":0.75},{"time":2.4,"x":-0.05,"y":-2.05,"curve":"stepped"},{"time":3.4333,"x":-0.05,"y":-2.05,"curve":0.25,"c3":0.75},{"time":3.4667}]},"眼框":{"scale":[{"time":1.4333,"curve":0.25,"c3":0.75},{"time":1.4667,"y":0.498,"curve":0.25,"c3":0.75},{"time":1.5667,"y":0.56,"curve":0.25,"c3":0.75},{"time":1.6,"y":1.034,"curve":0.25,"c3":0.75},{"time":1.7}]},"root":{"translate":[{"x":-990,"y":570}]}}},"talk_off_biyian":{"slots":{"嘴":{"attachment":[{"name":"嘴_疑惑"}]},"眼框":{"attachment":[{"name":null}]},"眼珠":{"attachment":[{"name":null}]},"表情":{"attachment":[{"name":"表情_= ="}]}},"bones":{"躯干":{"translate":[{"x":-0.77,"curve":0.25,"c3":0.75},{"time":1,"x":6.61,"curve":0.25,"c3":0.75},{"time":2,"x":-0.77}]},"肩膀披风1":{"rotate":[{"angle":-3.03,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.3333,"angle":-5.05,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.1667,"angle":1.37,"curve":0.371,"c2":0.62,"c3":0.71},{"time":1.3333,"angle":2.05,"curve":0.243,"c3":0.649,"c4":0.6},{"time":2,"angle":-3.03}]},"肩膀披风2":{"rotate":[{"angle":0.04,"curve":0.351,"c2":0.4,"c3":0.757},{"time":0.6667,"angle":-5.05,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.1667,"angle":-1.49,"curve":0.338,"c2":0.35,"c3":0.675,"c4":0.69},{"time":1.3333,"angle":0.04,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.6667,"angle":2.05,"curve":0.265,"c3":0.618,"c4":0.43},{"time":2,"angle":0.04}]},"肩膀披风3":{"rotate":[{"angle":2.05,"curve":0.25,"c3":0.75},{"time":1,"angle":-5.05,"curve":0.29,"c3":0.629,"c4":0.38},{"time":1.1667,"angle":-4.37,"curve":0.311,"c2":0.25,"c3":0.649,"c4":0.6},{"time":1.3333,"angle":-3.03,"curve":0.351,"c2":0.4,"c3":0.757},{"time":2,"angle":2.05}]},"肩膀披风4":{"rotate":[{"angle":-4.36,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1667,"angle":-5.05,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":2.05,"curve":0.243,"c3":0.689,"c4":0.75},{"time":2,"angle":-4.36}]},"肩膀披风5":{"rotate":[{"angle":-1.5,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.5,"angle":-5.05,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.1667,"angle":0.04,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.5,"angle":2.05,"curve":0.25,"c3":0.625,"c4":0.5},{"time":2,"angle":-1.5}]},"肩膀披风6":{"rotate":[{"angle":1.37,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.8333,"angle":-5.05,"curve":0.265,"c3":0.618,"c4":0.43},{"time":1.1667,"angle":-3.03,"curve":0.351,"c2":0.4,"c3":0.757},{"time":1.8333,"angle":2.05,"curve":0.29,"c3":0.629,"c4":0.38},{"time":2,"angle":1.37}]},"躯干2":{"rotate":[{"angle":-0.26,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.4,"angle":0.14,"curve":0.25,"c3":0.75},{"time":1.4,"angle":-0.94,"curve":0.245,"c3":0.637,"c4":0.56},{"time":2,"angle":-0.26}]},"脸":{"rotate":[{"angle":-0.72,"curve":0.337,"c2":0.35,"c3":0.758},{"time":0.7333,"angle":0.14,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.4,"angle":-0.63,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.7,"angle":-0.94,"curve":0.273,"c3":0.62,"c4":0.41},{"time":2,"angle":-0.72}]},"手掌1":{"rotate":[{"angle":0.69,"curve":0.24,"c3":0.376},{"time":0.7333,"angle":-4.09,"curve":0.307,"c3":0.676,"c4":0.78},{"time":1.3333,"angle":2.68,"curve":0.342,"c2":0.63,"c3":0.677},{"time":2,"angle":0.69}]},"扇子":{"rotate":[{"angle":-6,"curve":0.382,"c2":0.58,"c3":0.731},{"time":0.2,"angle":-6.25,"curve":0.25,"c3":0.75},{"time":0.9333,"angle":-15.6,"curve":0.307,"c3":0.676,"c4":0.78},{"time":1.5333,"angle":-5.76,"curve":0.243,"c3":0.658,"c4":0.64},{"time":2,"angle":-6.14}]},"ik1":{"translate":[{"x":-6.1,"y":-1.19,"curve":0.346,"c2":0.52,"c3":0.69},{"time":0.5333,"x":-11.13,"y":-2.17,"curve":0.309,"c3":0.691},{"time":1.5333,"curve":0.308,"c3":0.656,"c4":0.53},{"time":2,"x":-6.45,"y":-1.26}]},"辫子":{"rotate":[{"angle":1.98,"curve":0.25,"c3":0.75},{"time":1,"angle":5.23,"curve":0.25,"c3":0.75},{"time":2,"angle":1.98}]},"辫子2":{"rotate":[{"angle":2.52,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.2333,"angle":1.98,"curve":0.25,"c3":0.75},{"time":1.2333,"angle":5.23,"curve":0.242,"c3":0.671,"c4":0.68},{"time":2,"angle":2.52}]},"辫子3":{"rotate":[{"angle":3.46,"curve":0.378,"c2":0.52,"c3":0.748},{"time":0.4667,"angle":1.98,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":5.23,"curve":0.248,"c3":0.628,"c4":0.52},{"time":2,"angle":3.46}]},"辫子4":{"rotate":[{"angle":4.57,"curve":0.337,"c2":0.35,"c3":0.758},{"time":0.7333,"angle":1.98,"curve":0.25,"c3":0.75},{"time":1.7333,"angle":5.23,"curve":0.273,"c3":0.62,"c4":0.41},{"time":2,"angle":4.57}]},"后发":{"rotate":[{"angle":0.28,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1667,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":2.85,"curve":0.243,"c3":0.689,"c4":0.75},{"time":2,"angle":0.28}]},"后发2":{"rotate":[{"angle":1.04,"curve":0.345,"c2":0.37,"c3":0.683,"c4":0.72},{"time":0.1667,"angle":0.47,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.4,"curve":0.25,"c3":0.75},{"time":1.4,"angle":2.85,"curve":0.245,"c3":0.637,"c4":0.56},{"time":2,"angle":1.04}]},"后发3":{"rotate":[{"angle":1.8,"curve":0.33,"c2":0.32,"c3":0.667,"c4":0.67},{"time":0.1667,"angle":1.18,"curve":0.38,"c2":0.53,"c3":0.745},{"time":0.6,"curve":0.25,"c3":0.75},{"time":1.6,"angle":2.85,"curve":0.258,"c3":0.619,"c4":0.45},{"time":2,"angle":1.8}]},"刘海9":{"rotate":[{"angle":-2.62,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.3333,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":1.3333,"angle":4.27,"curve":0.243,"c3":0.649,"c4":0.6},{"time":2,"angle":-2.62}]},"刘海10":{"rotate":[{"angle":0.7,"curve":0.335,"c2":0.34,"c3":0.685,"c4":0.72},{"time":0.3333,"angle":-3.4,"curve":0.38,"c2":0.59,"c3":0.727},{"time":0.6,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":1.6,"angle":4.27,"curve":0.258,"c3":0.619,"c4":0.45},{"time":2,"angle":0.7}]},"刘海11":{"rotate":[{"angle":3.89,"curve":0.287,"c2":0.16,"c3":0.638,"c4":0.56},{"time":0.3333,"angle":0.31,"curve":0.367,"c2":0.46,"c3":0.754},{"time":0.9,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":1.9,"angle":4.27,"curve":0.305,"c3":0.64,"c4":0.36},{"time":2,"angle":3.89}]},"刘海2":{"rotate":[{"angle":-0.38,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.4,"angle":-1.09,"curve":0.25,"c3":0.75},{"time":1.4,"angle":0.84,"curve":0.245,"c3":0.637,"c4":0.56},{"time":2,"angle":-0.38}]},"刘海3":{"rotate":[{"angle":0.21,"curve":0.357,"c2":0.42,"c3":0.756},{"time":0.6333,"angle":-1.09,"curve":0.242,"c3":0.671,"c4":0.68},{"time":1.4,"angle":0.52,"curve":0.378,"c2":0.61,"c3":0.722},{"time":1.6333,"angle":0.84,"curve":0.261,"c3":0.618,"c4":0.44},{"time":2,"angle":0.21}]},"刘海4":{"rotate":[{"angle":0.76,"curve":0.289,"c2":0.17,"c3":0.755},{"time":0.9,"angle":-1.09,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.4,"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":1.9,"angle":0.84,"curve":0.305,"c3":0.64,"c4":0.36},{"time":2,"angle":0.76}]},"刘海5":{"rotate":[{"angle":-0.9,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1667,"angle":-1.09,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":0.84,"curve":0.243,"c3":0.689,"c4":0.75},{"time":2,"angle":-0.9}]},"刘海6":{"rotate":[{"angle":-0.54,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.3333,"angle":-1.09,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.1667,"angle":0.66,"curve":0.371,"c2":0.62,"c3":0.71},{"time":1.3333,"angle":0.84,"curve":0.243,"c3":0.649,"c4":0.6},{"time":2,"angle":-0.54}]},"刘海7":{"rotate":[{"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.5,"angle":-1.09,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.1667,"angle":0.3,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.5,"angle":0.84,"curve":0.25,"c3":0.625,"c4":0.5},{"time":2,"angle":-0.12}]},"刘海8":{"rotate":[{"angle":0.3,"curve":0.351,"c2":0.4,"c3":0.757},{"time":0.6667,"angle":-1.09,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.1667,"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":1.6667,"angle":0.84,"curve":0.265,"c3":0.618,"c4":0.43},{"time":2,"angle":0.3}]},"躯干3":{"rotate":[{"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1,"angle":3.39,"curve":0.25,"c3":0.75},{"time":2,"angle":-2.11}]},"躯干4":{"rotate":[{"angle":-1.39,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.2,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.2,"angle":3.39,"curve":0.243,"c3":0.68,"c4":0.71},{"time":2,"angle":-1.39}]},"躯干5":{"rotate":[{"angle":-1.39,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.2,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.2,"angle":3.39,"curve":0.243,"c3":0.68,"c4":0.71},{"time":2,"angle":-1.39}]},"躯干6":{"rotate":[{"angle":-0.35,"curve":0.353,"c2":0.4,"c3":0.692,"c4":0.76},{"time":0.2,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.3667,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.3667,"angle":3.39,"curve":0.244,"c3":0.643,"c4":0.58},{"time":2,"angle":-0.35}]},"躯干7":{"rotate":[{"angle":-0.32,"curve":0.382,"c2":0.56,"c3":0.739},{"time":0.3667,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.3667,"angle":3.39,"curve":0.244,"c3":0.643,"c4":0.58},{"time":2,"angle":-0.32}]},"躯干8":{"rotate":[{"angle":0.85,"curve":0.349,"c2":0.38,"c3":0.703,"c4":0.79},{"time":0.3667,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.5333,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.5333,"angle":3.39,"curve":0.252,"c3":0.622,"c4":0.48},{"time":2,"angle":0.85}]},"躯干9":{"rotate":[{"angle":0.88,"curve":0.372,"c2":0.48,"c3":0.752},{"time":0.5333,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.5333,"angle":3.39,"curve":0.252,"c3":0.622,"c4":0.48},{"time":2,"angle":0.88}]},"躯干10":{"rotate":[{"angle":2.04,"curve":0.328,"c2":0.32,"c3":0.705,"c4":0.79},{"time":0.5333,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.7,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.7,"angle":3.39,"curve":0.269,"c3":0.618,"c4":0.42},{"time":2,"angle":2.04}]},"root":{"translate":[{"x":-990,"y":570}]}}},"talk_off_shengqi":{"slots":{"嘴":{"attachment":[{"name":"嘴_疑惑"}]},"眼框":{"attachment":[{"name":null}]},"眼珠":{"attachment":[{"name":null}]},"表情":{"attachment":[{"name":"表情_疑惑"}]}},"bones":{"躯干":{"translate":[{"x":-0.77,"curve":0.25,"c3":0.75},{"time":1,"x":6.61,"curve":0.25,"c3":0.75},{"time":2,"x":-0.77}]},"肩膀披风1":{"rotate":[{"angle":-3.03,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.3333,"angle":-5.05,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.1667,"angle":1.37,"curve":0.371,"c2":0.62,"c3":0.71},{"time":1.3333,"angle":2.05,"curve":0.243,"c3":0.649,"c4":0.6},{"time":2,"angle":-3.03}]},"肩膀披风2":{"rotate":[{"angle":0.04,"curve":0.351,"c2":0.4,"c3":0.757},{"time":0.6667,"angle":-5.05,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.1667,"angle":-1.49,"curve":0.338,"c2":0.35,"c3":0.675,"c4":0.69},{"time":1.3333,"angle":0.04,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.6667,"angle":2.05,"curve":0.265,"c3":0.618,"c4":0.43},{"time":2,"angle":0.04}]},"肩膀披风3":{"rotate":[{"angle":2.05,"curve":0.25,"c3":0.75},{"time":1,"angle":-5.05,"curve":0.29,"c3":0.629,"c4":0.38},{"time":1.1667,"angle":-4.37,"curve":0.311,"c2":0.25,"c3":0.649,"c4":0.6},{"time":1.3333,"angle":-3.03,"curve":0.351,"c2":0.4,"c3":0.757},{"time":2,"angle":2.05}]},"肩膀披风4":{"rotate":[{"angle":-4.36,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1667,"angle":-5.05,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":2.05,"curve":0.243,"c3":0.689,"c4":0.75},{"time":2,"angle":-4.36}]},"肩膀披风5":{"rotate":[{"angle":-1.5,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.5,"angle":-5.05,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.1667,"angle":0.04,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.5,"angle":2.05,"curve":0.25,"c3":0.625,"c4":0.5},{"time":2,"angle":-1.5}]},"肩膀披风6":{"rotate":[{"angle":1.37,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.8333,"angle":-5.05,"curve":0.265,"c3":0.618,"c4":0.43},{"time":1.1667,"angle":-3.03,"curve":0.351,"c2":0.4,"c3":0.757},{"time":1.8333,"angle":2.05,"curve":0.29,"c3":0.629,"c4":0.38},{"time":2,"angle":1.37}]},"躯干2":{"rotate":[{"angle":-0.26,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.4,"angle":0.14,"curve":0.25,"c3":0.75},{"time":1.4,"angle":-0.94,"curve":0.245,"c3":0.637,"c4":0.56},{"time":2,"angle":-0.26}]},"脸":{"rotate":[{"angle":-0.72,"curve":0.337,"c2":0.35,"c3":0.758},{"time":0.7333,"angle":0.14,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.4,"angle":-0.63,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.7,"angle":-0.94,"curve":0.273,"c3":0.62,"c4":0.41},{"time":2,"angle":-0.72}]},"手掌1":{"rotate":[{"angle":0.69,"curve":0.24,"c3":0.376},{"time":0.3667,"angle":-4.09,"curve":0.307,"c3":0.676,"c4":0.78},{"time":0.6667,"angle":2.68,"curve":0.342,"c2":0.63,"c3":0.677},{"time":1,"angle":0.69,"curve":0.24,"c3":0.376},{"time":1.3667,"angle":-4.09,"curve":0.307,"c3":0.676,"c4":0.78},{"time":1.6667,"angle":2.68,"curve":0.342,"c2":0.63,"c3":0.677},{"time":2,"angle":0.69}]},"扇子":{"rotate":[{"angle":-6,"curve":0.382,"c2":0.58,"c3":0.731},{"time":0.1,"angle":-6.25,"curve":0.25,"c3":0.75},{"time":0.4667,"angle":-15.6,"curve":0.307,"c3":0.676,"c4":0.78},{"time":0.7667,"angle":-5.76,"curve":0.243,"c3":0.658,"c4":0.64},{"time":1,"angle":-6.14,"curve":0.381,"c2":0.59,"c3":0.729},{"time":1.1,"angle":-6.25,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":-15.6,"curve":0.307,"c3":0.676,"c4":0.78},{"time":1.7667,"angle":-5.23,"curve":0.243,"c3":0.655,"c4":0.63},{"time":2,"angle":-6}]},"ik1":{"translate":[{"x":-6.1,"y":-1.19,"curve":0.346,"c2":0.52,"c3":0.69},{"time":0.2667,"x":-11.13,"y":-2.17,"curve":0.309,"c3":0.691},{"time":0.7667,"curve":0.308,"c3":0.656,"c4":0.53},{"time":1,"x":-6.45,"y":-1.26,"curve":0.347,"c2":0.53,"c3":0.69},{"time":1.2,"x":-11.13,"y":-2.17,"curve":0.309,"c3":0.691},{"time":1.7,"curve":0.308,"c3":0.655,"c4":0.52},{"time":2,"x":-6.1,"y":-1.19}]},"辫子":{"rotate":[{"angle":1.98,"curve":0.25,"c3":0.75},{"time":1,"angle":5.23,"curve":0.25,"c3":0.75},{"time":2,"angle":1.98}]},"辫子2":{"rotate":[{"angle":2.52,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.2333,"angle":1.98,"curve":0.25,"c3":0.75},{"time":1.2333,"angle":5.23,"curve":0.242,"c3":0.671,"c4":0.68},{"time":2,"angle":2.52}]},"辫子3":{"rotate":[{"angle":3.46,"curve":0.378,"c2":0.52,"c3":0.748},{"time":0.4667,"angle":1.98,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":5.23,"curve":0.248,"c3":0.628,"c4":0.52},{"time":2,"angle":3.46}]},"辫子4":{"rotate":[{"angle":4.57,"curve":0.337,"c2":0.35,"c3":0.758},{"time":0.7333,"angle":1.98,"curve":0.25,"c3":0.75},{"time":1.7333,"angle":5.23,"curve":0.273,"c3":0.62,"c4":0.41},{"time":2,"angle":4.57}]},"后发":{"rotate":[{"angle":0.28,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1667,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":2.85,"curve":0.243,"c3":0.689,"c4":0.75},{"time":2,"angle":0.28}]},"后发2":{"rotate":[{"angle":1.04,"curve":0.345,"c2":0.37,"c3":0.683,"c4":0.72},{"time":0.1667,"angle":0.47,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.4,"curve":0.25,"c3":0.75},{"time":1.4,"angle":2.85,"curve":0.245,"c3":0.637,"c4":0.56},{"time":2,"angle":1.04}]},"后发3":{"rotate":[{"angle":1.8,"curve":0.33,"c2":0.32,"c3":0.667,"c4":0.67},{"time":0.1667,"angle":1.18,"curve":0.38,"c2":0.53,"c3":0.745},{"time":0.6,"curve":0.25,"c3":0.75},{"time":1.6,"angle":2.85,"curve":0.258,"c3":0.619,"c4":0.45},{"time":2,"angle":1.8}]},"刘海9":{"rotate":[{"angle":-2.62,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.3333,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":1.3333,"angle":4.27,"curve":0.243,"c3":0.649,"c4":0.6},{"time":2,"angle":-2.62}]},"刘海10":{"rotate":[{"angle":0.7,"curve":0.335,"c2":0.34,"c3":0.685,"c4":0.72},{"time":0.3333,"angle":-3.4,"curve":0.38,"c2":0.59,"c3":0.727},{"time":0.6,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":1.6,"angle":4.27,"curve":0.258,"c3":0.619,"c4":0.45},{"time":2,"angle":0.7}]},"刘海11":{"rotate":[{"angle":3.89,"curve":0.287,"c2":0.16,"c3":0.638,"c4":0.56},{"time":0.3333,"angle":0.31,"curve":0.367,"c2":0.46,"c3":0.754},{"time":0.9,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":1.9,"angle":4.27,"curve":0.305,"c3":0.64,"c4":0.36},{"time":2,"angle":3.89}]},"刘海2":{"rotate":[{"angle":-0.38,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.4,"angle":-1.09,"curve":0.25,"c3":0.75},{"time":1.4,"angle":0.84,"curve":0.245,"c3":0.637,"c4":0.56},{"time":2,"angle":-0.38}]},"刘海3":{"rotate":[{"angle":0.21,"curve":0.357,"c2":0.42,"c3":0.756},{"time":0.6333,"angle":-1.09,"curve":0.242,"c3":0.671,"c4":0.68},{"time":1.4,"angle":0.52,"curve":0.378,"c2":0.61,"c3":0.722},{"time":1.6333,"angle":0.84,"curve":0.261,"c3":0.618,"c4":0.44},{"time":2,"angle":0.21}]},"刘海4":{"rotate":[{"angle":0.76,"curve":0.289,"c2":0.17,"c3":0.755},{"time":0.9,"angle":-1.09,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.4,"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":1.9,"angle":0.84,"curve":0.305,"c3":0.64,"c4":0.36},{"time":2,"angle":0.76}]},"刘海5":{"rotate":[{"angle":-0.9,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1667,"angle":-1.09,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":0.84,"curve":0.243,"c3":0.689,"c4":0.75},{"time":2,"angle":-0.9}]},"刘海6":{"rotate":[{"angle":-0.54,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.3333,"angle":-1.09,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.1667,"angle":0.66,"curve":0.371,"c2":0.62,"c3":0.71},{"time":1.3333,"angle":0.84,"curve":0.243,"c3":0.649,"c4":0.6},{"time":2,"angle":-0.54}]},"刘海7":{"rotate":[{"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.5,"angle":-1.09,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.1667,"angle":0.3,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.5,"angle":0.84,"curve":0.25,"c3":0.625,"c4":0.5},{"time":2,"angle":-0.12}]},"刘海8":{"rotate":[{"angle":0.3,"curve":0.351,"c2":0.4,"c3":0.757},{"time":0.6667,"angle":-1.09,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.1667,"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":1.6667,"angle":0.84,"curve":0.265,"c3":0.618,"c4":0.43},{"time":2,"angle":0.3}]},"躯干3":{"rotate":[{"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1,"angle":3.39,"curve":0.25,"c3":0.75},{"time":2,"angle":-2.11}]},"躯干4":{"rotate":[{"angle":-1.39,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.2,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.2,"angle":3.39,"curve":0.243,"c3":0.68,"c4":0.71},{"time":2,"angle":-1.39}]},"躯干5":{"rotate":[{"angle":-1.39,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.2,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.2,"angle":3.39,"curve":0.243,"c3":0.68,"c4":0.71},{"time":2,"angle":-1.39}]},"躯干6":{"rotate":[{"angle":-0.35,"curve":0.353,"c2":0.4,"c3":0.692,"c4":0.76},{"time":0.2,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.3667,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.3667,"angle":3.39,"curve":0.244,"c3":0.643,"c4":0.58},{"time":2,"angle":-0.35}]},"躯干7":{"rotate":[{"angle":-0.32,"curve":0.382,"c2":0.56,"c3":0.739},{"time":0.3667,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.3667,"angle":3.39,"curve":0.244,"c3":0.643,"c4":0.58},{"time":2,"angle":-0.32}]},"躯干8":{"rotate":[{"angle":0.85,"curve":0.349,"c2":0.38,"c3":0.703,"c4":0.79},{"time":0.3667,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.5333,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.5333,"angle":3.39,"curve":0.252,"c3":0.622,"c4":0.48},{"time":2,"angle":0.85}]},"躯干9":{"rotate":[{"angle":0.88,"curve":0.372,"c2":0.48,"c3":0.752},{"time":0.5333,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.5333,"angle":3.39,"curve":0.252,"c3":0.622,"c4":0.48},{"time":2,"angle":0.88}]},"躯干10":{"rotate":[{"angle":2.04,"curve":0.328,"c2":0.32,"c3":0.705,"c4":0.79},{"time":0.5333,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.7,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.7,"angle":3.39,"curve":0.269,"c3":0.618,"c4":0.42},{"time":2,"angle":2.04}]},"root":{"translate":[{"x":-990,"y":570}]}}},"talk_on":{"slots":{"嘴":{"attachment":[{"name":"嘴_开心"},{"time":0.1667,"name":"嘴_= ="},{"time":0.3,"name":"嘴_疑惑"},{"time":0.4333,"name":"嘴_= ="},{"time":0.6,"name":"嘴_开心"},{"time":0.7667,"name":"嘴_= ="},{"time":0.9,"name":"嘴_疑惑"},{"time":1.0333,"name":"嘴_= ="},{"time":1.2,"name":"嘴_开心"},{"time":1.3667,"name":"嘴_= ="},{"time":1.5,"name":"嘴_疑惑"},{"time":1.6333,"name":"嘴_= ="}]},"眼框":{"attachment":[{"name":null}]},"眼珠":{"attachment":[{"name":null}]},"表情":{"attachment":[{"name":"表情_不满"}]}},"bones":{"躯干":{"translate":[{"x":-0.77,"curve":0.25,"c3":0.75},{"time":1,"x":6.61,"curve":0.25,"c3":0.75},{"time":2,"x":-0.77}]},"肩膀披风1":{"rotate":[{"angle":-3.03,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.3333,"angle":-5.05,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.1667,"angle":1.37,"curve":0.371,"c2":0.62,"c3":0.71},{"time":1.3333,"angle":2.05,"curve":0.243,"c3":0.649,"c4":0.6},{"time":2,"angle":-3.03}]},"肩膀披风2":{"rotate":[{"angle":0.04,"curve":0.351,"c2":0.4,"c3":0.757},{"time":0.6667,"angle":-5.05,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.1667,"angle":-1.49,"curve":0.338,"c2":0.35,"c3":0.675,"c4":0.69},{"time":1.3333,"angle":0.04,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.6667,"angle":2.05,"curve":0.265,"c3":0.618,"c4":0.43},{"time":2,"angle":0.04}]},"肩膀披风3":{"rotate":[{"angle":2.05,"curve":0.25,"c3":0.75},{"time":1,"angle":-5.05,"curve":0.29,"c3":0.629,"c4":0.38},{"time":1.1667,"angle":-4.37,"curve":0.311,"c2":0.25,"c3":0.649,"c4":0.6},{"time":1.3333,"angle":-3.03,"curve":0.351,"c2":0.4,"c3":0.757},{"time":2,"angle":2.05}]},"肩膀披风4":{"rotate":[{"angle":-4.36,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1667,"angle":-5.05,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":2.05,"curve":0.243,"c3":0.689,"c4":0.75},{"time":2,"angle":-4.36}]},"肩膀披风5":{"rotate":[{"angle":-1.5,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.5,"angle":-5.05,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.1667,"angle":0.04,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.5,"angle":2.05,"curve":0.25,"c3":0.625,"c4":0.5},{"time":2,"angle":-1.5}]},"肩膀披风6":{"rotate":[{"angle":1.37,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.8333,"angle":-5.05,"curve":0.265,"c3":0.618,"c4":0.43},{"time":1.1667,"angle":-3.03,"curve":0.351,"c2":0.4,"c3":0.757},{"time":1.8333,"angle":2.05,"curve":0.29,"c3":0.629,"c4":0.38},{"time":2,"angle":1.37}]},"躯干2":{"rotate":[{"angle":-0.26,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.4,"angle":0.14,"curve":0.25,"c3":0.75},{"time":1.4,"angle":-0.94,"curve":0.245,"c3":0.637,"c4":0.56},{"time":2,"angle":-0.26}]},"脸":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.2333,"angle":-0.72,"curve":0.25,"c3":0.75},{"time":0.4,"angle":-3.74,"curve":0.25,"c3":0.75},{"time":0.6333,"angle":-1.17,"curve":0.25,"c3":0.75},{"time":0.8667,"angle":-2.56,"curve":0.25,"c3":0.75},{"time":1.0667,"angle":-0.71,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":-2.56,"curve":0.25,"c3":0.75},{"time":1.4333,"angle":-0.71,"curve":0.25,"c3":0.75},{"time":1.6667,"angle":-1.78,"curve":0.25,"c3":0.75},{"time":2}]},"ik1":{"translate":[{"x":-29.65,"y":20.39,"curve":0.25,"c3":0.75},{"time":0.4667,"x":-40.21,"y":17.52,"curve":0.25,"c3":0.75},{"time":0.7,"x":-29.65,"y":20.39,"curve":0.25,"c3":0.75},{"time":0.9,"x":-40.21,"y":17.52,"curve":0.25,"c3":0.75},{"time":1.1,"x":-29.65,"y":20.39,"curve":0.25,"c3":0.75},{"time":1.3333,"x":-40.21,"y":17.52,"curve":0.25,"c3":0.75},{"time":2,"x":-29.65,"y":20.39}]},"辫子":{"rotate":[{"angle":1.98,"curve":0.25,"c3":0.75},{"time":1,"angle":5.23,"curve":0.25,"c3":0.75},{"time":2,"angle":1.98}]},"辫子2":{"rotate":[{"angle":2.52,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.2333,"angle":1.98,"curve":0.25,"c3":0.75},{"time":1.2333,"angle":5.23,"curve":0.242,"c3":0.671,"c4":0.68},{"time":2,"angle":2.52}]},"辫子3":{"rotate":[{"angle":3.46,"curve":0.378,"c2":0.52,"c3":0.748},{"time":0.4667,"angle":1.98,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":5.23,"curve":0.248,"c3":0.628,"c4":0.52},{"time":2,"angle":3.46}]},"辫子4":{"rotate":[{"angle":4.57,"curve":0.337,"c2":0.35,"c3":0.758},{"time":0.7333,"angle":1.98,"curve":0.25,"c3":0.75},{"time":1.7333,"angle":5.23,"curve":0.273,"c3":0.62,"c4":0.41},{"time":2,"angle":4.57}]},"后发":{"rotate":[{"angle":0.28,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1667,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":2.85,"curve":0.243,"c3":0.689,"c4":0.75},{"time":2,"angle":0.28}]},"后发2":{"rotate":[{"angle":1.04,"curve":0.345,"c2":0.37,"c3":0.683,"c4":0.72},{"time":0.1667,"angle":0.47,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.4,"curve":0.25,"c3":0.75},{"time":1.4,"angle":2.85,"curve":0.245,"c3":0.637,"c4":0.56},{"time":2,"angle":1.04}]},"后发3":{"rotate":[{"angle":1.8,"curve":0.33,"c2":0.32,"c3":0.667,"c4":0.67},{"time":0.1667,"angle":1.18,"curve":0.38,"c2":0.53,"c3":0.745},{"time":0.6,"curve":0.25,"c3":0.75},{"time":1.6,"angle":2.85,"curve":0.258,"c3":0.619,"c4":0.45},{"time":2,"angle":1.8}]},"刘海9":{"rotate":[{"angle":-2.62,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.3333,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":1.3333,"angle":4.27,"curve":0.243,"c3":0.649,"c4":0.6},{"time":2,"angle":-2.62}]},"刘海10":{"rotate":[{"angle":0.7,"curve":0.335,"c2":0.34,"c3":0.685,"c4":0.72},{"time":0.3333,"angle":-3.4,"curve":0.38,"c2":0.59,"c3":0.727},{"time":0.6,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":1.6,"angle":4.27,"curve":0.258,"c3":0.619,"c4":0.45},{"time":2,"angle":0.7}]},"刘海11":{"rotate":[{"angle":3.89,"curve":0.287,"c2":0.16,"c3":0.638,"c4":0.56},{"time":0.3333,"angle":0.31,"curve":0.367,"c2":0.46,"c3":0.754},{"time":0.9,"angle":-5.35,"curve":0.25,"c3":0.75},{"time":1.9,"angle":4.27,"curve":0.305,"c3":0.64,"c4":0.36},{"time":2,"angle":3.89}]},"刘海2":{"rotate":[{"angle":-0.38,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.4,"angle":-1.09,"curve":0.25,"c3":0.75},{"time":1.4,"angle":0.84,"curve":0.245,"c3":0.637,"c4":0.56},{"time":2,"angle":-0.38}]},"刘海3":{"rotate":[{"angle":0.21,"curve":0.357,"c2":0.42,"c3":0.756},{"time":0.6333,"angle":-1.09,"curve":0.242,"c3":0.671,"c4":0.68},{"time":1.4,"angle":0.52,"curve":0.378,"c2":0.61,"c3":0.722},{"time":1.6333,"angle":0.84,"curve":0.261,"c3":0.618,"c4":0.44},{"time":2,"angle":0.21}]},"刘海4":{"rotate":[{"angle":0.76,"curve":0.289,"c2":0.17,"c3":0.755},{"time":0.9,"angle":-1.09,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.4,"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":1.9,"angle":0.84,"curve":0.305,"c3":0.64,"c4":0.36},{"time":2,"angle":0.76}]},"刘海5":{"rotate":[{"angle":-0.9,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1667,"angle":-1.09,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":0.84,"curve":0.243,"c3":0.689,"c4":0.75},{"time":2,"angle":-0.9}]},"刘海6":{"rotate":[{"angle":-0.54,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.3333,"angle":-1.09,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.1667,"angle":0.66,"curve":0.371,"c2":0.62,"c3":0.71},{"time":1.3333,"angle":0.84,"curve":0.243,"c3":0.649,"c4":0.6},{"time":2,"angle":-0.54}]},"刘海7":{"rotate":[{"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.5,"angle":-1.09,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.1667,"angle":0.3,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.5,"angle":0.84,"curve":0.25,"c3":0.625,"c4":0.5},{"time":2,"angle":-0.12}]},"刘海8":{"rotate":[{"angle":0.3,"curve":0.351,"c2":0.4,"c3":0.757},{"time":0.6667,"angle":-1.09,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.1667,"angle":-0.12,"curve":0.375,"c2":0.5,"c3":0.75},{"time":1.6667,"angle":0.84,"curve":0.265,"c3":0.618,"c4":0.43},{"time":2,"angle":0.3}]},"躯干3":{"rotate":[{"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1,"angle":3.39,"curve":0.25,"c3":0.75},{"time":2,"angle":-2.11}]},"躯干4":{"rotate":[{"angle":-1.39,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.2,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.2,"angle":3.39,"curve":0.243,"c3":0.68,"c4":0.71},{"time":2,"angle":-1.39}]},"躯干5":{"rotate":[{"angle":-1.39,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.2,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.2,"angle":3.39,"curve":0.243,"c3":0.68,"c4":0.71},{"time":2,"angle":-1.39}]},"躯干6":{"rotate":[{"angle":-0.35,"curve":0.353,"c2":0.4,"c3":0.692,"c4":0.76},{"time":0.2,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.3667,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.3667,"angle":3.39,"curve":0.244,"c3":0.643,"c4":0.58},{"time":2,"angle":-0.35}]},"躯干7":{"rotate":[{"angle":-0.32,"curve":0.382,"c2":0.56,"c3":0.739},{"time":0.3667,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.3667,"angle":3.39,"curve":0.244,"c3":0.643,"c4":0.58},{"time":2,"angle":-0.32}]},"躯干8":{"rotate":[{"angle":0.85,"curve":0.349,"c2":0.38,"c3":0.703,"c4":0.79},{"time":0.3667,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.5333,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.5333,"angle":3.39,"curve":0.252,"c3":0.622,"c4":0.48},{"time":2,"angle":0.85}]},"躯干9":{"rotate":[{"angle":0.88,"curve":0.372,"c2":0.48,"c3":0.752},{"time":0.5333,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.5333,"angle":3.39,"curve":0.252,"c3":0.622,"c4":0.48},{"time":2,"angle":0.88}]},"躯干10":{"rotate":[{"angle":2.04,"curve":0.328,"c2":0.32,"c3":0.705,"c4":0.79},{"time":0.5333,"angle":-1.58,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.7,"angle":-2.11,"curve":0.25,"c3":0.75},{"time":1.7,"angle":3.39,"curve":0.269,"c3":0.618,"c4":0.42},{"time":2,"angle":2.04}]},"扇子":{"rotate":[{"angle":-0.4,"curve":0.36,"c2":0.64,"c3":0.695},{"time":0.0667,"curve":0.25,"c3":0.75},{"time":0.5333,"angle":-15.71,"curve":0.25,"c3":0.75},{"time":0.7667,"angle":-2.17,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":-9.87,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":-2.81,"curve":0.25,"c3":0.75},{"time":1.4,"angle":-9.28,"curve":0.245,"c3":0.711,"c4":0.83},{"time":2,"angle":-0.4}]},"手掌1":{"rotate":[{"angle":-0.38,"curve":0.36,"c2":0.64,"c3":0.695},{"time":0.0667,"curve":0.25,"c3":0.75},{"time":0.5333,"angle":-4.58,"curve":0.25,"c3":0.75},{"time":0.7667,"angle":-2.17,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":-4.54,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":-2.81,"curve":0.25,"c3":0.75},{"time":1.4,"angle":-8.92,"curve":0.245,"c3":0.711,"c4":0.83},{"time":2,"angle":-0.38}]},"root":{"translate":[{"x":-990,"y":570}]}}}}}')
}
, function(e, c) {
    e.exports = "\ndelisha.png\nsize: 2026,602\nformat: RGBA8888\nfilter: Linear,Linear\nrepeat: none\n刘海\n  rotate: true\n  xy: 2, 168\n  size: 432, 274\n  orig: 432, 274\n  offset: 0, 0\n  index: -1\n刘海中\n  rotate: false\n  xy: 1367, 38\n  size: 107, 186\n  orig: 107, 186\n  offset: 0, 0\n  index: -1\n右前臂\n  rotate: true\n  xy: 1929, 156\n  size: 91, 92\n  orig: 103, 92\n  offset: 1, 0\n  index: -1\n右手直\n  rotate: false\n  xy: 660, 6\n  size: 127, 206\n  orig: 129, 208\n  offset: 1, 1\n  index: -1\n后发\n  rotate: false\n  xy: 309, 2\n  size: 274, 187\n  orig: 277, 187\n  offset: 0, 0\n  index: -1\n嘴_= =\n  rotate: false\n  xy: 265, 8\n  size: 26, 5\n  orig: 28, 7\n  offset: 1, 1\n  index: -1\n嘴_不满\n  rotate: false\n  xy: 249, 6\n  size: 14, 7\n  orig: 17, 9\n  offset: 2, 1\n  index: -1\n嘴_呆\n  rotate: false\n  xy: 564, 198\n  size: 15, 14\n  orig: 18, 16\n  offset: 1, 1\n  index: -1\n嘴_开心\n  rotate: false\n  xy: 278, 169\n  size: 26, 20\n  orig: 28, 22\n  offset: 1, 1\n  index: -1\n嘴_开心闭\n  rotate: false\n  xy: 227, 6\n  size: 20, 7\n  orig: 22, 9\n  offset: 1, 1\n  index: -1\n嘴_生气\n  rotate: true\n  xy: 1811, 248\n  size: 73, 40\n  orig: 75, 42\n  offset: 1, 1\n  index: -1\n嘴_疑惑\n  rotate: true\n  xy: 213, 2\n  size: 11, 12\n  orig: 18, 14\n  offset: 2, 1\n  index: -1\n大桌子B\n  rotate: false\n  xy: 1073, 345\n  size: 718, 255\n  orig: 718, 255\n  offset: 0, 0\n  index: -1\n头顶生气\n  rotate: false\n  xy: 1501, 228\n  size: 114, 115\n  orig: 130, 119\n  offset: 15, 1\n  index: -1\n头顶震惊\n  rotate: true\n  xy: 1073, 222\n  size: 121, 115\n  orig: 123, 117\n  offset: 1, 1\n  index: -1\n左手\n  rotate: true\n  xy: 1332, 226\n  size: 117, 167\n  orig: 119, 169\n  offset: 1, 1\n  index: -1\n帽子\n  rotate: false\n  xy: 1793, 323\n  size: 224, 94\n  orig: 226, 96\n  offset: 1, 1\n  index: -1\n扇子\n  rotate: false\n  xy: 1854, 5\n  size: 73, 106\n  orig: 75, 108\n  offset: 1, 1\n  index: -1\n手掌1\n  rotate: true\n  xy: 1583, 5\n  size: 35, 39\n  orig: 37, 41\n  offset: 1, 1\n  index: -1\n手掌2\n  rotate: true\n  xy: 1538, 2\n  size: 38, 43\n  orig: 41, 45\n  offset: 1, 1\n  index: -1\n手放后\n  rotate: true\n  xy: 1929, 93\n  size: 61, 74\n  orig: 63, 76\n  offset: 1, 1\n  index: -1\n披风\n  rotate: true\n  xy: 840, 220\n  size: 380, 231\n  orig: 380, 286\n  offset: 0, 0\n  index: -1\n披风_张手\n  rotate: true\n  xy: 278, 191\n  size: 409, 284\n  orig: 412, 286\n  offset: 1, 1\n  index: -1\n拿扇子\n  rotate: false\n  xy: 1791, 2\n  size: 61, 83\n  orig: 69, 85\n  offset: 7, 1\n  index: -1\n正常脸红\n  rotate: false\n  xy: 102, 4\n  size: 109, 7\n  orig: 111, 9\n  offset: 1, 1\n  index: -1\n眼框\n  rotate: true\n  xy: 1284, 24\n  size: 198, 81\n  orig: 200, 87\n  offset: 1, 1\n  index: -1\n眼珠\n  rotate: true\n  xy: 102, 13\n  size: 153, 55\n  orig: 155, 57\n  offset: 1, 1\n  index: -1\n肩膀披风1\n  rotate: true\n  xy: 159, 15\n  size: 151, 148\n  orig: 151, 148\n  offset: 0, 0\n  index: -1\n肩膀披风2\n  rotate: true\n  xy: 1190, 224\n  size: 119, 140\n  orig: 119, 140\n  offset: 0, 0\n  index: -1\n脸\n  rotate: true\n  xy: 564, 214\n  size: 386, 274\n  orig: 407, 344\n  offset: 2, 1\n  index: -1\n腿右\n  rotate: false\n  xy: 585, 2\n  size: 73, 210\n  orig: 73, 210\n  offset: 0, 0\n  index: -1\n腿左\n  rotate: false\n  xy: 1013, 2\n  size: 75, 216\n  orig: 75, 216\n  offset: 0, 0\n  index: -1\n表情_= =\n  rotate: false\n  xy: 1624, 3\n  size: 165, 44\n  orig: 167, 50\n  offset: 1, 1\n  index: -1\n表情_不满\n  rotate: false\n  xy: 1617, 265\n  size: 171, 78\n  orig: 175, 80\n  offset: 3, 1\n  index: -1\n表情_呆\n  rotate: true\n  xy: 1611, 49\n  size: 177, 90\n  orig: 179, 92\n  offset: 1, 1\n  index: -1\n表情_开心\n  rotate: true\n  xy: 1703, 87\n  size: 176, 106\n  orig: 181, 108\n  offset: 1, 1\n  index: -1\n表情_生气\n  rotate: true\n  xy: 2, 7\n  size: 159, 98\n  orig: 166, 110\n  offset: 1, 1\n  index: -1\n表情_疑惑\n  rotate: false\n  xy: 1854, 249\n  size: 170, 72\n  orig: 175, 74\n  offset: 4, 1\n  index: -1\n表情_默认\n  rotate: true\n  xy: 1811, 113\n  size: 133, 106\n  orig: 139, 106\n  offset: 6, 0\n  index: -1\n超开心_手_张开1\n  rotate: false\n  xy: 1793, 419\n  size: 229, 181\n  orig: 231, 183\n  offset: 1, 1\n  index: -1\n超开心_手_张开2\n  rotate: true\n  xy: 1090, 6\n  size: 214, 192\n  orig: 216, 196\n  offset: 1, 1\n  index: -1\n躯干\n  rotate: true\n  xy: 789, 9\n  size: 203, 222\n  orig: 228, 232\n  offset: 25, 10\n  index: -1\n辫子\n  rotate: false\n  xy: 1476, 42\n  size: 133, 182\n  orig: 133, 182\n  offset: 0, 0\n  index: -1\n闭眼\n  rotate: false\n  xy: 1367, 9\n  size: 169, 27\n  orig: 171, 80\n  offset: 1, 1\n  index: -1\n"
}
, function(e) {
    e.exports = JSON.parse('{"skeleton":{"hash":"MxnROpSXNOBRcwUSDh3hjuErja8","spine":"3.8.95","x":332,"y":-958,"width":425,"height":707},"bones":[{"name":"root"},{"name":"body","parent":"root","x":512.7,"y":-937.18},{"name":"身体","parent":"body","length":68.56,"rotation":88.88,"x":2.52,"y":246.56},{"name":"身体2","parent":"身体","length":59.17,"rotation":-0.83,"x":68.56},{"name":"脸","parent":"身体2","rotation":-88.05,"x":85.87,"y":-13.88},{"name":"嘴开口","parent":"脸","x":-18.74,"y":3.6},{"name":"眼框","parent":"脸","rotation":-2.99,"x":-38.99,"y":32.58},{"name":"眼珠","parent":"脸","x":-76.3,"y":40.92},{"name":"眼睫毛","parent":"嘴开口","length":53.8,"rotation":168.94,"x":-34.14,"y":59.55},{"name":"眉毛","parent":"脸","length":26,"rotation":172.98,"x":-59.23,"y":92.53},{"name":"头发2","parent":"脸","x":-15.13,"y":266.31},{"name":"头发3","parent":"头发2","length":82.2,"rotation":-137.35,"x":-50.46,"y":-20.94},{"name":"头发4","parent":"头发3","length":70.37,"rotation":26.34,"x":82.2},{"name":"头发5","parent":"头发4","length":80.02,"rotation":18.96,"x":70.37},{"name":"头发6","parent":"头发5","length":83.63,"rotation":17.9,"x":80.02},{"name":"头发","parent":"头发2","length":71.79,"rotation":-42.04,"x":88.54,"y":-28.56},{"name":"头发7","parent":"头发","length":74.71,"rotation":-35.07,"x":71.79},{"name":"头发8","parent":"头发7","length":79.92,"rotation":-25.27,"x":74.71},{"name":"头发9","parent":"头发8","length":65.3,"rotation":19.92,"x":79.92},{"name":"头发1","parent":"头发2","length":73.54,"rotation":-68.75,"x":92.34,"y":-56.64},{"name":"头发10","parent":"头发1","length":66.67,"rotation":-22.89,"x":73.54},{"name":"头发11","parent":"头发10","length":67.8,"rotation":-14.25,"x":66.67},{"name":"头发12","parent":"头发11","length":47.9,"rotation":26.19,"x":67.8},{"name":"头发13","parent":"头发10","length":48.94,"rotation":42.3,"x":51.24,"y":23.37},{"name":"头发14","parent":"头发13","length":40.33,"rotation":37.76,"x":48.94},{"name":"头发16","parent":"头发2","length":65.8,"rotation":-86.68,"x":-29.99,"y":-35.7},{"name":"头发17","parent":"头发16","length":55.16,"rotation":17.93,"x":65.8},{"name":"头发18","parent":"头发17","length":61.42,"rotation":14.29,"x":55.16},{"name":"头发19","parent":"头发18","length":56.8,"rotation":14.9,"x":61.42},{"name":"头发20","parent":"头发2","length":81.91,"rotation":-138.06,"x":-18.09,"y":-37.6},{"name":"头发21","parent":"头发20","length":75.38,"rotation":20.2,"x":81.91},{"name":"头发22","parent":"头发21","length":79.03,"rotation":28.9,"x":75.38},{"name":"腿1","parent":"身体","length":35.88,"rotation":129.99,"x":-1.1,"y":5.74},{"name":"腿2","parent":"腿1","length":95.13,"rotation":49.12,"x":35.88},{"name":"腿3","parent":"腿2","length":100,"rotation":8.64,"x":95.13},{"name":"身体3","parent":"身体","length":29.84,"rotation":-115.44,"x":-3.34,"y":-7.65},{"name":"腿4","parent":"身体3","length":95.44,"rotation":-68.45,"x":31.7,"y":-0.93},{"name":"腿5","parent":"腿4","length":102.5,"rotation":9.68,"x":95.44},{"name":"身体4","parent":"身体2","length":30.44,"rotation":105.42,"x":56.22,"y":6.1},{"name":"左大臂","parent":"身体4","length":92.99,"rotation":64.37,"x":29.52,"y":1.51},{"name":"左小臂","parent":"左大臂","length":76.88,"rotation":-6.17,"x":89.13,"y":1.23},{"name":"身体5","parent":"身体2","length":32.6,"rotation":-109.03,"x":58.95,"y":-12.58},{"name":"右大笔","parent":"身体5","length":79.78,"rotation":-51.05,"x":33.29,"y":-0.63},{"name":"飘带3","parent":"身体4","length":54.49,"rotation":60.59,"x":27.78,"y":-5.67},{"name":"飘带4","parent":"飘带3","length":51.8,"rotation":2.58,"x":54.49},{"name":"飘带5","parent":"飘带4","length":46.35,"rotation":-0.97,"x":51.8},{"name":"飘带6","parent":"飘带5","length":57.15,"rotation":8.82,"x":46.23,"y":0.48},{"name":"飘带1","parent":"身体5","length":64.6,"rotation":-64.14,"x":30.72,"y":8.53},{"name":"飘带2","parent":"飘带1","length":56.11,"rotation":4.34,"x":64.6},{"name":"飘带7","parent":"飘带2","length":51.09,"rotation":3.2,"x":56.11},{"name":"飘带8","parent":"飘带7","length":50.99,"rotation":7.62,"x":51.09},{"name":"腰牌","parent":"身体","length":21.48,"rotation":-176.21,"x":1.7,"y":-48.64},{"name":"腰牌2","parent":"腰牌","length":24.46,"rotation":-3.83,"x":21.48},{"name":"腰牌3","parent":"腰牌2","length":35.43,"rotation":0.36,"x":24.46},{"name":"腰牌4","parent":"腰牌3","length":24.99,"rotation":-2.63,"x":35.43},{"name":"腰牌5","parent":"腰牌4","length":46.42,"rotation":2.2,"x":24.99},{"name":"耳坠","parent":"脸","length":24.05,"rotation":-91.43,"x":-100.33,"y":-5.57},{"name":"耳坠2","parent":"耳坠","length":23.44,"rotation":1.43,"x":24.05},{"name":"耳坠3","parent":"耳坠2","length":17.47,"rotation":-3.95,"x":23.44},{"name":"马尾2","parent":"头发2","length":81.88,"rotation":-86.63,"x":-68.97,"y":-190.14},{"name":"马尾3","parent":"马尾2","length":65.8,"rotation":-19.82,"x":81.88},{"name":"马尾4","parent":"马尾3","length":64.8,"rotation":-11.78,"x":64.88,"y":0.98},{"name":"马尾5","parent":"马尾4","length":70.65,"rotation":6.25,"x":64.8},{"name":"马尾6","parent":"马尾5","length":84.56,"rotation":16.27,"x":70.65},{"name":"马尾1","parent":"头发2","length":63.94,"rotation":-94.85,"x":73.47,"y":-178.12},{"name":"马尾7","parent":"马尾1","length":81.15,"rotation":23.42,"x":63.94},{"name":"马尾8","parent":"马尾7","length":89.24,"rotation":8.69,"x":81.15},{"name":"马尾9","parent":"马尾8","length":84.45,"rotation":-11.14,"x":89.24},{"name":"马尾10","parent":"马尾9","length":73.93,"rotation":-15.18,"x":84.45},{"name":"身体6","parent":"身体","length":27,"rotation":145.32,"x":16.79,"y":29.5},{"name":"身体7","parent":"身体6","length":25.61,"rotation":4.56,"x":27},{"name":"身体8","parent":"身体7","length":24.32,"rotation":0.13,"x":25.61},{"name":"身体9","parent":"身体","length":24.42,"rotation":179.44,"x":-6.69,"y":-0.05},{"name":"身体10","parent":"身体9","length":26.21,"rotation":0.9,"x":24.42},{"name":"身体11","parent":"身体10","length":25.85,"rotation":-0.01,"x":26.21},{"name":"身体12","parent":"身体","length":31.21,"rotation":-152,"x":7.42,"y":-51.27},{"name":"身体13","parent":"身体12","length":28.26,"rotation":4.19,"x":31.21},{"name":"右小臂","parent":"右大笔","length":90.08,"rotation":-1.36,"x":88.54,"y":-2.52},{"name":"target1","parent":"body","x":-23.41,"y":29.19},{"name":"target2","parent":"body","x":37.61,"y":31.29},{"name":"hand1","parent":"身体","rotation":-88.88,"x":-44,"y":77.49},{"name":"hand2","parent":"身体","rotation":-88.88,"x":-52.86,"y":-96.24},{"name":"胸针","parent":"身体5","length":26.01,"rotation":-64.8,"x":31.7,"y":-11.98},{"name":"阴影","parent":"root","x":515.74,"y":-918.94}],"slots":[{"name":"阴影","bone":"阴影","attachment":"阴影"},{"name":"马尾2","bone":"马尾2","attachment":"马尾2"},{"name":"马尾1","bone":"马尾1","attachment":"马尾1"},{"name":"左手","bone":"左大臂","attachment":"左手"},{"name":"飘带3","bone":"飘带3","attachment":"飘带3"},{"name":"腿1","bone":"腿1","attachment":"腿1"},{"name":"腿2","bone":"腿4","attachment":"腿2"},{"name":"身体","bone":"身体","attachment":"身体"},{"name":"腰牌","bone":"腰牌","attachment":"腰牌"},{"name":"右手","bone":"右大笔","attachment":"右手"},{"name":"头发","bone":"头发","attachment":"头发"},{"name":"脸","bone":"脸","attachment":"脸"},{"name":"眼框","bone":"眼框","attachment":"眼框"},{"name":"嘴开口","bone":"嘴开口","attachment":"嘴微笑"},{"name":"眼珠","bone":"眼珠","attachment":"眼珠"},{"name":"眼睫毛","bone":"眼睫毛","attachment":"眼睫毛"},{"name":"头发3","bone":"头发20","attachment":"头发3"},{"name":"头发2","bone":"头发16","attachment":"头发2"},{"name":"头发1","bone":"头发1","attachment":"头发1"},{"name":"眉毛","bone":"眉毛","attachment":"眉毛"},{"name":"头花","bone":"头发1","attachment":"头花"},{"name":"耳坠","bone":"耳坠","attachment":"耳坠"},{"name":"胸针","bone":"胸针","attachment":"胸针"},{"name":"飘带1","bone":"飘带1","attachment":"飘带1"}],"ik":[{"name":"hand","order":2,"bones":["左大臂","左小臂"],"target":"hand1","mix":0,"bendPositive":false},{"name":"target1","bones":["腿2","腿3"],"target":"target1"},{"name":"target2","order":1,"bones":["腿4","腿5"],"target":"target2"},{"name":"target4","order":3,"bones":["右大笔","右小臂"],"target":"hand2","mix":0,"bendPositive":false}],"skins":[{"name":"default","attachments":{"右手":{"右手":{"type":"mesh","uvs":[0.02733,0,0.24313,0.00001,0.40091,0.04204,0.4573,0.1164,0.6711,0.09884,0.67116,0.19361,0.67121,0.27374,0.87321,0.27496,0.93039,0.33835,0.90162,0.38859,0.96601,0.44732,0.96267,0.49525,0.70657,0.50259,0.74585,0.54314,0.83027,0.63062,0.91021,0.71347,0.9754,0.78102,0.99999,0.86535,1,0.95112,0.82449,1,0.57957,0.99285,0.40389,0.94067,0.43859,0.86498,0.39333,0.77201,0.35022,0.68344,0.30264,0.58569,0.28122,0.54215,0.15371,0.51697,0.15988,0.44284,0.1759,0.38239,0.05454,0.29908,0.10449,0.22616,0.05745,0.17719,0,0.11739,0,0.03965,0.78297,0.8969,0.71621,0.81479,0.66614,0.74111,0.60842,0.65503,0.54787,0.56965,0.49853,0.50658],"triangles":[20,35,19,19,35,18,35,20,22,35,17,18,20,21,22,22,36,35,35,36,17,36,16,17,36,23,37,36,22,23,36,15,16,36,37,15,37,24,38,37,23,24,37,14,15,37,38,14,24,39,38,24,25,39,38,13,14,38,39,13,25,26,39,26,40,39,39,12,13,39,40,12,40,26,28,26,27,28,6,12,40,40,28,29,40,29,6,11,12,10,8,9,6,9,12,6,10,12,9,8,6,7,30,31,29,6,31,5,5,31,3,31,6,29,31,32,3,3,4,5,33,3,32,3,33,2,2,33,1,0,1,34,1,33,34],"vertices":[2,41,19.37,11.84,0.76581,42,-18.44,-2.99,0.23419,2,41,35.89,18.17,0.63233,42,-12.99,13.84,0.36767,2,41,50.98,14.96,0.35489,42,-1,23.56,0.64511,2,41,60.63,2.73,0.13682,42,14.57,23.37,0.86318,2,41,75.74,12.28,0.02786,42,16.64,41.13,0.97214,2,41,82.53,-5.41,0.00099,42,34.67,35.29,0.99901,2,42,49.92,30.35,0.99905,77,-39.39,31.94,0.00095,2,42,55.26,46.03,0.99295,77,-34.42,47.75,0.00705,2,42,68.76,46.58,0.97462,77,-20.93,48.62,0.02538,2,42,77.59,41.24,0.94377,77,-11.98,43.48,0.05623,2,42,90.39,42.64,0.86751,77,0.79,45.19,0.13249,2,42,99.43,39.42,0.71995,77,9.9,42.19,0.28005,2,42,94.35,19,0.48932,77,5.3,21.64,0.51068,2,42,103.06,19.56,0.24997,77,13.99,22.41,0.75003,2,42,121.84,20.75,0.06304,77,32.74,24.05,0.93696,2,42,139.62,21.87,0.0088,77,50.49,25.59,0.9912,2,42,154.12,22.79,0.0001,77,64.97,26.86,0.9999,1,77,81.7,23.97,1,1,77,98.14,19.07,1,1,77,103.4,2.48,1,1,77,96.29,-16.35,1,1,77,82.17,-27.18,1,1,77,68.48,-20.12,1,2,42,137.69,-22.05,0.00004,77,49.6,-18.37,0.99996,2,42,119.75,-19.95,0.00953,77,31.61,-16.69,0.99047,2,42,99.95,-17.64,0.0642,77,11.76,-14.85,0.9358,2,42,91.12,-16.62,0.20099,77,2.92,-14.04,0.79901,2,42,83.11,-25.02,0.42343,77,-4.9,-22.62,0.57657,2,42,69.16,-19.96,0.67357,77,-18.96,-17.9,0.32643,2,42,58.06,-14.99,0.8669,77,-30.17,-13.19,0.1331,2,42,39.14,-19.31,0.96657,77,-48.98,-17.96,0.03343,3,41,41.48,-28.13,0.02021,42,26.53,-10.92,0.97663,77,-61.79,-9.87,0.00316,2,41,34.37,-20.37,0.15153,42,16.03,-11.57,0.84847,2,41,25.69,-10.89,0.39396,42,3.2,-12.36,0.60604,2,41,20.12,3.63,0.67806,42,-11.59,-7.57,0.32194,1,77,82.67,5.11,1,1,77,65.37,4.56,1,2,42,138.71,1.13,0.00092,77,50.07,4.84,0.99908,2,42,120.87,1.94,0.02072,77,32.22,5.22,0.97928,2,42,103.1,2.48,0.05498,77,14.44,5.34,0.94502,2,42,89.85,2.52,0.08033,77,1.19,5.07,0.91967],"hull":35}},"嘴开口":{"嘴_呆":{"width":18,"height":16},"嘴严肃":{"x":1.88,"y":-2.36,"width":19,"height":7},"嘴开口":{"x":-0.62,"y":-0.86,"width":28,"height":22},"嘴微笑":{"x":-1.62,"y":0.14,"width":20,"height":8}},"头发":{"头发":{"type":"mesh","uvs":[0.51025,0,0.27169,0.04352,0.1076,0.18968,0.02072,0.39181,0,0.63282,0.00693,0.85984,0.10484,0.88161,0.15862,1,0.23998,1,0.32133,0.85673,0.30341,0.7059,0.32133,0.53487,0.45095,0.36849,0.58333,0.3234,0.71295,0.41203,0.76122,0.51154,0.73778,0.63127,0.71571,0.72456,0.72812,0.85828,0.80396,0.95002,0.93083,0.97024,0.99288,0.90804,0.94462,0.86295,0.94875,0.77432,0.98736,0.67947,1,0.54886,1,0.35916,0.90187,0.15703,0.7102,0.01864,0.12139,0.65615,0.17654,0.45867],"triangles":[20,22,21,20,19,22,19,18,22,22,18,23,18,17,23,17,16,23,23,16,24,16,15,24,24,15,25,15,26,25,15,14,26,14,27,26,27,14,28,14,13,28,13,0,28,9,8,6,8,7,6,6,10,9,6,29,10,6,5,29,5,4,29,10,29,11,29,30,11,29,4,30,4,3,30,11,30,12,3,2,30,30,2,12,2,1,12,12,0,13,12,1,0],"vertices":[3,10,7.67,19.43,0.37279,11,-70.1,9.69,0.33324,15,-92.19,-18.52,0.29397,4,10,-82.98,4.76,0.31804,11,6.5,-40.95,0.50752,12,-86,-3.11,0.15905,15,-149.69,-90.12,0.01538,4,10,-145.34,-44.49,0.00009,11,85.74,-46.97,0.50752,12,-17.66,-43.67,0.44007,13,-97.44,-12.69,0.05232,4,11,156.17,-19.24,0.17428,12,57.77,-50.06,0.44023,13,-28.18,-43.25,0.36998,14,-116.26,-7.9,0.01551,3,12,136.41,-28.29,0.28117,13,53.26,-48.22,0.38751,14,-40.28,-37.66,0.33132,3,12,206.88,1.6,0.00016,13,129.63,-42.86,0.33519,14,34.03,-56.03,0.66466,2,13,135.63,-5.41,0.26314,14,51.25,-22.24,0.73686,1,14,95.22,-13.49,1,3,12,219.23,101.2,0.00001,13,173.67,47.33,0.02109,14,103.66,16.25,0.97891,4,11,178.32,173.39,0.00106,12,163.07,112.75,0.01261,13,124.31,76.5,0.17729,14,65.67,59.18,0.80904,6,10,-70.93,-218.46,0.00136,11,148.89,131.4,0.04512,12,118.06,88.17,0.13809,13,73.76,67.88,0.33094,14,14.91,66.52,0.48372,15,8.75,-247.82,0.00077,7,10,-64.12,-160.82,0.05272,11,104.82,93.62,0.22862,12,61.81,73.86,0.18959,13,15.92,72.63,0.31923,14,-38.67,88.82,0.17148,15,-24.79,-200.45,0.03704,16,36.14,-219.55,0.00131,8,10,-14.86,-104.75,0.1313,11,30.61,85.76,0.29005,12,-8.19,99.74,0.18185,13,-41.87,119.85,0.16312,14,-79.15,151.52,0.00801,15,-25.76,-125.83,0.20003,16,-7.54,-159.03,0.02553,17,-6.5,-178.93,0.0001,7,10,35.44,-89.56,0.13769,11,-16.68,108.66,0.25013,12,-40.41,141.25,0.05639,13,-58.86,169.58,0.00946,15,1.42,-80.86,0.32735,16,-11.13,-106.61,0.1881,17,-32.13,-133.05,0.03087,7,10,84.7,-119.43,0.08652,11,-32.67,164,0.06675,12,-30.18,197.94,0.00488,13,-30.77,219.87,0.00009,15,58,-70.05,0.30933,16,28.97,-65.25,0.31528,17,-13.51,-78.53,0.21714,7,10,103.04,-152.96,0.00793,11,-23.44,201.1,0.00427,12,-5.45,227.09,0.00001,15,94.08,-82.67,0.14649,16,65.75,-54.85,0.30091,17,15.31,-53.43,0.50445,18,-78.95,-28.22,0.03594,6,10,94.13,-193.31,0.00019,11,10.45,224.73,0.00013,15,114.49,-118.6,0.0184,16,103.09,-72.54,0.13833,17,56.63,-53.48,0.64207,18,-40.12,-42.34,0.20088,4,15,129.32,-147.57,0.00015,16,131.87,-87.72,0.00984,17,89.14,-54.93,0.47411,18,-10.05,-54.78,0.5159,2,17,132.14,-40.66,0.18671,18,35.24,-56.02,0.81329,2,17,156.16,-5.88,0.01832,18,69.67,-31.5,0.98168,1,18,82.75,15.39,1,2,17,126.95,61.2,0.00145,18,65.06,41.52,0.99855,2,17,116.04,40.03,0.09736,18,47.59,25.33,0.90264,2,17,86.53,35.16,0.39725,18,18.19,30.81,0.60275,3,16,140.08,16.3,0.06372,17,52.16,42.64,0.66542,18,-11.57,49.55,0.27086,3,16,98.24,30.79,0.39688,17,8.14,37.89,0.56968,18,-54.58,60.08,0.03344,3,15,127.07,16.23,0.29234,16,35.92,45.05,0.43787,17,-54.3,24.19,0.26979,4,10,156.49,-33.49,0.05474,15,53.76,41.84,0.57093,16,-38.8,23.89,0.37415,17,-112.84,-26.84,0.00017,3,10,83.65,13.15,0.3727,15,-31.56,27.7,0.58631,16,-100.5,-36.71,0.04099,6,10,-140.1,-201.69,0,11,188.4,72.2,0.00456,12,127.21,17.59,0.25914,13,59.47,-1.84,0.40297,14,-20.12,4.56,0.33333,15,-53.85,-281.69,0,5,10,-119.14,-135.15,0,11,127.89,37.45,0.00684,12,57.57,13.29,0.38871,13,-7.78,16.73,0.60445,15,-82.85,-218.23,0],"hull":29}},"头发1":{"头发1":{"type":"mesh","uvs":[0,0.0131,0.15705,0.14364,0.20418,0.33198,0.11824,0.53151,0.03784,0.72917,0.09051,0.90819,0.24577,0.97905,0.41489,1,0.47034,0.96786,0.42321,0.88954,0.44539,0.82055,0.62283,0.83919,0.79472,0.78512,0.9278,0.71612,1,0.63407,1,0.58186,0.86126,0.61169,0.74482,0.55202,0.68105,0.44386,0.66164,0.27603,0.52857,0.11007,0.22082,0,0.05724,0,0.56461,0.64712,0.69769,0.69561,0.83908,0.68255,0.94166,0.63034],"triangles":[26,16,15,26,15,14,16,24,17,25,16,26,24,23,17,16,25,24,13,25,26,13,26,14,12,24,25,12,25,13,11,10,23,24,11,23,12,11,24,23,3,18,23,18,17,10,5,4,9,5,10,6,5,9,7,6,9,8,7,9,10,4,3,23,10,3,1,22,21,1,21,20,0,22,1,2,1,20,2,20,19,2,19,18,3,2,18],"vertices":[1,19,-31.64,-33.37,1,3,19,13.31,-19,0.83606,20,-48.11,-40.93,0.16341,21,-101.16,-67.93,0.00053,3,19,65.86,-29.88,0.50273,20,4.54,-30.52,0.32129,21,-52.7,-44.87,0.17597,4,19,112.23,-65.34,0.1694,20,61.05,-45.15,0.32296,21,5.67,-45.15,0.45278,22,-75.68,-13.08,0.05486,3,20,117.01,-58.76,0.15955,21,63.26,-44.55,0.46332,22,-23.75,-37.97,0.37713,3,20,167.01,-47.37,0.00166,21,108.91,-21.21,0.28787,22,27.53,-37.17,0.71046,2,21,120.03,12.47,0.01107,22,52.37,-11.87,0.98893,4,21,116.94,44.82,0.00005,22,63.88,18.53,0.99984,23,97.54,-100.54,0.00003,24,-23.15,-109.24,0.00009,4,21,105.39,52.43,0.01877,22,56.87,30.46,0.97124,23,97.52,-86.7,0.00397,24,-14.7,-98.29,0.00601,4,21,86.66,37.84,0.13015,22,33.62,25.63,0.77977,23,75.02,-79.12,0.03574,24,-27.84,-78.52,0.05433,4,21,66.86,36.56,0.18554,22,15.29,33.22,0.35533,23,63.04,-63.31,0.24839,24,-27.62,-58.68,0.21074,4,21,62.72,70.25,0.18983,22,26.45,65.28,0.17049,23,88.87,-41.28,0.07312,24,6.28,-57.09,0.56656,4,21,39.21,97.34,0.07853,22,17.31,99.96,0.02864,23,98.51,-6.73,0.04135,24,35.06,-35.68,0.85148,4,21,13.68,116.22,0.01296,22,2.73,128.18,0.00361,23,100.19,24.98,0.00239,24,55.81,-11.64,0.98104,3,21,-12.23,123.03,0.00008,22,-17.51,145.73,0.00002,24,64.55,13.69,0.99991,2,23,80.47,59.91,0.00405,24,61.61,28.06,0.99595,2,23,69.74,34.56,0.18172,24,37.6,14.58,0.81828,4,19,160.52,42.94,0.00653,20,63.43,73.39,0.03103,23,42.68,28.79,0.47264,24,12.68,26.6,0.48979,6,19,127.83,42.72,0.11255,20,33.4,60.47,0.09009,21,-47.14,50.42,0.03879,22,-80.88,95.98,0.00161,23,11.77,39.45,0.61935,24,-5.23,53.95,0.1376,4,19,82.55,56.4,0.47232,20,-13.64,55.46,0.12289,23,-26.39,67.4,0.39994,24,-18.28,99.42,0.00484,3,19,29.97,49.86,0.79912,20,-59.54,28.98,0.09186,23,-78.16,78.71,0.10901,3,19,-19.94,6.86,0.98892,20,-88.79,-30.04,0.00277,23,-139.52,54.74,0.00831,1,19,-31.15,-21.95,1,6,19,173.09,1.51,0.0049,20,91.12,40.1,0.02327,21,13.82,44.89,0.13138,22,-28.62,64.11,0.10988,23,40.76,-14.46,0.44374,24,-15.33,-6.42,0.28683,4,21,20.04,72.81,0.06408,22,-10.72,86.42,0.00471,23,67.48,-4.26,0.26895,24,12.05,-14.72,0.66225,4,21,9.2,97.51,0.01236,22,-9.55,113.37,0.00256,23,82.11,18.4,0.01245,24,37.49,-5.76,0.97263,3,21,-10.22,112.14,0.00043,22,-20.51,135.07,0.00011,24,53.54,12.5,0.99946],"hull":23}},"头发2":{"头发2":{"type":"mesh","uvs":[0.15689,0,0,0.22271,0,0.48794,0.07152,0.75749,0.25698,0.96234,0.42772,1,0.79864,1,0.99588,0.8804,1,0.6777,0.96055,0.42109,0.72505,0.20546,0.413,0.05667,0.29231,0,0.63968,0.80061,0.49543,0.60654,0.35118,0.39953,0.25698,0.15586],"triangles":[14,9,8,13,14,8,7,13,8,4,14,13,5,4,13,6,13,7,5,13,6,14,3,2,4,3,14,16,0,12,16,12,11,1,0,16,10,15,16,10,16,11,1,16,15,2,1,15,14,15,10,14,10,9,14,2,15],"vertices":[3,25,-30.39,-3.56,0.99948,27,-136.72,61.88,0.00032,28,-175.56,110.76,0.00019,3,25,22.03,-34.57,0.77013,26,-52.29,-19.41,0.21391,27,-108.92,7.7,0.01596,4,25,86.37,-38.3,0.4368,26,7.78,-42.77,0.25909,27,-56.47,-29.76,0.30287,28,-121.58,1.56,0.00125,4,25,152.5,-29.38,0.10346,26,73.44,-54.65,0.25909,27,4.23,-57.47,0.52017,28,-70.05,-40.83,0.11728,3,26,131.8,-41.92,0.04518,27,63.92,-59.54,0.59072,28,-12.89,-58.18,0.3641,3,25,215,30.51,0,27,89.04,-40.13,0.30382,28,16.37,-45.88,0.69618,4,25,218.82,96.42,0.00367,26,175.27,44.62,0.00073,27,127.41,13.6,0.09787,28,67.27,-3.83,0.89774,4,25,191.84,133.15,0.02675,26,160.91,87.87,0.00929,27,124.17,59.06,0.05414,28,75.83,40.93,0.90982,4,25,142.71,136.73,0.12221,26,115.27,106.41,0.04392,27,84.51,88.28,0.13964,28,45.02,79.38,0.69423,4,25,80.05,133.33,0.34426,26,54.61,122.47,0.07495,27,29.69,118.81,0.17938,28,-0.11,122.98,0.40141,4,25,25.31,94.51,0.64753,26,-9.42,102.39,0.06631,27,-37.31,115.16,0.13276,28,-65.8,136.68,0.15339,4,25,-14,41.16,0.88489,26,-63.25,63.73,0.03168,27,-99.02,90.98,0.04759,28,-131.65,129.18,0.03585,4,25,-28.99,20.51,0.99399,26,-83.87,48.69,0.00035,27,-122.71,81.5,0.00351,28,-156.98,126.11,0.00215,4,25,168.81,70.97,0.01851,26,119.86,35.81,0.05728,27,71.54,18.73,0.2699,28,14.6,15.5,0.65432,4,25,120.24,48.07,0.17474,26,66.6,28.97,0.2137,27,18.24,25.25,0.28575,28,-35.23,35.51,0.32581,4,25,68.54,25.35,0.50501,26,10.41,23.27,0.21291,27,-37.62,33.6,0.24643,28,-87.07,57.94,0.03565,4,25,8.46,12.04,0.82121,26,-50.85,29.11,0.15642,27,-95.55,54.37,0.01692,28,-137.71,92.91,0.00545],"hull":13}},"头发3":{"头发3":{"type":"mesh","uvs":[0.97432,0,0.67627,0,0.19487,0.00338,0,0.24593,0,0.55255,0.02457,0.84773,0.28002,1,0.57477,1,0.46997,0.86603,0.41429,0.74705,0.66319,0.64179,0.85314,0.45644,0.98414,0.19101,1,0,0.39789,0.52279,0.51907,0.27566],"triangles":[15,2,1,12,0,13,12,1,0,10,14,11,9,14,10,4,14,9,5,4,9,6,5,9,8,6,9,6,8,7,3,2,15,14,3,15,4,3,14,1,12,15,11,15,12,14,15,11],"vertices":[1,10,-3.33,-29.57,1,4,29,19.13,-27.98,0.3128,30,-68.58,-4.58,0.08717,31,-128.25,65.55,0.00003,10,-51.02,-29.57,0.6,4,29,76.94,-78.88,0.18404,30,-31.9,-72.32,0.24696,31,-128.86,-11.48,0.001,10,-128.04,-30.35,0.568,3,29,137.26,-58.4,0.10203,30,31.78,-73.92,0.66762,31,-73.89,-43.65,0.23035,3,29,184.18,-6.17,0.00268,30,93.85,-41.11,0.43364,31,-3.69,-44.92,0.56368,2,30,151.78,-6.05,0.10529,31,63.97,-42.21,0.89471,1,31,99.57,-1.98,1,1,31,100.42,45.17,1,3,29,176.23,97.48,0.00081,30,122.18,58.91,0.00873,31,69.45,28.96,0.99046,3,29,164.64,71.26,0.0311,30,102.26,38.31,0.30396,31,42.04,20.55,0.66494,3,29,118.91,79.95,0.22598,30,62.33,62.25,0.26157,31,18.66,60.8,0.51245,3,29,67.93,68.69,0.55697,30,10.61,69.28,0.25418,31,-23.23,91.96,0.18885,3,29,11.72,37.48,0.85341,30,-52.93,59.41,0.11583,31,-83.62,114.01,0.03076,1,10,0.78,-29.57,1,3,29,132.27,31.31,0.29055,30,58.08,11.99,0.31418,31,-9.35,18.85,0.39528,3,29,80.03,2.17,0.61372,30,-1.01,2.68,0.31479,31,-65.58,39.26,0.07149],"hull":14}},"头花":{"头花":{"x":64.78,"y":-7.03,"rotation":68.75,"width":105,"height":106}},"左手":{"左手":{"type":"mesh","uvs":[0.91989,0,0.69645,0,0.58473,0.03586,0.51364,0.1405,0.37145,0.11355,0.32405,0.21818,0.37483,0.29745,0.21572,0.28794,0.19879,0.37196,0.2428,0.39574,0.18187,0.48452,0.25296,0.49562,0.34775,0.49086,0.32958,0.51018,0.23413,0.60168,0.15037,0.69655,0.07635,0.78685,0.01012,0.87442,0,0.96199,0.24192,0.9848,0.47762,0.96655,0.50294,0.90088,0.4971,0.8425,0.55359,0.75493,0.61787,0.65641,0.69189,0.54512,0.71526,0.51502,0.7737,0.50772,0.88278,0.50863,0.91005,0.47944,0.8672,0.41377,0.82629,0.36086,0.90811,0.28788,0.97628,0.20214,0.94122,0.18024,0.85162,0.17842,0.91784,0.09906,0.94122,0.04889,0.54382,0.49859,0.5146,0.52596,0.41915,0.62903,0.35292,0.72299,0.28475,0.82425,0.25748,0.9109],"triangles":[13,12,39,19,43,20,19,18,43,20,43,21,18,17,43,21,42,22,21,43,42,43,17,42,17,16,42,23,22,41,16,15,42,22,42,41,42,15,41,41,40,23,23,40,24,15,14,41,41,14,40,40,39,24,24,39,25,14,13,40,40,13,39,39,38,25,25,38,26,39,12,38,27,26,30,28,27,29,29,27,30,38,30,26,12,11,9,11,10,9,31,38,6,6,38,9,38,12,9,9,8,6,8,7,6,31,6,32,35,6,3,6,35,32,6,5,3,33,35,34,33,32,35,5,4,3,3,2,35,35,2,36,30,38,31,36,2,1,37,1,0,37,36,1],"vertices":[2,38,12.58,-9.2,0.7462,39,-17.77,9.27,0.2538,2,38,33.44,-14.19,0.72683,39,-11.61,-11.28,0.27317,2,38,45.58,-9.54,0.59522,39,-1.48,-19.44,0.40478,2,38,57.21,9.73,0.40653,39,21.02,-19.81,0.59347,2,38,69.2,1.18,0.22684,39,19.65,-34.48,0.77316,2,38,78.62,20.98,0.10065,39,41.51,-32.67,0.89935,2,38,77.66,37.92,0.03353,39,55.67,-23.33,0.96647,3,38,92.07,32.47,0.00791,39,58.19,-38.53,0.99181,40,-31.48,-39.33,0.00029,3,38,97.66,48.84,0.0011,39,75.16,-35.13,0.99337,40,-14.47,-36.17,0.00553,3,38,94.68,54.56,0.00014,39,78.61,-29.69,0.96985,40,-10.94,-30.77,0.03,3,38,104.61,70.9,0.00001,39,97.73,-30.06,0.89801,40,8.17,-31.41,0.10198,2,39,97.94,-22.87,0.7517,40,8.48,-24.22,0.2483,2,39,94.4,-14.43,0.52574,40,5.05,-15.74,0.47426,2,39,98.69,-14.97,0.41268,40,9.34,-16.33,0.58732,2,39,119.29,-18.36,0.27436,40,29.89,-20.01,0.72564,2,39,140.23,-20.47,0.14782,40,50.8,-22.41,0.85218,2,39,160,-21.96,0.06064,40,70.55,-24.17,0.93936,2,39,179.02,-22.89,0.01717,40,89.55,-25.37,0.98283,2,39,196.5,-18.67,0.00267,40,107.09,-21.38,0.99733,1,40,105.22,2.23,1,2,39,184.22,25.52,0.00003,40,95.42,22.97,0.99997,2,39,170.63,23.98,0.00059,40,81.81,21.62,0.99941,2,39,159.32,20.01,0.00352,40,70.45,17.8,0.99648,2,39,140.57,20.04,0.01303,40,51.7,18.1,0.98697,2,39,119.45,20.15,0.03487,40,30.59,18.5,0.96513,2,39,95.56,20.41,0.07404,40,6.7,19.08,0.92596,2,39,89,20.78,0.13285,40,0.15,19.55,0.86715,2,39,85.96,25.73,0.21274,40,-2.83,24.53,0.78726,2,39,83.13,35.81,0.31612,40,-5.52,34.66,0.68388,2,39,76.65,36.6,0.44438,40,-11.99,35.53,0.55562,2,39,64.93,28.79,0.59019,40,-23.81,27.89,0.40981,3,38,38.54,60.65,0.00155,39,55.67,21.91,0.73312,40,-33.16,21.14,0.26533,3,38,27.42,47.93,0.01182,39,39.09,25.14,0.84257,40,-49.7,24.6,0.14561,3,38,16.96,32.36,0.04772,39,20.37,26.36,0.88723,40,-68.4,26.07,0.06505,3,38,19.19,27.21,0.13228,39,17.04,21.84,0.84527,40,-71.8,21.61,0.02245,3,38,27.47,24.85,0.27804,39,19.15,13.5,0.71648,40,-69.8,13.23,0.00548,3,38,17.5,10.51,0.46697,39,1.74,14.91,0.53224,40,-87.19,14.89,0.0008,3,38,12.92,1.03,0.64547,39,-8.76,14.11,0.3545,40,-97.69,14.23,0.00003,2,39,90.51,4.05,0.35679,40,1.42,2.8,0.64321,2,39,96.69,2.97,0.19457,40,7.58,1.64,0.80543,2,39,119.56,0.27,0.08141,40,30.42,-1.39,0.91859,2,39,139.83,-0.29,0.02355,40,50.68,-2.22,0.97645,2,39,161.6,-0.59,0.00403,40,72.44,-2.83,0.99597,2,39,179.36,2,0.00015,40,90.24,-0.48,0.99985],"hull":38}},"眉毛":{"眉毛":{"x":10.51,"y":1.58,"rotation":-172.98,"width":51,"height":13}},"眼框":{"眼框":{"x":-40,"y":11.09,"rotation":2.99,"width":68,"height":84}},"眼珠":{"眼珠":{"x":0.95,"y":1.32,"width":54,"height":55}},"眼睫毛":{"眼睫毛":{"x":29.5,"y":-2.48,"rotation":-168.94,"width":86,"height":39},"眼睫闭":{"x":27.96,"y":12.76,"rotation":-168.94,"width":90,"height":38}},"耳坠":{"耳坠":{"type":"mesh","uvs":[0.54929,0,0.10709,0.05722,0,0.2525,0.14009,0.35286,0.33149,0.3827,0.26549,0.55086,0.18629,0.72987,0.11369,0.93059,0.25889,1,0.63509,1,0.81989,0.93872,0.79349,0.73801,0.72749,0.55086,0.73409,0.45864,0.91889,0.34472,1,0.18198,0.89249,0.04637,0.51628,0.19283,0.72088,0.37456],"triangles":[9,11,10,9,8,7,11,9,6,7,6,9,6,5,11,5,12,11,12,5,13,13,5,4,13,4,18,13,18,14,18,4,17,4,3,17,18,17,14,3,2,17,14,17,15,2,1,17,17,16,15,17,0,16,17,1,0],"vertices":[1,56,-2.32,0.39,1,2,56,2.19,-12.77,0.99761,57,-22.17,-12.22,0.00239,2,56,16.52,-15.62,0.95513,57,-7.92,-15.43,0.04487,2,56,23.74,-11.24,0.73897,57,-0.59,-11.23,0.26103,3,56,25.77,-5.44,0.40803,57,1.59,-5.49,0.58983,58,-21.42,-6.98,0.00214,3,56,38.09,-7.12,0.11717,57,13.86,-7.47,0.59429,58,-9.04,-8.11,0.28854,2,57,26.93,-9.84,0.37812,58,4.16,-9.58,0.62188,2,57,41.58,-12.02,0.04693,58,18.93,-10.74,0.95307,1,58,23.68,-6.05,1,1,58,22.91,5.21,1,2,57,42.18,9.17,0.04169,58,18.06,10.43,0.95831,2,57,27.53,8.37,0.37464,58,3.5,8.64,0.62536,3,56,37.75,6.74,0.01821,57,13.86,6.39,0.68976,58,-9.99,5.72,0.29202,3,56,31.01,6.77,0.2442,57,7.13,6.59,0.75542,58,-16.72,5.45,0.00038,2,56,22.56,12.1,0.57415,57,-1.18,12.14,0.42585,2,56,10.62,14.24,0.88928,57,-13.06,14.57,0.11072,2,56,0.81,10.77,0.99662,57,-22.96,11.34,0.00338,1,56,11.78,-0.25,1,2,56,24.89,6.22,0.39814,57,0.99,6.2,0.60186],"hull":17}},"胸针":{"胸针":{"x":9.99,"y":1.32,"rotation":85.79,"width":37,"height":62}},"脸":{"脸":{"x":-13.86,"y":71.24,"width":239,"height":177}},"腰牌":{"腰牌":{"type":"mesh","uvs":[0.45835,0,0.16659,0.02791,0,0.1092,0.11796,0.2084,0.35137,0.2332,0.35624,0.27591,0.02071,0.35995,0,0.50462,0.33192,0.5804,0.2833,0.64378,0.34651,0.66031,0.26871,0.71955,0.33679,0.74573,0.29789,0.82694,0.2833,0.91512,0.27844,0.99917,0.61396,1,0.60424,0.92063,0.59451,0.82557,0.56534,0.74565,0.62855,0.70019,0.54102,0.66023,0.65773,0.62992,0.59938,0.58859,1,0.50454,1,0.37503,0.61396,0.28134,0.59938,0.23312,0.89114,0.18628,0.93977,0.08983,0.80361,0.01957,0.49723,0.12564,0.50695,0.44666,0.46805,0.62715,0.45346,0.70568],"triangles":[16,15,17,15,14,17,17,14,18,14,13,18,13,12,18,12,19,18,12,34,19,12,11,34,19,34,20,11,10,34,34,21,20,34,10,21,10,33,21,10,9,33,21,33,22,9,8,33,33,23,22,33,8,23,24,23,32,23,8,32,8,7,32,7,6,32,32,25,24,6,5,32,32,26,25,32,5,26,5,27,26,5,4,27,27,4,31,4,3,31,27,31,28,3,2,31,28,31,29,2,1,31,1,0,31,31,30,29,31,0,30],"vertices":[1,51,-22.89,0.56,1,1,51,-18.56,-14.54,1,1,51,-4.34,-23.7,1,2,51,13.78,-18.52,0.94435,52,-6.45,-19,0.05565,3,51,18.79,-6.84,0.62692,52,-2.23,-7.01,0.37302,53,-26.73,-6.84,0.00006,3,51,26.48,-6.95,0.29359,52,5.46,-6.6,0.54571,53,-19.04,-6.48,0.1607,3,51,40.8,-24.75,0.01591,52,20.93,-23.4,0.49591,53,-3.67,-23.38,0.48818,3,52,46.99,-23.92,0.17855,53,22.38,-24.07,0.66478,54,-11.94,-24.64,0.15667,3,52,60.28,-6.72,0.00586,53,35.78,-6.95,0.50414,54,0.66,-6.92,0.49,2,53,47.22,-9.27,0.17666,54,12.2,-8.72,0.82334,2,54,14.98,-5.32,0.83541,55,-10.21,-4.93,0.16459,2,54,25.86,-8.64,0.52484,55,0.53,-8.67,0.47516,2,54,30.36,-4.9,0.19151,55,5.17,-5.1,0.80849,2,54,45.07,-6,0.02276,55,19.83,-6.77,0.97724,1,55,35.71,-7.17,1,1,55,50.84,-7.09,1,1,55,50.62,10.02,1,1,55,36.35,9.22,1,2,54,43.91,9.09,0.04013,55,19.25,8.35,0.95987,2,54,29.64,6.74,0.31677,55,4.9,6.56,0.68323,2,54,21.28,9.47,0.65011,55,-3.35,9.6,0.34989,3,53,50,3.92,0.00032,54,14.37,4.58,0.94299,55,-10.44,4.99,0.05669,2,53,44.46,9.79,0.14043,54,8.57,10.2,0.85957,3,52,61.47,6.95,0.01647,53,37.06,6.71,0.45729,54,1.32,6.78,0.52624,3,52,45.93,27.06,0.1516,53,21.65,26.93,0.65517,54,-15.01,26.27,0.19322,3,51,45.83,25.02,0.00207,52,22.62,26.59,0.48175,53,-1.66,26.6,0.51618,3,51,28.07,6.13,0.27851,52,6.17,6.56,0.52216,53,-18.25,6.68,0.19932,3,51,19.37,5.79,0.61185,52,-2.5,5.64,0.38704,53,-26.92,5.81,0.00112,2,51,11.63,21.05,0.94311,52,-11.23,20.34,0.05689,1,51,-5.59,24.33,1,1,51,-18.55,17.98,1,1,51,-0.2,1.49,1,2,52,36.03,1.71,0.00203,53,11.58,1.64,0.99797,1,54,8.65,0.51,1,2,54,22.8,0.61,0.99915,55,-2.17,0.7,0.00085],"hull":31}},"腿1":{"腿1":{"type":"mesh","uvs":[0.41947,0,0,0.08756,0,0.24183,0.07292,0.41733,0.09513,0.498,0.13512,0.59142,0.17511,0.7287,0.17066,0.86033,0.1129,0.96223,0.41503,1,0.89932,0.98063,0.98374,0.88439,1,0.75418,1,0.59991,1,0.50084,0.98818,0.41309,1,0.25457,0.98818,0.08473,0.49501,0.23192,0.50834,0.40459,0.53055,0.49234,0.53055,0.59,0.53944,0.7471,0.535,0.88722],"triangles":[21,20,14,21,5,20,21,14,13,6,5,21,22,21,13,6,21,22,22,13,12,7,6,22,11,22,12,23,7,22,23,22,11,8,7,23,10,23,11,9,8,23,9,23,10,1,0,18,2,1,18,18,17,16,19,18,16,3,2,18,15,19,16,19,3,18,20,19,15,4,3,19,20,4,19,20,15,14,20,5,4,18,0,17],"vertices":[1,33,-34,-4.57,1,1,33,-11.49,-31.81,1,2,32,78.53,-1.19,0.00093,33,26.92,-33.03,0.99907,2,33,70.4,-28.31,0.99147,34,-28.71,-24.27,0.00853,2,33,90.33,-25.85,0.72539,34,-8.64,-24.84,0.27461,2,33,113.37,-21.88,0.05959,34,14.74,-24.37,0.94041,1,34,48.92,-25.17,1,1,34,81.31,-29.29,1,1,34,105.88,-36.74,1,1,34,117.95,-14.11,1,1,34,117.59,24.45,1,1,34,94.65,33.83,1,2,33,151.31,47.82,0.00024,34,62.73,38.83,0.99976,2,33,113.08,46.48,0.14629,34,24.72,43.25,0.85371,3,32,59.33,96.79,0.00006,33,88.52,45.61,0.52815,34,0.32,46.09,0.47178,3,32,46.4,79.26,0.01115,33,66.81,43.92,0.84235,34,-21.41,47.68,0.1465,2,33,27.49,43.47,0.99903,34,-60.35,53.14,0.00097,1,33,-14.57,41.06,1,2,32,48.54,19.83,0.01714,33,23.27,3.41,0.98286,3,32,74.59,53.83,0.00028,33,66.03,5.96,0.99185,34,-27.88,10.26,0.00788,2,33,87.72,8.48,0.80999,34,-6.06,9.49,0.19001,2,33,111.92,9.33,0.02452,34,18,6.7,0.97548,1,34,56.78,2.89,1,1,34,91.26,-1.47,1],"hull":18}},"腿2":{"腿2":{"type":"mesh","uvs":[0.32953,0.56228,0,0.59764,0,0.65952,0.03093,0.72752,0.04903,0.7758,0.043,0.81048,0.06411,0.83904,0.05506,0.88732,0.04903,0.94444,0.02792,0.98796,0.06713,0.99748,0.29937,1,0.52558,0.99476,0.5859,0.98116,0.59495,0.94988,0.62209,0.89412,0.64321,0.84312,0.65527,0.8098,0.66432,0.7724,0.6975,0.71732,0.72163,0.64728,0.71559,0.5854,0.33556,0.65205,0.33858,0.72073,0.33254,0.77377,0.33556,0.81117,0.33556,0.84517,0.33254,0.89277,0.31445,0.94105,0.29937,0.96757],"triangles":[10,29,11,11,29,12,10,9,29,12,29,13,9,8,29,13,29,14,29,28,14,29,8,28,28,27,14,14,27,15,8,7,28,28,7,27,27,26,15,15,26,16,27,7,26,7,6,26,6,25,26,26,25,16,16,25,17,6,5,25,5,4,25,4,24,25,25,24,17,17,24,18,4,3,24,24,23,18,24,3,23,18,23,19,3,2,23,2,22,23,23,22,19,19,22,20,2,1,22,22,21,20,22,0,21,1,0,22],"vertices":[2,35,18.45,19.14,0.192,36,-23.54,-4.95,0.808,1,36,-0.59,-43.96,1,1,36,33.31,-40.99,1,3,35,25.98,-78.71,0.01298,36,70.23,-33.9,0.93748,37,-30.55,-29.17,0.04953,2,36,96.49,-29.34,0.43209,37,-3.9,-29.1,0.56791,2,36,115.56,-28.42,0.05249,37,15.05,-31.4,0.94751,1,37,30.92,-30.07,1,1,37,57.29,-33.34,1,1,37,88.54,-36.65,1,1,37,112.19,-41.2,1,1,37,117.8,-36.78,1,1,37,121.53,-8.19,1,1,37,120.94,20,1,1,37,114.09,28.06,1,1,37,97.03,30.58,1,2,36,155.11,47.13,0.00117,37,66.74,36.43,0.99883,2,36,126.94,47.29,0.07941,37,39,41.32,0.92059,2,36,108.55,47.18,0.28861,37,20.85,44.3,0.71139,2,36,87.96,46.5,0.67364,37,0.44,47.1,0.32636,2,36,57.42,47.95,0.9792,37,-29.41,53.66,0.0208,2,35,82.84,-0.93,0.072,36,18.79,47.57,0.928,2,35,66.95,29.17,0.568,36,-15.05,43.85,0.432,1,36,25.58,0.11,1,1,36,63.18,3.78,1,2,36,92.3,5.58,0.82931,37,-2.16,6.03,0.17069,2,36,112.76,7.75,0.01638,37,18.38,4.73,0.98362,2,36,131.39,9.39,0.00123,37,37.01,3.21,0.99877,1,37,63.08,0.71,1,1,37,89.36,-3.69,1,1,37,103.75,-6.74,1],"hull":22}},"身体":{"身体":{"type":"mesh","uvs":[0.52596,0,0.42106,0,0.43852,0.06361,0.24211,0.11852,0.15263,0.26247,0.17227,0.39158,0.2312,0.42571,0.13517,0.5563,0.06315,0.69134,0.02866,0.77321,0,0.84123,0.07407,0.85755,0.157,0.83084,0.23774,0.79968,0.2465,0.83123,0.23946,0.8798,0.23644,0.92289,0.37022,0.99471,0.58648,1,0.71825,0.92221,0.70015,0.87911,0.69109,0.8326,0.67802,0.78883,0.77056,0.82439,0.87718,0.83055,0.9828,0.8285,1,0.80661,0.94156,0.74163,0.9315,0.66366,0.83091,0.52207,0.77659,0.40442,0.82789,0.35107,0.83896,0.24202,0.8289,0.12848,0.63275,0.06213,0.61465,0,0.27166,0.73761,0.27737,0.63518,0.65281,0.63207,0.65966,0.71278,0.08679,0.80046,0.14727,0.74459,0.18151,0.66311,0.23743,0.5925,0.90844,0.7896,0.8297,0.74537,0.75324,0.67941,0.72128,0.60802,0.4602,0.60202,0.45878,0.50191,0.4602,0.71866,0.46449,0.80906,0.47021,0.8703,0.47164,0.94028,0.45878,0.39207,0.46021,0.26182,0.48165,0.16657,0.53311,0.07423],"triangles":[27,45,28,45,22,39,44,45,27,44,27,26,23,22,45,24,23,45,25,44,26,44,24,45,24,44,25,30,29,47,47,38,49,47,29,28,46,47,28,38,47,46,39,38,46,45,46,28,45,39,46,52,21,20,15,14,52,53,52,20,53,20,19,16,15,52,53,16,52,17,16,53,18,53,19,17,53,18,51,39,22,36,50,51,13,36,51,14,13,51,21,52,51,21,51,22,14,51,52,50,37,48,50,48,38,50,38,39,36,37,50,51,50,39,9,8,41,40,9,41,12,40,41,13,12,41,10,9,40,11,10,40,11,40,12,42,43,37,36,42,37,41,8,42,41,42,36,13,41,36,7,6,43,42,7,43,8,7,42,54,55,30,54,6,55,49,6,54,49,54,30,47,49,30,43,6,49,49,38,48,43,49,48,37,43,48,2,1,0,56,2,57,3,2,56,55,3,56,4,3,55,57,34,56,5,4,55,32,55,56,55,6,5,30,55,31,57,0,35,57,35,34,2,0,57,33,56,34,56,33,32,32,31,55],"vertices":[3,38,-20.29,-28.75,0.05991,41,-16.31,26.52,0.52975,3,89.34,-5.82,0.41034,3,38,-2.95,-32.9,0.20108,41,-32.96,20.13,0.33424,3,88.73,12.01,0.46468,3,38,-2.13,-16.75,0.51975,41,-24.49,6.35,0.15593,3,72.93,8.5,0.32432,5,38,33.54,-11.17,0.68156,41,-50.75,-18.43,0.04989,3,58.08,41.4,0.21886,2,127.23,40.56,0.02728,69,-84.53,-71.93,0.02241,4,38,56.71,20.28,0.62384,3,21.59,55.38,0.15191,2,90.95,55.06,0.11855,69,-46.44,-63.22,0.1057,4,38,60.98,52.45,0.33073,3,-10.55,50.94,0.19453,2,58.74,51.09,0.22415,69,-22.22,-41.63,0.25059,5,38,53.22,63.08,0.12419,3,-18.74,40.64,0.11794,2,50.41,40.91,0.19687,69,-21.16,-28.51,0.54666,70,-50.28,-24.59,0.01434,6,38,76.7,91.03,0.04067,3,-51.92,55.84,0.04269,2,17.45,56.59,0.1056,69,14.87,-22.65,0.46989,70,-13.9,-21.61,0.28924,71,-39.56,-21.52,0.05191,5,38,96.47,121.01,0.00045,3,-86.08,66.93,0.00007,69,49.41,-12.83,0.32499,70,21.32,-14.57,0.28924,71,-4.33,-14.56,0.38524,3,69,69.44,-5.61,0.00652,70,41.86,-8.97,0.27491,71,16.22,-9.01,0.71857,3,71,33.3,-4.4,0.99935,73,22.65,-78.11,0.00062,74,-3.55,-78.11,0.00003,5,70,55.88,8.56,0.01408,71,30.29,8.49,0.96575,72,52,-65.04,0.00312,73,26.55,-65.46,0.01427,74,0.36,-65.46,0.00278,6,69,68.36,20.51,0.00043,70,42.86,17.15,0.10831,71,17.29,17.11,0.72807,72,44.91,-51.14,0.02585,73,19.68,-51.46,0.10193,74,-6.52,-51.46,0.03542,6,69,54.01,27.08,0.01487,70,29.08,24.85,0.243,71,3.53,24.84,0.34269,72,36.72,-37.65,0.07778,73,11.71,-37.84,0.21628,74,-14.5,-37.84,0.10539,6,69,59.54,32.91,0.00043,70,35.06,30.21,0.17905,71,9.51,30.19,0.1471,72,44.56,-35.93,0.03747,73,19.57,-36.24,0.30725,74,-6.63,-36.24,0.3287,5,70,46.06,35.49,0.10174,71,20.53,35.44,0.05952,72,56.73,-36.77,0.01475,73,31.73,-37.27,0.28181,74,5.53,-37.27,0.54217,5,70,55.53,40.63,0.0456,71,30.01,40.57,0.02278,72,67.52,-36.96,0.00179,73,42.51,-37.64,0.15663,74,16.31,-37.63,0.77319,7,70,59.09,69.39,0.01842,71,33.64,69.31,0.0086,72,84.8,-13.7,0,73,60.15,-14.65,0.07525,74,33.94,-14.64,0.89692,75,56.33,-104.43,0.00016,76,17.43,-105.99,0.00064,7,70,41.16,101.51,0.0015,71,15.77,101.48,0.00053,72,85.04,23.08,0.00081,73,60.97,22.13,0.09282,74,34.76,22.14,0.89163,75,74.13,-72.24,0.006,76,37.53,-75.18,0.00672,5,72,64.94,44.9,0.00486,73,41.22,44.26,0.1483,74,15,44.27,0.82077,75,66.91,-43.46,0.01319,76,32.44,-45.96,0.01288,5,72,54.26,41.51,0.0291,73,30.49,41.04,0.3219,74,4.27,41.04,0.56221,75,55.91,-41.34,0.04628,76,21.62,-43.03,0.04051,6,2,-49.76,-39.26,0.00007,72,42.68,39.63,0.07967,73,18.88,39.34,0.34392,74,-7.34,39.34,0.3569,75,44.84,-37.46,0.11266,76,10.87,-38.35,0.10678,6,2,-38.86,-36.82,0.00922,72,31.81,37.09,0.14293,73,7.97,36.97,0.23261,74,-18.25,36.96,0.12305,75,34.08,-34.49,0.21296,76,0.34,-34.61,0.27923,6,2,-47.44,-52.72,0.00007,72,40.23,53.07,0.07042,73,16.64,52.82,0.13066,74,-9.58,52.82,0.03923,75,49.12,-24.48,0.10674,76,16.08,-25.72,0.65288,5,72,41.24,71.24,0.01903,73,17.93,70.96,0.02884,74,-8.29,70.96,0.00374,75,58.69,-9.01,0.03452,76,26.75,-10.99,0.91387,4,72,40.2,89.17,0.00174,73,17.18,88.91,0.00302,74,-9.05,88.91,0.00011,76,35.58,4.65,0.99512,2,75,62.79,12.32,0.01416,76,32.4,9.98,0.98584,2,75,43.81,10.81,0.28701,76,13.36,9.86,0.71299,5,41,107.48,-103.7,0.00825,3,-74.13,-80.37,0.00367,2,-6.73,-79.29,0.05286,75,25.65,18.09,0.55555,76,-4.22,18.45,0.37966,5,41,78.84,-76.78,0.08138,3,-39.34,-62.07,0.05088,2,28.32,-61.5,0.17973,75,-13.66,18.84,0.62752,76,-43.37,22.07,0.06048,4,41,59.68,-52.62,0.2261,3,-10.26,-51.84,0.11516,2,57.55,-51.69,0.26299,75,-44.07,23.9,0.39575,4,41,63.05,-37.04,0.48823,3,3.37,-60.1,0.14307,2,71.06,-60.15,0.23194,75,-52.02,37.71,0.13675,4,41,55.04,-10.92,0.74843,3,30.68,-61.06,0.09586,2,98.35,-61.49,0.10507,75,-75.49,51.72,0.05063,4,41,43.28,14.97,0.90883,3,58.99,-58.38,0.05981,2,126.7,-59.23,0.02181,75,-101.58,63.02,0.00955,3,38,-34.33,-9.42,0.00007,41,6.21,18.52,0.88384,3,74.43,-24.49,0.11609,3,38,-34.95,-25.24,0.01473,41,-2.23,31.92,0.72882,3,89.85,-20.88,0.25645,7,2,-27.42,32.5,0.01314,69,38.06,22.68,0.286,70,12.82,21.73,0.27575,71,-12.74,21.76,0.11991,72,21.04,-32.34,0.11665,73,-3.89,-32.28,0.14996,74,-30.09,-32.29,0.03858,7,2,-1.79,32.03,0.0197,69,16.72,8.49,0.42836,70,-9.57,9.28,0.27229,71,-35.16,9.36,0.03639,72,-4.58,-32.12,0.14088,73,-29.51,-31.66,0.09345,74,-55.71,-31.68,0.00893,7,41,60.42,-113.3,0.00007,2,0.23,-31.77,0.13996,72,-7.24,31.65,0.23704,73,-31.16,32.14,0.07662,74,-57.37,32.13,0.00557,75,-2.81,-20.6,0.50442,76,-35.43,-18.05,0.03632,7,41,68.73,-131.72,0.00005,2,-19.92,-33.33,0.09338,72,12.9,33.41,0.20941,73,-11,33.58,0.15289,74,-37.22,33.58,0.03921,75,15.71,-28.68,0.4085,76,-17.55,-27.47,0.09655,5,70,42.56,3.01,0.24972,71,16.95,2.97,0.73365,72,37.67,-63.29,0.00475,73,12.25,-63.49,0.01037,74,-13.94,-63.5,0.00151,5,70,25.28,4.56,0.49981,71,-0.32,4.56,0.4891,72,23.41,-53.43,0.00317,73,-1.85,-53.4,0.00692,74,-28.05,-53.41,0.00101,7,38,75.26,118.84,0.00003,69,31.92,-0.64,0.3333,70,4.85,-1.03,0.49981,71,-20.77,-0.98,0.15705,72,2.88,-48.21,0.00301,73,-22.3,-47.86,0.00592,74,-48.5,-47.87,0.00087,3,38,61.9,103.88,0.00005,69,12.04,-3.26,0.49995,70,-15.17,-2.06,0.5,5,72,30.85,76.25,0.00809,73,7.63,76.14,0.00906,74,-18.6,76.13,0.00073,75,51.96,0.36,0.07597,76,20.72,-1.16,0.90615,6,2,-27.5,-62.39,0.00448,72,20.19,62.54,0.02925,73,-3.25,62.6,0.0152,74,-29.47,62.59,0.00077,75,36.04,-6.58,0.33918,76,4.34,-6.92,0.61112,8,41,80.6,-118.23,0.0003,3,-79.1,-50.22,0.00002,2,-11.26,-49.07,0.03983,72,4.09,49.06,0.04236,73,-19.56,49.38,0.01596,74,-45.78,49.37,0.00076,75,15.46,-10.72,0.62269,76,-16.49,-9.54,0.27807,8,41,69.13,-103.51,0.00045,3,-61.45,-44.18,0.00003,2,6.47,-43.29,0.05974,72,-13.59,43.11,0.0556,73,-37.33,43.7,0.01515,74,-63.55,43.69,0.00042,75,-2.92,-7.49,0.85807,76,-34.58,-4.98,0.01052,4,38,25.63,115.02,0.00008,2,7.1,1.12,0.98524,69,-8.19,28.85,0.01465,70,-32.78,31.56,0.00003,4,38,20.04,90.62,0.00008,2,32.12,1.85,0.98524,69,-28.34,14.01,0.01465,70,-54.05,18.37,0.00003,4,69,15.46,45.91,0.00067,70,-7.85,46.68,0.00079,71,-33.35,46.76,0.00001,72,15.36,-0.44,0.99853,5,72,37.93,0.95,0.00012,73,13.52,0.74,0.99786,74,-12.69,0.74,0.00124,75,22.18,-69.16,0.00053,76,-14.06,-68.31,0.00025,4,73,28.82,1.92,0.1075,74,2.61,1.92,0.89131,75,36.27,-75.21,0.00065,76,-0.44,-75.38,0.00053,5,72,70.69,3.13,0.00122,73,46.31,2.4,0.12046,74,20.1,2.41,0.86036,75,51.99,-82.9,0.00879,76,14.67,-84.2,0.00918,4,38,13.64,63.91,0.00278,3,-9.01,2.26,0.0028,2,59.58,2.39,0.98808,69,-50.61,-2.05,0.00635,3,38,5.82,32.3,0.0232,3,23.54,3.13,0.97604,69,-77.16,-20.91,0.00077,2,38,-3.27,9.99,0.01144,3,47.46,0.29,0.98856,3,38,-17.15,-10.42,0.02646,41,-8.53,9.63,0.57028,3,70.83,-7.66,0.40326],"hull":36}},"阴影":{"阴影":{"x":2.26,"y":2.44,"width":276,"height":83}},"飘带1":{"飘带1":{"type":"mesh","uvs":[0,0,0.29507,0.03717,0.32565,0.13076,0.36642,0.23,0.42417,0.32585,0.48193,0.41493,0.54988,0.50289,0.61783,0.59085,0.69937,0.69008,0.7911,0.78932,0.88283,0.86825,1,0.95734,0.67558,1,0.30526,0.99793,0.24071,0.90998,0.17276,0.79947,0.1218,0.69459,0.07764,0.58408,0.04026,0.47245,0.00969,0.37096,0,0.27398,0,0.1567,0,0.07325],"triangles":[11,12,10,10,12,14,12,13,14,14,9,10,14,15,9,15,8,9,15,16,8,16,7,8,16,17,7,17,6,7,17,18,6,18,5,6,18,19,5,19,4,5,19,20,4,20,3,4,20,21,3,21,2,3,21,22,2,22,1,2,22,0,1],"vertices":[2,41,17.35,13.75,0.49554,47,-10.53,-9.76,0.50446,2,41,41.73,13.72,0.16221,47,0.13,12.16,0.83779,2,47,22.25,12.67,0.99865,48,-41.27,15.84,0.00135,2,47,45.76,13.86,0.75729,48,-17.75,15.24,0.24271,2,47,68.58,16.43,0.42396,48,5.21,16.09,0.57604,3,47,89.83,19.14,0.09198,48,26.6,17.18,0.84056,49,-28.51,18.8,0.06746,2,48,47.85,19.11,0.61545,49,-7.19,19.54,0.38455,3,48,69.1,21.03,0.28211,49,14.14,20.27,0.6688,50,-33.94,24.99,0.04909,3,48,93.14,23.57,0.01624,49,38.28,21.47,0.63692,50,-9.85,22.98,0.34684,2,49,62.59,23.45,0.31983,50,14.51,21.72,0.68017,2,49,82.25,26.45,0.03558,50,34.39,22.08,0.96442,1,50,57.19,23.5,1,1,50,57.94,-3.71,1,2,49,102.33,-24.09,0.00116,50,47.59,-30.68,0.99884,2,49,81.06,-24.57,0.14376,50,26.45,-28.33,0.85624,2,49,54.56,-24.17,0.47446,50,0.23,-24.41,0.52554,3,48,86.97,-21.07,0.11745,49,29.64,-22.75,0.68918,50,-24.28,-19.71,0.19337,3,48,60.79,-20.31,0.45046,49,3.53,-20.54,0.54691,50,-49.86,-14.05,0.00263,3,47,100.36,-16.33,0.01958,48,34.42,-18.99,0.76421,49,-22.71,-17.75,0.2162,4,41,49.04,-67.49,0.00001,47,76.4,-16.68,0.33712,48,10.5,-17.52,0.66256,49,-46.52,-14.95,0.00032,3,41,40.17,-46.48,0.06424,47,53.63,-15.5,0.60622,48,-12.12,-14.62,0.32954,3,41,30.3,-20.75,0.39757,47,26.17,-13.15,0.58664,48,-39.32,-10.21,0.01579,2,41,23.28,-2.44,0.55977,47,6.63,-11.49,0.44023],"hull":23}},"飘带3":{"飘带3":{"type":"mesh","uvs":[0.78363,0.3177,0.84321,0.23021,0.90339,0.14186,0.9447,0.0812,1,0,0.73938,0.01646,0.6733,0.07791,0.60983,0.13693,0.51978,0.22066,0.42976,0.30437,0.35121,0.37741,0.27519,0.46087,0.19359,0.55045,0.11607,0.63556,0.08331,0.69712,0.04408,0.77087,0,0.85373,0,0.95424,0.51917,0.99422,0.53783,0.89485,0.57922,0.79047,0.60755,0.71904,0.63114,0.65954,0.66592,0.56618,0.70146,0.47083,0.72818,0.39911],"triangles":[18,17,19,17,16,19,19,16,20,20,16,15,15,14,20,20,14,21,21,14,22,22,14,13,13,12,22,22,12,23,12,11,23,23,11,24,11,10,24,24,10,25,10,9,25,25,9,0,9,8,0,0,8,1,8,7,1,1,7,2,7,6,2,2,6,3,6,5,3,3,5,4],"vertices":[3,38,46.47,57.79,0.00003,43,64.46,14.88,0.32535,44,10.63,14.41,0.67461,3,38,37.63,39.03,0.06208,43,43.79,13.37,0.59664,44,-10.09,13.84,0.34128,3,38,28.7,20.09,0.37506,43,22.9,11.85,0.60108,44,-31.02,13.26,0.02385,2,38,22.57,7.09,0.56877,43,8.56,10.8,0.43123,2,38,14.37,-10.32,0.50672,43,-10.63,9.4,0.49328,2,38,33.25,-10.91,0.19374,43,-1.87,-7.34,0.80626,1,43,13.12,-7.94,1,2,43,27.53,-8.51,0.9691,44,-27.32,-7.29,0.0309,2,43,47.96,-9.32,0.63576,44,-6.94,-9.02,0.36424,2,43,68.39,-10.13,0.30243,44,13.43,-10.75,0.69757,2,44,31.21,-12.25,0.8441,45,-20.39,-12.6,0.1559,2,44,51.29,-13.03,0.51076,45,-0.29,-13.04,0.48924,3,44,72.85,-13.86,0.17743,45,21.28,-13.5,0.81982,46,-26.8,-9.99,0.00275,2,45,41.77,-13.95,0.79485,46,-6.62,-13.58,0.20515,2,45,56.19,-12.66,0.46447,46,7.82,-14.52,0.53553,2,45,73.45,-11.13,0.13389,46,25.12,-15.65,0.86611,2,45,92.85,-9.4,0.00296,46,44.56,-16.92,0.99704,1,46,67.77,-14.68,1,1,46,73.46,22.9,1,1,46,50.38,22.01,1,2,45,68.45,26.81,0.01763,46,26,22.61,0.98237,2,45,51.9,24.66,0.16304,46,9.31,23.02,0.83696,3,44,90.29,22.22,0.00571,45,38.11,22.86,0.47556,46,-4.59,23.36,0.51873,3,44,68.65,19.61,0.24957,45,16.51,19.89,0.54741,46,-26.39,23.74,0.20302,3,44,46.54,16.95,0.5829,45,-5.55,16.86,0.40199,46,-48.65,24.12,0.0151,3,43,83.71,16.28,0.0159,44,29.92,14.95,0.89462,45,-22.13,14.58,0.08948],"hull":26}},"马尾1":{"马尾1":{"type":"mesh","uvs":[0.05408,0,0.28313,0,0.22587,0.10492,0.28313,0.21254,0.40368,0.31908,0.58451,0.44626,0.75328,0.56475,0.91602,0.68324,1,0.79847,1,0.9224,0.84068,1,0.47601,1,0.53026,0.91805,0.49108,0.81369,0.42478,0.71585,0.3434,0.61585,0.23792,0.49953,0.10833,0.36038,0.02394,0.25385,0,0.14623,0.01791,0.06144],"triangles":[11,12,10,10,12,9,12,8,9,12,13,8,13,7,8,13,14,7,14,6,7,14,15,6,15,5,6,15,16,5,16,4,5,16,17,4,17,18,4,18,3,4,18,19,3,19,2,3,19,20,2,2,20,1,1,20,0],"vertices":[1,64,-18.23,-16.46,1,1,64,-21.04,16.64,1,2,64,21.69,11.93,0.76373,65,-34.02,27.74,0.23627,3,64,64.1,23.87,0.4304,65,9.64,21.83,0.56158,66,-67.4,32.38,0.00802,3,64,105.29,44.91,0.09707,65,55.8,24.77,0.56279,66,-21.32,28.31,0.34014,3,65,112.62,33.34,0.32652,66,36.14,28.2,0.51249,67,-57.55,17.41,0.16098,4,65,165.56,41.37,0.00121,66,89.69,28.15,0.50447,67,-5,27.7,0.49369,68,-93.58,3.31,0.00063,3,66,142.84,27.31,0.17235,67,47.31,37.15,0.62239,68,-45.57,26.13,0.20526,2,67,95.2,35.99,0.46141,68,0.94,37.55,0.53859,2,67,143.06,22.17,0.1287,68,50.75,36.74,0.8713,1,68,81.57,13.14,1,2,67,151.94,-59.48,0.00074,68,80.71,-39.73,0.99926,2,67,122.47,-42.78,0.15717,68,47.9,-31.33,0.84283,3,66,161.24,-51.48,0.00914,67,80.59,-36.6,0.47648,68,5.86,-36.33,0.51438,3,66,121.88,-42.02,0.23417,67,40.14,-34.92,0.58403,68,-33.62,-45.3,0.18179,3,66,80.73,-34.09,0.56751,67,-1.76,-35.1,0.42761,68,-74.01,-56.45,0.00489,3,65,116.91,-21.12,0.33307,66,32.16,-26.28,0.55863,67,-50.93,-36.81,0.1083,3,64,125.46,3.64,0.00454,65,57.9,-21.12,0.66186,66,-26.17,-17.37,0.33359,3,64,83.83,-12.18,0.33788,65,13.41,-19.08,0.66186,66,-69.85,-8.63,0.00026,2,64,41.01,-19.3,0.67121,65,-28.71,-8.59,0.32879,1,64,6.83,-19.59,1],"hull":21}},"马尾2":{"马尾2":{"type":"mesh","uvs":[0.67189,0.06332,0.84733,0.05368,0.96854,0.15757,1,0.29039,0.95579,0.40178,0.78992,0.51424,0.65276,0.6267,0.5443,0.75095,0.5156,0.85913,0.63362,0.9823,0.51241,0.99837,0.20619,0.9973,0,0.9491,0,0.81629,0.09135,0.71239,0.27636,0.59457,0.48689,0.47461,0.62086,0.35786,0.67508,0.27539,0.72612,0.14686],"triangles":[9,10,8,8,10,11,11,12,8,12,13,8,8,13,7,7,13,14,14,15,7,7,15,6,15,16,6,6,16,5,4,5,17,5,16,17,4,17,3,3,17,18,18,2,3,18,19,2,19,1,2,19,0,1],"vertices":[1,59,-15.72,-16.31,1,2,59,-18.24,7.91,0.99994,60,-96.87,-26.5,0.00006,3,59,25.05,22,0.89641,60,-60.92,1.43,0.10356,61,-123.24,-25.24,0.00003,3,59,79.4,23.12,0.56308,60,-10.17,20.91,0.36019,61,-77.54,4.18,0.07673,3,59,124.41,14.4,0.22981,60,35.13,27.97,0.36013,61,-34.63,20.34,0.41007,3,60,85.58,19.17,0.25663,61,16.55,22.03,0.5353,62,-45.57,27.15,0.20808,3,61,65.86,27.17,0.45859,62,4.01,26.9,0.44463,63,-56.43,44.49,0.09678,3,61,117.55,38.06,0.12526,62,56.58,32.09,0.44814,63,-4.51,34.75,0.4266,2,62,98.98,44.97,0.24007,63,39.8,35.23,0.75993,2,62,139.53,78.77,0.00351,63,88.2,56.32,0.99649,1,63,96.37,40.45,1,1,63,100.11,-1.34,1,2,62,159.46,-6.79,0.00114,63,83.35,-31.41,0.99886,2,62,109.21,-27.08,0.23301,63,29.43,-36.8,0.76699,3,61,133.04,-24.05,0.04162,62,65.22,-31.34,0.52473,63,-13.99,-28.56,0.43365,4,60,136.93,-39.03,0.08739,61,78.7,-24.46,0.28756,62,11.16,-25.83,0.52359,63,-64.34,-8.12,0.10146,4,59,150.31,-51.47,0.0024,60,81.82,-25.23,0.41832,61,21.94,-22.2,0.28756,62,-45.03,-17.4,0.29172,3,59,103.83,-30.35,0.24529,60,30.94,-21.11,0.50877,61,-28.71,-28.56,0.24595,2,59,70.68,-20.96,0.57862,60,-3.43,-23.51,0.42138,2,59,18.74,-10.9,0.90956,60,-55.71,-31.66,0.09044],"hull":20}}}}],"animations":{"index_talk_weixiao":{"slots":{"嘴开口":{"attachment":[{"time":0.1333,"name":"嘴开口"},{"time":0.2,"name":"嘴_呆"},{"time":0.3333,"name":"嘴微笑"},{"time":0.5,"name":"嘴开口"},{"time":0.5667,"name":"嘴_呆"},{"time":0.7333,"name":"嘴微笑"},{"time":0.8667,"name":"嘴开口"},{"time":1,"name":"嘴_呆"},{"time":1.1,"name":"嘴微笑"},{"time":1.2667,"name":"嘴开口"},{"time":1.4,"name":"嘴_呆"},{"time":1.5333,"name":"嘴微笑"}]}},"bones":{"身体":{"translate":[{"x":-1.64,"curve":0.25,"c3":0.75},{"time":0.8333,"x":4.48,"curve":0.25,"c3":0.75},{"time":1.6667,"x":-1.64}]},"身体2":{"rotate":[{"angle":-0.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"angle":-0.77,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":0.82,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":-0.32}]},"身体9":{"rotate":[{"angle":0.06,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.4333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":1.43,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":0.06}]},"身体10":{"rotate":[{"angle":0.87,"curve":0.318,"c2":0.28,"c3":0.69,"c4":0.74},{"time":0.4333,"angle":-0.85,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.6,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":1.43,"curve":0.273,"c3":0.62,"c4":0.41},{"time":1.6667,"angle":0.87}]},"身体11":{"rotate":[{"angle":1.41,"curve":0.26,"c2":0.06,"c3":0.634,"c4":0.54},{"time":0.4333,"angle":-0.06,"curve":0.378,"c2":0.52,"c3":0.748},{"time":0.8,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.6333,"angle":1.43,"curve":0.323,"c3":0.656,"c4":0.34},{"time":1.6667,"angle":1.41}]},"身体6":{"rotate":[{"angle":-0.75,"curve":0.38,"c2":0.59,"c3":0.727},{"time":0.2333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.0667,"angle":1.43,"curve":0.242,"c3":0.663,"c4":0.65},{"time":1.6667,"angle":-0.75}]},"身体7":{"rotate":[{"angle":0.05,"curve":0.344,"c2":0.37,"c3":0.688,"c4":0.74},{"time":0.2333,"angle":-0.85,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.4333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":1.43,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":0.05}]},"身体8":{"rotate":[{"angle":0.98,"curve":0.312,"c2":0.26,"c3":0.656,"c4":0.63},{"time":0.2333,"angle":0.06,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.6333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":1.43,"curve":0.278,"c3":0.622,"c4":0.39},{"time":1.6667,"angle":0.98}]},"身体12":{"rotate":[{"angle":0.76,"curve":0.345,"c2":0.37,"c3":0.757},{"time":0.6,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.4333,"angle":1.43,"curve":0.269,"c3":0.618,"c4":0.42},{"time":1.6667,"angle":0.76}]},"身体13":{"rotate":[{"angle":1.37,"curve":0.267,"c2":0.1,"c3":0.678,"c4":0.71},{"time":0.6,"angle":-0.85,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.7667,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.6333,"angle":1.43,"curve":0.313,"c3":0.648,"c4":0.35},{"time":1.6667,"angle":1.37}]},"腰牌":{"rotate":[{"angle":-1.64,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":4.46,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":-1.64}]},"腰牌2":{"rotate":[{"angle":0.15,"curve":0.351,"c2":0.39,"c3":0.701,"c4":0.78},{"time":0.2667,"angle":-3.24,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.4333,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":4.46,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":0.15}]},"腰牌3":{"rotate":[{"angle":1.66,"curve":0.33,"c2":0.32,"c3":0.68,"c4":0.71},{"time":0.2667,"angle":-2,"curve":0.382,"c2":0.58,"c3":0.731},{"time":0.5333,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.3667,"angle":4.46,"curve":0.261,"c3":0.618,"c4":0.44},{"time":1.6667,"angle":1.66}]},"腰牌4":{"rotate":[{"angle":3.05,"curve":0.31,"c2":0.26,"c3":0.66,"c4":0.65},{"time":0.2667,"angle":-0.55,"curve":0.38,"c2":0.53,"c3":0.745},{"time":0.6333,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":4.46,"curve":0.278,"c3":0.622,"c4":0.39},{"time":1.6667,"angle":3.05}]},"腰牌5":{"rotate":[{"angle":4.11,"curve":0.287,"c2":0.16,"c3":0.638,"c4":0.56},{"time":0.2667,"angle":0.95,"curve":0.367,"c2":0.46,"c3":0.754},{"time":0.7667,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.6,"angle":4.46,"curve":0.305,"c3":0.64,"c4":0.36},{"time":1.6667,"angle":4.11}]},"飘带1":{"rotate":[{"angle":-1.3,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":4.44,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.6667,"angle":-1.3}]},"飘带2":{"rotate":[{"angle":-0.15,"curve":0.351,"c2":0.4,"c3":0.689,"c4":0.75},{"time":0.1333,"angle":-1.3,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.2667,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":4.44,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":-0.15}]},"飘带7":{"rotate":[{"angle":1.26,"curve":0.338,"c2":0.35,"c3":0.675,"c4":0.69},{"time":0.1333,"angle":-0.11,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.4333,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":4.44,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":1.26}]},"飘带8":{"rotate":[{"angle":2.65,"curve":0.325,"c2":0.31,"c3":0.663,"c4":0.65},{"time":0.1333,"angle":1.27,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.5667,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":1.4,"angle":4.44,"curve":0.265,"c3":0.618,"c4":0.43},{"time":1.6667,"angle":2.65}]},"飘带3":{"rotate":[{"angle":-1.82,"curve":0.25,"c3":0.75},{"time":0.8333,"angle":1.51,"curve":0.25,"c3":0.75},{"time":1.6667,"angle":-1.82}]},"飘带4":{"rotate":[{"angle":-1.5,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"angle":-1.82,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":1.51,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.6667,"angle":-1.5}]},"飘带5":{"rotate":[{"angle":-1.57,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"angle":-2.8,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":1.51,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":-1.57}]},"飘带6":{"rotate":[{"angle":-5,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.4333,"angle":-11.5,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":1.51,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":-5}]},"马尾7":{"rotate":[{"angle":-1.7,"curve":0.29,"c3":0.629,"c4":0.38},{"time":0.1333,"angle":-1.25,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.8333,"angle":3,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.5,"angle":-1.09,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.6667,"angle":-1.7}]},"马尾8":{"rotate":[{"angle":-1.26,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":3,"curve":0.244,"c3":0.643,"c4":0.58},{"time":1.5,"angle":-0.17,"curve":0.353,"c2":0.4,"c3":0.692,"c4":0.76},{"time":1.6667,"angle":-1.26}]},"马尾9":{"rotate":[{"angle":-0.19,"curve":0.348,"c2":0.39,"c3":0.686,"c4":0.73},{"time":0.1333,"angle":-1.1,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.3,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":3,"curve":0.255,"c3":0.62,"c4":0.47},{"time":1.5,"angle":1.06,"curve":0.333,"c2":0.33,"c3":0.673,"c4":0.68},{"time":1.6667,"angle":-0.19}]},"马尾10":{"rotate":[{"angle":-1.25,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":3,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.6667,"angle":-1.25}]},"马尾6":{"rotate":[{"angle":3,"curve":0.29,"c3":0.629,"c4":0.38},{"time":0.1333,"angle":2.54,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.8333,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.6667,"angle":3}]},"马尾5":{"rotate":[{"angle":2.4,"curve":0.314,"c2":0.27,"c3":0.652,"c4":0.61},{"time":0.1333,"angle":1.47,"curve":0.357,"c2":0.42,"c3":0.756},{"time":0.6667,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.5,"angle":3,"curve":0.284,"c3":0.625,"c4":0.38},{"time":1.6667,"angle":2.4}]},"马尾4":{"rotate":[{"angle":1.06,"curve":0.333,"c2":0.33,"c3":0.67,"c4":0.68},{"time":0.1333,"angle":0.03,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.4667,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.3,"angle":3,"curve":0.255,"c3":0.62,"c4":0.47},{"time":1.6667,"angle":1.06}]},"马尾3":{"rotate":[{"angle":-0.2,"curve":0.348,"c2":0.39,"c3":0.686,"c4":0.73},{"time":0.1333,"angle":-1.09,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.3,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":3,"curve":0.244,"c3":0.643,"c4":0.58},{"time":1.6667,"angle":-0.2}]},"马尾2":{"rotate":[{"angle":0.2,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":2.06,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.6667,"angle":0.2}]},"马尾1":{"rotate":[{"angle":-1.74,"curve":0.314,"c2":0.27,"c3":0.652,"c4":0.61},{"time":0.1333,"angle":-1.41,"curve":0.357,"c2":0.42,"c3":0.756},{"time":0.6667,"angle":-0.3,"curve":0.25,"c3":0.75},{"time":1.5,"angle":-1.95,"curve":0.284,"c3":0.625,"c4":0.38},{"time":1.6667,"angle":-1.74}]},"头发3":{"rotate":[{"angle":-0.36,"curve":0.25,"c3":0.75},{"time":0.8333,"angle":1.36,"curve":0.25,"c3":0.75},{"time":1.6667,"angle":-0.36}]},"头发4":{"rotate":[{"angle":-0.14,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.1667,"angle":-0.36,"curve":0.25,"c3":0.75},{"time":1,"angle":1.36,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.6667,"angle":-0.14}]},"头发5":{"rotate":[{"angle":0.27,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.3333,"angle":-0.36,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":1.36,"curve":0.245,"c3":0.637,"c4":0.56},{"time":1.6667,"angle":0.27}]},"头发6":{"rotate":[{"angle":0.73,"curve":0.363,"c2":0.44,"c3":0.755},{"time":0.5,"angle":-0.36,"curve":0.25,"c3":0.75},{"time":1.3333,"angle":1.36,"curve":0.258,"c3":0.619,"c4":0.45},{"time":1.6667,"angle":0.73}]},"头发20":{"rotate":[{"angle":1.06,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":3.74,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":1.06}]},"头发21":{"rotate":[{"angle":2.02,"curve":0.345,"c2":0.37,"c3":0.696,"c4":0.76},{"time":0.2667,"angle":0.49,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.4333,"curve":0.25,"c3":0.75},{"time":1.3,"angle":3.74,"curve":0.252,"c3":0.622,"c4":0.48},{"time":1.6667,"angle":2.02}]},"头发22":{"rotate":[{"angle":3.12,"curve":0.31,"c2":0.26,"c3":0.66,"c4":0.65},{"time":0.2667,"angle":1.54,"curve":0.38,"c2":0.53,"c3":0.745},{"time":0.6333,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":3.74,"curve":0.278,"c3":0.622,"c4":0.39},{"time":1.6667,"angle":3.12}]},"头发16":{"rotate":[{"angle":0.13,"curve":0.337,"c2":0.35,"c3":0.758},{"time":0.6,"angle":1.95,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":-0.33,"curve":0.273,"c3":0.62,"c4":0.41},{"time":1.6667,"angle":0.13}]},"头发17":{"rotate":[{"angle":-0.28,"curve":0.277,"c2":0.12,"c3":0.754},{"time":0.7667,"angle":1.95,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.4667,"angle":-0.03,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.6333,"angle":-0.33,"curve":0.313,"c3":0.648,"c4":0.35},{"time":1.6667,"angle":-0.28}]},"头发18":{"rotate":[{"angle":-0.18,"curve":0.366,"c2":0.63,"c3":0.703},{"time":0.1,"angle":-0.33,"curve":0.25,"c3":0.75},{"time":0.9333,"angle":1.95,"curve":0.245,"c3":0.637,"c4":0.56},{"time":1.4667,"angle":0.51,"curve":0.358,"c2":0.42,"c3":0.702,"c4":0.8},{"time":1.6667,"angle":-0.18}]},"头发19":{"rotate":[{"angle":0.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"angle":-0.33,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":1.95,"curve":0.258,"c3":0.619,"c4":0.45},{"time":1.4667,"angle":1.11,"curve":0.332,"c2":0.33,"c3":0.676,"c4":0.7},{"time":1.6667,"angle":0.32}]},"头发":{"rotate":[{"angle":-0.75,"curve":0.38,"c2":0.53,"c3":0.745},{"time":0.3667,"angle":-1.95,"curve":0.25,"c3":0.75},{"time":1.2,"angle":0.95,"curve":0.246,"c3":0.633,"c4":0.54},{"time":1.6667,"angle":-0.75}]},"头发7":{"rotate":[{"angle":0.01,"curve":0.357,"c2":0.42,"c3":0.756},{"time":0.5333,"angle":-1.95,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.2,"angle":0.57,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.3667,"angle":0.95,"curve":0.261,"c3":0.618,"c4":0.44},{"time":1.6667,"angle":0.01}]},"头发8":{"rotate":[{"angle":0.67,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.7,"angle":-1.95,"curve":0.245,"c3":0.637,"c4":0.56},{"time":1.2,"angle":-0.12,"curve":0.381,"c2":0.55,"c3":0.742},{"time":1.5333,"angle":0.95,"curve":0.29,"c3":0.629,"c4":0.38},{"time":1.6667,"angle":0.67}]},"头发9":{"rotate":[{"angle":0.93,"curve":0.344,"c2":0.66,"c3":0.677},{"time":0.0333,"angle":0.95,"curve":0.25,"c3":0.75},{"time":0.8667,"angle":-1.95,"curve":0.258,"c3":0.619,"c4":0.45},{"time":1.2,"angle":-0.88,"curve":0.358,"c2":0.42,"c3":0.743,"c4":0.94},{"time":1.6667,"angle":0.93}]},"头发1":{"rotate":[{"angle":-0.42,"curve":0.302,"c2":0.23,"c3":0.669,"c4":0.67},{"time":0.4,"angle":-2.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.6667,"angle":-3.23,"curve":0.25,"c3":0.75},{"time":1.5,"curve":0.284,"c3":0.625,"c4":0.38},{"time":1.6667,"angle":-0.42}]},"头发10":{"rotate":[{"curve":0.252,"c3":0.622,"c4":0.48},{"time":0.4,"angle":-1.47,"curve":0.372,"c2":0.48,"c3":0.752},{"time":0.8333,"angle":-3.23,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.5,"angle":-0.42,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.6667}]},"头发11":{"rotate":[{"angle":-0.31,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"curve":0.269,"c3":0.618,"c4":0.42},{"time":0.4,"angle":-0.78,"curve":0.345,"c2":0.37,"c3":0.757},{"time":0.9667,"angle":-3.23,"curve":0.244,"c3":0.643,"c4":0.58},{"time":1.5,"angle":-1.05,"curve":0.353,"c2":0.4,"c3":0.692,"c4":0.76},{"time":1.6667,"angle":-0.31}]},"头发12":{"rotate":[{"angle":-1.05,"curve":0.382,"c2":0.56,"c3":0.739},{"time":0.3,"curve":0.305,"c3":0.64,"c4":0.36},{"time":0.4,"angle":-0.14,"curve":0.289,"c2":0.17,"c3":0.755},{"time":1.1333,"angle":-3.23,"curve":0.255,"c3":0.62,"c4":0.47},{"time":1.5,"angle":-1.9,"curve":0.333,"c2":0.33,"c3":0.673,"c4":0.68},{"time":1.6667,"angle":-1.05}]},"头发13":{"rotate":[{"angle":-2.63,"curve":0.361,"c2":0.43,"c3":0.729,"c4":0.89},{"time":0.4,"angle":-0.1,"curve":0.352,"c2":0.65,"c3":0.687},{"time":0.4333,"curve":0.25,"c3":0.75},{"time":1.3,"angle":-4.83,"curve":0.273,"c3":0.62,"c4":0.41},{"time":1.5,"angle":-3.85,"curve":0.318,"c2":0.28,"c3":0.658,"c4":0.64},{"time":1.6667,"angle":-2.63}]},"头发14":{"rotate":[{"angle":-3.68,"curve":0.324,"c2":0.3,"c3":0.69,"c4":0.74},{"time":0.4,"angle":-0.81,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.6,"curve":0.25,"c3":0.75},{"time":1.4333,"angle":-4.83,"curve":0.305,"c3":0.64,"c4":0.36},{"time":1.5,"angle":-4.63,"curve":0.299,"c2":0.19,"c3":0.64,"c4":0.55},{"time":1.6667,"angle":-3.68}]},"眼珠":{"translate":[{"time":0.6333,"curve":0.25,"c3":0.75},{"time":0.7,"x":-1.46,"y":-0.02,"curve":"stepped"},{"time":1.0333,"x":-1.46,"y":-0.02,"curve":0.25,"c3":0.75},{"time":1.0667,"x":0.57,"y":-0.01}]},"root":{"translate":[{"x":80,"y":193}],"scale":[{"x":0.55,"y":0.55}]},"hand1":{"translate":[{"x":43.64,"y":44.96,"curve":0.25,"c3":0.75},{"time":0.2,"x":28.2,"y":39.06,"curve":0.25,"c3":0.75},{"time":0.4333,"x":43.55,"y":49.32,"curve":0.25,"c3":0.75},{"time":0.6,"x":37.42,"y":44.84,"curve":0.25,"c3":0.75},{"time":0.7667,"x":44.82,"y":48.1,"curve":0.25,"c3":0.75},{"time":0.9333,"x":39.87,"y":46.76,"curve":0.25,"c3":0.75},{"time":1.1,"x":43.64,"y":44.96,"curve":0.25,"c3":0.75},{"time":1.3,"x":28.2,"y":39.06,"curve":0.25,"c3":0.75},{"time":1.5,"x":43.55,"y":49.32,"curve":0.25,"c3":0.75},{"time":1.6667,"x":43.64,"y":44.96}]},"脸":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.3333,"angle":1.53,"curve":0.25,"c3":0.75},{"time":0.5333,"angle":-0.13,"curve":0.25,"c3":0.75},{"time":0.7667,"angle":1.15,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":0.16,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":1.28,"curve":0.25,"c3":0.75},{"time":1.3333,"angle":0.75,"curve":0.25,"c3":0.75},{"time":1.6667}]}},"ik":{"hand":[{"mix":0.529,"bendPositive":false}]}},"index_talk_yansu":{"slots":{"嘴开口":{"attachment":[{"name":"嘴严肃"},{"time":0.1333,"name":"嘴开口"},{"time":0.2,"name":"嘴_呆"},{"time":0.3333,"name":"嘴严肃"},{"time":0.5,"name":"嘴开口"},{"time":0.5667,"name":"嘴_呆"},{"time":0.7333,"name":"嘴严肃"},{"time":0.8667,"name":"嘴开口"},{"time":1,"name":"嘴_呆"},{"time":1.1,"name":"嘴严肃"},{"time":1.2667,"name":"嘴开口"},{"time":1.4,"name":"嘴_呆"},{"time":1.5333,"name":"嘴严肃"}]}},"bones":{"身体":{"translate":[{"x":-1.64,"curve":0.25,"c3":0.75},{"time":0.8333,"x":4.48,"curve":0.25,"c3":0.75},{"time":1.6667,"x":-1.64}]},"身体2":{"rotate":[{"angle":-0.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"angle":-0.77,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":0.82,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":-0.32}]},"身体9":{"rotate":[{"angle":0.06,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.4333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":1.43,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":0.06}]},"身体10":{"rotate":[{"angle":0.87,"curve":0.318,"c2":0.28,"c3":0.69,"c4":0.74},{"time":0.4333,"angle":-0.85,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.6,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":1.43,"curve":0.273,"c3":0.62,"c4":0.41},{"time":1.6667,"angle":0.87}]},"身体11":{"rotate":[{"angle":1.41,"curve":0.26,"c2":0.06,"c3":0.634,"c4":0.54},{"time":0.4333,"angle":-0.06,"curve":0.378,"c2":0.52,"c3":0.748},{"time":0.8,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.6333,"angle":1.43,"curve":0.323,"c3":0.656,"c4":0.34},{"time":1.6667,"angle":1.41}]},"身体6":{"rotate":[{"angle":-0.75,"curve":0.38,"c2":0.59,"c3":0.727},{"time":0.2333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.0667,"angle":1.43,"curve":0.242,"c3":0.663,"c4":0.65},{"time":1.6667,"angle":-0.75}]},"身体7":{"rotate":[{"angle":0.05,"curve":0.344,"c2":0.37,"c3":0.688,"c4":0.74},{"time":0.2333,"angle":-0.85,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.4333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":1.43,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":0.05}]},"身体8":{"rotate":[{"angle":0.98,"curve":0.312,"c2":0.26,"c3":0.656,"c4":0.63},{"time":0.2333,"angle":0.06,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.6333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":1.43,"curve":0.278,"c3":0.622,"c4":0.39},{"time":1.6667,"angle":0.98}]},"身体12":{"rotate":[{"angle":0.76,"curve":0.345,"c2":0.37,"c3":0.757},{"time":0.6,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.4333,"angle":1.43,"curve":0.269,"c3":0.618,"c4":0.42},{"time":1.6667,"angle":0.76}]},"身体13":{"rotate":[{"angle":1.37,"curve":0.267,"c2":0.1,"c3":0.678,"c4":0.71},{"time":0.6,"angle":-0.85,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.7667,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.6333,"angle":1.43,"curve":0.313,"c3":0.648,"c4":0.35},{"time":1.6667,"angle":1.37}]},"腰牌":{"rotate":[{"angle":-1.64,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":4.46,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":-1.64}]},"腰牌2":{"rotate":[{"angle":0.15,"curve":0.351,"c2":0.39,"c3":0.701,"c4":0.78},{"time":0.2667,"angle":-3.24,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.4333,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":4.46,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":0.15}]},"腰牌3":{"rotate":[{"angle":1.66,"curve":0.33,"c2":0.32,"c3":0.68,"c4":0.71},{"time":0.2667,"angle":-2,"curve":0.382,"c2":0.58,"c3":0.731},{"time":0.5333,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.3667,"angle":4.46,"curve":0.261,"c3":0.618,"c4":0.44},{"time":1.6667,"angle":1.66}]},"腰牌4":{"rotate":[{"angle":3.05,"curve":0.31,"c2":0.26,"c3":0.66,"c4":0.65},{"time":0.2667,"angle":-0.55,"curve":0.38,"c2":0.53,"c3":0.745},{"time":0.6333,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":4.46,"curve":0.278,"c3":0.622,"c4":0.39},{"time":1.6667,"angle":3.05}]},"腰牌5":{"rotate":[{"angle":4.11,"curve":0.287,"c2":0.16,"c3":0.638,"c4":0.56},{"time":0.2667,"angle":0.95,"curve":0.367,"c2":0.46,"c3":0.754},{"time":0.7667,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.6,"angle":4.46,"curve":0.305,"c3":0.64,"c4":0.36},{"time":1.6667,"angle":4.11}]},"飘带1":{"rotate":[{"angle":-1.3,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":4.44,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.6667,"angle":-1.3}]},"飘带2":{"rotate":[{"angle":-0.15,"curve":0.351,"c2":0.4,"c3":0.689,"c4":0.75},{"time":0.1333,"angle":-1.3,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.2667,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":4.44,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":-0.15}]},"飘带7":{"rotate":[{"angle":1.26,"curve":0.338,"c2":0.35,"c3":0.675,"c4":0.69},{"time":0.1333,"angle":-0.11,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.4333,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":4.44,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":1.26}]},"飘带8":{"rotate":[{"angle":2.65,"curve":0.325,"c2":0.31,"c3":0.663,"c4":0.65},{"time":0.1333,"angle":1.27,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.5667,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":1.4,"angle":4.44,"curve":0.265,"c3":0.618,"c4":0.43},{"time":1.6667,"angle":2.65}]},"飘带3":{"rotate":[{"angle":-1.82,"curve":0.25,"c3":0.75},{"time":0.8333,"angle":1.51,"curve":0.25,"c3":0.75},{"time":1.6667,"angle":-1.82}]},"飘带4":{"rotate":[{"angle":-1.5,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"angle":-1.82,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":1.51,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.6667,"angle":-1.5}]},"飘带5":{"rotate":[{"angle":-1.57,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"angle":-2.8,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":1.51,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":-1.57}]},"飘带6":{"rotate":[{"angle":-5,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.4333,"angle":-11.5,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":1.51,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":-5}]},"马尾7":{"rotate":[{"angle":-1.7,"curve":0.29,"c3":0.629,"c4":0.38},{"time":0.1333,"angle":-1.25,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.8333,"angle":3,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.5,"angle":-1.09,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.6667,"angle":-1.7}]},"马尾8":{"rotate":[{"angle":-1.26,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":3,"curve":0.244,"c3":0.643,"c4":0.58},{"time":1.5,"angle":-0.17,"curve":0.353,"c2":0.4,"c3":0.692,"c4":0.76},{"time":1.6667,"angle":-1.26}]},"马尾9":{"rotate":[{"angle":-0.19,"curve":0.348,"c2":0.39,"c3":0.686,"c4":0.73},{"time":0.1333,"angle":-1.1,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.3,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":3,"curve":0.255,"c3":0.62,"c4":0.47},{"time":1.5,"angle":1.06,"curve":0.333,"c2":0.33,"c3":0.673,"c4":0.68},{"time":1.6667,"angle":-0.19}]},"马尾10":{"rotate":[{"angle":-1.25,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":3,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.6667,"angle":-1.25}]},"马尾6":{"rotate":[{"angle":3,"curve":0.29,"c3":0.629,"c4":0.38},{"time":0.1333,"angle":2.54,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.8333,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.6667,"angle":3}]},"马尾5":{"rotate":[{"angle":2.4,"curve":0.314,"c2":0.27,"c3":0.652,"c4":0.61},{"time":0.1333,"angle":1.47,"curve":0.357,"c2":0.42,"c3":0.756},{"time":0.6667,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.5,"angle":3,"curve":0.284,"c3":0.625,"c4":0.38},{"time":1.6667,"angle":2.4}]},"马尾4":{"rotate":[{"angle":1.06,"curve":0.333,"c2":0.33,"c3":0.67,"c4":0.68},{"time":0.1333,"angle":0.03,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.4667,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.3,"angle":3,"curve":0.255,"c3":0.62,"c4":0.47},{"time":1.6667,"angle":1.06}]},"马尾3":{"rotate":[{"angle":-0.2,"curve":0.348,"c2":0.39,"c3":0.686,"c4":0.73},{"time":0.1333,"angle":-1.09,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.3,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":3,"curve":0.244,"c3":0.643,"c4":0.58},{"time":1.6667,"angle":-0.2}]},"马尾2":{"rotate":[{"angle":0.2,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":2.06,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.6667,"angle":0.2}]},"马尾1":{"rotate":[{"angle":-1.74,"curve":0.314,"c2":0.27,"c3":0.652,"c4":0.61},{"time":0.1333,"angle":-1.41,"curve":0.357,"c2":0.42,"c3":0.756},{"time":0.6667,"angle":-0.3,"curve":0.25,"c3":0.75},{"time":1.5,"angle":-1.95,"curve":0.284,"c3":0.625,"c4":0.38},{"time":1.6667,"angle":-1.74}]},"头发3":{"rotate":[{"angle":-0.36,"curve":0.25,"c3":0.75},{"time":0.8333,"angle":1.36,"curve":0.25,"c3":0.75},{"time":1.6667,"angle":-0.36}]},"头发4":{"rotate":[{"angle":-0.14,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.1667,"angle":-0.36,"curve":0.25,"c3":0.75},{"time":1,"angle":1.36,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.6667,"angle":-0.14}]},"头发5":{"rotate":[{"angle":0.27,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.3333,"angle":-0.36,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":1.36,"curve":0.245,"c3":0.637,"c4":0.56},{"time":1.6667,"angle":0.27}]},"头发6":{"rotate":[{"angle":0.73,"curve":0.363,"c2":0.44,"c3":0.755},{"time":0.5,"angle":-0.36,"curve":0.25,"c3":0.75},{"time":1.3333,"angle":1.36,"curve":0.258,"c3":0.619,"c4":0.45},{"time":1.6667,"angle":0.73}]},"头发20":{"rotate":[{"angle":1.06,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":3.74,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":1.06}]},"头发21":{"rotate":[{"angle":2.02,"curve":0.345,"c2":0.37,"c3":0.696,"c4":0.76},{"time":0.2667,"angle":0.49,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.4333,"curve":0.25,"c3":0.75},{"time":1.3,"angle":3.74,"curve":0.252,"c3":0.622,"c4":0.48},{"time":1.6667,"angle":2.02}]},"头发22":{"rotate":[{"angle":3.12,"curve":0.31,"c2":0.26,"c3":0.66,"c4":0.65},{"time":0.2667,"angle":1.54,"curve":0.38,"c2":0.53,"c3":0.745},{"time":0.6333,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":3.74,"curve":0.278,"c3":0.622,"c4":0.39},{"time":1.6667,"angle":3.12}]},"头发16":{"rotate":[{"angle":0.13,"curve":0.337,"c2":0.35,"c3":0.758},{"time":0.6,"angle":1.95,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":-0.33,"curve":0.273,"c3":0.62,"c4":0.41},{"time":1.6667,"angle":0.13}]},"头发17":{"rotate":[{"angle":-0.28,"curve":0.277,"c2":0.12,"c3":0.754},{"time":0.7667,"angle":1.95,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.4667,"angle":-0.03,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.6333,"angle":-0.33,"curve":0.313,"c3":0.648,"c4":0.35},{"time":1.6667,"angle":-0.28}]},"头发18":{"rotate":[{"angle":-0.18,"curve":0.366,"c2":0.63,"c3":0.703},{"time":0.1,"angle":-0.33,"curve":0.25,"c3":0.75},{"time":0.9333,"angle":1.95,"curve":0.245,"c3":0.637,"c4":0.56},{"time":1.4667,"angle":0.51,"curve":0.358,"c2":0.42,"c3":0.702,"c4":0.8},{"time":1.6667,"angle":-0.18}]},"头发19":{"rotate":[{"angle":0.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"angle":-0.33,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":1.95,"curve":0.258,"c3":0.619,"c4":0.45},{"time":1.4667,"angle":1.11,"curve":0.332,"c2":0.33,"c3":0.676,"c4":0.7},{"time":1.6667,"angle":0.32}]},"头发":{"rotate":[{"angle":-0.75,"curve":0.38,"c2":0.53,"c3":0.745},{"time":0.3667,"angle":-1.95,"curve":0.25,"c3":0.75},{"time":1.2,"angle":0.95,"curve":0.246,"c3":0.633,"c4":0.54},{"time":1.6667,"angle":-0.75}]},"头发7":{"rotate":[{"angle":0.01,"curve":0.357,"c2":0.42,"c3":0.756},{"time":0.5333,"angle":-1.95,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.2,"angle":0.57,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.3667,"angle":0.95,"curve":0.261,"c3":0.618,"c4":0.44},{"time":1.6667,"angle":0.01}]},"头发8":{"rotate":[{"angle":0.67,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.7,"angle":-1.95,"curve":0.245,"c3":0.637,"c4":0.56},{"time":1.2,"angle":-0.12,"curve":0.381,"c2":0.55,"c3":0.742},{"time":1.5333,"angle":0.95,"curve":0.29,"c3":0.629,"c4":0.38},{"time":1.6667,"angle":0.67}]},"头发9":{"rotate":[{"angle":0.93,"curve":0.344,"c2":0.66,"c3":0.677},{"time":0.0333,"angle":0.95,"curve":0.25,"c3":0.75},{"time":0.8667,"angle":-1.95,"curve":0.258,"c3":0.619,"c4":0.45},{"time":1.2,"angle":-0.88,"curve":0.358,"c2":0.42,"c3":0.743,"c4":0.94},{"time":1.6667,"angle":0.93}]},"头发1":{"rotate":[{"angle":-0.42,"curve":0.302,"c2":0.23,"c3":0.669,"c4":0.67},{"time":0.4,"angle":-2.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.6667,"angle":-3.23,"curve":0.25,"c3":0.75},{"time":1.5,"curve":0.284,"c3":0.625,"c4":0.38},{"time":1.6667,"angle":-0.42}]},"头发10":{"rotate":[{"curve":0.252,"c3":0.622,"c4":0.48},{"time":0.4,"angle":-1.47,"curve":0.372,"c2":0.48,"c3":0.752},{"time":0.8333,"angle":-3.23,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.5,"angle":-0.42,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.6667}]},"头发11":{"rotate":[{"angle":-0.31,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"curve":0.269,"c3":0.618,"c4":0.42},{"time":0.4,"angle":-0.78,"curve":0.345,"c2":0.37,"c3":0.757},{"time":0.9667,"angle":-3.23,"curve":0.244,"c3":0.643,"c4":0.58},{"time":1.5,"angle":-1.05,"curve":0.353,"c2":0.4,"c3":0.692,"c4":0.76},{"time":1.6667,"angle":-0.31}]},"头发12":{"rotate":[{"angle":-1.05,"curve":0.382,"c2":0.56,"c3":0.739},{"time":0.3,"curve":0.305,"c3":0.64,"c4":0.36},{"time":0.4,"angle":-0.14,"curve":0.289,"c2":0.17,"c3":0.755},{"time":1.1333,"angle":-3.23,"curve":0.255,"c3":0.62,"c4":0.47},{"time":1.5,"angle":-1.9,"curve":0.333,"c2":0.33,"c3":0.673,"c4":0.68},{"time":1.6667,"angle":-1.05}]},"头发13":{"rotate":[{"angle":-2.63,"curve":0.361,"c2":0.43,"c3":0.729,"c4":0.89},{"time":0.4,"angle":-0.1,"curve":0.352,"c2":0.65,"c3":0.687},{"time":0.4333,"curve":0.25,"c3":0.75},{"time":1.3,"angle":-4.83,"curve":0.273,"c3":0.62,"c4":0.41},{"time":1.5,"angle":-3.85,"curve":0.318,"c2":0.28,"c3":0.658,"c4":0.64},{"time":1.6667,"angle":-2.63}]},"头发14":{"rotate":[{"angle":-3.68,"curve":0.324,"c2":0.3,"c3":0.69,"c4":0.74},{"time":0.4,"angle":-0.81,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.6,"curve":0.25,"c3":0.75},{"time":1.4333,"angle":-4.83,"curve":0.305,"c3":0.64,"c4":0.36},{"time":1.5,"angle":-4.63,"curve":0.299,"c2":0.19,"c3":0.64,"c4":0.55},{"time":1.6667,"angle":-3.68}]},"眼珠":{"translate":[{"time":0.6333,"curve":0.25,"c3":0.75},{"time":0.7,"x":-1.46,"y":-0.02,"curve":"stepped"},{"time":1.0333,"x":-1.46,"y":-0.02,"curve":0.25,"c3":0.75},{"time":1.0667,"x":0.57,"y":-0.01}]},"root":{"translate":[{"x":80,"y":193}],"scale":[{"x":0.55,"y":0.55}]},"眉毛":{"rotate":[{"angle":-13.03}],"translate":[{"x":-0.01,"y":-8.72}]},"眼睫毛":{"translate":[{"x":-0.01,"y":-9.08}]},"hand1":{"translate":[{"x":43.64,"y":44.96,"curve":0.25,"c3":0.75},{"time":0.2,"x":28.2,"y":39.06,"curve":0.25,"c3":0.75},{"time":0.4333,"x":43.55,"y":49.32,"curve":0.25,"c3":0.75},{"time":0.6,"x":37.42,"y":44.84,"curve":0.25,"c3":0.75},{"time":0.7667,"x":44.82,"y":48.1,"curve":0.25,"c3":0.75},{"time":0.9333,"x":39.87,"y":46.76,"curve":0.25,"c3":0.75},{"time":1.1,"x":43.64,"y":44.96,"curve":0.25,"c3":0.75},{"time":1.3,"x":28.2,"y":39.06,"curve":0.25,"c3":0.75},{"time":1.5,"x":43.55,"y":49.32,"curve":0.25,"c3":0.75},{"time":1.6667,"x":43.64,"y":44.96}]},"脸":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.3333,"angle":1.53,"curve":0.25,"c3":0.75},{"time":0.5333,"angle":-0.13,"curve":0.25,"c3":0.75},{"time":0.7667,"angle":1.15,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":0.16,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":1.28,"curve":0.25,"c3":0.75},{"time":1.3333,"angle":0.75,"curve":0.25,"c3":0.75},{"time":1.6667}]}}},"loop_index":{"slots":{"嘴开口":{"attachment":[{"name":"嘴严肃"}]},"眼框":{"color":[{"time":1.7,"color":"ffffff00","curve":"stepped"},{"time":1.8667,"color":"ffffffff"}]},"眼珠":{"color":[{"time":1.7,"color":"ffffff00","curve":"stepped"},{"time":1.8333,"color":"ffffffff"}]},"眼睫毛":{"attachment":[{"time":1.7,"name":"眼睫闭"},{"time":1.8667,"name":"眼睫毛"}]}},"bones":{"身体":{"translate":[{"x":-1.64,"curve":0.25,"c3":0.75},{"time":0.8333,"x":4.48,"curve":0.25,"c3":0.75},{"time":1.6667,"x":-1.64,"curve":0.25,"c3":0.75},{"time":2.5,"x":4.48,"curve":0.25,"c3":0.75},{"time":3.3333,"x":-1.64}]},"身体2":{"rotate":[{"angle":-0.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"angle":-0.77,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":0.82,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":-0.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.9333,"angle":-0.77,"curve":0.25,"c3":0.75},{"time":2.8,"angle":0.82,"curve":0.243,"c3":0.649,"c4":0.6},{"time":3.3333,"angle":-0.32}]},"脸":{"rotate":[{"angle":0.37,"curve":0.325,"c2":0.31,"c3":0.675,"c4":0.69},{"time":0.2667,"angle":-0.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.5667,"angle":-0.77,"curve":0.25,"c3":0.75},{"time":1.4,"angle":0.82,"curve":0.265,"c3":0.618,"c4":0.43},{"time":1.6667,"angle":0.37,"curve":0.325,"c2":0.31,"c3":0.675,"c4":0.69},{"time":1.9333,"angle":-0.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":2.2333,"angle":-0.77,"curve":0.25,"c3":0.75},{"time":3.0667,"angle":0.82,"curve":0.265,"c3":0.618,"c4":0.43},{"time":3.3333,"angle":0.37}]},"身体9":{"rotate":[{"angle":0.06,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.4333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":1.43,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":0.06,"curve":0.375,"c2":0.5,"c3":0.75},{"time":2.1,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":2.9333,"angle":1.43,"curve":0.25,"c3":0.625,"c4":0.5},{"time":3.3333,"angle":0.06}]},"身体10":{"rotate":[{"angle":0.87,"curve":0.318,"c2":0.28,"c3":0.69,"c4":0.74},{"time":0.4333,"angle":-0.85,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.6,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":1.43,"curve":0.273,"c3":0.62,"c4":0.41},{"time":1.6667,"angle":0.87,"curve":0.318,"c2":0.28,"c3":0.69,"c4":0.74},{"time":2.1,"angle":-0.85,"curve":0.378,"c2":0.61,"c3":0.722},{"time":2.2667,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":3.1333,"angle":1.43,"curve":0.273,"c3":0.62,"c4":0.41},{"time":3.3333,"angle":0.87}]},"身体11":{"rotate":[{"angle":1.41,"curve":0.26,"c2":0.06,"c3":0.634,"c4":0.54},{"time":0.4333,"angle":-0.06,"curve":0.378,"c2":0.52,"c3":0.748},{"time":0.8,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.6333,"angle":1.43,"curve":0.323,"c3":0.656,"c4":0.34},{"time":1.6667,"angle":1.41,"curve":0.26,"c2":0.06,"c3":0.634,"c4":0.54},{"time":2.1,"angle":-0.06,"curve":0.378,"c2":0.52,"c3":0.748},{"time":2.4667,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":3.3,"angle":1.43,"curve":0.323,"c3":0.656,"c4":0.34},{"time":3.3333,"angle":1.41}]},"身体6":{"rotate":[{"angle":-0.75,"curve":0.38,"c2":0.59,"c3":0.727},{"time":0.2333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.0667,"angle":1.43,"curve":0.242,"c3":0.663,"c4":0.65},{"time":1.6667,"angle":-0.75,"curve":0.38,"c2":0.59,"c3":0.727},{"time":1.9,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":2.7333,"angle":1.43,"curve":0.242,"c3":0.663,"c4":0.65},{"time":3.3333,"angle":-0.75}]},"身体7":{"rotate":[{"angle":0.05,"curve":0.344,"c2":0.37,"c3":0.688,"c4":0.74},{"time":0.2333,"angle":-0.85,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.4333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":1.43,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":0.05,"curve":0.344,"c2":0.37,"c3":0.688,"c4":0.74},{"time":1.9,"angle":-0.85,"curve":0.378,"c2":0.61,"c3":0.722},{"time":2.1,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":2.9333,"angle":1.43,"curve":0.25,"c3":0.625,"c4":0.5},{"time":3.3333,"angle":0.05}]},"身体8":{"rotate":[{"angle":0.98,"curve":0.312,"c2":0.26,"c3":0.656,"c4":0.63},{"time":0.2333,"angle":0.06,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.6333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":1.43,"curve":0.278,"c3":0.622,"c4":0.39},{"time":1.6667,"angle":0.98,"curve":0.312,"c2":0.26,"c3":0.656,"c4":0.63},{"time":1.9,"angle":0.06,"curve":0.375,"c2":0.5,"c3":0.75},{"time":2.3,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":3.1333,"angle":1.43,"curve":0.278,"c3":0.622,"c4":0.39},{"time":3.3333,"angle":0.98}]},"身体12":{"rotate":[{"angle":0.76,"curve":0.345,"c2":0.37,"c3":0.757},{"time":0.6,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.4333,"angle":1.43,"curve":0.269,"c3":0.618,"c4":0.42},{"time":1.6667,"angle":0.76,"curve":0.345,"c2":0.37,"c3":0.757},{"time":2.2667,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":3.1,"angle":1.43,"curve":0.269,"c3":0.618,"c4":0.42},{"time":3.3333,"angle":0.76}]},"身体13":{"rotate":[{"angle":1.37,"curve":0.267,"c2":0.1,"c3":0.678,"c4":0.71},{"time":0.6,"angle":-0.85,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.7667,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.6333,"angle":1.43,"curve":0.313,"c3":0.648,"c4":0.35},{"time":1.6667,"angle":1.37,"curve":0.267,"c2":0.1,"c3":0.678,"c4":0.71},{"time":2.2667,"angle":-0.85,"curve":0.378,"c2":0.61,"c3":0.722},{"time":2.4333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":3.3,"angle":1.43,"curve":0.313,"c3":0.648,"c4":0.35},{"time":3.3333,"angle":1.37}]},"腰牌":{"rotate":[{"angle":-1.64,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":4.46,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":-1.64,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.9333,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":2.8,"angle":4.46,"curve":0.243,"c3":0.649,"c4":0.6},{"time":3.3333,"angle":-1.64}]},"腰牌2":{"rotate":[{"angle":0.15,"curve":0.351,"c2":0.39,"c3":0.701,"c4":0.78},{"time":0.2667,"angle":-3.24,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.4333,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":4.46,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":0.15,"curve":0.351,"c2":0.39,"c3":0.701,"c4":0.78},{"time":1.9333,"angle":-3.24,"curve":0.371,"c2":0.62,"c3":0.71},{"time":2.1,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":2.9333,"angle":4.46,"curve":0.25,"c3":0.625,"c4":0.5},{"time":3.3333,"angle":0.15}]},"腰牌3":{"rotate":[{"angle":1.66,"curve":0.33,"c2":0.32,"c3":0.68,"c4":0.71},{"time":0.2667,"angle":-2,"curve":0.382,"c2":0.58,"c3":0.731},{"time":0.5333,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.3667,"angle":4.46,"curve":0.261,"c3":0.618,"c4":0.44},{"time":1.6667,"angle":1.66,"curve":0.33,"c2":0.32,"c3":0.68,"c4":0.71},{"time":1.9333,"angle":-2,"curve":0.382,"c2":0.58,"c3":0.731},{"time":2.2,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":3.0333,"angle":4.46,"curve":0.261,"c3":0.618,"c4":0.44},{"time":3.3333,"angle":1.66}]},"腰牌4":{"rotate":[{"angle":3.05,"curve":0.31,"c2":0.26,"c3":0.66,"c4":0.65},{"time":0.2667,"angle":-0.55,"curve":0.38,"c2":0.53,"c3":0.745},{"time":0.6333,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":4.46,"curve":0.278,"c3":0.622,"c4":0.39},{"time":1.6667,"angle":3.05,"curve":0.31,"c2":0.26,"c3":0.66,"c4":0.65},{"time":1.9333,"angle":-0.55,"curve":0.38,"c2":0.53,"c3":0.745},{"time":2.3,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":3.1333,"angle":4.46,"curve":0.278,"c3":0.622,"c4":0.39},{"time":3.3333,"angle":3.05}]},"腰牌5":{"rotate":[{"angle":4.11,"curve":0.287,"c2":0.16,"c3":0.638,"c4":0.56},{"time":0.2667,"angle":0.95,"curve":0.367,"c2":0.46,"c3":0.754},{"time":0.7667,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.6,"angle":4.46,"curve":0.305,"c3":0.64,"c4":0.36},{"time":1.6667,"angle":4.11,"curve":0.287,"c2":0.16,"c3":0.638,"c4":0.56},{"time":1.9333,"angle":0.95,"curve":0.367,"c2":0.46,"c3":0.754},{"time":2.4333,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":3.2667,"angle":4.46,"curve":0.305,"c3":0.64,"c4":0.36},{"time":3.3333,"angle":4.11}]},"飘带1":{"rotate":[{"angle":-1.3,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":4.44,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.6667,"angle":-1.3,"curve":0.371,"c2":0.62,"c3":0.71},{"time":1.8,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":2.6333,"angle":4.44,"curve":0.243,"c3":0.689,"c4":0.75},{"time":3.3333,"angle":-1.3}]},"飘带2":{"rotate":[{"angle":-0.15,"curve":0.351,"c2":0.4,"c3":0.689,"c4":0.75},{"time":0.1333,"angle":-1.3,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.2667,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":4.44,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":-0.15,"curve":0.351,"c2":0.4,"c3":0.689,"c4":0.75},{"time":1.8,"angle":-1.3,"curve":0.371,"c2":0.62,"c3":0.71},{"time":1.9333,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":2.8,"angle":4.44,"curve":0.243,"c3":0.649,"c4":0.6},{"time":3.3333,"angle":-0.15}]},"飘带7":{"rotate":[{"angle":1.26,"curve":0.338,"c2":0.35,"c3":0.675,"c4":0.69},{"time":0.1333,"angle":-0.11,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.4333,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":4.44,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":1.26,"curve":0.338,"c2":0.35,"c3":0.675,"c4":0.69},{"time":1.8,"angle":-0.11,"curve":0.382,"c2":0.57,"c3":0.735},{"time":2.1,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":2.9333,"angle":4.44,"curve":0.25,"c3":0.625,"c4":0.5},{"time":3.3333,"angle":1.26}]},"飘带8":{"rotate":[{"angle":2.65,"curve":0.325,"c2":0.31,"c3":0.663,"c4":0.65},{"time":0.1333,"angle":1.27,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.5667,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":1.4,"angle":4.44,"curve":0.265,"c3":0.618,"c4":0.43},{"time":1.6667,"angle":2.65,"curve":0.325,"c2":0.31,"c3":0.663,"c4":0.65},{"time":1.8,"angle":1.27,"curve":0.375,"c2":0.5,"c3":0.75},{"time":2.2333,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":3.0667,"angle":4.44,"curve":0.265,"c3":0.618,"c4":0.43},{"time":3.3333,"angle":2.65}]},"飘带3":{"rotate":[{"angle":-1.82,"curve":0.25,"c3":0.75},{"time":0.8333,"angle":1.51,"curve":0.25,"c3":0.75},{"time":1.6667,"angle":-1.82,"curve":0.25,"c3":0.75},{"time":2.5,"angle":1.51,"curve":0.25,"c3":0.75},{"time":3.3333,"angle":-1.82}]},"飘带4":{"rotate":[{"angle":-1.5,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"angle":-1.82,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":1.51,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.6667,"angle":-1.5,"curve":0.371,"c2":0.62,"c3":0.71},{"time":1.8,"angle":-1.82,"curve":0.25,"c3":0.75},{"time":2.6333,"angle":1.51,"curve":0.243,"c3":0.689,"c4":0.75},{"time":3.3333,"angle":-1.5}]},"飘带5":{"rotate":[{"angle":-1.57,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"angle":-2.8,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":1.51,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":-1.57,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.9333,"angle":-2.8,"curve":0.25,"c3":0.75},{"time":2.8,"angle":1.51,"curve":0.243,"c3":0.649,"c4":0.6},{"time":3.3333,"angle":-1.57}]},"飘带6":{"rotate":[{"angle":-5,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.4333,"angle":-11.5,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":1.51,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":-5,"curve":0.375,"c2":0.5,"c3":0.75},{"time":2.1,"angle":-11.5,"curve":0.25,"c3":0.75},{"time":2.9333,"angle":1.51,"curve":0.25,"c3":0.625,"c4":0.5},{"time":3.3333,"angle":-5}]},"马尾7":{"rotate":[{"angle":-1.7,"curve":0.29,"c3":0.629,"c4":0.38},{"time":0.1333,"angle":-1.25,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.8333,"angle":3,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.5,"angle":-1.09,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.6667,"angle":-1.7,"curve":0.29,"c3":0.629,"c4":0.38},{"time":1.8,"angle":-1.25,"curve":0.311,"c2":0.25,"c3":0.757},{"time":2.5,"angle":3,"curve":0.243,"c3":0.68,"c4":0.71},{"time":3.1667,"angle":-1.09,"curve":0.375,"c2":0.62,"c3":0.716},{"time":3.3333,"angle":-1.7}]},"马尾8":{"rotate":[{"angle":-1.26,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":3,"curve":0.244,"c3":0.643,"c4":0.58},{"time":1.5,"angle":-0.17,"curve":0.353,"c2":0.4,"c3":0.692,"c4":0.76},{"time":1.6667,"angle":-1.26,"curve":0.371,"c2":0.62,"c3":0.71},{"time":1.8,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":2.6333,"angle":3,"curve":0.244,"c3":0.643,"c4":0.58},{"time":3.1667,"angle":-0.17,"curve":0.353,"c2":0.4,"c3":0.692,"c4":0.76},{"time":3.3333,"angle":-1.26}]},"马尾9":{"rotate":[{"angle":-0.19,"curve":0.348,"c2":0.39,"c3":0.686,"c4":0.73},{"time":0.1333,"angle":-1.1,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.3,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":3,"curve":0.255,"c3":0.62,"c4":0.47},{"time":1.5,"angle":1.06,"curve":0.333,"c2":0.33,"c3":0.673,"c4":0.68},{"time":1.6667,"angle":-0.19,"curve":0.348,"c2":0.39,"c3":0.686,"c4":0.73},{"time":1.8,"angle":-1.1,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.9667,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":2.8,"angle":3,"curve":0.255,"c3":0.62,"c4":0.47},{"time":3.1667,"angle":1.06,"curve":0.333,"c2":0.33,"c3":0.673,"c4":0.68},{"time":3.3333,"angle":-0.19}]},"马尾10":{"rotate":[{"angle":-1.25,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":3,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.6667,"angle":-1.25,"curve":0.371,"c2":0.62,"c3":0.71},{"time":1.8,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":2.6333,"angle":3,"curve":0.243,"c3":0.689,"c4":0.75},{"time":3.3333,"angle":-1.25}]},"马尾6":{"rotate":[{"angle":3,"curve":0.29,"c3":0.629,"c4":0.38},{"time":0.1333,"angle":2.54,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.8333,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.6667,"angle":3,"curve":0.29,"c3":0.629,"c4":0.38},{"time":1.8,"angle":2.54,"curve":0.311,"c2":0.25,"c3":0.757},{"time":2.5,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":3.3333,"angle":3}]},"马尾5":{"rotate":[{"angle":2.4,"curve":0.314,"c2":0.27,"c3":0.652,"c4":0.61},{"time":0.1333,"angle":1.47,"curve":0.357,"c2":0.42,"c3":0.756},{"time":0.6667,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.5,"angle":3,"curve":0.284,"c3":0.625,"c4":0.38},{"time":1.6667,"angle":2.4,"curve":0.314,"c2":0.27,"c3":0.652,"c4":0.61},{"time":1.8,"angle":1.47,"curve":0.357,"c2":0.42,"c3":0.756},{"time":2.3333,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":3.1667,"angle":3,"curve":0.284,"c3":0.625,"c4":0.38},{"time":3.3333,"angle":2.4}]},"马尾4":{"rotate":[{"angle":1.06,"curve":0.333,"c2":0.33,"c3":0.67,"c4":0.68},{"time":0.1333,"angle":0.03,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.4667,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.3,"angle":3,"curve":0.255,"c3":0.62,"c4":0.47},{"time":1.6667,"angle":1.06,"curve":0.333,"c2":0.33,"c3":0.67,"c4":0.68},{"time":1.8,"angle":0.03,"curve":0.381,"c2":0.55,"c3":0.742},{"time":2.1333,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":2.9667,"angle":3,"curve":0.255,"c3":0.62,"c4":0.47},{"time":3.3333,"angle":1.06}]},"马尾3":{"rotate":[{"angle":-0.2,"curve":0.348,"c2":0.39,"c3":0.686,"c4":0.73},{"time":0.1333,"angle":-1.09,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.3,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":3,"curve":0.244,"c3":0.643,"c4":0.58},{"time":1.6667,"angle":-0.2,"curve":0.348,"c2":0.39,"c3":0.686,"c4":0.73},{"time":1.8,"angle":-1.09,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.9667,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":2.8,"angle":3,"curve":0.244,"c3":0.643,"c4":0.58},{"time":3.3333,"angle":-0.2}]},"马尾2":{"rotate":[{"angle":0.2,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":2.06,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.6667,"angle":0.2,"curve":0.371,"c2":0.62,"c3":0.71},{"time":1.8,"curve":0.25,"c3":0.75},{"time":2.6333,"angle":2.06,"curve":0.243,"c3":0.689,"c4":0.75},{"time":3.3333,"angle":0.2}]},"马尾1":{"rotate":[{"angle":-1.74,"curve":0.314,"c2":0.27,"c3":0.652,"c4":0.61},{"time":0.1333,"angle":-1.41,"curve":0.357,"c2":0.42,"c3":0.756},{"time":0.6667,"angle":-0.3,"curve":0.25,"c3":0.75},{"time":1.5,"angle":-1.95,"curve":0.284,"c3":0.625,"c4":0.38},{"time":1.6667,"angle":-1.74,"curve":0.314,"c2":0.27,"c3":0.652,"c4":0.61},{"time":1.8,"angle":-1.41,"curve":0.357,"c2":0.42,"c3":0.756},{"time":2.3333,"angle":-0.3,"curve":0.25,"c3":0.75},{"time":3.1667,"angle":-1.95,"curve":0.284,"c3":0.625,"c4":0.38},{"time":3.3333,"angle":-1.74}]},"头发3":{"rotate":[{"angle":-0.36,"curve":0.25,"c3":0.75},{"time":0.8333,"angle":1.36,"curve":0.25,"c3":0.75},{"time":1.6667,"angle":-0.36,"curve":0.25,"c3":0.75},{"time":2.5,"angle":1.36,"curve":0.25,"c3":0.75},{"time":3.3333,"angle":-0.36}]},"头发4":{"rotate":[{"angle":-0.14,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.1667,"angle":-0.36,"curve":0.25,"c3":0.75},{"time":1,"angle":1.36,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.6667,"angle":-0.14,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.8333,"angle":-0.36,"curve":0.25,"c3":0.75},{"time":2.6667,"angle":1.36,"curve":0.243,"c3":0.68,"c4":0.71},{"time":3.3333,"angle":-0.14}]},"头发5":{"rotate":[{"angle":0.27,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.3333,"angle":-0.36,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":1.36,"curve":0.245,"c3":0.637,"c4":0.56},{"time":1.6667,"angle":0.27,"curve":0.381,"c2":0.55,"c3":0.742},{"time":2,"angle":-0.36,"curve":0.25,"c3":0.75},{"time":2.8333,"angle":1.36,"curve":0.245,"c3":0.637,"c4":0.56},{"time":3.3333,"angle":0.27}]},"头发6":{"rotate":[{"angle":0.73,"curve":0.363,"c2":0.44,"c3":0.755},{"time":0.5,"angle":-0.36,"curve":0.25,"c3":0.75},{"time":1.3333,"angle":1.36,"curve":0.258,"c3":0.619,"c4":0.45},{"time":1.6667,"angle":0.73,"curve":0.363,"c2":0.44,"c3":0.755},{"time":2.1667,"angle":-0.36,"curve":0.25,"c3":0.75},{"time":3,"angle":1.36,"curve":0.258,"c3":0.619,"c4":0.45},{"time":3.3333,"angle":0.73}]},"头发20":{"rotate":[{"angle":1.06,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":3.74,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":1.06,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.9333,"curve":0.25,"c3":0.75},{"time":2.8,"angle":3.74,"curve":0.243,"c3":0.649,"c4":0.6},{"time":3.3333,"angle":1.06}]},"头发21":{"rotate":[{"angle":2.02,"curve":0.345,"c2":0.37,"c3":0.696,"c4":0.76},{"time":0.2667,"angle":0.49,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.4333,"curve":0.25,"c3":0.75},{"time":1.3,"angle":3.74,"curve":0.252,"c3":0.622,"c4":0.48},{"time":1.6667,"angle":2.02,"curve":0.345,"c2":0.37,"c3":0.696,"c4":0.76},{"time":1.9333,"angle":0.49,"curve":0.375,"c2":0.62,"c3":0.716},{"time":2.1,"curve":0.25,"c3":0.75},{"time":2.9667,"angle":3.74,"curve":0.252,"c3":0.622,"c4":0.48},{"time":3.3333,"angle":2.02}]},"头发22":{"rotate":[{"angle":3.12,"curve":0.31,"c2":0.26,"c3":0.66,"c4":0.65},{"time":0.2667,"angle":1.54,"curve":0.38,"c2":0.53,"c3":0.745},{"time":0.6333,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":3.74,"curve":0.278,"c3":0.622,"c4":0.39},{"time":1.6667,"angle":3.12,"curve":0.31,"c2":0.26,"c3":0.66,"c4":0.65},{"time":1.9333,"angle":1.54,"curve":0.38,"c2":0.53,"c3":0.745},{"time":2.3,"curve":0.25,"c3":0.75},{"time":3.1333,"angle":3.74,"curve":0.278,"c3":0.622,"c4":0.39},{"time":3.3333,"angle":3.12}]},"头发16":{"rotate":[{"angle":0.13,"curve":0.337,"c2":0.35,"c3":0.758},{"time":0.6,"angle":1.95,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":-0.33,"curve":0.273,"c3":0.62,"c4":0.41},{"time":1.6667,"angle":0.13,"curve":0.337,"c2":0.35,"c3":0.758},{"time":2.2667,"angle":1.95,"curve":0.25,"c3":0.75},{"time":3.1333,"angle":-0.33,"curve":0.273,"c3":0.62,"c4":0.41},{"time":3.3333,"angle":0.13}]},"头发17":{"rotate":[{"angle":-0.28,"curve":0.277,"c2":0.12,"c3":0.754},{"time":0.7667,"angle":1.95,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.4667,"angle":-0.03,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.6333,"angle":-0.33,"curve":0.313,"c3":0.648,"c4":0.35},{"time":1.6667,"angle":-0.28,"curve":0.277,"c2":0.12,"c3":0.754},{"time":2.4333,"angle":1.95,"curve":0.243,"c3":0.68,"c4":0.71},{"time":3.1333,"angle":-0.03,"curve":0.375,"c2":0.62,"c3":0.716},{"time":3.3,"angle":-0.33,"curve":0.313,"c3":0.648,"c4":0.35},{"time":3.3333,"angle":-0.28}]},"头发18":{"rotate":[{"angle":-0.18,"curve":0.366,"c2":0.63,"c3":0.703},{"time":0.1,"angle":-0.33,"curve":0.25,"c3":0.75},{"time":0.9333,"angle":1.95,"curve":0.245,"c3":0.637,"c4":0.56},{"time":1.4667,"angle":0.51,"curve":0.358,"c2":0.42,"c3":0.702,"c4":0.8},{"time":1.6667,"angle":-0.18,"curve":0.366,"c2":0.63,"c3":0.703},{"time":1.7667,"angle":-0.33,"curve":0.25,"c3":0.75},{"time":2.6,"angle":1.95,"curve":0.245,"c3":0.637,"c4":0.56},{"time":3.1333,"angle":0.51,"curve":0.358,"c2":0.42,"c3":0.702,"c4":0.8},{"time":3.3333,"angle":-0.18}]},"头发19":{"rotate":[{"angle":0.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"angle":-0.33,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":1.95,"curve":0.258,"c3":0.619,"c4":0.45},{"time":1.4667,"angle":1.11,"curve":0.332,"c2":0.33,"c3":0.676,"c4":0.7},{"time":1.6667,"angle":0.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.9333,"angle":-0.33,"curve":0.25,"c3":0.75},{"time":2.8,"angle":1.95,"curve":0.258,"c3":0.619,"c4":0.45},{"time":3.1333,"angle":1.11,"curve":0.332,"c2":0.33,"c3":0.676,"c4":0.7},{"time":3.3333,"angle":0.32}]},"头发":{"rotate":[{"angle":-0.75,"curve":0.38,"c2":0.53,"c3":0.745},{"time":0.3667,"angle":-1.95,"curve":0.25,"c3":0.75},{"time":1.2,"angle":0.95,"curve":0.246,"c3":0.633,"c4":0.54},{"time":1.6667,"angle":-0.75,"curve":0.38,"c2":0.53,"c3":0.745},{"time":2.0333,"angle":-1.95,"curve":0.25,"c3":0.75},{"time":2.8667,"angle":0.95,"curve":0.246,"c3":0.633,"c4":0.54},{"time":3.3333,"angle":-0.75}]},"头发7":{"rotate":[{"angle":0.01,"curve":0.357,"c2":0.42,"c3":0.756},{"time":0.5333,"angle":-1.95,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.2,"angle":0.57,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.3667,"angle":0.95,"curve":0.261,"c3":0.618,"c4":0.44},{"time":1.6667,"angle":0.01,"curve":0.357,"c2":0.42,"c3":0.756},{"time":2.2,"angle":-1.95,"curve":0.243,"c3":0.68,"c4":0.71},{"time":2.8667,"angle":0.57,"curve":0.375,"c2":0.62,"c3":0.716},{"time":3.0333,"angle":0.95,"curve":0.261,"c3":0.618,"c4":0.44},{"time":3.3333,"angle":0.01}]},"头发8":{"rotate":[{"angle":0.67,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.7,"angle":-1.95,"curve":0.245,"c3":0.637,"c4":0.56},{"time":1.2,"angle":-0.12,"curve":0.381,"c2":0.55,"c3":0.742},{"time":1.5333,"angle":0.95,"curve":0.29,"c3":0.629,"c4":0.38},{"time":1.6667,"angle":0.67,"curve":0.311,"c2":0.25,"c3":0.757},{"time":2.3667,"angle":-1.95,"curve":0.245,"c3":0.637,"c4":0.56},{"time":2.8667,"angle":-0.12,"curve":0.381,"c2":0.55,"c3":0.742},{"time":3.2,"angle":0.95,"curve":0.29,"c3":0.629,"c4":0.38},{"time":3.3333,"angle":0.67}]},"头发9":{"rotate":[{"angle":0.93,"curve":0.344,"c2":0.66,"c3":0.677},{"time":0.0333,"angle":0.95,"curve":0.25,"c3":0.75},{"time":0.8667,"angle":-1.95,"curve":0.258,"c3":0.619,"c4":0.45},{"time":1.2,"angle":-0.88,"curve":0.358,"c2":0.42,"c3":0.743,"c4":0.94},{"time":1.6667,"angle":0.93,"curve":0.344,"c2":0.66,"c3":0.677},{"time":1.7,"angle":0.95,"curve":0.25,"c3":0.75},{"time":2.5333,"angle":-1.95,"curve":0.258,"c3":0.619,"c4":0.45},{"time":2.8667,"angle":-0.88,"curve":0.358,"c2":0.42,"c3":0.743,"c4":0.94},{"time":3.3333,"angle":0.93}]},"头发1":{"rotate":[{"angle":-0.42,"curve":0.302,"c2":0.23,"c3":0.669,"c4":0.67},{"time":0.4,"angle":-2.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.6667,"angle":-3.23,"curve":0.25,"c3":0.75},{"time":1.5,"curve":0.284,"c3":0.625,"c4":0.38},{"time":1.6667,"angle":-0.42,"curve":0.302,"c2":0.23,"c3":0.669,"c4":0.67},{"time":2.0667,"angle":-2.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":2.3333,"angle":-3.23,"curve":0.25,"c3":0.75},{"time":3.1667,"curve":0.284,"c3":0.625,"c4":0.38},{"time":3.3333,"angle":-0.42}]},"头发10":{"rotate":[{"curve":0.252,"c3":0.622,"c4":0.48},{"time":0.4,"angle":-1.47,"curve":0.372,"c2":0.48,"c3":0.752},{"time":0.8333,"angle":-3.23,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.5,"angle":-0.42,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.6667,"curve":0.252,"c3":0.622,"c4":0.48},{"time":2.0667,"angle":-1.47,"curve":0.372,"c2":0.48,"c3":0.752},{"time":2.5,"angle":-3.23,"curve":0.243,"c3":0.68,"c4":0.71},{"time":3.1667,"angle":-0.42,"curve":0.375,"c2":0.62,"c3":0.716},{"time":3.3333}]},"头发11":{"rotate":[{"angle":-0.31,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"curve":0.269,"c3":0.618,"c4":0.42},{"time":0.4,"angle":-0.78,"curve":0.345,"c2":0.37,"c3":0.757},{"time":0.9667,"angle":-3.23,"curve":0.244,"c3":0.643,"c4":0.58},{"time":1.5,"angle":-1.05,"curve":0.353,"c2":0.4,"c3":0.692,"c4":0.76},{"time":1.6667,"angle":-0.31,"curve":0.371,"c2":0.62,"c3":0.71},{"time":1.8,"curve":0.269,"c3":0.618,"c4":0.42},{"time":2.0667,"angle":-0.78,"curve":0.345,"c2":0.37,"c3":0.757},{"time":2.6333,"angle":-3.23,"curve":0.244,"c3":0.643,"c4":0.58},{"time":3.1667,"angle":-1.05,"curve":0.353,"c2":0.4,"c3":0.692,"c4":0.76},{"time":3.3333,"angle":-0.31}]},"头发12":{"rotate":[{"angle":-1.05,"curve":0.382,"c2":0.56,"c3":0.739},{"time":0.3,"curve":0.305,"c3":0.64,"c4":0.36},{"time":0.4,"angle":-0.14,"curve":0.289,"c2":0.17,"c3":0.755},{"time":1.1333,"angle":-3.23,"curve":0.255,"c3":0.62,"c4":0.47},{"time":1.5,"angle":-1.9,"curve":0.333,"c2":0.33,"c3":0.673,"c4":0.68},{"time":1.6667,"angle":-1.05,"curve":0.382,"c2":0.56,"c3":0.739},{"time":1.9667,"curve":0.305,"c3":0.64,"c4":0.36},{"time":2.0667,"angle":-0.14,"curve":0.289,"c2":0.17,"c3":0.755},{"time":2.8,"angle":-3.23,"curve":0.255,"c3":0.62,"c4":0.47},{"time":3.1667,"angle":-1.9,"curve":0.333,"c2":0.33,"c3":0.673,"c4":0.68},{"time":3.3333,"angle":-1.05}]},"头发13":{"rotate":[{"angle":-2.63,"curve":0.361,"c2":0.43,"c3":0.729,"c4":0.89},{"time":0.4,"angle":-0.1,"curve":0.352,"c2":0.65,"c3":0.687},{"time":0.4333,"curve":0.25,"c3":0.75},{"time":1.3,"angle":-4.83,"curve":0.273,"c3":0.62,"c4":0.41},{"time":1.5,"angle":-3.85,"curve":0.318,"c2":0.28,"c3":0.658,"c4":0.64},{"time":1.6667,"angle":-2.63,"curve":0.361,"c2":0.43,"c3":0.729,"c4":0.89},{"time":2.0667,"angle":-0.1,"curve":0.352,"c2":0.65,"c3":0.687},{"time":2.1,"curve":0.25,"c3":0.75},{"time":2.9667,"angle":-4.83,"curve":0.273,"c3":0.62,"c4":0.41},{"time":3.1667,"angle":-3.85,"curve":0.318,"c2":0.28,"c3":0.658,"c4":0.64},{"time":3.3333,"angle":-2.63}]},"头发14":{"rotate":[{"angle":-3.68,"curve":0.324,"c2":0.3,"c3":0.69,"c4":0.74},{"time":0.4,"angle":-0.81,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.6,"curve":0.25,"c3":0.75},{"time":1.4333,"angle":-4.83,"curve":0.305,"c3":0.64,"c4":0.36},{"time":1.5,"angle":-4.63,"curve":0.299,"c2":0.19,"c3":0.64,"c4":0.55},{"time":1.6667,"angle":-3.68,"curve":0.324,"c2":0.3,"c3":0.69,"c4":0.74},{"time":2.0667,"angle":-0.81,"curve":0.378,"c2":0.61,"c3":0.722},{"time":2.2667,"curve":0.25,"c3":0.75},{"time":3.1,"angle":-4.83,"curve":0.305,"c3":0.64,"c4":0.36},{"time":3.1667,"angle":-4.63,"curve":0.299,"c2":0.19,"c3":0.64,"c4":0.55},{"time":3.3333,"angle":-3.68}]},"眼珠":{"translate":[{"time":0.6333,"curve":0.25,"c3":0.75},{"time":0.7,"x":-1.46,"y":-0.02,"curve":"stepped"},{"time":1.0333,"x":-1.46,"y":-0.02,"curve":0.25,"c3":0.75},{"time":1.0667,"x":0.57,"y":-0.01,"curve":0.25,"c3":0.75},{"time":2.4,"curve":0.25,"c3":0.75},{"time":2.4667,"x":-1.46,"y":-0.02,"curve":"stepped"},{"time":3.0667,"x":-1.46,"y":-0.02,"curve":0.25,"c3":0.75},{"time":3.1}]},"眼框":{"scale":[{"time":1.6333,"curve":0.25,"c3":0.75},{"time":1.7,"y":0.494,"curve":"stepped"},{"time":1.8,"y":0.494,"curve":0.25,"c3":0.75},{"time":1.8667,"y":1.085,"curve":0.25,"c3":0.75},{"time":1.9333}]},"眼睫毛":{"translate":[{"y":-5.22,"curve":0.274,"c3":0.62,"c4":0.4},{"time":0.4333,"x":-0.02,"y":-4.57,"curve":0.337,"c2":0.35,"c3":0.758},{"time":1.6333,"y":-5.22,"curve":0.25,"c3":0.75},{"time":1.7,"x":0.03,"y":-13.89,"curve":"stepped"},{"time":1.8,"x":0.03,"y":-13.89,"curve":0.25,"c3":0.75},{"time":1.8667,"x":-0.02,"y":-3.92,"curve":0.25,"c3":0.75},{"time":1.9333,"y":-5.22}]},"root":{"translate":[{"x":80,"y":193}],"scale":[{"x":0.55,"y":0.55}]},"眉毛":{"rotate":[{"angle":-5.91}],"translate":[{"y":-5.22}]}}},"loop_index_weixiao":{"slots":{"眼框":{"color":[{"time":1.7,"color":"ffffff00","curve":"stepped"},{"time":1.8667,"color":"ffffffff"}]},"眼珠":{"color":[{"time":1.7,"color":"ffffff00","curve":"stepped"},{"time":1.8333,"color":"ffffffff"}]},"眼睫毛":{"attachment":[{"time":1.7,"name":"眼睫闭"},{"time":1.8667,"name":"眼睫毛"}]}},"bones":{"身体":{"translate":[{"x":-1.64,"curve":0.25,"c3":0.75},{"time":0.8333,"x":4.48,"curve":0.25,"c3":0.75},{"time":1.6667,"x":-1.64,"curve":0.25,"c3":0.75},{"time":2.5,"x":4.48,"curve":0.25,"c3":0.75},{"time":3.3333,"x":-1.64}]},"身体2":{"rotate":[{"angle":-0.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"angle":-0.77,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":0.82,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":-0.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.9333,"angle":-0.77,"curve":0.25,"c3":0.75},{"time":2.8,"angle":0.82,"curve":0.243,"c3":0.649,"c4":0.6},{"time":3.3333,"angle":-0.32}]},"脸":{"rotate":[{"angle":0.37,"curve":0.325,"c2":0.31,"c3":0.675,"c4":0.69},{"time":0.2667,"angle":-0.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.5667,"angle":-0.77,"curve":0.25,"c3":0.75},{"time":1.4,"angle":0.82,"curve":0.265,"c3":0.618,"c4":0.43},{"time":1.6667,"angle":0.37,"curve":0.325,"c2":0.31,"c3":0.675,"c4":0.69},{"time":1.9333,"angle":-0.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":2.2333,"angle":-0.77,"curve":0.25,"c3":0.75},{"time":3.0667,"angle":0.82,"curve":0.265,"c3":0.618,"c4":0.43},{"time":3.3333,"angle":0.37}]},"身体9":{"rotate":[{"angle":0.06,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.4333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":1.43,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":0.06,"curve":0.375,"c2":0.5,"c3":0.75},{"time":2.1,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":2.9333,"angle":1.43,"curve":0.25,"c3":0.625,"c4":0.5},{"time":3.3333,"angle":0.06}]},"身体10":{"rotate":[{"angle":0.87,"curve":0.318,"c2":0.28,"c3":0.69,"c4":0.74},{"time":0.4333,"angle":-0.85,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.6,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":1.43,"curve":0.273,"c3":0.62,"c4":0.41},{"time":1.6667,"angle":0.87,"curve":0.318,"c2":0.28,"c3":0.69,"c4":0.74},{"time":2.1,"angle":-0.85,"curve":0.378,"c2":0.61,"c3":0.722},{"time":2.2667,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":3.1333,"angle":1.43,"curve":0.273,"c3":0.62,"c4":0.41},{"time":3.3333,"angle":0.87}]},"身体11":{"rotate":[{"angle":1.41,"curve":0.26,"c2":0.06,"c3":0.634,"c4":0.54},{"time":0.4333,"angle":-0.06,"curve":0.378,"c2":0.52,"c3":0.748},{"time":0.8,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.6333,"angle":1.43,"curve":0.323,"c3":0.656,"c4":0.34},{"time":1.6667,"angle":1.41,"curve":0.26,"c2":0.06,"c3":0.634,"c4":0.54},{"time":2.1,"angle":-0.06,"curve":0.378,"c2":0.52,"c3":0.748},{"time":2.4667,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":3.3,"angle":1.43,"curve":0.323,"c3":0.656,"c4":0.34},{"time":3.3333,"angle":1.41}]},"身体6":{"rotate":[{"angle":-0.75,"curve":0.38,"c2":0.59,"c3":0.727},{"time":0.2333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.0667,"angle":1.43,"curve":0.242,"c3":0.663,"c4":0.65},{"time":1.6667,"angle":-0.75,"curve":0.38,"c2":0.59,"c3":0.727},{"time":1.9,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":2.7333,"angle":1.43,"curve":0.242,"c3":0.663,"c4":0.65},{"time":3.3333,"angle":-0.75}]},"身体7":{"rotate":[{"angle":0.05,"curve":0.344,"c2":0.37,"c3":0.688,"c4":0.74},{"time":0.2333,"angle":-0.85,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.4333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":1.43,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":0.05,"curve":0.344,"c2":0.37,"c3":0.688,"c4":0.74},{"time":1.9,"angle":-0.85,"curve":0.378,"c2":0.61,"c3":0.722},{"time":2.1,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":2.9333,"angle":1.43,"curve":0.25,"c3":0.625,"c4":0.5},{"time":3.3333,"angle":0.05}]},"身体8":{"rotate":[{"angle":0.98,"curve":0.312,"c2":0.26,"c3":0.656,"c4":0.63},{"time":0.2333,"angle":0.06,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.6333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":1.43,"curve":0.278,"c3":0.622,"c4":0.39},{"time":1.6667,"angle":0.98,"curve":0.312,"c2":0.26,"c3":0.656,"c4":0.63},{"time":1.9,"angle":0.06,"curve":0.375,"c2":0.5,"c3":0.75},{"time":2.3,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":3.1333,"angle":1.43,"curve":0.278,"c3":0.622,"c4":0.39},{"time":3.3333,"angle":0.98}]},"身体12":{"rotate":[{"angle":0.76,"curve":0.345,"c2":0.37,"c3":0.757},{"time":0.6,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.4333,"angle":1.43,"curve":0.269,"c3":0.618,"c4":0.42},{"time":1.6667,"angle":0.76,"curve":0.345,"c2":0.37,"c3":0.757},{"time":2.2667,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":3.1,"angle":1.43,"curve":0.269,"c3":0.618,"c4":0.42},{"time":3.3333,"angle":0.76}]},"身体13":{"rotate":[{"angle":1.37,"curve":0.267,"c2":0.1,"c3":0.678,"c4":0.71},{"time":0.6,"angle":-0.85,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.7667,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.6333,"angle":1.43,"curve":0.313,"c3":0.648,"c4":0.35},{"time":1.6667,"angle":1.37,"curve":0.267,"c2":0.1,"c3":0.678,"c4":0.71},{"time":2.2667,"angle":-0.85,"curve":0.378,"c2":0.61,"c3":0.722},{"time":2.4333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":3.3,"angle":1.43,"curve":0.313,"c3":0.648,"c4":0.35},{"time":3.3333,"angle":1.37}]},"腰牌":{"rotate":[{"angle":-1.64,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":4.46,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":-1.64,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.9333,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":2.8,"angle":4.46,"curve":0.243,"c3":0.649,"c4":0.6},{"time":3.3333,"angle":-1.64}]},"腰牌2":{"rotate":[{"angle":0.15,"curve":0.351,"c2":0.39,"c3":0.701,"c4":0.78},{"time":0.2667,"angle":-3.24,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.4333,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":4.46,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":0.15,"curve":0.351,"c2":0.39,"c3":0.701,"c4":0.78},{"time":1.9333,"angle":-3.24,"curve":0.371,"c2":0.62,"c3":0.71},{"time":2.1,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":2.9333,"angle":4.46,"curve":0.25,"c3":0.625,"c4":0.5},{"time":3.3333,"angle":0.15}]},"腰牌3":{"rotate":[{"angle":1.66,"curve":0.33,"c2":0.32,"c3":0.68,"c4":0.71},{"time":0.2667,"angle":-2,"curve":0.382,"c2":0.58,"c3":0.731},{"time":0.5333,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.3667,"angle":4.46,"curve":0.261,"c3":0.618,"c4":0.44},{"time":1.6667,"angle":1.66,"curve":0.33,"c2":0.32,"c3":0.68,"c4":0.71},{"time":1.9333,"angle":-2,"curve":0.382,"c2":0.58,"c3":0.731},{"time":2.2,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":3.0333,"angle":4.46,"curve":0.261,"c3":0.618,"c4":0.44},{"time":3.3333,"angle":1.66}]},"腰牌4":{"rotate":[{"angle":3.05,"curve":0.31,"c2":0.26,"c3":0.66,"c4":0.65},{"time":0.2667,"angle":-0.55,"curve":0.38,"c2":0.53,"c3":0.745},{"time":0.6333,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":4.46,"curve":0.278,"c3":0.622,"c4":0.39},{"time":1.6667,"angle":3.05,"curve":0.31,"c2":0.26,"c3":0.66,"c4":0.65},{"time":1.9333,"angle":-0.55,"curve":0.38,"c2":0.53,"c3":0.745},{"time":2.3,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":3.1333,"angle":4.46,"curve":0.278,"c3":0.622,"c4":0.39},{"time":3.3333,"angle":3.05}]},"腰牌5":{"rotate":[{"angle":4.11,"curve":0.287,"c2":0.16,"c3":0.638,"c4":0.56},{"time":0.2667,"angle":0.95,"curve":0.367,"c2":0.46,"c3":0.754},{"time":0.7667,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.6,"angle":4.46,"curve":0.305,"c3":0.64,"c4":0.36},{"time":1.6667,"angle":4.11,"curve":0.287,"c2":0.16,"c3":0.638,"c4":0.56},{"time":1.9333,"angle":0.95,"curve":0.367,"c2":0.46,"c3":0.754},{"time":2.4333,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":3.2667,"angle":4.46,"curve":0.305,"c3":0.64,"c4":0.36},{"time":3.3333,"angle":4.11}]},"飘带1":{"rotate":[{"angle":-1.3,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":4.44,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.6667,"angle":-1.3,"curve":0.371,"c2":0.62,"c3":0.71},{"time":1.8,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":2.6333,"angle":4.44,"curve":0.243,"c3":0.689,"c4":0.75},{"time":3.3333,"angle":-1.3}]},"飘带2":{"rotate":[{"angle":-0.15,"curve":0.351,"c2":0.4,"c3":0.689,"c4":0.75},{"time":0.1333,"angle":-1.3,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.2667,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":4.44,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":-0.15,"curve":0.351,"c2":0.4,"c3":0.689,"c4":0.75},{"time":1.8,"angle":-1.3,"curve":0.371,"c2":0.62,"c3":0.71},{"time":1.9333,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":2.8,"angle":4.44,"curve":0.243,"c3":0.649,"c4":0.6},{"time":3.3333,"angle":-0.15}]},"飘带7":{"rotate":[{"angle":1.26,"curve":0.338,"c2":0.35,"c3":0.675,"c4":0.69},{"time":0.1333,"angle":-0.11,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.4333,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":4.44,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":1.26,"curve":0.338,"c2":0.35,"c3":0.675,"c4":0.69},{"time":1.8,"angle":-0.11,"curve":0.382,"c2":0.57,"c3":0.735},{"time":2.1,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":2.9333,"angle":4.44,"curve":0.25,"c3":0.625,"c4":0.5},{"time":3.3333,"angle":1.26}]},"飘带8":{"rotate":[{"angle":2.65,"curve":0.325,"c2":0.31,"c3":0.663,"c4":0.65},{"time":0.1333,"angle":1.27,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.5667,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":1.4,"angle":4.44,"curve":0.265,"c3":0.618,"c4":0.43},{"time":1.6667,"angle":2.65,"curve":0.325,"c2":0.31,"c3":0.663,"c4":0.65},{"time":1.8,"angle":1.27,"curve":0.375,"c2":0.5,"c3":0.75},{"time":2.2333,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":3.0667,"angle":4.44,"curve":0.265,"c3":0.618,"c4":0.43},{"time":3.3333,"angle":2.65}]},"飘带3":{"rotate":[{"angle":-1.82,"curve":0.25,"c3":0.75},{"time":0.8333,"angle":1.51,"curve":0.25,"c3":0.75},{"time":1.6667,"angle":-1.82,"curve":0.25,"c3":0.75},{"time":2.5,"angle":1.51,"curve":0.25,"c3":0.75},{"time":3.3333,"angle":-1.82}]},"飘带4":{"rotate":[{"angle":-1.5,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"angle":-1.82,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":1.51,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.6667,"angle":-1.5,"curve":0.371,"c2":0.62,"c3":0.71},{"time":1.8,"angle":-1.82,"curve":0.25,"c3":0.75},{"time":2.6333,"angle":1.51,"curve":0.243,"c3":0.689,"c4":0.75},{"time":3.3333,"angle":-1.5}]},"飘带5":{"rotate":[{"angle":-1.57,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"angle":-2.8,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":1.51,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":-1.57,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.9333,"angle":-2.8,"curve":0.25,"c3":0.75},{"time":2.8,"angle":1.51,"curve":0.243,"c3":0.649,"c4":0.6},{"time":3.3333,"angle":-1.57}]},"飘带6":{"rotate":[{"angle":-5,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.4333,"angle":-11.5,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":1.51,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":-5,"curve":0.375,"c2":0.5,"c3":0.75},{"time":2.1,"angle":-11.5,"curve":0.25,"c3":0.75},{"time":2.9333,"angle":1.51,"curve":0.25,"c3":0.625,"c4":0.5},{"time":3.3333,"angle":-5}]},"马尾7":{"rotate":[{"angle":-1.7,"curve":0.29,"c3":0.629,"c4":0.38},{"time":0.1333,"angle":-1.25,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.8333,"angle":3,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.5,"angle":-1.09,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.6667,"angle":-1.7,"curve":0.29,"c3":0.629,"c4":0.38},{"time":1.8,"angle":-1.25,"curve":0.311,"c2":0.25,"c3":0.757},{"time":2.5,"angle":3,"curve":0.243,"c3":0.68,"c4":0.71},{"time":3.1667,"angle":-1.09,"curve":0.375,"c2":0.62,"c3":0.716},{"time":3.3333,"angle":-1.7}]},"马尾8":{"rotate":[{"angle":-1.26,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":3,"curve":0.244,"c3":0.643,"c4":0.58},{"time":1.5,"angle":-0.17,"curve":0.353,"c2":0.4,"c3":0.692,"c4":0.76},{"time":1.6667,"angle":-1.26,"curve":0.371,"c2":0.62,"c3":0.71},{"time":1.8,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":2.6333,"angle":3,"curve":0.244,"c3":0.643,"c4":0.58},{"time":3.1667,"angle":-0.17,"curve":0.353,"c2":0.4,"c3":0.692,"c4":0.76},{"time":3.3333,"angle":-1.26}]},"马尾9":{"rotate":[{"angle":-0.19,"curve":0.348,"c2":0.39,"c3":0.686,"c4":0.73},{"time":0.1333,"angle":-1.1,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.3,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":3,"curve":0.255,"c3":0.62,"c4":0.47},{"time":1.5,"angle":1.06,"curve":0.333,"c2":0.33,"c3":0.673,"c4":0.68},{"time":1.6667,"angle":-0.19,"curve":0.348,"c2":0.39,"c3":0.686,"c4":0.73},{"time":1.8,"angle":-1.1,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.9667,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":2.8,"angle":3,"curve":0.255,"c3":0.62,"c4":0.47},{"time":3.1667,"angle":1.06,"curve":0.333,"c2":0.33,"c3":0.673,"c4":0.68},{"time":3.3333,"angle":-0.19}]},"马尾10":{"rotate":[{"angle":-1.25,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":3,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.6667,"angle":-1.25,"curve":0.371,"c2":0.62,"c3":0.71},{"time":1.8,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":2.6333,"angle":3,"curve":0.243,"c3":0.689,"c4":0.75},{"time":3.3333,"angle":-1.25}]},"马尾6":{"rotate":[{"angle":3,"curve":0.29,"c3":0.629,"c4":0.38},{"time":0.1333,"angle":2.54,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.8333,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.6667,"angle":3,"curve":0.29,"c3":0.629,"c4":0.38},{"time":1.8,"angle":2.54,"curve":0.311,"c2":0.25,"c3":0.757},{"time":2.5,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":3.3333,"angle":3}]},"马尾5":{"rotate":[{"angle":2.4,"curve":0.314,"c2":0.27,"c3":0.652,"c4":0.61},{"time":0.1333,"angle":1.47,"curve":0.357,"c2":0.42,"c3":0.756},{"time":0.6667,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.5,"angle":3,"curve":0.284,"c3":0.625,"c4":0.38},{"time":1.6667,"angle":2.4,"curve":0.314,"c2":0.27,"c3":0.652,"c4":0.61},{"time":1.8,"angle":1.47,"curve":0.357,"c2":0.42,"c3":0.756},{"time":2.3333,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":3.1667,"angle":3,"curve":0.284,"c3":0.625,"c4":0.38},{"time":3.3333,"angle":2.4}]},"马尾4":{"rotate":[{"angle":1.06,"curve":0.333,"c2":0.33,"c3":0.67,"c4":0.68},{"time":0.1333,"angle":0.03,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.4667,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.3,"angle":3,"curve":0.255,"c3":0.62,"c4":0.47},{"time":1.6667,"angle":1.06,"curve":0.333,"c2":0.33,"c3":0.67,"c4":0.68},{"time":1.8,"angle":0.03,"curve":0.381,"c2":0.55,"c3":0.742},{"time":2.1333,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":2.9667,"angle":3,"curve":0.255,"c3":0.62,"c4":0.47},{"time":3.3333,"angle":1.06}]},"马尾3":{"rotate":[{"angle":-0.2,"curve":0.348,"c2":0.39,"c3":0.686,"c4":0.73},{"time":0.1333,"angle":-1.09,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.3,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":3,"curve":0.244,"c3":0.643,"c4":0.58},{"time":1.6667,"angle":-0.2,"curve":0.348,"c2":0.39,"c3":0.686,"c4":0.73},{"time":1.8,"angle":-1.09,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.9667,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":2.8,"angle":3,"curve":0.244,"c3":0.643,"c4":0.58},{"time":3.3333,"angle":-0.2}]},"马尾2":{"rotate":[{"angle":0.2,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":2.06,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.6667,"angle":0.2,"curve":0.371,"c2":0.62,"c3":0.71},{"time":1.8,"curve":0.25,"c3":0.75},{"time":2.6333,"angle":2.06,"curve":0.243,"c3":0.689,"c4":0.75},{"time":3.3333,"angle":0.2}]},"马尾1":{"rotate":[{"angle":-1.74,"curve":0.314,"c2":0.27,"c3":0.652,"c4":0.61},{"time":0.1333,"angle":-1.41,"curve":0.357,"c2":0.42,"c3":0.756},{"time":0.6667,"angle":-0.3,"curve":0.25,"c3":0.75},{"time":1.5,"angle":-1.95,"curve":0.284,"c3":0.625,"c4":0.38},{"time":1.6667,"angle":-1.74,"curve":0.314,"c2":0.27,"c3":0.652,"c4":0.61},{"time":1.8,"angle":-1.41,"curve":0.357,"c2":0.42,"c3":0.756},{"time":2.3333,"angle":-0.3,"curve":0.25,"c3":0.75},{"time":3.1667,"angle":-1.95,"curve":0.284,"c3":0.625,"c4":0.38},{"time":3.3333,"angle":-1.74}]},"头发3":{"rotate":[{"angle":-0.36,"curve":0.25,"c3":0.75},{"time":0.8333,"angle":1.36,"curve":0.25,"c3":0.75},{"time":1.6667,"angle":-0.36,"curve":0.25,"c3":0.75},{"time":2.5,"angle":1.36,"curve":0.25,"c3":0.75},{"time":3.3333,"angle":-0.36}]},"头发4":{"rotate":[{"angle":-0.14,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.1667,"angle":-0.36,"curve":0.25,"c3":0.75},{"time":1,"angle":1.36,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.6667,"angle":-0.14,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.8333,"angle":-0.36,"curve":0.25,"c3":0.75},{"time":2.6667,"angle":1.36,"curve":0.243,"c3":0.68,"c4":0.71},{"time":3.3333,"angle":-0.14}]},"头发5":{"rotate":[{"angle":0.27,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.3333,"angle":-0.36,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":1.36,"curve":0.245,"c3":0.637,"c4":0.56},{"time":1.6667,"angle":0.27,"curve":0.381,"c2":0.55,"c3":0.742},{"time":2,"angle":-0.36,"curve":0.25,"c3":0.75},{"time":2.8333,"angle":1.36,"curve":0.245,"c3":0.637,"c4":0.56},{"time":3.3333,"angle":0.27}]},"头发6":{"rotate":[{"angle":0.73,"curve":0.363,"c2":0.44,"c3":0.755},{"time":0.5,"angle":-0.36,"curve":0.25,"c3":0.75},{"time":1.3333,"angle":1.36,"curve":0.258,"c3":0.619,"c4":0.45},{"time":1.6667,"angle":0.73,"curve":0.363,"c2":0.44,"c3":0.755},{"time":2.1667,"angle":-0.36,"curve":0.25,"c3":0.75},{"time":3,"angle":1.36,"curve":0.258,"c3":0.619,"c4":0.45},{"time":3.3333,"angle":0.73}]},"头发20":{"rotate":[{"angle":1.06,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":3.74,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":1.06,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.9333,"curve":0.25,"c3":0.75},{"time":2.8,"angle":3.74,"curve":0.243,"c3":0.649,"c4":0.6},{"time":3.3333,"angle":1.06}]},"头发21":{"rotate":[{"angle":2.02,"curve":0.345,"c2":0.37,"c3":0.696,"c4":0.76},{"time":0.2667,"angle":0.49,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.4333,"curve":0.25,"c3":0.75},{"time":1.3,"angle":3.74,"curve":0.252,"c3":0.622,"c4":0.48},{"time":1.6667,"angle":2.02,"curve":0.345,"c2":0.37,"c3":0.696,"c4":0.76},{"time":1.9333,"angle":0.49,"curve":0.375,"c2":0.62,"c3":0.716},{"time":2.1,"curve":0.25,"c3":0.75},{"time":2.9667,"angle":3.74,"curve":0.252,"c3":0.622,"c4":0.48},{"time":3.3333,"angle":2.02}]},"头发22":{"rotate":[{"angle":3.12,"curve":0.31,"c2":0.26,"c3":0.66,"c4":0.65},{"time":0.2667,"angle":1.54,"curve":0.38,"c2":0.53,"c3":0.745},{"time":0.6333,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":3.74,"curve":0.278,"c3":0.622,"c4":0.39},{"time":1.6667,"angle":3.12,"curve":0.31,"c2":0.26,"c3":0.66,"c4":0.65},{"time":1.9333,"angle":1.54,"curve":0.38,"c2":0.53,"c3":0.745},{"time":2.3,"curve":0.25,"c3":0.75},{"time":3.1333,"angle":3.74,"curve":0.278,"c3":0.622,"c4":0.39},{"time":3.3333,"angle":3.12}]},"头发16":{"rotate":[{"angle":0.13,"curve":0.337,"c2":0.35,"c3":0.758},{"time":0.6,"angle":1.95,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":-0.33,"curve":0.273,"c3":0.62,"c4":0.41},{"time":1.6667,"angle":0.13,"curve":0.337,"c2":0.35,"c3":0.758},{"time":2.2667,"angle":1.95,"curve":0.25,"c3":0.75},{"time":3.1333,"angle":-0.33,"curve":0.273,"c3":0.62,"c4":0.41},{"time":3.3333,"angle":0.13}]},"头发17":{"rotate":[{"angle":-0.28,"curve":0.277,"c2":0.12,"c3":0.754},{"time":0.7667,"angle":1.95,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.4667,"angle":-0.03,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.6333,"angle":-0.33,"curve":0.313,"c3":0.648,"c4":0.35},{"time":1.6667,"angle":-0.28,"curve":0.277,"c2":0.12,"c3":0.754},{"time":2.4333,"angle":1.95,"curve":0.243,"c3":0.68,"c4":0.71},{"time":3.1333,"angle":-0.03,"curve":0.375,"c2":0.62,"c3":0.716},{"time":3.3,"angle":-0.33,"curve":0.313,"c3":0.648,"c4":0.35},{"time":3.3333,"angle":-0.28}]},"头发18":{"rotate":[{"angle":-0.18,"curve":0.366,"c2":0.63,"c3":0.703},{"time":0.1,"angle":-0.33,"curve":0.25,"c3":0.75},{"time":0.9333,"angle":1.95,"curve":0.245,"c3":0.637,"c4":0.56},{"time":1.4667,"angle":0.51,"curve":0.358,"c2":0.42,"c3":0.702,"c4":0.8},{"time":1.6667,"angle":-0.18,"curve":0.366,"c2":0.63,"c3":0.703},{"time":1.7667,"angle":-0.33,"curve":0.25,"c3":0.75},{"time":2.6,"angle":1.95,"curve":0.245,"c3":0.637,"c4":0.56},{"time":3.1333,"angle":0.51,"curve":0.358,"c2":0.42,"c3":0.702,"c4":0.8},{"time":3.3333,"angle":-0.18}]},"头发19":{"rotate":[{"angle":0.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"angle":-0.33,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":1.95,"curve":0.258,"c3":0.619,"c4":0.45},{"time":1.4667,"angle":1.11,"curve":0.332,"c2":0.33,"c3":0.676,"c4":0.7},{"time":1.6667,"angle":0.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":1.9333,"angle":-0.33,"curve":0.25,"c3":0.75},{"time":2.8,"angle":1.95,"curve":0.258,"c3":0.619,"c4":0.45},{"time":3.1333,"angle":1.11,"curve":0.332,"c2":0.33,"c3":0.676,"c4":0.7},{"time":3.3333,"angle":0.32}]},"头发":{"rotate":[{"angle":-0.75,"curve":0.38,"c2":0.53,"c3":0.745},{"time":0.3667,"angle":-1.95,"curve":0.25,"c3":0.75},{"time":1.2,"angle":0.95,"curve":0.246,"c3":0.633,"c4":0.54},{"time":1.6667,"angle":-0.75,"curve":0.38,"c2":0.53,"c3":0.745},{"time":2.0333,"angle":-1.95,"curve":0.25,"c3":0.75},{"time":2.8667,"angle":0.95,"curve":0.246,"c3":0.633,"c4":0.54},{"time":3.3333,"angle":-0.75}]},"头发7":{"rotate":[{"angle":0.01,"curve":0.357,"c2":0.42,"c3":0.756},{"time":0.5333,"angle":-1.95,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.2,"angle":0.57,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.3667,"angle":0.95,"curve":0.261,"c3":0.618,"c4":0.44},{"time":1.6667,"angle":0.01,"curve":0.357,"c2":0.42,"c3":0.756},{"time":2.2,"angle":-1.95,"curve":0.243,"c3":0.68,"c4":0.71},{"time":2.8667,"angle":0.57,"curve":0.375,"c2":0.62,"c3":0.716},{"time":3.0333,"angle":0.95,"curve":0.261,"c3":0.618,"c4":0.44},{"time":3.3333,"angle":0.01}]},"头发8":{"rotate":[{"angle":0.67,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.7,"angle":-1.95,"curve":0.245,"c3":0.637,"c4":0.56},{"time":1.2,"angle":-0.12,"curve":0.381,"c2":0.55,"c3":0.742},{"time":1.5333,"angle":0.95,"curve":0.29,"c3":0.629,"c4":0.38},{"time":1.6667,"angle":0.67,"curve":0.311,"c2":0.25,"c3":0.757},{"time":2.3667,"angle":-1.95,"curve":0.245,"c3":0.637,"c4":0.56},{"time":2.8667,"angle":-0.12,"curve":0.381,"c2":0.55,"c3":0.742},{"time":3.2,"angle":0.95,"curve":0.29,"c3":0.629,"c4":0.38},{"time":3.3333,"angle":0.67}]},"头发9":{"rotate":[{"angle":0.93,"curve":0.344,"c2":0.66,"c3":0.677},{"time":0.0333,"angle":0.95,"curve":0.25,"c3":0.75},{"time":0.8667,"angle":-1.95,"curve":0.258,"c3":0.619,"c4":0.45},{"time":1.2,"angle":-0.88,"curve":0.358,"c2":0.42,"c3":0.743,"c4":0.94},{"time":1.6667,"angle":0.93,"curve":0.344,"c2":0.66,"c3":0.677},{"time":1.7,"angle":0.95,"curve":0.25,"c3":0.75},{"time":2.5333,"angle":-1.95,"curve":0.258,"c3":0.619,"c4":0.45},{"time":2.8667,"angle":-0.88,"curve":0.358,"c2":0.42,"c3":0.743,"c4":0.94},{"time":3.3333,"angle":0.93}]},"头发1":{"rotate":[{"angle":-0.42,"curve":0.302,"c2":0.23,"c3":0.669,"c4":0.67},{"time":0.4,"angle":-2.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.6667,"angle":-3.23,"curve":0.25,"c3":0.75},{"time":1.5,"curve":0.284,"c3":0.625,"c4":0.38},{"time":1.6667,"angle":-0.42,"curve":0.302,"c2":0.23,"c3":0.669,"c4":0.67},{"time":2.0667,"angle":-2.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":2.3333,"angle":-3.23,"curve":0.25,"c3":0.75},{"time":3.1667,"curve":0.284,"c3":0.625,"c4":0.38},{"time":3.3333,"angle":-0.42}]},"头发10":{"rotate":[{"curve":0.252,"c3":0.622,"c4":0.48},{"time":0.4,"angle":-1.47,"curve":0.372,"c2":0.48,"c3":0.752},{"time":0.8333,"angle":-3.23,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.5,"angle":-0.42,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.6667,"curve":0.252,"c3":0.622,"c4":0.48},{"time":2.0667,"angle":-1.47,"curve":0.372,"c2":0.48,"c3":0.752},{"time":2.5,"angle":-3.23,"curve":0.243,"c3":0.68,"c4":0.71},{"time":3.1667,"angle":-0.42,"curve":0.375,"c2":0.62,"c3":0.716},{"time":3.3333}]},"头发11":{"rotate":[{"angle":-0.31,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"curve":0.269,"c3":0.618,"c4":0.42},{"time":0.4,"angle":-0.78,"curve":0.345,"c2":0.37,"c3":0.757},{"time":0.9667,"angle":-3.23,"curve":0.244,"c3":0.643,"c4":0.58},{"time":1.5,"angle":-1.05,"curve":0.353,"c2":0.4,"c3":0.692,"c4":0.76},{"time":1.6667,"angle":-0.31,"curve":0.371,"c2":0.62,"c3":0.71},{"time":1.8,"curve":0.269,"c3":0.618,"c4":0.42},{"time":2.0667,"angle":-0.78,"curve":0.345,"c2":0.37,"c3":0.757},{"time":2.6333,"angle":-3.23,"curve":0.244,"c3":0.643,"c4":0.58},{"time":3.1667,"angle":-1.05,"curve":0.353,"c2":0.4,"c3":0.692,"c4":0.76},{"time":3.3333,"angle":-0.31}]},"头发12":{"rotate":[{"angle":-1.05,"curve":0.382,"c2":0.56,"c3":0.739},{"time":0.3,"curve":0.305,"c3":0.64,"c4":0.36},{"time":0.4,"angle":-0.14,"curve":0.289,"c2":0.17,"c3":0.755},{"time":1.1333,"angle":-3.23,"curve":0.255,"c3":0.62,"c4":0.47},{"time":1.5,"angle":-1.9,"curve":0.333,"c2":0.33,"c3":0.673,"c4":0.68},{"time":1.6667,"angle":-1.05,"curve":0.382,"c2":0.56,"c3":0.739},{"time":1.9667,"curve":0.305,"c3":0.64,"c4":0.36},{"time":2.0667,"angle":-0.14,"curve":0.289,"c2":0.17,"c3":0.755},{"time":2.8,"angle":-3.23,"curve":0.255,"c3":0.62,"c4":0.47},{"time":3.1667,"angle":-1.9,"curve":0.333,"c2":0.33,"c3":0.673,"c4":0.68},{"time":3.3333,"angle":-1.05}]},"头发13":{"rotate":[{"angle":-2.63,"curve":0.361,"c2":0.43,"c3":0.729,"c4":0.89},{"time":0.4,"angle":-0.1,"curve":0.352,"c2":0.65,"c3":0.687},{"time":0.4333,"curve":0.25,"c3":0.75},{"time":1.3,"angle":-4.83,"curve":0.273,"c3":0.62,"c4":0.41},{"time":1.5,"angle":-3.85,"curve":0.318,"c2":0.28,"c3":0.658,"c4":0.64},{"time":1.6667,"angle":-2.63,"curve":0.361,"c2":0.43,"c3":0.729,"c4":0.89},{"time":2.0667,"angle":-0.1,"curve":0.352,"c2":0.65,"c3":0.687},{"time":2.1,"curve":0.25,"c3":0.75},{"time":2.9667,"angle":-4.83,"curve":0.273,"c3":0.62,"c4":0.41},{"time":3.1667,"angle":-3.85,"curve":0.318,"c2":0.28,"c3":0.658,"c4":0.64},{"time":3.3333,"angle":-2.63}]},"头发14":{"rotate":[{"angle":-3.68,"curve":0.324,"c2":0.3,"c3":0.69,"c4":0.74},{"time":0.4,"angle":-0.81,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.6,"curve":0.25,"c3":0.75},{"time":1.4333,"angle":-4.83,"curve":0.305,"c3":0.64,"c4":0.36},{"time":1.5,"angle":-4.63,"curve":0.299,"c2":0.19,"c3":0.64,"c4":0.55},{"time":1.6667,"angle":-3.68,"curve":0.324,"c2":0.3,"c3":0.69,"c4":0.74},{"time":2.0667,"angle":-0.81,"curve":0.378,"c2":0.61,"c3":0.722},{"time":2.2667,"curve":0.25,"c3":0.75},{"time":3.1,"angle":-4.83,"curve":0.305,"c3":0.64,"c4":0.36},{"time":3.1667,"angle":-4.63,"curve":0.299,"c2":0.19,"c3":0.64,"c4":0.55},{"time":3.3333,"angle":-3.68}]},"眼珠":{"translate":[{"time":0.6333,"curve":0.25,"c3":0.75},{"time":0.7,"x":-1.46,"y":-0.02,"curve":"stepped"},{"time":1.0333,"x":-1.46,"y":-0.02,"curve":0.25,"c3":0.75},{"time":1.0667,"x":0.57,"y":-0.01,"curve":0.25,"c3":0.75},{"time":2.4,"curve":0.25,"c3":0.75},{"time":2.4667,"x":-1.46,"y":-0.02,"curve":"stepped"},{"time":3.0667,"x":-1.46,"y":-0.02,"curve":0.25,"c3":0.75},{"time":3.1}]},"眼框":{"scale":[{"time":1.6333,"curve":0.25,"c3":0.75},{"time":1.7,"y":0.494,"curve":"stepped"},{"time":1.8,"y":0.494,"curve":0.25,"c3":0.75},{"time":1.8667,"y":1.085,"curve":0.25,"c3":0.75},{"time":1.9333}]},"眼睫毛":{"translate":[{"time":1.6333,"curve":0.25,"c3":0.75},{"time":1.7,"x":0.03,"y":-13.89,"curve":"stepped"},{"time":1.8,"x":0.03,"y":-13.89,"curve":0.25,"c3":0.75},{"time":1.8667,"x":-0.03,"y":2.1,"curve":0.25,"c3":0.75},{"time":1.9333}]},"root":{"translate":[{"x":80,"y":193}],"scale":[{"x":0.55,"y":0.55}]}}},"talk_in":{"slots":{"嘴开口":{"attachment":[{"name":"嘴严肃"}]}},"bones":{"身体":{"translate":[{"x":-1.64,"curve":0.25,"c3":0.75},{"time":0.8333,"x":4.48,"curve":0.25,"c3":0.75},{"time":1.6667,"x":-1.64}]},"身体2":{"rotate":[{"angle":-0.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"angle":-0.77,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":0.82,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":-0.32}]},"脸":{"rotate":[{"angle":0.37,"curve":0.325,"c2":0.31,"c3":0.675,"c4":0.69},{"time":0.2667,"angle":-0.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.5667,"angle":-0.77,"curve":0.25,"c3":0.75},{"time":1.4,"angle":0.82,"curve":0.265,"c3":0.618,"c4":0.43},{"time":1.6667,"angle":0.37}]},"身体9":{"rotate":[{"angle":0.06,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.4333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":1.43,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":0.06}]},"身体10":{"rotate":[{"angle":0.87,"curve":0.318,"c2":0.28,"c3":0.69,"c4":0.74},{"time":0.4333,"angle":-0.85,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.6,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":1.43,"curve":0.273,"c3":0.62,"c4":0.41},{"time":1.6667,"angle":0.87}]},"身体11":{"rotate":[{"angle":1.41,"curve":0.26,"c2":0.06,"c3":0.634,"c4":0.54},{"time":0.4333,"angle":-0.06,"curve":0.378,"c2":0.52,"c3":0.748},{"time":0.8,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.6333,"angle":1.43,"curve":0.323,"c3":0.656,"c4":0.34},{"time":1.6667,"angle":1.41}]},"身体6":{"rotate":[{"angle":-0.75,"curve":0.38,"c2":0.59,"c3":0.727},{"time":0.2333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.0667,"angle":1.43,"curve":0.242,"c3":0.663,"c4":0.65},{"time":1.6667,"angle":-0.75}]},"身体7":{"rotate":[{"angle":0.05,"curve":0.344,"c2":0.37,"c3":0.688,"c4":0.74},{"time":0.2333,"angle":-0.85,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.4333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":1.43,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":0.05}]},"身体8":{"rotate":[{"angle":0.98,"curve":0.312,"c2":0.26,"c3":0.656,"c4":0.63},{"time":0.2333,"angle":0.06,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.6333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":1.43,"curve":0.278,"c3":0.622,"c4":0.39},{"time":1.6667,"angle":0.98}]},"身体12":{"rotate":[{"angle":0.76,"curve":0.345,"c2":0.37,"c3":0.757},{"time":0.6,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.4333,"angle":1.43,"curve":0.269,"c3":0.618,"c4":0.42},{"time":1.6667,"angle":0.76}]},"身体13":{"rotate":[{"angle":1.37,"curve":0.267,"c2":0.1,"c3":0.678,"c4":0.71},{"time":0.6,"angle":-0.85,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.7667,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.6333,"angle":1.43,"curve":0.313,"c3":0.648,"c4":0.35},{"time":1.6667,"angle":1.37}]},"腰牌":{"rotate":[{"angle":-1.64,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":4.46,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":-1.64}]},"腰牌2":{"rotate":[{"angle":0.15,"curve":0.351,"c2":0.39,"c3":0.701,"c4":0.78},{"time":0.2667,"angle":-3.24,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.4333,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":4.46,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":0.15}]},"腰牌3":{"rotate":[{"angle":1.66,"curve":0.33,"c2":0.32,"c3":0.68,"c4":0.71},{"time":0.2667,"angle":-2,"curve":0.382,"c2":0.58,"c3":0.731},{"time":0.5333,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.3667,"angle":4.46,"curve":0.261,"c3":0.618,"c4":0.44},{"time":1.6667,"angle":1.66}]},"腰牌4":{"rotate":[{"angle":3.05,"curve":0.31,"c2":0.26,"c3":0.66,"c4":0.65},{"time":0.2667,"angle":-0.55,"curve":0.38,"c2":0.53,"c3":0.745},{"time":0.6333,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":4.46,"curve":0.278,"c3":0.622,"c4":0.39},{"time":1.6667,"angle":3.05}]},"腰牌5":{"rotate":[{"angle":4.11,"curve":0.287,"c2":0.16,"c3":0.638,"c4":0.56},{"time":0.2667,"angle":0.95,"curve":0.367,"c2":0.46,"c3":0.754},{"time":0.7667,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.6,"angle":4.46,"curve":0.305,"c3":0.64,"c4":0.36},{"time":1.6667,"angle":4.11}]},"飘带1":{"rotate":[{"angle":-1.3,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":4.44,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.6667,"angle":-1.3}]},"飘带2":{"rotate":[{"angle":-0.15,"curve":0.351,"c2":0.4,"c3":0.689,"c4":0.75},{"time":0.1333,"angle":-1.3,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.2667,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":4.44,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":-0.15}]},"飘带7":{"rotate":[{"angle":1.26,"curve":0.338,"c2":0.35,"c3":0.675,"c4":0.69},{"time":0.1333,"angle":-0.11,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.4333,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":4.44,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":1.26}]},"飘带8":{"rotate":[{"angle":2.65,"curve":0.325,"c2":0.31,"c3":0.663,"c4":0.65},{"time":0.1333,"angle":1.27,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.5667,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":1.4,"angle":4.44,"curve":0.265,"c3":0.618,"c4":0.43},{"time":1.6667,"angle":2.65}]},"飘带3":{"rotate":[{"angle":-1.82,"curve":0.25,"c3":0.75},{"time":0.8333,"angle":1.51,"curve":0.25,"c3":0.75},{"time":1.6667,"angle":-1.82}]},"飘带4":{"rotate":[{"angle":-1.5,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"angle":-1.82,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":1.51,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.6667,"angle":-1.5}]},"飘带5":{"rotate":[{"angle":-1.57,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"angle":-2.8,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":1.51,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":-1.57}]},"飘带6":{"rotate":[{"angle":-5,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.4333,"angle":-11.5,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":1.51,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":-5}]},"马尾7":{"rotate":[{"angle":-1.7,"curve":0.29,"c3":0.629,"c4":0.38},{"time":0.1333,"angle":-1.25,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.8333,"angle":3,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.5,"angle":-1.09,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.6667,"angle":-1.7}]},"马尾8":{"rotate":[{"angle":-1.26,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":3,"curve":0.244,"c3":0.643,"c4":0.58},{"time":1.5,"angle":-0.17,"curve":0.353,"c2":0.4,"c3":0.692,"c4":0.76},{"time":1.6667,"angle":-1.26}]},"马尾9":{"rotate":[{"angle":-0.19,"curve":0.348,"c2":0.39,"c3":0.686,"c4":0.73},{"time":0.1333,"angle":-1.1,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.3,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":3,"curve":0.255,"c3":0.62,"c4":0.47},{"time":1.5,"angle":1.06,"curve":0.333,"c2":0.33,"c3":0.673,"c4":0.68},{"time":1.6667,"angle":-0.19}]},"马尾10":{"rotate":[{"angle":-1.25,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":3,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.6667,"angle":-1.25}]},"马尾6":{"rotate":[{"angle":3,"curve":0.29,"c3":0.629,"c4":0.38},{"time":0.1333,"angle":2.54,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.8333,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.6667,"angle":3}]},"马尾5":{"rotate":[{"angle":2.4,"curve":0.314,"c2":0.27,"c3":0.652,"c4":0.61},{"time":0.1333,"angle":1.47,"curve":0.357,"c2":0.42,"c3":0.756},{"time":0.6667,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.5,"angle":3,"curve":0.284,"c3":0.625,"c4":0.38},{"time":1.6667,"angle":2.4}]},"马尾4":{"rotate":[{"angle":1.06,"curve":0.333,"c2":0.33,"c3":0.67,"c4":0.68},{"time":0.1333,"angle":0.03,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.4667,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.3,"angle":3,"curve":0.255,"c3":0.62,"c4":0.47},{"time":1.6667,"angle":1.06}]},"马尾3":{"rotate":[{"angle":-0.2,"curve":0.348,"c2":0.39,"c3":0.686,"c4":0.73},{"time":0.1333,"angle":-1.09,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.3,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":3,"curve":0.244,"c3":0.643,"c4":0.58},{"time":1.6667,"angle":-0.2}]},"马尾2":{"rotate":[{"angle":0.2,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":2.06,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.6667,"angle":0.2}]},"马尾1":{"rotate":[{"angle":-1.74,"curve":0.314,"c2":0.27,"c3":0.652,"c4":0.61},{"time":0.1333,"angle":-1.41,"curve":0.357,"c2":0.42,"c3":0.756},{"time":0.6667,"angle":-0.3,"curve":0.25,"c3":0.75},{"time":1.5,"angle":-1.95,"curve":0.284,"c3":0.625,"c4":0.38},{"time":1.6667,"angle":-1.74}]},"头发3":{"rotate":[{"angle":-0.36,"curve":0.25,"c3":0.75},{"time":0.8333,"angle":1.36,"curve":0.25,"c3":0.75},{"time":1.6667,"angle":-0.36}]},"头发4":{"rotate":[{"angle":-0.14,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.1667,"angle":-0.36,"curve":0.25,"c3":0.75},{"time":1,"angle":1.36,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.6667,"angle":-0.14}]},"头发5":{"rotate":[{"angle":0.27,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.3333,"angle":-0.36,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":1.36,"curve":0.245,"c3":0.637,"c4":0.56},{"time":1.6667,"angle":0.27}]},"头发6":{"rotate":[{"angle":0.73,"curve":0.363,"c2":0.44,"c3":0.755},{"time":0.5,"angle":-0.36,"curve":0.25,"c3":0.75},{"time":1.3333,"angle":1.36,"curve":0.258,"c3":0.619,"c4":0.45},{"time":1.6667,"angle":0.73}]},"头发20":{"rotate":[{"angle":1.06,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":3.74,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":1.06}]},"头发21":{"rotate":[{"angle":2.02,"curve":0.345,"c2":0.37,"c3":0.696,"c4":0.76},{"time":0.2667,"angle":0.49,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.4333,"curve":0.25,"c3":0.75},{"time":1.3,"angle":3.74,"curve":0.252,"c3":0.622,"c4":0.48},{"time":1.6667,"angle":2.02}]},"头发22":{"rotate":[{"angle":3.12,"curve":0.31,"c2":0.26,"c3":0.66,"c4":0.65},{"time":0.2667,"angle":1.54,"curve":0.38,"c2":0.53,"c3":0.745},{"time":0.6333,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":3.74,"curve":0.278,"c3":0.622,"c4":0.39},{"time":1.6667,"angle":3.12}]},"头发16":{"rotate":[{"angle":0.13,"curve":0.337,"c2":0.35,"c3":0.758},{"time":0.6,"angle":1.95,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":-0.33,"curve":0.273,"c3":0.62,"c4":0.41},{"time":1.6667,"angle":0.13}]},"头发17":{"rotate":[{"angle":-0.28,"curve":0.277,"c2":0.12,"c3":0.754},{"time":0.7667,"angle":1.95,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.4667,"angle":-0.03,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.6333,"angle":-0.33,"curve":0.313,"c3":0.648,"c4":0.35},{"time":1.6667,"angle":-0.28}]},"头发18":{"rotate":[{"angle":-0.18,"curve":0.366,"c2":0.63,"c3":0.703},{"time":0.1,"angle":-0.33,"curve":0.25,"c3":0.75},{"time":0.9333,"angle":1.95,"curve":0.245,"c3":0.637,"c4":0.56},{"time":1.4667,"angle":0.51,"curve":0.358,"c2":0.42,"c3":0.702,"c4":0.8},{"time":1.6667,"angle":-0.18}]},"头发19":{"rotate":[{"angle":0.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"angle":-0.33,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":1.95,"curve":0.258,"c3":0.619,"c4":0.45},{"time":1.4667,"angle":1.11,"curve":0.332,"c2":0.33,"c3":0.676,"c4":0.7},{"time":1.6667,"angle":0.32}]},"头发":{"rotate":[{"angle":-0.75,"curve":0.38,"c2":0.53,"c3":0.745},{"time":0.3667,"angle":-1.95,"curve":0.25,"c3":0.75},{"time":1.2,"angle":0.95,"curve":0.246,"c3":0.633,"c4":0.54},{"time":1.6667,"angle":-0.75}]},"头发7":{"rotate":[{"angle":0.01,"curve":0.357,"c2":0.42,"c3":0.756},{"time":0.5333,"angle":-1.95,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.2,"angle":0.57,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.3667,"angle":0.95,"curve":0.261,"c3":0.618,"c4":0.44},{"time":1.6667,"angle":0.01}]},"头发8":{"rotate":[{"angle":0.67,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.7,"angle":-1.95,"curve":0.245,"c3":0.637,"c4":0.56},{"time":1.2,"angle":-0.12,"curve":0.381,"c2":0.55,"c3":0.742},{"time":1.5333,"angle":0.95,"curve":0.29,"c3":0.629,"c4":0.38},{"time":1.6667,"angle":0.67}]},"头发9":{"rotate":[{"angle":0.93,"curve":0.344,"c2":0.66,"c3":0.677},{"time":0.0333,"angle":0.95,"curve":0.25,"c3":0.75},{"time":0.8667,"angle":-1.95,"curve":0.258,"c3":0.619,"c4":0.45},{"time":1.2,"angle":-0.88,"curve":0.358,"c2":0.42,"c3":0.743,"c4":0.94},{"time":1.6667,"angle":0.93}]},"头发1":{"rotate":[{"angle":-0.42,"curve":0.302,"c2":0.23,"c3":0.669,"c4":0.67},{"time":0.4,"angle":-2.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.6667,"angle":-3.23,"curve":0.25,"c3":0.75},{"time":1.5,"curve":0.284,"c3":0.625,"c4":0.38},{"time":1.6667,"angle":-0.42}]},"头发10":{"rotate":[{"curve":0.252,"c3":0.622,"c4":0.48},{"time":0.4,"angle":-1.47,"curve":0.372,"c2":0.48,"c3":0.752},{"time":0.8333,"angle":-3.23,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.5,"angle":-0.42,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.6667}]},"头发11":{"rotate":[{"angle":-0.31,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"curve":0.269,"c3":0.618,"c4":0.42},{"time":0.4,"angle":-0.78,"curve":0.345,"c2":0.37,"c3":0.757},{"time":0.9667,"angle":-3.23,"curve":0.244,"c3":0.643,"c4":0.58},{"time":1.5,"angle":-1.05,"curve":0.353,"c2":0.4,"c3":0.692,"c4":0.76},{"time":1.6667,"angle":-0.31}]},"头发12":{"rotate":[{"angle":-1.05,"curve":0.382,"c2":0.56,"c3":0.739},{"time":0.3,"curve":0.305,"c3":0.64,"c4":0.36},{"time":0.4,"angle":-0.14,"curve":0.289,"c2":0.17,"c3":0.755},{"time":1.1333,"angle":-3.23,"curve":0.255,"c3":0.62,"c4":0.47},{"time":1.5,"angle":-1.9,"curve":0.333,"c2":0.33,"c3":0.673,"c4":0.68},{"time":1.6667,"angle":-1.05}]},"头发13":{"rotate":[{"angle":-2.63,"curve":0.361,"c2":0.43,"c3":0.729,"c4":0.89},{"time":0.4,"angle":-0.1,"curve":0.352,"c2":0.65,"c3":0.687},{"time":0.4333,"curve":0.25,"c3":0.75},{"time":1.3,"angle":-4.83,"curve":0.273,"c3":0.62,"c4":0.41},{"time":1.5,"angle":-3.85,"curve":0.318,"c2":0.28,"c3":0.658,"c4":0.64},{"time":1.6667,"angle":-2.63}]},"头发14":{"rotate":[{"angle":-3.68,"curve":0.324,"c2":0.3,"c3":0.69,"c4":0.74},{"time":0.4,"angle":-0.81,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.6,"curve":0.25,"c3":0.75},{"time":1.4333,"angle":-4.83,"curve":0.305,"c3":0.64,"c4":0.36},{"time":1.5,"angle":-4.63,"curve":0.299,"c2":0.19,"c3":0.64,"c4":0.55},{"time":1.6667,"angle":-3.68}]},"眼珠":{"translate":[{"time":0.6333,"curve":0.25,"c3":0.75},{"time":0.7,"x":-1.46,"y":-0.02,"curve":"stepped"},{"time":1.0333,"x":-1.46,"y":-0.02,"curve":0.25,"c3":0.75},{"time":1.0667,"x":0.57,"y":-0.01}]},"root":{"translate":[{"x":444.8,"y":507.72,"curve":0.25,"c3":0.75},{"time":0.3333,"x":-127.84,"y":507.72,"curve":0.25,"c3":0.75},{"time":0.6667,"x":-93.2,"y":507.72,"curve":0.25,"c3":0.75},{"time":1.0667,"x":-97.82,"y":507.72}]},"眉毛":{"rotate":[{"angle":-13.03}],"translate":[{"x":-0.01,"y":-8.72}]},"眼睫毛":{"translate":[{"x":-0.01,"y":-9.08}]},"body":{"rotate":[{"angle":-10.91,"curve":"stepped"},{"time":0.1,"angle":-10.91,"curve":0.25,"c3":0.75},{"time":0.4333,"angle":2.19,"curve":0.25,"c3":0.75},{"time":0.8,"angle":-0.93,"curve":0.25,"c3":0.75},{"time":1.2333}]}}},"talk_off":{"slots":{"嘴开口":{"attachment":[{"name":"嘴严肃"}]}},"bones":{"身体":{"translate":[{"x":-1.64,"curve":0.25,"c3":0.75},{"time":0.8333,"x":4.48,"curve":0.25,"c3":0.75},{"time":1.6667,"x":-1.64}]},"身体2":{"rotate":[{"angle":-0.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"angle":-0.77,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":0.82,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":-0.32}]},"脸":{"rotate":[{"angle":0.37,"curve":0.325,"c2":0.31,"c3":0.675,"c4":0.69},{"time":0.2667,"angle":-0.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.5667,"angle":-0.77,"curve":0.25,"c3":0.75},{"time":1.4,"angle":0.82,"curve":0.265,"c3":0.618,"c4":0.43},{"time":1.6667,"angle":0.37}]},"身体9":{"rotate":[{"angle":0.06,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.4333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":1.43,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":0.06}]},"身体10":{"rotate":[{"angle":0.87,"curve":0.318,"c2":0.28,"c3":0.69,"c4":0.74},{"time":0.4333,"angle":-0.85,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.6,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":1.43,"curve":0.273,"c3":0.62,"c4":0.41},{"time":1.6667,"angle":0.87}]},"身体11":{"rotate":[{"angle":1.41,"curve":0.26,"c2":0.06,"c3":0.634,"c4":0.54},{"time":0.4333,"angle":-0.06,"curve":0.378,"c2":0.52,"c3":0.748},{"time":0.8,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.6333,"angle":1.43,"curve":0.323,"c3":0.656,"c4":0.34},{"time":1.6667,"angle":1.41}]},"身体6":{"rotate":[{"angle":-0.75,"curve":0.38,"c2":0.59,"c3":0.727},{"time":0.2333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.0667,"angle":1.43,"curve":0.242,"c3":0.663,"c4":0.65},{"time":1.6667,"angle":-0.75}]},"身体7":{"rotate":[{"angle":0.05,"curve":0.344,"c2":0.37,"c3":0.688,"c4":0.74},{"time":0.2333,"angle":-0.85,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.4333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":1.43,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":0.05}]},"身体8":{"rotate":[{"angle":0.98,"curve":0.312,"c2":0.26,"c3":0.656,"c4":0.63},{"time":0.2333,"angle":0.06,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.6333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":1.43,"curve":0.278,"c3":0.622,"c4":0.39},{"time":1.6667,"angle":0.98}]},"身体12":{"rotate":[{"angle":0.76,"curve":0.345,"c2":0.37,"c3":0.757},{"time":0.6,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.4333,"angle":1.43,"curve":0.269,"c3":0.618,"c4":0.42},{"time":1.6667,"angle":0.76}]},"身体13":{"rotate":[{"angle":1.37,"curve":0.267,"c2":0.1,"c3":0.678,"c4":0.71},{"time":0.6,"angle":-0.85,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.7667,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.6333,"angle":1.43,"curve":0.313,"c3":0.648,"c4":0.35},{"time":1.6667,"angle":1.37}]},"腰牌":{"rotate":[{"angle":-1.64,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":4.46,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":-1.64}]},"腰牌2":{"rotate":[{"angle":0.15,"curve":0.351,"c2":0.39,"c3":0.701,"c4":0.78},{"time":0.2667,"angle":-3.24,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.4333,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":4.46,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":0.15}]},"腰牌3":{"rotate":[{"angle":1.66,"curve":0.33,"c2":0.32,"c3":0.68,"c4":0.71},{"time":0.2667,"angle":-2,"curve":0.382,"c2":0.58,"c3":0.731},{"time":0.5333,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.3667,"angle":4.46,"curve":0.261,"c3":0.618,"c4":0.44},{"time":1.6667,"angle":1.66}]},"腰牌4":{"rotate":[{"angle":3.05,"curve":0.31,"c2":0.26,"c3":0.66,"c4":0.65},{"time":0.2667,"angle":-0.55,"curve":0.38,"c2":0.53,"c3":0.745},{"time":0.6333,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":4.46,"curve":0.278,"c3":0.622,"c4":0.39},{"time":1.6667,"angle":3.05}]},"腰牌5":{"rotate":[{"angle":4.11,"curve":0.287,"c2":0.16,"c3":0.638,"c4":0.56},{"time":0.2667,"angle":0.95,"curve":0.367,"c2":0.46,"c3":0.754},{"time":0.7667,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.6,"angle":4.46,"curve":0.305,"c3":0.64,"c4":0.36},{"time":1.6667,"angle":4.11}]},"飘带1":{"rotate":[{"angle":-1.3,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":4.44,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.6667,"angle":-1.3}]},"飘带2":{"rotate":[{"angle":-0.15,"curve":0.351,"c2":0.4,"c3":0.689,"c4":0.75},{"time":0.1333,"angle":-1.3,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.2667,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":4.44,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":-0.15}]},"飘带7":{"rotate":[{"angle":1.26,"curve":0.338,"c2":0.35,"c3":0.675,"c4":0.69},{"time":0.1333,"angle":-0.11,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.4333,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":4.44,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":1.26}]},"飘带8":{"rotate":[{"angle":2.65,"curve":0.325,"c2":0.31,"c3":0.663,"c4":0.65},{"time":0.1333,"angle":1.27,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.5667,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":1.4,"angle":4.44,"curve":0.265,"c3":0.618,"c4":0.43},{"time":1.6667,"angle":2.65}]},"飘带3":{"rotate":[{"angle":-1.82,"curve":0.25,"c3":0.75},{"time":0.8333,"angle":1.51,"curve":0.25,"c3":0.75},{"time":1.6667,"angle":-1.82}]},"飘带4":{"rotate":[{"angle":-1.5,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"angle":-1.82,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":1.51,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.6667,"angle":-1.5}]},"飘带5":{"rotate":[{"angle":-1.57,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"angle":-2.8,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":1.51,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":-1.57}]},"飘带6":{"rotate":[{"angle":-5,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.4333,"angle":-11.5,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":1.51,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":-5}]},"马尾7":{"rotate":[{"angle":-1.7,"curve":0.29,"c3":0.629,"c4":0.38},{"time":0.1333,"angle":-1.25,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.8333,"angle":3,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.5,"angle":-1.09,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.6667,"angle":-1.7}]},"马尾8":{"rotate":[{"angle":-1.26,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":3,"curve":0.244,"c3":0.643,"c4":0.58},{"time":1.5,"angle":-0.17,"curve":0.353,"c2":0.4,"c3":0.692,"c4":0.76},{"time":1.6667,"angle":-1.26}]},"马尾9":{"rotate":[{"angle":-0.19,"curve":0.348,"c2":0.39,"c3":0.686,"c4":0.73},{"time":0.1333,"angle":-1.1,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.3,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":3,"curve":0.255,"c3":0.62,"c4":0.47},{"time":1.5,"angle":1.06,"curve":0.333,"c2":0.33,"c3":0.673,"c4":0.68},{"time":1.6667,"angle":-0.19}]},"马尾10":{"rotate":[{"angle":-1.25,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":3,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.6667,"angle":-1.25}]},"马尾6":{"rotate":[{"angle":3,"curve":0.29,"c3":0.629,"c4":0.38},{"time":0.1333,"angle":2.54,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.8333,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.6667,"angle":3}]},"马尾5":{"rotate":[{"angle":2.4,"curve":0.314,"c2":0.27,"c3":0.652,"c4":0.61},{"time":0.1333,"angle":1.47,"curve":0.357,"c2":0.42,"c3":0.756},{"time":0.6667,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.5,"angle":3,"curve":0.284,"c3":0.625,"c4":0.38},{"time":1.6667,"angle":2.4}]},"马尾4":{"rotate":[{"angle":1.06,"curve":0.333,"c2":0.33,"c3":0.67,"c4":0.68},{"time":0.1333,"angle":0.03,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.4667,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.3,"angle":3,"curve":0.255,"c3":0.62,"c4":0.47},{"time":1.6667,"angle":1.06}]},"马尾3":{"rotate":[{"angle":-0.2,"curve":0.348,"c2":0.39,"c3":0.686,"c4":0.73},{"time":0.1333,"angle":-1.09,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.3,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":3,"curve":0.244,"c3":0.643,"c4":0.58},{"time":1.6667,"angle":-0.2}]},"马尾2":{"rotate":[{"angle":0.2,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":2.06,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.6667,"angle":0.2}]},"马尾1":{"rotate":[{"angle":-1.74,"curve":0.314,"c2":0.27,"c3":0.652,"c4":0.61},{"time":0.1333,"angle":-1.41,"curve":0.357,"c2":0.42,"c3":0.756},{"time":0.6667,"angle":-0.3,"curve":0.25,"c3":0.75},{"time":1.5,"angle":-1.95,"curve":0.284,"c3":0.625,"c4":0.38},{"time":1.6667,"angle":-1.74}]},"头发3":{"rotate":[{"angle":-0.36,"curve":0.25,"c3":0.75},{"time":0.8333,"angle":1.36,"curve":0.25,"c3":0.75},{"time":1.6667,"angle":-0.36}]},"头发4":{"rotate":[{"angle":-0.14,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.1667,"angle":-0.36,"curve":0.25,"c3":0.75},{"time":1,"angle":1.36,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.6667,"angle":-0.14}]},"头发5":{"rotate":[{"angle":0.27,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.3333,"angle":-0.36,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":1.36,"curve":0.245,"c3":0.637,"c4":0.56},{"time":1.6667,"angle":0.27}]},"头发6":{"rotate":[{"angle":0.73,"curve":0.363,"c2":0.44,"c3":0.755},{"time":0.5,"angle":-0.36,"curve":0.25,"c3":0.75},{"time":1.3333,"angle":1.36,"curve":0.258,"c3":0.619,"c4":0.45},{"time":1.6667,"angle":0.73}]},"头发20":{"rotate":[{"angle":1.06,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":3.74,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":1.06}]},"头发21":{"rotate":[{"angle":2.02,"curve":0.345,"c2":0.37,"c3":0.696,"c4":0.76},{"time":0.2667,"angle":0.49,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.4333,"curve":0.25,"c3":0.75},{"time":1.3,"angle":3.74,"curve":0.252,"c3":0.622,"c4":0.48},{"time":1.6667,"angle":2.02}]},"头发22":{"rotate":[{"angle":3.12,"curve":0.31,"c2":0.26,"c3":0.66,"c4":0.65},{"time":0.2667,"angle":1.54,"curve":0.38,"c2":0.53,"c3":0.745},{"time":0.6333,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":3.74,"curve":0.278,"c3":0.622,"c4":0.39},{"time":1.6667,"angle":3.12}]},"头发16":{"rotate":[{"angle":0.13,"curve":0.337,"c2":0.35,"c3":0.758},{"time":0.6,"angle":1.95,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":-0.33,"curve":0.273,"c3":0.62,"c4":0.41},{"time":1.6667,"angle":0.13}]},"头发17":{"rotate":[{"angle":-0.28,"curve":0.277,"c2":0.12,"c3":0.754},{"time":0.7667,"angle":1.95,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.4667,"angle":-0.03,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.6333,"angle":-0.33,"curve":0.313,"c3":0.648,"c4":0.35},{"time":1.6667,"angle":-0.28}]},"头发18":{"rotate":[{"angle":-0.18,"curve":0.366,"c2":0.63,"c3":0.703},{"time":0.1,"angle":-0.33,"curve":0.25,"c3":0.75},{"time":0.9333,"angle":1.95,"curve":0.245,"c3":0.637,"c4":0.56},{"time":1.4667,"angle":0.51,"curve":0.358,"c2":0.42,"c3":0.702,"c4":0.8},{"time":1.6667,"angle":-0.18}]},"头发19":{"rotate":[{"angle":0.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"angle":-0.33,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":1.95,"curve":0.258,"c3":0.619,"c4":0.45},{"time":1.4667,"angle":1.11,"curve":0.332,"c2":0.33,"c3":0.676,"c4":0.7},{"time":1.6667,"angle":0.32}]},"头发":{"rotate":[{"angle":-0.75,"curve":0.38,"c2":0.53,"c3":0.745},{"time":0.3667,"angle":-1.95,"curve":0.25,"c3":0.75},{"time":1.2,"angle":0.95,"curve":0.246,"c3":0.633,"c4":0.54},{"time":1.6667,"angle":-0.75}]},"头发7":{"rotate":[{"angle":0.01,"curve":0.357,"c2":0.42,"c3":0.756},{"time":0.5333,"angle":-1.95,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.2,"angle":0.57,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.3667,"angle":0.95,"curve":0.261,"c3":0.618,"c4":0.44},{"time":1.6667,"angle":0.01}]},"头发8":{"rotate":[{"angle":0.67,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.7,"angle":-1.95,"curve":0.245,"c3":0.637,"c4":0.56},{"time":1.2,"angle":-0.12,"curve":0.381,"c2":0.55,"c3":0.742},{"time":1.5333,"angle":0.95,"curve":0.29,"c3":0.629,"c4":0.38},{"time":1.6667,"angle":0.67}]},"头发9":{"rotate":[{"angle":0.93,"curve":0.344,"c2":0.66,"c3":0.677},{"time":0.0333,"angle":0.95,"curve":0.25,"c3":0.75},{"time":0.8667,"angle":-1.95,"curve":0.258,"c3":0.619,"c4":0.45},{"time":1.2,"angle":-0.88,"curve":0.358,"c2":0.42,"c3":0.743,"c4":0.94},{"time":1.6667,"angle":0.93}]},"头发1":{"rotate":[{"angle":-0.42,"curve":0.302,"c2":0.23,"c3":0.669,"c4":0.67},{"time":0.4,"angle":-2.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.6667,"angle":-3.23,"curve":0.25,"c3":0.75},{"time":1.5,"curve":0.284,"c3":0.625,"c4":0.38},{"time":1.6667,"angle":-0.42}]},"头发10":{"rotate":[{"curve":0.252,"c3":0.622,"c4":0.48},{"time":0.4,"angle":-1.47,"curve":0.372,"c2":0.48,"c3":0.752},{"time":0.8333,"angle":-3.23,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.5,"angle":-0.42,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.6667}]},"头发11":{"rotate":[{"angle":-0.31,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"curve":0.269,"c3":0.618,"c4":0.42},{"time":0.4,"angle":-0.78,"curve":0.345,"c2":0.37,"c3":0.757},{"time":0.9667,"angle":-3.23,"curve":0.244,"c3":0.643,"c4":0.58},{"time":1.5,"angle":-1.05,"curve":0.353,"c2":0.4,"c3":0.692,"c4":0.76},{"time":1.6667,"angle":-0.31}]},"头发12":{"rotate":[{"angle":-1.05,"curve":0.382,"c2":0.56,"c3":0.739},{"time":0.3,"curve":0.305,"c3":0.64,"c4":0.36},{"time":0.4,"angle":-0.14,"curve":0.289,"c2":0.17,"c3":0.755},{"time":1.1333,"angle":-3.23,"curve":0.255,"c3":0.62,"c4":0.47},{"time":1.5,"angle":-1.9,"curve":0.333,"c2":0.33,"c3":0.673,"c4":0.68},{"time":1.6667,"angle":-1.05}]},"头发13":{"rotate":[{"angle":-2.63,"curve":0.361,"c2":0.43,"c3":0.729,"c4":0.89},{"time":0.4,"angle":-0.1,"curve":0.352,"c2":0.65,"c3":0.687},{"time":0.4333,"curve":0.25,"c3":0.75},{"time":1.3,"angle":-4.83,"curve":0.273,"c3":0.62,"c4":0.41},{"time":1.5,"angle":-3.85,"curve":0.318,"c2":0.28,"c3":0.658,"c4":0.64},{"time":1.6667,"angle":-2.63}]},"头发14":{"rotate":[{"angle":-3.68,"curve":0.324,"c2":0.3,"c3":0.69,"c4":0.74},{"time":0.4,"angle":-0.81,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.6,"curve":0.25,"c3":0.75},{"time":1.4333,"angle":-4.83,"curve":0.305,"c3":0.64,"c4":0.36},{"time":1.5,"angle":-4.63,"curve":0.299,"c2":0.19,"c3":0.64,"c4":0.55},{"time":1.6667,"angle":-3.68}]},"眼珠":{"translate":[{"time":0.6333,"curve":0.25,"c3":0.75},{"time":0.7,"x":-1.46,"y":-0.02,"curve":"stepped"},{"time":1.0333,"x":-1.46,"y":-0.02,"curve":0.25,"c3":0.75},{"time":1.0667,"x":0.57,"y":-0.01}]},"root":{"translate":[{"x":-97.82,"y":507.72}]},"眉毛":{"rotate":[{"angle":-13.03}],"translate":[{"x":-0.01,"y":-8.72}]},"眼睫毛":{"translate":[{"x":-0.01,"y":-9.08}]}}},"talk_on":{"slots":{"嘴开口":{"attachment":[{"name":"嘴严肃"},{"time":0.1333,"name":"嘴开口"},{"time":0.2,"name":"嘴_呆"},{"time":0.3333,"name":"嘴严肃"},{"time":0.5,"name":"嘴开口"},{"time":0.5667,"name":"嘴_呆"},{"time":0.7333,"name":"嘴严肃"},{"time":0.8667,"name":"嘴开口"},{"time":1,"name":"嘴_呆"},{"time":1.1,"name":"嘴严肃"},{"time":1.2667,"name":"嘴开口"},{"time":1.4,"name":"嘴_呆"},{"time":1.5333,"name":"嘴严肃"}]}},"bones":{"身体":{"translate":[{"x":-1.64,"curve":0.25,"c3":0.75},{"time":0.8333,"x":4.48,"curve":0.25,"c3":0.75},{"time":1.6667,"x":-1.64}]},"身体2":{"rotate":[{"angle":-0.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"angle":-0.77,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":0.82,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":-0.32}]},"身体9":{"rotate":[{"angle":0.06,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.4333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":1.43,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":0.06}]},"身体10":{"rotate":[{"angle":0.87,"curve":0.318,"c2":0.28,"c3":0.69,"c4":0.74},{"time":0.4333,"angle":-0.85,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.6,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":1.43,"curve":0.273,"c3":0.62,"c4":0.41},{"time":1.6667,"angle":0.87}]},"身体11":{"rotate":[{"angle":1.41,"curve":0.26,"c2":0.06,"c3":0.634,"c4":0.54},{"time":0.4333,"angle":-0.06,"curve":0.378,"c2":0.52,"c3":0.748},{"time":0.8,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.6333,"angle":1.43,"curve":0.323,"c3":0.656,"c4":0.34},{"time":1.6667,"angle":1.41}]},"身体6":{"rotate":[{"angle":-0.75,"curve":0.38,"c2":0.59,"c3":0.727},{"time":0.2333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.0667,"angle":1.43,"curve":0.242,"c3":0.663,"c4":0.65},{"time":1.6667,"angle":-0.75}]},"身体7":{"rotate":[{"angle":0.05,"curve":0.344,"c2":0.37,"c3":0.688,"c4":0.74},{"time":0.2333,"angle":-0.85,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.4333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":1.43,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":0.05}]},"身体8":{"rotate":[{"angle":0.98,"curve":0.312,"c2":0.26,"c3":0.656,"c4":0.63},{"time":0.2333,"angle":0.06,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.6333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":1.43,"curve":0.278,"c3":0.622,"c4":0.39},{"time":1.6667,"angle":0.98}]},"身体12":{"rotate":[{"angle":0.76,"curve":0.345,"c2":0.37,"c3":0.757},{"time":0.6,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.4333,"angle":1.43,"curve":0.269,"c3":0.618,"c4":0.42},{"time":1.6667,"angle":0.76}]},"身体13":{"rotate":[{"angle":1.37,"curve":0.267,"c2":0.1,"c3":0.678,"c4":0.71},{"time":0.6,"angle":-0.85,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.7667,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.6333,"angle":1.43,"curve":0.313,"c3":0.648,"c4":0.35},{"time":1.6667,"angle":1.37}]},"腰牌":{"rotate":[{"angle":-1.64,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":4.46,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":-1.64}]},"腰牌2":{"rotate":[{"angle":0.15,"curve":0.351,"c2":0.39,"c3":0.701,"c4":0.78},{"time":0.2667,"angle":-3.24,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.4333,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":4.46,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":0.15}]},"腰牌3":{"rotate":[{"angle":1.66,"curve":0.33,"c2":0.32,"c3":0.68,"c4":0.71},{"time":0.2667,"angle":-2,"curve":0.382,"c2":0.58,"c3":0.731},{"time":0.5333,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.3667,"angle":4.46,"curve":0.261,"c3":0.618,"c4":0.44},{"time":1.6667,"angle":1.66}]},"腰牌4":{"rotate":[{"angle":3.05,"curve":0.31,"c2":0.26,"c3":0.66,"c4":0.65},{"time":0.2667,"angle":-0.55,"curve":0.38,"c2":0.53,"c3":0.745},{"time":0.6333,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":4.46,"curve":0.278,"c3":0.622,"c4":0.39},{"time":1.6667,"angle":3.05}]},"腰牌5":{"rotate":[{"angle":4.11,"curve":0.287,"c2":0.16,"c3":0.638,"c4":0.56},{"time":0.2667,"angle":0.95,"curve":0.367,"c2":0.46,"c3":0.754},{"time":0.7667,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.6,"angle":4.46,"curve":0.305,"c3":0.64,"c4":0.36},{"time":1.6667,"angle":4.11}]},"飘带1":{"rotate":[{"angle":-1.3,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":4.44,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.6667,"angle":-1.3}]},"飘带2":{"rotate":[{"angle":-0.15,"curve":0.351,"c2":0.4,"c3":0.689,"c4":0.75},{"time":0.1333,"angle":-1.3,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.2667,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":4.44,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":-0.15}]},"飘带7":{"rotate":[{"angle":1.26,"curve":0.338,"c2":0.35,"c3":0.675,"c4":0.69},{"time":0.1333,"angle":-0.11,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.4333,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":4.44,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":1.26}]},"飘带8":{"rotate":[{"angle":2.65,"curve":0.325,"c2":0.31,"c3":0.663,"c4":0.65},{"time":0.1333,"angle":1.27,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.5667,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":1.4,"angle":4.44,"curve":0.265,"c3":0.618,"c4":0.43},{"time":1.6667,"angle":2.65}]},"飘带3":{"rotate":[{"angle":-1.82,"curve":0.25,"c3":0.75},{"time":0.8333,"angle":1.51,"curve":0.25,"c3":0.75},{"time":1.6667,"angle":-1.82}]},"飘带4":{"rotate":[{"angle":-1.5,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"angle":-1.82,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":1.51,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.6667,"angle":-1.5}]},"飘带5":{"rotate":[{"angle":-1.57,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"angle":-2.8,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":1.51,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":-1.57}]},"飘带6":{"rotate":[{"angle":-5,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.4333,"angle":-11.5,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":1.51,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":-5}]},"马尾7":{"rotate":[{"angle":-1.7,"curve":0.29,"c3":0.629,"c4":0.38},{"time":0.1333,"angle":-1.25,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.8333,"angle":3,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.5,"angle":-1.09,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.6667,"angle":-1.7}]},"马尾8":{"rotate":[{"angle":-1.26,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":3,"curve":0.244,"c3":0.643,"c4":0.58},{"time":1.5,"angle":-0.17,"curve":0.353,"c2":0.4,"c3":0.692,"c4":0.76},{"time":1.6667,"angle":-1.26}]},"马尾9":{"rotate":[{"angle":-0.19,"curve":0.348,"c2":0.39,"c3":0.686,"c4":0.73},{"time":0.1333,"angle":-1.1,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.3,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":3,"curve":0.255,"c3":0.62,"c4":0.47},{"time":1.5,"angle":1.06,"curve":0.333,"c2":0.33,"c3":0.673,"c4":0.68},{"time":1.6667,"angle":-0.19}]},"马尾10":{"rotate":[{"angle":-1.25,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":3,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.6667,"angle":-1.25}]},"马尾6":{"rotate":[{"angle":3,"curve":0.29,"c3":0.629,"c4":0.38},{"time":0.1333,"angle":2.54,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.8333,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.6667,"angle":3}]},"马尾5":{"rotate":[{"angle":2.4,"curve":0.314,"c2":0.27,"c3":0.652,"c4":0.61},{"time":0.1333,"angle":1.47,"curve":0.357,"c2":0.42,"c3":0.756},{"time":0.6667,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.5,"angle":3,"curve":0.284,"c3":0.625,"c4":0.38},{"time":1.6667,"angle":2.4}]},"马尾4":{"rotate":[{"angle":1.06,"curve":0.333,"c2":0.33,"c3":0.67,"c4":0.68},{"time":0.1333,"angle":0.03,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.4667,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.3,"angle":3,"curve":0.255,"c3":0.62,"c4":0.47},{"time":1.6667,"angle":1.06}]},"马尾3":{"rotate":[{"angle":-0.2,"curve":0.348,"c2":0.39,"c3":0.686,"c4":0.73},{"time":0.1333,"angle":-1.09,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.3,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":3,"curve":0.244,"c3":0.643,"c4":0.58},{"time":1.6667,"angle":-0.2}]},"马尾2":{"rotate":[{"angle":0.2,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":2.06,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.6667,"angle":0.2}]},"马尾1":{"rotate":[{"angle":-1.74,"curve":0.314,"c2":0.27,"c3":0.652,"c4":0.61},{"time":0.1333,"angle":-1.41,"curve":0.357,"c2":0.42,"c3":0.756},{"time":0.6667,"angle":-0.3,"curve":0.25,"c3":0.75},{"time":1.5,"angle":-1.95,"curve":0.284,"c3":0.625,"c4":0.38},{"time":1.6667,"angle":-1.74}]},"头发3":{"rotate":[{"angle":-0.36,"curve":0.25,"c3":0.75},{"time":0.8333,"angle":1.36,"curve":0.25,"c3":0.75},{"time":1.6667,"angle":-0.36}]},"头发4":{"rotate":[{"angle":-0.14,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.1667,"angle":-0.36,"curve":0.25,"c3":0.75},{"time":1,"angle":1.36,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.6667,"angle":-0.14}]},"头发5":{"rotate":[{"angle":0.27,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.3333,"angle":-0.36,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":1.36,"curve":0.245,"c3":0.637,"c4":0.56},{"time":1.6667,"angle":0.27}]},"头发6":{"rotate":[{"angle":0.73,"curve":0.363,"c2":0.44,"c3":0.755},{"time":0.5,"angle":-0.36,"curve":0.25,"c3":0.75},{"time":1.3333,"angle":1.36,"curve":0.258,"c3":0.619,"c4":0.45},{"time":1.6667,"angle":0.73}]},"头发20":{"rotate":[{"angle":1.06,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":3.74,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":1.06}]},"头发21":{"rotate":[{"angle":2.02,"curve":0.345,"c2":0.37,"c3":0.696,"c4":0.76},{"time":0.2667,"angle":0.49,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.4333,"curve":0.25,"c3":0.75},{"time":1.3,"angle":3.74,"curve":0.252,"c3":0.622,"c4":0.48},{"time":1.6667,"angle":2.02}]},"头发22":{"rotate":[{"angle":3.12,"curve":0.31,"c2":0.26,"c3":0.66,"c4":0.65},{"time":0.2667,"angle":1.54,"curve":0.38,"c2":0.53,"c3":0.745},{"time":0.6333,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":3.74,"curve":0.278,"c3":0.622,"c4":0.39},{"time":1.6667,"angle":3.12}]},"头发16":{"rotate":[{"angle":0.13,"curve":0.337,"c2":0.35,"c3":0.758},{"time":0.6,"angle":1.95,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":-0.33,"curve":0.273,"c3":0.62,"c4":0.41},{"time":1.6667,"angle":0.13}]},"头发17":{"rotate":[{"angle":-0.28,"curve":0.277,"c2":0.12,"c3":0.754},{"time":0.7667,"angle":1.95,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.4667,"angle":-0.03,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.6333,"angle":-0.33,"curve":0.313,"c3":0.648,"c4":0.35},{"time":1.6667,"angle":-0.28}]},"头发18":{"rotate":[{"angle":-0.18,"curve":0.366,"c2":0.63,"c3":0.703},{"time":0.1,"angle":-0.33,"curve":0.25,"c3":0.75},{"time":0.9333,"angle":1.95,"curve":0.245,"c3":0.637,"c4":0.56},{"time":1.4667,"angle":0.51,"curve":0.358,"c2":0.42,"c3":0.702,"c4":0.8},{"time":1.6667,"angle":-0.18}]},"头发19":{"rotate":[{"angle":0.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"angle":-0.33,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":1.95,"curve":0.258,"c3":0.619,"c4":0.45},{"time":1.4667,"angle":1.11,"curve":0.332,"c2":0.33,"c3":0.676,"c4":0.7},{"time":1.6667,"angle":0.32}]},"头发":{"rotate":[{"angle":-0.75,"curve":0.38,"c2":0.53,"c3":0.745},{"time":0.3667,"angle":-1.95,"curve":0.25,"c3":0.75},{"time":1.2,"angle":0.95,"curve":0.246,"c3":0.633,"c4":0.54},{"time":1.6667,"angle":-0.75}]},"头发7":{"rotate":[{"angle":0.01,"curve":0.357,"c2":0.42,"c3":0.756},{"time":0.5333,"angle":-1.95,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.2,"angle":0.57,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.3667,"angle":0.95,"curve":0.261,"c3":0.618,"c4":0.44},{"time":1.6667,"angle":0.01}]},"头发8":{"rotate":[{"angle":0.67,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.7,"angle":-1.95,"curve":0.245,"c3":0.637,"c4":0.56},{"time":1.2,"angle":-0.12,"curve":0.381,"c2":0.55,"c3":0.742},{"time":1.5333,"angle":0.95,"curve":0.29,"c3":0.629,"c4":0.38},{"time":1.6667,"angle":0.67}]},"头发9":{"rotate":[{"angle":0.93,"curve":0.344,"c2":0.66,"c3":0.677},{"time":0.0333,"angle":0.95,"curve":0.25,"c3":0.75},{"time":0.8667,"angle":-1.95,"curve":0.258,"c3":0.619,"c4":0.45},{"time":1.2,"angle":-0.88,"curve":0.358,"c2":0.42,"c3":0.743,"c4":0.94},{"time":1.6667,"angle":0.93}]},"头发1":{"rotate":[{"angle":-0.42,"curve":0.302,"c2":0.23,"c3":0.669,"c4":0.67},{"time":0.4,"angle":-2.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.6667,"angle":-3.23,"curve":0.25,"c3":0.75},{"time":1.5,"curve":0.284,"c3":0.625,"c4":0.38},{"time":1.6667,"angle":-0.42}]},"头发10":{"rotate":[{"curve":0.252,"c3":0.622,"c4":0.48},{"time":0.4,"angle":-1.47,"curve":0.372,"c2":0.48,"c3":0.752},{"time":0.8333,"angle":-3.23,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.5,"angle":-0.42,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.6667}]},"头发11":{"rotate":[{"angle":-0.31,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"curve":0.269,"c3":0.618,"c4":0.42},{"time":0.4,"angle":-0.78,"curve":0.345,"c2":0.37,"c3":0.757},{"time":0.9667,"angle":-3.23,"curve":0.244,"c3":0.643,"c4":0.58},{"time":1.5,"angle":-1.05,"curve":0.353,"c2":0.4,"c3":0.692,"c4":0.76},{"time":1.6667,"angle":-0.31}]},"头发12":{"rotate":[{"angle":-1.05,"curve":0.382,"c2":0.56,"c3":0.739},{"time":0.3,"curve":0.305,"c3":0.64,"c4":0.36},{"time":0.4,"angle":-0.14,"curve":0.289,"c2":0.17,"c3":0.755},{"time":1.1333,"angle":-3.23,"curve":0.255,"c3":0.62,"c4":0.47},{"time":1.5,"angle":-1.9,"curve":0.333,"c2":0.33,"c3":0.673,"c4":0.68},{"time":1.6667,"angle":-1.05}]},"头发13":{"rotate":[{"angle":-2.63,"curve":0.361,"c2":0.43,"c3":0.729,"c4":0.89},{"time":0.4,"angle":-0.1,"curve":0.352,"c2":0.65,"c3":0.687},{"time":0.4333,"curve":0.25,"c3":0.75},{"time":1.3,"angle":-4.83,"curve":0.273,"c3":0.62,"c4":0.41},{"time":1.5,"angle":-3.85,"curve":0.318,"c2":0.28,"c3":0.658,"c4":0.64},{"time":1.6667,"angle":-2.63}]},"头发14":{"rotate":[{"angle":-3.68,"curve":0.324,"c2":0.3,"c3":0.69,"c4":0.74},{"time":0.4,"angle":-0.81,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.6,"curve":0.25,"c3":0.75},{"time":1.4333,"angle":-4.83,"curve":0.305,"c3":0.64,"c4":0.36},{"time":1.5,"angle":-4.63,"curve":0.299,"c2":0.19,"c3":0.64,"c4":0.55},{"time":1.6667,"angle":-3.68}]},"眼珠":{"translate":[{"time":0.6333,"curve":0.25,"c3":0.75},{"time":0.7,"x":-1.46,"y":-0.02,"curve":"stepped"},{"time":1.0333,"x":-1.46,"y":-0.02,"curve":0.25,"c3":0.75},{"time":1.0667,"x":0.57,"y":-0.01}]},"root":{"translate":[{"x":-97.82,"y":507.72}]},"眉毛":{"rotate":[{"angle":-13.03}],"translate":[{"x":-0.01,"y":-8.72}]},"眼睫毛":{"translate":[{"x":-0.01,"y":-9.08}]},"hand1":{"translate":[{"x":43.64,"y":44.96,"curve":0.25,"c3":0.75},{"time":0.2,"x":28.2,"y":39.06,"curve":0.25,"c3":0.75},{"time":0.4333,"x":43.55,"y":49.32,"curve":0.25,"c3":0.75},{"time":0.6,"x":37.42,"y":44.84,"curve":0.25,"c3":0.75},{"time":0.7667,"x":44.82,"y":48.1,"curve":0.25,"c3":0.75},{"time":0.9333,"x":39.87,"y":46.76,"curve":0.25,"c3":0.75},{"time":1.1,"x":43.64,"y":44.96,"curve":0.25,"c3":0.75},{"time":1.3,"x":28.2,"y":39.06,"curve":0.25,"c3":0.75},{"time":1.5,"x":43.55,"y":49.32,"curve":0.25,"c3":0.75},{"time":1.6667,"x":43.64,"y":44.96}]},"脸":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.3333,"angle":1.53,"curve":0.25,"c3":0.75},{"time":0.5333,"angle":-0.13,"curve":0.25,"c3":0.75},{"time":0.7667,"angle":1.15,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":0.16,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":1.28,"curve":0.25,"c3":0.75},{"time":1.3333,"angle":0.75,"curve":0.25,"c3":0.75},{"time":1.6667}]}},"ik":{"hand":[{"bendPositive":false}]}},"talk_weixiao":{"bones":{"身体":{"translate":[{"x":-1.64,"curve":0.25,"c3":0.75},{"time":0.8333,"x":4.48,"curve":0.25,"c3":0.75},{"time":1.6667,"x":-1.64}]},"身体2":{"rotate":[{"angle":-0.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"angle":-0.77,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":0.82,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":-0.32}]},"脸":{"rotate":[{"angle":0.37,"curve":0.325,"c2":0.31,"c3":0.675,"c4":0.69},{"time":0.2667,"angle":-0.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.5667,"angle":-0.77,"curve":0.25,"c3":0.75},{"time":1.4,"angle":0.82,"curve":0.265,"c3":0.618,"c4":0.43},{"time":1.6667,"angle":0.37}]},"身体9":{"rotate":[{"angle":0.06,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.4333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":1.43,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":0.06}]},"身体10":{"rotate":[{"angle":0.87,"curve":0.318,"c2":0.28,"c3":0.69,"c4":0.74},{"time":0.4333,"angle":-0.85,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.6,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":1.43,"curve":0.273,"c3":0.62,"c4":0.41},{"time":1.6667,"angle":0.87}]},"身体11":{"rotate":[{"angle":1.41,"curve":0.26,"c2":0.06,"c3":0.634,"c4":0.54},{"time":0.4333,"angle":-0.06,"curve":0.378,"c2":0.52,"c3":0.748},{"time":0.8,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.6333,"angle":1.43,"curve":0.323,"c3":0.656,"c4":0.34},{"time":1.6667,"angle":1.41}]},"身体6":{"rotate":[{"angle":-0.75,"curve":0.38,"c2":0.59,"c3":0.727},{"time":0.2333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.0667,"angle":1.43,"curve":0.242,"c3":0.663,"c4":0.65},{"time":1.6667,"angle":-0.75}]},"身体7":{"rotate":[{"angle":0.05,"curve":0.344,"c2":0.37,"c3":0.688,"c4":0.74},{"time":0.2333,"angle":-0.85,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.4333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":1.43,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":0.05}]},"身体8":{"rotate":[{"angle":0.98,"curve":0.312,"c2":0.26,"c3":0.656,"c4":0.63},{"time":0.2333,"angle":0.06,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.6333,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":1.43,"curve":0.278,"c3":0.622,"c4":0.39},{"time":1.6667,"angle":0.98}]},"身体12":{"rotate":[{"angle":0.76,"curve":0.345,"c2":0.37,"c3":0.757},{"time":0.6,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.4333,"angle":1.43,"curve":0.269,"c3":0.618,"c4":0.42},{"time":1.6667,"angle":0.76}]},"身体13":{"rotate":[{"angle":1.37,"curve":0.267,"c2":0.1,"c3":0.678,"c4":0.71},{"time":0.6,"angle":-0.85,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.7667,"angle":-1.31,"curve":0.25,"c3":0.75},{"time":1.6333,"angle":1.43,"curve":0.313,"c3":0.648,"c4":0.35},{"time":1.6667,"angle":1.37}]},"腰牌":{"rotate":[{"angle":-1.64,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":4.46,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":-1.64}]},"腰牌2":{"rotate":[{"angle":0.15,"curve":0.351,"c2":0.39,"c3":0.701,"c4":0.78},{"time":0.2667,"angle":-3.24,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.4333,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":4.46,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":0.15}]},"腰牌3":{"rotate":[{"angle":1.66,"curve":0.33,"c2":0.32,"c3":0.68,"c4":0.71},{"time":0.2667,"angle":-2,"curve":0.382,"c2":0.58,"c3":0.731},{"time":0.5333,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.3667,"angle":4.46,"curve":0.261,"c3":0.618,"c4":0.44},{"time":1.6667,"angle":1.66}]},"腰牌4":{"rotate":[{"angle":3.05,"curve":0.31,"c2":0.26,"c3":0.66,"c4":0.65},{"time":0.2667,"angle":-0.55,"curve":0.38,"c2":0.53,"c3":0.745},{"time":0.6333,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":4.46,"curve":0.278,"c3":0.622,"c4":0.39},{"time":1.6667,"angle":3.05}]},"腰牌5":{"rotate":[{"angle":4.11,"curve":0.287,"c2":0.16,"c3":0.638,"c4":0.56},{"time":0.2667,"angle":0.95,"curve":0.367,"c2":0.46,"c3":0.754},{"time":0.7667,"angle":-4.06,"curve":0.25,"c3":0.75},{"time":1.6,"angle":4.46,"curve":0.305,"c3":0.64,"c4":0.36},{"time":1.6667,"angle":4.11}]},"飘带1":{"rotate":[{"angle":-1.3,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":4.44,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.6667,"angle":-1.3}]},"飘带2":{"rotate":[{"angle":-0.15,"curve":0.351,"c2":0.4,"c3":0.689,"c4":0.75},{"time":0.1333,"angle":-1.3,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.2667,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":4.44,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":-0.15}]},"飘带7":{"rotate":[{"angle":1.26,"curve":0.338,"c2":0.35,"c3":0.675,"c4":0.69},{"time":0.1333,"angle":-0.11,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.4333,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":4.44,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":1.26}]},"飘带8":{"rotate":[{"angle":2.65,"curve":0.325,"c2":0.31,"c3":0.663,"c4":0.65},{"time":0.1333,"angle":1.27,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.5667,"angle":-1.91,"curve":0.25,"c3":0.75},{"time":1.4,"angle":4.44,"curve":0.265,"c3":0.618,"c4":0.43},{"time":1.6667,"angle":2.65}]},"飘带3":{"rotate":[{"angle":-1.82,"curve":0.25,"c3":0.75},{"time":0.8333,"angle":1.51,"curve":0.25,"c3":0.75},{"time":1.6667,"angle":-1.82}]},"飘带4":{"rotate":[{"angle":-1.5,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"angle":-1.82,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":1.51,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.6667,"angle":-1.5}]},"飘带5":{"rotate":[{"angle":-1.57,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"angle":-2.8,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":1.51,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":-1.57}]},"飘带6":{"rotate":[{"angle":-5,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.4333,"angle":-11.5,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":1.51,"curve":0.25,"c3":0.625,"c4":0.5},{"time":1.6667,"angle":-5}]},"马尾7":{"rotate":[{"angle":-1.7,"curve":0.29,"c3":0.629,"c4":0.38},{"time":0.1333,"angle":-1.25,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.8333,"angle":3,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.5,"angle":-1.09,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.6667,"angle":-1.7}]},"马尾8":{"rotate":[{"angle":-1.26,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":3,"curve":0.244,"c3":0.643,"c4":0.58},{"time":1.5,"angle":-0.17,"curve":0.353,"c2":0.4,"c3":0.692,"c4":0.76},{"time":1.6667,"angle":-1.26}]},"马尾9":{"rotate":[{"angle":-0.19,"curve":0.348,"c2":0.39,"c3":0.686,"c4":0.73},{"time":0.1333,"angle":-1.1,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.3,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":3,"curve":0.255,"c3":0.62,"c4":0.47},{"time":1.5,"angle":1.06,"curve":0.333,"c2":0.33,"c3":0.673,"c4":0.68},{"time":1.6667,"angle":-0.19}]},"马尾10":{"rotate":[{"angle":-1.25,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":3,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.6667,"angle":-1.25}]},"马尾6":{"rotate":[{"angle":3,"curve":0.29,"c3":0.629,"c4":0.38},{"time":0.1333,"angle":2.54,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.8333,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.6667,"angle":3}]},"马尾5":{"rotate":[{"angle":2.4,"curve":0.314,"c2":0.27,"c3":0.652,"c4":0.61},{"time":0.1333,"angle":1.47,"curve":0.357,"c2":0.42,"c3":0.756},{"time":0.6667,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.5,"angle":3,"curve":0.284,"c3":0.625,"c4":0.38},{"time":1.6667,"angle":2.4}]},"马尾4":{"rotate":[{"angle":1.06,"curve":0.333,"c2":0.33,"c3":0.67,"c4":0.68},{"time":0.1333,"angle":0.03,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.4667,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.3,"angle":3,"curve":0.255,"c3":0.62,"c4":0.47},{"time":1.6667,"angle":1.06}]},"马尾3":{"rotate":[{"angle":-0.2,"curve":0.348,"c2":0.39,"c3":0.686,"c4":0.73},{"time":0.1333,"angle":-1.09,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.3,"angle":-1.7,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":3,"curve":0.244,"c3":0.643,"c4":0.58},{"time":1.6667,"angle":-0.2}]},"马尾2":{"rotate":[{"angle":0.2,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":2.06,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.6667,"angle":0.2}]},"马尾1":{"rotate":[{"angle":-1.74,"curve":0.314,"c2":0.27,"c3":0.652,"c4":0.61},{"time":0.1333,"angle":-1.41,"curve":0.357,"c2":0.42,"c3":0.756},{"time":0.6667,"angle":-0.3,"curve":0.25,"c3":0.75},{"time":1.5,"angle":-1.95,"curve":0.284,"c3":0.625,"c4":0.38},{"time":1.6667,"angle":-1.74}]},"头发3":{"rotate":[{"angle":-0.36,"curve":0.25,"c3":0.75},{"time":0.8333,"angle":1.36,"curve":0.25,"c3":0.75},{"time":1.6667,"angle":-0.36}]},"头发4":{"rotate":[{"angle":-0.14,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.1667,"angle":-0.36,"curve":0.25,"c3":0.75},{"time":1,"angle":1.36,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.6667,"angle":-0.14}]},"头发5":{"rotate":[{"angle":0.27,"curve":0.381,"c2":0.55,"c3":0.742},{"time":0.3333,"angle":-0.36,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":1.36,"curve":0.245,"c3":0.637,"c4":0.56},{"time":1.6667,"angle":0.27}]},"头发6":{"rotate":[{"angle":0.73,"curve":0.363,"c2":0.44,"c3":0.755},{"time":0.5,"angle":-0.36,"curve":0.25,"c3":0.75},{"time":1.3333,"angle":1.36,"curve":0.258,"c3":0.619,"c4":0.45},{"time":1.6667,"angle":0.73}]},"头发20":{"rotate":[{"angle":1.06,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":3.74,"curve":0.243,"c3":0.649,"c4":0.6},{"time":1.6667,"angle":1.06}]},"头发21":{"rotate":[{"angle":2.02,"curve":0.345,"c2":0.37,"c3":0.696,"c4":0.76},{"time":0.2667,"angle":0.49,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.4333,"curve":0.25,"c3":0.75},{"time":1.3,"angle":3.74,"curve":0.252,"c3":0.622,"c4":0.48},{"time":1.6667,"angle":2.02}]},"头发22":{"rotate":[{"angle":3.12,"curve":0.31,"c2":0.26,"c3":0.66,"c4":0.65},{"time":0.2667,"angle":1.54,"curve":0.38,"c2":0.53,"c3":0.745},{"time":0.6333,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":3.74,"curve":0.278,"c3":0.622,"c4":0.39},{"time":1.6667,"angle":3.12}]},"头发16":{"rotate":[{"angle":0.13,"curve":0.337,"c2":0.35,"c3":0.758},{"time":0.6,"angle":1.95,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":-0.33,"curve":0.273,"c3":0.62,"c4":0.41},{"time":1.6667,"angle":0.13}]},"头发17":{"rotate":[{"angle":-0.28,"curve":0.277,"c2":0.12,"c3":0.754},{"time":0.7667,"angle":1.95,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.4667,"angle":-0.03,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.6333,"angle":-0.33,"curve":0.313,"c3":0.648,"c4":0.35},{"time":1.6667,"angle":-0.28}]},"头发18":{"rotate":[{"angle":-0.18,"curve":0.366,"c2":0.63,"c3":0.703},{"time":0.1,"angle":-0.33,"curve":0.25,"c3":0.75},{"time":0.9333,"angle":1.95,"curve":0.245,"c3":0.637,"c4":0.56},{"time":1.4667,"angle":0.51,"curve":0.358,"c2":0.42,"c3":0.702,"c4":0.8},{"time":1.6667,"angle":-0.18}]},"头发19":{"rotate":[{"angle":0.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.2667,"angle":-0.33,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":1.95,"curve":0.258,"c3":0.619,"c4":0.45},{"time":1.4667,"angle":1.11,"curve":0.332,"c2":0.33,"c3":0.676,"c4":0.7},{"time":1.6667,"angle":0.32}]},"头发":{"rotate":[{"angle":-0.75,"curve":0.38,"c2":0.53,"c3":0.745},{"time":0.3667,"angle":-1.95,"curve":0.25,"c3":0.75},{"time":1.2,"angle":0.95,"curve":0.246,"c3":0.633,"c4":0.54},{"time":1.6667,"angle":-0.75}]},"头发7":{"rotate":[{"angle":0.01,"curve":0.357,"c2":0.42,"c3":0.756},{"time":0.5333,"angle":-1.95,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.2,"angle":0.57,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.3667,"angle":0.95,"curve":0.261,"c3":0.618,"c4":0.44},{"time":1.6667,"angle":0.01}]},"头发8":{"rotate":[{"angle":0.67,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.7,"angle":-1.95,"curve":0.245,"c3":0.637,"c4":0.56},{"time":1.2,"angle":-0.12,"curve":0.381,"c2":0.55,"c3":0.742},{"time":1.5333,"angle":0.95,"curve":0.29,"c3":0.629,"c4":0.38},{"time":1.6667,"angle":0.67}]},"头发9":{"rotate":[{"angle":0.93,"curve":0.344,"c2":0.66,"c3":0.677},{"time":0.0333,"angle":0.95,"curve":0.25,"c3":0.75},{"time":0.8667,"angle":-1.95,"curve":0.258,"c3":0.619,"c4":0.45},{"time":1.2,"angle":-0.88,"curve":0.358,"c2":0.42,"c3":0.743,"c4":0.94},{"time":1.6667,"angle":0.93}]},"头发1":{"rotate":[{"angle":-0.42,"curve":0.302,"c2":0.23,"c3":0.669,"c4":0.67},{"time":0.4,"angle":-2.32,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.6667,"angle":-3.23,"curve":0.25,"c3":0.75},{"time":1.5,"curve":0.284,"c3":0.625,"c4":0.38},{"time":1.6667,"angle":-0.42}]},"头发10":{"rotate":[{"curve":0.252,"c3":0.622,"c4":0.48},{"time":0.4,"angle":-1.47,"curve":0.372,"c2":0.48,"c3":0.752},{"time":0.8333,"angle":-3.23,"curve":0.243,"c3":0.68,"c4":0.71},{"time":1.5,"angle":-0.42,"curve":0.375,"c2":0.62,"c3":0.716},{"time":1.6667}]},"头发11":{"rotate":[{"angle":-0.31,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1333,"curve":0.269,"c3":0.618,"c4":0.42},{"time":0.4,"angle":-0.78,"curve":0.345,"c2":0.37,"c3":0.757},{"time":0.9667,"angle":-3.23,"curve":0.244,"c3":0.643,"c4":0.58},{"time":1.5,"angle":-1.05,"curve":0.353,"c2":0.4,"c3":0.692,"c4":0.76},{"time":1.6667,"angle":-0.31}]},"头发12":{"rotate":[{"angle":-1.05,"curve":0.382,"c2":0.56,"c3":0.739},{"time":0.3,"curve":0.305,"c3":0.64,"c4":0.36},{"time":0.4,"angle":-0.14,"curve":0.289,"c2":0.17,"c3":0.755},{"time":1.1333,"angle":-3.23,"curve":0.255,"c3":0.62,"c4":0.47},{"time":1.5,"angle":-1.9,"curve":0.333,"c2":0.33,"c3":0.673,"c4":0.68},{"time":1.6667,"angle":-1.05}]},"头发13":{"rotate":[{"angle":-2.63,"curve":0.361,"c2":0.43,"c3":0.729,"c4":0.89},{"time":0.4,"angle":-0.1,"curve":0.352,"c2":0.65,"c3":0.687},{"time":0.4333,"curve":0.25,"c3":0.75},{"time":1.3,"angle":-4.83,"curve":0.273,"c3":0.62,"c4":0.41},{"time":1.5,"angle":-3.85,"curve":0.318,"c2":0.28,"c3":0.658,"c4":0.64},{"time":1.6667,"angle":-2.63}]},"头发14":{"rotate":[{"angle":-3.68,"curve":0.324,"c2":0.3,"c3":0.69,"c4":0.74},{"time":0.4,"angle":-0.81,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.6,"curve":0.25,"c3":0.75},{"time":1.4333,"angle":-4.83,"curve":0.305,"c3":0.64,"c4":0.36},{"time":1.5,"angle":-4.63,"curve":0.299,"c2":0.19,"c3":0.64,"c4":0.55},{"time":1.6667,"angle":-3.68}]},"眼珠":{"translate":[{"time":0.6333,"curve":0.25,"c3":0.75},{"time":0.7,"x":-1.46,"y":-0.02,"curve":"stepped"},{"time":1.0333,"x":-1.46,"y":-0.02,"curve":0.25,"c3":0.75},{"time":1.0667,"x":0.57,"y":-0.01}]},"root":{"translate":[{"x":-97.82,"y":507.72}]},"眉毛":{"rotate":[{"angle":-11.93}],"translate":[{"x":-0.01,"y":-7.32}]},"眼睫毛":{"translate":[{"y":-5.83}]}}},"walk":{"slots":{"嘴开口":{"attachment":[{"name":"嘴严肃"}]}},"bones":{"身体":{"rotate":[{"angle":0.49,"curve":0.382,"c2":0.56,"c3":0.739},{"time":0.3667,"curve":0.25,"c3":0.75},{"time":1.3667,"angle":1.51,"curve":0.244,"c3":0.643,"c4":0.58},{"time":2,"angle":0.49}],"translate":[{"y":-9.5,"curve":0.25,"c3":0.75},{"time":0.5,"y":-7.02,"curve":0.25,"c3":0.75},{"time":1,"y":-9.5,"curve":0.25,"c3":0.75},{"time":1.5,"y":-7.02,"curve":0.25,"c3":0.75},{"time":2,"y":-9.5}]},"target1":{"translate":[{"x":-53.5,"y":-4.93},{"time":1,"x":79.87},{"time":1.4333,"x":28.07,"y":20.67},{"time":2,"x":-53.5,"y":-4.93}]},"target2":{"translate":[{"x":48.23,"y":4.39},{"time":0.4333,"x":-12.87,"y":20.81},{"time":1,"x":-89.86,"y":-11.82},{"time":2,"x":48.23,"y":4.39}]},"腿2":{"translate":[{"curve":0.25,"c3":0.75},{"time":1,"x":-35.3,"y":28.45,"curve":0.25,"c3":0.75},{"time":2}]},"腿4":{"translate":[{"curve":0.25,"c3":0.75},{"time":1,"x":-48,"y":-28.72,"curve":0.25,"c3":0.75},{"time":2}]},"身体2":{"rotate":[{"angle":1.08,"curve":0.326,"c2":0.31,"c3":0.68,"c4":0.71},{"time":0.3667,"angle":0.37,"curve":0.382,"c2":0.58,"c3":0.731},{"time":0.6667,"curve":0.25,"c3":0.75},{"time":1.6667,"angle":1.51,"curve":0.265,"c3":0.618,"c4":0.43},{"time":2,"angle":1.08}]},"脸":{"rotate":[{"angle":1.5,"curve":0.269,"c2":0.07,"c3":0.625,"c4":0.5},{"time":0.3667,"angle":0.95,"curve":0.363,"c2":0.44,"c3":0.755},{"time":0.9667,"curve":0.25,"c3":0.75},{"time":1.9667,"angle":1.51,"curve":0.323,"c3":0.656,"c4":0.34},{"time":2,"angle":1.5}]},"身体6":{"rotate":[{"angle":-8.23,"curve":0.25,"c3":0.75},{"time":0.5,"angle":5.66,"curve":0.25,"c3":0.75},{"time":1,"curve":0.25,"c3":0.75},{"time":1.5,"angle":3.33,"curve":0.25,"c3":0.75},{"time":2,"angle":-8.23}]},"身体7":{"rotate":[{"angle":-4.95,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.1667,"angle":-8.23,"curve":0.25,"c3":0.75},{"time":0.6667,"angle":5.66,"curve":0.25,"c3":0.75},{"time":1.1667,"curve":0.25,"c3":0.75},{"time":1.6667,"angle":3.33,"curve":0.243,"c3":0.649,"c4":0.6},{"time":2,"angle":-4.95}]},"身体8":{"rotate":[{"angle":3.99,"curve":0.351,"c2":0.4,"c3":0.757},{"time":0.3333,"angle":5.68,"curve":0.25,"c3":0.75},{"time":0.8333,"angle":5.66,"curve":0.25,"c3":0.75},{"time":1.3333,"curve":0.25,"c3":0.75},{"time":1.8333,"angle":3.33,"curve":0.265,"c3":0.618,"c4":0.43},{"time":2,"angle":3.99}]},"身体9":{"rotate":[{"angle":4.5,"curve":0.25,"c3":0.75},{"time":1,"angle":-6.56,"curve":0.25,"c3":0.75},{"time":2,"angle":4.5}],"translate":[{"curve":0.25,"c3":0.75},{"time":1,"x":0.14,"y":21.15,"curve":0.25,"c3":0.75},{"time":2}]},"身体10":{"rotate":[{"angle":4.25,"curve":0.371,"c2":0.62,"c3":0.71},{"time":0.1667,"angle":4.5,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":1.88,"curve":0.243,"c3":0.689,"c4":0.75},{"time":2,"angle":4.25}]},"身体11":{"rotate":[{"angle":3.76,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.3333,"angle":4.5,"curve":0.25,"c3":0.75},{"time":1.3333,"angle":1.88,"curve":0.243,"c3":0.649,"c4":0.6},{"time":2,"angle":3.76}]},"身体12":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.5,"angle":-11.71,"curve":0.25,"c3":0.75},{"time":1,"angle":-8.82,"curve":0.25,"c3":0.75},{"time":2}]},"身体13":{"rotate":[{"angle":-1.15,"curve":0.375,"c2":0.62,"c3":0.716},{"time":0.2,"curve":0.25,"c3":0.625,"c4":0.5},{"time":0.7,"angle":-11.71,"curve":0.25,"c3":0.75},{"time":1.2,"angle":-8.82,"curve":0.243,"c3":0.68,"c4":0.71},{"time":2,"angle":-1.15}]},"腰牌":{"rotate":[{"angle":3.01,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.8333,"angle":-8.29,"curve":0.25,"c3":0.75},{"time":1.8333,"angle":4.21,"curve":0.29,"c3":0.629,"c4":0.38},{"time":2,"angle":3.01}],"translate":[{"curve":0.25,"c3":0.75},{"time":1,"x":0.18,"y":26.16,"curve":0.25,"c3":0.75},{"time":2}]},"腰牌2":{"rotate":[{"angle":4.21,"curve":0.25,"c3":0.75},{"time":0.5,"angle":-3.42,"curve":0.25,"c3":0.75},{"time":1,"angle":4.21,"curve":0.25,"c3":0.75},{"time":1.5,"angle":-3.42,"curve":0.25,"c3":0.75},{"time":2,"angle":4.21}]},"腰牌3":{"rotate":[{"angle":2.05,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.1667,"angle":4.21,"curve":0.25,"c3":0.75},{"time":0.6667,"angle":-3.42,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":4.21,"curve":0.25,"c3":0.75},{"time":1.6667,"angle":-3.42,"curve":0.243,"c3":0.649,"c4":0.6},{"time":2,"angle":2.05}]},"腰牌4":{"rotate":[{"angle":0.06,"curve":0.372,"c2":0.48,"c3":0.752},{"time":0.2667,"angle":4.21,"curve":0.25,"c3":0.75},{"time":0.7667,"angle":-3.42,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":4.21,"curve":0.25,"c3":0.75},{"time":1.7667,"angle":-3.42,"curve":0.252,"c3":0.622,"c4":0.48},{"time":2,"angle":0.06}]},"腰牌5":{"rotate":[{"angle":-2.43,"curve":0.32,"c2":0.29,"c3":0.757},{"time":0.4,"angle":4.21,"curve":0.25,"c3":0.75},{"time":0.9,"angle":-3.42,"curve":0.25,"c3":0.75},{"time":1.4,"angle":4.21,"curve":0.25,"c3":0.75},{"time":1.9,"angle":-3.42,"curve":0.284,"c3":0.625,"c4":0.38},{"time":2,"angle":-2.43}]},"右大笔":{"rotate":[{"angle":-18.36,"curve":0.289,"c2":0.17,"c3":0.755},{"time":0.9,"curve":0.25,"c3":0.75},{"time":1.9,"angle":-19.17,"curve":0.305,"c3":0.64,"c4":0.36},{"time":2,"angle":-18.36}],"translate":[{"curve":0.25,"c3":0.75},{"time":1,"x":-8.74,"y":-2.9,"curve":0.25,"c3":0.75},{"time":2}]},"飘带1":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.5,"angle":5.66,"curve":0.25,"c3":0.75},{"time":1,"curve":0.25,"c3":0.75},{"time":1.5,"angle":5.66,"curve":0.25,"c3":0.75},{"time":2}],"translate":[{"curve":0.25,"c3":0.75},{"time":1,"x":-11.27,"y":1.9,"curve":0.25,"c3":0.75},{"time":2}]},"左大臂":{"rotate":[{"angle":7.24,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.8333,"angle":-6.48,"curve":0.25,"c3":0.75},{"time":1.8333,"angle":8.71,"curve":0.29,"c3":0.629,"c4":0.38},{"time":2,"angle":7.24}],"translate":[{"curve":0.25,"c3":0.75},{"time":1,"x":-8.85,"y":2.56,"curve":0.25,"c3":0.75},{"time":2}]},"飘带3":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.5,"angle":2.63,"curve":0.25,"c3":0.75},{"time":1,"curve":0.25,"c3":0.75},{"time":1.5,"angle":2.63,"curve":0.25,"c3":0.75},{"time":2}],"translate":[{"curve":0.25,"c3":0.75},{"time":1,"x":-5.72,"y":-2.68,"curve":0.25,"c3":0.75},{"time":2}]},"胸针":{"rotate":[{"angle":-7.11,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.8333,"angle":-1.9,"curve":0.25,"c3":0.75},{"time":1.8333,"angle":-7.67,"curve":0.29,"c3":0.629,"c4":0.38},{"time":2,"angle":-7.11}],"translate":[{"curve":0.25,"c3":0.75},{"time":1,"x":-8.74,"y":-2.9,"curve":0.25,"c3":0.75},{"time":2}]},"右小臂":{"rotate":[{"angle":-18.8,"curve":0.352,"c2":0.65,"c3":0.687},{"time":0.0667,"angle":-19.17,"curve":0.25,"c3":0.75},{"time":1.0667,"curve":0.243,"c3":0.689,"c4":0.75},{"time":1.9,"angle":-17.32,"curve":0.354,"c2":0.45,"c3":0.689,"c4":0.8},{"time":2,"angle":-18.8}]},"左小臂":{"rotate":[{"angle":-0.15,"curve":0.352,"c2":0.65,"c3":0.687},{"time":0.0667,"curve":0.25,"c3":0.75},{"time":1.0667,"angle":-6.48,"curve":0.246,"c3":0.723,"c4":0.88},{"time":2,"angle":-0.15}]},"飘带2":{"rotate":[{"angle":3.81,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.1667,"curve":0.25,"c3":0.75},{"time":0.6667,"angle":13.43,"curve":0.25,"c3":0.75},{"time":1.1667,"curve":0.25,"c3":0.75},{"time":1.6667,"angle":13.43,"curve":0.243,"c3":0.649,"c4":0.6},{"time":2,"angle":3.81}]},"飘带7":{"rotate":[{"angle":8.48,"curve":0.351,"c2":0.4,"c3":0.757},{"time":0.3333,"curve":0.25,"c3":0.75},{"time":0.8333,"angle":11.84,"curve":0.25,"c3":0.75},{"time":1.3333,"curve":0.25,"c3":0.75},{"time":1.8333,"angle":11.84,"curve":0.265,"c3":0.618,"c4":0.43},{"time":2,"angle":8.48}]},"飘带8":{"rotate":[{"angle":7.81,"curve":0.25,"c3":0.75},{"time":0.5,"curve":0.25,"c3":0.75},{"time":1,"angle":7.81,"curve":0.25,"c3":0.75},{"time":1.5,"curve":0.25,"c3":0.75},{"time":2,"angle":7.81}]},"飘带4":{"rotate":[{"angle":1.43,"curve":0.382,"c2":0.57,"c3":0.735},{"time":0.1667,"curve":0.25,"c3":0.75},{"time":0.6667,"angle":5.04,"curve":0.25,"c3":0.75},{"time":1.1667,"curve":0.25,"c3":0.75},{"time":1.6667,"angle":5.04,"curve":0.243,"c3":0.649,"c4":0.6},{"time":2,"angle":1.43}]},"飘带5":{"rotate":[{"angle":6.07,"curve":0.351,"c2":0.4,"c3":0.757},{"time":0.3333,"curve":0.25,"c3":0.75},{"time":0.8333,"angle":8.47,"curve":0.25,"c3":0.75},{"time":1.3333,"curve":0.25,"c3":0.75},{"time":1.8333,"angle":8.47,"curve":0.265,"c3":0.618,"c4":0.43},{"time":2,"angle":6.07}]},"飘带6":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.5,"angle":8.47,"curve":0.25,"c3":0.75},{"time":1,"curve":0.25,"c3":0.75},{"time":1.5,"angle":8.47,"curve":0.25,"c3":0.75},{"time":2}]},"马尾2":{"rotate":[{"angle":9.01,"curve":0.25,"c3":0.75},{"time":1,"angle":18.72,"curve":0.25,"c3":0.75},{"time":2,"angle":9.01}]},"马尾3":{"rotate":[{"angle":5.31,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.2333,"angle":3.7,"curve":0.25,"c3":0.75},{"time":1.2333,"angle":13.4,"curve":0.242,"c3":0.671,"c4":0.68},{"time":2,"angle":5.31}]},"马尾4":{"rotate":[{"angle":8.12,"curve":0.378,"c2":0.52,"c3":0.748},{"time":0.4667,"angle":3.7,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":13.4,"curve":0.248,"c3":0.628,"c4":0.52},{"time":2,"angle":8.12}]},"马尾5":{"rotate":[{"angle":11.44,"curve":0.337,"c2":0.35,"c3":0.758},{"time":0.7333,"angle":3.7,"curve":0.25,"c3":0.75},{"time":1.7333,"angle":13.4,"curve":0.273,"c3":0.62,"c4":0.41},{"time":2,"angle":11.44}]},"马尾6":{"rotate":[{"angle":3.7,"curve":0.25,"c3":0.75},{"time":1,"angle":13.4,"curve":0.25,"c3":0.75},{"time":2,"angle":3.7}]},"马尾7":{"rotate":[{"curve":0.25,"c3":0.75},{"time":1,"angle":9.7,"curve":0.25,"c3":0.75},{"time":2}]},"马尾8":{"rotate":[{"angle":1.97,"curve":0.38,"c2":0.59,"c3":0.727},{"time":0.2667,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":9.7,"curve":0.242,"c3":0.663,"c4":0.65},{"time":2,"angle":1.97}]},"马尾9":{"rotate":[{"angle":5.28,"curve":0.372,"c2":0.48,"c3":0.752},{"time":0.5333,"curve":0.25,"c3":0.75},{"time":1.5333,"angle":9.7,"curve":0.252,"c3":0.622,"c4":0.48},{"time":2,"angle":5.28}]},"马尾10":{"rotate":[{"angle":8.44,"curve":0.32,"c2":0.29,"c3":0.757},{"time":0.8,"curve":0.25,"c3":0.75},{"time":1.8,"angle":9.7,"curve":0.284,"c3":0.625,"c4":0.38},{"time":2,"angle":8.44}]},"马尾1":{"rotate":[{"angle":1.26,"curve":0.32,"c2":0.29,"c3":0.757},{"time":0.8,"angle":9.7,"curve":0.25,"c3":0.75},{"time":1.8,"curve":0.284,"c3":0.625,"c4":0.38},{"time":2,"angle":1.26}]},"头发3":{"rotate":[{"angle":1.06,"curve":0.25,"c3":0.75},{"time":1,"angle":-1.89,"curve":0.25,"c3":0.75},{"time":2,"angle":1.06}]},"头发4":{"rotate":[{"angle":0.57,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.2333,"angle":1.06,"curve":0.25,"c3":0.75},{"time":1.2333,"angle":-1.89,"curve":0.242,"c3":0.671,"c4":0.68},{"time":2,"angle":0.57}]},"头发5":{"rotate":[{"angle":-0.29,"curve":0.378,"c2":0.52,"c3":0.748},{"time":0.4667,"angle":1.06,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":-1.89,"curve":0.248,"c3":0.628,"c4":0.52},{"time":2,"angle":-0.29}]},"头发6":{"rotate":[{"angle":-1.4,"curve":0.329,"c2":0.32,"c3":0.758},{"time":0.7667,"angle":1.06,"curve":0.25,"c3":0.75},{"time":1.7667,"angle":-1.89,"curve":0.278,"c3":0.622,"c4":0.39},{"time":2,"angle":-1.4}]},"头发20":{"rotate":[{"angle":0.57,"curve":0.351,"c2":0.4,"c3":0.757},{"time":0.6667,"angle":2,"curve":0.25,"c3":0.75},{"time":1.6667,"curve":0.265,"c3":0.618,"c4":0.43},{"time":2,"angle":0.57}]},"头发21":{"rotate":[{"angle":0.09,"curve":0.289,"c2":0.17,"c3":0.755},{"time":0.9,"angle":2,"curve":0.242,"c3":0.671,"c4":0.68},{"time":1.6667,"angle":0.33,"curve":0.378,"c2":0.61,"c3":0.722},{"time":1.9,"curve":0.305,"c3":0.64,"c4":0.36},{"time":2,"angle":0.09}]},"头发22":{"rotate":[{"angle":0.13,"curve":0.366,"c2":0.63,"c3":0.703},{"time":0.1333,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":2,"curve":0.248,"c3":0.628,"c4":0.52},{"time":1.6667,"angle":0.91,"curve":0.356,"c2":0.41,"c3":0.707,"c4":0.81},{"time":2,"angle":0.13}]},"头发1":{"rotate":[{"angle":-0.72,"curve":0.375,"c2":0.5,"c3":0.75},{"time":0.5,"curve":0.25,"c3":0.75},{"time":1.5,"angle":-1.43,"curve":0.25,"c3":0.625,"c4":0.5},{"time":2,"angle":-0.72}]},"头发10":{"rotate":[{"angle":-1.14,"curve":0.318,"c2":0.28,"c3":0.69,"c4":0.74},{"time":0.5,"angle":-0.24,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.7333,"curve":0.25,"c3":0.75},{"time":1.7333,"angle":-1.43,"curve":0.273,"c3":0.62,"c4":0.41},{"time":2,"angle":-1.14}]},"头发11":{"rotate":[{"angle":-1.42,"curve":0.26,"c2":0.06,"c3":0.634,"c4":0.54},{"time":0.5,"angle":-0.65,"curve":0.378,"c2":0.52,"c3":0.748},{"time":0.9667,"curve":0.25,"c3":0.75},{"time":1.9667,"angle":-1.43,"curve":0.323,"c3":0.656,"c4":0.34},{"time":2,"angle":-1.42}]},"头发12":{"rotate":[{"angle":-1.19,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.2333,"angle":-1.43,"curve":0.273,"c3":0.62,"c4":0.41},{"time":0.5,"angle":-1.14,"curve":0.337,"c2":0.35,"c3":0.758},{"time":1.2333,"curve":0.242,"c3":0.671,"c4":0.68},{"time":2,"angle":-1.19}]},"头发":{"rotate":[{"angle":0.63,"curve":0.366,"c2":0.63,"c3":0.703},{"time":0.1333,"angle":0.75,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":-0.9,"curve":0.244,"c3":0.7,"c4":0.79},{"time":2,"angle":0.63}]},"头发7":{"rotate":[{"angle":0.14,"curve":0.342,"c2":0.36,"c3":0.678,"c4":0.7},{"time":0.1333,"angle":0.41,"curve":0.38,"c2":0.59,"c3":0.727},{"time":0.4,"angle":0.75,"curve":0.25,"c3":0.75},{"time":1.4,"angle":-0.9,"curve":0.245,"c3":0.637,"c4":0.56},{"time":2,"angle":0.14}]},"头发8":{"rotate":[{"angle":-0.5,"curve":0.324,"c2":0.3,"c3":0.66,"c4":0.65},{"time":0.1333,"angle":-0.22,"curve":0.367,"c2":0.46,"c3":0.754},{"time":0.7,"angle":0.75,"curve":0.25,"c3":0.75},{"time":1.7,"angle":-0.9,"curve":0.269,"c3":0.618,"c4":0.42},{"time":2,"angle":-0.5}]},"头发9":{"rotate":[{"angle":-0.89,"curve":0.301,"c2":0.12,"c3":0.638,"c4":0.48},{"time":0.1333,"angle":-0.74,"curve":0.311,"c2":0.25,"c3":0.757},{"time":0.9667,"angle":0.75,"curve":0.25,"c3":0.75},{"time":1.9667,"angle":-0.9,"curve":0.323,"c3":0.656,"c4":0.34},{"time":2,"angle":-0.89}]},"头发16":{"rotate":[{"angle":0.31,"curve":0.372,"c2":0.48,"c3":0.752},{"time":0.5333,"angle":0.67,"curve":0.25,"c3":0.75},{"time":1.5333,"curve":0.252,"c3":0.622,"c4":0.48},{"time":2,"angle":0.31}]},"头发17":{"rotate":[{"angle":0.11,"curve":0.329,"c2":0.32,"c3":0.758},{"time":0.7667,"angle":0.67,"curve":0.242,"c3":0.671,"c4":0.68},{"time":1.5333,"angle":0.11,"curve":0.378,"c2":0.61,"c3":0.722},{"time":1.7667,"curve":0.278,"c3":0.622,"c4":0.39},{"time":2,"angle":0.11}]},"头发18":{"rotate":[{"curve":0.25,"c3":0.75},{"time":1,"angle":0.67,"curve":0.248,"c3":0.628,"c4":0.52},{"time":1.5333,"angle":0.31,"curve":0.378,"c2":0.52,"c3":0.748},{"time":2}]},"头发19":{"rotate":[{"angle":0.11,"curve":0.378,"c2":0.61,"c3":0.722},{"time":0.2333,"curve":0.25,"c3":0.75},{"time":1.2333,"angle":0.67,"curve":0.269,"c3":0.618,"c4":0.42},{"time":1.5333,"angle":0.51,"curve":0.324,"c2":0.3,"c3":0.69,"c4":0.74},{"time":2,"angle":0.11}]},"阴影":{"scale":[{"curve":0.25,"c3":0.75},{"time":0.5,"x":0.95,"y":0.98,"curve":0.25,"c3":0.75},{"time":1,"curve":0.25,"c3":0.75},{"time":1.5,"x":0.95,"y":0.98,"curve":0.25,"c3":0.75},{"time":2}]},"root":{"translate":[{"time":1.9667,"x":2.01,"y":2.01}]}},"deform":{"default":{"身体":{"身体":[{"curve":0.25,"c3":0.75},{"time":1,"offset":18,"vertices":[-9.47589,-1.0177,7.23987,6.20007,3.49945,-8.86618,3.54956,-8.84653,-7.95407,5.25543,1.81534,-0.94238,0.42572,1.99973,0.41534,2.00235,0.79752,-1.88232,0.04291,-4.18683,4.02423,1.1535,4.01868,1.17578,-2.63614,-3.25323,-0.46451,0.13428,-0.00604,-0.48437,-0.00275,-0.48407,-0.27377,0.40009,-0.22821,0.42578,-7.43875,2.15033,-0.09509,-7.74414,-0.05212,-7.74414,-4.36432,6.39838,-3.65021,6.82843,-3.14261,7.07776,-4.59787,-3.70911,4.79791,-3.4472,-5.90817,0.07227,-5.86517,0.70538,-5.79831,1.13245,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1.53891,-2.26184,1.30627,-2.40302,1.14856,-2.4823,0.31525,-2.71802,0.17523,-2.73004,0.05481,-2.73456,3.06757,-3.42773,2.71146,-3.71399,2.46625,-3.8819,1.12866,-4.45984,0.8988,-4.51184,0.69885,-4.54459,0,0,0,0,0,0,0,0,0,0,0,0,-0.48193,2.16046,-0.34103,2.18683,0.35779,2.18353,0.47083,2.16223,0.56415,2.14026,0.85373,2.88684,1.03885,2.8255,1.86713,2.35846,1.98767,2.25946,2.08331,2.17151,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3.81949,-5.09406,3.43729,-5.35852,1.69873,-6.13477,1.37213,-6.216,1.08722,-6.27243,-1.19635,-6.25244,-0.57092,-6.3403,6.80182,-14.42285,6.04608,-14.75861,5.38556,-15.01532,-0.28894,-15.9404,1.24371,-15.88678,0.97614,-11.01672,0.40515,-11.05139,-0.08362,-11.05756,-4.00214,-10.30676,-2.99744,-10.64343,0.0647,9.77002,1.13269,-9.70581,0.62689,-9.75085,0.19269,-9.76849,-3.28247,-9.20169,-2.38019,-9.47604,0.68201,11.16168,0.69049,-11.1626,0.10956,-11.18268,-0.38788,-11.17618,-4.32397,-10.3114,-3.30994,-10.68051,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.52472,-4.44092,0.28894,-4.4624,0.08514,-4.47113,-1.07336,-4.34134,-1.49805,-4.21326,-1.07336,-4.34134,-0.46155,-1.29602,-0.33148,-1.33582,-5.5509,-1.83966,0.07043,5.8468,0.03937,5.84784,-1.95917,-5.509,-1.4046,-5.67749,-5.5509,-1.83972,0.07037,5.8468,0.03931,5.84784,-1.95911,-5.50894,-1.40472,-5.67758,-7.61444,-2.52234,0.09827,8.02051,0.05542,8.02167,-2.68811,-7.55765,-5.32874,-1.7648,0.06927,5.61304,0.03925,5.61377,-1.88153,-5.28928,-5.32874,-1.7648,0.06927,5.61304,0.03925,5.61377,-1.88153,-5.28928,-5.32874,-1.7648,0.06927,5.61304,0.03925,5.61377,-1.88153,-5.28928,0,0,0,0,0,0,0,0,0,0,0,0,0.0332,5.1665,2.90704,-4.27228,2.46756,-4.53925,2.1694,-4.68939,0.59564,-5.13385,0.33081,-5.1571,0.104,-5.16562,0.00781,1.21442,0.68341,-1.00525,0.58032,-1.06653,0.51114,-1.10217,0.13873,-1.20868,0.07837,-1.2135,0.02319,-1.21414,-17.12677,-5.14771,0.62109,17.87225,1.59363,-17.81409,0.6546,-17.87189,-0.1579,-17.88144,-6.46429,-16.67252,-4.79224,-17.23163,-12.95178,-4.2868,0.09125,13.64191,1.58661,-13.55084,0.87677,-13.6145,0.26624,-13.63971,-4.57971,-12.8497,-3.30963,-13.2348,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2.63605,-7.65497,2.22772,-7.78369,1.87,-7.87759,-1.03015,-8.02969,-0.23004,-8.09357,-1.63965,11.79529,3.0896,-11.5,2.47717,-11.64728,1.94305,-11.74875,-2.32782,-11.67755,-1.16003,-11.85214,-12.02313,-5.79532,-1.55939,13.25458,-1.62976,13.24731,3.25977,-12.94196,2.57111,-13.09625,1.9707,-13.20053,-2.81439,-13.04568,-1.50842,-13.26175,-12.02313,-5.79532,-1.55939,13.25458,-1.62976,13.24731,3.25977,-12.94196,2.57111,-13.09625,1.9707,-13.20053,-2.81439,-13.04568,-1.50842,-13.26175,13.86963,-4.01007,0.10114,14.43579,8.1297,-11.92657,6.80408,-12.73517,10.01709,-2.8963,0.07336,10.42578,5.87085,-8.61359,4.91388,-9.19806,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6.5498,-1.89368,0.08411,6.81573,0.04803,6.81683,3.83826,-5.63184,4.62332,-1.33679,0.05945,4.81116,2.70932,-3.97546,3.85309,-1.11414,0.04944,4.00903],"curve":0.264,"c2":0.06,"c3":0.752},{"time":2}]}}}}}}')
}
, function(e, c) {
    e.exports = "\nlita.png\nsize: 1730,395\nformat: RGBA8888\nfilter: Linear,Linear\nrepeat: none\n右手\n  rotate: true\n  xy: 1444, 76\n  size: 82, 200\n  orig: 82, 200\n  offset: 0, 0\n  index: -1\n嘴_呆\n  rotate: true\n  xy: 776, 126\n  size: 15, 14\n  orig: 18, 16\n  offset: 1, 1\n  index: -1\n嘴严肃\n  rotate: false\n  xy: 161, 6\n  size: 17, 5\n  orig: 19, 7\n  offset: 1, 1\n  index: -1\n嘴开口\n  rotate: true\n  xy: 754, 115\n  size: 26, 20\n  orig: 28, 22\n  offset: 1, 1\n  index: -1\n嘴微笑\n  rotate: false\n  xy: 141, 5\n  size: 18, 6\n  orig: 20, 8\n  offset: 1, 1\n  index: -1\n头发\n  rotate: true\n  xy: 141, 13\n  size: 380, 337\n  orig: 380, 337\n  offset: 0, 0\n  index: -1\n头发1\n  rotate: false\n  xy: 480, 112\n  size: 189, 281\n  orig: 189, 281\n  offset: 0, 0\n  index: -1\n头发2\n  rotate: false\n  xy: 1007, 150\n  size: 178, 243\n  orig: 178, 243\n  offset: 0, 0\n  index: -1\n头发3\n  rotate: true\n  xy: 1444, 160\n  size: 160, 229\n  orig: 160, 229\n  offset: 0, 0\n  index: -1\n头花\n  rotate: false\n  xy: 480, 6\n  size: 103, 104\n  orig: 105, 106\n  offset: 1, 1\n  index: -1\n左手\n  rotate: true\n  xy: 585, 16\n  size: 94, 202\n  orig: 96, 205\n  offset: 0, 3\n  index: -1\n眉毛\n  rotate: false\n  xy: 585, 3\n  size: 48, 11\n  orig: 51, 13\n  offset: 1, 1\n  index: -1\n眼框\n  rotate: true\n  xy: 1436, 8\n  size: 66, 64\n  orig: 68, 84\n  offset: 1, 1\n  index: -1\n眼珠\n  rotate: true\n  xy: 1675, 159\n  size: 52, 53\n  orig: 54, 55\n  offset: 1, 1\n  index: -1\n眼睫毛\n  rotate: false\n  xy: 1631, 37\n  size: 84, 37\n  orig: 86, 39\n  offset: 1, 1\n  index: -1\n眼睫闭\n  rotate: false\n  xy: 1539, 36\n  size: 90, 38\n  orig: 90, 38\n  offset: 0, 0\n  index: -1\n耳坠\n  rotate: true\n  xy: 789, 2\n  size: 30, 73\n  orig: 30, 73\n  offset: 0, 0\n  index: -1\n胸针\n  rotate: false\n  xy: 1502, 14\n  size: 35, 60\n  orig: 37, 62\n  offset: 1, 1\n  index: -1\n脸\n  rotate: true\n  xy: 1187, 156\n  size: 237, 175\n  orig: 239, 177\n  offset: 1, 1\n  index: -1\n腰牌\n  rotate: false\n  xy: 1677, 213\n  size: 51, 180\n  orig: 51, 180\n  offset: 0, 0\n  index: -1\n腿1\n  rotate: false\n  xy: 926, 145\n  size: 79, 248\n  orig: 79, 248\n  offset: 0, 0\n  index: -1\n腿2\n  rotate: true\n  xy: 789, 34\n  size: 90, 241\n  orig: 124, 550\n  offset: 0, 0\n  index: -1\n身体\n  rotate: false\n  xy: 754, 143\n  size: 170, 250\n  orig: 170, 250\n  offset: 0, 0\n  index: -1\n阴影\n  rotate: true\n  xy: 671, 119\n  size: 274, 81\n  orig: 276, 83\n  offset: 1, 1\n  index: -1\n飘带1\n  rotate: false\n  xy: 1364, 158\n  size: 78, 235\n  orig: 78, 235\n  offset: 0, 0\n  index: -1\n飘带3\n  rotate: true\n  xy: 1444, 322\n  size: 71, 231\n  orig: 71, 232\n  offset: 0, 1\n  index: -1\n马尾1\n  rotate: true\n  xy: 1032, 3\n  size: 145, 402\n  orig: 145, 402\n  offset: 0, 0\n  index: -1\n马尾2\n  rotate: false\n  xy: 2, 6\n  size: 137, 387\n  orig: 137, 408\n  offset: 0, 0\n  index: -1\n"
}
, function(e) {
    e.exports = JSON.parse('{"skeleton":{"hash":"OW5h4+wH4lkDIdOqA+8uNhL/t0Y","spine":"3.8.94","x":-746,"y":-376.59,"width":1440,"height":767.14},"bones":[{"name":"root","x":-745,"y":375},{"name":"you","parent":"root","x":1446.19,"y":21.41,"scaleY":1.02},{"name":"幕布2","parent":"you","length":187.24,"rotation":-90,"x":-17.45,"y":-9.3},{"name":"幕布3","parent":"幕布2","length":200.04,"rotation":-0.33,"x":187.24},{"name":"幕布4","parent":"幕布3","length":181.44,"rotation":-0.4,"x":200.04},{"name":"幕布5","parent":"幕布4","length":180.28,"rotation":1.47,"x":181.44},{"name":"bone","parent":"you","length":178,"rotation":-88.5,"x":-505.9,"y":-9.3},{"name":"bone2","parent":"bone","length":186.09,"rotation":-0.78,"x":178},{"name":"bone3","parent":"bone2","length":189.57,"rotation":-0.72,"x":186.09},{"name":"bone4","parent":"bone3","length":189.57,"rotation":-0.35,"x":189.57},{"name":"bone5","parent":"you","length":192.49,"rotation":-94.5,"x":-697.8,"y":-9.3},{"name":"bone6","parent":"bone5","length":194.5,"rotation":1.42,"x":192.58,"y":-1.16},{"name":"bone7","parent":"bone6","length":205.88,"rotation":2.11,"x":194.5},{"name":"bone8","parent":"bone7","length":155.86,"rotation":1.83,"x":205.88},{"name":"bone9","parent":"you","length":178,"rotation":-88.5,"x":-276.79,"y":-9.3},{"name":"bone10","parent":"bone9","length":186.09,"rotation":-0.78,"x":178},{"name":"bone11","parent":"bone10","length":189.57,"rotation":-0.72,"x":186.09},{"name":"bone12","parent":"bone11","length":189.57,"rotation":-0.35,"x":189.57},{"name":"zhuo","parent":"root","x":-27.29,"y":25,"scaleY":1.02},{"name":"zhuo2","parent":"zhuo","length":200.03,"rotation":-84.74,"x":751.53,"y":-14.66},{"name":"zhuo3","parent":"zhuo2","length":193.27,"rotation":-2.72,"x":200.03},{"name":"zhuo4","parent":"zhuo3","length":180.87,"rotation":-1.76,"x":193.27},{"name":"zhuo5","parent":"zhuo4","length":172.32,"rotation":-1.59,"x":180.87},{"name":"zhuo6","parent":"zhuo","length":191.87,"rotation":-89.27,"x":537.68,"y":-14.66},{"name":"zhuo7","parent":"zhuo6","length":184.59,"rotation":0.79,"x":191.87},{"name":"zhuo8","parent":"zhuo7","length":197.96,"rotation":-1.52,"x":184.59},{"name":"zhuo9","parent":"zhuo8","length":173.53,"rotation":0.4,"x":197.96},{"name":"zhuo10","parent":"zhuo","length":191.87,"rotation":-89.27,"x":299.39,"y":-14.66},{"name":"zhuo11","parent":"zhuo10","length":184.59,"rotation":0.79,"x":191.87},{"name":"zhuo12","parent":"zhuo11","length":197.96,"rotation":-1.52,"x":184.59},{"name":"zhuo13","parent":"zhuo12","length":173.53,"rotation":0.4,"x":197.96},{"name":"zhuo14","parent":"zhuo","length":191.87,"rotation":-89.27,"x":30.55,"y":-14.66},{"name":"zhuo15","parent":"zhuo14","length":184.59,"rotation":0.79,"x":191.87},{"name":"zhuo16","parent":"zhuo15","length":197.96,"rotation":-1.52,"x":184.59},{"name":"zhuo17","parent":"zhuo16","length":173.53,"rotation":0.4,"x":197.96}],"slots":[{"name":"幕布2","bone":"幕布2","attachment":"幕布2"},{"name":"幕布1","bone":"zhuo","attachment":"幕布1"}],"skins":[{"name":"default","attachments":{"幕布1":{"幕布1":{"type":"mesh","uvs":[0.14764,0.00025,0.40443,0.00068,0.57762,0.00098,0.82695,0.0014,0.97622,0.00165,0.98518,0.2259,0.99861,0.495,1,0.70997,1,1,0.8538,1,0.64926,1,0.34769,1,0.17899,1,0,1,0,0.72234,0,0.49345,0,0.21043,0,0,0.84627,0.22372,0.85232,0.49477,0.85364,0.71178,0.58661,0.21964,0.60001,0.49438,0.61774,0.7147,0.39393,0.21662,0.38355,0.49405,0.36998,0.71776,0.15081,0.2128,0.16706,0.49371,0.17882,0.72013],"triangles":[8,20,7,10,20,9,8,9,20,10,11,23,11,26,23,10,23,20,26,11,29,12,14,29,11,12,29,12,13,14,14,28,29,14,15,28,29,28,26,26,22,23,26,25,22,26,28,25,23,19,20,23,22,19,20,6,7,20,19,6,19,5,6,22,18,19,19,18,5,22,25,21,25,24,21,22,21,18,25,28,24,15,27,28,28,27,24,15,16,27,18,4,5,21,3,18,18,3,4,21,24,2,24,1,2,21,2,3,1,24,0,16,0,27,24,27,0,16,17,0],"vertices":[6,31,-3.71,110.81,0.52036,32,-194.03,113.49,0.03851,28,-201.15,-155.26,0.03096,27,-7.13,-158.01,0.38034,23,-10.17,-396.28,0.02973,19,-61.02,-607.19,0.00009,6,31,-0.83,310.83,0.15546,28,-195.53,44.7,0.02671,27,-4.26,42.01,0.56652,23,-7.29,-196.26,0.24696,24,-201.84,-193.5,0.00359,19,-42.36,-408.02,0.00077,5,28,-191.74,179.56,0.01631,27,-2.32,176.91,0.2942,23,-5.35,-61.36,0.50513,24,-198.05,-58.64,0.02613,19,-29.78,-273.7,0.15823,5,27,0.47,371.12,0.04745,23,-2.56,132.85,0.35466,24,-192.59,135.51,0.02227,20,-207.64,-90.27,0.03299,19,-11.66,-80.31,0.54263,4,27,2.14,487.39,0.00005,23,-0.89,249.12,0.12342,20,-202.3,25.89,0.00073,19,-0.82,35.46,0.8758,6,27,170.85,492.22,0,23,167.82,253.95,0.06025,24,-20.56,254.25,0.02227,21,-227.46,18.41,0.00795,20,-33.52,25.39,0.27558,19,167.75,26.96,0.63395,7,27,373.33,500.11,0,23,370.3,261.84,0,24,182.01,259.36,0.04332,25,-9.44,259.2,0.04552,21,-24.98,26.14,0.3074,20,169.1,26.89,0.35431,19,370.22,18.84,0.24945,7,27,534.99,499.13,0,23,531.96,260.86,0,25,152.21,260.28,0.08264,26,-43.92,260.6,0.01014,22,-44.87,23.8,0.27967,21,136.68,25.04,0.38525,20,330.65,20.82,0.24229,6,27,753.08,496.35,0,23,750.04,258.08,0,25,370.32,260.28,0,26,174.18,259.06,0.1079,22,173.21,26.9,0.55877,21,354.76,22.09,0.33333,8,30,175.06,383.46,0.0067,27,751.63,382.47,0,23,748.59,144.2,0,25,370.32,146.39,0.08264,26,173.38,145.17,0.33408,22,174.83,-86.99,0.44903,21,353.23,-91.79,0.1273,20,543.5,-102.61,0.00025,10,33,370.32,494.19,0.00004,34,175.83,492.96,0.00302,30,173.94,224.13,0.25978,29,370.32,225.35,0.01905,28,560.74,215.46,0.00007,27,749.6,223.15,0,23,746.56,-15.12,0,25,370.32,-12.94,0.17294,26,172.26,-14.15,0.37575,22,177.09,-246.3,0.16935,8,33,370.32,259.26,0.00364,34,174.18,258.04,0.13153,30,172.28,-10.79,0.37148,29,370.32,-9.58,0.24818,27,746.61,-11.76,0,23,743.57,-250.03,0,25,370.32,-247.87,0.00096,26,170.61,-249.08,0.24421,8,32,558.16,117.99,0.00062,33,370.32,127.84,0.11119,34,173.25,126.63,0.40595,30,171.36,-142.21,0.39756,29,370.32,-141,0.08334,28,551.04,-150.75,0.00134,27,744.93,-143.16,0,23,741.9,-381.44,0,6,33,370.32,-11.59,0.33813,34,172.27,-12.8,0.50468,30,170.38,-281.64,0.15712,29,370.32,-280.43,0.00008,27,743.16,-282.58,0,23,740.12,-520.86,0,8,32,345.74,-15.86,0.23169,33,161.52,-11.59,0.37648,34,-36.53,-11.33,0.27442,30,-38.42,-280.16,0.03278,29,161.52,-280.43,0.08328,28,338.62,-284.61,0.00134,27,534.37,-279.93,0,23,531.34,-518.2,0,7,31,365.69,-8.91,0.25004,32,173.68,-11.3,0.31757,33,-10.61,-11.59,0.32444,29,-10.61,-280.43,0.04219,28,166.56,-280.05,0.06575,27,362.26,-277.73,0,23,359.23,-516,0,7,31,152.87,-6.2,0.61489,32,-39.08,-5.67,0.26958,33,-223.43,-11.59,0.01893,28,-46.2,-274.41,0.03096,27,149.45,-275.02,0.06563,23,146.42,-513.29,0,19,85.84,-736.2,0,4,31,-5.36,-4.19,0.87395,27,-8.78,-273.01,0.12604,23,-11.82,-511.28,0.00001,19,-71.74,-721.7,0,8,28,-18.75,384.34,0.01305,27,167.84,384.04,0.02128,23,164.8,145.77,0.26693,24,-25.06,146.13,0.07337,25,-213.44,140.53,0.03642,21,-230.56,-89.77,0.03955,20,-39.95,-82.63,0.11621,19,156.2,-80.64,0.43319,11,29,-9.61,383.53,0.01307,28,185.13,383.65,0.01781,27,371.71,386.16,0,23,368.68,147.89,0.04814,24,178.82,145.44,0.15002,25,-9.61,145.24,0.17389,26,-206.55,146.7,0.0081,22,-205.05,-93.52,0.02396,21,-26.69,-87.81,0.14775,20,163.89,-86.95,0.30961,19,359.6,-94.63,0.10765,11,30,-41.68,384.86,0.00491,29,153.58,384.56,0.01524,28,348.29,380.35,0.00005,27,534.9,385.11,0,23,531.87,146.84,0,24,341.98,142.15,0.03465,25,153.58,146.27,0.24088,26,-43.36,146.58,0.11385,22,-41.89,-90.18,0.15944,21,136.5,-88.99,0.34139,20,326.96,-93.14,0.08958,9,29,-216.51,176.54,0.01307,28,-27.17,182.21,0.05223,27,162.2,181.82,0.22269,23,159.16,-56.45,0.36671,24,-33.48,-56,0.13914,25,-216.51,-61.75,0.07136,26,-414.9,-58.83,0.0002,20,-51.97,-284.58,0.02639,19,134.61,-281.79,0.10819,11,30,-206.55,188.44,0.00491,29,-9.91,186.98,0.05716,28,179.63,187.18,0.19582,27,368.91,189.63,0.02125,23,365.88,-48.64,0.1448,24,173.32,-51.03,0.15638,25,-9.91,-51.31,0.24907,26,-208.23,-49.84,0.04168,21,-29.64,-284.33,0.03955,20,154.9,-283.29,0.08938,19,341.3,-290.32,0,11,30,-40.78,201.08,0.01027,29,155.77,200.79,0.22681,28,345.62,196.59,0.01787,27,534.75,201.32,0,23,531.72,-36.95,0,24,339.31,-41.61,0.09756,25,155.77,-37.5,0.2766,26,-42.46,-37.2,0.24491,22,-37.09,-273.9,0.02396,21,136.21,-272.77,0.10184,20,321.02,-276.83,0.0002,10,31,161.43,300.58,0.09192,32,-26.3,300.97,0.03081,29,-218.78,26.44,0.02885,28,-33.42,32.22,0.2241,27,158.01,31.76,0.41342,23,154.97,-206.51,0.18082,24,-39.73,-205.98,0.02704,25,-218.78,-211.85,0.00295,26,-418.23,-208.91,0.00003,19,118.59,-431.05,0.00008,11,31,369.94,289.84,0.00003,32,182.04,287.36,0.0692,33,-10.16,287.19,0.04441,29,-10.16,18.35,0.27417,28,174.92,18.62,0.25669,27,366.51,21.02,0.16351,23,363.48,-217.25,0.01225,24,168.61,-219.59,0.10369,25,-10.16,-219.94,0.07508,26,-209.67,-218.46,0.00096,19,325.6,-458.22,0,11,32,349.93,272.34,0.0005,33,158.08,276.62,0.08608,34,-37.94,276.9,0.02195,30,-39.83,8.07,0.22868,29,158.08,7.78,0.30922,28,342.81,3.6,0.16603,27,534.6,8.31,0,23,531.57,-229.96,0,24,336.5,-234.61,0.00326,25,158.08,-230.51,0.14207,26,-41.51,-230.22,0.0422,9,31,156.15,111.25,0.41632,32,-34.19,111.73,0.10001,33,-221.65,105.9,0.04441,29,-221.65,-162.94,0.03375,28,-41.3,-157.02,0.09874,27,152.73,-157.57,0.29164,23,149.69,-395.84,0.01225,24,-47.61,-395.22,0.00287,19,98.38,-619.37,0,13,31,367.54,121.21,0.09195,32,177.32,118.79,0.28537,33,-10.41,118.55,0.1456,34,-207.54,120.02,0.01953,30,-209.43,-148.82,0.02623,29,-10.41,-150.29,0.12923,28,170.2,-149.96,0.24334,27,364.11,-147.61,0.0525,23,361.08,-385.88,0.00001,24,163.89,-388.17,0.00326,25,-10.41,-388.58,0.00295,26,-211.11,-387.1,0.00003,19,309.89,-626.13,0,11,31,537.91,128.2,0.00003,32,347.77,123.43,0.0697,33,159.85,127.71,0.33334,34,-37.21,127.98,0.12234,30,-39.1,-140.86,0.1205,29,159.85,-141.13,0.29892,28,340.65,-145.31,0.05367,27,534.48,-140.61,0,23,531.45,-378.89,0,25,159.85,-379.42,0.00077,26,-40.78,-379.14,0.00073],"hull":18}},"幕布2":{"幕布2":{"type":"mesh","uvs":[0.8686,0,0.60839,0,0.44021,0,0.1689,0,0.02927,0,0.01521,0.23846,0,0.49654,0,0.76874,0,1,0.14986,1,0.38785,1,0.6433,1,0.86701,1,1,1,1,0.77492,1,0.50428,1,0.25528,1,0,0.15131,0.24079,0.14033,0.49763,0.13887,0.76959,0.4226,0.24542,0.40694,0.49969,0.38939,0.77114,0.61644,0.24873,0.62743,0.5014,0.63387,0.77266,0.86065,0.2529,0.85599,0.50316,0.85912,0.77405],"triangles":[12,14,13,11,29,12,12,29,14,11,10,26,10,23,26,11,26,29,10,9,23,8,20,9,9,20,23,8,7,20,29,15,14,26,28,29,29,28,15,23,22,26,22,25,26,26,25,28,22,23,19,23,20,19,20,7,19,7,6,19,15,28,16,28,27,16,28,25,27,25,22,24,22,21,24,25,24,27,19,18,22,22,18,21,6,5,19,19,5,18,27,0,16,0,17,16,27,24,0,21,2,24,2,1,24,24,1,0,18,3,21,21,3,2,5,4,18,18,4,3],"vertices":[7,2,-3.57,-86.06,0.5114,3,-190.31,-87.17,0.08675,5,-573.29,-75.18,0,15,-179.38,170.89,0.04607,14,0.96,173.32,0.34768,6,6.95,402.35,0.00811,10,-50.23,592.18,0,7,2,-3.57,-276.79,0.17931,5,-575.75,-265.9,0,15,-181.77,-19.83,0.17775,14,-4.02,-17.35,0.45838,6,1.97,211.69,0.17952,7,-178.9,209.27,0.00501,10,-35.25,402.03,0.00003,7,2,-3.57,-400.07,0.00001,5,-577.34,-389.17,0,15,-183.31,-143.09,0.03182,14,-7.24,-140.58,0.35145,6,-1.26,88.45,0.34859,7,-180.45,86,0.11561,10,-25.57,279.14,0.15251,7,2,-3.57,-598.94,0.00001,5,-579.91,-588.02,0,14,-12.44,-339.39,0.08161,6,-6.45,-110.35,0.30161,7,-182.93,-112.86,0.05337,11,-200.44,87.03,0.04983,10,-9.95,80.88,0.51357,6,2,-3.57,-701.29,0,5,-581.23,-690.36,0,14,-15.12,-441.7,0.0001,6,-9.13,-212.66,0.13022,11,-194.93,-15.16,0.00832,10,-1.91,-21.15,0.86136,7,2,175.76,-711.59,0,5,-402.05,-702.98,0,14,163.88,-456.68,0,6,169.86,-227.65,0.03574,7,-5.03,-227.74,0.05337,11,-15.31,-15.8,0.30607,10,177.67,-17.34,0.60482,7,2,369.83,-722.75,0,5,-208.14,-716.63,0,7,188.89,-241.32,0.0416,8,5.81,-241.26,0.04648,12,-16.01,-15.92,0.30818,11,179.09,-16.5,0.35997,10,372.02,-13.21,0.24376,8,2,574.52,-722.75,0,5,-3.47,-719.27,0,17,23.82,-470.24,0,8,210.5,-241.26,0.03014,9,22.41,-241.13,0.06323,13,-17.62,-11.89,0.29958,12,188.64,-12.45,0.35705,11,383.48,-5.48,0.25,6,2,748.43,-722.75,0,5,170.43,-721.52,0,17,197.73,-469.17,0.00009,9,196.32,-240.06,0.13863,13,156.27,-14.49,0.52794,12,362.53,-9.5,0.33333,7,2,748.43,-612.9,0,5,171.85,-611.68,0,17,197.05,-359.33,0.02917,8,384.41,-131.42,0.03016,9,195.65,-130.22,0.38776,13,157.91,95.35,0.44586,12,360.67,100.33,0.10705,8,2,748.43,-438.45,0,5,174.1,-437.24,0.00062,17,195.98,-184.88,0.2948,16,384.41,-186.08,0.01746,8,384.41,43.03,0.09119,9,194.58,44.23,0.44965,13,160.51,269.78,0.14629,10,727.12,299.94,0,7,2,748.43,-251.21,0,5,176.51,-250.02,0.17536,17,194.83,2.36,0.6018,8,384.41,230.27,0.00111,9,193.43,231.46,0.22141,13,163.3,457,0.00033,10,712.41,486.61,0,7,2,748.43,-87.22,0,4,362.23,-81.43,0.06917,5,178.63,-86.05,0.52537,17,193.83,166.34,0.38497,16,384.41,165.15,0.02049,8,384.41,394.26,0,10,699.53,650.08,0,5,2,748.43,10.25,0,4,360.98,16.05,0.02868,5,179.89,11.42,0.87097,17,193.23,263.82,0.10035,10,691.88,747.26,0,6,2,579.17,10.25,0,3,391.86,12.53,0.24144,4,191.73,13.88,0.09925,5,10.64,13.61,0.5785,17,23.97,262.78,0.06032,16,215.15,262.63,0.02049,7,2,375.65,10.25,0.11062,3,188.34,11.35,0.48199,4,-11.78,11.27,0.09375,5,-192.86,16.23,0.22849,17,-179.55,261.53,0.00043,16,11.63,262.63,0.04547,15,201.01,262.46,0.03925,8,2,188.41,10.25,0.44272,3,1.1,10.26,0.46756,4,-199,8.87,0.00856,5,-380.09,18.65,0,15,13.78,264.8,0.04607,14,195.39,264.59,0.03508,6,201.38,493.62,0,10,133.58,703.27,0,6,2,-3.57,10.25,0.7199,3,-190.87,9.15,0.18584,5,-572.05,21.13,0,14,3.48,269.6,0.09423,6,9.47,498.64,0.00004,10,-57.8,688.2,0,10,2,177.5,-611.83,0,5,-399.02,-603.25,0,15,-4.9,-357.1,0.02546,14,168.23,-357,0.0224,6,174.22,-127.97,0.16609,7,-2.03,-128.01,0.16847,8,-186.51,-130.35,0.03719,12,-210.2,91.72,0.04655,11,-18.93,83.91,0.12784,10,171.57,82.25,0.40602,14,2,370.65,-619.89,0,5,-205.99,-613.79,0,17,-180.68,-368.63,0,16,6.63,-367.51,0.02369,15,188.13,-367.57,0.01305,14,361.1,-370.1,0,6,367.09,-141.07,0.02842,7,191,-138.48,0.14838,8,6.63,-138.4,0.15217,9,-182.09,-139.52,0.05058,13,-219.94,94,0.03966,12,-16.94,86.94,0.13218,11,174.37,86.26,0.32284,10,364.76,89.4,0.08903,10,2,575.17,-620.95,0,5,-1.51,-617.49,0,17,23.84,-368.44,0.01305,16,211.15,-368.58,0.01396,7,395.48,-142.1,0.03328,8,211.15,-139.47,0.13424,9,22.44,-139.33,0.23387,13,-15.46,89.88,0.15643,12,187.56,89.35,0.33218,11,378.64,96.2,0.08298,9,2,180.99,-412.98,0.00001,16,-183.03,-160.61,0.02369,15,1.07,-158.31,0.1807,14,176.91,-158.31,0.13897,6,182.9,70.72,0.22527,7,3.94,70.78,0.21159,8,-183.03,68.5,0.09086,11,-26.15,282.66,0.03986,10,159.43,280.77,0.08905,13,2,372.2,-424.46,0,5,-201.92,-418.4,0,17,-180.33,-173.2,0.01299,16,8.18,-172.09,0.20797,15,192.12,-172.18,0.06454,14,367.76,-174.78,0.02234,6,373.75,54.25,0.05972,7,194.99,56.92,0.19989,8,8.18,57.02,0.20293,9,-181.73,55.91,0.1001,12,-18.7,282.37,0.04655,11,165.4,281.49,0.08298,10,350.95,284.34,0,10,2,576.33,-437.32,0,5,2.03,-433.89,0,17,23.88,-184.81,0.23472,16,212.31,-184.95,0.03765,15,396.08,-187.59,0.01305,7,398.94,41.5,0.0724,8,212.31,44.16,0.1888,9,22.47,44.3,0.32781,13,-11.55,273.47,0.03992,12,185.62,272.97,0.08564,10,2,183.48,-270.89,0.06568,3,-2.19,-270.91,0.0694,5,-388.65,-262.41,0,16,-180.54,-18.52,0.17032,15,5.34,-16.26,0.23055,14,183.11,-16.33,0.29535,6,189.1,212.7,0.06857,7,8.2,212.83,0.09821,8,-180.54,210.59,0.00193,10,150.75,422.61,0,12,3,187.76,-261.75,0.08094,4,-10.44,-261.83,0.05094,17,-180.04,-11.57,0.19879,16,9.46,-10.47,0.23038,15,195.43,-10.59,0.21269,14,373.26,-13.25,0.0514,6,379.25,215.78,0.00239,7,198.29,218.51,0.07812,8,9.46,218.64,0.09367,9,-181.44,217.53,0.00068,13,-211.78,450.96,0,10,339.53,445.56,0,11,2,577.47,-258.12,0,4,193.47,-254.49,0.05534,5,5.48,-254.72,0.0805,17,23.92,-5.6,0.4592,16,213.45,-5.74,0.20067,15,399.46,-8.41,0.02604,7,402.32,220.68,0.00171,8,213.45,223.37,0.07575,9,22.51,223.51,0.10079,13,-7.74,452.64,0,10,542.52,466.29,0,11,2,186.62,-91.89,0.29762,3,-0.09,-91.89,0.26184,4,-199.48,-93.29,0.05094,5,-383.2,-83.46,0,17,-367.95,158.23,0.00034,16,-177.4,160.48,0.03637,15,10.71,162.69,0.21046,14,190.93,162.53,0.13601,6,196.92,391.56,0.00241,7,13.57,391.78,0.00401,10,139.82,601.31,0,12,2,374.81,-95.3,0.06568,3,188.12,-94.21,0.34349,4,-11.26,-94.29,0.11313,5,-195.06,-89.31,0.08001,17,-179.74,155.97,0.0486,16,10.79,157.07,0.22308,15,198.85,156.92,0.0943,14,378.97,154.19,0.02807,6,384.96,383.23,0,7,201.71,386.01,0.00171,8,10.79,386.18,0.00193,10,327.7,612.68,0,11,2,578.52,-93.01,0,3,391.81,-90.74,0.08094,4,192.4,-89.39,0.12349,5,8.66,-89.64,0.40259,17,23.95,159.51,0.30725,16,214.5,159.36,0.05277,15,402.57,156.66,0.0314,8,214.5,388.47,0.00087,9,22.55,388.61,0.00068,13,-4.23,617.71,0,10,530.6,630.97,0],"hull":18}}}}],"animations":{"in":{"bones":{"zhuo10":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.3333,"angle":-9.83,"curve":0.25,"c3":0.75},{"time":0.7333,"angle":6.61,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":-1.84,"curve":0.25,"c3":0.75},{"time":1.5}],"translate":[{"x":-232.18,"curve":0.25,"c3":0.75},{"time":0.6333,"x":6.11,"curve":0.25,"c3":0.75},{"time":1.0333}]},"zhuo6":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.2667,"angle":-14.09,"curve":0.25,"c3":0.75},{"time":0.6,"angle":6.61,"curve":0.25,"c3":0.75},{"time":1,"angle":-1.84,"curve":0.25,"c3":0.75},{"time":1.3667}],"translate":[{"x":-421.59,"curve":0.25,"c3":0.75},{"time":0.5667,"x":19.55,"curve":0.25,"c3":0.75},{"time":1}]},"zhuo2":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.1667,"angle":-14.09,"curve":0.25,"c3":0.75},{"time":0.4333,"angle":6.61,"curve":0.25,"c3":0.75},{"time":0.8,"angle":-1.84,"curve":0.25,"c3":0.75},{"time":1.0333}],"translate":[{"x":-598.78,"curve":0.25,"c3":0.75},{"time":0.4667,"x":25.66,"curve":0.25,"c3":0.75},{"time":0.9}]},"zhuo":{"translate":[{"x":-172.3,"curve":0.25,"c3":0.75},{"time":0.4667}]},"zhuo11":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.4333,"angle":-9.83,"curve":0.25,"c3":0.75},{"time":0.8333,"angle":6.61,"curve":0.25,"c3":0.75},{"time":1.2333,"angle":-1.84,"curve":0.25,"c3":0.75},{"time":1.6}]},"zhuo12":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.5667,"angle":-9.83,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":6.61,"curve":0.25,"c3":0.75},{"time":1.3667,"angle":-1.84,"curve":0.25,"c3":0.75},{"time":1.7333}]},"zhuo13":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.6667,"angle":-9.83,"curve":0.25,"c3":0.75},{"time":1.0667,"angle":7.12,"curve":0.25,"c3":0.75},{"time":1.4667,"angle":-1.84,"curve":0.25,"c3":0.75},{"time":1.8333}]},"zhuo9":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.6333,"angle":-10.41,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":10.38,"curve":0.25,"c3":0.75},{"time":1.3667,"angle":-2.97,"curve":0.25,"c3":0.75},{"time":1.7333}]},"zhuo8":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.4667,"angle":-10.41,"curve":0.25,"c3":0.75},{"time":0.8,"angle":8.6,"curve":0.25,"c3":0.75},{"time":1.2,"angle":-1.84,"curve":0.25,"c3":0.75},{"time":1.6}]},"zhuo7":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.3333,"angle":-10.41,"curve":0.25,"c3":0.75},{"time":0.6667,"angle":6.61,"curve":0.25,"c3":0.75},{"time":1.0667,"angle":-1.84,"curve":0.25,"c3":0.75},{"time":1.4667}]},"zhuo3":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.2667,"angle":-13.09,"curve":0.25,"c3":0.75},{"time":0.6,"angle":6.59,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":-1.84,"curve":0.25,"c3":0.75},{"time":1.2333}]},"zhuo4":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.3667,"angle":-13.09,"curve":0.25,"c3":0.75},{"time":0.7,"angle":14.4,"curve":0.25,"c3":0.75},{"time":1.0667,"angle":-1.84,"curve":0.25,"c3":0.75},{"time":1.3667}]},"zhuo5":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.4667,"angle":-13.09,"curve":0.25,"c3":0.75},{"time":0.8,"angle":21.78,"curve":0.25,"c3":0.75},{"time":1.2,"angle":-3.41,"curve":0.25,"c3":0.75},{"time":1.4667}]},"you":{"translate":[{"x":122.21,"curve":0.25,"c3":0.75},{"time":0.3667}]},"bone5":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.1667,"angle":15.66,"curve":0.25,"c3":0.75},{"time":0.5333,"angle":-5.27,"curve":0.25,"c3":0.75},{"time":0.9,"angle":1.92,"curve":0.25,"c3":0.75},{"time":1.2333}],"translate":[{"x":594.05,"curve":0.25,"c3":0.75},{"time":0.3667,"x":-55.69,"curve":0.25,"c3":0.75},{"time":0.8}]},"bone":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.2667,"angle":12.41,"curve":0.25,"c3":0.75},{"time":0.6333,"angle":-5.27,"curve":0.25,"c3":0.75},{"time":1,"angle":1.92,"curve":0.25,"c3":0.75},{"time":1.3333}],"translate":[{"x":428.52,"curve":0.25,"c3":0.75},{"time":0.4333,"x":-34.03,"curve":0.25,"c3":0.75},{"time":0.8667}]},"bone9":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.3667,"angle":10.39,"curve":0.25,"c3":0.75},{"time":0.7333,"angle":-5.27,"curve":0.25,"c3":0.75},{"time":1.1,"angle":1.92,"curve":0.25,"c3":0.75},{"time":1.4333}],"translate":[{"x":227.41,"curve":0.25,"c3":0.75},{"time":0.5667,"x":-9.28,"curve":0.25,"c3":0.75},{"time":1}]},"bone10":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.4333,"angle":10.39,"curve":0.25,"c3":0.75},{"time":0.8,"angle":-3.67,"curve":0.25,"c3":0.75},{"time":1.2,"angle":1.92,"curve":0.25,"c3":0.75},{"time":1.5333}]},"bone11":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.5667,"angle":10.39,"curve":0.25,"c3":0.75},{"time":0.9333,"angle":-3.67,"curve":0.25,"c3":0.75},{"time":1.3,"angle":2.97,"curve":0.25,"c3":0.75},{"time":1.6333}]},"bone12":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.6667,"angle":10.39,"curve":0.25,"c3":0.75},{"time":1.0333,"angle":-3.67,"curve":0.25,"c3":0.75},{"time":1.4,"angle":3.4,"curve":0.25,"c3":0.75},{"time":1.7333}]},"bone4":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.5333,"angle":12.41,"curve":0.25,"c3":0.75},{"time":0.9,"angle":-5.62,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":8.83,"curve":0.25,"c3":0.75},{"time":1.6}]},"bone3":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.4333,"angle":12.41,"curve":0.25,"c3":0.75},{"time":0.8,"angle":-5.62,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":3.98,"curve":0.25,"c3":0.75},{"time":1.5}]},"bone2":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.3333,"angle":12.41,"curve":0.25,"c3":0.75},{"time":0.7,"angle":-5.62,"curve":0.25,"c3":0.75},{"time":1.0667,"angle":3.02,"curve":0.25,"c3":0.75},{"time":1.4}]},"bone6":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.2667,"angle":15.66,"curve":0.25,"c3":0.75},{"time":0.6333,"angle":-11.28,"curve":0.25,"c3":0.75},{"time":1,"angle":4.03,"curve":0.25,"c3":0.75},{"time":1.3667}]},"bone7":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.4333,"angle":15.66,"curve":0.25,"c3":0.75},{"time":0.8,"angle":-11.28,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":4.03,"curve":0.25,"c3":0.75},{"time":1.5}]},"bone8":{"rotate":[{"curve":0.25,"c3":0.75},{"time":0.5667,"angle":15.66,"curve":0.25,"c3":0.75},{"time":0.9333,"angle":-11.28,"curve":0.25,"c3":0.75},{"time":1.3,"angle":4.03,"curve":0.25,"c3":0.75},{"time":1.6333}]}}},"out":{"bones":{"zhuo":{"translate":[{"curve":0.542,"c3":0.847},{"time":0.6667,"x":-314.24}]},"zhuo6":{"rotate":[{"time":0.1333,"curve":0.25,"c3":0.75},{"time":0.5667,"angle":6.96,"curve":0.25,"c3":0.75},{"time":1.0667,"angle":-3.21}],"translate":[{"curve":0.542,"c3":0.847},{"time":0.7333,"x":-448.92}]},"zhuo2":{"rotate":[{"time":0.0667,"curve":0.25,"c3":0.75},{"time":0.5,"angle":6.96,"curve":0.25,"c3":0.75},{"time":1,"angle":-3.21}],"translate":[{"curve":0.542,"c3":0.847},{"time":0.6667,"x":-623.84}]},"zhuo10":{"rotate":[{"time":0.1333,"curve":0.25,"c3":0.75},{"time":0.5667,"angle":6.96,"curve":0.25,"c3":0.75},{"time":1.0667,"angle":-3.21}],"translate":[{"curve":0.542,"c3":0.847},{"time":0.7333,"x":-241.49}]},"bone5":{"rotate":[{"time":0.0667,"curve":0.25,"c3":0.75},{"time":0.4667,"angle":-7.47,"curve":0.25,"c3":0.75},{"time":0.9667,"angle":6.33}],"translate":[{"curve":0.542,"c3":0.847},{"time":0.6667,"x":602.17}]},"bone":{"rotate":[{"time":0.1333,"curve":0.25,"c3":0.75},{"time":0.5333,"angle":-5.1,"curve":0.25,"c3":0.75},{"time":1.0333,"angle":3.28}],"translate":[{"time":0.0667,"curve":0.542,"c3":0.847},{"time":0.7333,"x":433.44}]},"bone9":{"rotate":[{"time":0.2,"curve":0.25,"c3":0.75},{"time":0.6,"angle":-5.1,"curve":0.25,"c3":0.75},{"time":1.1,"angle":3.28}],"translate":[{"time":0.1,"curve":0.542,"c3":0.847},{"time":0.7333,"x":230.65}]},"you":{"translate":[{"curve":0.542,"c3":0.847},{"time":0.6667,"x":227.56}]},"zhuo3":{"rotate":[{"time":0.1333,"curve":0.25,"c3":0.75},{"time":0.5667,"angle":19.18,"curve":0.25,"c3":0.75},{"time":1.0667,"angle":-7.98}]},"zhuo4":{"rotate":[{"time":0.2333,"curve":0.25,"c3":0.75},{"time":0.6667,"angle":22.01,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":-7.98}]},"zhuo5":{"rotate":[{"time":0.3,"curve":0.25,"c3":0.75},{"time":0.7333,"angle":16.94,"curve":0.25,"c3":0.75},{"time":1.2333,"angle":-7.98}]},"bone2":{"rotate":[{"time":0.2,"curve":0.25,"c3":0.75},{"time":0.6,"angle":-12.94,"curve":0.25,"c3":0.75},{"time":1.1,"angle":3.96}]},"bone3":{"rotate":[{"time":0.2667,"curve":0.25,"c3":0.75},{"time":0.6667,"angle":-12.94,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":3.96}]},"bone4":{"rotate":[{"time":0.3333,"curve":0.25,"c3":0.75},{"time":0.7333,"angle":-12.94,"curve":0.25,"c3":0.75},{"time":1.2333,"angle":3.96}]},"bone10":{"rotate":[{"time":0.2667,"curve":0.25,"c3":0.75},{"time":0.6667,"angle":-5.1,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":3.28}]},"bone11":{"rotate":[{"time":0.3333,"curve":0.25,"c3":0.75},{"time":0.7333,"angle":-5.1,"curve":0.25,"c3":0.75},{"time":1.2333,"angle":3.28}]},"bone12":{"rotate":[{"time":0.4,"curve":0.25,"c3":0.75},{"time":0.8,"angle":-5.1,"curve":0.25,"c3":0.75},{"time":1.3,"angle":3.28}]},"bone6":{"rotate":[{"time":0.1333,"curve":0.25,"c3":0.75},{"time":0.5333,"angle":-17.94,"curve":0.25,"c3":0.75},{"time":1.0333,"angle":6.81}]},"bone7":{"rotate":[{"time":0.2,"curve":0.25,"c3":0.75},{"time":0.6,"angle":-17.94,"curve":0.25,"c3":0.75},{"time":1.1,"angle":6.81}]},"bone8":{"rotate":[{"time":0.2667,"curve":0.25,"c3":0.75},{"time":0.6667,"angle":-17.94,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":6.81}]},"zhuo11":{"rotate":[{"time":0.1333,"curve":0.25,"c3":0.75},{"time":0.5667,"angle":4.66,"curve":0.25,"c3":0.75},{"time":1.0667,"angle":-3.21}]},"zhuo12":{"rotate":[{"time":0.2,"curve":0.25,"c3":0.75},{"time":0.6333,"angle":4.66,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":-3.21}]},"zhuo13":{"rotate":[{"time":0.2333,"curve":0.25,"c3":0.75},{"time":0.6667,"angle":4.66,"curve":0.25,"c3":0.75},{"time":1.1667,"angle":-3.21}]},"zhuo9":{"rotate":[{"time":0.2,"curve":0.25,"c3":0.75},{"time":0.6333,"angle":11.6,"curve":0.25,"c3":0.75},{"time":1.1333,"angle":-5.08}]},"zhuo8":{"rotate":[{"time":0.2667,"curve":0.25,"c3":0.75},{"time":0.7,"angle":12.89,"curve":0.25,"c3":0.75},{"time":1.2,"angle":-5.08}]},"zhuo7":{"rotate":[{"time":0.3333,"curve":0.25,"c3":0.75},{"time":0.7667,"angle":11.6,"curve":0.25,"c3":0.75},{"time":1.2667,"angle":-5.08}]}}}}}')
}
, function(e, c) {
    e.exports = "\nwiemu.png\nsize: 1518,756\nformat: RGBA8888\nfilter: Linear,Linear\nrepeat: none\n幕布1\n  rotate: false\n  xy: 2, 2\n  size: 779, 752\n  orig: 779, 752\n  offset: 0, 0\n  index: -1\n幕布2\n  rotate: false\n  xy: 783, 2\n  size: 733, 752\n  orig: 733, 752\n  offset: 0, 0\n  index: -1\n"
}
, function(e, c, t) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
        value: !0
    });
    var n = t(70);
    c.MaskPass = function(e, c, a) {
        var r = e;
        this.percent = {
            value: 0
        },
        this.mode = {
            value: 1
        },
        this.center = {
            value: new n.Vector2(.5,.5)
        };
        var i = new n.ShaderMaterial({
            vertexShader: t(166),
            fragmentShader: t(654),
            transparent: !0,
            uniforms: {
                diffuse: {
                    value: c.texture
                },
                diffuse2: {
                    value: a.texture
                },
                center: this.center,
                percent: this.percent,
                aspect: {
                    value: 1
                },
                mode: this.mode
            }
        });
        i.defines.USE_TEXTURE = 1;
        var l = new n.OrthographicCamera(-1,1,1,-1,0,1)
          , u = new n.Scene
          , g = new n.Mesh(new n.PlaneBufferGeometry(2,2),i);
        u.add(g),
        u.autoUpdate = !1,
        this.setResolution = function(e, c) {
            i.uniforms.aspect.value = c / e
        }
        ,
        this.render = function(e) {
            var c = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            r.render(u, l, e, c)
        }
    }
}
, function(e, c) {
    e.exports = "//当前场景贴图输入\nuniform sampler2D diffuse;\n\n//下一个场景贴图输入\nuniform sampler2D diffuse2;\n\n//百分比 用于控制mask 动画的过程\nuniform float percent;\n\n//用于控制是mask显示 = 1还是 alpha叠加 = 0\nuniform float mode;\n\n//场景比例 用于计算圆大小\nuniform float aspect;\n\n//mask中心点\nuniform vec2 center;\n\nvarying vec2 vUv;\n\nvoid main(){\n  vec4 color = texture2D(diffuse, vUv);\n  vec4 color2 = texture2D(diffuse2, vUv);\n\n  float threshold = step(percent,length((vUv-center)*vec2(1.,aspect)));\n  \n  gl_FragColor = mix(color2,color,mix(color.a,threshold,mode));\n}\n"
}
, function(e, c, t) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
        value: !0
    });
    var n = t(168).TweenMax;
    c.default = {
        NONE: function() {},
        BAR_ON_PROGRESS: function(e) {
            n.to(this.material.uniforms.percent, .5, {
                value: e.progress / 100,
                overwrite: !0
            })
        },
        WENZI_ON_PROGRESS: function(e) {
            n.to(this.position, .5, {
                x: this.userData.initPos.x + 6.7 * e.progress,
                overwrite: !0
            })
        }
    }
}
, function(e, c, t) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
        value: !0
    });
    var n = t(70);
    c.default = {
        BASIC: new n.ShaderMaterial({
            vertexShader: t(166),
            fragmentShader: t(657),
            uniforms: {
                opacity: {
                    value: 1
                },
                color: {
                    value: new n.Color(0)
                }
            }
        }),
        LOADING: new n.ShaderMaterial({
            vertexShader: t(166),
            fragmentShader: t(658),
            side: n.DoubleSide,
            uniforms: {
                outline: {
                    value: new n.Color(14603457)
                },
                stroke: {
                    value: new n.Color(4661548)
                },
                body: {
                    value: new n.Color(14736586)
                },
                bar: {
                    value: new n.Color(12217178)
                },
                opacity: {
                    value: 1
                },
                percent: {
                    value: 0
                }
            }
        })
    }
}
, function(e, c) {
    e.exports = "#ifdef USE_TEXTURE\r\n  uniform sampler2D diffuse;\r\n  varying vec2 vUv;\r\n#else\r\n  uniform vec3 color;\r\n#endif\r\n\r\n#ifdef USE_BACK\r\n  uniform vec3 back;\r\n#endif\r\n\r\nuniform float opacity;\r\n\r\nvoid main(){\r\n  #ifdef USE_TEXTURE\r\n    gl_FragColor = texture2D(diffuse,vUv);\r\n  #else\r\n    gl_FragColor = vec4(color,1.);\r\n  #endif\r\n\r\n  #ifdef USE_BACK\r\n    gl_FragColor.rgb = mix(back,gl_FragColor.rgb,vec3(gl_FrontFacing));\r\n  #endif\r\n\r\n  #ifdef ALPHA_TEST\r\n      if(gl_FragColor.a<.5){\r\n    discard;\r\n}\r\n\r\n  #endif\r\n  gl_FragColor.a*=opacity;\r\n\r\n}\r\n\r\n"
}
, function(e, c) {
    e.exports = "uniform sampler2D diffuse;\r\nuniform float percent;\r\n\r\nuniform vec3 outline;\r\nuniform vec3 stroke;\r\nuniform vec3 body;\r\nuniform vec3 bar;\r\n\r\nvarying vec2 vUv;\r\n\r\nvoid main(){ \r\n  vec4 baseColor = texture2D(diffuse,vUv);\r\n  gl_FragColor = vec4(mix(mix(outline,stroke,baseColor.g),mix(bar,body,step(percent,vUv.x)),baseColor.r),baseColor.a);\r\n}\r\n"
}
, function(e, c, t) {
    "use strict";
    var n = t(104);
    t.n(n).a
}
, function(e, c, t) {}
, function(e, c, t) {
    e.exports = t.p + "images/modal-award.81f56459.png"
}
, function(e, c, t) {
    "use strict";
    t.r(c);
    var n = t(173)
      , a = t(105);
    for (var r in a)
        "default" !== r && function(e) {
            t.d(c, e, (function() {
                return a[e]
            }
            ))
        }(r);
    var i = t(20)
      , l = Object(i.a)(a.default, n.a, n.b, !1, null, null, null);
    l.options.__file = "src/main/about/about.vue",
    c.default = l.exports
}
, function(e, c, t) {}
, function(e, c, t) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
        value: !0
    }),
    c.beforeRouterUpdate = function(e, c, t) {
        0 === e.matched.length ? c.path ? t(!1) : t("/") : t()
    }
    ,
    c.afterRouterUpdate = function(e, c) {}
}
, , , function(e, c, t) {
    "use strict";
    var n = i(t(668))
      , a = i(t(669))
      , r = i(t(670));
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = navigator.userAgent.toLowerCase()
      , u = function(e) {
        return e.test(l)
    }
      , g = u(/windows|win32|win64|wow32|wow64/g)
      , m = u(/ios|iphone|ipad|ipod|iwatch/g);
    (0,
    a.default)(Object.assign({
        widthParam: 1334,
        heightParam: 750,
        callback: function() {
            document.getElementById("frame").style.visibility = "visible"
        }
    })),
    g || r.default.init(),
    n.default.prototype.focus = function(e) {
        var c = void 0;
        m && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type && "month" !== e.type && "number" !== e.type ? (c = e.value.length,
        e.focus(),
        e.setSelectionRange(c, c)) : e.focus()
    }
    ,
    n.default.attach(document.body);
    var v = document.getElementById("vconsole");
    window.location.search.indexOf("debug=1") > -1 || -1 === window.location.pathname.indexOf("event_preview") && window.location.host.indexOf("-test") > -1 ? (v.addEventListener("load", (function() {
        window.vconsole = new window.VConsole
    }
    )),
    v.setAttribute("src", v.getAttribute("data-src"))) : v.parentNode.removeChild(v)
}
, , , , function(e, c, t) {
    "use strict";
    t.r(c);
    var n = t(169)
      , a = t(107);
    for (var r in a)
        "default" !== r && function(e) {
            t.d(c, e, (function() {
                return a[e]
            }
            ))
        }(r);
    var i = t(20)
      , l = Object(i.a)(a.default, n.a, n.b, !1, null, null, null);
    l.options.__file = "src/app.vue",
    c.default = l.exports
}
, function(e, c, t) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
        value: !0
    }),
    c.default = function(e) {
        e.filter("filterA", (function(e) {
            return e || e.toLowerCase()
        }
        )),
        e.filter("filterB", (function(e) {
            return e || e.toUpperCase()
        }
        ))
    }
}
, function(e, c, t) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
        value: !0
    });
    var n = g(t(674))
      , a = g(t(675))
      , r = g(t(676))
      , i = g(t(678))
      , l = g(t(238))
      , u = t(682);
    function g(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    c.default = function(e) {
        e.use(u.eventBus),
        e.component("banner", r.default),
        e.component("mhy-dialog", i.default),
        e.use(n.default),
        e.use(a.default, {
            styleOption: {
                width: "6.42rem",
                height: "3.67rem",
                backgroundImage: "url(" + t(683) + ")"
            }
        }),
        e.prototype.$model = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
              , c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
              , t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            l.default.dataStat({
                data: {
                    type: e,
                    loading_time: c,
                    target_page: t
                }
            }).then((function(e) {}
            )).catch((function(e) {
                console.log(e)
            }
            ))
        }
        ,
        e.prototype.$getBiz = function() {
            function e(e) {
                for (var c = window.location.search.substring(1).split("&"), t = 0; t < c.length; t++) {
                    var n = c[t].split("=");
                    if (n[0] === e)
                        return n[1]
                }
                return !1
            }
            return e("game_biz") ? e("game_biz") : "bh3_os"
        }
        ,
        e.prototype.$num = function(e) {
            return {
                1: 2,
                2: 3,
                3: 3,
                4: 600,
                5: 1,
                6: 3
            }[e]
        }
    }
}
, , , function(e, c, t) {
    "use strict";
    t.r(c);
    var n = t(171)
      , a = t(109);
    for (var r in a)
        "default" !== r && function(e) {
            t.d(c, e, (function() {
                return a[e]
            }
            ))
        }(r);
    t(677);
    var i = t(20)
      , l = Object(i.a)(a.default, n.a, n.b, !1, null, "57b22c0f", null);
    l.options.__file = "src/components/banner/banner.vue",
    c.default = l.exports
}
, function(e, c, t) {
    "use strict";
    var n = t(111);
    t.n(n).a
}
, function(e, c, t) {
    "use strict";
    t.r(c);
    var n = t(170)
      , a = t(112);
    for (var r in a)
        "default" !== r && function(e) {
            t.d(c, e, (function() {
                return a[e]
            }
            ))
        }(r);
    t(681);
    var i = t(20)
      , l = Object(i.a)(a.default, n.a, n.b, !1, null, "397bea80", null);
    l.options.__file = "src/components/dialogPage/dialog.vue",
    c.default = l.exports
}
, function(e, c, t) {
    e.exports = t.p + "images/tip-top.3b9274bc.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/tip-bottom.eb21be25.png"
}
, function(e, c, t) {
    "use strict";
    var n = t(114);
    t.n(n).a
}
, function(e, c, t) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
        value: !0
    });
    c.eventBus = {
        install: function(e) {
            e.prototype.$bus = new e
        }
    }
}
, function(e, c, t) {
    e.exports = t.p + "images/modal-small-bg.883745e3.png"
}
, function(e, c, t) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
        value: !0
    });
    var n = {
        install: function(e) {
            var c = new e({});
            e.prototype.$gemit = c.$emit.bind(c),
            e.prototype.$gon = c.$on.bind(c),
            e.prototype.$gonce = c.$once.bind(c),
            e.prototype.$goff = c.$off.bind(c)
        }
    };
    c.default = function(e) {
        e.use(n)
    }
}
, function(e, c, t) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
        value: !0
    });
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , a = v(t(686))
      , r = v(t(687))
      , i = v(t(695))
      , l = v(t(696))
      , u = v(t(697))
      , g = v(t(1018))
      , m = v(t(1020));
    function v(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var o = "undefined" != typeof window
      , s = function(e) {
        var c = "prd";
        return /(development|test)/.test(e) ? c = "test" : o && /webstatic-sea/gi.test(window.location.hostname) && (c = "sea"),
        c
    }
      , f = o && /game_biz=/gi.test(window.location.search) ? window.location.search.match(/game_biz=[a-z0-9_]+/gi)[0].replace("game_biz=", "") : "global"
      , p = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return e.indexOf("_") > -1 ? e.split("_")[1] : e
    }
      , d = function(e, c, t) {
        return "object" === n(e[c]) && "object" === n(e[c][t]) ? e[c][t] : {}
    }
      , h = {
        install: function(e) {
            var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , t = c.uniqueID
              , n = c.mi18nGameBiz
              , v = c.appEnv
              , f = c.initLang
              , h = c.initGameBiz
              , x = c.configs
              , y = void 0 === x ? {} : x
              , b = y.cacheTime
              , _ = void 0 === b ? 5e3 : b
              , w = y.cookieDomain
              , S = void 0 === w ? ".mihoyo.com" : w
              , k = y.maxAge
              , z = void 0 === k ? 31536e3 : k
              , C = y.langLimit
              , I = y.defaultLang
              , E = void 0 === I ? "en-us" : I
              , O = s(v)
              , M = p(h)
              , N = f ? r.default.getAppLang(f) : o ? r.default.getAppLang() : "";
            "" !== N && r.default.init(t, n, N, O, _),
            o && i.default.set("mi18nLang", N, {
                domain: S,
                path: "/",
                "max-age": "" + z
            });
            var T = new e({
                data: {
                    GAME_BIZ: h,
                    LANG: N,
                    WORD: "" !== N ? r.default.getLocaleText() : {},
                    TEXT: d(l.default, M, N),
                    IMAGE: d(u.default, M, N),
                    MEDIA: d(u.default, M, N),
                    STYLE: m.default[N]
                },
                watch: {
                    STYLE: function() {
                        this.renderStyle(this.STYLE)
                    }
                },
                created: function() {
                    this.renderStyle(this.STYLE)
                },
                methods: {
                    renderStyle: function(e) {
                        (0,
                        a.default)(e, {
                            id: "Mi18nStylesTag"
                        })
                    },
                    getLangList: function() {
                        return r.default.getLangList()
                    },
                    setLang: function(e) {
                        var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.GAME_BIZ
                          , a = p(c)
                          , v = r.default.getAppLang(e);
                        a === this.GAME_BIZ && v === this.LANG || (r.default.init(t, n, v, O),
                        this.LANG = e,
                        this.GAME_BIZ = c,
                        this.WORD = r.default.getLocaleText(),
                        this.TEXT = d(l.default, a, v),
                        this.IMAGE = d(u.default, a, v),
                        this.MEDIA = d(g.default, a, v),
                        this.STYLE = m.default[v]),
                        o ? i.default.set("mi18nLang", e, {
                            domain: S,
                            path: "/",
                            "max-age": "" + z
                        }) : this.parentThis.$cookie.set("mi18nLang", e, {
                            domain: S,
                            path: "/",
                            maxAge: "" + z
                        })
                    },
                    getLocaleText: function(e) {
                        var c = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return r.default.getLocaleText(e, c ? this.TEXT : null)
                    }
                }
            });
            Object.defineProperty(e.prototype, "$MI18N", {
                configurable: !0,
                get: function() {
                    if (this !== e.prototype && !o) {
                        T.parentThis = this;
                        var c = this.$cookie.get("mi18nLang") || f;
                        C instanceof Function ? c = C(c) : C instanceof Array && (C.includes(c) || (c = E));
                        var t = r.default.getAppLang(c);
                        T.LANG !== t && T.setLang(t)
                    }
                    return T
                }
            })
        }
    };
    c.default = function(e, c, t) {
        var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "production"
          , a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ""
          , r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : f
          , i = arguments[6];
        e.use(h, {
            uniqueID: c,
            mi18nGameBiz: t,
            appEnv: n,
            initLang: a,
            initGameBiz: r,
            configs: i
        })
    }
}
, , , , , , , , , , , function(e, c, t) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
        value: !0
    }),
    c.default = {
        global: {
            "zh-cn": {
                lang: "中文（简体）",
                role: {
                    name: "测试带目录层级的json配置"
                },
                time: {
                    description: '一些跟语言有"关联的数值内容也可以配置在这里'
                }
            }
        }
    }
}
, function(e, c, t) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
        value: !0
    }),
    c.default = {
        global: {
            "de-de": {
                already: t(698),
                "btn-back": t(699),
                "btn-confirm": t(700),
                "btn-home": t(701),
                "btn-history": t(702),
                "btn-rule": t(703),
                "btn-send": t(704),
                "dialog-name-1": t(705),
                "btn-send-f": t(706),
                "dialog-name-2": t(707),
                "guide-2": t(708),
                "guide-1": t(709),
                "guide-3": t(710),
                "guide-5": t(711),
                "h-1-f": t(712),
                "guide-4": t(713),
                "h-1": t(714),
                "h-2": t(715),
                "h-2-f": t(716),
                "h-3-f": t(717),
                "h-4-f": t(718),
                "h-3": t(719),
                "h-4": t(720),
                "h-5-f": t(721),
                "h-5": t(722),
                "h-6-f": t(723),
                "h-6": t(724),
                "h-7-f": t(725),
                "h-7": t(726),
                "modal-history": t(727),
                "modal-rule": t(728),
                skip: t(729)
            },
            "en-us": {
                already: t(730),
                "btn-back": t(731),
                "btn-confirm": t(732),
                "btn-history": t(733),
                "btn-home": t(734),
                "btn-rule": t(735),
                "btn-send-f": t(736),
                "btn-send": t(737),
                "dialog-name-1": t(738),
                "dialog-name-2": t(739),
                "guide-1": t(740),
                "guide-2": t(741),
                "guide-3": t(742),
                "guide-4": t(743),
                "guide-5": t(744),
                "h-1-f": t(745),
                "h-1": t(746),
                "h-2-f": t(747),
                "h-2": t(748),
                "h-3-f": t(749),
                "h-3": t(750),
                "h-4-f": t(751),
                "h-4": t(752),
                "h-5-f": t(753),
                "h-5": t(754),
                "h-6-f": t(755),
                "h-6": t(756),
                "h-7-f": t(757),
                "h-7": t(758),
                "modal-history": t(759),
                "modal-rule": t(760),
                skip: t(761)
            },
            "id-id": {
                already: t(762),
                "btn-back": t(763),
                "btn-confirm": t(764),
                "btn-history": t(765),
                "btn-home": t(766),
                "btn-rule": t(767),
                "btn-send-f": t(768),
                "btn-send": t(769),
                "dialog-name-1": t(770),
                "dialog-name-2": t(771),
                "guide-1": t(772),
                "guide-2": t(773),
                "guide-3": t(774),
                "guide-4": t(775),
                "guide-5": t(776),
                "h-1-f": t(777),
                "h-1": t(778),
                "h-2-f": t(779),
                "h-2": t(780),
                "h-3-f": t(781),
                "h-3": t(782),
                "h-4-f": t(783),
                "h-4": t(784),
                "h-5-f": t(785),
                "h-5": t(786),
                "h-6-f": t(787),
                "h-6": t(788),
                "h-7-f": t(789),
                "h-7": t(790),
                "modal-history": t(791),
                "modal-rule": t(792),
                skip: t(793)
            },
            "ko-kr": {
                already: t(794),
                "btn-back": t(795),
                "btn-confirm": t(796),
                "btn-history": t(797),
                "btn-home": t(798),
                "btn-rule": t(799),
                "btn-send-f": t(800),
                "btn-send": t(801),
                "dialog-name-1": t(802),
                "dialog-name-2": t(803),
                "guide-1": t(804),
                "guide-2": t(805),
                "guide-3": t(806),
                "guide-4": t(807),
                "guide-5": t(808),
                "h-1-f": t(809),
                "h-1": t(810),
                "h-2-f": t(811),
                "h-2": t(812),
                "h-3-f": t(813),
                "h-3": t(814),
                "h-4": t(815),
                "h-4-f": t(816),
                "h-5-f": t(817),
                "h-6-f": t(818),
                "h-5": t(819),
                "h-6": t(820),
                "h-7": t(821),
                "h-7-f": t(822),
                "modal-history": t(823),
                skip: t(824),
                "modal-rule": t(825)
            },
            "th-th": {
                "btn-back": t(826),
                "btn-confirm": t(827),
                already: t(828),
                "btn-history": t(829),
                "btn-send-f": t(830),
                "btn-home": t(831),
                "btn-send": t(832),
                "dialog-name-1": t(833),
                "btn-rule": t(834),
                "dialog-name-2": t(835),
                "guide-1": t(836),
                "guide-2": t(837),
                "guide-3": t(838),
                "guide-4": t(839),
                "guide-5": t(840),
                "h-1-f": t(841),
                "h-1": t(842),
                "h-2-f": t(843),
                "h-3-f": t(844),
                "h-2": t(845),
                "h-3": t(846),
                "h-4": t(847),
                "h-4-f": t(848),
                "h-5-f": t(849),
                "h-5": t(850),
                "h-6-f": t(851),
                "h-7-f": t(852),
                "h-7": t(853),
                "h-6": t(854),
                "modal-history": t(855),
                "modal-rule": t(856),
                skip: t(857)
            },
            "fr-fr": {
                already: t(858),
                "btn-back": t(859),
                "btn-confirm": t(860),
                "btn-history": t(861),
                "btn-home": t(862),
                "btn-rule": t(863),
                "btn-send-f": t(864),
                "btn-send": t(865),
                "dialog-name-1": t(866),
                "dialog-name-2": t(867),
                "guide-1": t(868),
                "guide-2": t(869),
                "guide-3": t(870),
                "guide-4": t(871),
                "guide-5": t(872),
                "h-1-f": t(873),
                "h-1": t(874),
                "h-2-f": t(875),
                "h-2": t(876),
                "h-3-f": t(877),
                "h-3": t(878),
                "h-4": t(879),
                "h-4-f": t(880),
                "h-5-f": t(881),
                "h-5": t(882),
                "h-6-f": t(883),
                "h-6": t(884),
                "h-7-f": t(885),
                "h-7": t(886),
                "modal-history": t(887),
                "modal-rule": t(888),
                skip: t(889)
            },
            "vi-vn": {
                already: t(890),
                "btn-back": t(891),
                "btn-confirm": t(892),
                "btn-history": t(893),
                "btn-home": t(894),
                "btn-send-f": t(895),
                "btn-rule": t(896),
                "btn-send": t(897),
                "dialog-name-1": t(898),
                "guide-1": t(899),
                "guide-2": t(900),
                "dialog-name-2": t(901),
                "guide-3": t(902),
                "guide-4": t(903),
                "guide-5": t(904),
                "h-1-f": t(905),
                "h-1": t(906),
                "h-2-f": t(907),
                "h-2": t(908),
                "h-3-f": t(909),
                "h-3": t(910),
                "h-4-f": t(911),
                "h-4": t(912),
                "h-5-f": t(913),
                "h-5": t(914),
                "h-6-f": t(915),
                "h-7-f": t(916),
                "h-6": t(917),
                "h-7": t(918),
                "modal-history": t(919),
                "modal-rule": t(920),
                skip: t(921)
            },
            "ja-jp": {
                already: t(922),
                "btn-back": t(923),
                "btn-history": t(924),
                "btn-confirm": t(925),
                "btn-home": t(926),
                "btn-rule": t(927),
                "btn-send-f": t(928),
                "btn-send": t(929),
                "dialog-name-1": t(930),
                "dialog-name-2": t(931),
                "guide-1": t(932),
                "guide-2": t(933),
                "guide-3": t(934),
                "guide-4": t(935),
                "guide-5": t(936),
                "h-1-f": t(937),
                "h-2-f": t(938),
                "h-1": t(939),
                "h-2": t(940),
                "h-3-f": t(941),
                "h-3": t(942),
                "h-4-f": t(943),
                "h-5-f": t(944),
                "h-4": t(945),
                "h-5": t(946),
                "h-6-f": t(947),
                "h-6": t(948),
                "h-7-f": t(949),
                "h-7": t(950),
                "modal-history": t(951),
                "modal-rule": t(952),
                skip: t(953)
            },
            "zh-tw": {
                already: t(954),
                "btn-back": t(955),
                "btn-confirm": t(956),
                "btn-history": t(957),
                "btn-home": t(958),
                "btn-rule": t(959),
                "btn-send-f": t(960),
                "btn-send": t(961),
                "dialog-name-1": t(962),
                "dialog-name-2": t(963),
                "guide-1": t(964),
                "guide-2": t(965),
                "guide-3": t(966),
                "guide-4": t(967),
                "guide-5": t(968),
                "h-1-f": t(969),
                "h-1": t(970),
                "h-2-f": t(971),
                "h-2": t(972),
                "h-3-f": t(973),
                "h-3": t(974),
                "h-4-f": t(975),
                "h-4": t(976),
                "h-5-f": t(977),
                "h-5": t(978),
                "h-6-f": t(979),
                "h-6": t(980),
                "h-7-f": t(981),
                "h-7": t(982),
                "modal-rule": t(983),
                "modal-history": t(984),
                skip: t(985)
            },
            "zh-cn": {
                "btn-back": t(986),
                already: t(987),
                "btn-confirm": t(988),
                "btn-history": t(989),
                "btn-home": t(990),
                "btn-rule": t(991),
                "btn-send-f": t(992),
                "btn-send": t(993),
                "dialog-name-1": t(994),
                "dialog-name-2": t(995),
                "guide-1": t(996),
                "guide-2": t(997),
                "guide-3": t(998),
                "guide-4": t(999),
                "guide-5": t(1e3),
                "h-1-f": t(1001),
                "h-1": t(1002),
                "h-2-f": t(1003),
                "h-2": t(1004),
                "h-3-f": t(1005),
                "h-3": t(1006),
                "h-4-f": t(1007),
                "h-4": t(1008),
                "h-5-f": t(1009),
                "h-5": t(1010),
                "h-6-f": t(1011),
                "h-6": t(1012),
                "h-7-f": t(1013),
                "h-7": t(1014),
                "modal-history": t(1015),
                "modal-rule": t(1016),
                skip: t(1017)
            }
        }
    }
}
, function(e, c, t) {
    e.exports = t.p + "images/already.ce01bc6b.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-back.e34edc9f.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-confirm.f926165f.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-home.c4c459e9.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-history.be5e4fd3.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-rule.46575d85.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-send.5431360b.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/dialog-name-1.91fa5697.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-send-f.22396334.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/dialog-name-2.91012993.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-2.457a89bd.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-1.0800d8e6.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-3.987a8307.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-5.b5e45493.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-1-f.2b19b9a6.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-4.99d07aa7.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-1.1789c122.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-2.1fa2e4a1.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-2-f.4bb10646.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-3-f.35b7bc79.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-4-f.b15e58be.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-3.b2921c6e.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-4.ad3cd8a4.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-5-f.3c512368.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-5.359ea66d.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-6-f.e5ccfec9.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-6.e64b0a92.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-7-f.b8dcfd04.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-7.f7e2e6b8.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/modal-history.cb3ff80d.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/modal-rule.f8ec7a49.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/skip.3081fe53.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/already.da6a1aed.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-back.4917938f.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-confirm.dea1277c.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-history.474ac54c.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-home.0cec2e0c.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-rule.79ab0ed2.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-send-f.85363cdb.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-send.ccf125cd.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/dialog-name-1.91fa5697.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/dialog-name-2.91012993.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-1.d569d1c6.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-2.49f6bb73.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-3.3f2f98f1.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-4.2baf3a1c.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-5.c15d20ef.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-1-f.9aac0310.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-1.9826e002.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-2-f.bac358d7.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-2.61582773.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-3-f.f25d472c.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-3.db7f88be.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-4-f.b0045acd.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-4.9fe63fc5.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-5-f.47d738f1.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-5.5235e969.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-6-f.ad28808b.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-6.46815630.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-7-f.726a4b81.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-7.4cf71453.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/modal-history.1c67e6f4.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/modal-rule.375b61c8.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/skip.912f4b27.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/already.4a757c04.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-back.f1d55573.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-confirm.47ad8646.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-history.c3f7c24f.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-home.2073f962.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-rule.b86932fa.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-send-f.14dd3b1c.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-send.c6931354.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/dialog-name-1.91fa5697.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/dialog-name-2.91012993.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-1.351eb734.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-2.016cbd3b.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-3.f6312093.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-4.4d3555fc.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-5.d5b71d36.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-1-f.1fdeb128.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-1.7af06ee8.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-2-f.c37766a5.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-2.697fbd7f.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-3-f.81b370c8.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-3.6edfb1d6.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-4-f.65021365.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-4.f8ce0057.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-5-f.0bd466c5.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-5.0ff1a3a8.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-6-f.43f5cf52.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-6.b8fd9ee2.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-7-f.418783a1.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-7.8b2a14b0.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/modal-history.1c67e6f4.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/modal-rule.8cfab233.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/skip.78e430a0.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/already.379a8de7.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-back.08b3cf9e.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-confirm.3a342fcb.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-history.70edd16e.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-home.70fcf3c3.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-rule.4e09fff5.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-send-f.c584bcae.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-send.5db9faab.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/dialog-name-1.e73c6f25.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/dialog-name-2.35f7d1f7.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-1.f7159ef9.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-2.e5aee337.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-3.c725c4e2.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-4.80b15a57.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-5.08b38f5f.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-1-f.222c8028.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-1.6f66d4da.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-2-f.f6f6a5e1.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-2.7da8ca3c.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-3-f.388f63a1.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-3.33e0dbbb.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-4.cbae01f9.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-4-f.366d8678.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-5-f.8e228184.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-6-f.ca4f26b7.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-5.447690c6.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-6.dac90495.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-7.2ec06e97.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-7-f.5ec96ed4.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/modal-history.e5fb6fce.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/skip.912f4b27.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/modal-rule.55fe2e6b.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-back.f2860dc8.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-confirm.edd61666.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/already.00ab1e5e.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-history.0bf83ad2.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-send-f.02c57423.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-home.f6dfbcdc.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-send.68bdc311.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/dialog-name-1.91fa5697.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-rule.410fc66d.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/dialog-name-2.91012993.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-1.e0446ec4.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-2.d990726a.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-3.b15c7239.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-4.06c0b150.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-5.d412fa46.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-1-f.183c200c.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-1.2f7c952d.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-2-f.d95fa43e.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-3-f.10b01033.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-2.17bfd8e9.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-3.e8ffbc00.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-4.2e75b792.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-4-f.8d0ef396.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-5-f.8a8420eb.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-5.795772fb.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-6-f.73c4dda2.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-7-f.b5f1a91a.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-7.9035f9e3.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-6.85e32608.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/modal-history.9d4c2bb3.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/modal-rule.345cede9.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/skip.18da507a.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/already.b401d59d.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-back.f91ab837.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-confirm.408902a7.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-history.3630ddae.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-home.0d61028e.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-rule.bbca97a5.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-send-f.cd4cdb11.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-send.8648f488.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/dialog-name-1.91fa5697.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/dialog-name-2.91012993.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-1.76c01437.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-2.6d9935d8.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-3.101842ed.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-4.2b9ce7d9.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-5.66dc84e1.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-1-f.c56e393f.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-1.da0f99d3.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-2-f.f5982a0e.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-2.345a10dd.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-3-f.34838796.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-3.9a3c50e6.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-4.067504f3.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-4-f.d6b0b5ed.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-5-f.124687ed.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-5.9812ab06.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-6-f.ff99e8cc.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-6.219065d2.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-7-f.45271411.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-7.26e2db82.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/modal-history.52c8923f.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/modal-rule.559aaaf4.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/skip.b86a78e5.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/already.2124525a.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-back.6c545aa5.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-confirm.8cbd17d7.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-history.e451c254.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-home.0cec2e0c.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-send-f.5f3a0faa.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-rule.0710d107.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-send.345e9a74.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/dialog-name-1.fb752e66.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-1.5054ffaa.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-2.8b5638ab.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/dialog-name-2.91012993.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-3.ec3fe388.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-4.5f22333e.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-5.2284d865.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-1-f.f9f13103.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-1.7c534c4d.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-2-f.3d17eaac.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-2.49d460ed.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-3-f.ca0be9b5.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-3.565fd7e0.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-4-f.05333d0e.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-4.3d2c3443.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-5-f.5dcd2091.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-5.b2f301d5.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-6-f.31c53ceb.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-7-f.7812ca97.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-6.46e2af19.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-7.595c74e3.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/modal-history.8261c40e.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/modal-rule.be95b3bf.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/skip.8ec6adba.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/already.40c19e4e.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-back.4fa32034.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-history.c5475f8c.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-confirm.60699b5e.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-home.ca012ae8.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-rule.67997506.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-send-f.ddddf3fb.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-send.f7132547.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/dialog-name-1.7bbfb68d.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/dialog-name-2.6acceaa2.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-1.44fba02e.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-2.f701316f.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-3.b66ba180.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-4.04ad71b6.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-5.98fd3104.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-1-f.8d7e28b8.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-2-f.8cf00636.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-1.8cb1f97c.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-2.32fa5dd8.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-3-f.7d3968fd.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-3.62626470.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-4-f.79916aa6.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-5-f.755ad5b5.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-4.02bea85f.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-5.8bfa5657.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-6-f.02b4a1a3.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-6.47ab4a88.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-7-f.76515482.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-7.b8156e7e.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/modal-history.79d86a92.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/modal-rule.3201f848.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/skip.2a7b768e.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/already.6614d7e0.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-back.3436419f.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-confirm.686724d7.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-history.ead49c33.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-home.17246b25.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-rule.64553229.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-send-f.54a6f080.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-send.156ec75f.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/dialog-name-1.415b1a51.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/dialog-name-2.fcdb712a.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-1.003bb247.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-2.a646108d.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-3.840a656c.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-4.1b71a298.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-5.f7baa204.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-1-f.57f1ddf7.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-1.06e8e3f3.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-2-f.61b6c2d8.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-2.e74166aa.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-3-f.3ba70dd1.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-3.e67cf13a.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-4-f.1e07a97e.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-4.c7ece95c.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-5-f.52a51d7b.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-5.f17cca97.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-6-f.57e9547e.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-6.798e96df.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-7-f.44bc6761.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-7.230a5205.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/modal-rule.062883f9.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/modal-history.6f51a8b1.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/skip.81fd754a.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-back.3436419f.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/already.6614d7e0.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-confirm.22651b34.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-history.2816ee78.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-home.98c43745.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-rule.b81acdde.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-send-f.54a6f080.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/btn-send.156ec75f.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/dialog-name-1.415b1a51.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/dialog-name-2.df6067cf.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-1.a2f34b94.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-2.8769bb30.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-3.57d5d297.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-4.9e274a6c.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/guide-5.c4db977e.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-1-f.d23da626.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-1.8205ddc4.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-2-f.f68e202c.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-2.f1119858.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-3-f.3ba70dd1.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-3.e67cf13a.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-4-f.9207d20f.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-4.a905e9f7.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-5-f.df560b98.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-5.204daaf1.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-6-f.de059d02.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-6.a7dc51cc.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-7-f.760c6588.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/h-7.e20d7931.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/modal-history.c6e72e2b.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/modal-rule.ade3401c.png"
}
, function(e, c, t) {
    e.exports = t.p + "images/skip.7b8bc937.png"
}
, function(e, c, t) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
        value: !0
    }),
    c.default = {
        global: {
            "zh-cn": {
                demo: t(1019)
            }
        }
    }
}
, function(e, c, t) {
    "use strict";
    t.r(c),
    c.default = t.p + "medias/demo.35c8bc57.mp3"
}
, function(e, c, t) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
        value: !0
    }),
    c.default = {
        "de-de": '*{font-family:"微软雅黑", "Helvetica", sans-serif !important}\n',
        "en-us": '*{font-family:"微软雅黑", "Microsoft YaHei", "Neuropolitical", sans-serif !important}\n',
        "es-es": ".demo{font-size:12px}\n",
        "fr-fr": '*{font-family:"Helvetica", "Helvetica Neue Pro", sans-serif !important}\n',
        "id-id": '*{font-family:"微软雅黑", "Helvetica", sans-serif !important}\n',
        "ja-jp": '*{font-family:"游ゴシック体", Yu Gothic, "YuGothic", "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif !important}\n',
        "ko-kr": '*{font-family:"(환)태나루체", "Adobe 고딕 Std", sans-serif !important}\n',
        "pt-pt": ".demo{font-size:12px}\n",
        "ru-ru": ".demo{font-size:12px}\n",
        "th-th": '*{font-family:"TH Sarabun New", sans-serif !important}\n',
        "vi-vn": '*{font-family:"Corbel", "Tahoma Regular", "Tahoma Bold", sans-serif !important}\n',
        "zh-cn": ".demo{font-size:12px}\n",
        "zh-tw": ".demo{font-size:12px}\n"
    }
}
, function(e, c, t) {}
]));
